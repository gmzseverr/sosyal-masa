"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventData} from "@/lib/events"; 
import { Checkbox } from "../ui/checkbox";

interface EventDetailPageProps {
  event?: EventData;
  onNavigate: (state: string) => void;
}

const BOTTOM_MENU_HEIGHT = 70;

export default function EventDetailPage({
  event,
  onNavigate,
}: EventDetailPageProps) {
  if (!event) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Etkinlik verisi yüklenemedi.
      </div>
    );
  }

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
  const [isDiet, setIsDiet] = useState(false);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  const handleBudgetSelect = (id: number) => {
    setSelectedBudget(selectedBudget === id ? null : id);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col ">
      {/* Header */}
      <motion.header
        className="sticky top-0 bg-white px-4 py-4 border-b border-gray-100 z-10 shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Başlık Satırı */}
        <div className="flex items-center justify-start gap-10 mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("home")}
          className="text-white rounded-full h-10 w-10 hover:bg-gray-100"
        >
       <ArrowLeft size={28} className="font-extabold text-white bg-orange-500 p-1 rounded-full" />
        </Button>
         
          <h1 className="text-xl text-center font-bold text-gray-900">Etkinliğe Katıl</h1>
       
        </div>
        </motion.header>
      {/* SCROLLABLE CONTENT */}
      <div 
        className="flex-1 "
        style={{ paddingBottom: `${BOTTOM_MENU_HEIGHT}px` }}
      >
        {/* Görsel Alanı */}
        <div className="relative w-full h-48 p-2 flex-shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full rounded-lg shadow-xl  object-cover"
          />
        </div>

        {/* ANA İÇERİK BLOĞU */}
        <div className="p-4 space-y-5">
          {/* Title and Basic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-lg font-bold text-gray-900 mb-4">
              {event.title}
            </h1>

            {/* Tarih, Saat, Konum Bilgileri */}
            <div className="flex gap-1">
              <div className="flex items-center gap-1">
                <div className="text-[#2C6E49]  ">
                  <Calendar size={14} className="" />
                </div>
                <span className="text-xs font-semibold text-[#2C6E49] ">{event.date}</span>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="text-[#2C6E49]  ">
                  <Clock size={14} className="" />
                </div>
                <span className="text-xs font-semibold text-[#2C6E49]">{event.time}</span>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="text-[#2C6E49] ">
                  <MapPin size={14} className="" />
                </div>
                <span className="text-xs font-semibold text-[#2C6E49]">{event.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-base font-bold text-gray-900 mb-2">Açıklama</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {event.description}
            </p>
          </motion.div>

          {/* Participation Options */}
          <motion.div
            className=""
          >
            <h3 className="text-md font-bold text-gray-900">
              Katılımcı Tercihleri
            </h3>

            {/* Languages */}
            <div>
              <label className="text-xs pt-6  text-gray-500 mb-3 block">
                Hangi dilleri konuşmak istiyorsunuz?
              </label>
              <div className="flex  flex-wrap gap-2">
                {["Türkçe", "İngilizce", "Rusça"].map((language) => (
                  <button
                    key={language}
                    onClick={() => handleLanguageChange(language)}
                    className={`px-4 py-2 rounded-lg text-sm  transition-all border-1 ${
                      selectedLanguages.includes(language)
                        ? "border-[#2C6E49] bg-[#BED2C7] text-[#2C6E49]"
                        : "border-[#2C6E49] bg-white text-[#2C6E49] hover:bg-[#BED2C7]"
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="pt-6 ">
            <label className="text-xs pt-2  text-gray-500 mb-3 block">
                Restoranda ne kadar harcamayı planlıyorsunuz?
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 1, label: "100-200 TL" },
                  { id: 2, label: "200-400 TL" },
                  { id: 3, label: "400 TL +" },
                ].map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => handleBudgetSelect(budget.id)}
                    className={`px-2 py-2 rounded-lg text-xs  transition-all border-1 ${
                      selectedBudget === budget.id
                        ? "border-[#2C6E49] bg-[#BED2C7] text-[#2C6E49] "
                        : "border-[#2C6E49] bg-white text-[#2C6E49] hover:bg-[#BED2C7] "
                    }`}
                  >
                    {budget.label}
                  </button>
                ))}
              </div>
            </div>

         {/* Diet  */}
         <div 
            className="flex items-center justify-start gap-2 pt-6  cursor-pointer"
            onClick={() => setIsDiet(!isDiet)} // Tıklanabilir alanı genişletiyoruz
          >
              <Checkbox
              id="isDietCheckbox"
              checked={isDiet} 
              onCheckedChange={setIsDiet} 
              className="w-4 h-4 rounded-full border-2 border-[#2C6E49] data-[state=checked]:bg-[#BED2C7] "
            />
            <label 
              htmlFor="isDietCheckbox" 
              className="text-sm font-semibold text-gray-500 cursor-pointer"
            >
              Diyet yapıyorum
            </label>
          
          </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            className="bg-[#FEF0E9] rounded-xl p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-base font-bold text-gray-900 mb-4">Kurallar</h3>
            <div className="space-y-3">
              {event.rules?.map((rule, idx) => {
                const IconComponent = rule.icon;
                return (
                  <div key={idx} className="flex gap-3">
                    <IconComponent
                      size={20}
                      className="text-orange-500 flex-shrink-0 mt-0.5"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {rule.title}
                      </p>
                      {rule.description && (
                        <p className="text-xs text-gray-600 mt-1">
                          {rule.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Price and CTA */}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {/* Fiyat Bilgisi */}
            <div className="flex items-center justify-between mb-4"> 
              <span className="text-sm font-semibold text-gray-700">
                Koltuk Ücreti:
              </span>
              <span className="text-2xl font-bold text-gray-900">
                {event.price}
              </span>
            </div>

            {/* Buton */}
            <Button
              onClick={() => onNavigate("payment")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base py-3 rounded-lg"
            >
              Ödemeye Geç
            </Button>
          </motion.div>

         
        </div>
      </div>
    </div>
  );
}