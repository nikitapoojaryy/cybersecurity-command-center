export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  securityConcepts: string[];
  challenges: string[];
  results: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  author: string;
  readTime: number;
}
