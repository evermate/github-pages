import { NAV_HEIGHT } from "@/constants/ui";

/**
 * Smooth scroll to an element by ID
 * Accounts for fixed navigation height
 */
export function smoothScrollToElement(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - NAV_HEIGHT - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

/**
 * Smooth scroll to center an element vertically in viewport
 */
export function smoothScrollToCenterElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition =
    elementPosition -
    NAV_HEIGHT -
    window.innerHeight / 2 +
    element.offsetHeight / 2;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

/**
 * Get the index of the element currently in viewport
 */
export function getActiveElementIndex(elementIds: string[]): number {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  for (const id of elementIds) {
    const element = document.getElementById(id);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        return elementIds.indexOf(id);
      }
    }
  }

  return 0;
}
