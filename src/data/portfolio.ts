import type {
  Experience,
  FormMessages,
  Project,
  SectionCopy,
  SiteConfig,
  SkillCategory,
  SocialLink,
  Testimonial,
} from "./portfolio.types";

export type {
  ContactApiResponse,
  Experience,
  FormMessages,
  Project,
  SectionCopy,
  SiteConfig,
  SkillCategory,
  SocialLink,
  Testimonial,
} from "./portfolio.types";

export const siteConfig = {
  name: "Alex Morgan",
  title: "Product Designer",
  experienceYears: 5,
  tagline: "Designing thoughtful digital products that balance user needs, business goals, and craft.",
  email: "hello@alexmorgan.design",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
  avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  description:
    "Product Designer with 5 years of experience crafting user-centered digital products across fintech, SaaS, and consumer apps.",
} satisfies SiteConfig;

export const aboutContent = {
  bio: "I'm a Product Designer with 5 years of experience turning complex problems into intuitive, beautiful experiences. I work at the intersection of research, strategy, and visual design — partnering closely with product and engineering teams to ship work that users love and businesses value.",
  philosophy:
    "Great design is invisible until it isn't. I believe in validating early, iterating fast, and sweating the details that make products feel effortless.",
};

export function buildSectionCopy(experienceYears: number): SectionCopy {
  return {
    about: {
      title: "About",
      subtitle: "Designing with empathy, shipping with craft.",
    },
    skills: {
      title: "Skills",
      subtitle: "A toolkit built for discovery, design, and delivery",
    },
    projects: {
      title: "Projects",
      subtitle: "Selected work spanning research, strategy, and visual design",
    },
    experience: {
      title: "Experience",
      subtitle: `${experienceYears} years of shaping products across fintech, SaaS, and health`,
    },
    contact: {
      title: "Contact",
      subtitle: "Let's build something meaningful together",
    },
    testimonials: {
      heading: "What collaborators say",
    },
  };
}

export const sectionCopy = buildSectionCopy(siteConfig.experienceYears);

export const formMessages = {
  success: "Thanks for reaching out! I'll get back to you soon.",
  errorDefault: "Something went wrong. Please try again.",
  sending: "Sending...",
  send: "Send Message",
} satisfies FormMessages;

export const skillCategories: SkillCategory[] = [
  {
    id: "research",
    title: "Research & Strategy",
    skills: ["User Interviews", "Usability Testing", "Journey Mapping", "Competitive Analysis"],
  },
  {
    id: "design",
    title: "UX & UI Design",
    skills: ["Wireframing", "Prototyping", "Design Systems", "Interaction Design"],
  },
  {
    id: "tools",
    title: "Tools",
    skills: ["Figma", "FigJam", "Principle", "Maze", "Notion"],
  },
  {
    id: "collaboration",
    title: "Collaboration",
    skills: ["Design Sprints", "Stakeholder Workshops", "Developer Handoff", "Design QA"],
  },
];

export const projects: Project[] = [
  {
    id: "nova-finance",
    title: "Nova Finance Dashboard",
    role: "Lead Product Designer",
    timeline: "6 months · 2024",
    tags: ["Fintech", "Dashboard", "Design System"],
    summary: "Redesigned a personal finance dashboard, increasing daily active usage by 34%.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    problem:
      "Users struggled to understand their spending patterns. The existing dashboard was cluttered, with key insights buried three clicks deep.",
    process: [
      "Conducted 12 user interviews and analyzed support tickets to identify pain points",
      "Mapped current user flows and identified 5 critical drop-off points",
      "Explored 3 information architecture directions through rapid wireframing",
      "Built interactive prototypes and ran moderated usability tests with 8 participants",
      "Partnered with engineering to define a component library for scalable rollout",
    ],
    outcomes: [
      "34% increase in daily active users within 8 weeks of launch",
      "Reduced time-to-insight from 45 seconds to 8 seconds",
      "NPS score improved from 32 to 58",
    ],
    tools: ["Figma", "Maze", "Principle", "Notion"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    link: "https://example.com/nova-finance",
  },
  {
    id: "flowtask",
    title: "FlowTask — Team Productivity",
    role: "Product Designer",
    timeline: "4 months · 2023",
    tags: ["SaaS", "Mobile", "Onboarding"],
    summary: "Reimagined onboarding for a B2B task manager, cutting activation time by 40%.",
    coverImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    problem:
      "New teams abandoned the product within their first week. Onboarding felt overwhelming with too many features surfaced at once.",
    process: [
      "Analyzed funnel data to pinpoint where teams dropped off during setup",
      "Created persona-based onboarding flows for different team sizes",
      "Designed progressive disclosure patterns to introduce features contextually",
      "A/B tested two onboarding variants with 2,000 sign-ups",
    ],
    outcomes: [
      "40% reduction in time-to-first-task completion",
      "Week-1 retention improved from 52% to 71%",
      "Support tickets related to setup dropped by 28%",
    ],
    tools: ["Figma", "Amplitude", "FigJam"],
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    ],
  },
  {
    id: "wellnest",
    title: "WellNest Health App",
    role: "Senior UX Designer",
    timeline: "5 months · 2022",
    tags: ["Healthcare", "Mobile", "Accessibility"],
    summary: "Led mobile redesign for a wellness app, achieving WCAG AA compliance and 4.8★ rating.",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    problem:
      "The app had low engagement among users over 50. Typography, contrast, and navigation patterns didn't meet accessibility standards.",
    process: [
      "Audited the app against WCAG 2.1 AA guidelines and documented 47 issues",
      "Conducted contextual inquiry sessions with 10 users aged 50–70",
      "Redesigned navigation with larger touch targets and simplified information hierarchy",
      "Collaborated with engineering on accessible color tokens and dynamic type support",
    ],
    outcomes: [
      "Achieved WCAG 2.1 AA compliance across all core flows",
      "App Store rating improved from 3.9 to 4.8 stars",
      "Engagement among 50+ users increased by 62%",
    ],
    tools: ["Figma", "Stark", "Maze"],
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Nova Financial",
    role: "Lead Product Designer",
    period: "2023 — Present",
    bullets: [
      "Lead design for the core banking dashboard serving 2M+ monthly active users",
      "Established a design system adopted across 4 product squads",
      "Mentor 2 junior designers and run weekly design critique sessions",
    ],
  },
  {
    id: "exp-2",
    company: "FlowTask Inc.",
    role: "Product Designer",
    period: "2021 — 2023",
    bullets: [
      "Owned end-to-end design for onboarding, core task flows, and mobile experience",
      "Partnered with PM and eng to reduce activation friction by 40%",
      "Introduced continuous discovery practices including weekly user interviews",
    ],
  },
  {
    id: "exp-3",
    company: "WellNest Health",
    role: "UX Designer",
    period: "2020 — 2021",
    bullets: [
      "Redesigned mobile app focused on accessibility for aging populations",
      "Conducted usability testing and synthesized findings into actionable specs",
      "Collaborated with clinical advisors to ensure health content accuracy",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexmorgan",
    icon: "linkedin",
  },
  {
    id: "behance",
    label: "Behance",
    href: "https://behance.net/alexmorgan",
    icon: "behance",
  },
  {
    id: "dribbble",
    label: "Dribbble",
    href: "https://dribbble.com/alexmorgan",
    icon: "dribbble",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@alexmorgan.design",
    icon: "email",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Alex brings a rare combination of strategic thinking and visual craft. Every project ships with clarity and polish.",
    author: "Sarah Chen",
    role: "VP of Product, Nova Financial",
  },
  {
    id: "t2",
    quote:
      "The onboarding redesign was a game-changer. Alex's user research directly translated into measurable business impact.",
    author: "Marcus Webb",
    role: "CEO, FlowTask Inc.",
  },
];
