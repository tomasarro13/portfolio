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
    headline: 'I build mobile apps and care about the architecture underneath them.',
    summary: [
      'I am completing my Informatics Engineering degree at Universidad de La Sabana and work as a Flutter developer at Tech SAS, where I am responsible for BO-TECH TRACKING, a real-time school tracking and access control app used by schools, transport operators and families across Colombia. I write mostly Python, Java and Flutter with Dart, and I am interested in infraestructure, development and robotics.',
      'Before moving into development I spent three years in technical support at Teleperformance, diagnosing hardware and software problems for customers under real time pressure. That work taught me to debug methodically and to explain technical issues in plain language.',
    ],
    location: 'Bogotá, Colombia',
    availability: 'Open to software engineering roles',
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
        'Responsible for BO-TECH TRACKING since version 3.2.3, a real-time school tracking and access control app serving schools, transport operators and families across Colombia.',
        'Built features including BOTi, an AI chatbot; digital ID cards in Apple Wallet; geofencing; multi-profile accounts; and the permissions and incident-reporting modules.',
        'Ship to iOS and Android from a single codebase, integrating REST APIs, background geolocation, push notifications and QR codes.',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'REST APIs',
        'Background geolocation',
        'Push notifications',
      ],
    },
    {
      role: 'Technical Support & Customer Service Representative',
      company: 'Teleperformance',
      location: 'Colombia',
      start: '2023-07',
      end: '2026-05',
      highlights: [
        'Diagnosed and resolved hardware and software issues for customers.',
        'Guided users through troubleshooting processes, improving resolution efficiency and customer satisfaction.',
        'Handled high-volume interactions while meeting service quality and performance metrics.',
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
      technologies: ['Flutter', 'Dart', 'REST APIs', 'Apple Wallet', 'QR codes'],
      // The code is private company property: link only to the public product page.
      repositoryUrl: null,
      liveUrl: 'https://botech.com.co/',
      featured: true,
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
      featured: true,
    },
    // Add more projects by copying this template:
    // {
    //   name: 'Project name',
    //   summary: 'One or two sentences on what it does and why.',
    //   highlights: ['What you built, and the result.'],
    //   technologies: ['Flutter', 'Firebase'],
    //   repositoryUrl: 'https://github.com/your-username/project',
    //   liveUrl: null,
    //   featured: false,
    // },
  ],

  skillGroups: [
    { name: 'Programming', skills: ['Python', 'Java', 'Dart'] },
        {
      name: 'Mobile', 
      skills: ['Flutter', 'REST APIs', 'Background geolocation', 'Push notifications'],
    },
    { name: 'Tools and platforms', skills: ['Git', 'GitHub', 'Linux', 'DevOps practices'] },
    {
      name: 'Ways of working',
      skills: ['Scrum', 'Troubleshooting', 'Problem solving', 'Teamwork'],
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
      degree: 'High school diploma',
      institution: 'Instituto Studium',
      location: 'Chía, Colombia',
      status: 'completed',
      graduation: '2021-06',
    },
  ],
};
