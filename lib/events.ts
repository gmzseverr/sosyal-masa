import { Calendar, Clock, MapPin, Users, MessageSquare, Shield, ArrowLeft } from "lucide-react";


interface Rule {
  icon: any;
  title: string;
  description: string;
}

export const generalRules: Rule[] = [
  { icon: Clock, title: "Zamanında Gelme", description: "Etkinliğin başlangıç saatine riayet ederek, geç kalmamaya özen gösterin." },
  { icon: Users, title: "Saygılı Ortam", description: "Herkesin kendini rahat hissettiği, güvenli bir ortam yaratmaya yardımcı olun." },
  { icon: MessageSquare, title: "Açık İletişim", description: "Sohbetlere açık olun ve yeni insanlarla tanışmaktan keyif alın." },
];


export interface EventData {
  id: number;
  title: string;
  category: "Hepsi" | "Premium" | "Bu hafta";
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
  isPremium?: boolean;
  description:string;
  rules: Rule[];
}


export const eventsData: EventData[] = [
  {
    id: 1,
    title: "Teknoloji Liderleriyle Akşam Yemeği",
    category: "Hepsi",
    image: "/bad30d47621090e16f3b69f5c5488a13.jpg",
    date: "17 Kasım Çarşamba",
    time: "19:00",
    location: "Bayraklı",
    price: "300 TL",
    isPremium: false,
    description: "İzmir'in önde gelen teknoloji firmalarının kurucu ve yöneticileriyle 6 kişilik samimi bir akşam yemeği etkinliği. Sektördeki en son trendleri, samimi bir ortamda birinci ağızdan dinleyin ve yeni iş birlikleri kurun.",
    rules: generalRules,
  },
  {
    id: 2,
    title: "Girişimci Kuruculatarla Akşam Yemeği",
    category: "Premium",
    image: "/6976e4953fa0390bec9cec5c3298621f.jpg",
    date: "18 Kasım Perşembe",
    time: "20:00",
    location: "Alsancak",
    price: "450 TL",
    isPremium: true,
    description: "Büyüme aşamasındaki başarılı girişimlerin kurucularıyla bir araya gelin. Yatırım, ölçeklenme ve globalleşme hikayelerini öğrenin. Bu özel Premium etkinlik, sadece 5 katılımcıyla sınırlıdır.",
    rules: generalRules,
  },
  {
    id: 3,
    title: "Yapay Zeka ve Finans Konferansı",
    category: "Bu hafta",
    image: "/83df1d516c0fba80261c19350c2e5a5a.jpg",
    date: "19 Temmuz Cuma",
    time: "14:00",
    location: "Bornova",
    price: "200 TL",
    isPremium: false,
    description: "Yapay zeka teknolojilerinin finansal piyasalar üzerindeki devrim niteliğindeki etkilerini ele alıyoruz. Bankacılık, sigortacılık ve fintech alanındaki profesyonellerin sunumlarıyla geleceğe hazırlanın.",
    rules: generalRules,
  },
  {
    id: 4,
    title: "Network Kahvesi - Girişimciler",
    category: "Hepsi",
    image: "/97688163bf8262ab7787a9e219322335.jpg",
    date: "20 Kasım Cumartesi",
    time: "10:00",
    location: "Konak",
    price: "Ücretsiz",
    isPremium: false,
    description: "Sabah kahvesi eşliğinde rahat bir ortamda fikir alışverişi yapın. Erken aşama girişimciler ve mentorlar için ideal, bağlantı kurmaya odaklanmış, ücretsiz bir network buluşmasıdır.",
    rules: generalRules,
  },
  {
    id: 5,
    title: "Dijital Pazarlama Masterclass",
    category: "Premium",
    image: "/8b68195641bbc23d0d71965b2f8231ff.jpg",
    date: "21 Kasım Pazar",
    time: "15:30",
    location: "Alsancak",
    price: "350 TL",
    isPremium: true,
    description: "4 saatlik yoğun ve uygulamalı bu Masterclass ile Google ve Meta reklamlarında ROI'nizi nasıl artıracağınızı öğrenin. Sınıf içi etkileşimli egzersizlerle bilginizi hemen uygulamaya geçirin.",
    rules: generalRules,
  },
];