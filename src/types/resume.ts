export interface Education {
  school: string;
  logo: string;
  degree: string;
  major: string;
  college: string;
  period: string;
  tags?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  type?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface JournalMetrics {
  publisher: string;
  if: string;
  if5: string;
  jcr: string;
  cas: string;
}

export interface Research {
  title: string;
  status: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  images?: string[];
  journalMetrics?: JournalMetrics;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon?: string;
  image?: string;
  images?: string[];
}

export interface ResumeData {
  name: string;
  englishName: string;
  avatar: string;
  keywords: string[];
  location: string;
  birthdate?: string;
  contact: {
    email: string;
    phone: string;
    github: string;
  };
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  research: Research[];
  projectExperience: Project[];
  projects: Project[];
}
