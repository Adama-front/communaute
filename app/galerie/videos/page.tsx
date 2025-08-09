'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Calendar, Eye, Clock, Filter } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');

  const categories = ['Toutes', 'Événements', 'Conseil Municipal', 'Sport', 'Culture', 'Interviews'];

  const videos = [
    {
      id: 1,
      title: 'Conseil Municipal du 15 février 2024',
      description: 'Séance complète du conseil municipal avec présentation du budget 2024',
      thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Conseil Municipal',
      duration: '1h 45min',
      publishedAt: '2024-02-15',
      views: 234,
      featured: true
    },
    {
      id: 2,
      title: 'Festival de Musique 2024 - Highlights',
      description: 'Les meilleurs moments du festival avec les artistes locaux',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Événements',
      duration: '12min',
      publishedAt: '2024-02-14',
      views: 567,
      featured: false
    },
    {
      id: 3,
      title: 'Interview du Maire - Projets 2024',
      description: 'Entretien avec Marie Dubois sur les grands projets de l\'année',
      thumbnail: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Interviews',
      duration: '25min',
      publishedAt: '2024-02-13',
      views: 423,
      featured: false
    },
    {
      id: 4,
      title: 'Match de Football - Finale Régionale',
      description: 'Notre équipe locale en finale du championnat régional',
      thumbnail: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Sport',
      duration: '8min',
      publishedAt: '2024-02-12',
      views: 789,
      featured: false
    },
    {
      id: 5,
      title: 'Exposition 50 ans d\'Histoire - Visite Guidée',
      description: 'Découverte de l\'exposition avec le commissaire d\'exposition',
      thumbnail: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Culture',
      duration: '18min',
      publishedAt: '2024-02-11',
      views: 345,
      featured: false
    },
    {
      id: 6,
      title: 'Inauguration du Complexe Sportif',
      description: 'Cérémonie d\'inauguration du nouveau complexe sportif municipal',
      thumbnail: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Événements',
      duration: '15min',
      publishedAt: '2024-02-10',
      views: 456,
      featured: false
    },
    {
      id: 7,
      title: 'Marché Local - Reportage',
      description: 'À la découverte des producteurs et commerçants de notre marché',
      thumbnail: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Événements',
      duration: '10min',
      publishedAt: '2024-02-09',
      views: 298,
      featured: false
    },
    {
      id: 8,
      title: 'Concert de Jazz - Salle des Fêtes',
      description: 'Concert exceptionnel du quartet de jazz local',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Culture',
      duration: '22min',
      publishedAt: '2024-02-08',
      views: 512,
      featured: false
    }
  ];

  const filteredVideos = selectedCategory === 'Toutes' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const featuredVideo = filteredVideos.find(video => video.featured);
  const regularVideos = filteredVideos.filter(video => !video.featured);

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
                <li><Link href="/galerie" className="hover:text-primary">Galerie</Link></li>
                <li>/</li>
                <li className="text-gray-900">Vidéos</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-red-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Galerie Vidéos</h1>
                <p className="text-lg text-gray-600">Revivez les moments forts de notre commune en vidéo</p>
              </div>
              <Play className="w-8 h-8 text-red-600 ml-auto" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Trier par..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Plus récentes</SelectItem>
                  <SelectItem value="popular">Plus vues</SelectItem>
                  <SelectItem value="duration">Durée</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {filteredVideos.length} vidéo{filteredVideos.length > 1 ? 's' : ''} 
              {selectedCategory !== 'Toutes' && ` dans "${selectedCategory}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Video */}
              {featuredVideo && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm mr-3">À LA UNE</span>
                    Vidéo en vedette
                  </h2>
                  <Card className="news-card hover-lift">
                    <div className="relative">
                      <div className="relative h-64 md:h-80">
                        <img
                          src={featuredVideo.thumbnail}
                          alt={featuredVideo.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-colors cursor-pointer">
                            <Play className="w-8 h-8 text-gray-900" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-red-600 text-white">
                            {featuredVideo.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <Badge variant="outline" className="bg-black/70 text-white border-white/30">
                            {featuredVideo.duration}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                          {featuredVideo.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {featuredVideo.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(featuredVideo.publishedAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{featuredVideo.views} vues</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{featuredVideo.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Button size="lg">
                          <Play className="w-4 h-4 mr-2" />
                          Regarder la vidéo
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              )}

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularVideos.map((video) => (
                  <Card key={video.id} className="news-card hover-lift group cursor-pointer">
                    <div className="relative">
                      <div className="relative h-48">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-white transition-colors">
                            <Play className="w-6 h-6 text-gray-900" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge variant="outline" className="bg-white/90 text-gray-700 text-xs">
                            {video.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <Badge variant="outline" className="bg-black/70 text-white border-white/30 text-xs">
                            {video.duration}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {video.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(video.publishedAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{video.views}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Charger plus de vidéos
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Most Watched */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Les Plus Vues</h3>
                  <div className="space-y-4">
                    {videos
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 3)
                      .map((video, index) => (
                        <div key={video.id} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </span>
                          <div className="flex-grow">
                            <h4 className="text-sm font-medium leading-tight mb-1">
                              {video.title}
                            </h4>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <Eye className="w-3 h-3" />
                              <span>{video.views} vues</span>
                              <Clock className="w-3 h-3" />
                              <span>{video.duration}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Par Catégorie</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = videos.filter(video => video.category === category).length;
                      return (
                        <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`text-sm text-left hover:text-primary transition-colors ${
                              selectedCategory === category ? 'text-primary font-medium' : 'text-gray-700'
                            }`}
                          >
                            {category}
                          </button>
                          <Badge variant="outline" className="text-xs">
                            {count}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Video Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Informations</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total vidéos</span>
                      <span className="font-medium">{videos.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vues totales</span>
                      <span className="font-medium">{videos.reduce((sum, video) => sum + video.views, 0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dernière mise à jour</span>
                      <span className="font-medium">Aujourd'hui</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subscribe */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Notifications Vidéos</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Soyez alerté lors de la publication de nouvelles vidéos
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full p-2 border rounded text-sm"
                    />
                    <Button size="sm" className="w-full">
                      S'abonner
                    </Button>
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

export default VideoGallery;