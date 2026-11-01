import { Injectable, signal } from '@angular/core';

export interface HackerRankBadge {
  badge_name: string;
  category_name?: string;
  stars: number;
  total_stars: number;
  current_points: number;
  solved: number;
  total_challenges: number;
  hacker_rank?: number;
}

export interface HackerRankProfile {
  username: string;
  profileUrl: string;
  badges: HackerRankBadge[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HackerRankService {
  readonly username = 'jhansiprasad1204';
  readonly profileUrl = 'https://www.hackerrank.com/profile/jhansiprasad1204';

  profile = signal<HackerRankProfile>({
    username: this.username,
    profileUrl: this.profileUrl,
    badges: [
      {
        badge_name: 'JavaScript',
        category_name: 'Language Proficiency',
        stars: 3,
        total_stars: 5,
        current_points: 120,
        solved: 15,
        total_challenges: 50,
        hacker_rank: 450120
      },
      {
        badge_name: 'Problem Solving',
        category_name: 'Algorithms & Data Structures',
        stars: 2,
        total_stars: 6,
        current_points: 95,
        solved: 12,
        total_challenges: 560,
        hacker_rank: 820150
      }
    ],
    loading: false
  });

  fetchBadges(): void {
    if (typeof window === 'undefined') return;
  }
}

