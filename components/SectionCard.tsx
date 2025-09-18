"use client";

import React from "react"; // tip değil, gerçek import
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface SectionCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon: LucideIcon;
  isActive: boolean;
  className?: string; // optional className
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
  isActive,
  className, // burayı ekledik
}: SectionCardProps) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen flex items-center py-16 ${className ?? ""}`} // className artık çalışır
    >
      <Card
        className={`w-full p-8 lg:p-12 transition-all duration-300 ${
          isActive ? "ring-2 ring-orange-200 shadow-lg" : "shadow-md"
        }`}
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
            <Icon size={24} className="text-orange-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>
        {children}
      </Card>
    </motion.section>
  );
}
