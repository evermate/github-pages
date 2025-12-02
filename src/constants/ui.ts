// Navigation height
export const NAV_HEIGHT = 80; // h-20 = 80px

// Colors
export const COLORS = {
  accent: "#10B981",
  accentDark: "#059669",
} as const;

// Animation durations (in seconds)
export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.6,
  verySlowm: 2,
} as const;

// Scroll animation delays
export const SCROLL_DELAYS = {
  stagger: 0.08,
  step: 0.1,
  double: 0.2,
} as const;

// Navigation menu items
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
