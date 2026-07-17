import { DiJavascript1, DiHtml5, DiCss3, DiRuby, DiNodejsSmall, DiPostgresql } from "react-icons/di";
import {
  SiTypescript, SiAngular, SiIonic, SiVite, SiTailwindcss, SiRadixui, SiMui, SiFramer,
  SiRedux, SiReactquery, SiReacthookform, SiZod, SiNestjs, SiRubyonrails, SiPrisma,
  SiGraphql, SiJsonwebtokens, SiStripe, SiTwilio, SiSidekiq, SiOpenai, SiPostgresql,
  SiMongodb, SiRedis, SiMysql, SiAmazonwebservices, SiDocker, SiGithubactions, SiNginx,
  SiVercel, SiHetzner, SiDigitalocean, SiExpo, SiVitest, SiJest, SiMapbox, SiGithub,
  SiJira, SiConfluence, SiPnpm, SiScrumalliance,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { MdViewStream, MdModelTraining, MdAutoAwesome, MdPhoneIphone } from "react-icons/md";
import { BsFillCloudFill, BsBuildings } from "react-icons/bs";
import { TbApi, TbInfinity, TbTestPipe, TbFlagCog, TbActivity } from "react-icons/tb";
import { GiBull } from "react-icons/gi";

export const Skills = [
  {
    category: "Languages",
    skills: [
      {
        slug: "javascript",
        Component: DiJavascript1,
        title: "JavaScript (ES6)",
        Description: () => <>Proficient in ES6+ for web and app development</>,
      },
      {
        slug: "typescript",
        Component: SiTypescript,
        title: "TypeScript",
        Description: () => <>Strongly typed JavaScript for scalable applications</>,
      },
      {
        slug: "ruby",
        Component: DiRuby,
        title: "Ruby",
        Description: () => <>Backend development with Ruby on Rails</>,
      },
      {
        slug: "html",
        Component: DiHtml5,
        title: "HTML",
        Description: () => <>Semantic markup for web applications</>,
      },
      {
        slug: "css",
        Component: DiCss3,
        title: "CSS",
        Description: () => <>Styling and responsive layouts</>,
      },
      {
        slug: "sql",
        Component: DiPostgresql,
        title: "SQL",
        Description: () => <>Relational database querying</>,
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        slug: "react",
        Component: RiReactjsLine,
        title: "React.js",
        Description: () => <>Frontend development for dynamic web apps</>,
      },
      {
        slug: "angular",
        Component: SiAngular,
        title: "Angular",
        Description: () => <>Enterprise-grade single page applications</>,
      },
      {
        slug: "nextjs",
        Component: RiReactjsLine,
        title: "Next.js",
        Description: () => <>Server-side rendering and static site generation</>,
      },
      {
        slug: "ionic",
        Component: SiIonic,
        title: "Ionic",
        Description: () => <>Cross-platform mobile apps with web technologies</>,
      },
      {
        slug: "vite",
        Component: SiVite,
        title: "Vite",
        Description: () => <>Fast frontend build tooling</>,
      },
      {
        slug: "tailwindcss",
        Component: SiTailwindcss,
        title: "Tailwind CSS",
        Description: () => <>Utility-first CSS framework</>,
      },
      {
        slug: "radix-ui",
        Component: SiRadixui,
        title: "Radix UI",
        Description: () => <>Unstyled accessible UI components</>,
      },
      {
        slug: "material-ui",
        Component: SiMui,
        title: "Material-UI",
        Description: () => <>UI components for React applications</>,
      },
      {
        slug: "framer-motion",
        Component: SiFramer,
        title: "Framer Motion",
        Description: () => <>Animation library for React</>,
      },
      {
        slug: "redux",
        Component: SiRedux,
        title: "Redux",
        Description: () => <>State management for React applications</>,
      },
      {
        slug: "zustand",
        Component: SiRedux,
        title: "Zustand",
        Description: () => <>Lightweight state management</>,
      },
      {
        slug: "tanstack-query",
        Component: SiReactquery,
        title: "TanStack Query",
        Description: () => <>Data fetching and caching</>,
      },
      {
        slug: "react-hook-form",
        Component: SiReacthookform,
        title: "React Hook Form",
        Description: () => <>Performant form state management</>,
      },
      {
        slug: "zod",
        Component: SiZod,
        title: "Zod",
        Description: () => <>Schema validation for TypeScript</>,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        slug: "nodejs",
        Component: DiNodejsSmall,
        title: "Node.js",
        Description: () => <>JavaScript runtime for server-side development</>,
      },
      {
        slug: "nestjs",
        Component: SiNestjs,
        title: "NestJS",
        Description: () => <>Framework for building scalable server-side applications</>,
      },
      {
        slug: "expressjs",
        Component: DiNodejsSmall,
        title: "Express.js",
        Description: () => <>Web framework for Node.js</>,
      },
      {
        slug: "rails",
        Component: SiRubyonrails,
        title: "Ruby on Rails",
        Description: () => <>Web application framework for Ruby</>,
      },
      {
        slug: "prisma",
        Component: SiPrisma,
        title: "Prisma ORM",
        Description: () => <>Next-generation ORM for Node.js</>,
      },
      {
        slug: "graphql",
        Component: SiGraphql,
        title: "GraphQL",
        Description: () => <>Efficient data querying and API integration</>,
      },
      {
        slug: "rest",
        Component: TbApi,
        title: "REST",
        Description: () => <>RESTful API design and integration</>,
      },
      {
        slug: "jwt",
        Component: SiJsonwebtokens,
        title: "JWT",
        Description: () => <>Token-based authentication</>,
      },
      {
        slug: "stripe",
        Component: SiStripe,
        title: "Stripe",
        Description: () => <>Payment processing integration</>,
      },
      {
        slug: "twilio",
        Component: SiTwilio,
        title: "Twilio",
        Description: () => <>SMS, voice, and WhatsApp integrations</>,
      },
      {
        slug: "sidekiq",
        Component: SiSidekiq,
        title: "Sidekiq",
        Description: () => <>Background job processing for Ruby</>,
      },
    ],
  },
  {
    category: "AI & LLM",
    skills: [
      {
        slug: "openai",
        Component: SiOpenai,
        title: "OpenAI API",
        Description: () => <>LLM integration and AI feature development</>,
      },
      {
        slug: "azure-ai",
        Component: VscAzure,
        title: "Azure AI Foundry",
        Description: () => <>Enterprise AI service integration</>,
      },
      {
        slug: "llm-integration",
        Component: MdAutoAwesome,
        title: "LLM Integration",
        Description: () => <>Embedding LLMs into production applications</>,
      },
      {
        slug: "sse-streaming",
        Component: MdViewStream,
        title: "SSE Streaming",
        Description: () => <>Real-time streaming AI interfaces</>,
      },
      {
        slug: "prompt-engineering",
        Component: MdModelTraining,
        title: "Prompt Engineering",
        Description: () => <>Designing effective LLM prompts</>,
      },
      {
        slug: "ai-content-generation",
        Component: MdAutoAwesome,
        title: "AI Content Generation",
        Description: () => <>Async AI-powered content and copy generation</>,
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        slug: "postgresql",
        Component: SiPostgresql,
        title: "PostgreSQL",
        Description: () => <>Relational database management</>,
      },
      {
        slug: "mongodb",
        Component: SiMongodb,
        title: "MongoDB",
        Description: () => <>NoSQL database for scalable applications</>,
      },
      {
        slug: "redis",
        Component: SiRedis,
        title: "Redis",
        Description: () => <>In-memory data structure store</>,
      },
      {
        slug: "mysql",
        Component: SiMysql,
        title: "MySQL",
        Description: () => <>Relational database management</>,
      },
      {
        slug: "azure-cosmos-db",
        Component: VscAzure,
        title: "Azure Cosmos DB",
        Description: () => <>Globally distributed NoSQL database</>,
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      {
        slug: "aws",
        Component: SiAmazonwebservices,
        title: "AWS",
        Description: () => <>Cloud services for hosting and deployment</>,
      },
      {
        slug: "azure",
        Component: VscAzure,
        title: "Azure",
        Description: () => <>Cloud services and AI infrastructure</>,
      },
      {
        slug: "docker",
        Component: SiDocker,
        title: "Docker",
        Description: () => <>Containerization for development and deployment</>,
      },
      {
        slug: "github-actions",
        Component: SiGithubactions,
        title: "GitHub Actions",
        Description: () => <>Automated CI/CD workflows</>,
      },
      {
        slug: "cicd",
        Component: TbInfinity,
        title: "CI/CD",
        Description: () => <>Continuous integration and deployment pipelines</>,
      },
      {
        slug: "nginx",
        Component: SiNginx,
        title: "Nginx",
        Description: () => <>Web server and reverse proxy configuration</>,
      },
      {
        slug: "vercel",
        Component: SiVercel,
        title: "Vercel",
        Description: () => <>Frontend deployment platform</>,
      },
      {
        slug: "hetzner",
        Component: SiHetzner,
        title: "Hetzner",
        Description: () => <>Cloud server hosting</>,
      },
      {
        slug: "coolify",
        Component: BsFillCloudFill,
        title: "Coolify",
        Description: () => <>Self-hosted deployment platform</>,
      },
      {
        slug: "digitalocean",
        Component: SiDigitalocean,
        title: "DigitalOcean",
        Description: () => <>Cloud services for hosting and deployment</>,
      },
    ],
  },
  {
    category: "Mobile & Testing",
    skills: [
      {
        slug: "react-native",
        Component: RiReactjsLine,
        title: "React Native",
        Description: () => <>Cross-platform mobile app development</>,
      },
      {
        slug: "expo",
        Component: SiExpo,
        title: "Expo",
        Description: () => <>React Native tooling and app distribution</>,
      },
      {
        slug: "vitest",
        Component: SiVitest,
        title: "Vitest",
        Description: () => <>Fast unit testing for Vite-based apps</>,
      },
      {
        slug: "jest",
        Component: SiJest,
        title: "Jest",
        Description: () => <>JavaScript testing framework</>,
      },
      {
        slug: "playwright",
        Component: TbTestPipe,
        title: "Playwright",
        Description: () => <>End-to-end browser testing</>,
      },
      {
        slug: "maestro",
        Component: MdPhoneIphone,
        title: "Maestro (E2E)",
        Description: () => <>End-to-end testing for mobile apps</>,
      },
      {
        slug: "rspec",
        Component: DiRuby,
        title: "RSpec",
        Description: () => <>Behavior-driven testing for Ruby</>,
      },
      {
        slug: "k6",
        Component: SiVitest,
        title: "K6",
        Description: () => <>Load and performance testing</>,
      },
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      {
        slug: "agile-scrum",
        Component: SiScrumalliance,
        title: "Agile Scrum",
        Description: () => <>Sprint planning and cross-team delivery</>,
      },
      {
        slug: "optimizely",
        Component: TbFlagCog,
        title: "Optimizely",
        Description: () => <>Feature flagging and audience-based rollouts</>,
      },
      {
        slug: "bull",
        Component: GiBull,
        title: "Bull",
        Description: () => <>Redis-based queue for background jobs</>,
      },
      {
        slug: "mapbox",
        Component: SiMapbox,
        title: "Mapbox",
        Description: () => <>Real-time maps and location tracking</>,
      },
      {
        slug: "github",
        Component: SiGithub,
        title: "GitHub",
        Description: () => <>Version control and collaboration</>,
      },
      {
        slug: "jira",
        Component: SiJira,
        title: "Jira",
        Description: () => <>Issue tracking and sprint management</>,
      },
      {
        slug: "confluence",
        Component: SiConfluence,
        title: "Confluence",
        Description: () => <>Team documentation and knowledge base</>,
      },
      {
        slug: "pnpm-monorepo",
        Component: SiPnpm,
        title: "pnpm Monorepo",
        Description: () => <>Monorepo package management</>,
      },
      {
        slug: "multi-tenant-saas",
        Component: BsBuildings,
        title: "Multi-tenant SaaS",
        Description: () => <>Architecting platforms for multiple organizations</>,
      },
      {
        slug: "event-driven-architecture",
        Component: TbActivity,
        title: "Event-Driven Architecture",
        Description: () => <>Asynchronous, event-based system design</>,
      },
    ],
  },
];
