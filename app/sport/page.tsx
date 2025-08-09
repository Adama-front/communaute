'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, Search, Filter, Trophy } from 'lucide-react';
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

const SportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const sportArticles = [
    {
      id: 201,
      title: 'Championnat régional: nos équipes en finale',
      excerpt: 'Trois équipes locales se qualifient pour les finales régionales dans différentes disciplines sportives.',
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Pierre Moreau',
      publishedAt: '2024-02-15T16:30:00Z',
      readTime: 4,
      views: 892,
      category: 'Football',
      featured: true
    },
    {
      id: 202,
      title: 'Nouveaux cours de fitness pour seniors',
      excerpt: 'Un programme adapté pour maintenir la forme après 60 ans, encadré par des professionnels.',
      image: 'https://images.pexels.com/photos/853247/pexels-photo-853247.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sophie Laurent',
      publishedAt: '2024-02-13T10:15:00Z',
      readTime: 3,
      views: 567,
      category: 'Fitness'
    },
    {
      id: 203,
      title: 'Inauguration du nouveau complexe sportif',
      excerpt: 'Un équipement moderne de 1000m² pour développer la pratique sportive locale.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Marie Dubois',
      publishedAt: '2024-02-12T14:20:00Z',
      readTime: 5,
      views: 734,
      category: 'Équipements'
    },
    {
      id: 204,
      title: 'Marathon communal: 500 participants attendus',
      excerpt: 'La course annuelle de notre commune attire de plus en plus de coureurs de la région.',
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Jean Martin',
      publishedAt: '2024-02-11T09:45:00Z',
      readTime: 4,
      views: 623,
      category: 'Course à pied'
    },
    {
      id: 205,
      title: 'Tennis: tournoi jeunes ce weekend',
      excerpt: 'Les courts municipaux accueillent la compétition départementale des moins de 16 ans.',
      image: 'https://images.pexels.com/photos/1405355/pexels-photo-1405355.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Claire Durand',
      publishedAt: '2024-02-10T15:30:00Z',
      readTime: 3,
      views: 445,
      category: 'Tennis'
    },
    {
      id: 206,
      title: 'Natation: nouveaux créneaux à la piscine',
      excerpt: 'Extension des horaires d\'ouverture pour répondre à la demande croissante.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Thomas Bernard',
      publishedAt: '2024-02-09T11:00:00Z',
      readTime: 2,
      views: 389,
      category: 'Natation'
    }
  ];

  const filteredArticles = sportArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.views - a.views;
      case 'oldest':
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      default: // recent
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    }
  });

  const featuredArticle = sortedArticles.find(article => article.featured);
  const regularArticles = sortedArticles.filter(article => !article.featured);

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
                <li className="text-gray-900">Sport</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-blue-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Sport</h1>
                <p className="text-lg text-gray-600">Actualités sportives et événements de notre commune</p>
              </div>
              <Trophy className="w-8 h-8 text-blue-600 ml-auto" />
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="search"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Plus récents</SelectItem>
                    <SelectItem value="popular">Plus populaires</SelectItem>
                    <SelectItem value="oldest">Plus anciens</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Article */}
              {featuredArticle && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm mr-3">À LA UNE</span>
                    Article en vedette
                  </h2>
                  <Card className="news-card hover-lift">
                    <div className="md:flex">
                      <div className="relative md:w-1/2 h-64 md:h-auto">
                        <Image
                          src={featuredArticle.image}
                          alt={featuredArticle.title}
                          fill
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 text-white">
                            {featuredArticle.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="md:w-1/2 p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                          <Link href={`/articles/${featuredArticle.id}`} className="hover:text-primary transition-colors">
                            {featuredArticle.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {featuredArticle.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{featuredArticle.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{new Date(featuredArticle.publishedAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                          </div>
                          <span>{featuredArticle.views} vues</span>
                        </div>
                        <Button asChild>
                          <Link href={`/articles/${featuredArticle.id}`}>
                            Lire l'article complet
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              )}

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularArticles.map((article) => (
                  <Card key={article.id} className="news-card hover-lift">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-white/90 text-gray-700">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                        <Link href={`/articles/${article.id}`} className="hover:text-primary transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR')}</span>
                          </div>
                        </div>
                        <span>{article.views} vues</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Charger plus d'articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Sports Calendar */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Prochains Événements</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-600 pl-3 py-2">
                      <h4 className="font-medium text-gray-900 text-sm">Tournoi de Tennis</h4>
                      <p className="text-xs text-gray-500">Samedi 17 février - 14h00</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-3 py-2">
                      <h4 className="font-medium text-gray-900 text-sm">Match de Football</h4>
                      <p className="text-xs text-gray-500">Dimanche 18 février - 15h30</p>
                    </div>
                    <div className="border-l-4 border-orange-600 pl-3 py-2">
                      <h4 className="font-medium text-gray-900 text-sm">Course à pied</h4>
                      <p className="text-xs text-gray-500">Samedi 24 février - 09h00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sports Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Disciplines</h3>
                  <div className="space-y-2">
                    {['Football', 'Tennis', 'Natation', 'Course à pied', 'Fitness', 'Basketball'].map((sport) => (
                      <div key={sport} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm text-gray-700">{sport}</span>
                        <Badge variant="outline" className="text-xs">
                          {Math.floor(Math.random() * 15) + 1}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Club Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Clubs Locaux</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-900">FC Communal</h4>
                      <p className="text-gray-600 text-xs">Football - 150 licenciés</p>
                    </div>
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-900">Tennis Club</h4>
                      <p className="text-gray-600 text-xs">Tennis - 85 licenciés</p>
                    </div>
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-900">Aqua Sport</h4>
                      <p className="text-gray-600 text-xs">Natation - 120 licenciés</p>
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

export default SportPage;