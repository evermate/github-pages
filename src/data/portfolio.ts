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
    title: "CLOV",
    description:
      "WebRTC를 활용한 P2P 직접 연결로 낮은 지연도와 높은 안정성을 제공하는 실시간 다자간 화상 녹화 플랫폼입니다. Canvas 2D API를 사용해 10명 이상의 참가자 영상을 동시에 합성하고, MediaPipe를 활용해 클라이언트에서 배경을 실시간으로 제거합니다. Zustand 스토어로 복잡한 상태를 관리하고 PWA로 구현되어 오프라인 지원 및 모바일 환경에 최적화되었습니다.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJlbmNlIHZpZGVvIGNhbGx8ZW58MXx8fHwxNzY0MDcyNzk4&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React 19", "WebRTC", "WebSocket", "Canvas 2D API", "Zustand", "MediaPipe", "PWA"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "project-2",
    title: "LunarWorld",
    description:
      "Unity AR Foundation 기반의 듀얼 레이어 슈팅 디펜스 게임으로, 지상 몬스터와 공중 드래곤을 동시에 처리하는 이중 전투 시스템을 구현했습니다. ARPlaneManager로 실시간 평면 감지 및 포탈 배치를 하고, UnityEvent 기반 이벤트 시스템으로 지상/공중 전투를 분리 설계했습니다. 오브젝트 풀링과 레이어 마스크 기반 충돌 최적화로 모바일 환경에서 안정적인 성능을 확보하였습니다.",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lIGFyIGFuZHJvaWR8ZW58MXx8fHwxNzY0MDcyODU4&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Unity 2022", "C#", "AR Foundation", "Object Pooling", "Raycast"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "project-3",
    title: "편리햄",
    description:
      "AI 기반 Mattermost 워크스페이스 관리 서비스로, 산재된 메시지와 파일에서 필요한 정보를 빠르게 찾을 수 있도록 합니다. React와 TypeScript로 대시보드, 달력, 검색 페이지를 구현했으며, SSE(Server-Sent Events)로 서버에서 푸시하는 메시지, 알림, 구직 정보를 실시간으로 수신합니다. Zustand로 인증 정보와 SSE 상태를 전역 관리하며, 토큰 갱신 시 자동으로 SSE 연결을 재수립하여 안정적인 실시간 통신을 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0MDcyODk1&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React 18", "TypeScript", "SSE", "Zustand", "Radix UI", "React Router"],
    githubUrl: "https://lab.ssafy.com/s13-final/S13P31A105",
    liveUrl: "https://example.com",
  },
  {
    id: "project-4",
    title: "모바일 앱 쇼케이스",
    description:
      "프로그레시브 웹 앱 기능을 갖춘 모던 모바일 우선 웹 애플리케이션입니다. 오프라인 기능, 푸시 알림 및 네이티브와 같은 애니메이션을 제공합니다. 성능과 사용자 참여를 위해 최적화되었습니다.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0MDc3MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "PWA", "Motion", "Service Workers"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "프론트엔드 개발",
    icon: "Code2",
    skills: [
      { name: "React", level: 5 },
      { name: "Zustand", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "C#", level: 4 },
    ],
  },
  {
    id: "styling",
    title: "스타일링 & 디자인",
    icon: "Palette",
    skills: [
      { name: "Tailwind CSS", level: 5 },
      { name: "CSS3", level: 4 },
      { name: "Radix UI", level: 4 },
      { name: "Canvas 2D API", level: 4 },
    ],
  },
  {
    id: "tooling",
    title: "도구 & 워크플로우",
    icon: "Workflow",
    skills: [
      { name: "Git", level: 5 },
      { name: "Vite", level: 4 },
      { name: "SSE", level: 4 },
      { name: "npm/yarn", level: 4 },
    ],
  },
  {
    id: "performance",
    title: "성능 최적화",
    icon: "Zap",
    skills: [
      { name: "WebRTC", level: 4 },
      { name: "Object Pooling", level: 4 },
      { name: "AR Foundation", level: 4 },
      { name: "프레임 최적화", level: 4 },
    ],
  },
  {
    id: "backend",
    title: "백엔드 기초",
    icon: "Database",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "REST API", level: 4 },
      { name: "WebSocket 서버", level: 3 },
      { name: "PostgreSQL", level: 3 },
    ],
  },
  {
    id: "webstandards",
    title: "웹 표준",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: 5 },
      { name: "PWA", level: 4 },
      { name: "MediaPipe", level: 4 },
      { name: "접근성", level: 3 },
    ],
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
