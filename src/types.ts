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

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
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
