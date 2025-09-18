"use client";

import { SectionCard } from "@/components/SectionCard"; // Yeni bileşeni içe aktarın

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
} from "lucide-react";
import type { AppState } from "@/lib/states";
import { Card } from "./ui/card";

interface ContentPanelProps {
  currentState: AppState;
}

export function ContentPanel({ currentState }: ContentPanelProps) {
  return (
    <div className="space-y-8">
      <div className="relative w-full h-screen ">
        {/* Problem Section */}
        {currentState === "landing" && (
          <SectionCard
            id="problem"
            title="Sorun"
            icon={Target}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Tanışma niyeti var ama format yok. İnsanlar güvenli ve kolay bir
                sosyal bağ arıyor.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Sosyal İzolasyon
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Şehirde yaşayan genç profesyoneller yeni insanlarla
                    tanışmakta zorlanıyor
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Format Eksikliği
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Mevcut sosyal platformlar yüzeysel etkileşimler sunuyor
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Güven Sorunu</h4>
                  <p className="text-gray-600 text-sm">
                    Rastgele insanlarla buluşma konusunda güvenlik endişeleri
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="font-semibold text-red-900 mb-2">
                  Mevcut Durum
                </h4>
                <p className="text-red-800 text-sm">
                  İstanbul'da yaşayan 25-35 yaş arası profesyonellerin %73'ü
                  yeni sosyal bağlantılar kurmakta zorlandığını belirtiyor.
                </p>
              </div>
            </div>
          </SectionCard>
        )}
        {["test-start", "test-step"].includes(currentState) && (
          <SectionCard
            id="solution"
            title="Çözüm"
            icon={Zap}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Kişilik testi ile başlayan, kurgulanmış sosyal yemek masaları ve
                haftalık ritim.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Nasıl Çalışır?
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Star size={12} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700">
                        Kişilik testi ile başlayın
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-orange-600 text-sm font-bold">
                          2
                        </span>
                      </div>
                      <span className="text-gray-700">
                        Size uygun etkinlikleri keşfedin
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-orange-600 text-sm font-bold">
                          3
                        </span>
                      </div>
                      <span className="text-gray-700">
                        6 kişilik masalarda yeni insanlarla tanışın
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-orange-900 mb-4">
                    Temel Özellikler
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star size={16} className="text-orange-600 mr-2" />
                      <span className="text-orange-800 text-sm">
                        Kişilik uyumluluğu testi
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="text-orange-600 mr-2" />
                      <span className="text-orange-800 text-sm">
                        6 kişilik küçük gruplar
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-orange-600 mr-2" />
                      <span className="text-orange-800 text-sm">
                        Haftalık düzenli etkinlikler
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-orange-600 mr-2" />
                      <span className="text-orange-800 text-sm">
                        Seçkin restoran partnerleri
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Shield size={16} className="text-orange-600 mr-2" />
                      <span className="text-orange-800 text-sm">
                        Güvenli ve doğrulanmış kullanıcılar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        )}
        {/* Flow Section */}
        {["home", "events-available", "events-joined", "event-detail"].includes(
          currentState
        ) && (
          <SectionCard
            id="flow"
            title="Kullanıcı Deneyimi"
            icon={Rocket}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Test → Etkinlik Seçimi → Kişiselleştirme → Rezervasyon →
                Eşleştirme
              </p>

              <div className="grid md:grid-cols-5 gap-4">
                {[
                  {
                    step: "Kişilik Testi",
                    desc: "Uyumluluk analizi",
                    color: "blue",
                    icon: Star,
                  },
                  {
                    step: "Etkinlik Seç",
                    desc: "Tarih ve restoran",
                    color: "purple",
                    icon: Calendar,
                  },
                  {
                    step: "Kişiselleştir",
                    desc: "Dil, bütçe, diyet",
                    color: "green",
                    icon: Users,
                  },
                  {
                    step: "Rezervasyon",
                    desc: "Ödeme ve onay",
                    color: "orange",
                    icon: MapPin,
                  },
                  {
                    step: "Eşleştirme",
                    desc: "Masa arkadaşları",
                    color: "pink",
                    icon: Heart,
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-3`}
                    >
                      <item.icon
                        size={24}
                        className={`text-${item.color}-600`}
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.step}
                    </h4>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Gelişmiş Özellikler
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">
                      Dil Seçimi:
                    </span>
                    <span className="text-gray-700 ml-2">
                      Türkçe, İngilizce, Rusça
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">
                      Bütçe Tercihi:
                    </span>
                    <span className="text-gray-700 ml-2">
                      ₺100-400+ aralığı
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">
                      Diyet Seçenekleri:
                    </span>
                    <span className="text-gray-700 ml-2">
                      Özel beslenme ihtiyaçları
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        )}

        {/* Experience Section */}
        {["matching", "match-found", "chat-home", "chat"].includes(
          currentState
        ) && (
          <SectionCard
            id="experience"
            title="Deneyim"
            icon={Heart}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                6 kişilik masa, buz kırıcılar, 90 dk, masa sohbeti ve sonrası
                bağlantılar.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Masa Deneyimi
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI destekli eşleştirme algoritması</li>
                    <li>• Kişiselleştirilmiş buz kırıcı sorular</li>
                    <li>• Ortak ilgi alanları keşfi</li>
                    <li>• Doğal sohbet akışı</li>
                    <li>• Gerçek zamanlı grup sohbeti</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Sonrası
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-900 flex items-center">
                        <MessageCircle size={16} className="mr-2" />
                        Grup Sohbeti
                      </h5>
                      <p className="text-green-800 text-sm mt-1">
                        Masa sonrası anlık mesajlaşma
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-900">
                        Bireysel Bağlantılar
                      </h5>
                      <p className="text-blue-800 text-sm mt-1">
                        İsteyenler birebir iletişim kurabilir
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-medium text-purple-900">
                        Tekrar Buluşma
                      </h5>
                      <p className="text-purple-800 text-sm mt-1">
                        Grup etkinlikleri ve özel davetler
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        )}
        {["profile", "notifications", "settings", "privacy"].includes(
          currentState
        ) && (
          <SectionCard
            id="defensibility"
            title="Rekabet Avantajı"
            icon={Shield}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Topluluk etkisi, tekrar eşleşme optimizasyonu, partner restoran
                ağı.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Ağ Etkisi
                  </h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• Daha fazla kullanıcı = daha iyi eşleşme</li>
                    <li>• Sosyal çember genişlemesi</li>
                    <li>• Organik büyüme döngüsü</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-3">
                    Veri Avantajı
                  </h4>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>• Kişilik ve uyumluluk verileri</li>
                    <li>• Makine öğrenmesi algoritmaları</li>
                    <li>• Sürekli iyileşen eşleştirme</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-orange-900 mb-3">
                    Partner Ağı
                  </h4>
                  <ul className="text-orange-800 text-sm space-y-2">
                    <li>• Özel restoran anlaşmaları</li>
                    <li>• Kalite kontrollü mekanlar</li>
                    <li>• Maliyet optimizasyonu</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Teknik Altyapı
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Gelişmiş eşleştirme algoritması ve kullanıcı deneyimi
                  optimizasyonu
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="gray">AI Eşleştirme</Badge>
                  <Badge variant="blue">Gerçek Zamanlı Sohbet</Badge>
                  <Badge variant="green">Güvenlik Doğrulama</Badge>
                  <Badge variant="purple">Mobil Optimizasyon</Badge>
                </div>
              </div>
            </div>
          </SectionCard>
        )}
        {/* Market Section */}

        {currentState === "events-list" && (
          <SectionCard
            id="market"
            title="Pazar"
            icon={TrendingUp}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Hedef şehirler, doluluk, tekrar oranı (örnek sayılar).
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                  <h4 className="font-bold text-2xl text-blue-900 mb-2">
                    İstanbul
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-800">Aktif Kullanıcı:</span>
                      <span className="font-semibold text-blue-900">2,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800">Haftalık Etkinlik:</span>
                      <span className="font-semibold text-blue-900">45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800">Doluluk Oranı:</span>
                      <span className="font-semibold text-blue-900">%87</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
                  <h4 className="font-bold text-2xl text-green-900 mb-2">
                    İzmir
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-800">Aktif Kullanıcı:</span>
                      <span className="font-semibold text-green-900">850</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-800">Haftalık Etkinlik:</span>
                      <span className="font-semibold text-green-900">18</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-800">Doluluk Oranı:</span>
                      <span className="font-semibold text-green-900">%92</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                  <h4 className="font-bold text-2xl text-purple-900 mb-2">
                    Ankara
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-800">Aktif Kullanıcı:</span>
                      <span className="font-semibold text-purple-900">650</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-800">
                        Haftalık Etkinlik:
                      </span>
                      <span className="font-semibold text-purple-900">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-800">Doluluk Oranı:</span>
                      <span className="font-semibold text-purple-900">%78</span>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Kullanıcı Profili
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • <strong>Yaş:</strong> 25-35 (ana segment %68)
                    </li>
                    <li>
                      • <strong>Eğitim:</strong> Üniversite+ (%89)
                    </li>
                    <li>
                      • <strong>Gelir:</strong> Orta-üst segment
                    </li>
                    <li>
                      • <strong>Meslek:</strong> Profesyonel, girişimci
                    </li>
                    <li>
                      • <strong>Yaşam:</strong> Şehir merkezi
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Büyüme Metrikleri
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Tekrar Katılım:</span>
                      <span className="font-semibold text-green-600">%73</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Referans Oranı:</span>
                      <span className="font-semibold text-blue-600">%45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Aylık Büyüme:</span>
                      <span className="font-semibold text-purple-600">%28</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Churn Rate:</span>
                      <span className="font-semibold text-red-600">%12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        )}

        {/* Payment Section */}
        {["payment", "payment-success"].includes(currentState) && (
          <SectionCard
            id="business"
            title="İş Modeli"
            icon={TrendingUp}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Gelir modeli: koltuk ücreti, premium üyelik, partner payı.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 border-2 border-orange-200">
                  <h4 className="font-bold text-xl text-orange-900 mb-4">
                    Koltuk Ücreti
                  </h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-orange-600">
                        ₺185-320
                      </span>
                      <p className="text-orange-800 text-sm">etkinlik başına</p>
                    </div>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Restoran maliyeti dahil</li>
                      <li>• Eşleştirme algoritması</li>
                      <li>• Platform komisyonu %25</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <h4 className="font-bold text-xl text-yellow-900 mb-4 flex items-center">
                    <Crown size={20} className="mr-2" />
                    Premium Üyelik
                  </h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-yellow-600">
                        ₺49
                      </span>
                      <p className="text-yellow-800 text-sm">aylık</p>
                    </div>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Özel premium etkinlikler</li>
                      <li>• Öncelikli rezervasyon</li>
                      <li>• Ücretsiz iptal hakkı</li>
                      <li>• Özel sohbet odaları</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-green-200">
                  <h4 className="font-bold text-xl text-green-900 mb-4">
                    Partner Payı
                  </h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-green-600">
                        %15
                      </span>
                      <p className="text-green-800 text-sm">restoran geliri</p>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Garanti doluluk</li>
                      <li>• Pazarlama desteği</li>
                      <li>• Müşteri analizi</li>
                    </ul>
                  </div>
                </Card>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Finansal Projeksiyonlar
                </h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">₺2.4M</p>
                    <p className="text-gray-600 text-sm">Yıllık Gelir (2024)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">₺8.7M</p>
                    <p className="text-gray-600 text-sm">Hedef (2025)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">%35</p>
                    <p className="text-gray-600 text-sm">Brüt Kar Marjı</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">18 ay</p>
                    <p className="text-gray-600 text-sm">Break-even</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        )}
        {currentState === "roadmap" && (
          <SectionCard
            id="roadmap"
            title="Yol Haritası"
            icon={Rocket}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                MVP → V1 (chat, push, kupon) → V1.5 (reputation, referral).
              </p>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>

                  {/* MVP */}
                  <div className="relative flex items-start space-x-4 pb-8">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        MVP (Tamamlandı)
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Temel eşleştirme ve rezervasyon sistemi
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="blue">Kullanıcı Kaydı</Badge>
                        <Badge variant="green">Etkinlik Listesi</Badge>
                        <Badge variant="purple">Ödeme Sistemi</Badge>
                        <Badge variant="gray">Temel Eşleştirme</Badge>
                        <Badge variant="yellow">Premium</Badge>
                        <Badge variant="red">Admin</Badge>
                      </div>
                    </div>
                  </div>

                  {/* V1.0 */}
                  <div className="relative flex items-start space-x-4 pb-8">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        V1.0 (Q1 2025)
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Gelişmiş sosyal özellikler
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Grup Sohbeti</Badge>
                        <Badge variant="secondary">Push Bildirimler</Badge>
                        <Badge variant="secondary">Kupon Sistemi</Badge>
                        <Badge variant="secondary">Etkinlik Geçmişi</Badge>
                      </div>
                    </div>
                  </div>

                  {/* V1.5 */}
                  <div className="relative flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        V1.5 (Q3 2025)
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Topluluk ve sadakat özellikleri
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="blue">Reputation Sistemi</Badge>
                        <Badge variant="green">Referral Program</Badge>
                        <Badge variant="purple">VIP Üyelik</Badge>
                        <Badge variant="gray">Özel Etkinlikler</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Teknik Hedefler
                  </h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• AI destekli eşleştirme algoritması</li>
                    <li>• Gerçek zamanlı bildirim sistemi</li>
                    <li>• Mobil uygulama optimizasyonu</li>
                    <li>• Veri analizi dashboard'u</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-3">
                    İş Hedefleri
                  </h4>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>• 5 şehirde operasyon</li>
                    <li>• 10,000+ aktif kullanıcı</li>
                    <li>• 50+ partner restoran</li>
                    <li>• ₺10M+ yıllık gelir</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionCard>
        )}
        {currentState === "premium" && (
          <SectionCard
            id="premium"
            title="Premium Üyelik"
            icon={Crown}
            isActive
            className="absolute inset-0"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Özel etkinlikler, öncelikli erişim ve gelişmiş sosyal
                özellikler.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Premium Avantajları */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-4 flex items-center">
                    <Crown size={20} className="text-yellow-600 mr-2" />
                    Premium Avantajları
                  </h4>
                  <ul className="space-y-3 text-yellow-800">
                    {[
                      "Özel premium etkinliklere erişim",
                      "Öncelikli rezervasyon hakkı",
                      "Ücretsiz iptal imkanı",
                      "Özel sohbet odaları",
                      "Gelişmiş eşleştirme algoritması",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Premium Etkinlik Örnekleri */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Premium Etkinlik Örnekleri
                  </h4>
                  <div className="space-y-3">
                    {["İş Sonrası Aperitif"].map((event, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-lg border border-yellow-200"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-medium text-gray-900 flex items-center">
                              <Crown
                                size={16}
                                className="text-yellow-600 mr-2"
                              />
                              {event}
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        )}
      </div>
    </div>
  );
}
