// src/components/StepNav.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { AppState } from "@/lib/states";
import { STATE_TO_SECTION_ID } from "@/lib/states";
import { Home, Calendar, User, Rocket, Search } from "lucide-react";

interface StepNavProps {
  currentState: AppState;
  onNavigate: (state: AppState) => void;
}

const keySteps: { state: AppState; label: string; icon: React.ComponentType<any> }[] = [
  { state: "onboarding", label: "Başlangıç", icon: Home },
  { state: "events-available", label: "Etkinlikler", icon: Calendar },
  { state: "profile", label: "Profil", icon: User },
  { state: "roadmap", label: "Yol Haritası", icon: Rocket },
  { state: "discover", label: "Keşfet", icon: Search },
];

export function StepNav({ currentState, onNavigate }: StepNavProps) {
  const handleStepClick = (state: AppState) => {
    onNavigate(state);
    const sectionId = STATE_TO_SECTION_ID[state];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const currentStepIndex = keySteps.findIndex((step) => step.state === currentState);

  return (
    <motion.section
      className="relative w-full py-12 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Floating Glow Elements */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-orange-200/30 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-purple-200/25 blur-3xl animate-pulse pointer-events-none"></div>

      {/* Progress Bar */}
      <div className="w-full mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-[#132E50]">Uygulama Akışı</span>
          <span className="text-sm text-[#132E50] bg-white/70 px-2 py-1 rounded-full shadow-md">
            {Math.max(0, currentStepIndex + 1)} / {keySteps.length}
          </span>
        </div>
        <div className="w-full h-3 rounded-full shadow-inner bg-white/30">
          <motion.div
            className="h-3 rounded-full shadow-md"
            style={{ background: "linear-gradient(to right, #F16820, #FBBF24)" }}
            initial={{ width: 0 }}
            animate={{ width: `${Math.max(0, ((currentStepIndex + 1) / keySteps.length) * 100)}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Step Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {keySteps.map((step, idx) => {
          const isActive = currentState === step.state;
          const isPast = idx < currentStepIndex;
          const Icon = step.icon;

          return (
            <motion.div
              key={step.state}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              <Button
                size="sm"
                onClick={() => handleStepClick(step.state)}
                className={`
                  flex items-center gap-2 min-w-[130px] px-5 py-3 rounded-3xl font-semibold text-sm transition-all duration-300 shadow-md
                  ${isActive
                    ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-white shadow-lg ring-4 ring-orange-200"
                    : isPast
                    ? "bg-[#FEFEE3] border border-[#FBBF24] text-[#132E50] hover:shadow-xl hover:ring-1 hover:ring-orange-300"
                    : "bg-white border border-gray-200 text-gray-500 hover:bg-[#FEEFE3] hover:shadow-lg"}
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-600"}`} />
                {step.label}
                {isPast && !isActive && (
                  <motion.span
                    className="ml-1 text-green-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    ✓
                  </motion.span>
                )}
              </Button>
            </motion.div>
          );
        })}
      </div>

      {/* Keyboard Tip */}
      <motion.p
        className="mt-6 text-xs text-[#132E50]/70 bg-white/50 px-3 py-2 rounded-full inline-block shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Klavye ile gezinmek için ↑↓ ok tuşlarını veya Tab tuşunu kullanın
      </motion.p>
    </motion.section>
  );
}
