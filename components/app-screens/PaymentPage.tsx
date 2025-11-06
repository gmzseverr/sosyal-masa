"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox"; 
import { Input } from "../ui/input";

interface PaymentPageProps {
  event?: {
    title: string;
    image: string;
    date: string;
    time: string;
    location: string;
    price: string;
  };
  onNavigate: (state: string) => void;
}

export default function PaymentPage({ event, onNavigate }: PaymentPageProps) {
  // State tanımlamaları
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [skt, setSkt] = useState(""); // SKT (Son Kullanma Tarihi)
  const [cvc, setCvc] = useState("");
  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  // Kart Numarası Formatlama
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Sadece rakamları al
    let value = e.target.value.replace(/\D/g, "");
    // Dört hanede bir boşluk ekle
    value = value.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(value.substring(0, 19)); // Kart numarasının max 16 hane (19 karakter) olmasını sağla
  };

  // SKT Formatlama (AA/YY)
  const handleSktChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Sadece rakamları al
    let value = e.target.value.replace(/\D/g, "");
    
    // Ay (ilk 2 hane) kontrolü
    if (value.length > 2) {
      // Ay değeri 12'den büyükse 12 yap
      const month = parseInt(value.substring(0, 2));
      if (month > 12) {
        value = "12" + value.substring(2);
      }
    }

    // '/' işaretini otomatik ekle
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    
    // Max 4 hane (5 karakter) ile sınırla
    setSkt(value.substring(0, 5)); 
  };
  
  // CVC Sınırı
  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    setCvc(value.substring(0, 4)); // CVC/CVV için max 4 hane
  }


  const handlePayment = () => {
    if (!cardName || !cardNumber || !skt || !cvc) {
      alert("Lütfen tüm kart bilgilerini doldurunuz.");
      return;
    }
    if (!kvkkAccepted) {
      alert("Ödeme işlemini tamamlamak için Sözleşme/KVKK koşullarını kabul etmelisiniz.");
      return;
    }

    onNavigate("payment-success"); 
  };
  if (!event) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Etkinlik verisi yüklenemedi.
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col overflow-hidden">
     {/* 1. HEADER */}
     <div className="flex-shrink-0 px-4 py-3 flex items-center bg-white border-b border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate("event-detail")}
          className="text-gray-800 rounded-full h-10 w-10 hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </Button>
        <span className="text-lg font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
          Ödeme
        </span>
      </div>

      {/* 2. SCROLLABLE CONTENT (Kaydırılabilir İçerik) */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        
        {/* Etkinlik Özeti (Görsel ve Bilgiler) */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
          
          {/* Görsel ve Başlık */}
          <div className="flex flex-col items-start mb-4">
            <img
              // event.image'ı kullan
              src={event.image} 
            
              className="w-full h-40 object-cover rounded-lg flex-shrink-0 mr-4"
            />
            <div>
              <h3 className="text-sm pt-4 font-semibold text-gray-900 mb-2 text-center">
                {event.title}
              </h3>
              
              {/* Tarih, Saat, Konum Bilgileri */}
              <div className="flex flex-wrap gap-x-2 text-xs text-[#2C6E49]">
              <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#2C6E49] font-semibold" />
                  <span>{event.location}</span>
                </div>
                  <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-[#2C6E49] font-semibold" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-[#2C6E49] font-semibold" />
                  <span>{event.time}</span>
                </div>
               
              </div>
            </div>
          </div>
          
          {/* Toplam Ücret */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-400">
            <span className="text-base font-bold text-gray-900">TOPLAM</span>
            <span className="text-xl font-extrabold text-[#f07b3b]">
              {event.price}
            </span>
          </div>
        </div>

        {/* Ödeme Formu */}
        <div className="space-y-5 bg-white p-4 rounded-xl shadow-sm">
          {/* Kart Üzerindeki İsim */}
          <div>
            <label className="text-sm font-semibold text-gray-900 mb-1 block">
              Kart Üzerindeki İsim
            </label>
            <Input 
              placeholder="AYŞE YILMAZ" 
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())} // Büyük harf zorunluluğu
              className="mt-1 border-gray-300 focus:border-[#f07b3b]" 
            />
          </div>

          {/* Kart Numarası */}
          <div>
            <label className="text-sm font-semibold text-gray-900 mb-1 block">
              Kart Numarası
            </label>
            <Input 
              placeholder="1234 5678 9012 3456" 
              value={cardNumber}
              onChange={handleCardNumberChange} // Formatlama fonksiyonu kullanıldı
              maxLength={19} // Maksimum uzunluk (16 hane + 3 boşluk)
              inputMode="numeric" // Mobil klavyeyi numeric açar
              className="mt-1 border-gray-300 focus:border-[#f07b3b]" 
            />
          </div>

          <div className="flex gap-4">
            {/* SKT */}
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-900 mb-1 block">
                SKT
              </label>
              <Input 
                placeholder="AA/YY" 
                value={skt} // Düzeltildi
                onChange={handleSktChange} // Formatlama fonksiyonu kullanıldı
                maxLength={5} // Max AA/YY (5 karakter)
                inputMode="numeric" 
                className="mt-1 border-gray-300 focus:border-[#f07b3b]" 
              />
            </div>
            {/* CVC */}
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-900 mb-1 block">
                CVC
              </label>
              <Input
                placeholder="123" 
                type="password"
                value={cvc}
                onChange={handleCvcChange} // CVC limit fonksiyonu kullanıldı
                maxLength={4} // Max 4 hane
                inputMode="numeric"
                className="mt-1 border-gray-300 focus:border-[#f07b3b]" 
              />
            </div>
          </div>

          {/* KVKK Onayı */}
          <div className="flex items-center pt-3">
            <Checkbox 
              id="kvkk" 
              // onCheckedChange, boolean/indeterminate tipini döndürdüğünden emin olmak için !! kullanılır.
              onCheckedChange={(checked) => setKvkkAccepted(!!checked)} 
              checked={kvkkAccepted} // Düzeltildi
              className="rounded-full w-5 h-5 border-gray-400 data-[state=checked]:bg-[#f07b3b] data-[state=checked]:border-[#f07b3b] flex-shrink-0"
            />
            <label htmlFor="kvkk" className="text-sm text-gray-700 ml-3 cursor-pointer">
              Sözleşme / KVKK koşullarını kabul ediyorum
            </label>
          </div>
        
        </div>
        <motion.div
        className="  border-gray-200 shadow-lg z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={handlePayment}
          className="w-full bg-[#f07b3b] hover:bg-[#d96c34] text-white font-bold text-base py-3 rounded-lg shadow-md"
        >
          Ödemeyi Tamamla
        </Button>
      </motion.div>
        

     
        <div className="h-20" /> 
        
      </div>
 
     
    </div>
  );
}