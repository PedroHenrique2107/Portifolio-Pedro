import type {
  experiences,
  filterCategories,
  projects,
  skills,
  socialLinks,
  timeline
} from '@/data/portfolio';

export type ProjectCategory = (typeof projects)[number]['category'];
export type ExperienceColor = (typeof experiences)[number]['color'];
export type ExperienceIcon = (typeof experiences)[number]['icon'];
export type SkillCategory = (typeof skills)[number]['category'];
export type FilterCategory = (typeof filterCategories)[number]['value'];
export type SocialLink = (typeof socialLinks)[number];

export interface Project {
  id: string;
  title: string;
  image?: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
  githubUrl?: string;
  liveUrl?: string;
  problem?: string;
  architecture?: string;
  decisions?: readonly string[];
  results?: string;
}

export interface Experience {
  id: string;
  title: string;
  period: string;
  company: string;
  icon: ExperienceIcon;
  color: ExperienceColor;
  items: readonly string[];
  quote: string;
}

export type TimelineItem = (typeof timeline)[number];

export interface Skill {
  name: string;
  category: SkillCategory;
  logo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
