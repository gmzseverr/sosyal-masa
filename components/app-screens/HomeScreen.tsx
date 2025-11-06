"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Bell, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import EventCard from "../EventCard";
import CalendarBox from "./CalenderBox";
import TimeSlotSelector from "./TimeSlotSelector";


// --- Constants ---
const USER_NAME = "Mert";
const AVATAR_SRC = "./1406be1bb3e531935af8e5cf6bc014fde3dbc82c.png";

// --- Zaman Dilimleri ---
type TimeSlot = "breakfast" | "lunch" | "dinner";

function HomeScreen({ onNavigate }: { onNavigate: (state: string) => void }) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot>("lunch");
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // 🔸 Bottom Navigation için state
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "events") onNavigate("event-list");
    if (tabId === "profile") onNavigate("profile");
    if (tabId === "discover") onNavigate("discover");
  };

  return (
    <div className="w-full h-full bg-[#FAFCFF] flex flex-col overflow-y-scroll pb-6">
      {/* --- Header --- */}
      <motion.header
        className="sticky top-0 bg-white p-4 pb-3 flex flex-col border-b border-gray-100 z-10 shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={AVATAR_SRC} alt={USER_NAME} />
              <AvatarFallback className="bg-orange-100 font-bold">
                {USER_NAME[0]}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold text-gray-800">
              Merhaba, {USER_NAME}
            </h3>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="flex items-center justify-start h-10 bg-white border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-1 flex-1"
            onClick={() => console.log("Konum Seçildi")}
          >
            <MapPin size={18} className="mr-2 text-gray-700" />
            <div className="flex flex-col items-start truncate">
              <p className="text-xs text-gray-500 font-normal">Mevcut Konum</p>
              <span className="font-semibold text-xs">İzmir, Konak</span>
            </div>
            <ChevronDown size={16} className="ml-auto text-gray-500" />
          </Button>

          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Bell size={20} className="text-gray-600 hover:text-orange-600" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            onClick={() => onNavigate("filter-screen")}
          >
            <Filter size={20} className="text-gray-600 hover:text-orange-600" />
          </Button>
        </div>
      </motion.header>

      {/* --- Takvim --- */}
      <CalendarBox
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        className="mb-6"
      />

      {/* --- Zaman Aralığı Seçimi --- */}
      <div className="flex-1 p-4 pb-24">
        <div className="py-4">
          <TimeSlotSelector
            selectedTime={selectedHour}
            onSelectTime={setSelectedHour}
          />
        </div>

        {/* Banner */}
        <motion.div
          className="relative w-full h-42 rounded-xl overflow-hidden shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="/events.jpg"
            alt="Yeni insanlarla tanış"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end text-white">
            <h3 className="text-lg font-bold mb-1">
              Yeni insanlarla tanış, paylaş, ilham al
            </h3>
            <p className="text-xs mb-3">Converge masalarına katıl</p>
            <Button
              variant="default"
              className="bg-orange-600 hover:bg-orange-700 text-white w-fit px-6 py-2 rounded-md font-semibold text-sm"
              onClick={() => onNavigate("event-list")}
            >
              Masaları Keşfet
            </Button>
          </div>
        </motion.div>

        {/* Etkinlikler */}
        <h3 className="text-lg font-bold text-gray-700 mb-4 mt-6">
          Yaklaşan Etkinlikler
        </h3>
        <div className="space-y-4">
          <EventCard
            title="Teknoloji Liderliyle Akşam Yemeği"
            date="17 Temmuz Çarşamba"
            time="19:00"
            price="400 TL"
            location="Bayraklı'da bir restoranda diğer teknoloji liderleriyle keyifli bir akşam yemeğine katılın"
            attendeeCount={5}
            onCardClick={() => onNavigate("event-detail")}
          />

          <EventCard
            title="Girişimci Kurucularla Akşam Yemeği"
            date="18 Temmuz Perşembe"
            time="19:00"
            location="Alsancak'taki bir restoranda diğer girişim kurucularıyla bir araya gelin."
            price="300 TL"
            attendeeCount={4}
            onCardClick={() => onNavigate("event-detail")}
          />
        </div>

        {/* --- Tüm Etkinlikleri Gör Butonu --- */}
        <div className="mt-8">
          <Button
            className="w-full bg-[#132E50] text-white hover:bg-[#1c3b66] text-sm font-semibold py-3 rounded-lg"
            onClick={() => onNavigate("events-available")}
          >
            Tüm Etkinlikleri Gör
          </Button>
        </div>
    
      </div>
     
    </div>
    
    
  );
}

export default HomeScreen;
