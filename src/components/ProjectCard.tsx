import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronRight, Github } from "lucide-react";
import { ImageWithFallback } from "./common/ImageWithFallback";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { Project } from "@/types";
import { ANIMATION_DURATIONS } from "@/constants/ui";


interface ProjectCardProps extends Project {
  index: number;
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  details,
  index,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;
  const [showDetail, setShowDetail] = useState(false);

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: ANIMATION_DURATIONS.slow + 0.2, delay: index * 0.2 }}
      className="snap-start min-h-[calc(100vh-5rem)] flex items-center py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">
        {/* Desktop: Alternating layout, Mobile: Stacked */}
        <div className={`grid md:grid-cols-2 gap-10 md:gap-12 items-center ${isEven ? "md:auto-cols-fr" : "md:auto-cols-fr"}`}>
          {/* Left: Number + Content (reverse on even rows) */}
          <div className={`space-y-6 ${isEven ? "md:order-2" : "md:order-1"}`}>
            <motion.div
              initial={{ opacity: 0, x: isEven ? 20 : -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[#10B981] text-5xl md:text-6xl font-bold opacity-10">
                  0{index + 1}
                </span>
                <span className="text-[#10B981] text-sm tracking-widest uppercase">
                  Project
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.3 }}
            >
              <h3 className="text-gray-900 dark:text-white text-3xl md:text-4xl mb-4 font-bold">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[#10B981]/50 dark:hover:border-[#10B981]/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.5 }}
              className="flex gap-6 pt-4"
            >
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#10B981] transition-colors flex items-center gap-2 font-medium"
                whileHover={{ x: 3 }}
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
              <motion.button
                onClick={() => setShowDetail(true)}
                className="text-gray-600 dark:text-gray-400 hover:text-[#10B981] transition-colors flex items-center gap-2 font-medium cursor-pointer"
                whileHover={{ x: 3 }}
              >
                <ChevronRight className="w-5 h-5" />
                <span>View Details</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.4 }}
            className={`relative overflow-hidden rounded-2xl aspect-video group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow ${isEven ? "md:order-1" : "md:order-2"}`}
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </div>

      {/* Detail Modal */}
      {details && (
        <ProjectDetailModal
          project={{
            id,
            title,
            description,
            image,
            tags,
            githubUrl,
            liveUrl,
            details,
          }}
          isOpen={showDetail}
          onClose={() => setShowDetail(false)}
        />
      )}
    </motion.div>
  );
}
