import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ArrowRight, TrendingUp, AlertCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const UneActualitesPage = () => {
  const featuredNews = [
    {
      id: 1,
      title: "Nouveau projet urbain: La place centrale sera rénovée",
      excerpt: "Un investissement de 2,5 millions d'euros pour moderniser le cœur de notre ville avec des espaces verts et une fontaine interactive.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Urbanisme",
      author: "Marie Dubois",
      publishedAt: "2024-02-15T10:30:00Z",
      readTime: 5,
      views: 1247,
      priority: 1
    },
    {
      id: 2,
      title: "Festival de musique: 50 artistes locaux à l'honneur",
      excerpt: "Le festival annuel met en lumière les talents de notre région avec trois jours de concerts gratuits.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Culture",
      author: "Jean Martin",
      publishedAt: "2024-02-14T14:20:00Z",
      readTime: 4,
      views: 892,
      priority: 2
    },
    {
      id: 401,
      title: "Solidarité: collecte alimentaire exceptionnelle",
      excerpt: "Les associations locales se mobilisent pour organiser une grande collecte alimentaire au profit des plus démunis.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Société",
      author: "Sophie Laurent",
      publishedAt: "2024-02-15T08:30:00Z",
      readTime: 4,
      views: 834,
      priority: 3
    },
    {
      id: 101,
      title: "Marché local: hausse de 15% de la fréquentation",
      excerpt: "Les commerçants locaux observent une reprise encourageante avec une augmentation significative du nombre de visiteurs.",
      image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Économie",
      author: "Pierre Moreau",
      publishedAt: "2024-02-14T16:45:00Z",
      readTime: 3,
      views: 756,
      priority: 4
    },
    {
      id: 201,
      title: "Championnat régional: nos équipes en finale",
      excerpt: "Trois équipes locales se qualifient pour les finales régionales dans différentes disciplines sportives.",
      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sport",
      author: "Claire Durand",
      publishedAt: "2024-02-13T19:20:00Z",
      readTime: 4,
      views: 923,
      priority: 5
    },
    {
      id: 301,
      title: "Exposition: 50 ans d'histoire locale",
      excerpt: "Une rétrospective photographique émouvante à la médiathèque retrace l'évolution de notre commune.",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Culture",
      author: "Thomas Bernard",
      publishedAt: "2024-02-13T11:15:00Z",
      readTime: 5,
      views: 645,
      priority: 6
    }
  ];

  const breakingNews = [
    {
      id: 501,
      title: "URGENT: Fermeture temporaire de la rue principale",
      excerpt: "Travaux d'urgence sur les canalisations - circulation déviée",
      publishedAt: "2024-02-15T16:45:00Z",
      category: "Urgent"
    },
    {
      id: 502,
      title: "Conseil municipal extraordinaire ce soir",
      excerpt: "Séance publique à 18h en salle des fêtes",
      publishedAt: "2024-02-15T15:30:00Z",
      category: "Politique"
    },
    {
      id: 503,
      title: "Alerte météo: risque de verglas cette nuit",
      excerpt: "Vigilance jaune activée - prudence sur les routes",
      publishedAt: "2024-02-15T17:00:00Z",
      category: "Météo"
    }
  ];

  const trendingTopics = [
    {
      id: 1,
      title: "Budget communal 2024",
      articles: 8,
      trend: "+25%"
    },
    {
      id: 2,
      title: "Rénovation urbaine",
      articles: 12,
      trend: "+40%"
    },
    {
      id: 3,
      title: "Festival local",
      articles: 6,
      trend: "+15%"
    },
    {
      id: 4,
      title: "Transport public",
      articles: 4,
      trend: "+30%"
    }
  ];

  const mainArticle = featuredNews[0];
  const secondaryArticles = featuredNews.slice(1, 3);
  const otherArticles = featuredNews.slice(3);

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
                <li><Link href="/actualites" className="hover:text-primary">Actualités</Link></li>
                <li>/</li>
                <li className="text-gray-900">À la Une</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-red-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">À la Une</h1>
                <p className="text-lg text-gray-600">Les actualités les plus importantes de notre commune</p>
              </div>
            </div>
          </div>

          {/* Breaking News */}
          <div className="mb-8">
            <div className="bg-red-600 text-white p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-3 flex items-center">
                <span className="animate-pulse mr-2">🔴</span>
                Dernières Minutes
              </h2>
              <div className="space-y-2">
                {breakingNews.map((news) => (
                  <div key={news.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{news.title}</h3>
                      <p className="text-sm text-red-100">{news.excerpt}</p>
                    </div>
                    <div className="text-xs text-red-200">
                      {new Date(news.publishedAt).toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Main Featured Article */}
              <div className="mb-8">
                <Card className="news-card hover-lift h-full">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={mainArticle.image}
                      alt={mainArticle.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white">
                        PRIORITÉ {mainArticle.priority}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-gray-700">
                        {mainArticle.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                      {mainArticle.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                      {mainArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{mainArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{new Date(mainArticle.publishedAt).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <span>{mainArticle.views} vues</span>
                      </div>
                    </div>
                    <Button asChild size="lg">
                      <Link href={`/articles/${mainArticle.id}`}>
                        Lire l'article complet
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Secondary Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {secondaryArticles.map((article) => (
                  <Card key={article.id} className="news-card hover-lift">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600 text-white text-xs">
                          {article.priority}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-gray-700 text-xs">
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

              {/* Other Important Articles */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Autres actualités importantes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {otherArticles.map((article) => (
                    <Card key={article.id} className="news-card hover-lift">
                      <div className="relative h-32">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-red-600 text-white text-xs">
                            {article.priority}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <Badge variant="outline" className="text-xs mb-2">
                          {article.category}
                        </Badge>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm leading-tight">
                          <Link href={`/articles/${article.id}`} className="hover:text-primary transition-colors">
                            {article.title}
                          </Link>
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR')}</span>
                          <span>{article.views} vues</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Trending Topics */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Sujets tendance
                  </h3>
                  <div className="space-y-3">
                    {trendingTopics.map((topic) => (
                      <div key={topic.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{topic.title}</h4>
                          <p className="text-xs text-gray-500">{topic.articles} articles</p>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                          {topic.trend}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Access */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Accès Rapide</h3>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <Link href="/flash-infos">
                        <AlertCircle className="w-4 h-4 mr-2 text-red-600" />
                        Flash Infos
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <Link href="/depeches">
                        📰 Dépêches officielles
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <Link href="/actualites">
                        📋 Toutes les actualités
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <Link href="/evenements">
                        📅 Agenda des événements
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Live Updates */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Mises à jour en direct
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-red-600 pl-3 py-2">
                      <p className="font-medium text-gray-900">17:15 - Circulation</p>
                      <p className="text-gray-600 text-xs">Rue principale fermée jusqu'à 19h</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-3 py-2">
                      <p className="font-medium text-gray-900">16:45 - Météo</p>
                      <p className="text-gray-600 text-xs">Alerte verglas activée pour cette nuit</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-3 py-2">
                      <p className="font-medium text-gray-900">15:30 - Conseil</p>
                      <p className="text-gray-600 text-xs">Séance extraordinaire à 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Newsletter Prioritaire</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez les actualités prioritaires en temps réel
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full p-2 border rounded text-sm"
                    />
                    <Button size="sm" className="w-full">
                      S'abonner aux alertes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Restez informé en temps réel
              </h3>
              <p className="text-gray-600 mb-6">
                Abonnez-vous à notre newsletter pour recevoir les actualités importantes directement dans votre boîte mail
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow px-4 py-2 border rounded-lg"
                />
                <Button>
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UneActualitesPage;