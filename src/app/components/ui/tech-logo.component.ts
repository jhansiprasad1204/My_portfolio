import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-tech-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isBrand()) {
      <div class="tech-icon-brand" [class.tech-icon-large]="size() === 'large'" [class.tech-icon-small]="size() === 'small'">
        <svg viewBox="0 0 24 24" class="w-full h-full" fill="currentColor" [attr.aria-label]="name()">
          <path [attr.d]="getPath()" />
        </svg>
      </div>
    } @else {
      <div class="tech-icon-concept" [class.tech-icon-large]="size() === 'large'" [class.tech-icon-small]="size() === 'small'">
        <svg viewBox="0 0 24 24" class="w-full h-full stroke-current" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path [attr.d]="getConceptPath()" />
        </svg>
      </div>
    }
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .tech-icon-brand, .tech-icon-concept {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .tech-icon-small {
      width: 16px;
      height: 16px;
    }
    .tech-icon-large {
      width: 80px;
      height: 80px;
    }
  `]
})
export class TechLogoComponent {
  name = input.required<string>();
  size = input<'small' | 'medium' | 'large'>('medium');

  isBrand(): boolean {
    const brandKeys = [
      'Docker', 'Kubernetes', 'EKS', 'Helm', 'Terraform', 'Terragrunt', 'Ansible', 
      'ArgoCD', 'FluxCD', 'GitHub', 'GitLab', 'Jenkins', 'Prometheus', 'Grafana', 
      'Loki', 'Elastic', 'OpenSearch', 'Vault', 'Trivy', 'SonarQube', 'Kyverno', 
      'Python', 'AWS', 'Linux', 'Bash', 'Git', 'NGINX', 'Istio'
    ];
    return brandKeys.some((b) => this.name().toLowerCase().includes(b.toLowerCase()));
  }

  getPath(): string {
    const n = this.name().toLowerCase();
    if (n.includes('kubernetes') || n.includes('k8s') || n.includes('eks')) {
      return 'M12 2a1.5 1.5 0 00-.73.19l-7.79 4.5a1.5 1.5 0 00-.75 1.3v9.02a1.5 1.5 0 00.75 1.3l7.79 4.5a1.5 1.5 0 001.48 0l7.79-4.5a1.5 1.5 0 00.75-1.3V7.99a1.5 1.5 0 00-.75-1.3l-7.79-4.5A1.5 1.5 0 0012 2zm0 2.3l6.5 3.75v7.5L12 19.3l-6.5-3.75v-7.5L12 4.3zm0 3.7a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z';
    }
    if (n.includes('docker')) {
      return 'M13.9 8.2h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2H8.3V8.2zm-2.8 0h2.2v2.2H5.5V8.2zm5.6-2.8h2.2v2.2h-2.2V5.4zm-2.8 0h2.2v2.2H8.3V5.4zm-2.8 0h2.2v2.2H5.5V5.4zm14.8 6.2c-.4-.3-1.1-.5-2-.3-.2-.5-.5-.9-.9-1.2l-.7.6c.3.3.5.6.6 1-.7.4-1.2 1-1.3 1.7H2.2c-.1.5-.2 1.1-.2 1.7 0 3.9 3.2 7 7.2 7 4.2 0 7.6-3 8-7.1 1.2 0 2.3-.5 3-1.4l-.8-.8z';
    }
    if (n.includes('terraform') || n.includes('terragrunt')) {
      return 'M1.5 2.5l7 4.04v8.08l-7-4.04V2.5zm7.5 12.12l7-4.04v8.08l-7 4.04v-8.08zm0-12.12l7-4.04 7 4.04-7 4.04-7-4.04zm7.5 4.33l7-4.04v8.08l-7 4.04V6.83z';
    }
    if (n.includes('argocd') || n.includes('argo')) {
      return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 10.9 13 11.5 13 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z';
    }
    if (n.includes('helm')) {
      return 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V19h-2v-2.07a5.006 5.006 0 01-3.93-3.93H5v-2h2.07A5.006 5.006 0 0111 7.07V5h2v2.07a5.006 5.006 0 013.93 3.93H19v2h-2.07A5.006 5.006 0 0113 16.93zM12 9a3 3 0 100 6 3 3 0 000-6z';
    }
    if (n.includes('prometheus')) {
      return 'M12 2C7.5 6 6 8.5 6 12a6 6 0 0012 0c0-3.5-1.5-6-6-10zm0 15a3 3 0 110-6 3 3 0 010 6z';
    }
    if (n.includes('grafana') || n.includes('loki')) {
      return 'M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 13.5c-1.2 1.2-2.8 1.8-4.5 1.8-3.6 0-6.5-2.9-6.5-6.5S8.4 4.3 12 4.3s6.5 2.9 6.5 6.5c0 1.2-.3 2.3-.9 3.2l-1.1-.5z';
    }
    if (n.includes('ansible')) {
      return 'M12 2a10 10 0 100 20 10 10 0 000-20zm2.5 14.5l-1.3-3.5H10.8l-.8 2.2H8.5L11.2 6h1.6l3.5 10.5h-1.8zm-1.8-5l-.9-2.5-.9 2.5h1.8z';
    }
    if (n.includes('vault')) {
      return 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z';
    }
    if (n.includes('github') || n.includes('actions')) {
      return 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z';
    }
    if (n.includes('gitlab')) {
      return 'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 015.48 2a.43.43 0 01.39.26l2.44 7.5h7.38l2.44-7.5a.43.43 0 01.39-.26.42.42 0 01.39.16l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z';
    }
    if (n.includes('jenkins')) {
      return 'M12 2a6 6 0 00-6 6c0 1.82.81 3.45 2.09 4.55L7 17h10l-1.09-4.45A5.992 5.992 0 0018 8a6 6 0 00-6-6zm-4 6a4 4 0 118 0 4 4 0 01-8 0zm-2 11h12v3H6v-3z';
    }
    if (n.includes('aws')) {
      return 'M18.8 14.5c-2.3 1.7-5.5 2.6-8.4 2.6-4 0-7.5-1.5-10.2-4-.2-.2 0-.5.2-.3 2.6 1.5 5.7 2.4 8.9 2.4 2.6 0 5.4-.7 7.9-2.1.4-.2.7.2.3.5l1.3.9zm1.4-1.3c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3.9-.7 2.4-.5 2.7-.1.3.4-.2 1.9-1 2.7-.2.2-.4.1-.3-.1.3-.6.6-1.7.3-2.1zM6.8 9.3l1.8-.3c.4 1.2 1.3 1.7 2.6 1.7 1.2 0 2.1-.5 2.1-1.4 0-.8-.7-1.2-1.9-1.4l-1.1-.2c-1.8-.3-2.8-1.2-2.8-2.6 0-1.8 1.5-2.9 3.7-2.9 1.8 0 3.2.7 3.7 2.1l-1.7.5c-.3-.8-.9-1.2-2-1.2-1.1 0-1.8.5-1.8 1.2 0 .7.6 1 1.7 1.2l1.1.2c2.1.4 3.1 1.3 3.1 2.8 0 2-1.7 3.1-4 3.1-2.2 0-3.8-1.1-4.4-2.8z';
    }
    if (n.includes('python')) {
      return 'M12 2C6.5 2 6.5 4.3 6.5 4.3v2.2h5.5v.8H4.2S2 7.1 2 12.6c0 5.4 1.9 5.3 1.9 5.3h1.6v-2.3s-.1-2.7 2.7-2.7h5.3s2.6 0 2.6-2.6V4.6S16.5 2 12 2zm-1.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm1.8 18.2c5.5 0 5.5-2.3 5.5-2.3v-2.2H12v-.8h7.8s2.2.2 2.2-5.3c0-5.4-1.9-5.3-1.9-5.3h-1.6v2.3s.1 2.7-2.7 2.7H10.5s-2.6 0-2.6 2.6v5.7s-.4 2.6 4.1 2.6zm1.8-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z';
    }
    if (n.includes('git')) {
      return 'M21.6 10.9L13.1 2.4c-.6-.6-1.6-.6-2.2 0L8.7 4.6l3.3 3.3c.4-.1.8-.2 1.2-.2 1.7 0 3 1.3 3 3 0 .4-.1.8-.2 1.2l3.2 3.2c.4-.1.8-.2 1.2-.2 1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3c0-.4.1-.8.2-1.2l-3-3v4.6c.6.3 1 1 1 1.7 0 1.1-.9 2-2 2s-2-.9-2-2c0-.8.4-1.4 1-1.7V9.3c-.6-.3-1-1-1-1.7 0-.4.1-.8.3-1.1L4.6 8.7c-.6.6-.6 1.6 0 2.2l8.5 8.5c.6.6 1.6.6 2.2 0l6.3-6.3c.6-.6.6-1.6 0-2.2z';
    }
    if (n.includes('linux') || n.includes('bash')) {
      return 'M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm3 4l4 4-4 4v-2.5L8.5 12 6 10.5V8zm7 7h5v2h-5v-2z';
    }
    if (n.includes('nginx')) {
      return 'M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm6 13.5l-6-8.5v8.5H10v-9l6 8.5v-8.5h2v9z';
    }
    return 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5';
  }

  getConceptPath(): string {
    const n = this.name().toLowerCase();
    if (n.includes('orchestration') || n.includes('cluster') || n.includes('pod')) {
      return 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5';
    }
    if (n.includes('cloud') || n.includes('vpc') || n.includes('network')) {
      return 'M3 15a4 4 0 004 4h11a3 3 0 001-5.83 5 5 0 00-9.8-1.67A4 4 0 003 15z';
    }
    if (n.includes('iac') || n.includes('infrastructure') || n.includes('state')) {
      return 'M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6zM10 7h4m-7 7v-4m10 4v-4m-7 7h4';
    }
    if (n.includes('ci/cd') || n.includes('gitops') || n.includes('pipeline')) {
      return 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15';
    }
    if (n.includes('observability') || n.includes('sre') || n.includes('metric') || n.includes('trace')) {
      return 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z';
    }
    if (n.includes('security') || n.includes('vault') || n.includes('compliance')) {
      return 'M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 5a3 3 0 016 0v3H9V7zm3 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3z';
    }
    return 'M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5zm0 6a3 3 0 110 6 3 3 0 010-6z';
  }
}
