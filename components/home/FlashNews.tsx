'use client';

import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const FlashNews = () => {
  const [currentNews, setCurrentNews] = useState(0);

  const flashNews = [
    "🔴 URGENT: Conseil municipal extraordinaire prévu demain à 18h en salle des fêtes",
    "⚽ SPORT: L'équipe locale remporte le championnat régional 3-1",
    "🎭 CULTURE: Festival des arts de rue ce weekend, entrée gratuite",
    "🚧 TRAVAUX: Fermeture temporaire de la rue principale du 15 au 20 février",
    "🌱 ENVIRONNEMENT: Nouvelle collecte de déchets verts tous les mercredis",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % flashNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [flashNews.length]);

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center">
          <div className="flex items-center space-x-2 mr-4 flex-shrink-0">
            <AlertCircle className="w-4 h-4 animate-pulse" />
            <span className="font-semibold text-sm uppercase tracking-wide">Flash Info</span>
          </div>
          <div className="flex-grow overflow-hidden">
            <div className="flash-news-ticker whitespace-nowrap">
              <span className="text-sm font-medium">
                {flashNews[currentNews]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashNews;