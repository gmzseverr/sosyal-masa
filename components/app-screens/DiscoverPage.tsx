// src/components/DiscoverPage.tsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bell, Compass, Filter, Clock, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


interface Event {
  id: number;
  title: string;
  category: string;
  time: string;
  attendees: number;
  location: string;
  price: string;
  isPopular: boolean;
}

const DEMO_EVENTS: Event[] = [
  { id: 1, title: "Sahil Koşusu ve Brunch", category: "Spor", time: "Yarın 09:00", attendees: 45, location: "Konak İskelesi", price: "Ücretsiz", isPopular: true },
  { id: 2, title: "Web Geliştirme Meetup", category: "Eğitim", time: "Bugün 19:30", attendees: 22, location: "Alsancak Cafe", price: "₺30", isPopular: false },
  { id: 3, title: "Müzikle Rahatlama Terapisi", category: "Sanat", time: "Cumartesi 20:00", attendees: 18, location: "Bostanlı Stüdyo", price: "₺120", isPopular: true },
  { id: 4, title: "Yeni Nesil Kahve Tadımı", category: "Yeme-İçme", time: "Pazar 14:00", attendees: 30, location: "Urla Çiftlik", price: "₺80", isPopular: false },
  { id: 5, title: "Taş Boyama Atölyesi", category: "Hobi", time: "2 gün sonra 17:00", attendees: 10, location: "Karşıyaka Park", price: "Ücretsiz", isPopular: false },
];

interface DiscoverPageProps {
  onNavigate: (state: string) => void;
}

const MapArea = () => (
  <div className="relative rounded-lg shadow-md h-40 w-full bg-gray-200 overflow-hidden"> {/* H-48 -> H-40: Daha küçük harita */}
  
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('./map.jpeg')" }} />
    <div className="absolute inset-0 bg-orange-500 opacity-20 pointer-events-none"></div>
    
    {/* Konum Belirteci */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <MapPin size={30} className="text-red-600 drop-shadow-lg" fill="white"/> {/* İkon küçültüldü */}
    </div>

    {/* Haritayı Tam Ekran Açma Butonu */}
    <Button 
      variant="ghost" 
      size="sm" 
      className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-semibold hover:bg-white p-2 h-7" // Daha küçük buton
    >
      Haritayı Gör
    </Button>
  </div>
);


export default function DiscoverPage({ onNavigate }: DiscoverPageProps) {
  const [currentLocation, setCurrentLocation] = useState("İzmir Merkez (5km)");
  const [activeFilter, setActiveFilter] = useState("Hepsi");

  const filters = ["Hepsi", "Popüler", "Spor", "Eğitim", "Yeme-İçme"];
  

  const filteredEvents = DEMO_EVENTS.filter(event => {
    if (activeFilter === "Hepsi") return true;
    if (activeFilter === "Popüler") return event.isPopular;
    return event.category === activeFilter;
  });

  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      
      {/* 1. HEADER (Başlık Çubuğu) */}
      <div className="flex-shrink-0 px-4 py-3 flex items-center bg-white border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-900 flex items-center space-x-2"> 
            <Compass size={22} className="text-orange-500" />
            <span>Keşfet</span>
        </h1>
        <Button
          variant="ghost"
          size="icon"
          className="text-orange-500 rounded-full h-9 w-9 hover:bg-gray-100 ml-auto" 
          onClick={() => onNavigate("notifications")} 
        >
          <Bell size={20} /> 
        </Button>
      </div>

      {/* 2. MAP & LOCATION AREA */}
      <div className="flex-shrink-0">
        <MapArea />

        {/* Konum Bilgisi Kutusu */}
        <div className="p-3 bg-white border-b border-gray-200 shadow-sm">
            <button 
                className="w-full flex items-center justify-between p-2 bg-gray-50 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors" 
                onClick={() => console.log("Konum değiştirme modalı açıldı")}
            >
                <div className="flex items-center">
                    <MapPin size={18} className="text-orange-500 mr-2" /> 
                    <span className="font-semibold text-sm">{currentLocation}</span> 
                </div>
                <ChevronDown size={16} className="text-gray-500" /> 
            </button>
        </div>
      </div>


      {/* 3. SCROLLABLE CONTENT (Etkinlikler ve Filtreler) */}
      <div className="flex-1 overflow-y-auto p-3 pb-20"> 
        
        {/* Filtre Butonları */}
        <div className="flex space-x-2 overflow-x-auto pb-3 scrollbar-hide"> 
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              className={`flex-shrink-0 rounded-lg font-semibold transition-colors duration-200 h-8 text-sm 
                ${activeFilter === filter 
                  ? "bg-orange-500 hover:bg-orange-600 text-white" 
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`} 
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
          
        </div>
        
        {/* Etkinlik Listesi */}
        <div className="space-y-3 pt-1"> 
          <h2 className="text-md font-bold text-gray-900">Yakındaki {activeFilter} Etkinlikler ({filteredEvents.length})</h2> 
          
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-3 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100"> 
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-md font-bold text-gray-900">{event.title}</h3> 
                    {event.isPopular && (
                        <Badge className="bg-orange-500/10 text-orange-700 font-semibold border-none text-xs px-2 py-0.5"> 
                            <Users size={12} className="mr-1" /> Popüler
                        </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{event.category} • {event.location}</p> 
                  
                  <div className="flex items-center space-x-3 text-xs text-gray-500"> 
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1 text-orange-500" />
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <Users size={12} className="mr-1 text-orange-500" />
                      {event.attendees} Katılımcı
                    </span>
                    <span className="ml-auto font-bold text-sm text-green-600"> 
                      {event.price}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="text-center p-6 bg-gray-50 rounded-xl mt-4"> 
                <Filter size={30} className="text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Seçili filtreye uygun etkinlik bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}