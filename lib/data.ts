export const personalInfo = {
  name: "Abhishek Yadav",
  firstName: "Abhishek",
  title: "Senior Software Engineer",
  location: "Noida, India",
  email: "abhishekyadav.recs@gmail.com",
  linkedin: "https://linkedin.com/in/abhisheky97",
  github: "https://github.com/iam-abhishek-yadav",
};

export const chapters = [
  { id: "me", number: "01", label: "Me" },
  { id: "notes", number: "02", label: "Notes" },
  { id: "work", number: "03", label: "Systems" },
  { id: "path", number: "04", label: "Path" },
  { id: "write", number: "05", label: "Write" },
] as const;

export const letter = {
  kicker: "Noida, India",
  opening: "I make machines explain themselves.",
  body: [
    "Session replay. Agents that drive real browsers. Pipelines that swallow thousands of events a second. That is the work I have spent the last few years inside — not as a specialist on a slice, as the person who had to make the whole thing exist.",
    "I was the founding engineer at Decipher, a YC-backed observability company. One engineer, sitting with the founders, from the Kafka consumer to the Chrome extension. If it shipped, I probably wrote it. If it broke at 2am, that was me too.",
    "Before that I was at Smarsh, building export workflows for an archival platform used by financial institutions. Less glamorous than agents. Very real: regulators, audit trails, data that cannot get lost.",
    "I am strongest when the problem is both product and infrastructure. TypeScript and Python. React and FastAPI. Postgres next to ClickHouse. An LLM next to a retry.",
  ],
  signoff: "Abhishek",
};

export const fieldNotes = [
  {
    title: "The demo is not the product",
    body: "The retry is. The judge is. The failure a human can actually read. I wrap models in tools, structured outputs, and a next move for when they are wrong.",
  },
  {
    title: "I would rather own the room",
    body: "Architecture, product calls, on-call. Being the only engineer is not a flex. It is a preference: one throat to choke, including my own.",
  },
  {
    title: "Boring things keep interesting things up",
    body: "Quotas. Consumer lag. SSE that does not drop. Logs you can grep. The unglamorous bits are why the agents and the replay stay honest.",
  },
  {
    title: "Two databases, on purpose",
    body: "Postgres when you need a source of truth. ClickHouse when you actually have billions of rows. Kafka when the firehose is real. I pick the dull option that matches the load.",
  },
];

export const toolkit = [
  "TypeScript",
  "Python",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "ClickHouse",
  "Kafka",
  "Redis",
  "OpenAI / Gemini / Claude / Bedrock",
  "LangGraph",
  "Playwright",
  "RAG + pgvector",
  "Computer Use",
  "AWS",
  "Vercel",
];

export const contactCopy = {
  title: "Write to me.",
  body: "Email is the shortest path. GitHub and LinkedIn if you would rather lurk first.",
};

export const experience = [
  {
    id: "decipher-founding-engineer",
    company: "Decipher (YC-backed) · via Virtual Employee",
    position: "Founding Engineer",
    location: "Noida",
    startDate: "2024",
    endDate: "Now",
    city: "Noida",
    summary:
      "0→1 with the founders. Session replay, QA agents, and an event pipeline that had to keep up.",
    intro:
      "I joined as the founding engineer and stayed the only one for a long stretch. Architecture, AI infra, product, production ops — if it is in the platform, I probably designed it and then on-called it.",
    description: [
      "Sole engineer working directly with founders to architect and build an AI-powered observability and QA automation platform from 0→1, owning system architecture, development, AI infrastructure, and production operations.",
      "Designed and operated a production cloud-native architecture using FastAPI, Pydantic, PostgreSQL, ClickHouse, Kafka, Redis, Vercel, and AWS, supporting analytics over billions of interactions and ingestion at thousands of events/sec.",
      "Built production-grade multimodal AI and RAG pipelines using OpenAI, Gemini, Anthropic, and AWS Bedrock, with embeddings and pgvector for vision analysis, semantic retrieval, issue scoring, clustering, and grounded test generation.",
      "Built agentic QA automation using Vercel AI SDK, tool calling, Gemini Computer Use, Playwright, and Browserbase, with structured outputs, LLM-as-judge evaluation, automated recovery, and Playwright code generation.",
      "Built reliable asynchronous AI workflows with workers, scheduled runs, retries, Redis-backed SSE streaming, GitHub PR gates, and multi-LLM orchestration, integrating with Slack, GitHub, Linear, Clerk, Okta, Stripe, Sentry, and Axiom.",
      "Owned the system architecture end-to-end: Sentry-compatible reverse proxy, Kafka-based ingestion, PostgreSQL as system of record, ClickHouse for analytics, Redis for real-time pub/sub, and Azure Blob for large replay payloads, running on Azure Container Apps and Vercel.",
      "Designed the session replay and AI analysis platform: rrweb DOM capture, a Next.js replay player with AI sidebar, and a scheduled analysis cron that extracts screenshots, scores severity, groups issues, and surfaces UX problems automatically.",
      "Engineered the debugger-app dashboard (Next.js 15 App Router) with a hybrid data architecture: PostgreSQL for transactional data, ClickHouse for aggregated analytics, and live streaming via SSE — plus RBAC, feature flags, and the full QA test lifecycle UI.",
      "Built the Decipher Recorder Chrome Extension (Manifest V3) with three parallel capture pipelines: DOM session replay via rrweb, annotated action screenshots via CDP, and tab video via MediaRecorder in an offscreen document.",
    ],
  },
  {
    id: "smarsh-software-engineer",
    company: "Smarsh",
    position: "Software Engineer",
    location: "Bangalore",
    startDate: "2021",
    endDate: "2023",
    city: "Bangalore",
    summary:
      "Enterprise archival for financial institutions. Exports that had to be auditable.",
    intro:
      "Two years on a compliance platform where the interesting problem was not a model — it was making bulk extraction reliable enough that a bank would trust it.",
    description: [
      "Fullstack engineer on a large-scale enterprise archival and compliance platform serving financial institutions.",
      "Built export workflows enabling reliable, auditable bulk data extraction for enterprise clients with strict regulatory requirements.",
      "Integrated application workflows with Kafka-based pipelines supporting real-time and scheduled export orchestration at enterprise scale.",
      "Improved deployment reliability through Docker containerization and Jenkins CI/CD, reducing environment inconsistencies across teams.",
    ],
  },
];

export const pathIntro =
  "Sonbhadra, then Bangalore, then Noida. A government engineering college, then banks, then a YC company where I was the only engineer.";

export const projects = [
  {
    id: "ai-powered-qa-test-automation-agent",
    name: "QA agent",
    label: "Agent",
    featured: true,
    tagline:
      "Watch a recording, drive a real browser, recover with Computer Use, then write the Playwright.",
    technologies: [
      "Node.js",
      "Playwright",
      "Browserbase",
      "Hatchet",
      "OpenAI",
      "AWS Bedrock",
      "Gemini",
      "Vercel AI SDK",
      "PostgreSQL",
      "Redis",
      "pgvector",
    ],
    description: [
      "End-to-end test lifecycle engine: converts Chrome extension recordings into AI-generated natural-language test steps, validates each step in a real remote browser (Browserbase), applies Computer Use auto-recovery when steps fail, generates Playwright code, and schedules recurring runs via Hatchet crons.",
      "Built RAG retrieval with embeddings and pgvector so test generation is grounded in prior sessions, plus a step-judge layer that scores whether each browser outcome matches expectations.",
      "Implemented a GitHub PR gate: webhook on PR open/update triggers QA runs against the preview environment and posts a pass/fail check status back to GitHub.",
      "Streamed live validation progress to the dashboard via Redis-backed SSE, giving engineers real-time step-by-step visibility during test runs.",
    ],
  },
  {
    id: "real-time-event-ingestion-pipeline",
    name: "Event pipeline",
    label: "Ingest",
    tagline:
      "Thousands of events a second is not a slide. It is a Kafka consumer you have to keep alive.",
    technologies: [
      "FastAPI",
      "KafkaJS",
      "PostgreSQL",
      "ClickHouse",
      "Azure Blob",
      "Azure Event Hubs",
      "GCS",
      "Pydantic",
    ],
    description: [
      "Dual-path ingestion architecture: Kafka consumers for high-volume SDK traffic (thousands of events/sec) and a direct HTTP API for large extension uploads (screenshots, videos up to 200 MB). Azure Blob used to handle oversized Kafka messages that exceed broker limits.",
      "Normalised three distinct SDK formats (Sentry envelope protocol, PostHog event format, Chrome extension HTTP) into a unified internal model stored in PostgreSQL.",
      "Built org-level billing quota enforcement at ingestion time with a 5-minute plan cache — prevents over-limit orgs from consuming storage while keeping hot-path latency low.",
      "Enriched events with GeoIP and user-agent parsing; published interaction events to ClickHouse via Kafka for downstream analytics over billions of rows.",
    ],
  },
  {
    id: "decipher-recorder-chrome-extension",
    name: "Recorder",
    label: "Record",
    tagline:
      "Three capture pipelines at once, under Manifest V3, without dropping the recording when the tab navigates.",
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
      "Captures rich action metadata per interaction — CSS selectors, Playwright-compatible selectors, AI descriptions (from pipelines-server), URL, and timestamp — feeding directly into the test generation pipeline.",
    ],
  },
  {
    id: "alert-notification-service",
    name: "Alerts",
    label: "Alert",
    tagline:
      "Slack threads that follow the incident, plus a daily AI digest so nobody lives in the firehose.",
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
      "Kafka-consumer-driven notification system decoupled from the analysis pipeline — handles nine distinct event types including product issue alerts, QA test failures, smart event detections, CUA fix completions, and test approvals.",
      "Built a rule-based alert decision engine: filters by URL pattern, user role, error group, severity, and frequency before sending — preventing alert fatigue while ensuring critical issues always surface.",
      "Implemented Slack thread lifecycle management for QA failures — root message on failure, threaded updates for each lifecycle event (fix attempt, CUA recovery, validation complete), preserving full context in one thread.",
      "Built a daily AI digest system: Hatchet cron fans out across orgs at 19:00 UTC, gathers 24 hours of issues, generates summaries with Gemini, and delivers via Resend HTML email templates.",
    ],
  },
  {
    id: "ship",
    name: "Ship",
    label: "Side",
    tagline:
      "A Linear-shaped task board I am building for myself — kanban, invites, and org-scoped workspaces.",
    status: "In progress" as const,
    url: "https://ship.builderonline.site/",
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
    "Pydantic",
    "Drizzle ORM",
    "SSE",
    "WebSockets",
  ],
  database: [
    "PostgreSQL",
    "ClickHouse",
    "Kafka",
    "Azure Event Hubs",
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
    "LangChain",
    "LangGraph",
    "Vercel AI SDK",
    "RAG",
    "embeddings + pgvector",
    "tool calling",
    "structured outputs",
    "multimodal AI",
    "Computer Use (CUA)",
    "LLM-as-judge",
    "agent orchestration",
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
  city: "Sonbhadra",
};
