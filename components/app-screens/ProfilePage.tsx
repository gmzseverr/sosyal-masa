"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Settings,
  MapPin,
  Crown,
  ChevronRight,
  ArrowLeft,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";


interface ProfilePageProps {
  onNavigate: (state: string) => void;
  isPremium: boolean;
}


const DEMO_USER = {
    userName: "MERT YILMAZ",
    userLocation: "İzmir, Türkiye",
    eventCount: 12,
    peopleMetCount: 87, 
    connectionCount: 42,
};


export default function ProfilePage({
  onNavigate,
  isPremium,
}: ProfilePageProps) {
  
  const { userName, userLocation, eventCount, peopleMetCount, connectionCount } = DEMO_USER;


  const initials = userName
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);


  const profileActions = [
    {
      label: "Premium'a Geç",
      icon: Crown,
      state: "premium",
      premiumOnly: false,
      isPremiumCta: true,
      value: null,
    }, // Syntax hatası düzeltildi
    {
      label: "Ayarlar",
      icon: Settings,
      state: "settings",
      premiumOnly: false,
      isPremiumCta: false,
      value: null,
    },
    {
      label: "Konum",
      icon: MapPin,
      state: "location-settings",
      premiumOnly: false,
      isPremiumCta: false,
      value: null,
    },
    {
      label: "Uygulama Dili",
      icon: null, // Özel ikon (bayrak)
      state: "language-settings",
      premiumOnly: false,
      isPremiumCta: false,
      value: "Türkçe",
    },
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      
      {/* 1. HEADER (Başlık Çubuğu) */}
      <div className="flex-shrink-0 px-4 py-3 flex items-center bg-white border-b border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("home")}
          className="text-white bg-orange-500 rounded-full h-8 w-8 hover:bg-gray-100"
        >
          <ArrowLeft size={22} />
        </Button>
        <span className="text-lg font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
          Profil
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="text-orange-500 rounded-full h-10 w-10 hover:bg-gray-100 ml-auto"
        >
          <MoreVertical size={24} />
        </Button>
      </div>

      {/* 2. SCROLLABLE CONTENT (Kaydırılabilir İçerik) */}
      <div className="flex-1 overflow-y-auto p-6 pb-20">
        
        {/* Kullanıcı Özeti Bloğu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Avatar className="w-24 h-24 mx-auto mb-4 shadow-lg">
            <AvatarFallback className="text-2xl bg-orange-100 text-[#f07b3b]">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex items-center justify-center space-x-2">
            <h1 className="text-2xl font-bold text-gray-900">
              {userName}
            </h1>
            {isPremium && (
              <Crown size={20} className="text-yellow-600" />
            )}
          </div>
          <p className="text-gray-600 text-sm">{userLocation}</p>
          
          {isPremium && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white mt-2 font-semibold">
              Premium Üye
            </Badge>
          )}
        </motion.div>

        {/* İstatistik Kutuları (Görseldeki gibi) */}
        <div className="grid grid-cols-3 gap-x-2 mb-10">
          <div className="text-center bg-orange-50 py-2 px-2 rounded-xl shadow-sm border border-orange-700">
            <p className="text-xl font-bold text-gray-800">{eventCount}</p>
            <p className="text-xs text-gray-500">Etkinlik</p>
          </div>
          <div className="text-center bg-orange-50 py-2 px-2 rounded-xl shadow-sm border border-orange-700">
            <p className="text-xl font-bold text-gray-800">{peopleMetCount}</p>
            <p className="text-xs text-gray-500">İnsanla Buluştu</p>
          </div>
          <div className="text-center bg-orange-50 py-2 px-2 rounded-xl shadow-sm border border-orange-700">
            <p className="text-xl font-bold text-gray-800">{connectionCount}</p>
            <p className="text-xs text-gray-500">Bağlantılar</p>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="space-y-3">
          {profileActions
       
            .filter(action => isPremium ? !action.isPremiumCta : true)
            .map((action) => {
              const IconComponent = action.icon;
              const isLanguage = action.label === "Uygulama Dili";

              return (
                <Button
                  key={action.label}
                  variant="ghost"
                  className={`w-full justify-between text-md h-14 rounded-xl px-4 ${
                    action.isPremiumCta 
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 text-gray-900 hover:bg-gradient-to-l" 
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => onNavigate(action.state)} // <-- Doğru yönlendirme burası!
                >
                  <div className="flex items-center">
                    {IconComponent ? (
                      <IconComponent size={20} className={`mr-4 ${action.isPremiumCta ? "text-yellow-600" : "text-gray-600"}`} />
                    ) : isLanguage ? (
                      <span className="w-5 h-5 mr-4 text-center text-xl">🇹🇷</span>
                    ) : (
                   
                      <div className="w-5 h-5 mr-4" />
                    )}
                    <span className={`font-semibold ${action.isPremiumCta ? "text-lg" : ""}`}>
                      {action.label}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {action.value && <span className="text-gray-500 text-sm">{action.value}</span>}
                    <ChevronRight size={18} className="text-gray-400" />
                  </div>
                </Button>
              );
            })}
        </div>
      </div>
    </div>
  );
}