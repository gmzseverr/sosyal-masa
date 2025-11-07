"use client";

import { motion } from "framer-motion";
import { Home, Search, Calendar, User } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { id: "home", label: "Anasayfa", icon: <Home size={22} /> },
  { id: "discover", label: "Keşfet", icon: <Search size={22} /> },
  { id: "events", label: "Etkinlikler", icon: <Calendar size={22} /> },
  { id: "profile", label: "Profil", icon: <User size={22} /> },
];

export default function BottomNavigation({
  activeTab,
  onTabChange,
  items = defaultItems,
}: BottomNavigationProps) {
  return (
    <motion.div
      className="bg-white border-t border-gray-200 rounded-b-[2rem] flex justify-around items-center px-3 py-2"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {items.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <motion.button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-1 py-2 px-3 relative"
          >
            <motion.div
              animate={{ color: isActive ? "#f97316" : "#9ca3af" }}
              transition={{ duration: 0.2 }}
            >
              {item.icon}
            </motion.div>

            <span
              className={`text-[11px] font-medium ${
                isActive ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>

            {isActive && (
              <motion.div
                layoutId="navActive"
                className="absolute bottom-0 w-8 h-1 bg-orange-500 rounded-t-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
