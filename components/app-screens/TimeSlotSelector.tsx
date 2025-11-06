"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface TimeSlotSelectorProps {
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  className?: string;
}

const timeSlotData = {
  breakfast: {
    label: "KAHVALTI",
    times: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30"],
    availability: [true, true, true, false, true, true],
  },
  lunch: {
    label: "ÖĞLE YEMEĞİ",
    times: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"],
    availability: [true, true, true, true, false, true],
  },
  dinner: {
    label: "AKŞAM YEMEĞİ",
    times: ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"],
    availability: [true, false, true, true, true, true],
  },
};

type TimeSlotType = keyof typeof timeSlotData;

export default function TimeSlotSelector({
  selectedTime,
  onSelectTime,
  className = "",
}: TimeSlotSelectorProps) {
  const [activeTab, setActiveTab] = useState<TimeSlotType>("lunch");
  const currentSlot = timeSlotData[activeTab];

  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Başlık */}
      <h3 className="text-sm font-semibold text-gray-800 mb-3">
        Zaman Aralığını Seç
      </h3>

      {/* Sekmeler (underline tarzında) */}
      <div className="flex gap-6 mb-5 border-b border-green-100">
        {(Object.keys(timeSlotData) as TimeSlotType[]).map((key) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="relative pb-2 text-xs font-semibold text-gray-700 hover:text-green-700 transition-all duration-200"
            >
              {timeSlotData[key].label}
              <motion.div
                layoutId="underline"
                className={`absolute left-0 bottom-0 h-[2px] w-full rounded-full transition-colors duration-300 ${
                  isActive
                    ? "bg-green-700"
                    : "bg-green-200 group-hover:bg-green-300"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Saat Kutucukları */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {currentSlot.times.map((time, idx) => {
          const available = currentSlot.availability[idx];
          const isSelected = selectedTime === time;
          return (
            <motion.button
              key={time}
              onClick={() => available && onSelectTime(time)}
              disabled={!available}
              whileHover={available ? { scale: 1.05 } : {}}
              whileTap={available ? { scale: 0.95 } : {}}
              className={`py-2 rounded-md text-xs font-medium border transition-all duration-200 ${
                available
                  ? isSelected
                    ? "bg-amber-500 border-amber-600 text-white shadow-md"
                    : "border-gray-300 bg-white text-gray-700 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50"
                  : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {time}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

