export type AppState =
  | "onboarding"
  | "splash"
  | "onboarding-test"
  | "landing"
  | "events-list"
  | "test-start" // Timeleft-like pre-quiz intro
  | "test-step" // step-by-step quiz (multiple steps)
  | "login"
  | "register"
  | "home" // joinable dinners (only date/day/time shown)
  | "events-available" // public list of joinable events (pre-payment)
  | "events-joined" // my registered events
  | "event-detail" // join form (languages/budget/diet), price visible
  | "payment" // card form
  | "payment-success" // after payment: show restaurant & participants
  | "matching" // progress bar: "Uyumlu bir kişi arayışı devam ediyor"
  | "match-found"
  | "chat-home" // conversation list (not a thread yet)
  | "chat" // specific table conversation
  | "profile"
  | "notifications"
  | "settings"
  | "privacy"
  | "premium" // premium membership upsell & special events
  | "roadmap"
  | "discover";

export const STATE_TO_SECTION_ID: Record<AppState, string> = {
  landing: "problem",
  "test-start": "solution",
  "test-step": "solution",
  login: "problem",
  register: "problem",
  home: "flow",
  "events-available": "flow",
  "events-joined": "flow",
  "event-detail": "flow",
  payment: "business",
  "payment-success": "business",
  matching: "experience",
  "match-found": "experience",
  "chat-home": "experience",
  chat: "experience",
  profile: "team",
  notifications: "team",
  settings: "team",
  privacy: "team",
  premium: "premium",
  roadmap: "roadmap",
};

export const SECTION_ID_TO_STATE: Record<string, AppState> = {
  problem: "landing",

  solution: "test-start",
  flow: "events-available",
  experience: "match-found",
  business: "payment",
  premium: "premium",
  team: "profile",
  cta: "landing",
  roadmap: "roadmap",
  discover: "discover",
};

export interface MockEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  badge?: string;
  spotsLeft?: number;
  restaurant?: string;
  participants?: string[];
  isPremium?: boolean;
  isJoined?: boolean;
}

export const mockEvents: MockEvent[] = [
  {
    id: "1",
    title: "Akşam Yemeği",
    date: "15 Ara",
    time: "19:30",
    location: "Alsancak",
    price: "₺249",
    badge: "Son koltuklar",
    spotsLeft: 2,
    restaurant: "Kordon Boyu Restoran",
    participants: ["Mehmet K.", "Ayşe D.", "Can Y."],
  },
  {
    id: "2",
    title: "Hafta Sonu Brunch",
    date: "17 Ara",
    time: "11:00",
    location: "Bostanlı",
    price: "₺185",
    restaurant: "Bostanlı Cafe",
    participants: ["Zeynep A.", "Emre T."],
  },
  {
    id: "3",
    title: "İş Sonrası Aperitif",
    date: "18 Ara",
    time: "18:00",
    location: "Çeşme",
    price: "₺320",
    badge: "Premium",
    isPremium: true,
    restaurant: "Çeşme Marina Restaurant",
    participants: ["Selin M.", "Burak K.", "Deniz L."],
  },
  {
    id: "4",
    title: "Premium Wine Tasting",
    date: "20 Ara",
    time: "20:00",
    location: "Alaçatı",
    price: "₺450",
    badge: "Premium",
    isPremium: true,
    restaurant: "Alaçatı Şarap Evi",
    participants: ["Murat S.", "Elif K."],
  },
];

export const mockJoinedEvents: MockEvent[] = [
  {
    id: "4",
    title: "Cumartesi Kahvaltısı",
    date: "16 Ara",
    time: "10:00",
    location: "Karşıyaka",
    price: "₺150",
    restaurant: "Sahil Cafe",
    participants: ["Ali R.", "Fatma S."],
    isJoined: true,
  },
];

export interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  eventTitle?: string;
}

export const mockConversations: Conversation[] = [
  {
    id: "1",
    title: "Akşam Yemeği Masası",
    lastMessage: "Evet, tam zamanında orada olacağım!",
    time: "18:52",
    eventTitle: "15 Ara - Akşam Yemeği",
  },
  {
    id: "2",
    title: "Brunch Grubu",
    lastMessage: "Kahvaltı menüsü harika görünüyor",
    time: "16:30",
    unreadCount: 2,
    eventTitle: "17 Ara - Hafta Sonu Brunch",
  },
];

export interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  time: string;
  isOwn?: boolean;
}

export const mockChatMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "Mehmet",
    message: "Herkese merhaba! Bu akşam için çok heyecanlıyım 😊",
    time: "18:45",
  },
  {
    id: "2",
    sender: "Ayşe",
    message: "Ben de! Restoran çok güzel görünüyor",
    time: "18:47",
  },
  {
    id: "3",
    sender: "Can",
    message: "Saat 19:30'da buluşuyoruz değil mi?",
    time: "18:50",
  },
  {
    id: "4",
    sender: "Sen",
    message: "Evet, tam zamanında orada olacağım!",
    time: "18:52",
    isOwn: true,
  },
];

export interface TestStep {
  id: number;
  question: string;
  options: string[];
  selectedOption?: string;
}

export const mockTestSteps: TestStep[] = [
  {
    id: 1,
    question: "Hangi konuları konuşmayı seviyorsunuz?",
    options: ["Sanat & Kültür", "Teknoloji", "Spor", "Seyahat"],
  },
  {
    id: 2,
    question: "Gürültü seviyesi tercihiniz?",
    options: ["Sessiz ortam", "Orta seviye", "Canlı atmosfer"],
  },
  {
    id: 3,
    question: "Hangi zaman dilimlerini tercih edersiniz?",
    options: ["Öğle arası", "Akşam saatleri", "Hafta sonu"],
  },
];
