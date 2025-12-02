import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { heroContent } from "@/data/portfolio";
import { smoothScrollToElement } from "@/lib/scroll";
import { ANIMATION_DURATIONS } from "@/constants/ui";

const ICON_MAP = {
  Github,
  Linkedin,
  Mail,
};

export function HeroSection() {
  const handleScroll = () => {
    smoothScrollToElement(heroContent.cta.target);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: ANIMATION_DURATIONS.slow }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <ImageWithFallback
                src={heroContent.profileImage}
                alt={heroContent.name}
                className="rounded-full w-full h-full object-cover border-4 border-[#10B981]/20"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#10B981] rounded-full border-4 border-white dark:border-gray-900"></div>
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_DURATIONS.slow,
                delay: 0.3,
              }}
              className="text-gray-900 dark:text-white mb-3 text-4xl md:text-5xl"
            >
              {heroContent.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_DURATIONS.slow,
                delay: 0.4,
              }}
              className="text-[#10B981] mb-6 tracking-wide text-sm md:text-base uppercase"
            >
              {heroContent.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_DURATIONS.slow,
                delay: 0.5,
              }}
              className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl text-lg"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_DURATIONS.slow,
                delay: 0.6,
              }}
              className="flex gap-3 justify-center mb-10"
            >
              {heroContent.socialLinks.map((social, index) => {
                const Icon = ICON_MAP[social.icon as keyof typeof ICON_MAP];
                if (!Icon) return null;

                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target={social.icon !== "Mail" ? "_blank" : undefined}
                    rel={social.icon !== "Mail" ? "noopener noreferrer" : undefined}
                    className="w-11 h-11 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-[#10B981] hover:text-[#10B981] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_DURATIONS.slow,
                delay: 0.7,
              }}
              onClick={handleScroll}
              className="px-8 py-3 bg-[#10B981] text-white rounded-full hover:bg-[#059669] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {heroContent.cta.label}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: ANIMATION_DURATIONS.slow },
          y: {
            repeat: Infinity,
            duration: ANIMATION_DURATIONS.verySlowm,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-[#10B981] transition-colors"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
