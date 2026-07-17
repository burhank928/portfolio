export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
  tags: string[];
  nodeColor: string;
  nodeBorder?: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Devsinc',
    period: 'Jul 2024 – Present',
    current: true,
    description:
      'Leading frontend teams across multiple client engagements. Migrated 7 authentication flows from a Rails monolith to Angular 19 with a NestJS BFF. Built and shipped iOS and Android apps using Angular Ionic.',
    tags: ['Angular 19', 'Okta IDX', 'NestJS BFF', 'Ionic', 'Optimizely'],
    nodeColor: '#f5f5f5',
  },
  {
    role: 'Software Engineer',
    company: 'Devsinc',
    period: 'Jul 2023 – Jun 2024',
    current: false,
    description:
      'Rails to React Remix migration with 40% UI performance boost. Achieved Built for Shopify certification. Delivered Okta widget upgrade v6 to v7 in 6 months with Okta team collaboration.',
    tags: ['React Remix', 'GraphQL', 'Shopify', 'Okta', 'Rails'],
    nodeColor: '#444444',
  },
  {
    role: 'Associate Software Engineer',
    company: 'Devsinc',
    period: 'Jul 2022 – Jun 2023',
    current: false,
    description:
      'Built SMS MFA enrollment flow, Mapbox real-time rider tracking, and end-to-end production orders feature across React, NestJS, and Rails.',
    tags: ['React Native', 'Mapbox', 'NestJS', 'Rails', 'RSpec'],
    nodeColor: '#333333',
  },
  {
    role: 'Internship',
    company: 'Systems Limited',
    period: 'Sep 2021 – Nov 2021',
    current: false,
    description: 'Learned Salesforce MVC architecture and built UI components using JavaScript.',
    tags: ['JavaScript', 'Salesforce', 'jQuery'],
    nodeColor: '#222222',
    nodeBorder: '#333333',
  },
];

export type ProjectEntry = {
  title: string;
  category: string;
  description: string;
  metric: string;
  link: string;
  linkLabel: string;
};

export const projects: ProjectEntry[] = [
  {
    title: 'OMF',
    category: 'Fintech · CIAM',
    description:
      '7 auth flows migrated from Rails monolith to Angular 19 for a Fortune 500 fintech client. NestJS BFF, Ionic mobile apps, and Optimizely traffic management.',
    metric: '86% fewer auth bugs',
    link: 'https://onemainfinancial.com',
    linkLabel: 'onemainfinancial.com',
  },
  {
    title: 'PC - Product Options',
    category: 'E-Commerce',
    description: 'Built for Shopify certified app. GraphQL API integration and custom buy button checkout flow.',
    metric: '+25% conversion',
    link: 'https://apps.shopify.com/product-customizer',
    linkLabel: 'apps.shopify.com/product-customizer',
  },
  {
    title: 'Orbit Health',
    category: 'Healthcare',
    description: 'React Native app with Mapbox real-time rider tracking for patients and hospital admins.',
    metric: '5s polling interval',
    link: 'https://orbithealth.com',
    linkLabel: 'orbithealth.com',
  },
  {
    title: 'Powur',
    category: 'Clean Energy',
    description:
      'Full-stack features across React, NestJS microservices, and Rails including end-to-end production orders feature.',
    metric: 'Solar · Residential',
    link: 'https://powur.com',
    linkLabel: 'powur.com',
  },
];

export type SkillRow = {
  category: string;
  skills: string[];
};

export const skills: SkillRow[] = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6)', 'TypeScript', 'Ruby', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: [
      'React.js',
      'Angular',
      'Next.js',
      'Ionic',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'Material-UI',
      'Framer Motion',
      'Redux',
      'Zustand',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'Ruby on Rails', 'Prisma ORM', 'GraphQL', 'REST', 'JWT', 'Stripe', 'Twilio', 'Sidekiq'],
  },
  {
    category: 'AI & LLM',
    skills: ['OpenAI API', 'Azure AI Foundry', 'LLM Integration', 'SSE Streaming', 'Prompt Engineering', 'AI Content Generation'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Azure Cosmos DB'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'Nginx', 'Vercel', 'Hetzner', 'Coolify', 'DigitalOcean'],
  },
  {
    category: 'Mobile & Testing',
    skills: ['React Native', 'Expo', 'Vitest', 'Jest', 'Playwright', 'Maestro (E2E)', 'RSpec', 'K6'],
  },
  {
    category: 'Tools & Practices',
    skills: [
      'Agile Scrum',
      'Optimizely',
      'Bull',
      'Mapbox',
      'GitHub',
      'Jira',
      'Confluence',
      'pnpm Monorepo',
      'Multi-tenant SaaS',
      'Event-Driven Architecture',
    ],
  },
];

export const highlightedSkills = new Set(['React.js', 'Angular', 'TypeScript', 'NestJS']);

export type Metric = {
  label: string;
  value: string;
  numeric: number | null;
  prefix?: string;
  suffix?: string;
};

export const metrics: Metric[] = [
  { label: 'years experience', value: '4+', numeric: 4, suffix: '+' },
  { label: 'projects shipped', value: '6', numeric: 6 },
  { label: 'countries deployed', value: '3', numeric: 3 },
  { label: 'fintech client', value: 'F500', numeric: null },
];

export type Testimonial = {
  name: string;
  title: string;
  relationship: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Jevon Hylton',
    title: 'Business Analyst | Driving Product Improvements and Analytics',
    relationship: 'Managed Burhan directly',
    quote:
      'I had the pleasure of managing Burhan Khan during his time at LTV, and he quickly stood out as one of the most well-rounded full-stack developers on the team. He brought strong technical expertise across modern frontend frameworks and backend development, allowing him to take ownership of features from initial concept to deployment. His ability to break down complex requirements into scalable solutions helped accelerate project delivery and improve product reliability. Burhan’s work consistently reflected attention to detail, clean architecture, and thoughtful design. He was never satisfied with simply "getting it to work"—he wanted to understand the problem deeply and deliver the best user outcome. Beyond his technical strengths, Burhan was a dependable and supportive teammate who willingly stepped in to solve blockers and share knowledge.',
  },
  {
    name: 'Usama Basharat',
    title: 'Full Stack Engineer building with AI | React · Next.js · Node.js · Python | LLM Integrations',
    relationship: "Was Burhan's mentor",
    quote:
      'I had the privilege of directly managing Burhan, a highly skilled full-stack engineer. His adept problem-solving, meticulous attention to detail, and extreme ownership make him an invaluable asset. Burhan consistently delivers high-quality work, showcasing his commitment to excellence in every project. I wholeheartedly recommend him for any engineering role.',
  },
  {
    name: 'Abdul Malik',
    title: 'Full Stack Engineer | JavaScript · TypeScript · React · React Native · NestJS',
    relationship: 'Worked with Burhan on the same team',
    quote:
      "In my year of working with Burhan, his exceptional skills in React.js, NestJS, and Ruby on Rails have profoundly impacted our projects. Burhan is a natural problem-solver, consistently tackling complex challenges with innovative and efficient solutions. His expertise in Jest testing has been crucial in ensuring our applications are both robust and reliable. Beyond his technical prowess, Burhan's collaborative spirit and dedication to collective success make him an invaluable team member.",
  },
  {
    name: 'Hassan Zameer',
    title: 'Senior Full-Stack Engineer | Node.js · Ruby on Rails · Python · React · TypeScript | AI Product Development',
    relationship: 'Worked with Burhan on the same team',
    quote:
      'I had the pleasure of working closely with Burhan, a skilled Rails engineer who showcased remarkable adaptability. In response to a project requirement, Burhan swiftly learned Nest.js, delivering a high-quality result that exceeded expectations. His dedication to continuous learning and ability to master new technologies make him an invaluable asset to any team.',
  },
  {
    name: 'Azan Arif',
    title: 'Ruby On Rails | Python & Django | Node JS | React | Angular | AWS | Shopify | Serverless',
    relationship: 'Worked with Burhan on the same team',
    quote:
      'Burhan is an outstanding software engineer, specializing in Ruby on Rails. Highly recommend him because his proficiency in RoR, coupled with a meticulous approach, consistently leads to the successful development of robust and efficient solutions making him a standout engineer in any Rails-centric project.',
  },
];

export const socials = {
  github: 'https://github.com/burhank928',
  linkedin: 'https://www.linkedin.com/in/burhan-k',
  resume: '/files/resume.pdf',
};
