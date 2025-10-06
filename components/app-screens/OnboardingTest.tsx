// OnboardingTest.tsx
import React from "react";
import { Button } from "../ui/button";
import type { AppState } from "@/lib/states";

interface OnboardingTestProps {
  onNavigate: (state: AppState) => void;
}

export default function OnboardingTest({ onNavigate }: OnboardingTestProps) {
  return (
    <div className="flex flex-col h-full px-4">
      {/* Orta alan: görsel ve başlık */}
      <div className="flex flex-col items-center justify-center flex-1 space-y-4">
        <img
          src="./b690b2c1e82ae92d2fbaaca890f3dd75215255ce.png"
          alt="Onboarding"
        />
        <h1 className="text-xl text-center -mt-16 font-bold text-gray-900">
          Buluşmaları anlamlı bağlara dönüştürüyoruz
        </h1>
      </div>

      {/* Alt alan: buton ve metin */}
      <div className="flex flex-col items-center  pb-8">
        <Button
          variant="navy"
          size="md"
          onClick={() => onNavigate("test-start")}
        >
          Kişilik Testine Başlayalım
        </Button>

        <p className="text-gray-600 pt-2 text-xs">
          Zaten hesabınız var mı?{" "}
          <span
            className="text-orange-600  font-semibold cursor-pointer hover:underline"
            onClick={() => onNavigate("login")}
          >
            Giriş Yap
          </span>
        </p>
      </div>
    </div>
  );
}
