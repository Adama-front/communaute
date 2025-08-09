'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Book, 
  Calendar, 
  Clock, 
  Users, 
  Search, 
  BookOpen, 
  Headphones, 
  Monitor, 
  Coffee,
  MapPin,
  Phone,
  Mail,
  Star,
  Download,
  Heart,
  User,
  CreditCard,
  CheckCircle,
  FileText
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BibliothequeePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const libraryInfo = {
    name: 'Médiathèque Municipale Jean Jaurès',
    address: '8 Rue des Livres, 12345 Ville',
    phone: '01 23 45 67 85',
    email: 'mediatheque@ville.fr',
    hours: {
      'Lundi': 'Fermé',
      'Mardi': '10h00 - 18h00',
      'Mercredi': '10h00 - 19h00',
      'Jeudi': '10h00 - 18h00',
      'Vendredi': '10h00 - 18h00',
      'Samedi': '9h00 - 17h00',
      'Dimanche': 'Fermé'
    }
  };

  const collections = {
    books: 15000,
    audiobooks: 800,
    dvd: 1200,
    magazines: 150,
    ebooks: 5000,
    games: 200
  };

  const featuredBooks = [
    {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      category: 'Classique',
      cover: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      rating: 4.8,
      description: 'Un conte poétique et philosophique sous l\'apparence d\'un conte pour enfants.'
    },
    {
      id: 2,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Histoire',
      cover: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: false,
      rating: 4.6,
      description: 'Une brève histoire de l\'humanité qui retrace l\'évolution de notre espèce.'
    },
    {
      id: 3,
      title: 'L\'Étranger',
      author: 'Albert Camus',
      category: 'Littérature',
      cover: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      rating: 4.5,
      description: 'Roman emblématique de la littérature française du XXe siècle.'
    },
    {
      id: 4,
      title: 'Une Histoire de tout, ou presque...',
      author: 'Bill Bryson',
      category: 'Sciences',
      cover: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      rating: 4.7,
      description: 'Un voyage fascinant à travers les sciences et l\'univers.'
    },
    {
      id: 5,
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      cover: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      rating: 4.9,
      description: 'L\'épopée fantasy la plus célèbre de la littérature moderne.'
    },
    {
      id: 6,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Développement personnel',
      cover: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: false,
      rating: 4.4,
      description: 'Guide pratique pour créer de bonnes habitudes et se défaire des mauvaises.'
    }
  ];

  const newArrivals = [
    {
      id: 7,
      title: 'Klara et le Soleil',
      author: 'Kazuo Ishiguro',
      category: 'Roman',
      arrivalDate: '2024-02-10'
    },
    {
      id: 8,
      title: 'L\'Anomalie',
      author: 'Hervé Le Tellier',
      category: 'Roman',
      arrivalDate: '2024-02-08'
    },
    {
      id: 9,
      title: 'Civilizations',
      author: 'Laurent Binet',
      category: 'Histoire alternative',
      arrivalDate: '2024-02-05'
    }
  ];

  const services = [
    {
      icon: BookOpen,
      title: 'Prêt de livres',
      description: 'Empruntez jusqu\'à 6 livres pour 3 semaines',
      details: 'Renouvelable une fois si aucune réservation'
    },
    {
      icon: Headphones,
      title: 'Livres audio & CD',
      description: 'Collection de 800 livres audio et CD musicaux',
      details: 'Prêt de 3 documents pour 2 semaines'
    },
    {
      icon: Monitor,
      title: 'Espace numérique',
      description: '8 postes informatiques avec accès internet',
      details: 'Réservation conseillée, sessions de 2h maximum'
    },
    {
      icon: Coffee,
      title: 'Espace détente',
      description: 'Zone de lecture avec fauteuils confortables',
      details: 'Consultation libre de la presse et magazines'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Heure du conte',
      description: 'Lecture d\'histoires pour les 3-8 ans',
      date: '2024-02-21',
      time: '15h30',
      duration: '45 min',
      audience: 'Enfants 3-8 ans',
      free: true
    },
    {
      id: 2,
      title: 'Club de lecture',
      description: 'Discussion autour du livre du mois',
      date: '2024-02-24',
      time: '14h00',
      duration: '1h30',
      audience: 'Adultes',
      free: true
    },
    {
      id: 3,
      title: 'Atelier numérique',
      description: 'Initiation aux outils informatiques',
      date: '2024-02-26',
      time: '10h00',
      duration: '2h',
      audience: 'Seniors',
      free: true
    }
  ];

  const membershipPlans = [
    {
      name: 'Gratuit',
      price: '0€',
      duration: 'par an',
      features: [
        'Consultation sur place',
        'Accès wifi gratuit',
        'Participation aux événements',
        'Accès espace presse'
      ],
      popular: false
    },
    {
      name: 'Habitant',
      price: '15€',
      duration: 'par an',
      features: [
        'Tout de l\'abonnement gratuit',
        'Prêt de 6 livres (3 semaines)',
        'Prêt de 3 CD/DVD (2 semaines)',
        'Accès aux livres numériques',
        'Réservations en ligne'
      ],
      popular: true
    },
    {
      name: 'Extérieur',
      price: '25€',
      duration: 'par an',
      features: [
        'Tout de l\'abonnement habitant',
        'Prêt de 8 livres',
        'Prêt de 4 CD/DVD',
        'Accès prioritaire aux nouveautés'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <nav className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
                <li>/</li>
                <li className="text-gray-900">Bibliothèque</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-12 bg-indigo-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{libraryInfo.name}</h1>
                <p className="text-lg text-gray-600">Votre espace de culture et de savoir</p>
              </div>
              <Book className="w-8 h-8 text-indigo-600 ml-auto" />
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="relative md:w-1/2 h-64 md:h-auto">
                  <Image
                    src="https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Intérieur de la bibliothèque"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Bienvenue dans votre médiathèque
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Découvrez notre riche collection de plus de 20 000 documents : livres, magazines, 
                    CD, DVD, livres numériques et bien plus encore. Un lieu de culture, d'apprentissage 
                    et de rencontre au cœur de notre commune.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{collections.books.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Livres</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{collections.ebooks.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">E-books</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button size="lg" asChild>
                      <Link href="/bibliotheque/reservation">
                        <FileText className="w-4 h-4 mr-2" />
                        Réserver un livre
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/auth/inscription">
                        <User className="w-4 h-4 mr-2" />
                        S'inscrire
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <Tabs defaultValue="catalog" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="catalog">Catalogue</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="events">Événements</TabsTrigger>
              <TabsTrigger value="membership">Inscription</TabsTrigger>
            </TabsList>

            {/* Catalog Tab */}
            <TabsContent value="catalog" className="space-y-8">
              {/* Search */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="search"
                        placeholder="Rechercher un livre, un auteur, un sujet..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12"
                      />
                    </div>
                    <Button>
                      <Search className="w-4 h-4 mr-2" />
                      Rechercher
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Books */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sélection du bibliothécaire</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredBooks.map((book) => (
                    <Card key={book.id} className="hover-lift">
                      <div className="flex p-4">
                        <div className="relative w-20 h-28 flex-shrink-0 mr-4">
                          <Image
                            src={book.cover}
                            alt={book.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <Badge variant="outline" className="text-xs">
                              {book.category}
                            </Badge>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-500 mr-1" />
                              <span className="text-xs text-gray-600">{book.rating}</span>
                            </div>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">
                            {book.title}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                          <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                            {book.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge 
                              variant={book.available ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {book.available ? (
                                <>
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Disponible
                                </>
                              ) : (
                                'Emprunté'
                              )}
                            </Badge>
                            <Button size="sm" variant="outline" disabled={!book.available} asChild>
                              <Link href="/bibliotheque/reservation">
                                {book.available ? 'Réserver' : 'Liste d\'attente'}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* New Arrivals */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nouveautés</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {newArrivals.map((book) => (
                    <Card key={book.id} className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                          Nouveau
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {new Date(book.arrivalDate).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{book.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                      <Badge variant="outline" className="text-xs">
                        {book.category}
                      </Badge>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Collection Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Notre Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="text-center">
                      <BookOpen className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{collections.books.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Livres</div>
                    </div>
                    <div className="text-center">
                      <Headphones className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{collections.audiobooks}</div>
                      <div className="text-sm text-gray-600">Livres audio</div>
                    </div>
                    <div className="text-center">
                      <Monitor className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{collections.dvd}</div>
                      <div className="text-sm text-gray-600">DVD</div>
                    </div>
                    <div className="text-center">
                      <Book className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{collections.magazines}</div>
                      <div className="text-sm text-gray-600">Magazines</div>
                    </div>
                    <div className="text-center">
                      <Download className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{collections.ebooks.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">E-books</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{collections.games}</div>
                      <div className="text-sm text-gray-600">Jeux</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <p className="text-sm text-gray-500">{service.details}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Library Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{libraryInfo.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{libraryInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{libraryInfo.email}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Horaires d'ouverture</h4>
                      <div className="space-y-2">
                        {Object.entries(libraryInfo.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between text-sm">
                            <span className="text-gray-700">{day}</span>
                            <span className={hours === 'Fermé' ? 'text-red-600' : 'text-gray-900'}>
                              {hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Prochains événements</h3>
                <div className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id} className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{event.title}</h4>
                            {event.free && (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                Gratuit
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {new Date(event.date).toLocaleDateString('fr-FR')}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {event.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              {event.audience}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline">
                          S'inscrire
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Membership Tab */}
            <TabsContent value="membership" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choisissez votre abonnement</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {membershipPlans.map((plan, index) => (
                    <Card key={index} className={`p-6 ${plan.popular ? 'ring-2 ring-indigo-600' : ''}`}>
                      {plan.popular && (
                        <Badge className="mb-4 bg-indigo-600">
                          Le plus populaire
                        </Badge>
                      )}
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                        <div className="text-3xl font-bold text-indigo-600 mb-1">
                          {plan.price}
                        </div>
                        <div className="text-sm text-gray-600">{plan.duration}</div>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full" 
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/auth/inscription">
                          <CreditCard className="w-4 h-4 mr-2" />
                          {plan.price === '0€' ? 'Accès libre' : 'S\'abonner'}
                        </Link>
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Registration Process */}
              <Card>
                <CardHeader>
                  <CardTitle>Comment s'inscrire ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-indigo-600 font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Venez nous voir</h4>
                      <p className="text-sm text-gray-600">
                        Rendez-vous à la médiathèque avec une pièce d'identité et un justificatif de domicile
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-indigo-600 font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Choisissez votre formule</h4>
                      <p className="text-sm text-gray-600">
                        Sélectionnez l'abonnement qui correspond à vos besoins et réglez si nécessaire
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-indigo-600 font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Profitez !</h4>
                      <p className="text-sm text-gray-600">
                        Votre carte est immédiatement active. Commencez à emprunter et découvrir
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default BibliothequeePage;