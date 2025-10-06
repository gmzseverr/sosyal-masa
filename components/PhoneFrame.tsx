"use client";

import { motion } from "framer-motion";
import { AppSimulator } from "./AppSimulator";
import { StepNav } from "./StepNav";
import type { AppState } from "@/lib/states";

interface PhoneFrameProps {
  currentState: AppState;
  onNavigate: (state: AppState) => void;
}

export function PhoneFrame({ currentState, onNavigate }: PhoneFrameProps) {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Phone Frame */}
      <motion.div
        className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem]" />
        <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-inner">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full" />
          </div>

          {/* Safe Area */}
          <div className="w-80 h-[640px] relative overflow-hidden">
            <div className="pt-8 pb-2 px-1 h-full">
              <AppSimulator state={currentState} onNavigate={onNavigate} />
            </div>
          </div>
        </div>

        <div className="absolute -right-1 top-20 w-1 h-12 bg-gray-700 rounded-r-sm" />
        <div className="absolute -right-1 top-36 w-1 h-8 bg-gray-700 rounded-r-sm" />
        <div className="absolute -right-1 top-48 w-1 h-8 bg-gray-700 rounded-r-sm" />
        <div className="absolute -left-1 top-24 w-1 h-16 bg-gray-700 rounded-l-sm" />
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      ></motion.div>
    </div>
  );
}
