import React from "react";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location?: string;
  eventImage?: string;
  attendeeCount: number;
  price?: string;
  onCardClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  attendeeCount,
  price,
  onCardClick,
}) => {
  const avatarLetters = ["M", "A", "S", "K", "E"];
  const avatarColors = [
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-yellow-400",
    "bg-red-400",
  ];

  return (
    <Card
      className="p-4 shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer rounded-xl overflow-hidden"
      onClick={onCardClick}
    >
      {/* Tarih ve Saat - Full width */}
      <div className="w-full ">
        <p className="text-xs text-[#2C6E49] font-semibold ">
          {date} • {time}
        </p>
      </div>

      {/* Alt kısım: içerik + avatarlar */}
      <div className="flex justify-between gap-4 items-start">
        {/* Sol taraf - Metin içeriği */}
        <div className="flex-1">
          <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>

          {location && (
            <p className="text-xs text-gray-600 line-clamp-2 mb-2">
              {location}
            </p>
          )}

          {price && (
            <p className="text-md font-bold text-gray-900">{price}</p>
          )}
        </div>

        {/* Sağ taraf - Avatarlar */}
        <div className="flex items-center">
          <div className="flex -space-x-5">
            {Array.from({ length: Math.min(attendeeCount, 5) }).map(
              (_, idx) => (
                <div
                  key={idx}
                  className={`w-8 h-8 rounded-full ${avatarColors[idx]} flex items-center justify-center border-2 border-white text-white text-xs font-bold`}
                >
                  {avatarLetters[idx]}
                </div>
              )
            )}
            {attendeeCount > 5 && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white text-gray-700 text-xs font-bold">
                +{attendeeCount - 5}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
