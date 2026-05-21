export const owner = {
  name: "Md Junayet",
  fullName: "Md. Junayet Hossain Mohit",
  title: "Software Developer",
  subtitle: "Flutter, Web, Firebase, and Game Developer",
  intro:
    "I build modern web, mobile, and interactive applications using Flutter, Firebase, JavaScript, Node.js, and modern frontend technologies.",
  avatarUrl: "/profile-photo.jpg",
  email: "mithu.bu.bd@gmail.com",
  githubUrl: "https://github.com/mdjunayet10",
  linkedinUrl: "https://www.linkedin.com/in/mdjunayet",
  facebookUrl: "https://www.facebook.com/md.mohit.5283",
  instagramUrl: "https://www.instagram.com/md_junayet",
  youtubeUrl: "https://youtube.com/@iplaypesofficial",
  location: "Bangladesh",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const resume = {
  url: "/resume/Md-Junayet-CV.pdf",
  highlights: [
    "Software Developer",
    "Flutter, Web, Firebase, and Game Development",
    "5+ Projects",
    "Web & Mobile Apps",
    "Firebase Deployment",
    "Backend & Database Experience",
  ],
} as const;

export const stats = [
  { value: "5+", label: "Projects" },
  { value: "Web & Mobile", label: "Apps and platforms" },
  { value: "Firebase", label: "Deployment workflow" },
  { value: "Game Dev", label: "2D gameplay systems" },
] as const;

export const focusAreas = [
  {
    title: "Flutter & Mobile Apps",
    description: "Mobile-first interfaces, app flows, and product experiences built for daily use.",
  },
  {
    title: "Firebase & Cloud Features",
    description: "Authentication, hosting, real-time data, and deployment workflows for shipped products.",
  },
  {
    title: "Web Development",
    description: "Responsive websites and dashboards with clean frontend architecture.",
  },
  {
    title: "Backend Systems",
    description: "APIs, database models, and server-side features for practical product needs.",
  },
  {
    title: "Game Development",
    description: "2D gameplay loops, progression systems, physics, and interactive experiences.",
  },
  {
    title: "Productivity & Educational Tools",
    description: "Useful software for learning, finance, Islamic education, career growth, and focus.",
  },
] as const;

export const workflow = [
  "Plan the user flow before polishing the interface.",
  "Build small working pieces and test them in the browser.",
  "Keep the experience responsive, clear, and easy to maintain.",
  "Ship static and Firebase-hosted products with clean deployment paths.",
] as const;

export const academics = [
  {
    title: "Bachelor of Computer Science and Engineering",
    institution: "Bangladesh University of Professionals",
    period: "2023 - Present",
    location: "Dhaka, Bangladesh",
    result: "CGPA: 3.81 / 4.00",
    detail: "Up to 5th semester.",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "St. Joseph Higher Secondary School",
    period: "2020 - 2022",
    location: "Dhaka, Bangladesh",
    result: "GPA: 5.00 / 5.00",
    detail: "Group: Science.",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Monipur High School & College",
    period: "2010 - 2019",
    location: "Dhaka, Bangladesh",
    result: "GPA: 5.00 / 5.00",
    detail: "Group: Science.",
  },
] as const;

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  screenshot: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Study Leveling App",
    category: "Study Gamification App",
    description:
      "A study productivity and gamification app that turns learning into missions with XP, coins, levels, rewards, a global leaderboard, and multiplayer study rooms.",
    tags: ["Flutter", "Firebase", "Gamification", "Leaderboard", "Multiplayer"],
    screenshot: "/projects/study-leveling-main.png",
    featured: true,
    liveUrl: "https://study-leveling.web.app",
    githubUrl: "https://github.com/mdjunayet10/Study-Leveling-App",
  },
  {
    title: "IslamQUIZ",
    category: "Islamic Educational Quiz App",
    description:
      "A quiz-based Islamic learning project designed to help users test and improve their Islamic knowledge through structured questions, answers, and progress-based learning.",
    tags: ["Islamic Education", "Quiz App", "Learning", "Web/App"],
    screenshot: "/projects/islamquiz-main.png",
    liveUrl: "https://islamquiz-app.web.app/",
    githubUrl: "https://github.com/mdjunayet10/IslamQUIZ",
  },
  {
    title: "Career Bridge",
    category: "Job & Career Platform",
    description:
      "A Bangladesh-focused career platform connecting job seekers and employers through profiles, job listings, applications, and career-building features.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    screenshot: "/projects/career-bridge-main.png",
    liveUrl: "https://careerbridgebd.web.app",
    githubUrl: "https://github.com/mdjunayet10/Career-Bridge",
  },
  {
    title: "Savings Planner",
    category: "Finance Productivity Tool",
    description:
      "A savings and budgeting planner that helps users track savings goals, manage money plans, and organize financial progress clearly.",
    tags: ["Finance", "Planner", "Productivity", "Web App"],
    screenshot: "/projects/savings-planner-main.png",
    liveUrl: "https://mdjunayet10.github.io/Savings-Planner/",
    githubUrl: "https://github.com/mdjunayet10/Savings-Planner",
  },
  {
    title: "Hill Rider",
    category: "2D Racing Game",
    description:
      "An original 2D hill-racing game with vehicle progression, driving physics, level objectives, coins, fuel, upgrades, and terrain challenges.",
    tags: ["Flutter", "Dart", "Flame", "Game Development", "2D Racing"],
    screenshot: "/projects/hill-rider-main.png",
    liveUrl: "https://hill-rider.web.app",
    githubUrl: "https://github.com/mdjunayet10/Hill-Rider",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: owner.email,
    href: `mailto:${owner.email}`,
    type: "email",
  },
  {
    label: "Location",
    value: owner.location,
    href: "#contact",
    type: "location",
  },
  {
    label: "GitHub",
    value: "github.com/mdjunayet10",
    href: owner.githubUrl,
    type: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mdjunayet",
    href: owner.linkedinUrl,
    type: "linkedin",
  },
  {
    label: "Facebook",
    value: "facebook.com/md.mohit.5283",
    href: owner.facebookUrl,
    type: "facebook",
  },
  {
    label: "Instagram",
    value: "instagram.com/md_junayet",
    href: owner.instagramUrl,
    type: "instagram",
  },
  {
    label: "YouTube",
    value: "youtube.com/@iplaypesofficial",
    href: owner.youtubeUrl,
    type: "youtube",
  },
] as const;

export const socialLinks = [
  { label: "Email", href: `mailto:${owner.email}`, type: "email" },
  { label: "GitHub", href: owner.githubUrl, type: "github" },
  { label: "LinkedIn", href: owner.linkedinUrl, type: "linkedin" },
  { label: "Facebook", href: owner.facebookUrl, type: "facebook" },
  { label: "YouTube", href: owner.youtubeUrl, type: "youtube" },
  { label: "Instagram", href: owner.instagramUrl, type: "instagram" },
] as const;
