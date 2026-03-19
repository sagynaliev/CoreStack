// ═══════════════════════════════════════════
//  DATA — Edit this file to update content
// ═══════════════════════════════════════════

const TECH_STACK = [
  { name: "React",      icon: "⚛️" },
  { name: "Node.js",    icon: "🟢" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Python",     icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker",     icon: "🐳" },
  { name: "GraphQL",    icon: "◈" },
  { name: "Next.js",    icon: "▲" },
  { name: "Redis",      icon: "🔴" },
  { name: "AWS",        icon: "☁️" },
  { name: "Figma",      icon: "🎨" },
  { name: "Tailwind",   icon: "💨" },
];

const TEAM_MEMBERS = [
  {
    id: "alex",
    name: "Alex Rivera",
    role: "Tech Lead · Full-Stack",
    avatar: "AR",
    avatarColor: "#a3e635",
    bio: "Architects scalable systems and leads technical strategy. Previously at Stripe, obsessed with developer experience and clean abstractions.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
    skills: ["Node.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    id: "priya",
    name: "Priya Nair",
    role: "Frontend Engineer",
    avatar: "PN",
    avatarColor: "#818cf8",
    bio: "Crafts pixel-perfect UIs with an eye for motion and accessibility. React performance nerd who writes CSS like poetry.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "marco",
    name: "Marco Teixeira",
    role: "Backend Engineer",
    avatar: "MT",
    avatarColor: "#f97316",
    bio: "Builds the invisible foundations that make apps reliable at scale. Python and Rust enthusiast, data pipeline wizard.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    skills: ["Python", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "yuki",
    name: "Yuki Tanaka",
    role: "UI/UX Designer",
    avatar: "YT",
    avatarColor: "#38bdf8",
    bio: "Translates complex workflows into intuitive interfaces. Design systems architect who bridges the gap between design and code.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
    skills: ["Figma", "React", "Tailwind"],
  },
  {
    id: "sam",
    name: "Sam Okoro",
    role: "DevOps · Infrastructure",
    avatar: "SO",
    avatarColor: "#f43f5e",
    bio: "Keeps the lights on. Kubernetes wrangler, CI/CD pipeline author, and the person on-call so no one else has to be.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    skills: ["Docker", "AWS", "Node.js"],
  },
];

const PROJECTS = [
  {
    id: "veloce",
    title: "Veloce Dashboard",
    authors: ["alex", "priya"],
    description:
      "A real-time analytics platform for e-commerce teams. Processes 2M+ events/day with sub-100ms query response times and a fully interactive chart suite.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    featured: true,
  },
  {
    id: "atlas",
    title: "Atlas CMS",
    authors: ["priya", "yuki"],
    description:
      "A headless CMS built for developer happiness. Type-safe GraphQL API, live preview, and a drag-and-drop block editor that designers actually love.",
    tags: ["Next.js", "GraphQL", "TypeScript", "PostgreSQL"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    featured: true,
  },
  {
    id: "pipeline",
    title: "DataPipeline OSS",
    authors: ["marco", "sam"],
    description:
      "Open-source ETL framework for Python. Declarative pipeline definitions, automatic retry logic, and built-in observability. 1.2k GitHub stars.",
    tags: ["Python", "Docker", "AWS", "Redis"],
    links: {
      github: "https://github.com",
    },
    featured: false,
  },
  {
    id: "orbit",
    title: "Orbit Design System",
    authors: ["yuki", "priya"],
    description:
      "A production-ready component library with 60+ accessible components. Built with Radix primitives, fully themed, and shipped as an npm package.",
    tags: ["React", "TypeScript", "Figma", "Tailwind"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    featured: false,
  },
  {
    id: "sentinel",
    title: "Sentinel Monitor",
    authors: ["sam", "alex"],
    description:
      "Infrastructure health monitoring with intelligent alerting. Tracks uptime, error rates, and latency across distributed services with zero config.",
    tags: ["Node.js", "Docker", "AWS", "PostgreSQL"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    featured: false,
  },
];
