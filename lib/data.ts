export const controlMetadata = {
  availableForOpportunities: false,
};

export const personalInfo = {
  name: "Abhishek Yadav",
  title: "Senior Software Engineer",
  email: "abhishekyadav.recs@gmail.com",
  phone: "+91 9140402031",
  linkedin: "https://linkedin.com/in/abhisheky97",
  github: "https://github.com/iam-abhishek-yadav",
};

export const tagline =
  "I design and build production AI systems - session replay, QA agents, and event pipelines at scale.";

export const summary = `Senior Software Engineer with 4+ years of experience, including a founding-engineer role at a YC-backed AI observability startup where I designed and built the majority of the product - a production-grade platform spanning real-time event ingestion pipelines, session replay, AI-powered issue detection, a full QA automation agent, a Chrome extension, and a multi-channel alert system. Experienced across the full stack: React/Next.js frontends with hybrid PostgreSQL + ClickHouse data architectures, Node.js and FastAPI backends, Kafka-based event-driven pipelines, multi-LLM orchestration (OpenAI, Gemini, Anthropic, Bedrock), and cloud-native deployments on Azure and Vercel. Known for making sound architectural decisions independently, moving fast without breaking things, and working directly with founders to ship the right thing.`;

export const experience = [
  {
    id: "decipher-founding-engineer",
    company: "Decipher (YC-backed) · via Virtual Employee",
    position: "Senior Software Engineer - Founding Engineer",
    location: "Remote / Noida",
    startDate: "2024",
    endDate: "Present",
    description: [
      "Sole engineer working directly with the founders to design, build, and scale an AI-powered session replay, error monitoring, and QA automation platform used by production engineering teams.",
      "Owned the system architecture end-to-end: designed a layered, event-driven platform with a Sentry-compatible reverse proxy, Kafka-based ingestion, PostgreSQL as system of record, ClickHouse for analytics over billions of interactions, Redis for real-time pub/sub, and Azure Blob for large replay payloads, all running on Azure Container Apps and Vercel.",
      "Built the entire event ingestion pipeline (FastAPI + KafkaJS + PostgreSQL) - dual-path architecture handling high-volume SDK traffic via Kafka and direct HTTP uploads from the Chrome extension; included org-level billing quota enforcement, GeoIP + user-agent enrichment, and PostHog SDK support alongside Sentry.",
      "Designed the session replay and AI analysis platform: rrweb DOM capture, a Next.js replay player with AI sidebar, scheduled AI analysis cron (Hatchet fanout every 10 min across all orgs) that extracts screenshots, scores severity, groups issues into collections, and surfaces UX problems automatically.",
      "Built the complete QA test automation agent - the largest subsystem: Chrome extension recording → AI-generated natural-language test steps → per-step validation in remote browsers (Browserbase) → CUA-based auto-recovery for failing steps → Playwright codegen → scheduled runs → GitHub PR gate that posts pass/fail checks on pull requests.",
      "Engineered the debugger-app dashboard (Next.js 15 App Router) with a hybrid data architecture: server components reading PostgreSQL for transactional data, ClickHouse for aggregated analytics, and pipelines-server for live streaming via SSE - plus RBAC, feature flags per org, and full QA test lifecycle UI (record → validate → run → review → AI-suggested fixes).",
      "Built the Decipher Recorder Chrome Extension (Manifest V3) with three parallel capture pipelines running simultaneously: DOM session replay via injected Sentry/rrweb, annotated action screenshots via Chrome DevTools Protocol (CDP), and tab video via MediaRecorder in an offscreen document. Handled MV3 constraints including CSP header stripping and multi-page state restoration.",
      "Implemented multi-LLM orchestration across OpenAI, Google Gemini/Vertex, Anthropic, and AWS Bedrock - used for session summarisation, issue severity scoring, smart event detection, test step generation, step outcome judging, AI digest emails, and a coding assistant (UI agent) in isolated Daytona sandboxes.",
      "Built third-party integrations across the full platform: Slack (alerts, interactive fix buttons, thread lifecycle), GitHub (OAuth + PR gate webhooks), Linear, Clerk authentication, Okta OAuth, and Stripe billing with webhook handling.",
      "Established platform observability through Sentry instrumentation, Axiom structured logging, Kafka consumer lag monitoring, and distributed tracing - maintaining reliability across five independently deployed services.",
    ],
  },
  {
    id: "smarsh-software-engineer",
    company: "Smarsh",
    position: "Software Engineer",
    location: "Bangalore",
    startDate: "2021",
    endDate: "2023",
    description: [
      "Fullstack engineer on a large-scale enterprise archival and compliance platform serving financial institutions.",
      "Designed and built export workflows for financial data archival, enabling reliable, auditable bulk extraction for enterprise clients with strict regulatory requirements.",
      "Integrated frontend systems with Kafka-based backend pipelines supporting real-time and scheduled export orchestration at enterprise scale.",
      "Improved deployment reliability through Docker containerisation and Jenkins-based CI/CD automation, reducing environment inconsistencies across teams.",
    ],
  },
];

export const projects = [
  {
    id: "mini-linear",
    name: "Mini Linear",
    tagline:
      "Multi-tenant, Linear-inspired task board - kanban, invites, and org-scoped workspaces.",
    status: "In progress" as const,
    url: "https://linear-mini.builderonline.site/",
    role: "Full-Stack Developer",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "TanStack Query",
      "Zod",
      "Tailwind CSS 4",
      "shadcn/ui",
      "@dnd-kit",
      "Resend",
      "Docker",
    ],
    description: [
      "Multi-tenant, Linear-inspired task board where each organization is an isolated workspace. Teams collaborate on issues via kanban/list views, comments, activity history, and in-app notifications, with invite-only signup and role-based admin controls.",
      "Built core product surfaces: Kanban board (drag-and-drop), list views (Active / Backlog / Completed / My Issues), issue detail overlay, inbox notifications, and workspace settings.",
      "Designed multi-tenant data model and org-scoped APIs so tasks, members, and invites stay isolated per workspace.",
      "Implemented invite-only auth: custom sessions (bcrypt + httpOnly cookies), org bootstrap invites (CLI), and member invites with Admin / Manager / Member roles.",
      "Wired App Router Server Components for layout data loading with client state via TanStack Query + React context providers; REST route handlers with Zod validation and transactional task/activity/notification writes.",
      "Shipped Dockerized Postgres + app deployment with Drizzle migrations and structured server logging.",
    ],
  },
  {
    id: "real-time-event-ingestion-pipeline",
    name: "Real-Time Event Ingestion Pipeline",
    tagline:
      "Dual-path SDK ingestion handling thousands of events per second with billing, enrichment, and analytics.",
    technologies: [
      "FastAPI",
      "KafkaJS",
      "PostgreSQL",
      "Azure Blob",
      "Azure Event Hubs",
      "GCS",
      "ClickHouse",
    ],
    description: [
      "Dual-path ingestion architecture: Kafka consumers for high-volume SDK traffic (thousands of events/sec) and a direct HTTP API for large extension uploads (screenshots, videos up to 200 MB). Azure Blob used to handle oversized Kafka messages that exceed broker limits.",
      "Normalised three distinct SDK formats (Sentry envelope protocol, PostHog event format, Chrome extension HTTP) into a unified internal model stored in PostgreSQL.",
      "Built org-level billing quota enforcement at ingestion time with a 5-minute plan cache - prevents over-limit orgs from consuming storage while keeping hot-path latency low.",
      "Enriched events with GeoIP and user-agent parsing; published interaction events to ClickHouse via Kafka for downstream analytics over billions of rows.",
    ],
  },
  {
    id: "ai-powered-qa-test-automation-agent",
    name: "AI-Powered QA Test Automation Agent",
    tagline:
      "From Chrome recordings to Playwright codegen, remote validation, and GitHub PR gates - end to end.",
    technologies: [
      "Node.js",
      "Playwright",
      "Browserbase",
      "Hatchet",
      "OpenAI",
      "PostgreSQL",
      "Redis",
    ],
    description: [
      "End-to-end test lifecycle engine: converts Chrome extension recordings into AI-generated natural-language test steps, validates each step in a real remote browser (Browserbase), applies CUA-based auto-recovery when steps fail, generates Playwright code, and schedules recurring runs via Hatchet crons.",
      "Built a step-judge AI layer that evaluates whether each step's browser outcome matches expectations - reducing false positives in validation and enabling confident Playwright codegen.",
      "Implemented a GitHub PR gate: webhook on PR open/update triggers QA runs against the preview environment and posts a pass/fail check status back to GitHub.",
      "Streamed live validation progress to the dashboard via Redis-backed SSE, giving engineers real-time step-by-step visibility during test runs.",
    ],
  },
  {
    id: "decipher-recorder-chrome-extension",
    name: "Decipher Recorder - Chrome Extension",
    tagline:
      "Three parallel capture pipelines - DOM replay, CDP screenshots, and tab video - under Manifest V3.",
    technologies: [
      "Chrome MV3",
      "TypeScript",
      "CDP",
      "rrweb",
      "Sentry SDK",
      "MediaRecorder",
      "React",
    ],
    description: [
      "Three parallel capture pipelines running simultaneously during recording: (1) continuous DOM session replay via injected Sentry/rrweb sent through the Sentry reverse proxy, (2) per-action annotated screenshots via Chrome DevTools Protocol with up to 8 captures per interaction, (3) tab video via MediaRecorder in a hidden offscreen document.",
      "Solved complex Manifest V3 constraints: used offscreen documents for MediaRecorder (service workers cannot hold MediaStream), declarativeNetRequest for optional CSP header stripping, and background worker state persistence to survive page navigations mid-recording.",
      "Captures rich action metadata per interaction - CSS selectors, Playwright-compatible selectors, AI descriptions (from pipelines-server), URL, and timestamp - feeding directly into the test generation pipeline.",
    ],
  },
  {
    id: "alert-notification-service",
    name: "Alert & Notification Service",
    tagline:
      "Rule-based Slack + email alerts with threaded QA lifecycles and daily AI digests.",
    technologies: [
      "Node.js",
      "KafkaJS",
      "Hatchet",
      "Gemini",
      "Resend",
      "Slack API",
      "PostgreSQL",
    ],
    description: [
      "Kafka-consumer-driven notification system decoupled from the analysis pipeline - handles nine distinct event types including product issue alerts, QA test failures, smart event detections, CUA fix completions, and test approvals.",
      "Built a rule-based alert decision engine: filters by URL pattern, user role, error group, severity, and frequency before sending - preventing alert fatigue while ensuring critical issues always surface.",
      "Implemented Slack thread lifecycle management for QA failures - root message on failure, threaded updates for each lifecycle event (fix attempt, CUA recovery, validation complete), preserving full context in one thread.",
      "Built a daily AI digest system: Hatchet cron fans out across orgs at 19:00 UTC, gathers 24 hours of issues, generates summaries with Gemini, and delivers via Resend HTML email templates.",
    ],
  },
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Go", "HTML/CSS"],
  frontend: [
    "React.js",
    "Next.js 15 (App Router)",
    "Tailwind CSS",
    "Zustand",
    "ShadCN UI / Radix",
    "rrweb",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Drizzle ORM",
    "SSE",
    "WebSockets",
  ],
  database: [
    "PostgreSQL",
    "ClickHouse",
    "Kafka (Azure Event Hubs)",
    "Redis",
    "MongoDB",
    "Azure Blob",
    "GCS",
  ],
  ai: [
    "OpenAI",
    "Google Gemini / Vertex",
    "Anthropic Claude",
    "AWS Bedrock",
    "Multi-provider orchestration",
  ],
  testing: [
    "Playwright",
    "Browserbase",
    "Stagehand",
    "Chrome Extensions (MV3)",
    "CDP",
    "Jest",
    "Vitest",
    "Cypress",
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "GitHub Actions",
    "Jenkins",
    "AWS",
    "Azure Container Apps",
    "Vercel",
  ],
  observability: [
    "Sentry",
    "Axiom",
    "Hatchet",
    "Structured logging",
    "Kafka consumer monitoring",
  ],
  integrations: [
    "Slack API",
    "GitHub OAuth + Webhooks",
    "Linear",
    "Clerk",
    "Okta OAuth",
    "Stripe",
  ],
};

export const education = {
  degree: "Bachelor of Technology - Computer Science",
  institution: "Government Engineering College, Sonbhadra",
  location: "Uttar Pradesh",
  startDate: "2017",
  endDate: "2021",
};
