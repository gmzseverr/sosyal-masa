"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  MapPin,
  Clock,
  Users,
  Send,
  Home,
  MessageCircle,
  Calendar,
  User,
  Settings,
  Bell,
  Shield,
  ChevronRight,
  DollarSign,
  Crown,
  Star,
  Filter,
  CheckCircle,
} from "lucide-react";
import type { AppState } from "@/lib/states";
import {
  mockEvents,
  mockJoinedEvents,
  mockChatMessages,
  mockConversations,
  mockTestSteps,
  type ChatMessage,
} from "@/lib/states";
import Onboarding from "./app-screens/Onboarding";
import SplashScreen from "./app-screens/SplashScreen";
import OnboardingTest from "./app-screens/OnboardingTest";
import PersonalityTest from "./app-screens/PersonalityTest";
import LandingScreen from "./app-screens/LandingScreen";

import LoginScreen from "./app-screens/LoginScreen";
import MatchingScreen from "./app-screens/MatchingScreen";

interface AppSimulatorProps {
  state: AppState;
  onNavigate: (state: AppState) => void;
}
export function AppSimulator({ state, onNavigate }: AppSimulatorProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [chatMessages, setChatMessages] =
    useState<ChatMessage[]>(mockChatMessages);
  const [newMessage, setNewMessage] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(mockEvents[0]);
  const [selectedConversation, setSelectedConversation] = useState(
    mockConversations[0]
  );
  const [currentTestStep, setCurrentTestStep] = useState(0);
  const [testAnswers, setTestAnswers] = useState<Record<number, string>>({});
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<number>(1);
  const [isDiet, setIsDiet] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [showPremiumEvents, setShowPremiumEvents] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        sender: "Sen",
        message: newMessage,
        time: new Date().toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: true,
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage("");
    }
  };

  const handleTestAnswer = (answer: string) => {
    setTestAnswers({ ...testAnswers, [currentTestStep]: answer });
  };

  const nextTestStep = () => {
    if (currentTestStep < mockTestSteps.length - 1) {
      setCurrentTestStep(currentTestStep + 1);
    } else {
      // Test completed, show matching animation
      onNavigate("matching");
      setTimeout(() => onNavigate("events-available"), 2000);
    }
  };

  const prevTestStep = () => {
    if (currentTestStep > 0) {
      setCurrentTestStep(currentTestStep - 1);
    }
  };

  const BottomTabBar = ({ activeTab }: { activeTab: string }) => (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {[
          {
            id: "home",
            icon: Home,
            label: "Ana Sayfa",
            state: "home" as AppState,
          },
          {
            id: "chat",
            icon: MessageCircle,
            label: "Sohbet",
            state: "chat-home" as AppState,
          },
          {
            id: "events",
            icon: Calendar,
            label: "Etkinlikler",
            state: "events-available" as AppState,
          },
          {
            id: "profile",
            icon: User,
            label: "Profil",
            state: "profile" as AppState,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.state)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "text-orange-600 bg-orange-50 scale-105"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <tab.icon size={20} />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {/* Onboarding Screen */}
          {state === "onboarding" && (
            <Onboarding onNext={() => onNavigate("splash")} />
          )}

          {/* SplashScreen */}
          {state === "splash" && (
            <SplashScreen onFinish={() => onNavigate("onboarding-test")} />
          )}

          {/* OnboardingTest */}
          {state === "onboarding-test" && (
            <OnboardingTest onNavigate={onNavigate} />
          )}

          {/* PersonalityTest */}
          {state === "test-start" && (
            <PersonalityTest onNavigate={onNavigate} />
          )}

          {state === "matching" && <MatchingScreen onNavigate={onNavigate} />}

          {/* Register */}
          {state === "login" && <LoginScreen onNavigate={onNavigate} />}

          {/* Home Screen */}
          {state === "home" && (
            <div className="flex flex-col h-full">
              <div className="flex-1 p-6 pb-20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Merhaba Ayşe 👋
                    </h1>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onNavigate("notifications")}
                    >
                      <Bell size={20} />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-700">İzmir</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-orange-600"
                    >
                      değiştir
                    </Button>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                      Katılabileceğin Yemekler
                    </h2>
                    <div className="space-y-3">
                      {mockEvents.slice(0, 3).map((event) => (
                        <Card
                          key={event.id}
                          className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => {
                            setSelectedEvent(event);
                            onNavigate("event-detail");
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="flex items-center space-x-4 text-sm text-gray-900">
                                <span className="flex items-center font-medium">
                                  <Calendar size={14} className="mr-1" />
                                  {event.date}
                                </span>
                                <span className="flex items-center">
                                  <Clock size={14} className="mr-1" />
                                  {event.time}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-orange-600">
                                {event.price}
                              </p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 bg-transparent"
                      onClick={() => onNavigate("events-available")}
                    >
                      Tüm etkinlikleri gör
                    </Button>
                  </div>
                </div>
              </div>
              <BottomTabBar activeTab="home" />
            </div>
          )}
          {/* Events Available Screen */}
          {state === "events-available" && (
            <div className="flex flex-col h-full">
              <div className="flex-1 p-6 pb-20 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Etkinlikler
                  </h1>
                  <div className="flex items-center space-x-2">
                    {isPremium && (
                      <Button
                        variant={showPremiumEvents ? "default" : "outline"}
                        size="sm"
                        onClick={() => setShowPremiumEvents(!showPremiumEvents)}
                        className="flex items-center"
                      >
                        <Crown size={16} className="mr-1" />
                        Premium
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Filter size={16} />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {mockEvents
                    .filter((event) => !showPremiumEvents || event.isPremium)
                    .map((event) => (
                      <Card
                        key={event.id}
                        className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => {
                          setSelectedEvent(event);
                          onNavigate("event-detail");
                        }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-gray-900">
                                {event.title}
                              </h3>
                              {event.isPremium && (
                                <Crown size={16} className="text-yellow-600" />
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Calendar size={14} className="mr-1" />
                                {event.date}
                              </span>
                              <span className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                {event.time}
                              </span>
                              <span className="flex items-center">
                                <MapPin size={14} className="mr-1" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            {event.badge && (
                              <Badge
                                variant={
                                  event.badge === "Son koltuklar"
                                    ? "destructive"
                                    : event.badge === "Premium"
                                    ? "secondary"
                                    : "outline"
                                }
                                className="mb-2"
                              >
                                {event.badge}
                              </Badge>
                            )}
                            <p className="font-semibold text-orange-600">
                              {event.price}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
              <BottomTabBar activeTab="events" />
            </div>
          )}

          {/* Events Joined Screen */}
          {state === "events-joined" && (
            <div className="flex flex-col h-full">
              <div className="flex items-center p-6 border-b">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("events-available")}
                >
                  <ArrowLeft size={20} />
                </Button>
                <h1 className="text-xl font-semibold ml-4">Kayıt Oldukların</h1>
              </div>

              <div className="flex-1 p-6 pb-20">
                <div className="space-y-4">
                  {mockJoinedEvents.map((event) => (
                    <Card key={event.id} className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {event.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {event.date}
                            </span>
                            <span className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              {event.time}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {event.restaurant}
                          </p>
                        </div>
                        <Badge variant="secondary">Kayıtlı</Badge>
                      </div>

                      <div className="flex items-center space-x-2 mb-3">
                        <Users size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {event.participants?.join(", ")}
                        </span>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          onClick={() => onNavigate("chat-home")}
                          className="flex items-center"
                        >
                          <MessageCircle size={16} className="mr-1" />
                          Sohbet
                        </Button>
                        <Button variant="outline" size="sm">
                          Detay
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              <BottomTabBar activeTab="events" />
            </div>
          )}

          {/* Event Detail Screen */}
          {state === "event-detail" && (
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onNavigate("events-available")}
                    className="absolute top-4 left-4 bg-white/80"
                  >
                    <ArrowLeft size={20} />
                  </Button>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedEvent.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {selectedEvent.date} - {selectedEvent.time}
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <MapPin size={16} className="mr-2 text-gray-600" />
                      <span className="text-gray-600">
                        {selectedEvent.location}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Açıklama
                    </h3>
                    <p className="text-gray-600 text-sm">
                      6 kişilik samimi bir akşam yemeği. Yeni insanlarla
                      tanışın, güzel sohbetler edin ve lezzetli yemeklerin
                      tadını çıkarın.
                    </p>
                  </div>

                  <Card className="p-4 bg-orange-50 border-orange-200">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Etkinliğe katıl
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">
                          Hangi dilleri konuşmak istiyorsunuz?
                        </label>
                        <div className="space-y-2">
                          {["Türkçe", "İngilizce", "Rusça"].map((language) => (
                            <div
                              key={language}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={language}
                                checked={selectedLanguages.includes(language)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setSelectedLanguages([
                                      ...selectedLanguages,
                                      language,
                                    ]);
                                  } else {
                                    setSelectedLanguages(
                                      selectedLanguages.filter(
                                        (l) => l !== language
                                      )
                                    );
                                  }
                                }}
                              />
                              <label
                                htmlFor={language}
                                className="text-sm text-gray-700"
                              >
                                {language}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">
                          Restoranda ne kadar harcamayı planlıyorsunuz?
                        </label>
                        <div className="space-y-2">
                          {[1, 2, 3].map((level) => (
                            <button
                              key={level}
                              onClick={() => setSelectedBudget(level)}
                              className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                                selectedBudget === level
                                  ? "border-orange-500 bg-orange-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                {Array.from({ length: level }, (_, i) => (
                                  <DollarSign
                                    key={i}
                                    size={16}
                                    className="text-green-600"
                                  />
                                ))}
                              </div>
                              <div className="text-sm text-gray-600">
                                {level === 1 && "₺100-200"}
                                {level === 2 && "₺200-400"}
                                {level === 3 && "₺400+"}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="diet"
                          className="text-sm font-medium text-gray-700"
                        >
                          Diyet yapıyorum
                        </label>
                        <Switch
                          id="diet"
                          checked={isDiet}
                          onCheckedChange={setIsDiet}
                        />
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-700">
                            Koltuk ücreti
                          </span>
                          <span className="text-lg font-bold text-orange-600">
                            {selectedEvent.price}
                          </span>
                        </div>
                        <Button
                          onClick={() => onNavigate("payment")}
                          className="w-full bg-orange-600 hover:bg-orange-700"
                        >
                          Ödemeye geç
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Kurallar
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Zamanında gelmeye özen gösterin</li>
                      <li>• Telefon kullanımını minimumda tutun</li>
                      <li>• Herkesi sohbete dahil etmeye çalışın</li>
                    </ul>
                  </div>

                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      Harita Placeholder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Payment Screen */}
          {state === "payment" && (
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center p-6 border-b">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("event-detail")}
                >
                  <ArrowLeft size={20} />
                </Button>
                <h1 className="text-xl font-semibold ml-4">Ödeme</h1>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">{selectedEvent.title}</h3>
                  <p className="text-sm text-gray-600">
                    {selectedEvent.date} - {selectedEvent.time}
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedEvent.location}
                  </p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <span className="font-semibold">Toplam</span>
                    <span className="text-xl font-bold text-orange-600">
                      {selectedEvent.price}
                    </span>
                  </div>
                </Card>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Kart Üzerindeki İsim
                    </label>
                    <Input placeholder="AYŞE YILMAZ" className="mt-1" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Kart Numarası
                    </label>
                    <Input placeholder="1234 5678 9012 3456" className="mt-1" />
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-700">
                        SKT
                      </label>
                      <Input placeholder="12/25" className="mt-1" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-700">
                        CVC
                      </label>
                      <Input placeholder="123" className="mt-1" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="kvkk" />
                    <label htmlFor="kvkk" className="text-sm text-gray-700">
                      Sözleşme/KVKK koşullarını kabul ediyorum
                    </label>
                  </div>
                </div>
              </div>

              {/* Footer / Sabit Buton */}
              <div className="p-6 border-t bg-white sticky bottom-0">
                <Button
                  onClick={() => onNavigate("payment-success")}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  Ödemeyi tamamla
                </Button>
              </div>
            </div>
          )}

          {state === "payment-success" && (
            <div className="flex flex-col h-full">
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Ödeme başarılı
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Rezervasyonunuz onaylandı. Restoran ve katılımcılar şimdi
                    görünür.
                  </p>
                </div>

                <Card className="p-4 mb-6">
                  <h3 className="font-semibold mb-3">{selectedEvent.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {selectedEvent.date} - {selectedEvent.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {selectedEvent.restaurant || "Kordon Boyu Restoran"}
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Katılımcılar
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {selectedEvent.participants?.join(", ") ||
                          "Mehmet K., Ayşe D., Can Y."}
                      </span>
                    </div>
                  </div>

                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                    <span className="text-gray-500 text-sm">
                      Restoran Haritası
                    </span>
                  </div>
                </Card>
              </div>

              {/* Footer / Sabit Butonlar */}
              <div className="p-6 border-t bg-white sticky bottom-0 space-y-3">
                <Button
                  onClick={() => onNavigate("chat-home")}
                  className="w-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center"
                >
                  <MessageCircle size={16} className="mr-2" />
                  Sohbeti aç
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate("event-detail")}
                  className="w-full"
                >
                  Etkinlik detayına dön
                </Button>
              </div>
            </div>
          )}

          {/* Match Found Screen */}
          {state === "match-found" && (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users size={40} className="text-green-600" />
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Diğer 5 katılımcının olduğu bir masa bulundu!
              </h1>

              <p className="text-gray-600 mb-8 text-center">
                Rezervasyonunuz onaylandı. Diğer katılımcılarla sohbet etmeye
                başlayabilirsiniz.
              </p>

              <Button
                onClick={() => onNavigate("chat-home")}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Sohbete katıl
              </Button>
            </div>
          )}

          {/* Chat Home Screen */}
          {state === "chat-home" && (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b bg-white">
                <h1 className="text-lg font-semibold text-center">Sohbetler</h1>
                <p className="text-sm text-gray-600 text-center">
                  Aktif konuşmalar
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
                <AnimatePresence>
                  {mockConversations.map((conversation) => (
                    <motion.div
                      key={conversation.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedConversation(conversation);
                        onNavigate("chat");
                      }}
                    >
                      <Card className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-orange-100 text-orange-600">
                              {conversation.title.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-sm font-semibold text-gray-900 truncate">
                                {conversation.title}
                              </h3>
                              <span className="text-xs text-gray-500">
                                {conversation.time}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 truncate">
                              {conversation.lastMessage}
                            </p>
                            {conversation.eventTitle && (
                              <p className="text-xs text-orange-600 mt-1">
                                {conversation.eventTitle}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            {conversation.unreadCount && (
                              <Badge variant="destructive" className="text-xs">
                                {conversation.unreadCount}
                              </Badge>
                            )}
                            <ChevronRight size={16} className="text-gray-400" />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <BottomTabBar activeTab="chat" />
            </div>
          )}

          {/* Chat Screen */}
          {state === "chat" && (
            <div className="flex flex-col h-full">
              <div className="flex items-center p-4 border-b bg-white">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("chat-home")}
                >
                  <ArrowLeft size={20} />
                </Button>
                <div className="flex-1 text-center">
                  <h1 className="text-lg font-semibold">
                    {selectedConversation.title}
                  </h1>
                  <p className="text-sm text-gray-600">6 katılımcı • Aktif</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Users size={20} />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                  {chatMessages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${
                        message.isOwn ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs ${
                          message.isOwn ? "order-2" : "order-1"
                        }`}
                      >
                        {!message.isOwn && (
                          <p className="text-xs text-gray-500 mb-1">
                            {message.sender}
                          </p>
                        )}
                        <motion.div
                          className={`p-3 rounded-2xl transition-all duration-200 ${
                            message.isOwn
                              ? "bg-orange-600 text-white"
                              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          }`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-sm">{message.message}</p>
                        </motion.div>
                        <p className="text-xs text-gray-500 mt-1 text-right">
                          {message.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Mesajınızı yazın..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700 transition-all duration-200 hover:scale-105"
                    disabled={!newMessage.trim()}
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Profile Screen */}
          {state === "profile" && (
            <div className="flex flex-col h-full">
              <div className="flex-1 p-6 pb-20">
                <div className="text-center mb-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-orange-100 text-orange-600">
                      AY
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center space-x-2">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Ayşe Yılmaz
                    </h1>
                    {isPremium && (
                      <Crown size={20} className="text-yellow-600" />
                    )}
                  </div>
                  <p className="text-gray-600">İzmir</p>
                  {isPremium && (
                    <Badge className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white mt-2">
                      Premium Üye
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">12</p>
                    <p className="text-xs text-gray-600">Akşam yemekleri</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">48</p>
                    <p className="text-xs text-gray-600">İnsanlar buluşuyor</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">8</p>
                    <p className="text-xs text-gray-600">Bağlantılar</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {!isPremium && (
                    <Button
                      variant="ghost"
                      className="w-full justify-between bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200"
                      onClick={() => onNavigate("premium")}
                    >
                      <div className="flex items-center">
                        <Crown size={20} className="mr-3 text-yellow-600" />
                        <span className="font-medium">Premium'a Geç</span>
                      </div>
                      <ChevronRight size={16} />
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => onNavigate("settings")}
                  >
                    <div className="flex items-center">
                      <Settings size={20} className="mr-3" />
                      <span>Ayarlar</span>
                    </div>
                    <ChevronRight size={16} />
                  </Button>

                  <Button variant="ghost" className="w-full justify-between">
                    <div className="flex items-center">
                      <MapPin size={20} className="mr-3" />
                      <span>Konum</span>
                    </div>
                    <ChevronRight size={16} />
                  </Button>

                  <Button variant="ghost" className="w-full justify-between">
                    <div className="flex items-center">
                      <span className="w-5 h-5 mr-3 text-center">🇹🇷</span>
                      <span>Uygulama Dili</span>
                    </div>
                    <span className="text-gray-500">Türkçe</span>
                  </Button>
                </div>
              </div>
              <BottomTabBar activeTab="profile" />
            </div>
          )}

          {/* Settings Screen */}
          {state === "settings" && (
            <div className="flex flex-col h-full">
              <div className="flex items-center p-6 border-b">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("profile")}
                >
                  <ArrowLeft size={20} />
                </Button>
                <h1 className="text-xl font-semibold ml-4">Ayarlar</h1>
              </div>

              <div className="flex-1 p-6">
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => onNavigate("notifications")}
                  >
                    <div className="flex items-center">
                      <Bell size={20} className="mr-3" />
                      <span>Bildirimler</span>
                    </div>
                    <ChevronRight size={16} />
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => onNavigate("privacy")}
                  >
                    <div className="flex items-center">
                      <Shield size={20} className="mr-3" />
                      <span>Gizlilik</span>
                    </div>
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Screen */}
          {state === "notifications" && (
            <div className="flex flex-col h-full">
              <div className="flex items-center p-6 border-b">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("settings")}
                >
                  <ArrowLeft size={20} />
                </Button>
                <h1 className="text-xl font-semibold ml-4">Bildirimler</h1>
              </div>

              <div className="flex-1 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Yeni eşleşmeler</span>
                    <div className="w-12 h-6 bg-orange-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Etkinlik hatırlatmaları</span>
                    <div className="w-12 h-6 bg-orange-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sohbet mesajları</span>
                    <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Screen */}
          {state === "privacy" && (
            <div className="flex flex-col h-full">
              <div className="flex items-center p-6 border-b">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("settings")}
                >
                  <ArrowLeft size={20} />
                </Button>
                <h1 className="text-xl font-semibold ml-4">Gizlilik</h1>
              </div>

              <div className="flex-1 p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Profil Görünürlüğü</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Profilinizi kimler görebilir?
                    </p>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="visibility"
                          className="mr-2"
                          defaultChecked
                        />
                        <span>Sadece eşleştiğim kişiler</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="visibility"
                          className="mr-2"
                        />
                        <span>Tüm kullanıcılar</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Premium Screen */}
          {state === "premium" && (
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center p-6 border-b">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("profile")}
                >
                  <ArrowLeft size={20} />
                </Button>
                <h1 className="text-xl font-semibold ml-4">Premium Üyelik</h1>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-40">
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

                <Card className="p-6 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Premium Üyelik
                    </h3>
                    <Badge className="bg-yellow-600 text-white">Popüler</Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      "Özel premium etkinliklere erişim",
                      "Öncelikli rezervasyon hakkı",
                      "Ücretsiz iptal imkanı",
                      "Özel sohbet odaları",
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm text-gray-700">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ₺49
                      </span>
                      <span className="text-gray-600">/ay</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      İlk ay ücretsiz
                    </p>
                  </div>
                </Card>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Premium Etkinlik Örnekleri
                  </h3>

                  {mockEvents
                    .filter((event) => event.isPremium)
                    .map((event) => (
                      <Card key={event.id} className="p-4 border-yellow-200">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-gray-900">
                                {event.title}
                              </h4>
                              <Crown size={16} className="text-yellow-600" />
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Calendar size={14} className="mr-1" />
                                {event.date}
                              </span>
                              <span className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                {event.time}
                              </span>
                              <span className="flex items-center">
                                <MapPin size={14} className="mr-1" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-orange-600">
                              {event.price}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Fixed Footer Buttons */}
              <div className="p-6 border-t bg-white space-y-3">
                <Button
                  onClick={() => {
                    setIsPremium(true);
                    onNavigate("events-available");
                  }}
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
                  Premium'a Başla
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate("profile")}
                  className="w-full"
                >
                  Şimdi değil
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
