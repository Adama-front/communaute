'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, Search, Filter, Users } from 'lucide-react';
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

const SocietePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const societyArticles = [
    {
      id: 401,
      title: 'Solidarité: collecte alimentaire exceptionnelle',
      excerpt: 'Les associations locales se mobilisent pour organiser une grande collecte alimentaire au profit des plus démunis.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sophie Laurent',
      publishedAt: '2024-02-15T08:30:00Z',
      readTime: 4,
      views: 834,
      category: 'Solidarité',
      featured: true
    },
    {
      id: 402,
      title: 'Transport: nouvelle ligne de bus gratuite',
      excerpt: 'Amélioration de la mobilité pour tous les habitants avec une nouvelle ligne desservant les quartiers périphériques.',
      image: 'https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Jean Martin',
      publishedAt: '2024-02-13T14:20:00Z',
      readTime: 3,
      views: 567,
      category: 'Transport'
    },
    {
      id: 403,
      title: 'Éducation: rénovation de l\'école primaire',
      excerpt: 'Travaux de modernisation des classes et création d\'une nouvelle bibliothèque pour les élèves.',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Marie Dubois',
      publishedAt: '2024-02-12T10:45:00Z',
      readTime: 5,
      views: 692,
      category: 'Éducation'
    },
    {
      id: 404,
      title: 'Santé: nouveau cabinet médical',
      excerpt: 'Ouverture d\'un cabinet médical de groupe pour améliorer l\'accès aux soins de proximité.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Pierre Moreau',
      publishedAt: '2024-02-11T16:15:00Z',
      readTime: 4,
      views: 723,
      category: 'Santé'
    },
    {
      id: 405,
      title: 'Environnement: opération nettoyage citoyen',
      excerpt: 'Les habitants se mobilisent pour une grande opération de nettoyage des espaces publics.',
      image: 'https://images.pexels.com/photos/2909077/pexels-photo-2909077.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Claire Durand',
      publishedAt: '2024-02-10T09:30:00Z',
      readTime: 3,
      views: 445,
      category: 'Environnement'
    },
    {
      id: 406,
      title: 'Logement: programme d\'aide aux jeunes',
      excerpt: 'Lancement d\'un dispositif d\'accompagnement pour faciliter l\'accès au logement des jeunes actifs.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Thomas Bernard',
      publishedAt: '2024-02-09T13:00:00Z',
      readTime: 4,
      views: 512,
      category: 'Logement'
    }
  ];

  const filteredArticles = societyArticles.filter(article =>
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
                <li className="text-gray-900">Société</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-red-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Société</h1>
                <p className="text-lg text-gray-600">Actualités sociales et vie communautaire</p>
              </div>
              <Users className="w-8 h-8 text-red-600 ml-auto" />
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
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm mr-3">À LA UNE</span>
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
                          <Badge className="bg-red-600 text-white">
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
              {/* Social Initiatives */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Initiatives Citoyennes</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-600 pl-3 py-2">
                      <h4 className="font-medium text-gray-900 text-sm">Collecte Alimentaire</h4>
                      <p className="text-xs text-gray-500">En cours - Jusqu'au 20 février</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-3 py-2">
                      <h4 className="font-medium text-gray-900 text-sm">Nettoyage Citoyen</h4>
                      <p className="text-xs text-gray-500">Samedi 17 février - 9h00</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-3 py-2">
                      <h4 className="font-medium text-gray-900 text-sm">Aide aux Devoirs</h4>
                      <p className="text-xs text-gray-500">Tous les mercredis - 16h00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Thématiques</h3>
                  <div className="space-y-2">
                    {['Solidarité', 'Éducation', 'Santé', 'Transport', 'Logement', 'Environnement'].map((category) => (
                      <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm text-gray-700">{category}</span>
                        <Badge variant="outline" className="text-xs">
                          {Math.floor(Math.random() * 8) + 1}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Associations */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Associations Actives</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-900">Secours Populaire</h4>
                      <p className="text-gray-600 text-xs">Aide alimentaire et vestimentaire</p>
                    </div>
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-900">Les Bénévoles Unis</h4>
                      <p className="text-gray-600 text-xs">Accompagnement des seniors</p>
                    </div>
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-900">Éco-Citoyens</h4>
                      <p className="text-gray-600 text-xs">Protection de l'environnement</p>
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

export default SocietePage;