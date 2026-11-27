import type { PortfolioSource } from './PortfolioSource';

/**
 * All the content of the portfolio lives in this file.
 * Edit it, run `npm run dev`, and the page updates.
 *
 * Privacy: everything here is published on the internet.
 * Do not add your phone number, home address or ID number.
 */
export const portfolioData: PortfolioSource = {
  profile: {
    fullName: 'Tomas Ariza Rodriguez',
    headline:
      'I build software and use AI and automation to make processes faster and more reliable.',
    summary: [
      'I am completing my Informatics Engineering degree at Universidad de La Sabana, where I am also taking a diploma course in Artificial Intelligence Applied to Business. At Tech SAS I am responsible for BO-TECH TRACKING, a real-time school tracking app used by schools, transport operators and families across Colombia. There I built BOTi, an AI chatbot that answers families’ questions inside the app.',
      'In university projects I have automated a support process with n8n, orchestrated workflows with Prefect, and designed distributed systems with the Saga pattern. Before moving into development I spent three years in technical support at Teleperformance. That work taught me to start from the customer’s problem before deciding what to automate.',
    ],
    location: 'Bogotá, Colombia',
    availability: 'Open to internships in AI, automation and software from January 2027',
    email: 'tomas13ariza@gmail.com',
    links: [
      { network: 'github', label: 'GitHub', url: 'https://github.com/tomasarro13' },
      { network: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/tomasarro13/' },
    ],
    // Public repository with the code of this site. Its name on GitHub must be "portfolio".
    sourceCodeUrl: 'https://github.com/tomasarro13/portfolio',
  },

  experiences: [
    {
      role: 'Mobile Developer',
      company: 'Tech SAS',
      location: 'Colombia',
      start: '2026-05',
      end: null,
      highlights: [
        'Responsible for BO-TECH TRACKING since version 3.2.3, a real-time school tracking and access control app connected to a microservices backend, serving schools, transport operators and families across Colombia.',
        'Built BOTi, an AI chatbot that answers families’ questions inside the app.',
        'Built digital ID cards in Apple Wallet, geofencing, multi-profile accounts, and the permissions and incident-reporting modules.',
        'Ship to iOS and Android from a single codebase, integrating REST APIs, background geolocation, push notifications and QR codes. The team works in Scrum sprints tracked in Jira, and I handle minors’ personal data under Colombia’s habeas data rules.',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'AI chatbot',
        'REST APIs',
        'Background geolocation',
        'Push notifications',
        'Jira',
      ],
    },
    {
      role: 'Bilingual Technical Support Advisor (Apple)',
      company: 'Teleperformance',
      location: 'Colombia',
      start: '2023-07',
      end: '2026-05',
      highlights: [
        'Bilingual technical support (English B2) for Apple customers on iOS, iPadOS and watchOS, 48 hours a week.',
        'Diagnosed and resolved hardware and software issues following structured troubleshooting processes.',
        'Handled high-volume interactions while meeting quality, response-time and customer satisfaction targets, receiving 20 to 40 satisfaction surveys a month on average.',
      ],
      technologies: [],
    },
  ],

  projects: [
    {
      name: 'BO-TECH TRACKING',
      summary:
        'Mobile app by Tech SAS for school transport safety in Colombia. Families follow the route in real time, and schools control who enters and leaves. I have been responsible for it since version 3.2.3.',
      highlights: [
        'AI chatbot (BOTi) that answers families’ questions inside the app.',
        'Digital student ID card in Apple Wallet, and QR codes for access control.',
        'Geofencing, background geolocation and push notifications for arrivals and incidents.',
        'Multi-profile accounts so one adult can follow several children.',
      ],
      technologies: ['Flutter', 'Dart', 'AI chatbot', 'REST APIs', 'Apple Wallet', 'QR codes'],
      // The code is private company property: link only to the public product page.
      repositoryUrl: null,
      liveUrl: 'https://botech.com.co/',
      featured: true,
    },
    {
      name: 'Support automation with n8n',
      summary:
        'University team project that redesigned the support process of BO-TECH TRACKING and automated it with n8n. Requests are classified, answered or escalated automatically, with SLA monitoring and full traceability.',
      highlights: [
        'Mapped the current process (AS-IS) and designed the target process (TO-BE), with categories, priorities, SLAs and escalation rules.',
        'Four n8n workflows: intake and automatic response, case status lookup, agent console with a CSAT survey, and an SLA monitor with alerts and auto-close.',
        'A rules engine in JavaScript, unit-tested and embedded in the workflows, so the documented logic is the logic that runs.',
        'In a simulation with 141 requests, 64.9% of in-scope requests were resolved without human intervention, with 100% traceability and a median response of 107 ms.',
      ],
      technologies: ['n8n', 'JavaScript', 'Node.js', 'Webhooks', 'REST APIs', 'Docker'],
      // TODO: when the repository is public, set its URL here, e.g.
      // 'https://github.com/tomasarro13/botech-soporte-tracking-mvp'
      repositoryUrl: null,
      liveUrl: null,
      featured: true,
    },
    {
      name: 'AegisVolt',
      summary:
        'Cloud-native platform where electric fleet operators book charging bays, pay from a wallet and start charging sessions. The distributed transaction uses the Saga pattern with compensations, across three isolated environments on emulated AWS.',
      highlights: [
        'Four independent microservices behind a GraphQL gateway that also runs a generic Saga orchestrator.',
        'Infrastructure as code with Terraform: VPC, EKS, API Gateway, DynamoDB and feature flags for dev, test and prod.',
        'Prefect flows monitor service health and audit every Saga, with structured logs in CloudWatch.',
      ],
      technologies: [
        'TypeScript',
        'GraphQL',
        'Next.js',
        'Kubernetes',
        'Terraform',
        'Prefect',
        'Docker',
      ],
      repositoryUrl: 'https://github.com/tomasarro13/aegisvolt-proyecto-final',
      liveUrl: null,
      featured: true,
    },
    {
      name: 'Hydro-meteorological early-warning station',
      summary:
        'IoT system that warns of water shortages in Sabana Centro, Cundinamarca. Three-person team; I was responsible for the gateway and the data layer.',
      highlights: [
        'Four layers connected by MQTT: ESP32 node, Raspberry Pi gateway, Ubidots cloud and the local authority.',
        'The gateway stores readings in SQLite, processes them and runs an AI module that predicts when the water level will reach the alert threshold.',
        'The analysis tells apart a drop explained by evaporation from one the weather does not explain, such as a leak.',
        'Validated end to end in simulation, with a nine-test bench.',
      ],
      technologies: ['Python', 'MQTT', 'Raspberry Pi', 'ESP32', 'SQLite', 'Ubidots'],
      repositoryUrl: 'https://github.com/tomasarro13/estacion-hidrometeorologica-sabana-centro',
      liveUrl: null,
      featured: true,
    },
    {
      name: 'NovaBank Saga',
      summary:
        'Distributed interbank transfers that implement both forms of the Saga pattern, orchestration and choreography, with compensations in reverse order and full traceability in Prefect.',
      highlights: [
        'Control console with a chaos simulator to inject failures and watch the compensations run.',
        'API gateway with idempotency and an audit log; the whole system starts with one Docker Compose command.',
      ],
      technologies: ['Python', 'Prefect', 'Node.js', 'Next.js', 'Docker'],
      repositoryUrl: 'https://github.com/tomasarro13/novabank-saga',
      liveUrl: null,
      featured: false,
    },
    {
      name: 'Two-factor authentication lab',
      summary:
        'Step-up authentication with TOTP (RFC 6238) built from scratch: an offline Flutter authenticator app and a FastAPI backend that verifies codes in an observable Prefect flow.',
      highlights: [
        'TOTP algorithm implemented without libraries, with anti-replay protection.',
        'Backend organised with Clean Architecture and the Strategy pattern for second factors.',
      ],
      technologies: ['Python', 'FastAPI', 'Flutter', 'Prefect', 'Supabase'],
      repositoryUrl: 'https://github.com/tomasarro13/2MFA',
      liveUrl: null,
      featured: false,
    },
    {
      name: 'Distributed data cleaning with Dask',
      summary:
        'A Dask cluster (one scheduler, three workers) in Docker that cleans 300,000 dirty records out of core, orchestrated by Prefect with retries and quality gates.',
      highlights: [
        'Business rules kept in plain pandas, separate from the distributed engine, and covered by 25 tests.',
        'Benchmark of single-node versus cluster execution and a fault-tolerance experiment.',
      ],
      technologies: ['Python', 'Dask', 'pandas', 'Prefect', 'Docker'],
      repositoryUrl: 'https://github.com/tomasarro13/taller-dask',
      liveUrl: null,
      featured: false,
    },
    {
      name: 'This portfolio',
      summary:
        'A static site built with Astro and organised with Clean Architecture. Layer boundaries are enforced by lint rules, and every pull request runs type checks, unit tests and a build before it can be merged.',
      highlights: [
        'Domain, application, infrastructure and presentation layers, with dependencies pointing only inward.',
        'Content is validated by domain rules at build time: a malformed date or a non-HTTPS link stops the deployment.',
        'Strict Content Security Policy and security headers, with no third-party scripts, trackers or external fonts.',
      ],
      technologies: ['Astro', 'TypeScript', 'Vitest', 'GitHub Actions', 'Cloudflare Workers'],
      repositoryUrl: 'https://github.com/tomasarro13/portfolio',
      liveUrl: null,
      featured: false,
    },
  ],

  skillGroups: [
    {
      name: 'AI and automation',
      skills: ['n8n', 'AI chatbots', 'Prefect', 'Webhooks', 'Rules engines', 'Process automation'],
    },
    {
      name: 'Processes',
      skills: ['AS-IS / TO-BE process design', 'Flow diagrams', 'SLAs and KPIs', 'Design Thinking'],
    },
    {
      name: 'Programming',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Dart'],
    },
    {
      name: 'Mobile and backend',
      skills: ['Flutter', 'REST APIs', 'GraphQL', 'FastAPI', 'Node.js', 'Supabase'],
    },
    {
      name: 'Tools and platforms',
      skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Terraform', 'Linux'],
    },
    {
      name: 'Ways of working',
      skills: ['Scrum', 'Jira', 'Troubleshooting', 'Teamwork'],
    },
    { name: 'Spoken languages', skills: ['Spanish (native)', 'English (B2)'] },
  ],

  certifications: [
    {
      name: 'Scrum Foundation Professional Certification (SFPC)',
      issuer: 'Certiprof',
      year: 2026,
      credentialUrl: null,
    },
    {
      name: 'NDG Linux Unhatched',
      issuer: 'Cisco Networking Academy',
      year: 2026,
      credentialUrl: null,
    },
    {
      name: 'Introduction to IoT',
      issuer: 'Cisco Networking Academy',
      year: 2026,
      credentialUrl: null,
    },
    {
      name: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps',
      issuer: 'IBM on Coursera',
      year: 2026,
      credentialUrl: null,
    },
  ],

  education: [
    {
      degree: 'Bachelor’s degree in Informatics Engineering',
      institution: 'Universidad de La Sabana',
      location: 'Chía, Colombia',
      status: 'in-progress',
      // Expected graduation: academic period 2027-2.
      graduation: '2027-09',
    },
    {
      degree: 'Diploma course in Artificial Intelligence Applied to Business',
      institution: 'Universidad de La Sabana',
      location: 'Chía, Colombia',
      status: 'in-progress',
      // Expected completion.
      graduation: '2027-02',
    },
    {
      degree: 'High school diploma',
      institution: 'Instituto Studium',
      location: 'Chía, Colombia',
      status: 'completed',
      graduation: '2021-06',
    },
  ],
};
