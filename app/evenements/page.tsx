'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const EventsPage = () => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'Tous les événements' },
    { value: 'culture', label: 'Culture' },
    { value: 'sport', label: 'Sport' },
    { value: 'politique', label: 'Politique' },
    { value: 'commerce', label: 'Commerce' },
    { value: 'associatif', label: 'Associatif' },
    { value: 'famille', label: 'Famille' }
  ];

  const events = [
    {
      id: 1,
      title: 'Conseil Municipal',
      description: 'Réunion mensuelle du conseil municipal. Ordre du jour : budget 2024, projets urbains.',
      date: '2024-02-20',
      time: '18:00',
      endTime: '20:00',
      location: 'Salle du Conseil - Mairie',
      address: '1 Place de la Mairie',
      category: 'politique',
      organizer: 'Mairie',
      capacity: 50,
      attending: 12,
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      isFree: true,
      isPublic: true
    },
    {
      id: 2,
      title: 'Concert de Printemps',
      description: 'Concert exceptionnel avec l\'orchestre municipal et des invités surprises. Soirée dédiée aux œuvres de compositeurs locaux.',
      date: '2024-02-22',
      time: '20:30',
      endTime: '22:30',
      location: 'Salle des Fêtes',
      address: '15 Rue de la Culture',
      category: 'culture',
      organizer: 'Association Musicale',
      capacity: 200,
      attending: 87,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      isFree: false,
      price: 15,
      isPublic: true
    },
    {
      id: 3,
      title: 'Marché aux Fleurs',
      description: 'Marché spécialisé avec des producteurs locaux. Découvrez les variétés de saison et bénéficiez de conseils d\'experts.',
      date: '2024-02-25',
      time: '09:00',
      endTime: '17:00',
      location: 'Place Centrale',
      address: 'Place de la République',
      category: 'commerce',
      organizer: 'Association des Commerçants',
      capacity: null,
      attending: 156,
      image: 'https://images.pexels.com/photos/1458627/pexels-photo-1458627.jpeg?auto=compress&cs=tinysrgb&w=600',
      isFree: true,
      isPublic: true
    },
    {
      id: 4,
      title: 'Tournoi de Football des Familles',
      description: 'Tournoi convivial ouvert à tous les âges. Équipes mixtes encouragées. Buvette et restauration sur place.',
      date: '2024-02-26',
      time: '14:00',
      endTime: '18:00',
      location: 'Stade Municipal',
      address: 'Avenue du Sport',
      category: 'sport',
      organizer: 'Club Sportif Local',
      capacity: 100,
      attending: 43,
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600',
      isFree: true,
      isPublic: true
    },
    {
      id: 5,
      title: 'Exposition : 50 ans d\'Histoire Locale',
      description: 'Rétrospective photographique et documentaire sur l\'évolution de notre commune depuis 1974.',
      date: '2024-03-01',
      time: '10:00',
      endTime: '18:00',
      location: 'Médiathèque',
      address: '8 Rue des Livres',
      category: 'culture',
      organizer: 'Médiathèque Municipale',
      capacity: 80,
      attending: 23,
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600',
      isFree: true,
      isPublic: true
    },
    {
      id: 6,
      title: 'Bourse aux Jouets',
      description: 'Achat, vente et échange de jouets et articles de puériculture. Organisé par l\'association des parents d\'élèves.',
      date: '2024-03-03',
      time: '09:00',
      endTime: '16:00',
      location: 'École Primaire - Gymnase',
      address: '12 Rue de l\'École',
      category: 'famille',
      organizer: 'Association des Parents',
      capacity: 150,
      attending: 67,
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600',
      isFree: false,
      price: 2,
      isPublic: true
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      culture: 'bg-purple-100 text-purple-800',
      sport: 'bg-blue-100 text-blue-800',
      politique: 'bg-gray-100 text-gray-800',
      commerce: 'bg-green-100 text-green-800',
      associatif: 'bg-orange-100 text-orange-800',
      famille: 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const categoryObj = categories.find(cat => cat.value === category);
    return categoryObj ? categoryObj.label : category;
  };

  return (
    <Layout>
      <div className="py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agenda des Événements
            </h1>
            <p className="text-lg text-gray-600">
              Découvrez tous les événements de notre commune
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="search"
                    placeholder="Rechercher un événement..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  Liste
                </Button>
                <Button
                  variant={viewMode === 'calendar' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('calendar')}
                >
                  Calendrier
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''} trouvé{filteredEvents.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Events List */}
          {viewMode === 'list' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="news-card hover-lift">
                  <div className="flex">
                    <div 
                      className="relative w-32 h-32 flex-shrink-0 bg-cover bg-center rounded-l-lg"
                      style={{ backgroundImage: `url(${event.image})` }}
                    >
                      <div className="absolute top-2 left-2">
                        <Badge className={getCategoryColor(event.category)}>
                          {getCategoryLabel(event.category)}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {event.title}
                        </h3>
                        {event.isFree ? (
                          <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                            Gratuit
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-blue-600 border-blue-600 text-xs">
                            {event.price}€
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          <span>
                            {new Date(event.date).toLocaleDateString('fr-FR', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <span>{event.time} - {event.endTime}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        {event.capacity && (
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-primary" />
                            <span>{event.attending}/{event.capacity} participants</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-500">
                          Organisé par {event.organizer}
                        </span>
                        <Button size="sm">
                          Voir détails
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Calendar View */}
          {viewMode === 'calendar' && (
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Vue Calendrier
                  </h3>
                  <p className="text-gray-600 mb-4">
                    La vue calendrier sera disponible prochainement
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setViewMode('list')}
                  >
                    Retour à la liste
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Aucun événement trouvé
                </h3>
                <p className="text-gray-600 mb-4">
                  Aucun événement ne correspond à vos critères de recherche
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;