import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { contactInfo } from "@/data/portfolio";
import { ANIMATION_DURATIONS } from "@/constants/ui";

const ICON_MAP = {
  Github,
  Linkedin,
  Twitter,
};

const AVAILABILITY_ITEMS = [
  "프리랜스 프로젝트",
  "계약 작업",
  "컨설팅",
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 py-20 md:py-32"
    >
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: ANIMATION_DURATIONS.slow }}
          className="mb-16"
        >
          <p className="text-[#10B981] text-sm tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            I'm currently available for freelance work and open to discussing new
            projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: ANIMATION_DURATIONS.slow,
              delay: 0.2,
            }}
            className="space-y-8"
          >
            <div>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 uppercase tracking-wider">
                이메일
              </p>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-900 dark:text-white hover:text-[#10B981] transition-colors text-lg"
                whileHover={{ x: 3 }}
              >
                {contactInfo.email}
              </motion.a>
            </div>

            {contactInfo.location && (
              <div>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 uppercase tracking-wider">
                  위치
                </p>
                <p className="text-gray-900 dark:text-white text-lg">
                  {contactInfo.location}
                </p>
              </div>
            )}

            <div>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 uppercase tracking-wider">
                소셜
              </p>
              <div className="flex gap-4">
                {contactInfo.socialLinks.map((social) => {
                  const Icon =
                    ICON_MAP[
                      social.icon as keyof typeof ICON_MAP
                    ];
                  if (!Icon) return null;

                  return (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-[#10B981] hover:text-[#10B981] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: ANIMATION_DURATIONS.slow,
              delay: 0.4,
            }}
            className="space-y-6"
          >
            <div>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 uppercase tracking-wider">
                업무 가능
              </p>
              <div className="space-y-3">
                {AVAILABILITY_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
                    <span className="text-gray-900 dark:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#10B981] text-white rounded-full hover:bg-[#059669] transition-colors mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              <span>메시지 보내기</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: ANIMATION_DURATIONS.slow,
            delay: 0.6,
          }}
          className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm"
        >
          <p>© 2025 김민수. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
