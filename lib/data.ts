export const controlMetadata = {
  "availableForOpportunities": false,
}

export const personalInfo = {
  name: "Abhishek Yadav",
  title: "Software Engineer",
  email: "abhishekyadav.recs@gmail.com",
  linkedin: "https://linkedin.com/in/abhisheky97",
  github: "https://github.com/iam-abhishek-yadav",
};

export const summary = `Software Engineer with nearly 4 years of experience specializing in modern web development using React, Next.js, Node.js, and TypeScript. Skilled in designing and developing scalable, high-performance web applications with clean architectures and seamless user experiences. Experienced in integrating APIs, optimizing frontend performance, and building robust backend systems with PostgreSQL and MongoDB. Adept at collaborating in agile teams to deliver impactful SaaS and enterprise solutions. Familiar with DevOps practices such as Docker, CI/CD, and cloud deployment to ensure smooth and reliable product delivery.`;

export const experience = [
  {
    id: "virtual-employee-software-engineer",
    company: "Virtual Employee",
    position: "Software Engineer",
    location: "Noida",
    startDate: "Aug 2024",
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
    startDate: "Dec 2021",
    endDate: "Oct 2023",
    description: [
      "Worked on the Exports App within Smarsh's enterprise-grade data archival platform, enabling financial institutions to request, schedule, and retrieve filtered data exports at scale.",
      "Developed frontend components (JavaScript) that allowed users to initiate exports with custom filters and track progress in real time, while coordinating with backend services written in Java to queue and process export jobs via Kafka.",
      "Supported both instant and scheduled export workflows and assisted in containerization (Docker), CI/CD automation (Jenkins), and observability (Grafana, Prometheus).",
    ],
  },
];

export const projects = [
  {
    id: "versehive-prompt-sharing",
    name: "VerseHive (Prompt Sharing Platform)",
    technologies: ["NextJs", "OAuth", "NextAuth", "TailwindCSS", "TypeScript", "React", "MongoDB"],
    description: [
      "Developed user authentication with NextAuth (Google OAuth), implemented prompt creation and management features with proper form validation, and designed a clean, responsive UI using TailwindCSS.",
      "Built search and tag-based filtering capabilities to enable smooth navigation across prompts, improving overall usability and user experience.",
    ],
  },
];

export const skills = {
  languages: ["HTML/CSS", "JavaScript", "TypeScript", "Python", "Rust", "Golang"],
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
    "GCP",
    "Azure",
  ],
  integrations: ["Sentry", "Slack", "Linear", "Clerk Auth"],
  testing: ["Jest", "Vitest", "Cypress", "Playwright"],
  ai: ["OpenAI", "Google Gemini"],
};

export const education = {
  degree: "Bachelor of Technology – Computer Science",
  institution: "Government Engineering College, Sonbhadra",
  location: "Uttar Pradesh",
  startDate: "Jul 2017",
  endDate: "Jul 2021",
};

