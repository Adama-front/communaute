import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, FileText, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DossiersPage = () => {
  const dossiers = [
    {
      id: 1,
      title: "Rénovation Urbaine 2024-2026",
      description: "Dossier complet sur le grand projet de rénovation du centre-ville : planning, budget, impact sur les habitants et commerces.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Urbanisme",
      author: "Équipe Rédaction",
      publishedAt: "2024-02-10",
      readTime: 15,
      articlesCount: 8,
      status: "En cours",
      featured: true
    },
    {
      id: 2,
      title: "Transition Énergétique Communale",
      description: "Analyse des initiatives écologiques de la commune : panneaux solaires, éclairage LED, isolation des bâtiments publics.",
      image: "https://images.pexels.com/photos/2909077/pexels-photo-2909077.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Environnement",
      author: "Claire Durand",
      publishedAt: "2024-02-05",
      readTime: 12,
      articlesCount: 6,
      status: "Complet"
    },
    {
      id: 3,
      title: "Portrait des Commerces Locaux",
      description: "Série de portraits des commerçants et artisans qui font vivre notre commune au quotidien.",
      image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Économie",
      author: "Jean Martin",
      publishedAt: "2024-01-28",
      readTime: 20,
      articlesCount: 12,
      status: "Complet"
    },
    {
      id: 4,
      title: "Histoire de Notre Commune",
      description: "Retour sur 150 ans d'histoire locale à travers archives, témoignages et photographies d'époque.",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Culture",
      author: "Marie Dubois",
      publishedAt: "2024-01-20",
      readTime: 25,
      articlesCount: 10,
      status: "Complet"
    },
    {
      id: 5,
      title: "Sport et Jeunesse",
      description: "Focus sur les activités sportives proposées aux jeunes : clubs, infrastructures, événements et perspectives d'avenir.",
      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sport",
      author: "Pierre Moreau",
      publishedAt: "2024-01-15",
      readTime: 18,
      articlesCount: 7,
      status: "En cours"
    },
    {
      id: 6,
      title: "Solidarité et Associations",
      description: "Panorama des actions solidaires menées par les associations locales et les initiatives citoyennes.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Société",
      author: "Sophie Laurent",
      publishedAt: "2024-01-08",
      readTime: 14,
      articlesCount: 9,
      status: "Complet"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'En cours' 
      ? 'bg-orange-100 text-orange-800' 
      : 'bg-green-100 text-green-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Urbanisme': 'bg-blue-100 text-blue-800',
      'Environnement': 'bg-green-100 text-green-800',
      'Économie': 'bg-purple-100 text-purple-800',
      'Culture': 'bg-pink-100 text-pink-800',
      'Sport': 'bg-orange-100 text-orange-800',
      'Société': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const featuredDossier = dossiers.find(dossier => dossier.featured);
  const regularDossiers = dossiers.filter(dossier => !dossier.featured);

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
                <li className="text-gray-900">Dossiers</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-indigo-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dossiers Thématiques</h1>
                <p className="text-lg text-gray-600">Analyses approfondies et enquêtes sur les sujets qui vous concernent</p>
              </div>
              <FileText className="w-8 h-8 text-indigo-600 ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Dossier */}
              {featuredDossier && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-indigo-600 text-white px-2 py-1 rounded text-sm mr-3">DOSSIER PRINCIPAL</span>
                    En vedette
                  </h2>
                  <Card className="news-card hover-lift">
                    <div className="md:flex">
                      <div className="relative md:w-1/2 h-64 md:h-auto">
                        <Image
                          src={featuredDossier.image}
                          alt={featuredDossier.title}
                          fill
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(featuredDossier.category)}>
                            {featuredDossier.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className={getStatusColor(featuredDossier.status)}>
                            {featuredDossier.status}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="md:w-1/2 p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                          {featuredDossier.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {featuredDossier.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{featuredDossier.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{featuredDossier.readTime} min de lecture</span>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{featuredDossier.articlesCount} articles</span>
                            <span>Publié le {new Date(featuredDossier.publishedAt).toLocaleDateString('fr-FR')}</span>
                          </div>
                        </div>
                        <Button asChild size="lg">
                          <Link href={`/dossiers/${featuredDossier.id}`}>
                            Consulter le dossier
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              )}

              {/* Other Dossiers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularDossiers.map((dossier) => (
                  <Card key={dossier.id} className="news-card hover-lift">
                    <div className="relative h-48">
                      <Image
                        src={dossier.image}
                        alt={dossier.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(dossier.category)} variant="outline">
                          {dossier.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={getStatusColor(dossier.status)}>
                          {dossier.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                        <Link href={`/dossiers/${dossier.id}`} className="hover:text-primary transition-colors">
                          {dossier.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {dossier.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{dossier.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="w-3 h-3" />
                            <span>{dossier.articlesCount} articles</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {dossier.readTime} min de lecture
                        </span>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dossiers/${dossier.id}`}>
                            Lire
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Dossier Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Statistiques</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total dossiers</span>
                      <span className="font-semibold text-indigo-600">{dossiers.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">En cours</span>
                      <span className="font-semibold text-orange-600">
                        {dossiers.filter(d => d.status === 'En cours').length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Complets</span>
                      <span className="font-semibold text-green-600">
                        {dossiers.filter(d => d.status === 'Complet').length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Articles totaux</span>
                      <span className="font-semibold text-primary">
                        {dossiers.reduce((sum, d) => sum + d.articlesCount, 0)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Thématiques</h3>
                  <div className="space-y-2">
                    {['Urbanisme', 'Environnement', 'Économie', 'Culture', 'Sport', 'Société'].map((category) => {
                      const count = dossiers.filter(dossier => dossier.category === category).length;
                      return (
                        <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <span className="text-sm text-gray-700">{category}</span>
                          <Badge variant="outline" className="text-xs">
                            {count}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Updates */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Dernières Mises à Jour</h3>
                  <div className="space-y-3">
                    {dossiers
                      .filter(d => d.status === 'En cours')
                      .slice(0, 3)
                      .map((dossier) => (
                        <div key={dossier.id} className="text-sm">
                          <h4 className="font-medium text-gray-900 mb-1">
                            <Link href={`/dossiers/${dossier.id}`} className="hover:text-primary">
                              {dossier.title}
                            </Link>
                          </h4>
                          <p className="text-gray-500 text-xs">
                            Mis à jour le {new Date(dossier.publishedAt).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Alertes Dossiers</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Soyez notifié lors de la publication de nouveaux dossiers
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

export default DossiersPage;