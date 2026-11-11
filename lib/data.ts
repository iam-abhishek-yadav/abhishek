export const personalInfo = {
  name: "Abhishek Yadav",
  firstName: "Abhishek",
  initials: "AY",
  title: "Senior Software Engineer",
  location: "Noida, India",
  email: "abhishekyadav.recs@gmail.com",
  linkedin: "https://linkedin.com/in/abhisheky97",
  linkedinHandle: "abhisheky97",
  github: "https://github.com/iam-abhishek-yadav",
  githubHandle: "iam-abhishek-yadav",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "platform", label: "Platform" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Senior Software Engineer · Founding Engineer at a YC startup",
  headline: "I build AI products that hold up in",
  headlineAccent: "production.",
  intro:
    "I have 4+ years of shipping software. Most recently I was the founding engineer at Decipher, a YC-backed AI observability and QA automation platform, and for a long stretch its only engineer. I take products from an empty repo to production: event ingestion, data stores, LLM pipelines, browser agents, and the dashboard people use every day.",
  status: "Based in Noida · Working remotely",
};

export const stats = [
  { value: "4+", label: "years shipping production software" },
  { value: "0→1", label: "as the sole engineer beside the founders" },
  { value: "1000s", label: "of events per second, ingested" },
  { value: "Billions", label: "of interactions, queryable in ClickHouse" },
];

export const pillars = [
  {
    kicker: "AI & agents",
    title: "LLM systems with guardrails",
    body: "RAG over pgvector, multimodal analysis, and agents that drive real browsers. Each one has structured outputs, an LLM judge, and a recovery path for when the model gets it wrong.",
    tools: ["OpenAI", "Gemini", "Claude", "Bedrock", "Vercel AI SDK", "LangGraph"],
  },
  {
    kicker: "Data & real-time",
    title: "Pipelines that keep up",
    body: "Kafka consumers that ingest thousands of events per second, ClickHouse for billions of rows, Postgres as the source of truth, and Redis-backed SSE that keeps the UI live.",
    tools: ["Kafka", "ClickHouse", "PostgreSQL", "Redis", "FastAPI", "Azure Event Hubs"],
  },
  {
    kicker: "Product engineering",
    title: "Interfaces people actually use",
    body: "Next.js dashboards, a Manifest V3 Chrome extension, a session replay player, and the Slack, GitHub, and Linear integrations that bring the product into a team's daily workflow.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind", "Chrome MV3", "rrweb"],
  },
];

export type PlatformNode = {
  id: string;
  name: string;
  tech: string;
  detail: string;
};

export type PlatformLayer = {
  id: string;
  label: string;
  nodes: PlatformNode[];
};

export const platform: {
  intro: string;
  layers: PlatformLayer[];
} = {
  intro:
    "This is Decipher's architecture, broken into its layers. I designed, built, and ran every box. Select one to see what it does.",
  layers: [
    {
      id: "capture",
      label: "Capture",
      nodes: [
        {
          id: "sdk",
          name: "Web SDKs",
          tech: "Sentry · PostHog · rrweb",
          detail:
            "Customer apps stream errors, product events, and DOM session replays. We accept the Sentry and PostHog wire formats, so teams can adopt Decipher without changing their code.",
        },
        {
          id: "extension",
          name: "Recorder extension",
          tech: "Chrome MV3 · CDP · MediaRecorder",
          detail:
            "Runs three capture pipelines in parallel: DOM replay, annotated screenshots per action through CDP, and tab video in an offscreen document. Recordings survive page navigation.",
        },
        {
          id: "webhooks",
          name: "GitHub webhooks",
          tech: "PR opened · PR updated",
          detail:
            "Opening or updating a pull request triggers QA runs against the preview environment.",
        },
      ],
    },
    {
      id: "ingest",
      label: "Ingest",
      nodes: [
        {
          id: "proxy",
          name: "Sentry-compatible proxy",
          tech: "Envelope protocol",
          detail:
            "A reverse proxy that speaks Sentry's envelope protocol. It normalizes payloads into one internal event model.",
        },
        {
          id: "kafka",
          name: "Kafka pipeline",
          tech: "KafkaJS · Azure Event Hubs",
          detail:
            "Carries high-volume SDK traffic at thousands of events per second. Oversized messages are offloaded to Blob storage so they stay within broker limits.",
        },
        {
          id: "upload",
          name: "Direct upload API",
          tech: "FastAPI · Pydantic",
          detail:
            "A separate HTTP path for screenshots and videos up to 200 MB. Billing quotas are enforced at the edge with a 5-minute plan cache, and events are enriched with GeoIP and user-agent data.",
        },
      ],
    },
    {
      id: "store",
      label: "Store",
      nodes: [
        {
          id: "postgres",
          name: "PostgreSQL",
          tech: "System of record · pgvector",
          detail:
            "Holds orgs, issues, tests, and runs. It also stores embeddings for semantic retrieval and grounded test generation.",
        },
        {
          id: "clickhouse",
          name: "ClickHouse",
          tech: "Analytics",
          detail:
            "Stores interaction events for analytics over billions of rows. It powers the dashboard's aggregate views.",
        },
        {
          id: "redis",
          name: "Redis",
          tech: "Pub/sub · SSE",
          detail:
            "Real-time fan-out. Live QA progress and analysis status stream to the browser over server-sent events.",
        },
        {
          id: "blob",
          name: "Blob storage",
          tech: "Azure Blob · GCS",
          detail: "Stores large replay payloads, screenshots, and videos.",
        },
      ],
    },
    {
      id: "intelligence",
      label: "Intelligence",
      nodes: [
        {
          id: "analysis",
          name: "Analysis workers",
          tech: "Multimodal LLMs · Hatchet",
          detail:
            "A scheduled pipeline extracts screenshots from sessions, scores severity, clusters related issues, and surfaces UX problems automatically.",
        },
        {
          id: "rag",
          name: "RAG retrieval",
          tech: "Embeddings · pgvector",
          detail:
            "Grounds test generation and issue scoring in real prior sessions, so the model doesn't have to guess.",
        },
        {
          id: "agent",
          name: "QA agent",
          tech: "Playwright · Browserbase · CUA",
          detail:
            "Turns recordings into natural-language steps and runs them in remote browsers. It recovers from failures with Gemini Computer Use, then writes Playwright code.",
        },
        {
          id: "judge",
          name: "LLM-as-judge",
          tech: "Structured outputs",
          detail:
            "Grades each browser step against what was expected, so a run that looks green is actually correct.",
        },
      ],
    },
    {
      id: "surface",
      label: "Surface",
      nodes: [
        {
          id: "dashboard",
          name: "Dashboard",
          tech: "Next.js 15 · RBAC · flags",
          detail:
            "Combines Postgres for transactional data, ClickHouse for analytics, and SSE for live updates. It includes the replay player with an AI sidebar and the full QA test lifecycle UI.",
        },
        {
          id: "slack",
          name: "Slack & email",
          tech: "Slack API · Resend · Gemini",
          detail:
            "A rule-based alert engine. Each incident gets one Slack thread that tracks its full lifecycle, and each org gets a daily AI-written digest by email.",
        },
        {
          id: "github",
          name: "GitHub PR gate",
          tech: "Check runs",
          detail:
            "Posts a pass/fail QA check back to the pull request, which blocks regressions before merge.",
        },
        {
          id: "integrations",
          name: "Integrations",
          tech: "Linear · Clerk · Okta · Stripe",
          detail:
            "Covers issue sync, SSO, billing, and auth: what a team needs before it can adopt the product.",
        },
      ],
    },
  ],
};

export type Experience = {
  id: string;
  company: string;
  companyNote?: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  deepDive?: { title: string; body: string }[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    id: "decipher-founding-engineer",
    company: "Decipher",
    companyNote: "YC-backed · via Virtual Employee",
    position: "Senior Software Engineer / Founding Engineer",
    location: "Remote · Noida",
    startDate: "2024",
    endDate: "Present",
    summary:
      "I am the sole engineer working directly with the founders, and I took an AI observability and QA automation platform from its first commit to production. I own the architecture, the AI infrastructure, product engineering, and on-call.",
    highlights: [
      "Designed and operate the cloud-native architecture: FastAPI and Node services, PostgreSQL, ClickHouse, Kafka, and Redis, running on AWS, Azure Container Apps, and Vercel.",
      "Built ingestion that sustains thousands of events per second and keeps billions of user interactions available for analytics.",
      "Built multimodal AI and RAG pipelines across OpenAI, Gemini, Anthropic, and AWS Bedrock. They use embeddings and pgvector for vision analysis, semantic retrieval, issue scoring, clustering, and grounded test generation.",
      "Built agentic QA automation. Tool-calling agents drive real browsers with Playwright and Browserbase, recover with Gemini Computer Use, are graded by an LLM judge, and output Playwright code.",
      "Made async AI work reliable with workers, scheduled runs, retries, Redis-backed SSE streaming, GitHub PR gates, and orchestration across multiple LLM providers.",
      "Integrated Slack, GitHub, Linear, Clerk, Okta, Stripe, Sentry, and Axiom.",
    ],
    deepDive: [
      {
        title: "Session replay & AI analysis",
        body: "rrweb DOM capture feeds a Next.js replay player with an AI sidebar. A scheduled analysis job extracts screenshots, scores severity, groups related issues, and surfaces UX problems without anyone filing a ticket.",
      },
      {
        title: "The dashboard",
        body: "A Next.js 15 App Router app with a hybrid data layer: PostgreSQL for transactional data, ClickHouse for aggregated analytics, and SSE for live updates. It also includes RBAC, feature flags, and the full QA test lifecycle UI.",
      },
      {
        title: "Recorder Chrome extension",
        body: "A Manifest V3 extension that runs three capture pipelines at once: DOM session replay through rrweb, annotated action screenshots through CDP, and tab video through MediaRecorder in an offscreen document.",
      },
      {
        title: "Ingestion architecture",
        body: "A Sentry-compatible reverse proxy and Kafka handle SDK traffic, while a separate HTTP path takes large uploads. PostgreSQL is the system of record, ClickHouse handles analytics, Redis handles real-time pub/sub, and Azure Blob stores heavy replay payloads.",
      },
    ],
    stack: [
      "TypeScript",
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "ClickHouse",
      "Kafka",
      "Redis",
      "pgvector",
      "Playwright",
      "Browserbase",
      "Hatchet",
      "AWS",
      "Azure",
      "Vercel",
    ],
  },
  {
    id: "smarsh-software-engineer",
    company: "Smarsh",
    position: "Software Engineer",
    location: "Bangalore",
    startDate: "2021",
    endDate: "2023",
    summary:
      "I worked on an enterprise archival and compliance platform used by financial institutions. The hard requirement was reliability: banks needed bulk exports they could trust and audit.",
    highlights: [
      "Built bulk export workflows that let regulated clients extract archived data reliably, with a complete audit trail.",
      "Connected application workflows to Kafka pipelines for real-time and scheduled export orchestration.",
      "Containerized services with Docker and moved deployments to Jenkins CI/CD, which reduced environment drift between teams.",
    ],
    stack: ["Kafka", "Docker", "Jenkins", "CI/CD"],
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  institution: "Government Engineering College, Sonbhadra",
  location: "Uttar Pradesh",
  startDate: "2017",
  endDate: "2021",
};

export type Project = {
  id: string;
  name: string;
  kicker: string;
  featured?: boolean;
  status?: string;
  url?: string;
  oneLiner: string;
  problem: string;
  metrics: { value: string; label: string }[];
  built: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "ai-powered-qa-test-automation-agent",
    name: "AI QA Agent",
    kicker: "Agents · Browser automation",
    featured: true,
    oneLiner:
      "Watches a Chrome recording, replays it in a real browser, fixes failed steps with Computer Use, and outputs Playwright tests.",
    problem:
      "End-to-end tests are expensive to write and break whenever the UI changes. The goal was to turn a recording someone already made into a test that runs on every PR and repairs itself when a selector changes.",
    metrics: [
      { value: "Recording → test", label: "steps generated by AI" },
      { value: "CUA", label: "auto-recovery on failure" },
      { value: "PR gate", label: "pass/fail check on GitHub" },
    ],
    built: [
      "A test lifecycle engine that converts extension recordings into natural-language steps, validates each one in a remote Browserbase browser, and generates Playwright code.",
      "Computer Use auto-recovery: when a step fails, a vision model takes over, finds the intended element, and the fix is written back into the test.",
      "RAG with embeddings and pgvector, which grounds generation in prior sessions, and a step-judge that scores whether each outcome matches what was expected.",
      "A GitHub PR gate: PR webhooks trigger runs against the preview environment and post a check status back to the PR.",
      "Live step-by-step progress streamed to the dashboard over Redis-backed SSE, with recurring runs scheduled through Hatchet crons.",
    ],
    stack: [
      "Node.js",
      "Playwright",
      "Browserbase",
      "Hatchet",
      "Vercel AI SDK",
      "OpenAI",
      "Gemini",
      "AWS Bedrock",
      "PostgreSQL",
      "pgvector",
      "Redis",
    ],
  },
  {
    id: "real-time-event-ingestion-pipeline",
    name: "Event Ingestion Pipeline",
    kicker: "Data · Real-time",
    oneLiner:
      "Two ingestion paths, one for thousands of small events per second and one for 200 MB videos, both feeding ClickHouse.",
    problem:
      "One endpoint had to accept three SDK formats, high-volume small events, and very large media uploads, while enforcing billing quotas and keeping latency low on the hot path.",
    metrics: [
      { value: "1000s/s", label: "events through Kafka" },
      { value: "200 MB", label: "max direct upload" },
      { value: "3", label: "SDK formats normalized" },
    ],
    built: [
      "A dual-path architecture: Kafka consumers for SDK traffic and a direct HTTP API for large extension uploads. Oversized Kafka messages are offloaded to Azure Blob.",
      "Normalization of Sentry envelopes, PostHog events, and Chrome extension payloads into one internal model in PostgreSQL.",
      "Org-level billing quota enforcement at ingestion time, with a 5-minute plan cache to keep the hot path fast.",
      "GeoIP and user-agent enrichment, with interaction events streamed to ClickHouse for analytics over billions of rows.",
    ],
    stack: [
      "FastAPI",
      "Pydantic",
      "KafkaJS",
      "Azure Event Hubs",
      "PostgreSQL",
      "ClickHouse",
      "Azure Blob",
      "GCS",
    ],
  },
  {
    id: "decipher-recorder-chrome-extension",
    name: "Recorder Extension",
    kicker: "Chrome MV3 · Capture",
    oneLiner:
      "Runs three capture pipelines at once under Manifest V3, and keeps recording when the tab navigates.",
    problem:
      "Under Manifest V3, service workers can't hold a MediaStream and are shut down whenever the browser decides. We still needed full-fidelity recordings that survive page loads.",
    metrics: [
      { value: "3", label: "parallel capture pipelines" },
      { value: "8", label: "screenshots per action, max" },
      { value: "MV3", label: "service-worker safe" },
    ],
    built: [
      "Three pipelines running together: continuous DOM replay through rrweb, annotated per-action screenshots through CDP, and tab video through MediaRecorder in an offscreen document.",
      "Workarounds for MV3 limits: offscreen documents for media, declarativeNetRequest for optional CSP stripping, and persisted worker state so recordings survive navigation.",
      "Detailed metadata for each action (CSS selectors, Playwright-compatible selectors, AI descriptions, URL, and timestamp) that feeds straight into test generation.",
    ],
    stack: ["TypeScript", "Chrome MV3", "CDP", "rrweb", "MediaRecorder", "React", "Sentry SDK"],
  },
  {
    id: "alert-notification-service",
    name: "Alerting & AI Digest",
    kicker: "Notifications · LLM summaries",
    oneLiner:
      "Each incident gets one Slack thread that follows it to resolution, and each team gets a daily AI-written digest instead of a firehose.",
    problem:
      "Too many alerts and teams mute the channel. Too few and they miss real issues. Notifications had to be selective, carry their context, and stay out of the way.",
    metrics: [
      { value: "9", label: "event types handled" },
      { value: "1 thread", label: "per incident lifecycle" },
      { value: "Daily", label: "Gemini-written digest" },
    ],
    built: [
      "A notification service driven by Kafka consumers and decoupled from analysis. It handles product issues, QA failures, smart detections, CUA fixes, and approvals.",
      "A rule engine that filters by URL pattern, role, error group, severity, and frequency before anything is sent.",
      "Slack thread lifecycle: a root message when something fails, then threaded updates for each fix attempt, recovery, and validation.",
      "A daily digest: a Hatchet cron fans out across orgs, summarizes 24 hours of issues with Gemini, and sends the summary through Resend.",
    ],
    stack: ["Node.js", "KafkaJS", "Hatchet", "Gemini", "Slack API", "Resend", "PostgreSQL"],
  },
  {
    id: "ship",
    name: "Ship",
    kicker: "Side project · SaaS",
    status: "In progress",
    url: "https://ship.builderonline.site/",
    oneLiner:
      "A multi-tenant task board inspired by Linear: kanban, invites, roles, and isolated workspaces for each org.",
    problem:
      "A project of my own to practice the full SaaS stack end to end: multi-tenancy, my own auth, and a fast, keyboard-friendly UI.",
    metrics: [
      { value: "Multi-tenant", label: "org-scoped data model" },
      { value: "3 roles", label: "Admin · Manager · Member" },
      { value: "Next 16", label: "React 19 · RSC" },
    ],
    built: [
      "Kanban with drag-and-drop, list views (Active, Backlog, Completed, My Issues), an issue detail overlay, an inbox, and workspace settings.",
      "An org-scoped data model and APIs that keep tasks, members, and invites isolated per workspace.",
      "Invite-only auth: custom sessions with bcrypt and httpOnly cookies, CLI bootstrap invites, and role-based member invites.",
      "Server Components for layout data, TanStack Query on the client, and route handlers that validate with Zod and write in transactions.",
      "Dockerized Postgres and app deployment with Drizzle migrations and structured logging.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "TanStack Query",
      "Zod",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Docker",
    ],
  },
];

export const toolkit: { label: string; items: string[]; wide?: boolean }[] = [
  {
    label: "AI & agents",
    wide: true,
    items: [
      "OpenAI",
      "Gemini / Vertex",
      "Anthropic Claude",
      "AWS Bedrock",
      "Vercel AI SDK",
      "LangChain",
      "LangGraph",
      "RAG",
      "Embeddings + pgvector",
      "Tool calling",
      "Structured outputs",
      "Multimodal",
      "Computer Use",
      "LLM-as-judge",
      "Agent orchestration",
    ],
  },
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  {
    label: "Data & queues",
    items: ["PostgreSQL", "ClickHouse", "Kafka", "Azure Event Hubs", "Redis", "MongoDB", "Azure Blob"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Pydantic", "Drizzle ORM", "SSE", "WebSockets"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js (App Router)", "Tailwind CSS", "Zustand", "shadcn/ui · Radix"],
  },
  {
    label: "Browser & testing",
    items: ["Playwright", "Browserbase", "Chrome Extensions (MV3)", "CDP", "rrweb"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"],
  },
  {
    label: "Observability",
    items: ["Sentry", "Axiom", "Hatchet", "Structured logging", "Kafka consumer monitoring"],
  },
];

export const contact = {
  title: "Building something hard?",
  accent: "Let's talk.",
  body: "I'm happiest on problems that are both product and infrastructure: AI features that need real data pipelines behind them. Email is the fastest way to reach me.",
};
