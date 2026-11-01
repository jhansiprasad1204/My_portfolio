const fs = require('fs');

async function syncGitHubContributions(username = 'jhansiprasad1204') {
  console.log(`[sync-github] Fetching live contributions for ${username}...`);

  const url = `https://github.com/users/${username}/contributions`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch from GitHub: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();

  // 1. Parse total contributions count
  const totalMatch = html.match(/([0-9,]+)\s+contributions\s+in\s+the\s+last\s+year/i);
  const totalContributions = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0;
  console.log(`[sync-github] Total contributions: ${totalContributions}`);

  // 2. Parse tooltips: <tool-tip ... for="contribution-day-component-C-R">...Text...</tool-tip>
  const tooltips = new Map();
  const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/gi;
  let ttMatch;
  while ((ttMatch = tooltipRegex.exec(html)) !== null) {
    const targetId = ttMatch[1];
    const text = ttMatch[2].trim().replace(/\s+/g, ' ');
    tooltips.set(targetId, text);
  }

  // 3. Parse td elements containing data-date
  const tdRegex = /<td\b([^>]*\bdata-date="([^"]+)"[^>]*)>(?:([\s\S]*?)<\/td>)?/gi;
  let tdMatch;
  const rawDateMap = new Map();

  while ((tdMatch = tdRegex.exec(html)) !== null) {
    const attrs = tdMatch[1];
    const date = tdMatch[2];

    const levelMatch = attrs.match(/data-level="([0-9]+)"/);
    const level = levelMatch ? parseInt(levelMatch[1], 10) : 0;

    const idMatch = attrs.match(/id="([^"]+)"/);
    const id = idMatch ? idMatch[1] : '';

    let tooltip = (id && tooltips.get(id)) || '';
    if (!tooltip) {
      tooltip = level > 0 ? `${level} contribution(s) on ${date}` : `No contributions on ${date}`;
    }

    const countMatch = tooltip.match(/^([0-9]+)\s+contribution/i);
    const count = countMatch ? parseInt(countMatch[1], 10) : (level > 0 ? level : 0);

    rawDateMap.set(date, { date, count, level, tooltip });
  }

  console.log(`[sync-github] Scraped ${rawDateMap.size} unique contribution days`);

  // 4. Construct exact 53-week x 7-day column-major matrix
  // CSS Grid with `grid-flow-col grid-rows-7` requires:
  // Col 0 (rows 0..6), Col 1 (rows 0..6), ..., Col 52 (rows 0..6)
  const baseSunday = new Date('2025-11-02T00:00:00Z');
  const matrix = [];

  for (let c = 0; c < 53; c++) {
    for (let r = 0; r < 7; r++) {
      const dayOffset = c * 7 + r;
      const cellDate = new Date(baseSunday.getTime() + dayOffset * 24 * 60 * 60 * 1000);
      const dateStr = cellDate.toISOString().split('T')[0];

      const match = rawDateMap.get(dateStr);
      if (match) {
        matrix.push({
          date: dateStr,
          count: match.count,
          level: match.level,
          row: r,
          col: c,
          tooltip: match.tooltip
        });
      } else {
        // Future day or empty cell
        matrix.push({
          date: dateStr,
          count: 0,
          level: -1,
          row: r,
          col: c,
          tooltip: ''
        });
      }
    }
  }

  // 5. Fetch user public repositories count
  let publicRepos = 8;
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: { 'User-Agent': 'Node.js' }
    });
    if (userRes.ok) {
      const userData = await userRes.json();
      if (typeof userData.public_repos === 'number') {
        publicRepos = userData.public_repos;
      }
    }
  } catch (e) {
    console.warn('[sync-github] Could not fetch public_repos from API:', e.message);
  }

  const payload = {
    username,
    totalContributions,
    publicRepos,
    updatedAt: new Date().toISOString(),
    contributions: matrix
  };

  fs.writeFileSync('public/github-contributions.json', JSON.stringify(payload, null, 2), 'utf8');
  console.log(`[sync-github] Saved exact 53x7 matrix (${matrix.length} cells) to public/github-contributions.json`);

  const activeDays = matrix.filter(d => d.count > 0);
  console.log(`[sync-github] Active contribution days: ${activeDays.length}`);
  activeDays.forEach(a => console.log(`  -> ${a.date} (col ${a.col}, row ${a.row}): ${a.tooltip}`));
}

syncGitHubContributions().catch(err => {
  console.error('[sync-github] Error:', err);
  process.exit(1);
});
