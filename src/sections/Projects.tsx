import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";
import { smoothScrollToCenterElement, getActiveElementIndex } from "@/lib/scroll";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeProject, setActiveProject] = useState(0);

  const projectIds = projects.map((p) => p.id);

  useEffect(() => {
    const handleScroll = () => {
      const activeIndex = getActiveElementIndex(projectIds);
      setActiveProject(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projectIds]);

  const scrollToProject = (projectId: string) => {
    smoothScrollToCenterElement(projectId);
  };

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 relative min-h-screen">
      {/* Projects */}
      <div ref={ref} className="divide-y divide-gray-300 dark:divide-gray-700">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-2 z-40">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => scrollToProject(project.id)}
            className={`w-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeProject === index
                ? "bg-[#10B981] h-12"
                : "bg-gray-200 dark:bg-gray-800 hover:bg-[#10B981]/50 h-8"
            }`}
            aria-label={`Go to ${project.title}`}
          />
        ))}
      </div>
    </section>
  );
}
