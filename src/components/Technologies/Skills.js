import { DiJavascript1, DiReact, DiRuby, DiNodejsSmall, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiRedux, SiGraphql, SiMongodb, SiDocker, SiJenkins, SiHeroku, SiShopify, SiNextdotjs, SiNestjs, SiBootstrap, SiMui, SiRedis, SiDigitalocean, SiAmazonwebservices, SiReactquery, SiTailwindcss, SiFramer, SiRadixui, SiPrisma, SiOpenai, SiGithubactions, SiHetzner, SiVercel, SiPostgresql } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { MdViewStream, MdModelTraining, MdRecordVoiceOver } from "react-icons/md";
import { BsFillCloudFill } from "react-icons/bs";

export const Skills = [
  {
    category: "Languages",
    skills: [
      {
        slug: "javascript",
        Component: DiJavascript1,
        title: "JavaScript",
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
        slug: "sql",
        Component: SiPostgresql,
        title: "SQL",
        Description: () => <>Relational database querying</>,
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        slug: "react",
        Component: RiReactjsLine,
        title: "React.js",
        Description: () => <>Frontend development for dynamic web apps</>,
      },
      {
        slug: "react-native",
        Component: DiReact,
        title: "React Native",
        Description: () => <>Cross-platform mobile app development</>,
      },
      {
        slug: "nextjs",
        Component: SiNextdotjs,
        title: "Next.js",
        Description: () => <>Server-side rendering and static site generation</>,
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
        Description: () => <>State management for React applications</>,
      },
      {
        slug: "react-query",
        Component: SiReactquery,
        title: "React Query",
        Description: () => <>Data fetching and caching for React applications</>,
      },
      {
        slug: "tanstack-query",
        Component: SiReactquery,
        title: "TanStack Query",
        Description: () => <>Data fetching and caching</>,
      },
      {
        slug: "tailwindcss",
        Component: SiTailwindcss,
        title: "Tailwind CSS",
        Description: () => <>Utility-first CSS framework</>,
      },
      {
        slug: "framer-motion",
        Component: SiFramer,
        title: "Framer Motion",
        Description: () => <>Animation library for React</>,
      },
      {
        slug: "radix-ui",
        Component: SiRadixui,
        title: "Radix UI",
        Description: () => <>Unstyled accessible UI components</>,
      },
      {
        slug: "prisma",
        Component: SiPrisma,
        title: "Prisma ORM",
        Description: () => <>Next-generation ORM for Node.js</>,
      },
      {
        slug: "nestjs",
        Component: SiNestjs,
        title: "Nest.js",
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
        Component: DiRuby,
        title: "Rails",
        Description: () => <>Web application framework for Ruby</>,
      },
      {
        slug: "material-ui",
        Component: SiMui,
        title: "Material-UI",
        Description: () => <>UI components for React applications</>,
      },
      {
        slug: "bootstrap",
        Component: SiBootstrap,
        title: "Bootstrap",
        Description: () => <>CSS framework for responsive design</>,
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
        slug: "tts",
        Component: MdRecordVoiceOver,
        title: "Text-to-Speech (TTS)",
        Description: () => <>AI voice synthesis integration</>,
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        slug: "postgresql",
        Component: DiPostgresql,
        title: "PostgreSQL",
        Description: () => <>Relational database management</>,
      },
      {
        slug: "mysql",
        Component: DiPostgresql,
        title: "MySQL",
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
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      {
        slug: "azure",
        Component: VscAzure,
        title: "Azure",
        Description: () => <>Cloud services and AI infrastructure</>,
      },
      {
        slug: "aws",
        Component: SiAmazonwebservices,
        title: "AWS",
        Description: () => <>Cloud services for hosting and deployment</>,
      },
      {
        slug: "vercel",
        Component: SiVercel,
        title: "Vercel",
        Description: () => <>Frontend deployment platform</>,
      },
      {
        slug: "heroku",
        Component: SiHeroku,
        title: "Heroku",
        Description: () => <>Cloud platform for app deployment</>,
      },
      {
        slug: "digitalocean",
        Component: SiDigitalocean,
        title: "DigitalOcean",
        Description: () => <>Cloud services for hosting and deployment</>,
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
        slug: "jenkins",
        Component: SiJenkins,
        title: "Jenkins",
        Description: () => <>CI/CD pipelines for automated deployments</>,
      },
    ],
  },
  {
    category: "Tools & APIs",
    skills: [
      {
        slug: "shopify",
        Component: SiShopify,
        title: "Shopify API",
        Description: () => <>E-commerce platform integration</>,
      },
      {
        slug: "graphql",
        Component: SiGraphql,
        title: "GraphQL",
        Description: () => <>Efficient data querying and API integration</>,
      },
    ],
  },
];
