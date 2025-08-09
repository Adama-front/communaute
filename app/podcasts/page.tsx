'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Pause, Calendar, Clock, Download, Headphones } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PodcastsPage = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const podcasts = [
    {
      id: 1,
      title: "Voix de la Communauté #15 - Spécial Budget 2024",
      description: "Discussion avec la maire Marie Dubois sur les priorités budgétaires et les grands projets de l'année.",
      duration: "32:45",
      publishedAt: "2024-02-15",
      category: "Politique",
      guests: ["Marie Dubois", "Jean Martin"],
      downloadUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Rencontre avec les Artisans Locaux",
      description: "Portrait de trois artisans qui font vivre notre commune : boulanger, menuisier et potière.",
      duration: "28:12",
      publishedAt: "2024-02-08",
      category: "Économie",
      guests: ["Pierre Boulanger", "Marie Menuisier", "Sophie Potière"],
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Histoire de Notre Commune - Épisode 3",
      description: "Retour sur les années 1960-1980 avec des témoignages d'anciens habitants.",
      duration: "41:20",
      publishedAt: "2024-02-01",
      category: "Culture",
      guests: ["Robert Ancien", "Micheline Témoin"],
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Sport Local - Bilan de Saison",
      description: "Rencontre avec les présidents des clubs sportifs pour faire le bilan de la saison.",
      duration: "25:30",
      publishedAt: "2024-01-25",
      category: "Sport",
      guests: ["Coach Football", "Président Tennis"],
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Environnement - Nos Actions Vertes",
      description: "Focus sur les initiatives écologiques de la commune et les projets futurs.",
      duration: "35:15",
      publishedAt: "2024-01-18",
      category: "Environnement",
      guests: ["Éco-Conseiller", "Responsable Espaces Verts"],
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Jeunesse - Paroles d'Ados",
      description: "Les jeunes de la commune s'expriment sur leurs attentes et leurs projets.",
      duration: "22:45",
      publishedAt: "2024-01-11",
      category: "Société",
      guests: ["Conseil Municipal Jeunes"],
      downloadUrl: "#"
    }
  ];

  const categories = ['Tous', 'Politique', 'Économie', 'Culture', 'Sport', 'Environnement', 'Société'];
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredPodcasts = selectedCategory === 'Tous' 
    ? podcasts 
    : podcasts.filter(podcast => podcast.category === selectedCategory);

  const handlePlayPause = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Politique': 'bg-blue-100 text-blue-800',
      'Économie': 'bg-green-100 text-green-800',
      'Culture': 'bg-purple-100 text-purple-800',
      'Sport': 'bg-orange-100 text-orange-800',
      'Environnement': 'bg-emerald-100 text-emerald-800',
      'Société': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const featuredPodcast = filteredPodcasts.find(podcast => podcast.featured);
  const regularPodcasts = filteredPodcasts.filter(podcast => !podcast.featured);

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
                <li className="text-gray-900">Podcasts</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-purple-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Podcasts</h1>
                <p className="text-lg text-gray-600">Écoutez les voix de notre communauté</p>
              </div>
              <Headphones className="w-8 h-8 text-purple-600 ml-auto" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
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
            <p className="text-sm text-gray-500">
              {filteredPodcasts.length} épisode{filteredPodcasts.length > 1 ? 's' : ''} 
              {selectedCategory !== 'Tous' && ` dans "${selectedCategory}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Podcast */}
              {featuredPodcast && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm mr-3">DERNIER ÉPISODE</span>
                    Podcast en vedette
                  </h2>
                  <Card className="news-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                            <Headphones className="w-12 h-12 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <Badge className={getCategoryColor(featuredPodcast.category)} variant="outline">
                            {featuredPodcast.category}
                          </Badge>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
                            {featuredPodcast.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {featuredPodcast.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(featuredPodcast.publishedAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{featuredPodcast.duration}</span>
                            </div>
                          </div>
                          <div className="mb-4">
                            <p className="text-sm text-gray-600">
                              <strong>Invités:</strong> {featuredPodcast.guests.join(', ')}
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Button 
                              size="lg"
                              onClick={() => handlePlayPause(featuredPodcast.id)}
                            >
                              {playingId === featuredPodcast.id ? (
                                <Pause className="w-4 h-4 mr-2" />
                              ) : (
                                <Play className="w-4 h-4 mr-2" />
                              )}
                              {playingId === featuredPodcast.id ? 'Pause' : 'Écouter'}
                            </Button>
                            <Button variant="outline" size="lg">
                              <Download className="w-4 h-4 mr-2" />
                              Télécharger
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Podcast List */}
              <div className="space-y-6">
                {regularPodcasts.map((podcast) => (
                  <Card key={podcast.id} className="news-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                            <Headphones className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <Badge className={getCategoryColor(podcast.category)} variant="outline">
                              {podcast.category}
                            </Badge>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handlePlayPause(podcast.id)}
                              >
                                {playingId === podcast.id ? (
                                  <Pause className="w-4 h-4" />
                                ) : (
                                  <Play className="w-4 h-4" />
                                )}
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                            {podcast.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                            {podcast.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(podcast.publishedAt).toLocaleDateString('fr-FR')}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{podcast.duration}</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">
                              Invités: {podcast.guests.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* About Podcast */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">À propos du Podcast</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    "Voix de la Communauté" est le podcast officiel de notre commune. 
                    Chaque épisode donne la parole aux habitants, élus et acteurs locaux.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fréquence</span>
                      <span className="font-medium">Bi-mensuel</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée moyenne</span>
                      <span className="font-medium">30 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total épisodes</span>
                      <span className="font-medium">{podcasts.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Thématiques</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = podcasts.filter(podcast => podcast.category === category).length;
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

              {/* Subscribe */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">S'abonner</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Ne manquez aucun épisode ! Abonnez-vous sur votre plateforme préférée.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      🎵 Apple Podcasts
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      🎧 Spotify
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      📻 Google Podcasts
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      📱 RSS Feed
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Participez</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Vous avez une idée de sujet ou souhaitez témoigner ? Contactez-nous !
                  </p>
                  <Button size="sm" className="w-full">
                    Proposer un sujet
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PodcastsPage;