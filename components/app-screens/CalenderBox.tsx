"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarBoxProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date) => void;
  className?: string;
}

export default function CalendarBox({
  selectedDate,
  onSelectDate,
  className = "",
}: CalendarBoxProps) {
  const [currentMonth, setCurrentMonth] = useState(
    selectedDate || new Date()
  );

  const monthName = currentMonth.toLocaleDateString("tr-TR", {
    month: "long",
    year: "numeric",
  });

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const dayLabels = ["PAZ", "PZT", "SAL", "ÇAR", "PER", "CUM", "CTS"];

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      selectedDate &&
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handleSelectDate = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onSelectDate(newDate);
  };

  return (
    <motion.div
      className={`bg-white rounded-lg p-5 shadow-sm border border-gray-100 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Başlık ve Aylar */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-bold text-gray-900 capitalize">
          {monthName}
        </h3>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevMonth}
            className="h-8 w-8 text-gray-600 hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextMonth}
            className="h-8 w-8 text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>

      {/* Gün Başlıkları */}
      <div className="grid grid-cols-7 gap-2 mb-3">
        {dayLabels.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Takvim Günleri */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, idx) => (
          <motion.button
            key={idx}
            whileHover={day ? { scale: 1.05 } : {}}
            whileTap={day ? { scale: 0.95 } : {}}
            onClick={() => day && handleSelectDate(day)}
            disabled={!day}
            className={`h-10 text-xs font-semibold rounded-lg transition-all duration-200 ${
              day === null
                ? "cursor-default text-transparent"
                :               isSelected(day)
                ? "bg-orange-600 text-white shadow-md hover:bg-orange-700"
                : isToday(day)
                ? "bg-orange-100 text-orange-700 border-2 border-orange-300"
                : "text-gray-700 hover:bg-gray-100 border border-transparent"
            }`}
          >
            {day}
          </motion.button>
        ))}
      </div>

      {/* Seçili Tarih Bilgisi */}
      {selectedDate && (
        <motion.div
          className="mt-4 pt-4 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-xs text-gray-600">
            Seçili Tarih:{" "}
            <span className="font-semibold text-gray-900">
              {selectedDate.toLocaleDateString("tr-TR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}