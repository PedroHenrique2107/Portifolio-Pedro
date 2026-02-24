export interface Project {
  id: string;
  title: string;
  category: 'apis' | 'aiot' | 'fullstack' | 'systems' | 'frontend' | 'backend';
  categoryLabel: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem?: string;
  architecture?: string;
  decisions?: string[];
  results?: string;
}

export interface Experience {
  id: string;
  title: string;
  period: string;
  company: string;
  icon: string;
  color: 'cyan' | 'green' | 'purple' | 'gray' | 'blue' | 'red' | 'yellow';
  items: string[];
  quote: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'architecture' | 'devops' | 'database' | 'backend' | 'tools';
  logo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FilterCategory = 'all' | 'apis' | 'aiot' | 'fullstack' | 'systems';
