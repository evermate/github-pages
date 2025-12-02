export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface HeroContent {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  socialLinks: SocialLink[];
  cta: {
    label: string;
    target: string;
  };
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectScreenshot {
  title: string;
  description?: string;
  placeholder: boolean;
}

export interface ProjectDetail {
  challenges: ProjectChallenge[];
  screenshots: ProjectScreenshot[];
  fullDescription?: string;
  developmentPeriod?: string;
  teamSize?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  details?: ProjectDetail;
}

export interface Skill {
  name: string;
  level: number; // 1-5 점수
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socialLinks: SocialLink[];
}

export interface PortfolioConfig {
  siteName: string;
  siteDescription: string;
  accentColor: string;
}
