'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, Calendar, User, Clock } from 'lucide-react';
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

const RechercherPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contentType, setContentType] = useState('all');
  const [category, setCategory] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  // Mock data pour les résultats de recherche
  const allContent = [
    {
      id: 1,
      type: 'article',
      title: "Nouveau projet urbain: La place centrale sera rénovée",
      excerpt: "Un investissement de 2,5 millions d'euros pour moderniser le cœur de notre ville avec des espaces verts et une fontaine interactive.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Urbanisme",
      author: "Marie Dubois",
      publishedAt: "2024-02-15T10:30:00Z",
      views: 1247
    },
    {
      id: 2,
      type: 'video',
      title: "Festival de musique 2024 - Highlights",
      excerpt: "Les meilleurs moments du festival avec les artistes locaux",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Culture",
      author: "Jean Martin",
      publishedAt: "2024-02-14T14:20:00Z",
      duration: "12min"
    },
    {
      id: 3,
      type: 'podcast',
      title: "Voix de la Communauté #15 - Spécial Budget 2024",
      excerpt: "Discussion avec la maire Marie Dubois sur les priorités budgétaires et les grands projets de l'année.",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Politique",
      author: "Équipe Podcast",
      publishedAt: "2024-02-15T09:00:00Z",
      duration: "32min"
    },
    {
      id: 4,
      type: 'event',
      title: "Concert de Printemps",
      excerpt: "Concert exceptionnel avec l'orchestre municipal et des invités surprises.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Culture",
      date: "2024-02-22",
      time: "20:30",
      location: "Salle des Fêtes"
    },
    {
      id: 5,
      type: 'dossier',
      title: "Rénovation Urbaine 2024-2026",
      excerpt: "Dossier complet sur le grand projet de rénovation du centre-ville : planning, budget, impact sur les habitants et commerces.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Urbanisme",
      author: "Équipe Rédaction",
      publishedAt: "2024-02-10T00:00:00Z",
      articlesCount: 8
    }
  ];

  const filteredContent = allContent.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = contentType === 'all' || item.type === contentType;
    const matchesCategory = category === 'all' || item.category === category;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  const getTypeLabel = (type: string) => {
    const labels = {
      article: 'Article',
      video: 'Vidéo',
      podcast: 'Podcast',
      event: 'Événement',
      dossier: 'Dossier'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      article: 'bg-blue-100 text-blue-800',
      video: 'bg-red-100 text-red-800',
      podcast: 'bg-purple-100 text-purple-800',
      event: 'bg-green-100 text-green-800',
      dossier: 'bg-indigo-100 text-indigo-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getItemUrl = (item: any) => {
    switch (item.type) {
      case 'article':
        return `/articles/${item.id}`;
      case 'video':
        return `/galerie/videos`;
      case 'podcast':
        return `/podcasts`;
      case 'event':
        return `/evenements/${item.id}`;
      case 'dossier':
        return `/dossiers/${item.id}`;
      default:
        return '#';
    }
  };

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
                <li className="text-gray-900">Rechercher</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-12 bg-primary rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Rechercher</h1>
                <p className="text-lg text-gray-600">Trouvez rapidement le contenu qui vous intéresse</p>
              </div>
              <Search className="w-8 h-8 text-primary ml-auto" />
            </div>
          </div>

          {/* Search Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="search"
                    placeholder="Rechercher des articles, vidéos, événements..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 text-lg h-12"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type de contenu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les contenus</SelectItem>
                      <SelectItem value="article">Articles</SelectItem>
                      <SelectItem value="video">Vidéos</SelectItem>
                      <SelectItem value="podcast">Podcasts</SelectItem>
                      <SelectItem value="event">Événements</SelectItem>
                      <SelectItem value="dossier">Dossiers</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les catégories</SelectItem>
                      <SelectItem value="Urbanisme">Urbanisme</SelectItem>
                      <SelectItem value="Culture">Culture</SelectItem>
                      <SelectItem value="Sport">Sport</SelectItem>
                      <SelectItem value="Économie">Économie</SelectItem>
                      <SelectItem value="Société">Société</SelectItem>
                      <SelectItem value="Politique">Politique</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Période" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les dates</SelectItem>
                      <SelectItem value="today">Aujourd'hui</SelectItem>
                      <SelectItem value="week">Cette semaine</SelectItem>
                      <SelectItem value="month">Ce mois</SelectItem>
                      <SelectItem value="year">Cette année</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search Results */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Résultats de recherche
                </h2>
                <p className="text-sm text-gray-500">
                  {filteredContent.length} résultat{filteredContent.length > 1 ? 's' : ''} trouvé{filteredContent.length > 1 ? 's' : ''}
                </p>
              </div>

              {/* Results List */}
              {filteredContent.length > 0 ? (
                <div className="space-y-6">
                  {filteredContent.map((item) => (
                    <Card key={`${item.type}-${item.id}`} className="news-card hover-lift">
                      <div className="flex">
                        <div className="relative w-32 h-24 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover rounded-l-lg"
                          />
                        </div>
                        <CardContent className="p-4 flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Badge className={getTypeColor(item.type)}>
                                {getTypeLabel(item.type)}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {item.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                            <Link href={getItemUrl(item)} className="hover:text-primary transition-colors">
                              {item.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {item.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center space-x-3">
                              {item.author && (
                                <div className="flex items-center space-x-1">
                                  <User className="w-3 h-3" />
                                  <span>{item.author}</span>
                                </div>
                              )}
                              {item.publishedAt && (
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{new Date(item.publishedAt).toLocaleDateString('fr-FR')}</span>
                                </div>
                              )}
                              {item.duration && (
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{item.duration}</span>
                                </div>
                              )}
                              {item.date && (
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{new Date(item.date).toLocaleDateString('fr-FR')}</span>
                                </div>
                              )}
                            </div>
                            {item.views && <span>{item.views} vues</span>}
                            {item.articlesCount && <span>{item.articlesCount} articles</span>}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Aucun résultat trouvé
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Essayez de modifier vos critères de recherche ou utilisez des mots-clés différents.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm('');
                        setContentType('all');
                        setCategory('all');
                        setDateRange('all');
                      }}
                    >
                      Réinitialiser la recherche
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Search Tips */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Conseils de recherche</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div>
                      <strong>Mots-clés :</strong> Utilisez des termes spécifiques pour des résultats plus précis
                    </div>
                    <div>
                      <strong>Guillemets :</strong> "expression exacte" pour rechercher une phrase complète
                    </div>
                    <div>
                      <strong>Filtres :</strong> Utilisez les filtres pour affiner vos résultats
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Searches */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Recherches populaires</h3>
                  <div className="space-y-2">
                    {['budget 2024', 'festival musique', 'travaux place', 'sport local', 'environnement'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchTerm(term)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-primary transition-colors py-1"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Content Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Contenu disponible</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Articles</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vidéos</span>
                      <span className="font-medium">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Podcasts</span>
                      <span className="font-medium">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Événements</span>
                      <span className="font-medium">42</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dossiers</span>
                      <span className="font-medium">8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RechercherPage;