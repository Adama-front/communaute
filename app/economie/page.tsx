'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, Search, Filter, TrendingUp } from 'lucide-react';
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

const EconomiePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const economyArticles = [
    {
      id: 101,
      title: 'Marché local: hausse de 15% de la fréquentation',
      excerpt: 'Les commerçants locaux observent une reprise encourageante avec une augmentation significative du nombre de visiteurs.',
      image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sophie Laurent',
      publishedAt: '2024-02-15T09:00:00Z',
      readTime: 3,
      views: 654,
      category: 'Commerce Local',
      featured: true
    },
    {
      id: 102,
      title: 'Nouvelle zone artisanale en projet',
      excerpt: 'Un espace dédié aux métiers d\'art et à l\'artisanat local sera créé d\'ici fin 2024.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Pierre Moreau',
      publishedAt: '2024-02-14T14:30:00Z',
      readTime: 4,
      views: 432,
      category: 'Développement'
    },
    {
      id: 103,
      title: 'Trois nouvelles entreprises s\'installent',
      excerpt: 'L\'emploi local bénéficie de l\'arrivée de startups innovantes dans la zone industrielle.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Marie Dubois',
      publishedAt: '2024-02-13T11:15:00Z',
      readTime: 5,
      views: 789,
      category: 'Emploi'
    },
    {
      id: 104,
      title: 'Subventions pour les commerces de proximité',
      excerpt: 'La municipalité lance un programme d\'aide financière pour soutenir les petits commerces.',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Jean Martin',
      publishedAt: '2024-02-12T16:45:00Z',
      readTime: 4,
      views: 567,
      category: 'Politique Économique'
    },
    {
      id: 105,
      title: 'Tourisme: bilan positif de la saison',
      excerpt: 'Les hébergements locaux affichent un taux d\'occupation record pour cette période.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Claire Durand',
      publishedAt: '2024-02-11T10:20:00Z',
      readTime: 3,
      views: 445,
      category: 'Tourisme'
    },
    {
      id: 106,
      title: 'Coopérative agricole: nouveaux projets',
      excerpt: 'Les producteurs locaux s\'unissent pour développer de nouveaux circuits de distribution.',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Thomas Bernard',
      publishedAt: '2024-02-10T08:30:00Z',
      readTime: 6,
      views: 623,
      category: 'Agriculture'
    }
  ];

  const filteredArticles = economyArticles.filter(article =>
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
                <li className="text-gray-900">Économie</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-green-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Économie</h1>
                <p className="text-lg text-gray-600">Actualités économiques et commerciales de notre commune</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600 ml-auto" />
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
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm mr-3">À LA UNE</span>
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
                          <Badge className="bg-green-600 text-white">
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
              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Économie en Chiffres</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Commerces locaux</span>
                      <span className="font-semibold text-green-600">127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Emplois créés (2024)</span>
                      <span className="font-semibold text-green-600">+45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Taux de chômage</span>
                      <span className="font-semibold text-green-600">6.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Entreprises créées</span>
                      <span className="font-semibold text-green-600">23</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Catégories</h3>
                  <div className="space-y-2">
                    {['Commerce Local', 'Emploi', 'Tourisme', 'Agriculture', 'Développement', 'Politique Économique'].map((category) => (
                      <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm text-gray-700">{category}</span>
                        <Badge variant="outline" className="text-xs">
                          {Math.floor(Math.random() * 10) + 1}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Newsletter Économie</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez chaque semaine un résumé des actualités économiques locales
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Votre email"
                      className="text-sm"
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

export default EconomiePage;