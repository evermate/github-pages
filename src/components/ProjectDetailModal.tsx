import { motion } from "motion/react";
import { Github, X } from "lucide-react";
import { Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  if (!project.details) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <DialogDescription className="sr-only">
          {project.title} 프로젝트의 상세 정보
        </DialogDescription>
        <DialogHeader className="flex flex-row items-start justify-between mb-6 space-y-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 flex-shrink-0"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* 상세 설명 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              프로젝트 개요
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              {project.details.fullDescription}
            </p>
          </motion.div>

          {/* 개발 기간 & 팀 구성 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                개발 기간
              </h4>
              <p className="text-gray-900 dark:text-white font-medium">
                {project.details.developmentPeriod}
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                팀 구성
              </h4>
              <p className="text-gray-900 dark:text-white font-medium">
                {project.details.teamSize}
              </p>
            </div>
          </motion.div>

          {/* 도전과 해결 (Challenges) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              도전 과제 & 해결 방법
            </h3>
            <div className="space-y-3">
              {project.details.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="border-l-4 border-[#10B981] pl-4 py-3 bg-gradient-to-r from-[#10B981]/5 to-transparent dark:from-[#10B981]/10 rounded-r"
                >
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-2">
                    문제: {challenge.problem}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    해결: {challenge.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 스크린샷 갤러리 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              스크린샷
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.details.screenshots.map((screenshot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.05 }}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:border-[#10B981]/50 transition-colors"
                >
                  <div className="text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      [이미지]
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                      {screenshot.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3"
          >
            <Button
              asChild
              className="bg-[#10B981] hover:bg-[#059669] text-white gap-2"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
