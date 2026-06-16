export interface Education {
  school: string;
  logo: string;
  degree: string;
  major: string;
  college: string;
  period: string;
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

export interface Research {
  title: string;
  status: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  images?: string[];
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
