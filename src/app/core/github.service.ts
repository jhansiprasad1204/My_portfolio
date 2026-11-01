import { Injectable, signal } from '@angular/core';

export interface GitHubDay {
  date: string;
  count: number;
  level: number; // -1: empty/hidden, 0: blank, 1, 2, 3, 4: active intensities
  row: number; // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  col: number; // 0 to 52
  tooltip?: string;
}

export interface MonthLabel {
  name: string;
  colSpan: number;
}

export interface GitHubStats {
  username: string;
  totalContributions: number;
  publicRepos: number;
  followers: number;
  months: MonthLabel[];
  contributions: GitHubDay[];
  loading: boolean;
  error: boolean;
}

export const GITHUB_MONTH_HEADERS: MonthLabel[] = [
  { name: 'Nov', colSpan: 5 },
  { name: 'Dec', colSpan: 4 },
  { name: 'Jan', colSpan: 4 },
  { name: 'Feb', colSpan: 4 },
  { name: 'Mar', colSpan: 5 },
  { name: 'Apr', colSpan: 4 },
  { name: 'May', colSpan: 5 },
  { name: 'Jun', colSpan: 4 },
  { name: 'Jul', colSpan: 4 },
  { name: 'Aug', colSpan: 5 },
  { name: 'Sep', colSpan: 4 },
  { name: 'Oct', colSpan: 4 },
];

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  readonly username = 'jhansiprasad1204';
  readonly profileUrl = 'https://github.com/jhansiprasad1204';

  stats = signal<GitHubStats>({
    username: this.username,
    totalContributions: 69,
    publicRepos: 8,
    followers: 0,
    months: GITHUB_MONTH_HEADERS,
    contributions: [],
    loading: true,
    error: false,
  });

  fetchStats(): void {
    if (typeof window === 'undefined') return;

    this.stats.update((s) => ({ ...s, loading: true }));

    // 1. Fetch live user profile stats from GitHub API
    fetch(`https://api.github.com/users/${this.username}?t=${Date.now()}`, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`User API error ${res.status}`);
        return res.json();
      })
      .then((user) => {
        if (user) {
          this.stats.update((s) => ({
            ...s,
            publicRepos: typeof user.public_repos === 'number' ? user.public_repos : s.publicRepos,
            followers: typeof user.followers === 'number' ? user.followers : s.followers,
          }));
        }
      })
      .catch((err) => console.warn('GitHub user API fetch error:', err));

    // 2. Fetch live contributions from auto-synced JSON (cache-busted)
    fetch(`github-contributions.json?t=${Date.now()}`, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load local contributions JSON');
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.contributions)) {
          this.stats.update((s) => ({
            ...s,
            totalContributions:
              typeof data.totalContributions === 'number'
                ? data.totalContributions
                : s.totalContributions,
            publicRepos: typeof data.publicRepos === 'number' ? data.publicRepos : s.publicRepos,
            contributions: data.contributions,
            loading: false,
            error: false,
          }));
        }
      })
      .catch(() => {
        // Fallback: fetch from public contributions proxy
        fetch(`https://github-contributions-api.jogruber.de/v4/${this.username}`)
          .then((res) => res.json())
          .then((apiData) => {
            if (apiData && Array.isArray(apiData.contributions)) {
              this.reconstructFromApi(apiData.contributions);
            }
          })
          .catch(() => {
            this.stats.update((s) => ({ ...s, loading: false, error: true }));
          });
      });
  }

  private reconstructFromApi(
    rawContributions: Array<{ date: string; count: number; level: number }>,
  ): void {
    const map = new Map<string, { count: number; level: number }>();
    for (const item of rawContributions) {
      if (item && item.date) {
        map.set(item.date, item);
      }
    }

    const grid: GitHubDay[] = [];
    const baseSunday = new Date('2025-11-02'); // GitHub's 53-week start date
    let total = 0;

    for (let c = 0; c < 53; c++) {
      for (let r = 0; r < 7; r++) {
        const offset = c * 7 + r;
        const cellDate = new Date(baseSunday);
        cellDate.setDate(baseSunday.getDate() + offset);
        const dateStr = cellDate.toISOString().split('T')[0];

        const match = map.get(dateStr);
        const count = match ? match.count : 0;
        const level = match ? match.level : 0;
        total += count;

        grid.push({
          date: dateStr,
          count,
          level,
          row: r,
          col: c,
          tooltip:
            count > 0 ? `${count} contributions on ${dateStr}` : `No contributions on ${dateStr}`,
        });
      }
    }

    this.stats.update((s) => ({
      ...s,
      totalContributions: total > 0 ? total : s.totalContributions,
      contributions: grid,
      loading: false,
      error: false,
    }));
  }
}

