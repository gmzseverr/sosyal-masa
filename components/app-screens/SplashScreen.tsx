"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Slide {
  img: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    img: "/a60e765e62b9d7369e407bc29637b871cd1fc8bb.png",
    title: "Buluşmaları anlamlı bağlara dönüştürüyoruz",
    description:
      "Her hafta yeni insanlarla tanış, profesyonel çevreni genişlet, gerçek sohbetler başlat.",
  },
  {
    img: "/b98ebd84dd23195868bcef0360c086c6b541f5cc.png",
    title: "Kendini keşfet,\nDoğru masayı bul",
    description:
      "Kişilik testin ve ilgi alanların sayesinde sana en uygun masaları öneriyoruz",
  },
  {
    img: "/56888955da33c312c1a0223f0b012f60ce7160ce.png",
    title: "Altı sandalye,\nSonsuz bağlantı",
    description:
      "Profesyonellerle aynı masada buluş, doğal ve güvenli sohbetler yaşa",
  },
  {
    img: "/8d00167bee0bc5c53144bf3bd914c948d0092ff1.png",
    title: "Etkinlik sonrası bağlantılarını sürdür.",
    description:
      "Grup sohbetiyle bağlarını güçlendir, birebir görüşmelerle yeni fırsatlar yarat.",
  },
];

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [current, setCurrent] = useState(0);

  // Klavye ile yönlendirme
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (current < slides.length - 1) setCurrent(current + 1);
        else onFinish();
      }
      if (e.key === "ArrowLeft" && current > 0) {
        setCurrent(current - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 relative">
      {/* Orta alan */}
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={slides[current].img}
          alt={slides[current].title}
          className="max-h-72 md:max-h-80"
        />
        <div className="space-y-5 px-4">
          <h1 className="text-xl font-bold text-gray-900 whitespace-pre-line">
            {slides[current].title}
          </h1>
          <p className="text-gray-600 text-sm ">
            {slides[current].description}
          </p>
        </div>
      </div>

      {/* Alt navigasyon: noktalar ve atla */}
      <div className="flex items-center justify-between w-full pt-10 px-6 relative">
        {/* Noktalar */}
        <div className="flex space-x-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                idx === current ? "bg-[#F16820]" : "bg-[#FBD0BA]"
              }`}
            />
          ))}
        </div>

        {/* Atla */}
        <button
          onClick={onFinish}
          className="absolute right-6 text-[#F16820] font-semibold text-md !bg-transparent !shadow-none !border-none hover:text-[#FBD0BA]"
        >
          Atla
        </button>
      </div>
    </div>
  );
}
