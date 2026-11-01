import { Injectable, signal } from '@angular/core';

export interface CodingProfile {
  id: string;
  platform: string;
  username: string;
  url: string;
  status: string;
  iconType: 'codechef' | 'geeksforgeeks';
  headline: string;
  subline: string;
  metricLabel: string;
  metricValue: string;
}

@Injectable({
  providedIn: 'root'
})
export class CodingProfilesService {
  readonly codechef = signal<CodingProfile>({
    id: 'codechef',
    platform: 'CodeChef',
    username: 'jhansiprasad1204',
    url: 'https://www.codechef.com/users/jhansiprasad1204',
    status: 'Active Profile',
    iconType: 'codechef',
    headline: 'Competitive Programming',
    subline: 'Problem solving & algorithms track',
    metricLabel: 'Submissions Track',
    metricValue: 'Active'
  });

  readonly geeksforgeeks = signal<CodingProfile>({
    id: 'geeksforgeeks',
    platform: 'GeeksforGeeks',
    username: 'jhansiprasad1204',
    url: 'https://www.geeksforgeeks.org/user/jhansiprasad1204',
    status: 'Verified Profile',
    iconType: 'geeksforgeeks',
    headline: 'Core Web & Problem Solving',
    subline: 'Software Engineer learning journey',
    metricLabel: 'Coding Profile',
    metricValue: 'Verified'
  });
}

