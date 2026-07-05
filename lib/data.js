// lib/data.js
// Single source of truth for all CV-derived content.
// Update repo slugs in `projects[].repo` once verified against
// https://github.com/shehrozmajeed — current values are best-guess
// slugs derived from the CV's project titles.

export const profile = {
  name: { first: 'Shehroz', last: 'Majeed' },
  role: 'Cybersecurity Researcher & Applied AI Engineer',
  location: 'Pakistan',
  email: 'shehrozmajeed.sec@gmail.com',
  phone: '+92 305 3780288',
  linkedin: 'https://www.linkedin.com/in/shehroz-majeed-a46a012b8/',
  github: 'https://github.com/shehrozmajeed',
  tryhackme: 'https://tryhackme.com/p/shehrozmajeed',
  resumeUrl: '/resume/Shehroz_Majeed_Resume.pdf',
  heroHighlights: [
    '[0x9] [MAGE]',
    '🏆 2× THM League Champion • 🥈 3× THM League Runner-up',
    '🛡️ THM Jr Penetration Tester',
    'AI Security (THM)',
    "🎓 GIKI '27",
    '⚙️ Security Tool Developer',
  ],
  summary: [
    "I'm Shehroz Majeed, a passionate cybersecurity learner with a strong interest in ethical hacking and digital security. I enjoy exploring how systems work, identifying vulnerabilities, and understanding how to defend against modern cyber threats.",
    'My journey in cybersecurity is driven by curiosity and continuous learning. I actively practice through hands-on labs and real-world challenges, focusing on areas such as web security, network security, and penetration testing. I believe that the best way to learn security is by thinking like an attacker while building like a defender.',
    'I am constantly improving my skills, staying updated with the latest security trends, and working toward becoming a skilled cybersecurity professional. My goal is to contribute to a safer digital world by helping organizations protect their systems and data.',
    "When I'm not learning or practicing, I spend time researching new tools, techniques, and vulnerabilities to deepen my understanding of cybersecurity.",
  ],
};

export const stats = [
  { value: 'Top 4%', label: 'Global rank, TryHackMe' },
  { value: '10,000+', label: 'Points earned on TryHackMe' },
  { value: '100+', label: 'Rooms solved' },
  { value: '170+', label: 'Flags captured' },
  { value: '9', label: 'Shipped security & ML projects' },
];

export const thmPaths = [
  { name: 'Jr Penetration Tester', status: 'Path Completed' },
  { name: 'AI Security', status: 'Path Completed' },
];

export const education = {
  school: 'Ghulam Ishaq Khan Institute (GIKI)',
  degree: 'B.S. Computer Science',
  period: '2023 — Present',
  focus: 'Network Security, OS, Data Structures, Algorithms, AI',
  location: 'Pakistan',
  prior: {
    school: 'Abdalian Higher Secondary School, Pakistan',
    result: '89%',
    period: '2021 — 2023',
  },
};

export const experience = [
  {
    org: 'NEXUS — Cybersecurity Society, GIK Institute',
    role: 'President',
    period: 'May 2026 — Present',
    priorRole: 'Head, Cybersecurity Division (2024 — Apr 2026)',
    location: 'Pakistan',
    bullets: [
      'Spearheading industry speaker sessions and hands-on lab programs for 100+ members as President.',
      'Grew active membership 30%+ through cybersecurity workshops and CTF competitions.',
      'Designed and delivered offensive security labs covering web exploitation, network scanning, and CTF methodologies.',
    ],
  },
  {
    org: 'CyberSecurity Malaysia',
    role: 'Ethical Hacking Intern (Remote)',
    period: 'Jun 2024 — Jul 2024',
    location: 'Malaysia',
    bullets: [
      'Conducted vulnerability assessments on web applications using Burp Suite, Nmap, and OWASP ZAP.',
      'Produced structured pentest reports detailing CVEs, risk ratings, and remediation recommendations.',
      'Applied OWASP Top 10 methodology across multiple assessment targets.',
    ],
  },
];

export const projects = [
  {
    title: 'IPDR-Cloud',
    subtitle: 'ML Proactive Disaster Recovery — Research Paper',
    period: 'Jan — Apr 2026',
    stack: ['Python', 'DQN', 'PyTorch'],
    description:
      'Co-authored IEEE-style paper. A DQN agent trained on the Google Cluster Trace 2019 achieves 96.5% SLA compliance and cuts mean RPO to 0.5 minutes with zero SLA breaches.',
    repo: 'https://github.com/shehrozmajeed/IPDR-Cloud',
    featured: true,
  },
  {
    title: 'KAPA v1.0',
    subtitle: 'Autonomous AI Attacker Simulator',
    period: 'Oct — Dec 2025',
    stack: ['Python', 'Machine Learning', 'Scapy'],
    description:
      'An autonomous AI agent for authorized red-team simulation, modeling recon → exploit → persist chains — cutting red-team effort by roughly 60%.',
    repo: 'https://github.com/shehrozmajeed/KAPAv1.0',
    featured: true,
  },
  {
    title: 'Zero Trust Digital Twin',
    subtitle: 'Enterprise network simulation',
    period: 'Jan — Apr 2026',
    stack: ['Cisco Packet Tracer'],
    description:
      'A Cisco enterprise network digital twin implementing micro-segmentation and least-privilege access controls.',
    repo: 'https://github.com/shehrozmajeed/Zero-Trust-Digital-Twin',
    featured: false,
  },
  {
    title: 'SOC Log Analyzer',
    subtitle: 'Real-time anomaly detection',
    period: 'Jan — Apr 2026',
    stack: ['Python', 'Scikit-learn'],
    description:
      'An isolation-forest ML pipeline built for real-time log anomaly detection inside a SOC workflow.',
    repo: 'https://github.com/shehrozmajeed/SOC-Log-Analyzer',
    featured: false,
  },
  {
    title: 'MedSentinel',
    subtitle: 'IoT Rural Clinic Monitor',
    period: 'Oct — Dec 2025',
    stack: ['ESP32', 'Python', 'Machine Learning'],
    description:
      'An ESP32 + sensor-fusion system that detects "ghost clinics" — 86% accuracy, 95.8% uptime, validated by 8/10 NGO stakeholders.',
    repo: null,
    featured: true,
  },
  {
    title: 'AlumNet',
    subtitle: 'Secure Alumni–Student Mentorship Platform',
    period: 'Jan — Apr 2026',
    stack: ['Flask', 'SQLAlchemy', 'JavaScript'],
    description:
      'A role-based web app (Student / Alumni / Admin) with a full STRIDE threat model — bcrypt, RBAC, CSP, and rate-limiting, mitigating all OWASP Top 10 risks via in-house pentest before deployment.',
    repo: null,
    featured: false,
  },
  {
    title: 'Web Vulnerability Scanner',
    subtitle: 'Automated OWASP Top 10 scanner',
    period: 'Oct — Dec 2024',
    stack: ['Python', 'BeautifulSoup'],
    description:
      'An automated scanner detecting OWASP Top 10 vulnerabilities — SQLi, XSS, broken auth — across web targets.',
    repo: 'https://github.com/shehrozmajeed/Web-Vulnerability-Scanner',
    featured: false,
  },
  {
    title: 'AutoSchedule-GIK',
    subtitle: 'Conflict-free timetable engine',
    period: 'Jan — Apr 2026',
    stack: ['Python'],
    description:
      'A conflict-free timetable engine for GIKI handling room, faculty, and course constraints.',
    repo: 'https://github.com/shehrozmajeed/AutoSchedule-GIK',
    featured: false,
  },
  {
    title: 'LNT v2.0',
    subtitle: 'Local Network Toolkit',
    period: 'Jun — Jul 2025',
    stack: ['Python', 'Tkinter', 'Nmap', 'Metasploit'],
    description:
      'A GUI-based suite consolidating 10+ Kali Linux tools — reducing pentest task setup time by 40%.',
    repo: 'https://github.com/shehrozmajeed/LNTv2.0',
    featured: false,
  },
];

export const skillGroups = [
  {
    label: 'Offensive Security',
    items: [
      'Penetration Testing',
      'Network Exploitation',
      'OWASP Top 10',
      'Vulnerability Assessment',
      'Threat Modeling',
      'CVE Analysis',
      'Zero Trust Design',
    ],
  },
  {
    label: 'Languages & Scripting',
    items: ['Python (Advanced)', 'C / C++', 'SQL', 'Bash Scripting'],
  },
  {
    label: 'Tools & Platforms',
    items: [
      'Burp Suite',
      'Metasploit',
      'Nmap',
      'Wireshark',
      'OWASP ZAP',
      'Cisco Packet Tracer',
      'Linux (Kali, Ubuntu)',
    ],
  },
];

export const certifications = [
  {
    title: 'AI Security Certificate',
    issuer: 'TryHackMe',
    date: 'Jul 2026',
    expires: 'Jul 2029',
    credentialId: 'THM-6WTNVFRMRG',
    link: 'https://tryhackme.com/certificate/THM-6WTNVFRMRG',
    skills: [],
    type: 'certificate',
  },
  {
    title: 'Claude Code In Action',
    issuer: 'Skilljar by Gainsight',
    date: 'May 2026',
    credentialId: 'owak62ammd8r',
    link: 'https://verify.skilljar.com/c/owak62ammd8r',
    skills: [],
    type: 'certificate',
  },
  {
    title: 'Introduction to MCP',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    credentialId: 'e9ogrvgmxmh',
    link: 'https://verify.skilljar.com/c/eg9oqrvgmxmh',
    skills: ['Model Context Protocol (MCP)'],
    type: 'certificate',
  },
  {
    title: 'ISO 27001: Information Security Management Systems Certified',
    issuer: 'SkillFront',
    date: null,
    credentialId: 'SFE0169d906ae923-02584430149701',
    link: 'https://www.skillfront.com/certifications/SkillFront-SFE0169d906ae923-02584430149701.pdf',
    skills: [],
    type: 'certificate',
  },
  {
    title: "Burp'ed",
    issuer: 'TryHackMe',
    date: null,
    credentialId: null,
    link: 'https://tryhackme.com/shehrozmajeed/badges/burped?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6a2beb12f017a2acc96b1a67',
    skills: [],
    type: 'badge',
  },
  {
    title: 'OWASP Top 10',
    issuer: 'TryHackMe',
    date: null,
    credentialId: 'THM-6a2beb12f017a2acc96b1a67',
    link: 'https://tryhackme.com/shehrozmajeed/badges/owasp-10?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6a2beb12f017a2acc96b1a67',
    skills: [],
    type: 'badge',
  },
  {
    title: 'Generative AI & Prompt Engineering',
    issuer: 'MTF',
    date: 'Aug 2025',
    credentialId: 'UC-fb9db99f-35dd-4eae-9d69-b78c1be9658a',
    link: null,
    skills: ['Generative AI', 'Generative AI for Management', '+3 skills'],
    type: 'certificate',
  },
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google',
    date: 'Aug 2025',
    credentialId: '6S7Y81IOORYO',
    link: 'https://www.coursera.org/account/accomplishments/verify/6S7Y81IOORYO',
    skills: ['Network Security', 'Cryptography', '+11 skills'],
    type: 'certificate',
  },
  {
    title: 'Machine Learning',
    issuer: 'Code Warriors',
    date: 'Aug 2025',
    credentialId: null,
    link: 'https://www.udemy.com/certificate/UC-e84efbc6-21c5-49ee-9fd1-ab529e1f9499/',
    skills: ['Automation', 'Network Programming', '+2 skills'],
    type: 'certificate',
  },
  {
    title: 'CDPO-101',
    issuer: 'Udemy',
    date: null,
    credentialId: null,
    link: null,
    skills: ['OWASP Top 10', 'Risk Assessment', '+3 skills'],
    type: 'certificate',
  },
  {
    title: 'AWS Cloud Clubs Generative AI Camper',
    issuer: 'United Latino Students Association',
    date: 'Oct 2024',
    credentialId: null,
    link: 'https://www.credly.com/badges/5ff01b0c-5a2d-45a6-b55f-dbdfa90d3961/linked_in_profile',
    skills: ['Scripting'],
    type: 'certificate',
  },
  {
    title: 'Network Mastery for ETH',
    issuer: 'Udemy',
    date: 'Aug 2024',
    credentialId: null,
    link: null,
    skills: ['Networking', 'Web Security', '+1 skill'],
    type: 'certificate',
  },
  {
    title: 'WordPress Security',
    issuer: 'Frank Anemeat',
    date: null,
    credentialId: null,
    link: null,
    skills: ['WordPress Security'],
    type: 'certificate',
  },
  {
    title: 'Mac Security Masterclass',
    issuer: 'Frank Anemeat',
    date: null,
    credentialId: null,
    link: null,
    skills: ['Mac Security Expert'],
    type: 'certificate',
  },
  {
    title: 'Microsoft Micathon',
    issuer: 'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology',
    date: null,
    credentialId: null,
    link: null,
    skills: ['Certificate of Participation'],
    type: 'certificate',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
