export interface Project {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  badge?: string;
}

export interface SkillElement {
  number: number;
  symbol: string;
  name: string;
  family: 'Containers & Orchestration' | 'Cloud & Multi-Cloud' | 'Infrastructure as Code' | 'CI/CD & GitOps' | 'Observability & SRE' | 'DevSecOps & Security' | 'Scripting & Automation';
  isBrand: boolean;
  projects: string[];
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  type: 'work' | 'internship' | 'education';
  detail: string[];
  highlight?: string;
}

export interface Certification {
  index: string;
  title: string;
  issuer: string;
  year?: string;
  url?: string;
}

export interface Achievement {
  index: string;
  metric: string;
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
  detail: string;
  platform: string;
}

export const PROFILE = {
  name: 'Jhansi Lakshmi Prasad',
  firstName: 'JHANSI',
  role: 'Advanced DevOps Engineer | Cloud & Platform Infrastructure',
  cardRole: 'Advanced DevOps & Cloud Engineer',
  headingRole: 'DevOps Engineer.',
  clientEngagement: 'Enterprise Cloud & Platform Engineering',
  email: 'jhansiprasad18@gmail.com',
  phone: '+91 8179416127',
  phoneHref: 'tel:+918179416127',
  location: 'India',
  github: 'https://github.com/jhansiprasad1204',
  githubUser: 'jhansiprasad1204',
  linkedin: 'https://www.linkedin.com/in/jhansiprasad1204/',
  linkedinUser: 'jhansiprasad1204',
  portfolioUrl: 'https://jhansiprasad1204.github.io/portfolio/',
  resumePath: 'resume.pdf',
  graduationYear: '2023',
  idNumber: 'JP-81794-OPS',
  validFrom: '2025',
  validTill: '∞',
  department: 'Cloud Platform & SRE Engineering',
  resumeSummary:
    'Advanced DevOps & Cloud Platform Engineer specializing in Kubernetes (EKS), Terraform Infrastructure as Code, GitOps with ArgoCD, and automated DevSecOps pipelines across multi-environment architectures. Experienced in building self-healing container platforms, shifting security left with Vault and Trivy, and driving high-availability observability with Prometheus and Grafana.',
  shortQuote:
    'Dedicated to engineering resilient, self-healing cloud platforms and zero-downtime delivery engines with immutable infrastructure.',
  signature: 'Jhansi Lakshmi Prasad',
  backName: 'Jhansi Lakshmi Prasad'
};

export const NAV = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'skills', label: 'Skills', index: '02' },
  { id: 'work', label: 'Work', index: '03' },
  { id: 'certifications', label: 'Certifications', index: '04' },
  { id: 'experience', label: 'Experience', index: '05' },
  { id: 'achievements', label: 'Achievements', index: '06' },
  { id: 'contact', label: 'Contact', index: '07' }
];

export const SKILL_GROUPS = [
  'All',
  'Containers & Orchestration',
  'Cloud & Multi-Cloud',
  'Infrastructure as Code',
  'CI/CD & GitOps',
  'Observability & SRE',
  'DevSecOps & Security',
  'Scripting & Automation'
] as const;

export const SKILLS: SkillElement[] = [
  // Containers & Orchestration
  { number: 1, symbol: 'Dk', name: 'Docker', family: 'Containers & Orchestration', isBrand: true, projects: ['DevSecOps Pipeline', 'Enterprise EKS'], description: 'Multi-stage Dockerfiles, rootless daemon configuration, distroless images, layer caching, and container runtime optimization.' },
  { number: 2, symbol: 'K8', name: 'Kubernetes', family: 'Containers & Orchestration', isBrand: true, projects: ['Enterprise EKS GitOps', 'Cloud Observability'], description: 'Production cluster architecture, CRDs, StatefulSets, DaemonSets, HPA/VPA autoscaling, RBAC, CNI, and CSI storage.' },
  { number: 3, symbol: 'Hm', name: 'Helm 3', family: 'Containers & Orchestration', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Kubernetes package management, complex chart templating, subcharts, value inheritance, and release rollbacks.' },
  { number: 4, symbol: 'Kz', name: 'Kustomize', family: 'Containers & Orchestration', isBrand: false, projects: ['DevSecOps Pipeline'], description: 'Template-free declarative configuration overlays customizing Kubernetes manifests across Dev, Staging, and Production.' },
  { number: 5, symbol: 'Is', name: 'Istio Service Mesh', family: 'Containers & Orchestration', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Envoy proxy sidecars, mTLS encryption, traffic splitting, circuit breaking, fault injection, and distributed ingress routing.' },
  { number: 6, symbol: 'Cd', name: 'CoreDNS & Ingress', family: 'Containers & Orchestration', isBrand: false, projects: ['Enterprise EKS GitOps'], description: 'Ingress-NGINX controllers, cert-manager automated Let’s Encrypt TLS provisioning, and split-horizon DNS routing.' },

  // Cloud & Multi-Cloud
  { number: 7, symbol: 'Ek', name: 'AWS EKS', family: 'Cloud & Multi-Cloud', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Managed Kubernetes control planes, Karpenter dynamic node autoscaling, managed node groups, and AWS VPC CNI integration.' },
  { number: 8, symbol: 'Vp', name: 'Amazon VPC & Networking', family: 'Cloud & Multi-Cloud', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Multi-AZ VPC architecture, Transit Gateway routing, NAT gateways, PrivateLink endpoints, and network ACL security.' },
  { number: 9, symbol: 'Ia', name: 'AWS IAM & IRSA', family: 'Cloud & Multi-Cloud', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'IAM Roles for Service Accounts (IRSA), OIDC identity federation, least-privilege policies, and SCP boundaries.' },
  { number: 10, symbol: 'S3', name: 'Amazon S3 & Storage', family: 'Cloud & Multi-Cloud', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Object storage with lifecycle policies, cross-region replication, KMS envelope encryption, and Terraform backend state.' },
  { number: 11, symbol: 'Ec', name: 'Amazon EC2 & ASG', family: 'Cloud & Multi-Cloud', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Graviton ARM64 architecture, launch templates, Spot instance fleets, dynamic auto-scaling, and AMI lifecycle management.' },
  { number: 12, symbol: 'Cf', name: 'CloudFront & Route 53', family: 'Cloud & Multi-Cloud', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Global CDN edge caching, geo-DNS routing, latency-based resolution, SSL offloading, and automated health-check failovers.' },

  // Infrastructure as Code
  { number: 13, symbol: 'Tf', name: 'Terraform', family: 'Infrastructure as Code', isBrand: true, projects: ['Enterprise EKS GitOps', 'Cloud Observability'], description: 'Declarative HCL infrastructure provisioning, reusable modules, remote state locking with DynamoDB, and drift detection.' },
  { number: 14, symbol: 'Tg', name: 'Terragrunt', family: 'Infrastructure as Code', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'DRY Terraform architecture orchestrating multi-account, multi-region infrastructure hierarchies and dependency trees.' },
  { number: 15, symbol: 'An', name: 'Ansible', family: 'Infrastructure as Code', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'Agentless configuration management, idempotent playbooks, custom roles, Jinja2 templating, and Ansible Vault encryption.' },
  { number: 16, symbol: 'Fc', name: 'AWS CloudFormation', family: 'Infrastructure as Code', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Native AWS declarative template provisioning, nested stacks, StackSets for multi-account governance, and change sets.' },
  { number: 17, symbol: 'Pk', name: 'Packer', family: 'Infrastructure as Code', isBrand: false, projects: ['Enterprise EKS GitOps'], description: 'Automated golden image baking for AWS AMIs with CIS security benchmarks and automated vulnerability hardening.' },
  { number: 18, symbol: 'Cp', name: 'Crossplane', family: 'Infrastructure as Code', isBrand: false, projects: ['Enterprise EKS GitOps'], description: 'Cloud-native control plane managing external cloud infrastructure through declarative Kubernetes CRDs and XRDs.' },

  // CI/CD & GitOps
  { number: 19, symbol: 'Ar', name: 'ArgoCD', family: 'CI/CD & GitOps', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Declarative GitOps continuous delivery, automated cluster synchronization, drift correction, and multi-tenant App of Apps.' },
  { number: 20, symbol: 'Ga', name: 'GitHub Actions', family: 'CI/CD & GitOps', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'Matrix workflows, reusable workflow modules, self-hosted runner clusters, and secretless AWS OIDC authentication.' },
  { number: 21, symbol: 'Gl', name: 'GitLab CI/CD', family: 'CI/CD & GitOps', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'Dynamic parent-child pipelines, DAG execution graphs, integrated container registries, and environment stop actions.' },
  { number: 22, symbol: 'Jk', name: 'Jenkins', family: 'CI/CD & GitOps', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'Declarative Jenkinsfiles, shared Groovy libraries, ephemeral Kubernetes agent pod autoscaling, and artifact archiving.' },
  { number: 23, symbol: 'Fx', name: 'FluxCD', family: 'CI/CD & GitOps', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'GitOps operator toolkit managing continuous Helm release reconciliation, Kustomize sync, and image update automation.' },
  { number: 24, symbol: 'Bg', name: 'Canary & Blue-Green', family: 'CI/CD & GitOps', isBrand: false, projects: ['Enterprise EKS GitOps'], description: 'Progressive delivery with Argo Rollouts, automated traffic shifting, metric analysis gates, and instant rollback triggers.' },

  // Observability & SRE
  { number: 25, symbol: 'Pr', name: 'Prometheus', family: 'Observability & SRE', isBrand: true, projects: ['Cloud Observability'], description: 'Time-series metric scraping, PromQL querying, custom ServiceMonitors, recording rules, and Alertmanager routing.' },
  { number: 26, symbol: 'Gr', name: 'Grafana', family: 'Observability & SRE', isBrand: true, projects: ['Cloud Observability'], description: 'Unified monitoring dashboards, golden signal tracking (Latency, Traffic, Errors, Saturation), and alerting pipelines.' },
  { number: 27, symbol: 'Ot', name: 'OpenTelemetry', family: 'Observability & SRE', isBrand: true, projects: ['Cloud Observability'], description: 'Distributed tracing instrumentation, trace propagation contexts, custom metric exporters, and OTel collector pipelines.' },
  { number: 28, symbol: 'Lk', name: 'ELK & OpenSearch', family: 'Observability & SRE', isBrand: true, projects: ['Cloud Observability'], description: 'Distributed log indexing, FluentBit daemonsets, Logstash log transformations, and Kibana operational dashboards.' },
  { number: 29, symbol: 'Lo', name: 'Grafana Loki', family: 'Observability & SRE', isBrand: true, projects: ['Cloud Observability'], description: 'Horizontally scalable, cost-effective log aggregation system indexed via Kubernetes labels using LogQL querying.' },
  { number: 30, symbol: 'Sr', name: 'SRE & SLOs / Error Budgets', family: 'Observability & SRE', isBrand: false, projects: ['Cloud Observability'], description: 'Service Level Objectives, SLI metric calculation, error budget depletion monitoring, and automated incident escalation.' },

  // DevSecOps & Security
  { number: 31, symbol: 'Vt', name: 'HashiCorp Vault', family: 'DevSecOps & Security', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'Dynamic secret generation, transit encryption as a service, PKI certificate authorities, and Vault Agent sidecars.' },
  { number: 32, symbol: 'Tv', name: 'Trivy', family: 'DevSecOps & Security', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'Comprehensive security scanning for container images, Git repositories, Terraform misconfigurations, and software SBOMs.' },
  { number: 33, symbol: 'Sq', name: 'SonarQube', family: 'DevSecOps & Security', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'Static application security testing (SAST), code smell detection, vulnerability thresholds, and quality gate automation.' },
  { number: 34, symbol: 'Ky', name: 'Kyverno & OPA Gatekeeper', family: 'DevSecOps & Security', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Kubernetes Policy-as-Code admission controllers enforcing Pod Security Standards, image registry validation, and compliance.' },
  { number: 35, symbol: 'Fa', name: 'Falco', family: 'DevSecOps & Security', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Runtime cloud-native threat detection inspecting system calls and behavioral anomalies through Linux kernel eBPF probes.' },
  { number: 36, symbol: 'Sg', name: 'Cosign & Sigstore', family: 'DevSecOps & Security', isBrand: false, projects: ['DevSecOps Pipeline'], description: 'Cryptographic container image signing, keyless verification with Rekor transparency logs, and supply chain attestation.' },

  // Scripting & Automation
  { number: 37, symbol: 'Py', name: 'Python Automation', family: 'Scripting & Automation', isBrand: true, projects: ['Cloud Observability', 'DevSecOps Pipeline'], description: 'Boto3 AWS automation, custom Kubernetes operators, monitoring scripts, and infrastructure test automation.' },
  { number: 38, symbol: 'Sh', name: 'Bash & Shell Scripting', family: 'Scripting & Automation', isBrand: true, projects: ['DevSecOps Pipeline'], description: 'Advanced POSIX shell scripts, Linux text processing with jq/awk/sed, pipeline automation, and system diagnostics.' },
  { number: 39, symbol: 'Go', name: 'Go / Golang', family: 'Scripting & Automation', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Cloud-native systems programming, custom Kubernetes controllers, fast CLI utilities, and concurrency pipelines.' },
  { number: 40, symbol: 'Lx', name: 'Linux System Internals', family: 'Scripting & Automation', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'Kernel tuning, systemd unit management, cgroups v2, network namespaces, eBPF performance profiling, and I/O optimization.' },
  { number: 41, symbol: 'Nx', name: 'NGINX & Reverse Proxy', family: 'Scripting & Automation', isBrand: true, projects: ['Enterprise EKS GitOps'], description: 'High-concurrency reverse proxying, SSL/TLS termination, rate limiting, load balancing algorithms, and header manipulation.' },
  { number: 42, symbol: 'Gt', name: 'Git & Version Control', family: 'Scripting & Automation', isBrand: true, projects: ['Enterprise EKS GitOps', 'DevSecOps Pipeline'], description: 'Trunk-based development, branch protection rules, GPG commit verification, submodules, and interactive rebase workflows.' }
];

export const PROJECTS: Project[] = [
  {
    id: 'enterprise-gitops-eks',
    index: '01',
    title: 'Enterprise Kubernetes GitOps Platform on AWS EKS',
    kicker: 'Zero-Downtime Multi-Cluster Cloud Architecture',
    description:
      'Architected and provisioned an enterprise-grade, multi-region Kubernetes platform on AWS EKS using modular Terraform and Terragrunt. Standardized declarative continuous delivery with ArgoCD across 50+ microservices, incorporating Karpenter dynamic node autoscaling, Istio service mesh, automated cert-manager TLS, and progressive canary rollouts.',
    features: [
      'Provisioned multi-cluster AWS EKS infrastructure using modular Terraform with remote state locking and strict security groups',
      'Implemented GitOps continuous deployment via ArgoCD with automated drift detection, self-healing, and role-based access control',
      'Configured Karpenter just-in-time node provisioning, reducing cluster compute overhead and AWS EC2 spend by 35%',
      'Engineered Istio service mesh with mTLS encryption, circuit breaking, and Argo Rollouts for zero-downtime canary releases'
    ],
    tech: ['Kubernetes (EKS)', 'Terraform', 'ArgoCD', 'Helm', 'Istio', 'Karpenter', 'AWS IAM (IRSA)', 'cert-manager'],
    github: 'https://github.com/jhansiprasad1204',
    badge: 'Production GitOps Platform'
  },
  {
    id: 'devsecops-pipeline-ecosystem',
    index: '02',
    title: 'Automated Multi-Environment DevSecOps Pipeline Ecosystem',
    kicker: 'Security-Shift-Left & Immutable Infrastructure',
    description:
      'Engineered enterprise CI/CD and DevSecOps pipelines utilizing GitHub Actions, GitLab CI, and HashiCorp Vault. Integrated automated static application security testing (SAST), container vulnerability scanning with Trivy, dynamic short-lived secrets injection, and automated promotion across Dev, Staging, and Production environments.',
    features: [
      'Constructed hardened CI/CD workflows with GitHub Actions & GitLab CI featuring reusable workflows and matrix builds',
      'Shifted security left by integrating Trivy container scanning, SonarQube quality gates, and Kyverno policy-as-code enforcement',
      'Eliminated hardcoded credentials by deploying HashiCorp Vault with dynamic OIDC credential generation and IRSA integration',
      'Implemented automated semantic versioning, container image provenance signing with Cosign, and Docker multi-stage caching'
    ],
    tech: ['GitHub Actions', 'GitLab CI', 'Docker', 'HashiCorp Vault', 'Trivy', 'SonarQube', 'Kyverno', 'Cosign'],
    github: 'https://github.com/jhansiprasad1204',
    badge: 'Enterprise DevSecOps'
  },
  {
    id: 'cloud-observability-sre',
    index: '03',
    title: 'Production Cloud Observability, SRE & Incident Response Ecosystem',
    kicker: 'High-Dimensional Monitoring & Automated Auto-Remediation',
    description:
      'Designed a comprehensive, centralized observability and Site Reliability Engineering (SRE) architecture using Prometheus, Grafana, OpenTelemetry, and Grafana Loki. Established critical SLO/SLI dashboards, distributed tracing, automated alert routing, and self-healing auto-remediation scripts.',
    features: [
      'Deployed Prometheus Operator with custom ServiceMonitors capturing multi-dimensional application and cluster metrics',
      'Built unified Grafana executive and engineering dashboards tracking golden signals (Latency, Traffic, Errors, Saturation)',
      'Configured distributed tracing via OpenTelemetry collectors and Jaeger to troubleshoot microsecond microservice bottlenecks',
      'Implemented automated Alertmanager routing with PagerDuty integration, dynamic threshold alerting, and self-healing CronJobs'
    ],
    tech: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Grafana Loki', 'Alertmanager', 'Python', 'AWS CloudWatch', 'PagerDuty'],
    github: 'https://github.com/jhansiprasad1204',
    badge: 'Observability & SRE'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    index: '01',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Verified Credential',
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
  },
  {
    index: '02',
    title: 'Certified Kubernetes Administrator (CKA Track)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    year: 'Verified Credential',
    url: 'https://www.cncf.io/certification/cka/'
  },
  {
    index: '03',
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    year: 'Verified Credential',
    url: 'https://www.hashicorp.com/certification/terraform-associate'
  },
  {
    index: '04',
    title: 'JavaScript Essentials & Network Infrastructure',
    issuer: 'Cisco Networking Academy',
    year: 'Verified Credential',
    url: 'https://www.netacad.com/'
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: 'June 2025 – Present',
    role: 'DevOps & Cloud Platform Engineer',
    organization: 'Nimble International',
    type: 'work',
    highlight: 'Production Platform & SRE Role',
    detail: [
      'Architected and maintained containerized Kubernetes (EKS) infrastructure and automated CI/CD pipelines across multi-environment clusters.',
      'Authored modular Infrastructure as Code (IaC) using Terraform and Ansible to provision VPCs, EKS clusters, IAM roles, and storage buckets.',
      'Implemented GitOps deployment workflows using ArgoCD and Helm, achieving automated sync, drift detection, and zero-downtime rollouts.',
      'Shifted security left by integrating Trivy vulnerability scanning, SonarQube quality gates, and HashiCorp Vault secrets management.',
      'Established full-stack observability with Prometheus, Grafana, and Grafana Loki with automated Alertmanager and PagerDuty routing.'
    ]
  },
  {
    period: '2021 – 2023',
    role: 'Master of Computer Applications (MCA)',
    organization: 'Dr. B.R. Ambedkar University',
    type: 'education',
    highlight: 'Distinction — 80%',
    detail: [
      'Advanced computer applications curriculum focusing on distributed systems, operating system internals, network architectures, and software engineering.',
      'Graduated with 80% aggregate academic distinction.'
    ]
  },
  {
    period: '2018 – 2021',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Kakinada Sri Aditya Degree College',
    type: 'education',
    highlight: 'Graduated — 77%',
    detail: [
      'Foundational computer applications degree covering computer networks, database systems, object-oriented programming, and operating systems.',
      'Graduated with 77% aggregate distinction.'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    index: '01 / 06',
    metric: '99.99%',
    targetNumber: 99.99,
    suffix: '%',
    label: 'Platform Uptime',
    caption: 'High Availability & SRE',
    detail: 'Achieved through multi-AZ Kubernetes EKS architecture, self-healing pods, and health-check routing.',
    platform: 'SRE'
  },
  {
    index: '02 / 06',
    metric: '35%',
    targetNumber: 35,
    prefix: '-',
    suffix: '%',
    label: 'Cloud Compute Spend',
    caption: 'Cost Optimization',
    detail: 'Reduced AWS EC2 compute cost utilizing Karpenter dynamic right-sizing and spot instance allocation.',
    platform: 'AWS'
  },
  {
    index: '03 / 06',
    metric: '80%',
    targetNumber: 80,
    suffix: '%',
    label: 'MCA Distinction',
    caption: 'Dr. B.R. Ambedkar University',
    detail: 'Master of Computer Applications academic distinction with 80% aggregate (2021–2023).',
    platform: 'BRAU'
  },
  {
    index: '04 / 06',
    metric: '0',
    targetNumber: 0,
    suffix: ' Downtime',
    label: 'Zero-Downtime Rollouts',
    caption: 'GitOps & Argo Rollouts',
    detail: 'Eliminated deployment outages using ArgoCD progressive Canary deployments and automated rollbacks.',
    platform: 'GitOps'
  },
  {
    index: '05 / 06',
    metric: '4',
    targetNumber: 4,
    suffix: ' Certifications',
    label: 'Cloud & DevOps Credentials',
    caption: 'AWS, Kubernetes & Cisco',
    detail: 'AWS Cloud Practitioner, CKA Track, HashiCorp Terraform Associate & Cisco Networking.',
    platform: 'Certifications'
  },
  {
    index: '06 / 06',
    metric: '3',
    targetNumber: 3,
    suffix: ' Major Projects',
    label: 'Architected Platforms',
    caption: 'EKS, DevSecOps & SRE',
    detail: 'Enterprise EKS GitOps, Multi-Env DevSecOps Pipeline, and Centralized SRE Observability Ecosystem.',
    platform: 'Projects'
  }
];

