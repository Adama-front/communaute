'use client';

import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: 'sun' | 'cloud' | 'rain';
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 22,
    condition: 'Ensoleillé',
    humidity: 65,
    windSpeed: 12,
    icon: 'sun'
  });

  useEffect(() => {
    // Simuler la récupération de données météo
    const fetchWeather = () => {
      // Dans un vrai projet, vous feriez un appel API ici
      const conditions = [
        { temp: 22, condition: 'Ensoleillé', icon: 'sun' as const },
        { temp: 18, condition: 'Nuageux', icon: 'cloud' as const },
        { temp: 15, condition: 'Pluvieux', icon: 'rain' as const }
      ];
      
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      
      setWeather({
        temperature: randomCondition.temp,
        condition: randomCondition.condition,
        humidity: Math.floor(Math.random() * 40) + 40,
        windSpeed: Math.floor(Math.random() * 20) + 5,
        icon: randomCondition.icon
      });
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Mise à jour toutes les 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = () => {
    switch (weather.icon) {
      case 'sun':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloud':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <Card className="glass-effect">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Météo locale</h3>
          {getWeatherIcon()}
        </div>
        
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-primary mb-1">
            {weather.temperature}°C
          </div>
          <div className="text-sm text-gray-600">{weather.condition}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="w-4 h-4 text-gray-500" />
            <span>{weather.windSpeed} km/h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}