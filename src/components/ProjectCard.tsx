import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./common/ImageWithFallback";
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
  index,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: ANIMATION_DURATIONS.slow + 0.2, delay: index * 0.2 }}
      className="snap-start min-h-[calc(100vh-5rem)] flex items-center py-20"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Project Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <span className="text-[#10B981] text-sm tracking-widest">
              0{index + 1}
            </span>
          </motion.div>

          {/* Project Content */}
          <div className="md:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.3 }}
            >
              <h3 className="text-gray-900 dark:text-white text-2xl md:text-3xl mb-3">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer"
            >
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.6 }}
              className="flex gap-4 pt-2"
            >
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2"
                whileHover={{ x: 3 }}
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </motion.a>
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2"
                whileHover={{ x: 3 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
