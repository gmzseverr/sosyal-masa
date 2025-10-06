"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react"; // ikon için

interface LandingScreenProps {
  onNavigate: (state: string) => void;
}

export default function LandingScreen({ onNavigate }: LandingScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-br from-[#F16820] to-[#132E50] text-white relative overflow-hidden">
      {/* Arka plan efekt (yansıyan daire) */}
      <motion.div
        className="absolute -top-32 -right-32 w-80 h-80 bg-[#ffffff22] rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ffffff11] rounded-full blur-3xl"
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* İçerik */}
      <motion.div
        className="text-center space-y-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Spinner */}
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-t-transparent border-white mx-auto mb-6 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <Loader2 className="w-8 h-8 text-[#F16820]" />
        </motion.div>

        {/* Başlık */}
        <h1 className="text-3xl font-extrabold leading-tight drop-shadow-lg">
          Haftalık beraberlik dozunuz.
        </h1>

        {/* Alt metin */}
        <p className="text-gray-200 max-w-md mx-auto text-sm leading-relaxed">
          Yeni insanlarla tanışın, sohbet edin ve güzel bağlantılar kurun.
        </p>

        {/* Butonlar */}
        <div className="space-y-3 w-full max-w-xs mx-auto">
          <Button
            onClick={() => onNavigate("test-start")}
            className="w-full bg-[#F16820] hover:bg-[#e65c1a] text-white transition-all duration-200 hover:scale-105 shadow-md"
          >
            Başlayalım 🚀
          </Button>
          <Button
            onClick={() => onNavigate("login")}
            variant="outline"
            className="w-full border-white text-white hover:bg-white/10 transition-all duration-200"
          >
            Giriş Yap
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
