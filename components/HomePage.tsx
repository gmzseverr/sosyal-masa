"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppSimulator } from "./AppSimulator";
import type { AppState } from "@/lib/states";
import {
  Home,
  FileText,
  CreditCard,
  PartyPopper,
  MessageCircle,
  User,
} from "lucide-react";

const keySteps: {
  state: AppState;
  label: string;
  icon: React.ComponentType<any>;
}[] = [
  { state: "landing", label: "Başlangıç", icon: Home },

  { state: "event-detail", label: "Detay", icon: FileText },
  { state: "payment", label: "Ödeme", icon: CreditCard },
  { state: "match-found", label: "Eşleşme", icon: PartyPopper },
  { state: "chat", label: "Sohbet", icon: MessageCircle },
  { state: "profile", label: "Profil", icon: User },
];

export default function HomePage() {
  const [currentState, setCurrentState] = useState<AppState>("landing");

  const handleNavigate = (state: AppState) => {
    setCurrentState(state);
  };

  const currentStepIndex = keySteps.findIndex(
    (step) => step.state === currentState
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col items-center p-4">
      {/* Telefon Ekranı */}
      <motion.div
        className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative bg-white rounded-2xl overflow-hidden w-80 h-[640px]">
          <AppSimulator state={currentState} onNavigate={handleNavigate} />
        </div>
      </motion.div>

      {/* StepNav */}
      <div className="w-full max-w-4xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-700">
              Uygulama Akışı
            </span>
            <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded-full shadow-sm">
              {Math.max(0, currentStepIndex + 1)} / {keySteps.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{
                width: `${Math.max(
                  0,
                  ((currentStepIndex + 1) / keySteps.length) * 100
                )}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {keySteps.map((step, index) => {
            const isActive = currentState === step.state;
            const isPast = index < currentStepIndex;
            const isFuture = index > currentStepIndex;
            const IconComponent = step.icon;

            return (
              <motion.div
                key={step.state}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleNavigate(step.state)}
                  className={`text-sm transition-all duration-300 min-w-[120px] ${
                    isActive
                      ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg ring-2 ring-orange-300"
                      : isPast
                      ? "bg-green-50 border-green-200 text-green-700 hover:bg-green-100 shadow-sm"
                      : isFuture
                      ? "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                      : "hover:bg-orange-50 border-orange-200"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {step.label}
                  {isPast && !isActive && (
                    <motion.span
                      className="ml-2 text-green-600"
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

        <div className="text-center">
          <p className="text-xs text-gray-500 bg-white/50 px-3 py-2 rounded-full inline-block">
            Klavye ile gezinmek için ↑↓ ok tuşlarını veya Tab tuşunu kullanın
          </p>
        </div>
      </div>
    </div>
  );
}
