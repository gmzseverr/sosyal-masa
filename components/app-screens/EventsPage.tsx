"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {  Search, Calendar, Clock, MapPin,
  ArrowLeft, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventData, eventsData } from "@/lib/events";

export default function EventsPage({
  onNavigate,
  onSelectEvent,
  }: {
  onNavigate: (state: string) => void;
  onSelectEvent: (event: EventData) => void;
  }) {

  const [activeCategory, setActiveCategory] = useState<
    "Hepsi" | "Premium" | "Bu hafta"
  >("Hepsi");
  const [activeTab, setActiveTab] = useState("events");

  const filteredEvents = eventsData.filter(
    (event) => activeCategory === "Hepsi" || event.category === activeCategory
  );

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onNavigate(tabId);
  };

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <motion.header
        className="sticky top-0 bg-white px-4 py-4 border-b border-gray-100 z-10 shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Başlık Satırı */}
        <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("home")}
          className="text-white rounded-full h-10 w-10 hover:bg-gray-100"
        >
       <ArrowLeft size={28} className="font-extabold text-white bg-orange-500 p-1 rounded-full" />
        </Button>
         
          <h1 className="text-xl font-bold text-gray-900">Etkinlikler</h1>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-orange-500 hover:bg-orange-50"
          >
            <Search size={24} />
          </Button>
        </div>

        {/* Kategori Sekmeler */}
        <div className="flex gap-2  pb-2 scrollbar-hide">
          {(["Hepsi", "Premium", "Bu hafta"] as const).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? category === "Premium"
                    ? "bg-gray-400 text-white"
                    : category === "Bu hafta"
                    ? "bg-gray-400 text-white"
                    : "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.header>

      {/* Events Grid */}
      <div className="flex-1  px-4 py-6 space-y-5">

        {filteredEvents.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            onClick={() => onSelectEvent(event)}

            className="cursor-pointer"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Görsel */}
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {event.isPremium && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Premium
                  </div>
                )}
              </div>

              {/* İçerik */}
              <div className="p-4">
                {/* Başlık */}
                <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.title}
                </h3>

                {/* Detaylar Satırları */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2C6E49]  mb-3 flex-wrap">
  {/* Tarih */}
  <div className="flex items-center gap-1">
    <Calendar size={12} className="text-[#2C6E49] flex-shrink-0" />
    <span>{event.date}</span>
  </div>

  {/* Saat */}
  <div className="flex items-center gap-1">
    <Clock size={12} className="text-[#2C6E49]  flex-shrink-0" />
    <span>{event.time}</span>
  </div>

  {/* Konum */}
  <div className="flex items-center gap-1">
    <MapPin size={12} className="text-[#2C6E49]  flex-shrink-0" />
    <span>{event.location}</span>
  </div>
</div>


                {/* Fiyat */}
                <div className="text-lg font-bold text-gray-900">
                  {event.price}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

  
     

    </div>
  );
}