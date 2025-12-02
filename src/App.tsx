import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { SkillsSection } from "@/sections/Skills";
import { ContactSection } from "@/sections/Contact";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navigation />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}
