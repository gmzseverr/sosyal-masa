// src/components/PremiumUpgradePage.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Crown, CheckCircle, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card"; // Varsayıyorum: Card bileşeni mevcut

// ----------------------------------------------------
// DEMO VERİLERİ (AppSimulator'dan veya harici kaynaktan gelmeli)
// ----------------------------------------------------
const mockEvents = [
  { id: 1, title: "Lüks Yat Partisi", date: "24 Ocak", time: "20:00", location: "Bodrum", price: "Ücretsiz", isPremium: true },
  { id: 2, title: "Gizli Gurme Tadımı", date: "15 Şubat", time: "19:30", location: "İstanbul", price: "Ücretsiz", isPremium: true },
  { id: 3, title: "Haftalık Koşu Kulübü", date: "10 Mart", time: "18:00", location: "Ankara", price: "₺20", isPremium: false },
];

interface PremiumUpgradePageProps {
  onNavigate: (state: string) => void;
  setIsPremium: (isPremium: boolean) => void;
}

export default function PremiumUpgradePage({
  onNavigate,
  setIsPremium,
}: PremiumUpgradePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full bg-white"
    >
      {/* Header */}
      <div className="flex items-center p-4 border-b flex-shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("profile")}
          className="rounded-full"
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-xl font-semibold ml-4">Premium Üyelik</h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-24">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Crown size={40} className="text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Premium'a Geçin
          </h2>
          <p className="text-gray-600 text-sm">
            Özel etkinliklere erişim kazanın ve daha iyi deneyim yaşayın
          </p>
        </div>

        <Card className="p-6 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Premium Üyelik
            </h3>
            <Badge className="bg-yellow-600 text-white hover:bg-yellow-700">Popüler</Badge>
          </div>

          <div className="space-y-3 mb-6">
            {[
              "Özel premium etkinliklere erişim",
              "Öncelikli rezervasyon hakkı",
              "Ücretsiz iptal imkanı",
              "Özel sohbet odaları",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-900">
                ₺49
              </span>
              <span className="text-xl text-gray-600">/ay</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              İlk ay ücretsiz
            </p>
          </div>
        </Card>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 text-lg border-b pb-2">
            Premium Etkinlik Örnekleri
          </h3>

          {mockEvents
            .filter((event) => event.isPremium)
            .map((event) => (
              <Card key={event.id} className="p-4 border border-yellow-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-bold text-gray-900">
                        {event.title}
                      </h4>
                      <Crown size={16} className="text-yellow-600 flex-shrink-0" />
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2 text-orange-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-2 text-orange-500" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 text-orange-500" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-orange-600">
                      {event.price}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>

      {/* Fixed Footer Buttons */}
      <div className="p-6 border-t bg-white space-y-3 flex-shrink-0 shadow-inner">
        <Button
          onClick={() => {
            setIsPremium(true);
            onNavigate("home"); // Premium olduktan sonra ana sayfaya yönlendirme daha mantıklı olabilir.
          }}
          className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
        >
          Premium'a Başla
        </Button>
        <Button
          variant="outline"
          onClick={() => onNavigate("profile")}
          className="w-full h-12"
        >
          Şimdi değil, Geri Dön
        </Button>
      </div>
    </motion.div>
  );
}