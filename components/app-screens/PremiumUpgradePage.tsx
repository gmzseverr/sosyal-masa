"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Crown,
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Event Data
const mockEvents = [
  {
    id: 1,
    title: "Lüks Yat Partisi",
    date: "24 Ocak",
    time: "20:00",
    location: "Bodrum",
    price: "Ücretsiz",
    isPremium: true,
  },
  {
    id: 2,
    title: "Gizli Gurme Tadımı",
    date: "15 Şubat",
    time: "19:30",
    location: "İstanbul",
    price: "Ücretsiz",
    isPremium: true,
  },
];

export default function PremiumUpgradePage({ onNavigate, setIsPremium }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col h-full bg-[#F8FAFC]"
    >
      {/* HEADER */}
    <motion.header
        className="sticky top-0 bg-white px-4  border-b border-gray-100 z-10 shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Başlık Satırı */}
        <div className="flex items-center justify-start gap-10 mb-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("home")}
          className="text-white rounded-full h-10 w-10 hover:bg-gray-100"
        >
       <ArrowLeft size={28} className="font-extabold text-white bg-orange-500 p-1 rounded-full" />
        </Button>
         
          <h1 className="text-xl text-center font-bold text-gray-900">Premium Üyelik</h1>
       
        </div>
        </motion.header>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-10 pb-12">

        {/* ICON + HEADER */}
        <div className="text-center">
          <div className="w-24 h-24 bg-[#F16820]/10 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
            <Crown size={48} className="text-[#F16820]" />
          </div>

          <h2 className="text-3xl font-bold text-[#132E50] mt-4 tracking-tight">
            Premium’a Geçin
          </h2>

          <p className="text-[#475569] text-sm mt-2">
            Özel etkinliklere erişim ve sosyal avantajlar.
          </p>
        </div>

        {/* PREMIUM PACKAGE CARD */}
        <Card className="p-7 border border-[#F16820]/20 bg-white shadow-md rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-[#132E50]">
              Premium Üyelik
            </h3>

            <Badge className="bg-[#F16820] text-white px-3 py-1 rounded-full shadow-sm">
              Popüler
            </Badge>
          </div>

          {/* Advantage list */}
          <div className="space-y-4 mb-6">
            {[
              "Özel premium etkinliklere erişim",
              "Öncelikli rezervasyon hakkı",
              "Ücretsiz iptal imkanı",
              "Premium sohbet odaları",
              "Gelişmiş eşleştirme algoritması",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle
                  size={18}
                  className="text-[#F16820] flex-shrink-0"
                />
                <span className="text-sm text-[#394B63]">{text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-[#132E50]">₺49</span>
            <span className="text-lg text-[#475569]">/ay</span>
            <p className="text-xs text-[#64748B] mt-1">
              İlk ay ücretsiz
            </p>
          </div>
        </Card>

        {/* EVENT SHOWCASE */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#132E50]">
            Premium Etkinlik Örnekleri
          </h3>

          {mockEvents.map((event) => (
            <Card
              key={event.id}
              className="p-5 rounded-xl border border-[#132E50]/15 shadow-sm bg-white"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <Crown size={16} className="text-[#F16820]" />
                    <h4 className="font-medium text-[#132E50] text-base">
                      {event.title}
                    </h4>
                  </div>

                  <div className="mt-3 space-y-1 text-sm text-[#475569]">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2 text-[#F16820]" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2 text-[#F16820]" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2 text-[#F16820]" />
                      {event.location}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-[#F16820]">{event.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-6  bg-white/95 backdrop-blur-xl bottom-0 left-0 right-0 space-y-3 shadow-inner">
        <Button
          onClick={() => {
            setIsPremium(true);
            onNavigate("home");
          }}
          className="w-full h-12 text-lg font-semibold bg-[#F16820] hover:bg-[#d95912] rounded-xl shadow-md"
        >
          Premium’a Başla
        </Button>

        <Button
          variant="outline"
          onClick={() => onNavigate("profile")}
          className="w-full h-12 rounded-xl text-[#132E50] hover:bg-[#132E50]/10"
        >
          Şimdi değil
        </Button>
      </div>
    </motion.div>
  );
}
