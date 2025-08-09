'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AdvertisingSection = () => {
  const businesses = [
    {
      id: 1,
      name: 'Cabinet Dentaire Dr. Martin',
      category: 'Santé',
      description: 'Soins dentaires pour toute la famille. Urgences acceptées.',
      image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=400',
      address: '15 Rue de la Santé',
      phone: '01 23 45 67 90',
      hours: 'Lun-Ven 8h-19h',
      rating: 4.8,
      specialties: ['Orthodontie', 'Implants', 'Urgences'],
      website: 'https://cabinet-martin.fr'
    },
    {
      id: 2,
      name: 'AutoLoc - Location de Véhicules',
      category: 'Transport',
      description: 'Location de voitures, utilitaires et véhicules spéciaux.',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      address: '8 Avenue du Commerce',
      phone: '01 23 45 67 91',
      hours: 'Lun-Sam 7h-20h',
      rating: 4.6,
      specialties: ['Voitures', 'Utilitaires', 'Motos'],
      website: 'https://autoloc-ville.fr'
    },
    {
      id: 3,
      name: 'Voyages Horizon',
      category: 'Voyage',
      description: 'Agence de voyage spécialisée dans les séjours sur mesure.',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400',
      address: '22 Place Centrale',
      phone: '01 23 45 67 92',
      hours: 'Mar-Sam 9h-18h',
      rating: 4.9,
      specialties: ['Séjours', 'Circuits', 'Croisières'],
      website: 'https://voyages-horizon.fr'
    },
    {
      id: 4,
      name: 'Plomberie Dubois',
      category: 'Artisanat',
      description: 'Plomberie, chauffage et dépannage 24h/24.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
      address: '5 Rue des Artisans',
      phone: '01 23 45 67 93',
      hours: '24h/24 - 7j/7',
      rating: 4.7,
      specialties: ['Dépannage', 'Installation', 'Rénovation'],
      website: 'https://plomberie-dubois.fr'
    },
    {
      id: 5,
      name: 'Salon de Coiffure Élégance',
      category: 'Beauté',
      description: 'Coiffure homme, femme et enfant. Soins capillaires.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      address: '12 Rue de la Beauté',
      phone: '01 23 45 67 94',
      hours: 'Mar-Sam 9h-19h',
      rating: 4.5,
      specialties: ['Coupe', 'Coloration', 'Soins'],
      website: 'https://salon-elegance.fr'
    },
    {
      id: 6,
      name: 'Restaurant Le Gourmet',
      category: 'Restauration',
      description: 'Cuisine traditionnelle française avec produits locaux.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      address: '18 Place du Marché',
      phone: '01 23 45 67 95',
      hours: 'Mar-Dim 12h-14h, 19h-22h',
      rating: 4.8,
      specialties: ['Terroir', 'Produits locaux', 'Menu enfant'],
      website: 'https://restaurant-gourmet.fr'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Santé': 'bg-red-100 text-red-800',
      'Transport': 'bg-blue-100 text-blue-800',
      'Voyage': 'bg-green-100 text-green-800',
      'Artisanat': 'bg-orange-100 text-orange-800',
      'Beauté': 'bg-pink-100 text-pink-800',
      'Restauration': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos Partenaires Locaux
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les entreprises et services de qualité de notre commune. 
            Des professionnels de confiance à votre service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <Card key={business.id} className="news-card hover-lift">
              <div className="relative h-48">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(business.category)}>
                    {business.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    <span className="text-xs font-medium">{business.rating}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                  {business.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {business.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-2" />
                    <span>{business.address}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Phone className="w-3 h-3 mr-2" />
                    <span>{business.phone}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-2" />
                    <span>{business.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {business.specialties.slice(0, 2).map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                  {business.specialties.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{business.specialties.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <Button size="sm" variant="outline" asChild>
                    <a href={`tel:${business.phone}`}>
                      <Phone className="w-3 h-3 mr-1" />
                      Appeler
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={business.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Site web
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Voir tous nos partenaires
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingSection;