# Jhansi Lakshmi Prasad — Advanced DevOps Portfolio Website

A personal portfolio website for **Jhansi Lakshmi Prasad** (Advanced DevOps Engineer & Cloud Platform Architect).

Built according to strict Awwwards-style, quiet monochrome aesthetics (white, black, and gray only), lightweight performance, and accessible Angular architecture.

---

## 1. Quick Start

### Prerequisites
- **Node.js**: v20+
- **npm**: v10+

### Run locally
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm start
# or
npx ng serve
```

Visit `http://localhost:4200` in your browser.

### Production Build
```bash
npm run build
```
The output will be generated under `dist/portfolio-app/`.

---

## 2. Sections Architecture

| Section | Component | Description & Interaction |
| :--- | :--- | :--- |
| **Navigation** | `NavigationComponent` | Initials mark (`JP`), smooth Lenis scroll, active section indicator pill, scroll-progress bar, fullscreen mobile menu. |
| **01. Hero** | `HeroComponent` | Centred portrait photo with ghost typography, DevOps kicker, live availability status, and smooth navigation triggers. |
| **02. About** | `AboutComponent` | Three-column layout featuring an interactive hanging lanyard ID card (3D flip front/back, barcode, hologram, and bio details) plus GitHub profile activity. |
| **03. Skills** | `SkillsComponent` | "Periodic Table of My Stack" covering 42 elements across Containers, Cloud, IaC, CI/CD, Observability, DevSecOps, and Scripting. |
| **04. Selected Work** | `WorkComponent` | Expanding accordion gallery showcasing 3 Major Production DevOps Projects (Enterprise EKS GitOps, DevSecOps Pipeline Ecosystem, and Cloud Observability & SRE). |
| **05. Certifications** | `CertificationsComponent` | Sticky count heading with ink-flood hover rows and direct credential links (AWS, Kubernetes, HashiCorp Terraform, Cisco). |
| **06. Experience** | `ExperienceComponent` | Combined timeline path uniting education (MCA & BCA) and industry DevOps engineering experience. |
| **07. Achievements** | `AchievementsComponent` | Horizontal metric gallery highlighting verified SRE metrics (99.99% uptime, -35% AWS spend, MCA 80%, zero deployment downtime). |
| **08. Contact** | `ContactComponent` | One-click copy email button, direct mobile link, social links, rotating circular badge, and clean footer. |

---

## 3. Data Source of Truth

All data is strictly typed and centralized in [`src/app/core/data.ts`](src/app/core/data.ts):
- `PROFILE`: Personal contact info, links, summaries, and ID metadata.
- `SKILLS`: 42 Periodic table elements across 7 DevOps families.
- `PROJECTS`: 3 Major Production DevOps Projects:
  1. **Enterprise Kubernetes GitOps Platform on AWS EKS** (Terraform, ArgoCD, Helm, Istio, Karpenter, cert-manager)
  2. **Automated Multi-Environment DevSecOps Pipeline Ecosystem** (GitHub Actions, GitLab CI, HashiCorp Vault, Trivy, SonarQube, Kyverno)
  3. **Production Cloud Observability, SRE & Incident Response Ecosystem** (Prometheus, Grafana, OpenTelemetry, Grafana Loki, Alertmanager)
- `EXPERIENCE_TIMELINE`: DevOps and education history.
- `CERTIFICATIONS`: AWS Cloud Practitioner, CKA Track, HashiCorp Terraform Associate, Cisco Networking.
- `ACHIEVEMENTS`: Quantifiable performance metrics (99.99% Uptime, -35% Compute Cost, 0 Downtime Rollouts).
