"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Clock, MapPin, CheckCircle, Phone, Globe, CornerDownLeft, Map } from "lucide-react";
import { Button } from "../ui/button";

// Varsayım: Bu arayüz, üst bileşenden gelecek event verisine ek olarak mekan detaylarını da içerir.
interface PaymentSuccessPageProps {
  event?: {
    title: string;
    image: string;
    date: string;
    time: string;
    location: string;
    price: string;
    // Yeni eklenen mekan detayları
    restaurantName: string;
    restaurantDescription: string;
    restaurantPhone: string;
    restaurantWebsite: string;
    participants: string[]; // Katılımcı listesi (isteğe bağlı)
  };
  onNavigate: (state: string) => void;
}

export default function PaymentSuccessPage({ event, onNavigate }: PaymentSuccessPageProps) {
  
  // Örnek katılımcı verisi (event.participants boşsa kullanılacak)
  const defaultParticipants = ["Mehmet K.", "Ayşe D.", "Can Y.", "Ece B."];
  const participantsToShow = event?.participants && event.participants.length > 0 
    ? event.participants 
    : defaultParticipants;

    // Renk Dizisi: Az sayıda katılımcı için canlı, uyumlu renkler
const avatarColors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-indigo-400",
    "bg-yellow-600",
    "bg-pink-400",
    "bg-teal-400",
];



// Katılımcı index'ine göre bir renk atayan basit bir fonksiyon
const getColor = (index: number) => {
    const colorIndex = index % avatarColors.length;
    return avatarColors[colorIndex];
};
    
  // Örnek Mekan Verisi (event'ten gelmezse kullanılacak)
  const defaultRestaurant = {
      name: "Sevinç Pastanesi",
      description: "İzmir'in kalbinde yer alan Sevinç Pastanesi, hem tarihi atmosferi hem de zengin menüsüyle buluşmalar için sıcak bir ortam sunar. Tatlısıyla ünlü bu mekânda, lezzetli yemekler eşliğinde keyifli sohbetler edebilirsiniz.",
      phone: "0232 376 52 69",
      website: "http://sevincpastanesi.com",
  }

  if (!event) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Etkinlik verisi yüklenemedi.
      </div>
    );
  }

  return (
    // Ana Kapsayıcı: Tam ekran ve dikey flex yapısı
    <div className="w-full h-screen bg-white flex flex-col overflow-hidden">
      
      {/* 1. HEADER (Başlık Çubuğu - Görselde 'Ödeme Başarılı' yazıyor) */}
      <div className="flex-shrink-0 px-4 py-3 flex items-center bg-white border-b border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          // Görselde sol üstte geri oku yok, ama kullanıcı akışı için bırakılabilir veya kaldırılabilir.
          // onNavigate("events-available") // Eğer butonsuzsa direk anasayfaya gidebilir
          className="text-gray-800 rounded-full h-10 w-10 hover:bg-gray-100 opacity-0 pointer-events-none" // Gizledik
        >
          <ChevronLeft size={24} />
        </Button>
        <span className="text-lg font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
          Ödeme Başarılı
        </span>
      </div>

      {/* 2. SCROLLABLE CONTENT (Kaydırılabilir İçerik) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 pt-4"
        >
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
         
            <CheckCircle size={40} className="text-[#f07b3b]" /> 
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-1">
            Ödeme Başarılı
          </h1>
          <p className="text-gray-600 text-sm">
            Rezervasyonunuz onaylandı.<br/> İyi eğlenceler dileriz.
          </p>
        </motion.div>

        {/* Etkinlik Özeti Kartı */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden py-4 px-2 border border-gray-100">
            {/* Görsel ve Başlık */}
            <div className="flex flex-col items-center mb-4">
                <img
                src={event.image} 
                alt={event.title}
                className="w-full h-40 object-cover rounded-lg flex-shrink-0 mb-3"
                />
                
                <h3 className="text-base font-bold text-gray-900 text-center leading-tight">
                    {event.title}
                </h3>
                
                {/* Tarih, Saat, Konum Bilgileri */}
                <div className="flex  gap-x-2 items-center  flex-wrap text-xs text-[#2C6E49] mt-2">
               
                    <div className="flex items-center gap-1">
                        <Clock size={12} className="text-[#2C6E49] font-semibold" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#2C6E49] font-semibold" />
                        <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-[#2C6E49] font-semibold" />
                        <span>{event.date}</span>
                    </div>
                  
                </div>

                {/* Katılımcılar */}
                <div className="flex flex-col items-center space-x-2 mt-6 pt-4 border-t border-gray-400 w-full">
                    <div className="flex  -space-x-2 overflow-hidden">
                    {participantsToShow.slice(0, 4).map((p, index) => (
                        <div 
                            key={index} 
                          
                            className={`w-6 h-6 ${getColor(index)} border-2 border-white rounded-full flex items-center justify-center text-xs text-white font-semibold z-[40-index]`}
                          
                        >
                            {p.charAt(0)}
                        </div>
                    ))}
                    {participantsToShow.length > 4 && (
                        <span className="w-6 h-6 bg-gray-500 border-2 border-white rounded-full flex items-center justify-center text-xs text-white z-0">
                            +{participantsToShow.length - 4}
                        </span>
                    )}
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                        {participantsToShow.length} Katılımcı
                    </span>
                </div>
                
            </div>
        </div>
        
        {/* Mekan Bilgileri */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 space-y-4 border border-gray-100">
            <h3 className="text-md  font-bold text-gray-900">
                {event.restaurantName || defaultRestaurant.name} Hakkında
            </h3>
            
            <p className="text-xs text-gray-600 leading-relaxed">
                {event.restaurantDescription || defaultRestaurant.description}
            </p>

            {/* Harita */}
            <div className="relative w-full   rounded-lg overflow-hidden">
               <img src="./map.jpeg" alt="" />
                 
                
            </div>
            
            {/* İletişim Detayları */}
            <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[#2C6E49] flex-shrink-0" />
                    <span className="text-sm text-[#2C6E49]">Yol Tarifi</span>
                    
                </div>
                
                <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#2C6E49] flex-shrink-0" />
                    <span className="text-sm text-[#2C6E49]">{event.restaurantPhone || defaultRestaurant.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                    <Globe size={18} className="text-[#2C6E49] flex-shrink-0" />
                    <span className="text-sm text-[#2C6E49]">{event.restaurantWebsite || defaultRestaurant.website}</span>
                </div>
            </div>
            
        </div>
           {/* 3. FIXED CTA FOOTER (Sabit Buton) */}
      <motion.div
        className="p-4 border-t border-gray-200 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={() => onNavigate("events-available")} // Anasayfaya/etkinlik listesine dön
          className="w-full  hover:bg-gray-700 text-white font-bold text-base py-3 rounded-lg shadow-md"
        >
          Detaylara Dön
        </Button>
      </motion.div>
        

        {/* Butonun sabitlenmesi için boşluk */}
        <div className="h-20" /> 
      </div>
      
   
      
    </div>
  );
}