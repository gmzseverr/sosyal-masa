"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

interface PersonalityTestProps {
  onNavigate: (state: string) => void;
}

const questions = [
  {
    question: "1. Kalabalık bir ortamda kendini nasıl hissedersin?",
    options: [
      "Enerjik ve heyecanlı",
      "Biraz çekingen ama rahat",
      "Gergin ve bunalmış",
    ],
  },
  {
    question: "2. Sohbetlerde en çok seni ne çeker ?",
    options: [
      "Derin konular ve fikir alışverişi",
      "Günlük yaşam ve eğlenceli muhabbet",
      "Profesyonel fırsatlar ve networking",
    ],
  },
  {
    question: "3. Bu uygulamayı en çok hangi amaçla kullanmak istiyorsun?",
    options: [
      "Yeni arkadaşlıklar kurmak",
      "Profesyonel bağlantılar geliştirmek",
      "Hem sosyal hem iş bağlantıları",
    ],
  },
  {
    question: "4. Masada nasıl bir rol üstlenirsin?",
    options: [
      "Konuşmayı açan, sohbeti yönlendiren",
      "Dinleyen, gerektiğinde fikir paylaşan",
      "Mizah katan, ortamı yumuşatan",
    ],
  },
  {
    question: "5. Seni en çok hangi konular heyecanlandırır?",
    options: [
      "Kültür & Sanat",
      "İş Dünyası & Teknoloji",
      "Seyahat & Deneyimler",
    ],
  },
  {
    question: "6. En çok hangi zamanlarda buluşmak istersin?",
    options: ["Hafta içi iş çıkışı", "Hafta sonu gündüz", "Hafta sonu akşam"],
  },
];

export default function PersonalityTest({ onNavigate }: PersonalityTestProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);

    // Otomatik olarak sonraki soruya geç
    setTimeout(() => handleNext(), 200); // kısa gecikme animasyon hissi için
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onNavigate("matching");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
    else onNavigate("onboarding-test");
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col h-full p-6">
      {/* Üst alan: Geri ve İleri */}
      <div className="flex justify-between items-center p-2 mb-4">
        <button
          onClick={handlePrev}
          className="text-gray-300 hover:text-[#F16820] text-md font-semibold hover:underline"
        >
          Geri
        </button>
        <button
          onClick={handleNext}
          disabled={!answers[currentStep]}
          className="text-[#F16820] font-semibold hover:underline"
        >
          <FontAwesomeIcon icon={faCircleRight} size="2x" />
        </button>
      </div>

      {/* Orta alan: soru ve seçenekler */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col space-y-4 w-full max-w-md"
          >
            <h1 className="text-md font-bold text-gray-900">
              {questions[currentStep].question}
            </h1>
            <div className="flex flex-col space-y-3">
              {questions[currentStep].options.map((option) => {
                const isSelected = answers[currentStep] === option;
                return (
                  <Button
                    key={option}
                    size="sm"
                    onClick={() => handleSelect(option)}
                    className={`w-full text-xs text-left transition-all duration-300
                    ${
                      isSelected
                        ? "bg-[#F16820] text-white border-none"
                        : "bg-white text-gray-900 border border-[#F16820] hover:bg-[#FEE1D2]"
                    }
                  `}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Alt alan: progress bar */}
      <div className="w-1/2 flex self-center justify-center pb-4">
        <div className="bg-[#FBD0BA] h-2 rounded-full w-full max-w-sm">
          <div
            className="bg-[#F16820] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
