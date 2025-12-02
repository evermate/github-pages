import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Workflow,
  Zap,
  Database,
  Globe,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { ANIMATION_DURATIONS, SCROLL_DELAYS } from "@/constants/ui";

const ICON_MAP = {
  Code2,
  Palette,
  Workflow,
  Zap,
  Database,
  Globe,
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800/50 py-20 md:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: ANIMATION_DURATIONS.slow }}
          className="mb-16"
        >
          <p className="text-[#10B981] text-sm tracking-widest uppercase mb-4">
            전문 분야
          </p>
          <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl mb-4">
            기술 스택
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            최신 웹 기술과 모범 사례에 대한 경험을 보유하고 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {skillCategories.map((category, index) => {
            const Icon = ICON_MAP[category.icon as keyof typeof ICON_MAP];
            if (!Icon) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: ANIMATION_DURATIONS.normal,
                  delay: index * SCROLL_DELAYS.stagger,
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 dark:bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white text-lg mb-3">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-400"
                        >
                          {skill}
                          {i < category.skills.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
