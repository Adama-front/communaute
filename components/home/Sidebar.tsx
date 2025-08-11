"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherWidget } from "@/components/ui/weather-widget";
import {
  ArrowRight,
  Calendar,
  Camera,
  Clock,
  MapPin,
  Phone,
  Pill
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [selectedPoll, setSelectedPoll] = useState<string>("");
  const [formattedDates, setFormattedDates] = useState<{
    [key: string]: string;
  }>({});

  const upcomingEvents = [
    {
      id: 1,
      title: "Conseil Municipal",
      date: "2024-02-20",
      time: "18:00",
      location: "Mairie",
      category: "Politique"
    },
    {
      id: 2,
      title: "Concert de Printemps",
      date: "2024-02-22",
      time: "20:30",
      location: "Salle des Fêtes",
      category: "Culture"
    },
    {
      id: 3,
      title: "Marché aux Fleurs",
      date: "2024-02-25",
      time: "09:00",
      location: "Place Centrale",
      category: "Commerce"
    }
  ];

  const emergencyPharmacy = {
    name: "Pharmacie Central",
    address: "15 Rue de la République",
    phone: "01 23 45 67 89",
    hours: "24h/24"
  };

  const poll = {
    question: "Quel projet prioritaire pour notre commune ?",
    options: [
      { id: "transport", label: "Améliorer les transports", votes: 45 },
      { id: "espaces-verts", label: "Plus d'espaces verts", votes: 67 },
      { id: "commerce", label: "Dynamiser le commerce local", votes: 38 },
      { id: "culture", label: "Développer la culture", votes: 29 }
    ]
  };

  const categoryNews = [
    {
      id: 101,
      title: "Marché local: hausse de 15% de la fréquentation",
      category: "Économie",
      image:
        "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=300",
      publishedAt: "2024-02-15",
      href: "/articles/101"
    },
    {
      id: 201,
      title: "Championnat régional: nos équipes en finale",
      category: "Sport",
      image:
        "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=300",
      publishedAt: "2024-02-15",
      href: "/articles/201"
    },
    {
      id: 301,
      title: "Exposition: 50 ans d'histoire locale",
      category: "Culture",
      image:
        "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=300",
      publishedAt: "2024-02-14",
      href: "/articles/301"
    },
    {
      id: 401,
      title: "Solidarité: collecte alimentaire exceptionnelle",
      category: "Société",
      image:
        "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=300",
      publishedAt: "2024-02-15",
      href: "/articles/401"
    },
    {
      id: 102,
      title: "Nouvelle zone artisanale en projet",
      category: "Économie",
      image:
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=300",
      publishedAt: "2024-02-14",
      href: "/articles/102"
    },
    {
      id: 202,
      title: "Nouveaux cours de fitness pour seniors",
      category: "Sport",
      image:
        "https://images.pexels.com/photos/853247/pexels-photo-853247.jpeg?auto=compress&cs=tinysrgb&w=300",
      publishedAt: "2024-02-13",
      href: "/articles/202"
    }
  ];

  useEffect(() => {
    const dates: { [key: string]: string } = {};

    // Format dates for events
    upcomingEvents.forEach((event) => {
      dates[event.date] = new Date(event.date).toLocaleDateString("fr-FR");
    });

    // Format dates for category news
    categoryNews.forEach((article) => {
      dates[article.publishedAt] = new Date(
        article.publishedAt
      ).toLocaleDateString("fr-FR");
    });

    setFormattedDates(dates);
  }, []);

  const totalVotes = poll.options.reduce(
    (sum, option) => sum + option.votes,
    0
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      Économie: "bg-green-100 text-green-800",
      Sport: "bg-blue-100 text-blue-800",
      Culture: "bg-purple-100 text-purple-800",
      Société: "bg-red-100 text-red-800"
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="space-y-6">
      {/* Weather Widget */}
      <WeatherWidget />

      {/* Category News */}
      <Card className="fade-in-up">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between">
            Actualités par Catégorie
            <Button variant="outline" size="sm" asChild>
              <Link href="/actualites">
                Voir tout
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryNews.map((article) => (
              <div key={article.id} className="flex space-x-3 group hover-lift">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-grow">
                  <Badge
                    className={getCategoryColor(article.category)}
                    variant="outline"
                  >
                    {article.category}
                  </Badge>
                  <h4 className="font-medium text-gray-900 text-sm leading-tight mt-1 mb-1">
                    <Link
                      href={article.href}
                      className="hover:text-primary transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{formattedDates[article.publishedAt] || ""}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="slide-in-right">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-primary" />
            Prochains Événements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="border-l-4 border-secondary pl-3 py-2 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <h4 className="font-medium text-gray-900 text-sm">
                      {event.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>
                        {formattedDates[event.date] || ""} - {event.time}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {event.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full mt-4" asChild>
            <Link href="/evenements">Voir tous les événements</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Poll Widget */}
      <Card className="glass-effect">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Sondage du Jour</CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="font-medium text-gray-900 mb-4">{poll.question}</h4>
          <div className="space-y-3">
            {poll.options.map((option) => {
              const percentage = Math.round((option.votes / totalVotes) * 100);
              return (
                <div key={option.id}>
                  <div className="flex items-center space-x-2 mb-1">
                    <input
                      type="radio"
                      id={option.id}
                      name="poll"
                      value={option.id}
                      checked={selectedPoll === option.id}
                      onChange={(e) => setSelectedPoll(e.target.value)}
                      className="text-primary"
                    />
                    <label
                      htmlFor={option.id}
                      className="text-sm text-gray-700 flex-grow cursor-pointer"
                    >
                      {option.label}
                    </label>
                    <span className="text-xs text-gray-500">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <Button size="sm" className="w-full mt-4" disabled={!selectedPoll}>
            Voter
          </Button>
          <p className="text-xs text-gray-500 text-center mt-2">
            {totalVotes} votes au total
          </p>
        </CardContent>
      </Card>

      {/* Emergency Pharmacy */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Pill className="w-5 h-5 mr-2 text-green-600" />
            Pharmacie de Garde
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">
              {emergencyPharmacy.name}
            </h4>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{emergencyPharmacy.address}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>{emergencyPharmacy.phone}</span>
            </div>
            <div className="flex items-center text-sm text-green-600 font-medium">
              <Clock className="w-4 h-4 mr-2" />
              <span>Ouvert {emergencyPharmacy.hours}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Photo of the Day */}
      <Card className="overflow-hidden">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Camera className="w-5 h-5 mr-2 text-primary" />
            Photo du Jour
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Photo du jour"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-medium">
                Coucher de soleil sur la place centrale
              </p>
              <p className="text-white/80 text-xs">
                Par Jean Dupont - Hier 19:30
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/*       <LiveChat /> */}
    </div>
  );
};

export default Sidebar;
