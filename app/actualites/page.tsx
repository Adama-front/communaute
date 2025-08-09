'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, Search, Filter, Newspaper } from 'lucide-react';
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

const ActualitesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [filterCategory, setFilterCategory] = useState('all');

  const allArticles = [
    {
      id: 1,
      title: "Nouveau projet urbain: La place centrale sera rénovée",
      excerpt: "Un investissement de 2,5 millions d'euros pour moderniser le cœur de notre ville avec des espaces verts et une fontaine interactive.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Urbanisme",
      author: "Marie Dubois",
      publishedAt: "2024-02-15T10:30:00Z",
      readTime: 5,
      views: 1247,
      featured: true
    },
    {
      id: 2,
      title: "Festival de musique: 50 artistes locaux à l'honneur",
      excerpt: "Le festival annuel met en lumière les talents de notre région avec trois jours de concerts gratuits.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Culture",
      author: "Jean Martin",
      publishedAt: "2024-02-14T14:20:00Z",
      readTime: 4,
      views: 892
    },
    {
      id: 101,
      title: 'Marché local: hausse de 15% de la fréquentation',
      excerpt: 'Les commerçants locaux observent une reprise encourageante.',
      image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Économie',
      author: 'Sophie Laurent',
      publishedAt: '2024-02-15T09:00:00Z',
      readTime: 3,
      views: 654
    },
    {
      id: 201,
      title: 'Championnat régional: nos équipes en finale',
      excerpt: 'Trois équipes locales se qualifient pour les finales régionales.',
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Sport',
      author: 'Pierre Moreau',
      publishedAt: '2024-02-15T16:30:00Z',
      readTime: 4,
      views: 892
    },
    {
      id: 401,
      title: 'Solidarité: collecte alimentaire exceptionnelle',
      excerpt: 'Les associations locales mobilisées pour les plus démunis.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Société',
      author: 'Sophie Laurent',
      publishedAt: '2024-02-15T08:30:00Z',
      readTime: 4,
      views: 834
    }
  ];

  const categories = ['all', 'Urbanisme', 'Culture', 'Économie', 'Sport', 'Société'];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

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
                <li className="text-gray-900">Actualités</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-primary rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Toutes les Actualités</h1>
                <p className="text-lg text-gray-600">Retrouvez toute l'information de notre commune</p>
              </div>
              <Newspaper className="w-8 h-8 text-primary ml-auto" />
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
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                    <span className="bg-primary text-white px-2 py-1 rounded text-sm mr-3">À LA UNE</span>
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
                          <Badge className="bg-primary text-white">
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
              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Catégories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <button
                          onClick={() => setFilterCategory(category)}
                          className={`text-sm text-left hover:text-primary transition-colors ${
                            filterCategory === category ? 'text-primary font-medium' : 'text-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                        <Badge variant="outline" className="text-xs">
                          {allArticles.filter(article => article.category === category).length}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Most Read */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Les Plus Lus</h3>
                  <div className="space-y-4">
                    {allArticles
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 3)
                      .map((article, index) => (
                        <div key={article.id} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </span>
                          <div className="flex-grow">
                            <h4 className="text-sm font-medium leading-tight mb-1">
                              <Link href={`/articles/${article.id}`} className="hover:text-primary">
                                {article.title}
                              </Link>
                            </h4>
                            <p className="text-xs text-gray-500">{article.views} vues</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez nos actualités directement dans votre boîte mail
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

export default ActualitesPage;