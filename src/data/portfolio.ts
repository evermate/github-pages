import { HeroContent, Project, SkillCategory, ContactInfo, PortfolioConfig } from "@/types";

export const config: PortfolioConfig = {
  siteName: "Minimalist Portfolio",
  siteDescription: "Frontend Developer Portfolio",
  accentColor: "#10B981",
};

export const heroContent: HeroContent = {
  name: "조영우",
  title: "Frontend Developer",
  description:
    "모던 기술을 활용하여 아름다운 반응형 웹 경험을 만듭니다. React, TypeScript 및 직관적인 사용자 인터페이스 제작을 전문으로 합니다.",
  profileImage:
    "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwNzI3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  socialLinks: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/evermate",
      icon: "Github",
    },
    // {
    //   id: "linkedin",
    //   label: "LinkedIn",
    //   url: "https://linkedin.com",
    //   icon: "Linkedin",
    // },
    {
      id: "email",
      label: "Email",
      url: "mailto:duddn.jo@gmail.com",
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
      "WebRTC 기반 P2P 연결로 낮은 지연도와 높은 안정성을 제공하는 실시간 화상 녹화 플랫폼입니다.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJlbmNlIHZpZGVvIGNhbGx8ZW58MXx8fHwxNzY0MDcyNzk4&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React 19", "WebRTC", "WebSocket", "Canvas 2D API", "Zustand", "MediaPipe", "PWA"],
    githubUrl: "https://github.com",
    details: {
      fullDescription: "WebRTC를 활용한 P2P 직접 연결로 낮은 지연도와 높은 안정성을 제공하는 실시간 다자간 화상 녹화 플랫폼입니다. Canvas 2D API를 사용해 10명 이상의 참가자 영상을 동시에 합성하고, MediaPipe를 활용해 클라이언트에서 배경을 실시간으로 제거합니다. Zustand 스토어로 복잡한 상태를 관리하고 PWA로 구현되어 오프라인 지원 및 모바일 환경에 최적화되었습니다.",
      developmentPeriod: "2025.07 - 2025.08 (약 6주)",
      teamSize: "팀 프로젝트 (FE 3명, BE 3명)",
      challenges: [
        {
          problem: "여러 클라이언트에서 동시 협상을 시도하면서 Glare 충돌 발생",
          solution: "RFC 7675 표준의 Tiebreaker 방식 구현으로 협상 충돌 해결",
        },
        {
          problem: "여러 참가자의 영상 합성 시 메모리 누수 및 프레임 드롭",
          solution: "라운드-로빈 스케줄러로 동시 처리 제한 및 마스크 캐싱으로 30fps 성능 유지",
        },
        {
          problem: "다양한 네트워크 환경(공유기, 방화벽)에서 WebRTC 연결 실패",
          solution: "STUN/TURN 동적 폴백 메커니즘으로 네트워크 환경 대응",
        },
        {
          problem: "WebSocket 메시지 크기로 인한 대역폭 낭비",
          solution: "Delta Sync 패턴으로 변경사항만 전송하여 대역폭 최적화",
        },
      ],
      screenshots: [
        { title: "메인 화면", placeholder: true },
        { title: "녹화 중", placeholder: true },
        { title: "참가자 레이아웃", placeholder: true },
        { title: "배경 제거 효과", placeholder: true },
        { title: "설정 패널", placeholder: true },
        { title: "저장 완료", placeholder: true },
      ],
    },
  },
  {
    id: "project-2",
    title: "LunarWorld",
    description:
      "GPS 기반 맵에서 포탈 인카운터 시 AR 화면으로 전환되어 공중의 드래곤을 격추하는 포켓몬고 스타일의 AR 슈팅 게임입니다.",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lIGFyIGFuZHJvaWR8ZW58MXx8fHwxNzY0MDcyODU4&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Unity 2022", "C#", "AR Foundation", "Object Pooling", "Raycast"],
    githubUrl: "https://github.com",
    details: {
      fullDescription: "MapBox 기반 GPS 네비게이션 맵에서 플레이어가 이동하다 포탈 위치에 도달하면, AR 카메라 기준 상공 15m에 포탈이 생성되고 여기서 드래곤 여러마리가 출현합니다. 플레이어는 마법 발사체를 통해 드래곤을 격추하여 승리하는 게임입니다.",
      developmentPeriod: "2025.08 - 2025.09 (약 6주)",
      teamSize: "팀 프로젝트 (6명)",
      challenges: [
        {
          problem: "얼음 마법 발사체 연속 발사 시 프레임 드롭",
          solution: "Queue 기반 오브젝트 풀 구현 (15-25개) + SetActive 재사용으로 Instantiate/Destroy 제거",
        },
        {
          problem: "게임 메커닉 변경(지상 근접 → 공중 원거리)으로 관절 콜라이더 방식 한계 도달\n- 초기: 플레이어 주변 1-2m 근접 전투 → 관절별 정밀 피격 판정 필요\n- 변경: 상공 10-15m 포탈 시스템 → 드래곤 5마리 × 20+ 콜라이더 = 100+ 충돌 쿼리 → FPS 저하",
          solution: "Raycast 기반 히트스캔으로 전환, 물리 엔진 부하 제거, 장거리 전투 환경에서 안정적 프레임 유지",
        },
      ],
      screenshots: [
        { title: "GPS 맵 화면", placeholder: true },
        { title: "포탈 인카운터", placeholder: true },
        { title: "AR 드래곤 전투", placeholder: true },
        { title: "마법 발사체 이펙트", placeholder: true },
        { title: "승리 화면", placeholder: true },
        { title: "통계 뷰", placeholder: true },
      ],
    },
  },
  {
    id: "project-3",
    title: "편리햄!",
    description:
      "AI 기반 Mattermost 워크스페이스 관리 서비스로, 산재된 메시지와 파일에서 필요한 정보를 빠르게 찾을 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0MDcyODk1&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React 18", "TypeScript", "SSE", "Zustand", "Radix UI", "React Router"],
    githubUrl: "https://lab.ssafy.com/s13-final/S13P31A105",
    details: {
      fullDescription: "AI 기반 Mattermost 워크스페이스 관리 서비스로, 산재된 메시지와 파일에서 필요한 정보를 빠르게 찾을 수 있도록 합니다. React와 TypeScript로 대시보드, 달력, 검색 페이지를 구현했으며, SSE(Server-Sent Events)로 서버에서 푸시하는 메시지, 알림, 구직 정보를 실시간으로 수신합니다. Zustand로 인증 정보와 SSE 상태를 전역 관리하며, 토큰 갱신 시 자동으로 SSE 연결을 재수립하여 안정적인 실시간 통신을 제공합니다.",
      developmentPeriod: "2025.10 - 2025.11 (약 6주)",
      teamSize: "팀 프로젝트 (FE 2명, BE 3명)",
      challenges: [
        {
          problem: "SSE 연결 중 토큰 갱신 시 인증 실패",
          solution: "Zustand 토큰 변경 감지 메커니즘으로 자동 SSE 재연결 구현",
        },
        {
          problem: "네트워크 불안정 시 SSE 연결 끊김",
          solution: "지수 백오프 재연결 로직으로 1초에서 30초 간격으로 자동 재연결",
        },
        {
          problem: "401 응답 시 토큰 갱신 실패로 반복적 로그인 요구",
          solution: "API 인터셉터에서 자동 토큰 갱신 및 재시도 구현",
        },
        {
          problem: "Mattermost 게시글 수정/삭제 시 검색 결과 동기화 지연",
          solution: "Webhook 기반 실시간 인덱스 동기화로 1초 이내에 반영",
        },
      ],
      screenshots: [
        { title: "대시보드", placeholder: true },
        { title: "메시지 검색", placeholder: true },
        { title: "달력 뷰", placeholder: true },
        { title: "구직 정보 알림", placeholder: true },
        { title: "설정 페이지", placeholder: true },
        { title: "마이페이지", placeholder: true },
      ],
    },
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
