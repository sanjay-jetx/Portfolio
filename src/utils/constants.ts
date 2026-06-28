export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface CounterItem {
  label: string;
  value: number;
  suffix: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface ProjectItem {
  id: string;
  featured: boolean;
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  architecture?: string;
  challenges?: string;
  solution?: string;
  impact?: string;
  lessons?: string;
  workflow?: string[];
  codeSnippet?: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  cgpa: string | null;
  coursework: string[];
  achievements: string[];
}

export interface CertificateItem {
  id: string;
  issuer: string;
  title: string;
  date: string;
  icon: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
}

export const ABOUT_TIMELINE: TimelineItem[] = [
  {
    year: '2018',
    title: 'School Foundation',
    description: 'Built strong fundamentals in mathematics and logical reasoning.',
    icon: 'GraduationCap',
  },
  {
    year: '2022',
    title: 'College — CSE',
    description: 'Started B.E. Computer Science at Panimalar Engineering College.',
    icon: 'BookOpen',
  },
  {
    year: '2023',
    title: 'First Hackathon',
    description: 'Organized and competed in PEC Hacks — deployed mock microservices.',
    icon: 'Trophy',
  },
  {
    year: '2024',
    title: 'Automation Era',
    description: 'Built 15+ n8n workflows connecting APIs, LLMs, and vector databases.',
    icon: 'Workflow',
  },
  {
    year: '2024',
    title: 'Backend Systems',
    description: 'Architected serverless integrations with Node.js, FastAPI, and Docker.',
    icon: 'Server',
  },
  {
    year: '2025',
    title: 'AI Integration',
    description: 'LangChain agents, Pinecone vector search, and Gemini API pipelines.',
    icon: 'Brain',
  },
  {
    year: '2025',
    title: 'Cricket Leadership',
    description: 'Department tournament captain — discipline, strategy, and team cohesion.',
    icon: 'Target',
  },
];

export const ABOUT_COUNTERS: CounterItem[] = [
  { label: 'Projects', value: 50, suffix: '+' },
  { label: 'Automations', value: 15, suffix: '+' },
  { label: 'Lines of Code', value: 25000, suffix: '+' },
  { label: 'GitHub Commits', value: 500, suffix: '+' },
  { label: 'Experience', value: 2, suffix: '+ Yrs' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Layout',
    color: '#ffc800',
    skills: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'TailwindCSS', level: 88 },
      { name: 'Framer Motion', level: 90 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    color: '#ffc800',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Java Spring Boot', level: 85 },
      { name: 'FastAPI', level: 82 },
      { name: 'Express', level: 88 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    color: '#ffc800',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Pinecone', level: 88 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: 'Workflow',
    color: '#ffc800',
    skills: [
      { name: 'n8n', level: 95 },
      { name: 'Playwright', level: 82 },
      { name: 'Webhooks', level: 90 },
      { name: 'Cron Jobs', level: 85 },
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    icon: 'Brain',
    color: '#ffc800',
    skills: [
      { name: 'LangChain', level: 88 },
      { name: 'OpenAI API', level: 90 },
      { name: 'Gemini', level: 85 },
      { name: 'Vector Search', level: 92 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: 'Cloud',
    color: '#ffc800',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 78 },
      { name: 'Vercel', level: 88 },
      { name: 'Linux', level: 90 },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Code2',
    color: '#ffc800',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    id: 'devtools',
    title: 'Dev Tools',
    icon: 'Wrench',
    color: '#ffc800',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 88 },
      { name: 'Figma', level: 75 },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'zenith',
    featured: true,
    badge: '90% Manual Time Saved',
    subtitle: 'N8N & LLM ORCHESTRATION',
    title: 'Zenith Automation Engine',
    description:
      'Production-grade automated pipeline parsing webhook requests, routing to LLM agents via LangChain, storing state in Pinecone Vector DB, and responding dynamically.',
    image: '/zenith_cover.png',
    tags: ['n8n', 'Node.js', 'Pinecone', 'LangChain', 'OpenAI'],
    github: 'https://github.com/sanjay-jetx',
    live: '#',
    architecture: 'Webhook → n8n → LangChain Agent → Pinecone → Response API',
    challenges: 'Handling async webhook bursts, vector index consistency, and LLM token limits.',
    solution: 'Queue-based n8n workflow with retry logic, chunked embeddings, and streaming responses.',
    impact: 'Reduced manual processing time by 90% across 15+ automation workflows.',
    lessons: 'Orchestration layers need observability — built live logging into every node.',
    workflow: ['Webhook Trigger', 'Payload Parser', 'LLM Agent', 'Vector Upsert', 'Slack Alert'],
    codeSnippet: `const pipeline = new ZenithEngine({
  port: 8080,
  integrations: ['n8n', 'pinecone', 'openai']
});
await pipeline.deploy();`,
  },
  {
    id: 'browser-history',
    featured: true,
    badge: 'Real-time Tracking',
    subtitle: 'CHROME EXTENSION + ANALYTICS',
    title: 'Browser History Tracker',
    description:
      'Chrome extension capturing browsing patterns, categorizing sessions, and visualizing productivity metrics through a React dashboard.',
    image: '/browser_cover.png',
    tags: ['React', 'Chrome APIs', 'Node.js', 'Chart.js'],
    github: 'https://github.com/sanjay-jetx',
    live: '#',
    architecture: 'Extension → Background Worker → REST API → React Dashboard',
    challenges: 'Privacy-first data collection with minimal performance overhead.',
    solution: 'Local-first storage with optional encrypted sync and user-controlled retention.',
    impact: 'Helped identify 40% time spent on non-productive browsing patterns.',
    lessons: 'Browser extensions require careful permission scoping and UX transparency.',
    workflow: ['Tab Listener', 'Category Engine', 'Local DB', 'Sync API', 'Dashboard'],
    codeSnippet: `chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  if (info.status === 'complete') trackVisit(tab);
});`,
  },
  {
    id: 'cricstat',
    featured: true,
    badge: '12ms Calculation Latency',
    subtitle: 'JAVA & REACT PERFORMANCE ANALYTICS',
    title: 'Cricket Analytics Dashboard',
    description:
      'Complete metrics analyzer ingesting historical cricket match CSV logs, computing advanced player ranking metrics, and rendering interactive profiles.',
    image: '/cricket_cover.png',
    tags: ['React', 'Java Spring Boot', 'Chart.js', 'PostgreSQL'],
    github: 'https://github.com/sanjay-jetx',
    live: '#',
    architecture: 'CSV Upload → Spring Boot API → PostgreSQL → React Charts',
    challenges: 'Real-time stat computation for 10K+ match records with sub-20ms latency.',
    solution: 'Pre-computed materialized views with indexed player metrics tables.',
    impact: 'Used by college cricket team for selection decisions and performance reviews.',
    lessons: 'Domain-specific analytics need clear metric definitions before building UI.',
    workflow: ['CSV Parser', 'Stat Engine', 'Rank Calculator', 'API Layer', 'Dashboard'],
    codeSnippet: `@GetMapping("/player/{id}/stats")
public PlayerStats getStats(@PathVariable Long id) {
  return statsService.computeAdvancedMetrics(id);
}`,
  },
  {
    id: 'whatsapp',
    featured: false,
    badge: 'NLP Pipeline',
    subtitle: 'PYTHON & SENTIMENT ANALYSIS',
    title: 'WhatsApp Chat Analyzer',
    description:
      'Python pipeline parsing WhatsApp chat exports, performing sentiment analysis, word frequency mapping, and generating visual conversation insights.',
    image: '/whatsapp_cover.png',
    tags: ['Python', 'NLTK', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/sanjay-jetx',
    live: '#',
    architecture: 'Chat Export → Parser → NLP Engine → Visualization Layer',
    challenges: 'Multi-language message parsing and emoji/slang handling.',
    solution: 'Custom tokenizer with regex patterns for WhatsApp export format.',
    impact: 'Processed 50K+ messages with sentiment trends and activity heatmaps.',
    lessons: 'Data cleaning consumes 70% of NLP project time — automate early.',
    workflow: ['Export Parser', 'Tokenizer', 'Sentiment Model', 'Word Cloud', 'Report'],
    codeSnippet: `df = parse_whatsapp_export('chat.txt')
sentiments = analyze_sentiment(df['message'])
generate_heatmap(df, sentiments)`,
  },
  {
    id: 'portfolio',
    featured: false,
    badge: 'Premium UX',
    subtitle: 'REACT & FRAMER MOTION',
    title: 'Portfolio Website',
    description:
      'Award-grade developer portfolio with cinematic scroll animations, glassmorphism UI, Three.js backgrounds, and terminal-style contact form.',
    image: '/portfolio_cover.png',
    tags: ['React', 'Framer Motion', 'GSAP', 'Three.js', 'Lenis'],
    github: 'https://github.com/sanjay-jetx',
    live: '#',
    architecture: 'Vite SPA → Section Components → Animation Layer → Static Deploy',
    challenges: 'Balancing rich animations with 95+ Lighthouse performance scores.',
    solution: 'Lazy loading, code splitting, reduced motion support, and canvas throttling.',
    impact: 'Showcases full-stack capabilities with recruiter-focused storytelling.',
    lessons: 'Performance budgets must be set before adding visual effects.',
    workflow: ['Design System', 'Section Build', 'Animation Layer', 'SEO', 'Deploy'],
    codeSnippet: `const lenis = new Lenis({ duration: 1.2 });
function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }`,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: '2016 — 2018',
    institution: 'Higher Secondary School',
    degree: 'HSC — Computer Science Stream',
    cgpa: null,
    coursework: ['Mathematics', 'Physics', 'Computer Science'],
    achievements: ['District-level cricket participation', 'Science fair project on automation'],
  },
  {
    period: '2022 — 2026',
    institution: 'Panimalar Engineering College',
    degree: 'B.E. Computer Science & Engineering',
    cgpa: '8.5 / 10.0',
    coursework: [
      'Distributed Systems',
      'Advanced Algorithms',
      'Database Management',
      'Operating Systems',
      'Machine Learning',
    ],
    achievements: [
      'Lab Coordinator — maintained Linux workstations',
      'PEC Hacks 3.0 Organizer & Technical Hacker',
      'Department Cricket Team — All-Rounder',
    ],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'oracle',
    issuer: 'Oracle',
    title: 'Java Foundations',
    date: '2024',
    icon: 'Award',
    description: 'Core Java programming, OOP principles, and enterprise patterns.',
  },
  {
    id: 'nasscom',
    issuer: 'NASSCOM',
    title: 'Future Skills — Full Stack',
    date: '2024',
    icon: 'Shield',
    description: 'Industry-aligned full-stack development certification program.',
  },
  {
    id: 'hackathon',
    issuer: 'PEC Hacks 3.0',
    title: 'Hackathon Organizer',
    date: 'Dec 2025',
    icon: 'Trophy',
    description: 'Orchestrated deployment pipelines and verified vector storage indexes.',
  },
  {
    id: 'n8n',
    issuer: 'n8n',
    title: 'Workflow Automation Specialist',
    date: '2024',
    icon: 'Workflow',
    description: 'Advanced workflow design, webhook orchestration, and API integrations.',
  },
  {
    id: 'pinecone',
    issuer: 'Pinecone',
    title: 'Vector Database Specialist',
    date: '2024',
    icon: 'Database',
    description: 'Semantic search, cosine similarity queries, and embedding pipelines.',
  },
  {
    id: 'future',
    issuer: 'Coming Soon',
    title: 'AWS Cloud Practitioner',
    date: '2026',
    icon: 'Cloud',
    description: 'Cloud architecture, deployment, and infrastructure management.',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: '15+ Production Automations',
    description: 'Built and deployed workflow pipelines saving 90% manual processing time.',
    metric: '90%',
    metricLabel: 'Time Saved',
    icon: 'Zap',
  },
  {
    title: 'PEC Hacks 3.0 Organizer',
    description: 'Led technical infrastructure for college hackathon with 200+ participants.',
    metric: '200+',
    metricLabel: 'Participants',
    icon: 'Trophy',
  },
  {
    title: 'Department Cricket Captain',
    description: 'Led team to inter-department tournament with strategic field placements.',
    metric: '1st',
    metricLabel: 'Place',
    icon: 'Target',
  },
  {
    title: 'Vector Search Engine',
    description: 'Built semantic search with Pinecone achieving 96%+ match accuracy.',
    metric: '96%',
    metricLabel: 'Accuracy',
    icon: 'Brain',
  },
  {
    title: 'Open Source Contributor',
    description: 'Active GitHub with 500+ commits across automation and full-stack repos.',
    metric: '500+',
    metricLabel: 'Commits',
    icon: 'GitBranch',
  },
  {
    title: 'Lab Coordinator',
    description: 'Maintained campus Linux workstations and network interfaces for 2 years.',
    metric: '2 Yrs',
    metricLabel: 'Leadership',
    icon: 'Server',
  },
];

export interface NavigationLink {
  href: string;
  label: string;
  icon?: string;
}

export const FOOTER_LINKS: NavigationLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS: NavigationLink[] = [
  { href: 'https://github.com/sanjay-jetx', label: 'GitHub', icon: 'github' },
  { href: 'https://www.linkedin.com/in/sanjay-m-86830426a/?skipRedirect=true', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://leetcode.com/u/s4njay/', label: 'LeetCode', icon: 'leetcode' },
  { href: 'mailto:sanjay@example.com', label: 'Email', icon: 'email' },
];
