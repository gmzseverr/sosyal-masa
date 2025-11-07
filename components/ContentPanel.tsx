"use client";

import { SectionCard } from "@/components/SectionCard";
import { motion } from "framer-motion";


import {
  Users,
  Calendar,
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Rocket,
  Heart,
  Crown,
  Star,
  MessageCircle,
  Badge,
  Sparkles,
  ListChecks,
  Languages,
  ClipboardCheck,
  User,
} from "lucide-react";

import type { AppState } from "@/lib/states";
import { Card } from "./ui/card";


interface ContentPanelProps {
  currentState: AppState;
}

export function ContentPanel({ currentState }: ContentPanelProps) {
  return (
    <div className="space-y-8 overflow-x-hidden">
      <div className="relative w-full h-full">
       
      {currentState === "onboarding" && (
  <motion.section
    className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Logo */}
    <motion.img
      src="/b690b2c1e82ae92d2fbaaca890f3dd75215255ce.png"
      alt="Converge Logo"
      className="w-56 h-56 sm:w-72 sm:h-72 mb-8 drop-shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
    />

    {/* Başlık & Açıklama */}
    <motion.p
      className="text-xl sm:text-2xl font-medium text-[#132E50] max-w-lg leading-relaxed"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
    >
      Genç profesyonelleri güvenli ve doğal bir formatta bir araya getiren
      sosyal bağlantı platformu.
    </motion.p>

   
  </motion.section>
)}

  
{["splash"].includes(currentState) && (
  <motion.section
    id="problem"
    className="px-4 py-16 sm:py-24 max-w-7xl mx-auto flex flex-col gap-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Başlık */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#132E50] mb-4">
        Neden Converge?
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Converge, şehir hayatında birbirini tanımayan genç profesyonelleri güvenli ve doğal bir formatta bir araya getirerek yeni sosyal bağlantılar kurulmasını sağlar.
      </p>
    </motion.div>

    {/* Problem Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Şehir Yalnızlığı",
          description:
            "Yalnız yaşayan genç profesyonellerin sosyal ilişkiler kurmakta zorlanması.",
          color: "red",
          index: 1,
        },
        {
          title: "Doğru Format Eksikliği",
          description:
            "Mevcut platformlar yüzeysel; insanlar gerçek bağ kuracak doğal ortamlar arıyor.",
          color: "orange",
          index: 2,
        },
        {
          title: "Güven Problemi",
          description:
            "Rastgele buluşmalar güvensiz; insanlar seçilmiş ve kontrollü bir ortam istiyor.",
          color: "yellow",
          index: 3,
        },
      ].map((item, idx) => (
        <motion.div
          key={item.index}
          className={`space-y-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-transform transform hover:scale-105`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
        >
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${item.color}-100`}
          >
            <span className={`text-${item.color}-600 font-bold text-lg`}>
              {item.index}
            </span>
          </div>
          <h4 className="font-semibold text-gray-900">{item.title}</h4>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>

    {/* Data Card */}
    <motion.div
      className="bg-[#FEEFE3] p-6 rounded-xl border border-orange-200 shadow-lg max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <h4 className="font-semibold text-[#F16820] mb-2">Gerçek İhtiyaç</h4>
      <p className="text-[#132E50] text-sm">
        İstanbul’da yaşayan 25–35 yaş arası profesyonellerin %73’ü yeni sosyal bağlantılar kurmakta zorlanıyor — Converge tam olarak bu ihtiyaca çözüm üretir.
      </p>
    </motion.div>
  </motion.section>
)}

{currentState === "onboarding-test" && (
  <motion.section
    id="onboarding-test"
    className="relative w-full py-20 px-6 sm:px-12 flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Soft Glow Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white/20 to-orange-100/40 rounded-3xl pointer-events-none blur-xl"></div>

    <motion.div
      className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-lg"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 drop-shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Sana Özel Bir Sosyal Harita
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        Kısa kişilik testi ile Converge algoritması sana en uygun etkinlikleri,
        masaları ve grup dinamiklerini belirler.  
        <span className="block mt-1 font-medium text-gray-800">
          Yolculuğun tamamen sana göre şekillenir.
        </span>
      </motion.p>

      {/* Feature Card */}
      <motion.div
        className="p-6 rounded-3xl bg-white border border-gray-100 shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-sm text-gray-800 font-semibold mb-3">Testin Avantajları</p>
        <ul className="text-xs text-gray-500 space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Enerjine uygun masalar seçilir
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            İlgi alanlarına göre etkinlik önerilir
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Sosyal uyum puanın ile eşleşme yapılır
          </li>
        </ul>
      </motion.div>

      {/* Hint */}
      <motion.p
        className="text-xs text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Test 2 dakika sürer. Sonuçlar gizli tutulur.
      </motion.p>
    </motion.div>
  </motion.section>
)}
{["test-start", "test-step", "matching"].includes(currentState) && (
  <motion.section
    id="test"
    className="relative w-full py-24 px-6 sm:px-12 flex flex-col items-center overflow-hidden"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Floating Glow Bubbles */}
    <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full bg-orange-200/30 blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-purple-200/20 blur-3xl animate-pulse"></div>
    <div className="absolute top-10 right-1/2 w-32 h-32 rounded-full bg-blue-100/20 blur-2xl animate-pulse"></div>

    {/* Container */}
    <motion.div className="relative z-10 flex flex-col items-center text-center gap-16 max-w-6xl">
      
      {/* Üst Açıklama */}
      <motion.div
        className="space-y-4 max-w-3xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 drop-shadow-md">
          Sana Özel Sosyal Masalar
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Kısa kişilik testi ile enerji seviyenize ve vibe’ınıza en uygun masaları ve etkinlikleri belirliyoruz. Tamamen sezgisel, hızlı ve size özel tasarlandı.
        </p>
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-800 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
          <Star size={14} className="text-orange-600" />
          <span>1 dakika · 5 soru</span>
        </div>
      </motion.div>

      {/* 3 Adımlık Akış */}
      <motion.div
        className="grid sm:grid-cols-3 gap-8 w-full"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {[
          { step: "1", title: "Kısa Teste Başlayın", desc: "Hızlı sorularla sosyal eğilimlerinizi anlayın." },
          { step: "2", title: "Size Uygun Masalar", desc: "Enerjinize ve vibe’ınıza uygun masaları seçiyoruz." },
          { step: "3", title: "Doğal Ortamda Tanışın", desc: "6 kişilik sıcak masalarda bağlantı kurun." }
        ].map((item) => (
          <motion.div
            key={item.step}
            className="p-6 rounded-3xl bg-white border border-gray-100 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 shadow-inner hover:shadow-lg transition-shadow duration-300">
              <span className="text-orange-600 font-bold text-lg">{item.step}</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Alt Özellik Kutusu */}
      <motion.div
        className="bg-gradient-to-br from-orange-50/50 to-orange-100/50 p-8 rounded-3xl border border-orange-100 shadow-md relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h4 className="text-orange-900 font-semibold mb-4 text-lg">Bu Test Size Ne Sağlar?</h4>
        <ul className="space-y-3 text-orange-900 text-sm">
          <li className="flex items-center gap-2">
            <Star size={16} className="text-orange-600 animate-pulse" />
            Size benzeyen insanlarla doğru eşleşme
          </li>
          <li className="flex items-center gap-2">
            <Users size={16} className="text-orange-600 animate-pulse" />
            Sosyal enerji seviyenize uygun masalar
          </li>
          <li className="flex items-center gap-2">
            <Calendar size={16} className="text-orange-600 animate-pulse" />
            Haftalık optimize etkinlik önerileri
          </li>
          <li className="flex items-center gap-2">
            <Shield size={16} className="text-orange-600 animate-pulse" />
            Güvenli ve doğrulanmış topluluk deneyimi
          </li>
        </ul>
      </motion.div>
    </motion.div>
  </motion.section>
)}
{currentState === "login" && (
  <motion.section
    className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 sm:px-12 py-20 overflow-hidden"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Floating Glow / Blur Elements */}
    <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full bg-orange-200/20 blur-3xl animate-pulse pointer-events-none"></div>
    <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-yellow-200/15 blur-3xl animate-pulse pointer-events-none"></div>
    <div className="absolute top-16 right-1/3 w-28 h-28 rounded-full bg-purple-100/15 blur-2xl animate-pulse pointer-events-none"></div>

    {/* Main Content */}
    <motion.div
      className="relative z-10 flex flex-col items-center text-center gap-8 max-w-md"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {/* Logo */}
      <motion.img
        src="/b690b2c1e82ae92d2fbaaca890f3dd75215255ce.png"
        alt="Converge Logo"
        className="w-28 h-28 sm:w-32 sm:h-32 mb-4 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Tagline */}
      <motion.h2
        className="text-gray-900 text-3xl sm:text-4xl font-bold leading-snug drop-shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Sosyal Bağlantıyı Bir Üst Seviyeye Taşı!
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Benzer frekansta genç profesyonellerle tanış, etkinliklere katıl ve kişilik testini çöz. Tamamen sana özel bir deneyim.
      </motion.p>

      {/* Feature Highlights */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {[
          { icon: "🔒", text: "Güvenli Giriş" },
          { icon: "🎯", text: "Kişiselleştirilmiş Öneriler" },
          { icon: "🤝", text: "Doğal Bağlantılar" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-5 rounded-3xl shadow-md hover:shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 hover:bg-white/20"
            whileHover={{ scale: 1.08 }}
          >
            <span className="text-orange-500 text-3xl">{item.icon}</span>
            <p className="text-gray-900 font-semibold text-sm sm:text-base">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </motion.section>
)}




{["home", "landing"].includes(currentState) && (
  <motion.section
    className="relative w-full py-20 px-6 sm:px-12 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-12">
      
      {/* Başlık */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Converge ile Neler Yapabilirsin?
      </motion.h2>

      {/* Açıklama */}
      <motion.p
        className="text-gray-700 text-lg leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Tarih, zaman aralığı ve lokasyon seçimlerinle, senin için en uygun masaları filtreliyoruz. 
        Amacımız: doğru gün, doğru saat ve doğru insanlarla buluşmanı sağlamak.
      </motion.p>

      {/* 3 Büyük Faydası */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          {
            icon: Calendar,
            title: "Akıllı Zamanlama",
            desc: "Seçtiğin tarih ve zaman aralığına en uygun etkinlikleri otomatik olarak öne çıkarır."
          },
          {
            icon: MapPin,
            title: "Lokasyon Uyumlu",
            desc: "Konumuna en yakın restoranları ve masaları ilk sıraya getirir."
          },
          {
            icon: Users,
            title: "Sana Uygun İnsanlar",
            desc: "Kişilik testin ve tercihlerinle eşleşen masaları önerir."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100 shadow-inner hover:shadow-xl transition-shadow duration-300">
              <item.icon size={22} className="text-orange-600 drop-shadow-md" />
            </div>
            <h4 className="text-gray-900 font-semibold mb-1">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mini Highlight Box */}
      <motion.div
        className="p-6 rounded-3xl shadow-inner bg-white/5 backdrop-blur-md max-w-2xl w-full hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Sadece Görmekten Fazlası:</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Tüm seçimlerin birlikte çalışarak sana özel bir sosyal deneyim oluşturur. 
          Bu yüzden “Tüm Etkinlikleri Gör” dediğinde bile, önerilen masalar tamamen senin profiline uygun şekilde sıralanır.
        </p>
      </motion.div>

    </motion.div>
  </motion.section>
)}

{["events","events-available", "event-detail"].includes(currentState) && (
  <motion.section
    className="relative w-full py-20 px-6 sm:px-12 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-12">
      
      {/* Başlık */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Etkinliklerle İlgili Her Şey Tek Yerde
      </motion.h2>

      {/* Açıklama */}
      <motion.p
        className="text-gray-700 text-lg leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Converge’de planladığın güne en uygun etkinlikleri keşfedebilir, her etkinliğin detay sayfasında dil, lokasyon, kurallar, katılımcı tercihleri ve özet bilgilerine hızlıca ulaşabilirsin.
      </motion.p>

      {/* 3 Ana Özellik */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          {
            icon: ListChecks,
            title: "Zengin İçerik",
            desc: "Etkinliğin özeti, süresi, ücreti ve konsepti tek bakışta elinin altında."
          },
          {
            icon: Languages,
            title: "Katılımcı Tercihleri",
            desc: "Konuşulan diller, bütçe, diyet, beklenti ve ilgi alanlarını önceden görebilirsin."
          },
          {
            icon: ClipboardCheck,
            title: "Kurallar & Akış",
            desc: "Etkinlik kuralları, buluşma saati ve sosyal akış hakkında net bilgiler sunulur."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100 shadow-inner hover:shadow-xl transition-shadow duration-300">
              <item.icon size={22} className="text-orange-600 drop-shadow-md" />
            </div>
            <h4 className="text-gray-900 font-semibold mb-1">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

   

    </motion.div>
  </motion.section>
)}

{["profile", "notifications", "settings", "privacy"].includes(currentState) && (
  <motion.section
    className="relative w-full py-20 px-6 sm:px-12 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-12">

      {/* Başlık */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Profil Alanı
      </motion.h2>

      {/* Açıklama */}
      <motion.p
        className="text-gray-700 text-base leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Uygulamadaki deneyiminiz, profil bilgileriniz doğrultusunda kişiselleştirilir.  
        Dil tercihleri, ilgi alanları, lokasyon ve bütçe seçenekleriniz; sizin için en 
        doğru etkinlikleri ve en uyumlu katılımcıları önermek için kullanılır.
      </motion.p>

      {/* 3 Ana Başlık */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          {
            title: "Kişisel Bilgiler",
            color: "blue",
            items: ["Profil görünürlüğü", "Dil ve iletişim tercihleri", "İlgi alanları"]
          },
          {
            title: "Deneyim Tercihleri",
            color: "purple",
            items: ["Etkinlik türü seçimi", "Harcama aralığı", "Katılım şekli"]
          },
          {
            title: "Güvenlik",
            color: "green",
            items: ["Kimlik doğrulama", "Hesap gizliliği", "Güvenilir eşleşme sistemi"]
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col items-start p-6 rounded-3xl shadow-lg bg-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h4
              className={`font-semibold mb-2 text-${item.color}-600`}
            >
              {item.title}
            </h4>
            <ul className={`text-${item.color}-700 text-sm space-y-2`}>
              {item.items.map((i, j) => (
                <li key={j} className="hover:text-gray-900 transition-colors duration-200">• {i}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Son bölüm – Kapsayıcı Mesaj */}
      <motion.div
        className="p-6 rounded-3xl shadow-lg bg-white max-w-2xl w-full hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Neden Profil Önemli?</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Profiliniz, uygulamadan alacağınız verimi belirleyen temel unsurudur.  
          Daha doğru bilgiler, daha doğru öneriler ve daha iyi eşleşmeler sağlar.  
          Etkinlik deneyiminiz; kişisel tercihlerinize, güvenlik ayarlarınıza ve 
          iletişim seçeneklerinize göre otomatik olarak optimize edilir.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="blue">Kişiselleştirilmiş Öneriler</Badge>
          <Badge variant="purple">Daha İyi Eşleşme</Badge>
          <Badge variant="green">Güvenli Deneyim</Badge>
          <Badge variant="gray">Esnek Kontrol</Badge>
        </div>
      </motion.div>

    </motion.div>
  </motion.section>
)}


{currentState === "discover" && (
  <motion.section
    className="relative w-full py-20 px-6 sm:px-12 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">

      {/* Başlık */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Keşfet
      </motion.h2>

      {/* Intro */}
      <motion.p
        className="text-gray-700 text-lg leading-relaxed text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Keşfet bölümü bulunduğun şehirdeki popüler etkinlikleri, en yoğun lokasyonları ve ilgi alanlarına göre önerilen aktiviteleri görmeni sağlar. Dinamik filtreler sayesinde sana en uygun deneyimleri birkaç saniyede keşfedebilirsin.
      </motion.p>

      {/* Şehir Yoğunluk Kartları */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          {
            city: "İstanbul",
            users: "2,400",
            events: "45",
            density: "87",
            color: "#F16820"
          },
          {
            city: "İzmir",
            users: "850",
            events: "18",
            density: "92",
            color: "#F16820"
          },
          {
            city: "Ankara",
            users: "650",
            events: "12",
            density: "78",
            color: "#F16820"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">{item.city}</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Aktif Kullanıcı:</span>
                <span className="font-semibold text-gray-900">{item.users}</span>
              </div>
              <div className="flex justify-between">
                <span>Haftalık Etkinlik:</span>
                <span className="font-semibold text-gray-900">{item.events}</span>
              </div>
              <div className="flex justify-between">
                <span>Yoğunluk:</span>
                <span className="font-semibold" style={{ color: item.color }}>%{item.density}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Kullanıcı Profili ve Metrics */}
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Kullanıcı Profili */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">En Çok Katılım Gösteren Profil</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• <strong>Yaş:</strong> 25–35 (ana segment %68)</li>
            <li>• <strong>Eğitim:</strong> Üniversite ve üzeri (%89)</li>
            <li>• <strong>Gelir:</strong> Orta–üst segment</li>
            <li>• <strong>Meslek:</strong> Profesyonel, girişimci</li>
            <li>• <strong>Yaşam Alanı:</strong> Şehir merkezi</li>
          </ul>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Platform Metrikleri</h4>
          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span>Tekrar Katılım:</span>
              <span className="font-semibold text-[#F16820]">%73</span>
            </div>
            <div className="flex justify-between">
              <span>Referans Oranı:</span>
              <span className="font-semibold text-gray-900">%45</span>
            </div>
            <div className="flex justify-between">
              <span>Aylık Büyüme:</span>
              <span className="font-semibold text-[#22A07A]">%28</span>
            </div>
            <div className="flex justify-between">
              <span>Churn Rate:</span>
              <span className="font-semibold text-red-500">%12</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Popüler Etkinlik Türleri */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h4 className="text-lg font-semibold text-gray-900">Popüler Etkinlik Türleri</h4>
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Sosyal Buluşmalar", bg: "bg-[#F16820]/10", color: "#F16820" },
            { name: "Networking", bg: "bg-[#132E50]/10", color: "#132E50" },
            { name: "Yemek & Tadım", bg: "bg-[#22A07A]/10", color: "#22A07A" },
            { name: "Workshop", bg: "bg-purple-100", color: "#6B21A8" },
            { name: "Outdoor", bg: "bg-blue-100", color: "#1D4ED8" }
          ].map((item, idx) => (
            <motion.span
              key={idx}
              className={`${item.bg} text-[${item.color}] px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.1, textShadow: `0 0 8px ${item.color}`, boxShadow: `0 0 12px ${item.color}` }}
            >
              {item.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

    </motion.div>
  </motion.section>
)}


{["payment", "payment-success"].includes(currentState) && (
  <motion.section
    className="relative w-full py-20 px-6 sm:px-12 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">

      {/* Başlık */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Converge Ödeme Modeli
      </motion.h2>

      {/* Açıklama */}
      <motion.p
        className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Converge, hem kullanıcı hem de restoran tarafında sürdürülebilir bir deneyim yaratmak için üç ana gelir modeline dayanır: koltuk ücreti, premium üyelik ve partner iş birlikleri.
      </motion.p>

      {/* 3 Ana Model */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          {
            title: "Koltuk Ücreti",
            price: "₺185 – 320",
            note: "etkinlik başına",
            items: ["Restoran tarafından ayrılan özel masa", "Algoritmik eşleştirme & uygunluk analizi", "Güvenli rezervasyon sistemi"],
            color: "orange"
          },
          {
            title: "Premium Üyelik",
            icon: <Crown size={20} className="mr-2" />,
            price: "₺49",
            note: "aylık",
            items: ["Premium masalara erişim", "Erken rezervasyon hakkı", "Ücretsiz iptal avantajı", "Özel topluluk etkinlikleri"],
            color: "yellow"
          },
          {
            title: "Partner Payı",
            price: "%15",
            note: "restoran geliri",
            items: ["Garanti doluluk", "Yeni müşteri kazanımı", "Masada harcama artışı"],
            color: "green"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className={`bg-white p-6 rounded-3xl shadow-lg border border-gray-100 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h4 className={`font-bold text-xl mb-4 flex items-center text-${item.color}-700`}>
              {item.icon && item.icon} {item.title}
            </h4>
            <div className="text-center mb-4">
              <span className={`text-3xl font-bold text-${item.color}-600`}>{item.price}</span>
              <p className={`text-sm text-${item.color}-800`}>{item.note}</p>
            </div>
            <ul className={`text-sm text-${item.color}-700 space-y-1`}>
              {item.items.map((i, j) => <li key={j}>• {i}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Finansal Özet */}
      <motion.div
        className="p-6 rounded-3xl shadow-inner bg-white/5 backdrop-blur-md max-w-5xl mx-auto hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="font-semibold text-gray-900 mb-4 text-center text-lg">Sürdürülebilir Gelir Yapısı</h4>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed text-center">
          Uygulama bu üç model sayesinde hem büyüme maliyetlerini karşılayabilir, hem de restoran iş ortaklarına fayda sunarken kullanıcıya kesintisiz bir sosyal deneyim sağlar.
        </p>

        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <p className="text-2xl font-bold text-gray-900">₺2.4M</p>
            <p className="text-gray-600 text-sm">Tahmini Yıllık Gelir</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <p className="text-2xl font-bold text-gray-900">₺8.7M</p>
            <p className="text-gray-600 text-sm">Büyüme Hedefi</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <p className="text-2xl font-bold text-gray-900">%35</p>
            <p className="text-gray-600 text-sm">Brüt Kar Marjı</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <p className="text-2xl font-bold text-gray-900">18 ay</p>
            <p className="text-gray-600 text-sm">Break-Even Süresi</p>
          </div>
        </div>
      </motion.div>

    </motion.div>
  </motion.section>
)}


 

{currentState === "premium" && (
  <motion.section
    className="relative w-full py-20 px-6 sm:px-12 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">

      {/* Başlık */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Premium Üyelik
      </motion.h2>

      {/* Açıklama */}
      <motion.p
        className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Premium üyelik, uygulamadaki deneyiminizi bir üst seviyeye taşır. 
        Daha seçkin etkinliklere erişir, öncelikli rezervasyon alır ve 
        sosyal etkileşimlerinizi güçlendiren özel özelliklerin tadını çıkarırsınız.
      </motion.p>

      {/* Grid: Avantajlar ve Etkinlik Örnekleri */}
      <motion.div
        className="grid md:grid-cols-2 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Premium Avantajları */}
        <motion.div
          className="p-7 rounded-3xl border border-yellow-200 shadow-lg bg-white cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h4 className="font-semibold text-yellow-900 mb-5 flex items-center text-xl">
            <Crown size={22} className="text-yellow-600 mr-2" />
            Premium Avantajları
          </h4>
          <ul className="space-y-3 text-yellow-800 text-sm">
            {[
              "Premium’a özel etkinliklere sınırsız erişim",
              "Etkinliklerde öncelikli rezervasyon",
              "Plansızlık durumunda ücretsiz iptal hakkı",
              "Premium sohbet odaları ve özel iletişim kanalları",
              "Geliştirilmiş eşleştirme algoritması ile doğru kişilerle eşleşme",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Premium Etkinlik Örnekleri */}
        <motion.div
          className="space-y-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h4 className="text-xl font-semibold text-gray-900">Premium Etkinlik Örnekleri</h4>
          <div className="space-y-4">
            {[
              {
                name: "İş Sonrası Aperatif",
                desc: "Şehrin seçkin mekanlarında networking odaklı küçük grup buluşmaları.",
              },
              {
                name: "Executive Dinner",
                desc: "Profesyoneller için özel seçilmiş katılımcı profilleriyle akşam yemekleri.",
              },
              {
                name: "Social Mix & Match",
                desc: "Premium üyeler için özel olarak oluşturulan sosyal tanışma etkinlikleri.",
              },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                className="p-5 rounded-3xl border border-yellow-200 shadow-lg bg-white cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <h5 className="font-medium text-gray-900 flex items-center text-base">
                  <Crown size={16} className="text-yellow-600 mr-2" />
                  {event.name}
                </h5>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Alt Mesaj */}
      <motion.div
        className="p-6 rounded-3xl border border-gray-200 shadow-inner bg-white/5 backdrop-blur-md text-center hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-700 text-sm leading-relaxed max-w-2xl mx-auto">
          Premium üyelik, yalnızca daha fazla özellik sunmaz—daha kaliteli 
          bağlantılar kurmanız, daha iyi eşleşmeler almanız ve etkinliklerde 
          kendinize en uygun deneyimi yaşamanız için tasarlanmıştır.
        </p>
      </motion.div>

    </motion.div>
  </motion.section>
)}


{currentState === "roadmap" && (
  <motion.section
    id="roadmap"
    className="relative w-full py-20 px-6 sm:px-12 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">

      {/* Başlık */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Ürün Yol Haritası (2025–2027)
      </motion.h2>

      {/* Kritik Metrikler */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        {[
          { value: "3 Şehir", label: "Operasyon Alanı", color: "text-blue-700" },
          { value: "10K+", label: "Aktif Kullanıcı", color: "text-blue-700" },
          { value: "40+", label: "Partner Mekan", color: "text-blue-700" },
          { value: "3x", label: "Müşteri Yaşam Değeri (LTV)", color: "text-blue-700" },
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-2xl border border-gray-200 shadow hover:shadow-2xl bg-white cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
            <p className="text-gray-600 text-xs">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative pl-10 sm:pl-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {[
          {
            phase: "Faz 1: Çekirdek Network",
            status: "Tamamlandı",
            date: "",
            iconBg: "bg-green-600",
            iconText: "✓",
            desc: "İlk network akışı, rezervasyon ve İstanbul pilotu.",
            badges: ["Kullanıcı Kaydı", "Temel Rezervasyon", "Basit Eşleştirme"],
            badgeColor: "bg-green-100 text-green-700",
          },
          {
            phase: "Faz 2: Premium & Veri Derinleşmesi",
            status: "",
            date: "(Kasım 2025 – Mart 2026)",
            iconBg: "bg-orange-600",
            iconText: "1",
            desc: "Premium gelir modeli + analitik güçlendirme",
            badges: ["Premium Üyelik", "Converge Analizi", "Network Rozetleri", "Erken Rezervasyon"],
            badgeColor: "bg-orange-100 text-orange-700",
          },
          {
            phase: "Faz 3: Growth & Sadakat",
            status: "",
            date: "(Nisan 2026 – Aralık 2026)",
            iconBg: "bg-blue-600",
            iconText: "2",
            desc: "Kullanıcı tabanı büyümesi + restoran entegrasyonları",
            badges: ["Referral Program", "Restoran API", "Topluluk Etkinlikleri", "Özel Masa Filtreleri"],
            badgeColor: "bg-blue-100 text-blue-700",
          },
          {
            phase: "Faz 4: Şehir Genişlemesi & AI",
            status: "",
            date: "(2027+)",
            iconBg: "bg-purple-600",
            iconText: "3",
            desc: "Yeni şehirler + otomasyon",
            badges: ["Ankara / İzmir Açılışı", "AI Öneri Motoru v2", "Otomatik Lokasyon Yönetimi"],
            badgeColor: "bg-purple-100 text-purple-700",
          },
        ].map((phase, idx) => (
          <motion.div
            key={idx}
            className="relative flex items-start space-x-4 pb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + idx * 0.1 }}
          >
            <div className={`w-8 h-8 ${phase.iconBg} rounded-full flex-shrink-0 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300`}>
              <span className="text-white text-sm font-bold">{phase.iconText}</span>
            </div>
            <div className="flex-1 space-y-2">
              <h4 className="font-bold text-gray-900 text-lg">{phase.phase} {phase.status && `(${phase.status})`}</h4>
              <p className="text-gray-700 text-sm">{phase.desc} <b className="font-medium">{phase.date}</b></p>
              <div className="flex flex-wrap gap-2 pt-1">
                {phase.badges.map((b, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${phase.badgeColor} shadow-sm hover:shadow-md transition`}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </motion.div>
  </motion.section>
)}



      </div>
    </div>
  );
}
