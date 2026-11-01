import { Component, ChangeDetectionStrategy, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../core/data';
import { GithubService } from '../../core/github.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="pt-12 sm:pt-16 pb-6 sm:pb-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="About Jhansi Lakshmi Prasad">
      <!-- Section Tag & Heading -->
      <div class="mb-8 sm:mb-10 rv">
        <div class="font-mono text-xs uppercase tracking-widest text-[#77756f] mb-2">01 — About</div>
        <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d]">
          Engineer behind the <span class="font-serif italic text-[#77756f]">surface.</span>
        </h2>
      </div>

      <!-- 3-Column Grid Layout: left bio, center lanyard card, right facts -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px_1fr] gap-8 items-stretch">
        
        <!-- Left Column: Summary & Bio -->
        <div class="rv flex flex-col justify-between p-8 rounded-3xl bg-white border border-[rgba(13,13,13,0.1)] shadow-sm">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d] mb-4">
              Hi, I'm {{ profile.name }}.
            </h3>
            <p class="text-[#3a3a3a] text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {{ profile.resumeSummary }}
            </p>
            <p class="text-[#77756f] text-xs sm:text-sm leading-relaxed border-l-2 border-[rgba(13,13,13,0.1)] pl-4 italic">
              {{ profile.shortQuote }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3 mt-8 pt-6 border-t border-[rgba(13,13,13,0.1)]">
            <a 
              [href]="profile.resumePath" 
              download="Jhansi_Lakshmi_Prasad_Resume.pdf"
              class="px-4 py-2 rounded-full bg-[#0d0d0d] text-white text-xs font-medium hover:bg-neutral-800 transition-all active:scale-95"
            >
              Résumé ↓
            </a>
            @if (profile.github) {
              <a 
                [href]="profile.github" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="px-4 py-2 rounded-full border border-[rgba(13,13,13,0.1)] text-[#0d0d0d] hover:border-[#0d0d0d] text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <span class="text-[10px] text-[#77756f]">({{ gh().totalContributions }})</span>
                <span>↗</span>
              </a>
            }
            @if (profile.linkedin) {
              <a 
                [href]="profile.linkedin" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="px-4 py-2 rounded-full border border-[rgba(13,13,13,0.1)] text-[#0d0d0d] hover:border-[#0d0d0d] text-xs font-medium transition-all active:scale-95"
              >
                LinkedIn ↗
              </a>
            }
          </div>
        </div>

        <!-- Center Column: Hanging Lanyard ID Card -->
        <div class="rv flex flex-col items-center justify-start relative select-none">
          <!-- Lanyard Strap with Scrolling Name -->
          <div class="w-8 h-14 bg-[#0d0d0d] rounded-t-sm relative overflow-hidden flex items-center justify-center shadow-inner">
            <div class="absolute inset-0 flex flex-col justify-around opacity-40 text-[7px] text-white font-mono uppercase tracking-tighter leading-none py-1">
              <span>ENG</span>
              <span>DEV</span>
            </div>
          </div>
          <!-- Metal Clip Connector -->
          <div class="w-10 h-3 bg-neutral-400 rounded-sm mb-1 border border-neutral-500 shadow-sm"></div>

          <!-- Flip Card Container -->
          <div 
            class="card-scene w-[290px] h-[410px] cursor-pointer"
            (mouseenter)="isFlipped.set(true)"
            (mouseleave)="isFlipped.set(false)"
            (click)="toggleFlip()"
            (keydown.enter)="toggleFlip()"
            (keydown.space)="toggleFlip()"
            tabindex="0"
            role="region"
            aria-label="Interactive Developer ID Card. Press enter or click to flip"
          >
            <div class="card-inner w-full h-full relative" [class.is-flipped]="isFlipped()">
              
              <!-- FRONT OF CARD -->
              <div class="card-face card-front absolute inset-0 bg-white rounded-3xl p-5 border border-neutral-200 shadow-xl flex flex-col justify-between">
                <!-- Top Header Band -->
                <div class="bg-[#0d0d0d] text-white text-[10px] font-mono tracking-widest text-center py-1.5 rounded-lg font-bold">
                  PLATFORM ID • DEVOPS & CLOUD SRE
                </div>

                <!-- Portrait Photo in frame -->
                <div class="flex flex-col items-center my-auto">
                  <div class="w-28 h-36 rounded-2xl overflow-hidden border-2 border-neutral-200 shadow-inner group bg-neutral-50">
                    <img 
                      src="portrait-bust.webp" 
                      [alt]="profile.name"
                      class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 class="font-bold text-base text-[#0d0d0d] tracking-tight mt-3 text-center">
                    {{ profile.name }}
                  </h4>
                  <span class="text-[11px] font-mono text-[#77756f] text-center font-medium">
                    {{ profile.cardRole }}
                  </span>
                </div>

                <!-- Info Grid -->
                <div class="border-t border-neutral-100 pt-3 grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div>
                    <span class="text-[#77756f] block">ID NO:</span>
                    <span class="font-semibold text-[#0d0d0d]">{{ profile.idNumber }}</span>
                  </div>
                  <div>
                    <span class="text-[#77756f] block">VALID:</span>
                    <span class="font-semibold text-[#0d0d0d]">{{ profile.validFrom }} — {{ profile.validTill }}</span>
                  </div>
                </div>

                <!-- Bottom Barcode & Hologram -->
                <div class="border-t border-neutral-100 pt-2 flex items-center justify-between">
                  <div class="flex items-center gap-[2px] h-5 opacity-70">
                    <span class="w-[2px] h-full bg-[#0d0d0d]"></span>
                    <span class="w-[1px] h-full bg-[#0d0d0d]"></span>
                    <span class="w-[3px] h-full bg-[#0d0d0d]"></span>
                    <span class="w-[1px] h-full bg-[#0d0d0d]"></span>
                    <span class="w-[4px] h-full bg-[#0d0d0d]"></span>
                    <span class="w-[2px] h-full bg-[#0d0d0d]"></span>
                    <span class="w-[1px] h-full bg-[#0d0d0d]"></span>
                    <span class="w-[3px] h-full bg-[#0d0d0d]"></span>
                  </div>
                  <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-neutral-300 via-neutral-100 to-neutral-400 border border-neutral-300 shadow-sm flex items-center justify-center text-[7px] font-mono font-bold text-neutral-600">
                    JP
                  </div>
                </div>
              </div>

              <!-- BACK OF CARD -->
              <div class="card-face card-back absolute inset-0 bg-neutral-900 text-white rounded-3xl p-6 border border-neutral-800 shadow-xl flex flex-col justify-between">
                <div>
                  <div class="font-mono text-[9px] uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-2 mb-3 flex items-center justify-between">
                    <span>Security Credentials</span>
                    <span class="text-neutral-500 font-bold">JP-818</span>
                  </div>
                  <ul class="text-[11px] space-y-2 text-neutral-300 font-sans">
                    <li class="flex items-start gap-1.5">
                      <span class="text-neutral-500 font-mono">01.</span>
                      <span>DevOps & Cloud Platform Engineer</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-neutral-500 font-mono">02.</span>
                      <span>Master of Computer Applications (Distinction: 80%)</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-neutral-500 font-mono">03.</span>
                      <span>Core focus: Kubernetes, Terraform, ArgoCD, AWS & Observability</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-neutral-500 font-mono">04.</span>
                      <span>AWS Certified, CKA Track & HashiCorp Terraform Specialist</span>
                    </li>
                  </ul>
                </div>

                <div class="border-t border-neutral-800 pt-3">
                  <div class="flex items-baseline justify-between mb-1.5">
                    <div class="font-bold text-sm tracking-tight text-white font-mono">
                      {{ profile.backName }}
                    </div>
                    <div class="font-mono text-[10px] text-neutral-400">
                      ID: <span class="text-neutral-200 font-semibold">{{ profile.idNumber }}</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between font-mono text-[9px] text-neutral-400 mb-2">
                    <span>VALID FROM: <strong class="text-neutral-200 font-semibold">{{ profile.validFrom }}</strong></span>
                    <span>VALID TILL: <strong class="text-neutral-200 font-semibold text-sm leading-none">{{ profile.validTill }}</strong></span>
                  </div>
                  <div class="text-[9px] font-mono text-neutral-500 pt-1 border-t border-neutral-800/80">
                    If found, say hello • {{ profile.email }}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Right Column: Quick Facts -->
        <div class="rv flex flex-col justify-between p-8 rounded-3xl bg-white border border-[rgba(13,13,13,0.1)] shadow-sm">
          <div>
            <h3 class="text-xs font-mono uppercase tracking-widest text-[#77756f] mb-6">
              Quick Facts
            </h3>
            
            <dl class="space-y-4 text-xs sm:text-sm">
              <div class="border-b border-[rgba(13,13,13,0.1)] pb-3">
                <dt class="text-[#77756f] text-xs font-mono">Current Role</dt>
                <dd class="font-semibold text-[#0d0d0d] mt-0.5">Front-End Developer at {{ profile.clientEngagement }}</dd>
              </div>
              <div class="border-b border-[rgba(13,13,13,0.1)] pb-3">
                <dt class="text-[#77756f] text-xs font-mono">Highest Degree</dt>
                <dd class="font-semibold text-[#0d0d0d] mt-0.5">Master of Computer Applications (80%)</dd>
              </div>
              <div class="border-b border-[rgba(13,13,13,0.1)] pb-3">
                <dt class="text-[#77756f] text-xs font-mono">Undergraduate Degree</dt>
                <dd class="font-semibold text-[#0d0d0d] mt-0.5">Bachelor of Computer Applications (77%)</dd>
              </div>
              <div class="border-b border-[rgba(13,13,13,0.1)] pb-3">
                <dt class="text-[#77756f] text-xs font-mono">Direct Email</dt>
                <dd class="font-semibold text-[#0d0d0d] mt-0.5 font-mono text-xs">{{ profile.email }}</dd>
              </div>
              <div>
                <dt class="text-[#77756f] text-xs font-mono">Mobile</dt>
                <dd class="font-semibold text-[#0d0d0d] mt-0.5 font-mono text-xs">{{ profile.phone }}</dd>
              </div>
            </dl>
          </div>

          <div class="mt-8 pt-4 text-xs text-[#77756f] font-mono flex items-center justify-between border-t border-[rgba(13,13,13,0.1)]">
            <span>Availability: Open for Opportunities</span>
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>

      </div>

      <!-- LIVE GITHUB CONTRIBUTIONS ACTIVITY WIDGET -->
      <div class="mt-8 rv">
        <a 
          [href]="githubService.profileUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group block p-6 sm:p-8 rounded-3xl bg-white border border-[rgba(13,13,13,0.1)] hover:border-[#0d0d0d] shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <!-- Top Row: GitHub Brand + Live Stats -->
          <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[rgba(13,13,13,0.1)]">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-[#0d0d0d] text-white flex items-center justify-center p-2 shadow-inner">
                <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>

              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-base text-[#0d0d0d] tracking-tight group-hover:text-black">
                    GitHub Profile Activity
                  </h4>
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Sync
                  </span>
                </div>
                <div class="font-mono text-xs text-[#77756f]">
                  &#64;{{ githubService.username }} • {{ gh().publicRepos }} public repositories • {{ gh().totalContributions }} contributions
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 text-xs font-mono text-[#0d0d0d] font-semibold">
              <span>View GitHub</span>
              <span class="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </div>
          </div>

          <!-- Heatmap Matrix: 53 Columns x 7 Days matching GitHub 1:1 -->
          <div class="pt-6 overflow-x-auto no-scrollbar">
            <div class="min-w-[720px]">
              <div class="flex items-center justify-between text-xs font-mono text-[#77756f] mb-3">
                <span class="font-semibold text-[#0d0d0d]">{{ gh().totalContributions }} contributions in the last year</span>
                <div class="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <span class="w-2.5 h-2.5 rounded-xs bg-[#ebedf0] border border-[rgba(0,0,0,0.05)]"></span>
                  <span class="w-2.5 h-2.5 rounded-xs bg-[#9be9a8]"></span>
                  <span class="w-2.5 h-2.5 rounded-xs bg-[#40c463]"></span>
                  <span class="w-2.5 h-2.5 rounded-xs bg-[#30a14e]"></span>
                  <span class="w-2.5 h-2.5 rounded-xs bg-[#216e39]"></span>
                  <span>More</span>
                </div>
              </div>

              <!-- Month Headers with exact GitHub column spans -->
              <div class="flex text-[10px] font-mono text-[#77756f] mb-1.5 pl-7">
                @for (m of gh().months; track m.name + $index) {
                  <div [style.flex]="m.colSpan" class="text-left truncate">
                    {{ m.name }}
                  </div>
                }
                <!-- Trailing spacer for col 53 -->
                <div style="flex: 1"></div>
              </div>

              <!-- Main Calendar with Day-of-week labels on the left -->
              <div class="flex gap-2 items-center">
                <!-- Day-of-week labels matching GitHub -->
                <div class="flex flex-col justify-between h-[82px] text-[9px] font-mono text-[#77756f] select-none py-[1px]">
                  <span></span>
                  <span>Mon</span>
                  <span></span>
                  <span>Wed</span>
                  <span></span>
                  <span>Fri</span>
                  <span></span>
                </div>

                <!-- 53-Column x 7-Row Contribution Grid -->
                <div class="grid grid-flow-col grid-rows-7 gap-[3px] p-2.5 rounded-2xl bg-[#f4f2ee] border border-[rgba(13,13,13,0.06)] flex-1">
                  @for (day of gh().contributions; track day.date + '-' + day.col + '-' + day.row) {
                    @if (day.level === -1) {
                      <div class="w-2.5 h-2.5 opacity-0 pointer-events-none"></div>
                    } @else {
                      <div
                        class="w-2.5 h-2.5 rounded-xs transition-transform duration-200 hover:scale-125 hover:z-10 cursor-pointer"
                        [ngClass]="getDayColorClass(day.level)"
                        [attr.title]="day.tooltip || (day.count + ' contributions on ' + day.date)"
                      ></div>
                    }
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    .card-scene {
      perspective: 1000px;
    }
    .card-inner {
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      transform-style: preserve-3d;
    }
    .card-inner.is-flipped {
      transform: rotateY(180deg);
    }
    .card-face {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .card-back {
      transform: rotateY(180deg);
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class AboutComponent implements OnInit {
  readonly profile = PROFILE;
  readonly githubService = inject(GithubService);

  isFlipped = signal<boolean>(false);
  readonly gh = this.githubService.stats;

  ngOnInit(): void {
    this.githubService.fetchStats();
  }

  toggleFlip(): void {
    this.isFlipped.update((v) => !v);
  }

  getDayColorClass(level: number): string {
    switch (level) {
      case 1:
        return 'bg-[#9be9a8]';
      case 2:
        return 'bg-[#40c463]';
      case 3:
        return 'bg-[#30a14e]';
      case 4:
        return 'bg-[#216e39]';
      case 0:
      default:
        return 'bg-[#ebedf0] border border-[rgba(0,0,0,0.04)]';
    }
  }
}
