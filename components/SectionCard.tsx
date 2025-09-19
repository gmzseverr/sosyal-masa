"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface SectionCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon: LucideIcon;
  isActive: boolean;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20, position: "absolute" }, // Pasifken gizle ve üst üste bindir
  visible: { opacity: 1, y: 0, position: "relative" }, // Aktifken görünür yap
};

export function SectionCard({
  id,
  title,
  children,
  icon: Icon,
  isActive,
}: SectionCardProps) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
    >
      <Card
        className={`w-full mt-10 p-8 lg:p-12 transition-all duration-300 ${
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
