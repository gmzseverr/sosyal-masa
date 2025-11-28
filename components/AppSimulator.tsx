"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  User,
  Search,
} from "lucide-react";
import type { AppState } from "@/lib/states";
import {
  mockEvents,
  mockChatMessages,
  type ChatMessage,
} from "@/lib/states";
import Onboarding from "./app-screens/Onboarding";
import SplashScreen from "./app-screens/SplashScreen";
import OnboardingTest from "./app-screens/OnboardingTest";
import PersonalityTest from "./app-screens/PersonalityTest";
import LoginScreen from "./app-screens/LoginScreen";
import MatchingScreen from "./app-screens/MatchingScreen";
import HomeScreen from "./app-screens/HomeScreen";
import EventsPage from "./app-screens/EventsPage";
import EventDetailPage from "./app-screens/EventDetailPage";
import PaymentPage from "./app-screens/PaymentPage";
import PaymentSuccessPage from "./app-screens/PaymentSuccessPage";
import ProfilePage from "./app-screens/ProfilePage";
import PremiumUpgradePage from "./app-screens/PremiumUpgradePage";
import DiscoverPage from "./app-screens/DiscoverPage";
import { eventsData, EventData } from "@/lib/events";


interface AppSimulatorProps {
  state: AppState;
  onNavigate: (state: AppState) => void;
}

export function AppSimulator({ state, onNavigate }: AppSimulatorProps) {
  const [chatMessages, setChatMessages] =
    useState<ChatMessage[]>(mockChatMessages);
  const [newMessage, setNewMessage] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(mockEvents[0]);
  const [isPremium, setIsPremium] = useState(false);

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



  const handleSelectEvent = (event: EventData) => {
    setSelectedEvent(event);
    onNavigate("event-detail");
};

  // BottomTabBar'ı bu şekilde tutuyoruz.
  const BottomTabBar = ({ activeTab }: { activeTab: string }) => (
    <div className="flex-shrink-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {[
          {
            id: "home",
            icon: Home,
            label: "Ana Sayfa",
            state: "home" as AppState,
          },
          {
            id: "discover",
            icon: Search,
            label: "Keşfet",
            state: "discover" as AppState,
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
            onClick={() => onNavigate(tab.id === "events" ? "events-available" as AppState : tab.state)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
              // Aktif sekme kontrolü
              (activeTab === tab.id || (tab.id === "events" && activeTab === "events-available"))
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


  const requiresBottomBar = ["home","landing", "discover", "events-available", "profile","event-detail"].includes(state as string);


  const activeTabName = state === "events-available" ? "events" : state;


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
          // Ana div'i dikeyde bölmek için flex-col yaptık
          className="w-full h-full flex flex-col"
        >
          {/* Sayfa İçeriği Alanı: Menüye yer bırakması için flex-1 */}
          <div className="flex-1 overflow-y-auto">

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

         
         {/* HomeScreen Ekranı */}
         {(state === "home" || state === "landing") && (
              <HomeScreen 
                onNavigate={onNavigate} 
                onSelectEvent={handleSelectEvent} // 💡 EKLE: Bu prop, hatayı çözer.
              />
            )}
            {state === "events-available" && (
              <EventsPage 
                  onNavigate={onNavigate}
                  onSelectEvent={handleSelectEvent}
              />
            )}

            {/* event-detail state'i */}
            {state === "event-detail" && selectedEvent && (
                <EventDetailPage 
                    event={selectedEvent} 
                    onNavigate={onNavigate}
                />
            )}

            {/* Payment Screen */}
            {state === "payment" && (
              <PaymentPage
                event={selectedEvent}
                onNavigate={onNavigate}
              />
            )}
            
            {state === "payment-success" && (
              <PaymentSuccessPage
                  event={selectedEvent}
                  onNavigate={onNavigate} 
              />
            )}

            {/* Profile Screen */}
            {state === "profile" && (
                <ProfilePage 
                    onNavigate={onNavigate}
                    isPremium={isPremium} 
                />
            )}

            {/* Premium Upgrade Screen */}
            {state === "premium" && (
              <PremiumUpgradePage
                onNavigate={onNavigate}
                setIsPremium={setIsPremium}
              />
            )}

            {/* Discover Screen */}
            {state === "discover" && (
                <DiscoverPage onNavigate={onNavigate} />
            )}

         
            {/*
              Not: Chat, Match Found ve diğer eski/yeni sayfalar buraya eklenebilir.
              Eğer bu sayfalar tam ekran ve menüsüz ise, içeriği aynı kalır.
            */}
          </div>
          {/* Sayfa İçeriği Alanı SONU */}

          {/* BOTTOM TAB BAR (Tüm ana ekranların altında sabit) */}
          {requiresBottomBar && (
            <BottomTabBar activeTab={activeTabName} />
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}

          {/* Match Found Screen 
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
*/}
          {/* Chat Home Screen 
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
          )} */}

          {/* Chat Screen 
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
*/}
