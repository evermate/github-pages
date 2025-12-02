import { HeroContent, Project, SkillCategory, ContactInfo, PortfolioConfig } from "@/types";

export const config: PortfolioConfig = {
  siteName: "Minimalist Portfolio",
  siteDescription: "Frontend Developer Portfolio",
  accentColor: "#10B981",
};

export const heroContent: HeroContent = {
  name: "김민수",
  title: "Frontend Developer",
  description:
    "모던 기술을 활용하여 아름답고 반응형 웹 경험을 만듭니다. React, TypeScript 및 직관적인 사용자 인터페이스 제작을 전문으로 합니다.",
  profileImage:
    "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwNzI3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  socialLinks: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com",
      icon: "Github",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
    },
    {
      id: "email",
      label: "Email",
      url: "mailto:alex@example.com",
      icon: "Mail",
    },
  ],
  cta: {
    label: "프로젝트 보기",
    target: "projects",
  },
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "이커머스 플랫폼",
    description:
      "장바구니, 상품 필터링 및 결제 프로세스를 갖춘 풀스택 이커머스 플랫폼입니다. React, TypeScript 및 최신 상태 관리 패턴으로 구축되었습니다. 실시간 재고 업데이트, 위시리스트 기능 및 반응형 디자인을 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDA1NjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "project-2",
    title: "데이터 분석 대시보드",
    description:
      "실시간 데이터 시각화, 커스텀 차트 및 포괄적인 리포팅 도구를 갖춘 인터랙티브 분석 대시보드입니다. 여러 데이터 소스를 통합하고 직관적인 인터페이스를 통해 실행 가능한 인사이트를 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY0MDQwMTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Recharts", "Next.js", "API Integration"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "project-3",
    title: "모바일 앱 쇼케이스",
    description:
      "프로그레시브 웹 앱 기능을 갖춘 모던 모바일 우선 웹 애플리케이션입니다. 오프라인 기능, 푸시 알림 및 네이티브와 같은 애니메이션을 제공합니다. 성능과 사용자 참여를 위해 최적화되었습니다.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0MDc3MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "PWA", "Motion", "Service Workers"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "project-4",
    title: "웹 애플리케이션 스위트",
    description:
      "사용자 인증, 역할 기반 접근 제어 및 모듈식 아키텍처를 갖춘 종합 웹 애플리케이션 스위트입니다. 확장성과 유지보수성을 위해 설계되었으며 클린 코드 관행과 광범위한 문서화를 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjQwNDEwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "프론트엔드 개발",
    icon: "Code2",
    skills: ["React", "TypeScript", "Next.js", "Vue.js"],
  },
  {
    id: "styling",
    title: "스타일링 & 디자인",
    icon: "Palette",
    skills: ["Tailwind CSS", "CSS3", "Sass", "Figma"],
  },
  {
    id: "tooling",
    title: "도구 & 워크플로우",
    icon: "Workflow",
    skills: ["Git", "Webpack", "Vite", "npm/yarn"],
  },
  {
    id: "performance",
    title: "성능 최적화",
    icon: "Zap",
    skills: ["최적화", "Lazy Loading", "Code Splitting", "SEO"],
  },
  {
    id: "backend",
    title: "백엔드 기초",
    icon: "Database",
    skills: ["Node.js", "REST API", "GraphQL", "PostgreSQL"],
  },
  {
    id: "webstandards",
    title: "웹 표준",
    icon: "Globe",
    skills: ["HTML5", "접근성", "반응형 디자인", "PWA"],
  },
];

export const contactInfo: ContactInfo = {
  email: "alex@example.com",
  socialLinks: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com",
      icon: "Github",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
    },
    {
      id: "twitter",
      label: "Twitter",
      url: "https://twitter.com",
      icon: "Twitter",
    },
  ],
};
