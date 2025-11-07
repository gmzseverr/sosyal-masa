"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionCardProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  isActive?: boolean;
  className?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SectionCard({
  id,
  title,
  children,
  icon: Icon,
  isActive = true,
  className,
}: SectionCardProps) {
  return (
    <motion.section
      id={id}
      className={`relative w-full px-6 sm:px-12 py-12 sm:py-20`}
      variants={sectionVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Floating / Blur Bubbles */}
      <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-orange-200/30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>

      <motion.div
        className={`relative z-10 w-full max-w-4xl mx-auto p-8 sm:p-12 bg-white/80 rounded-3xl shadow-2xl backdrop-blur-lg transition-all ${className}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {(Icon || title) && (
          <div className="flex items-center mb-8">
            {Icon && (
              <div className="w-14 h-14 bg-orange-100/70 rounded-xl flex items-center justify-center mr-4 shadow-inner">
                <Icon size={28} className="text-orange-600" />
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="space-y-6">{children}</div>
      </motion.div>
    </motion.section>
  );
}
