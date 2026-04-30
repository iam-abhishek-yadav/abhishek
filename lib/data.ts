export const controlMetadata = {
  availableForOpportunities: false,
};

export const personalInfo = {
  name: "Abhishek Yadav",
  title: "Software Engineer",
  email: "abhishekyadav.recs@gmail.com",
  linkedin: "https://linkedin.com/in/abhisheky97",
  github: "https://github.com/iam-abhishek-yadav",
};

export const summary = `Senior Software Engineer with 4+ years of experience designing and scaling distributed SaaS systems across
frontend and backend. Expertise in building high-performance web applications using React, Next.js, Node.js, and
TypeScript, with strong backend integration using Kafka, PostgreSQL, and event-driven architectures. Proven track
record of owning end-to-end system design, improving system reliability, and optimizing performance at scale.
Experienced in observability platforms, AI-driven tooling, and cloud-native deployments. Adept at driving technical
decisions, mentoring engineers, and delivering business-critical features in fast-paced environments.`;

export const experience = [
  {
    id: "virtual-employee-software-engineer",
    company: "Virtual Employee",
    position: "Software Engineer",
    location: "Noida",
    startDate: "2024",
    endDate: "Present",
    description: [
      "Built an AI-powered debugging platform used by 100+ companies, where frontend errors and user events are captured via a Sentry-based script and routed through a custom FastAPI proxy to Kafka for asynchronous processing.",
      "Contributed to the ingestion service (Node.js) that consumes Kafka streams, processes raw error data, enriches it with AI-generated insights, and stores it in PostgreSQL, enabling real-time debugging and analytics.",
      "Developed and maintained key UI modules in the Next.js debugger app, including pages for AI-analyzed issues, user activity logs using PostHog, smart event creation, alert configuration, and third-party integrations with Slack and Linear.",
      "Helped optimize frontend performance and data handling, resulting in smoother UX and faster data retrieval. Overall, these efforts reduced manual debugging time and significantly improved developer visibility into application errors.",
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
      "Worked on the Exports App within Smarsh's enterprise-grade data archival platform, enabling financial institutions to request, schedule, and retrieve filtered data exports at scale.",
      "Developed frontend components (JavaScript) that allowed users to initiate exports with custom filters and track progress in real time, while coordinating with backend services written in Java to queue and process export jobs via Kafka.",
      "Supported both instant and scheduled export workflows and assisted in containerization (Docker), CI/CD automation (Jenkins), and observability (Grafana, Prometheus).",
    ],
  },
];

export const projects = [
  {
    id: "ai-powered-debugging-platform",
    name: "AI-Powered Debugging Platform",
    technologies: [
      "NextJs",
      "FastAPI",
      "Sentry",
      "Drizzle",
      "PostgreSQL",
      "Kafka",
    ],
    description: [
      "Designed a distributed error ingestion pipeline using FastAPI, Kafka, and PostgreSQL to process and analyze high-volume event streams.",
      "Developed a modular Next.js frontend for session replay visualization, AI-driven insights, and event dashboard.",
      "Implemented backend services for event enrichment, storage, and alerting, enabling real-time observability workflows.",
    ],
  },
  {
    id: "versehive-prompt-sharing",
    name: "VerseHive (Prompt Sharing Platform)",
    technologies: [
      "NextJs",
      "OAuth",
      "NextAuth",
      "TailwindCSS",
      "TypeScript",
      "React",
      "MongoDB",
    ],
    description: [
      "Developed user authentication with NextAuth (Google OAuth), implemented prompt creation and management features with proper form validation, and designed a clean, responsive UI using TailwindCSS.",
      "Built search and tag-based filtering capabilities to enable smooth navigation across prompts, improving overall usability and user experience.",
    ],
  },
];

export const skills = {
  languages: [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Rust",
    "Golang",
  ],
  webDevelopment: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Zustand",
    "ShadCN UI",
    "Node.js",
    "Prisma/Drizzle",
  ],
  database: ["MongoDB", "PostgreSQL", "Redis", "Kafka"],
  devops: [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Jenkins",
    "GitHub Actions",
    "AWS",
    "Azure",
  ],
  integrations: ["Sentry", "Slack", "Linear", "Clerk Auth"],
  testing: ["Jest", "Vitest", "Cypress", "Playwright"],
  ai: ["OpenAI", "Google Gemini", "Claude Code"],
};

export const education = {
  degree: "Bachelor of Technology – Computer Science",
  institution: "Government Engineering College, Sonbhadra",
  location: "Uttar Pradesh",
  startDate: "2017",
  endDate: "2021",
};
