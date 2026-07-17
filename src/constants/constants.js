export const ProjectsData = [
  {
    title: 'OMF (Fintech)',
    description: 'Customer identity and access management platform for a Fortune 500 personal finance company. Built a dedicated Angular 19 app with a NestJS BFF, migrating 7 auth flows from a Rails monolith using Okta IDX API, with iOS and Android apps built in Angular Ionic and traffic managed via Optimizely feature flags.',
    tags: ['Angular 19', 'NestJS', 'TypeScript', 'Okta IDX', 'Angular Ionic', 'Optimizely'],
    visit: 'https://onemainfinancial.com',
    id: 1,
  },
  {
    title: 'PC - Product Options (E-Commerce)',
    description: 'Shopify app enabling merchants to offer unlimited product customization options including engravings, color swatches, and image uploads. Built on React Remix with a GraphQL Shopify API integration, achieving "Built for Shopify" certification and a 15% boost in app adoption.',
    tags: ['React', 'Remix', 'GraphQL', 'Ruby on Rails', 'PostgreSQL', 'Shopify API'],
    visit: 'https://apps.shopify.com/product-customizer',
    id: 2,
  },
  {
    title: 'Orbit Health (Healthcare)',
    description: 'Remote mental health care platform serving hospitals, correctional facilities, and clinics. Built React Native features including real-time rider tracking with Mapbox and 5-second polling, used by both patients and admins to monitor active rides.',
    tags: ['React Native', 'Mapbox', 'Node.js', 'PostgreSQL'],
    visit: 'https://orbithealth.com',
    id: 3,
  },
  {
    title: 'Powur (Clean Energy)',
    description: 'Residential solar sales and fulfillment platform for solar installers and Powur representatives. Built full-stack features across a React frontend, NestJS microservices, and Rails backend, including an end-to-end production orders feature and Bull-based background job processing.',
    tags: ['React', 'NestJS', 'Ruby on Rails', 'Bull', 'PostgreSQL'],
    visit: 'https://powur.com',
    id: 4,
  },
  {
    title: 'Biomark (HealthCare)',
    description: 'BioMark is a platform that helps patients, doctors, and labs stay connected and updated with secure data transmission between them.',
    tags: ['JavaScript (ES6)', 'TypeScript', 'Ruby', 'React Native', 'Node.js', 'ROR', 'MySql', 'MongoDB', 'Redis', 'ClickUp'],
    visit: 'https://biomarking.com',
    id: 5,
  },
];

export const AccomplishmentsData = [
  {
    company: 'Independent Contractor · AI SaaS Startup',
    location: 'Islamabad, Pakistan',
    type: 'Contract',
    duration: 'Jan 2026 – Present',
    roles: [
      {
        title: 'Senior Full Stack Engineer',
        duration: 'Jan 2026 – Present',
        bullets: [
          'Built a streaming AI chat interface on web and mobile using SSE (Server-Sent Events) with a 50ms token-batching render pipeline for smooth real-time LLM responses without UI blocking or excessive re-renders.',
          'Integrated OpenAI and Azure AI APIs to power async curriculum generation, lesson content creation, and practice question generation, all processed via background workers to keep the frontend responsive.',
          'Built 5 production LLM features: dashboard intelligence narratives, applicant screening insights, ambassador recruitment coaching, marketing caption generation, and support ticket auto-summarization.',
          'Designed a platform adapter pattern for a shared TypeScript API client, separating token storage and auth handling into swappable web and mobile adapters for consistent API access across React and React Native.',
          'Built @arthurai/stores from scratch, a factory-pattern Zustand state management library supporting any storage backend (localStorage for web, MMKV for mobile, in-memory for tests).',
          'Built a fully customizable student dashboard with drag-to-reorder sections, visibility toggles, haptic feedback, and MMKV-persisted layout with schema versioning and forward-migration logic.',
          'Contributed to a multi-edition SaaS platform serving institutions across Pakistan, Kenya, and the USA from a single NestJS backend.',
        ],
      },
    ],
  },
  {
    company: 'Devsinc',
    location: 'Lahore, Pakistan',
    type: 'Full-time',
    duration: 'Jul 2022 – Jan 2026',
    roles: [
      {
        title: 'Senior Software Engineer',
        duration: 'Jul 2024 – Jan 2026',
        bullets: [
          'Led frontend developers across multiple client projects, running sprint planning, code reviews, and cross-team alignment to keep delivery on track.',
          'Migrated 7 authentication flows from a Ruby on Rails monolith into a dedicated Angular 19 app using the Okta IDX API, covering login, MFA (email and phone), forgot password, forgot username, temporary password, self-service unlock, and account creation.',
          'Built a NestJS BFF to handle API orchestration between the Angular app and MuleSoft endpoints, managing non-Okta flows like forgot username and account creation without exposing service dependencies to the frontend.',
          'Implemented Okta SSO session propagation across the new Angular app, legacy Rails app, and multiple Angular micro frontends owned by other teams, ensuring uninterrupted session continuity as traffic shifted from the monolith to microservices.',
          'Built and released iOS and Android apps using Angular Ionic, reusing the same auth flow implementations and codebase across web and mobile to eliminate duplicate development effort.',
          'Integrated Optimizely into the Angular app to gate auth flow releases during the Rails-to-Angular migration, enabling controlled traffic shifts without disrupting active users.',
          'Owned all flag creation and audience configuration in Optimizely, building device and platform-based audience rules to route web and mobile traffic independently as the iOS and Android apps launched alongside the existing web experience.',
        ],
      },
      {
        title: 'Software Engineer',
        duration: 'Jul 2023 – Jun 2024',
        bullets: [
          'Migrated from ERB/Vue.js to React Remix, developed new API endpoints, boosting UI performance by 40% and reducing response times by 26%.',
          'Migrated existing Shopify integration from REST to GraphQL, improving query speed and flexibility by 29%.',
          'Reduced unnecessary data fetching by 40% via GraphQL API improvements, resulting in a 33% reduction in database size and cache memory usage.',
          '"Built for Shopify" certification achieved by optimizing scalability, speed, and security, resulting in a 22% increase in user satisfaction and a 15% boost in app adoption.',
          "Extended Shopify's native buy button to carry custom product options through to checkout, resolving a platform limitation that dropped customization data on direct purchases and boosting conversion rates by 25%.",
          'Migrated deployment infrastructure from DigitalOcean to Hetzner and Coolify, reducing hosting costs by 20% and improving deployment workflows.',
          'Upgraded a decade-old Okta widget from version 6 to 7 with no existing documentation, delivering the upgrade in 6 months in collaboration with the Okta team and releasing it behind an Optimizely feature flag.',
          "Enabled and integrated Okta's voice call OTP feature, building the enrollment UI and wiring up the verification flow to give users an additional MFA option alongside SMS.",
          'Decoupled login functionality into React-based pages, reducing deployment conflicts by 30% and team dependencies by 17%.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        duration: 'Jul 2022 – Jun 2023',
        bullets: [
          'Built the complete SMS MFA enrollment flow from scratch for a fintech client, covering phone number input, carrier validation, OTP delivery, and OTP verification, with MuleSoft endpoint integration via service calls.',
          'Built a reusable JavaScript and jQuery password complexity component enforcing rules across multiple authentication pages, adopted by other teams across the application.',
          'Integrated Mapbox into a React Native healthcare app with 5-second polling to update rider location pins live on the map, used by both patients tracking their rider and admins monitoring all active rides.',
          'Built an end-to-end production orders feature for a clean energy platform covering supplier parts selection, order submission, and order review workflow, with a React frontend, NestJS service layer, and Rails background jobs for order processing.',
          'Resolved a complex circular dependency across 4-5 nested NestJS modules by decoupling the injection chain using Bull queues, passing required data through job params and processing updates asynchronously.',
          'Developed automated test cases using RSpec, reducing manual testing efforts by 50% and improving overall code reliability.',
          'Applied DRY coding principles across multiple codebases, reducing redundancy and improving long-term maintainability.',
        ],
      },
    ],
  },
  {
    company: 'Systems Limited',
    location: 'Lahore, Pakistan',
    type: 'Internship',
    duration: 'Sep 2021 – Nov 2021',
    roles: [
      {
        title: 'Intern',
        duration: 'Sep 2021 – Nov 2021',
        bullets: [],
      },
    ],
  },
];

export const TimeLineData = [
  { year: 2016, text: 'Started my journey as a developer.', },
  { year: 2017, text: 'Worked intensively on ROMs & Kernels.', },
  { year: 2018, text: 'Learned Android app development.', },
  { year: 2019, text: 'Finished Diploma in Computer Engineering.', },
  { year: 2020, text: 'Aquired new skills while trying not to catch COVID-19', },
  { year: 2021, text: 'Survived COVID-19 and got my first Job at Primebook.', },
  { year: 2022, text: 'Completed B.Tech in Information Technology.', },
  { year: 2023, text: 'Year under progress....', },
];