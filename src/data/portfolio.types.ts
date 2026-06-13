export type Project = {
  id: string;
  title: string;
  role: string;
  timeline: string;
  tags: string[];
  summary: string;
  coverImage: string;
  problem: string;
  process: string[];
  outcomes: string[];
  tools: string[];
  images?: string[];
  link?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "linkedin" | "behance" | "dribbble" | "email";
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  experienceYears: number;
  tagline: string;
  email: string;
  location: string;
  resumeUrl: string;
  avatarUrl: string;
  description: string;
};

export type SectionHeading = {
  title: string;
  subtitle: string;
};

export type SectionCopy = {
  about: SectionHeading;
  skills: SectionHeading;
  projects: SectionHeading;
  experience: SectionHeading;
  contact: SectionHeading;
  testimonials: { heading: string };
};

export type ContactApiResponse = {
  message?: string;
  error?: string;
};

export type FormMessages = {
  success: string;
  errorDefault: string;
  sending: string;
  send: string;
};
