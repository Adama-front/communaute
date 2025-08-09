import Link from 'next/link';
import { Clock, ExternalLink, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DepechesPage = () => {
  const depeches = [
    {
      id: 1,
      title: "Nouvelle réglementation sur les déchets verts",
      excerpt: "La préfecture annonce de nouvelles règles pour la collecte des déchets verts dans toutes les communes du département.",
      source: "Préfecture",
      publishedAt: "2024-02-15T14:30:00Z",
      category: "Réglementation",
      external: true,
      url: "#"
    },
    {
      id: 2,
      title: "Subventions régionales pour la transition énergétique",
      excerpt: "La région lance un nouveau programme d'aide financière pour les projets d'économie d'énergie des collectivités.",
      source: "Conseil Régional",
      publishedAt: "2024-02-15T11:45:00Z",
      category: "Environnement",
      external: true,
      url: "#"
    },
    {
      id: 3,
      title: "Alerte météo: risque de verglas cette nuit",
      excerpt: "Météo France place le département en vigilance jaune pour risque de verglas entre 22h et 8h.",
      source: "Météo France",
      publishedAt: "2024-02-15T16:20:00Z",
      category: "Météo",
      external: true,
      url: "#"
    },
    {
      id: 4,
      title: "Transport scolaire: perturbations prévues",
      excerpt: "Grève partielle des conducteurs de bus scolaires jeudi. Certaines lignes pourraient être impactées.",
      source: "Conseil Départemental",
      publishedAt: "2024-02-15T09:15:00Z",
      category: "Transport",
      external: true,
      url: "#"
    },
    {
      id: 5,
      title: "Campagne de vaccination grippe prolongée",
      excerpt: "L'ARS prolonge la campagne de vaccination contre la grippe jusqu'à fin mars dans tous les centres de santé.",
      source: "ARS",
      publishedAt: "2024-02-14T15:30:00Z",
      category: "Santé",
      external: true,
      url: "#"
    },
    {
      id: 6,
      title: "Nouveau dispositif d'aide aux entreprises",
      excerpt: "La CCI lance un programme d'accompagnement pour les TPE/PME en difficulté suite à la crise économique.",
      source: "CCI",
      publishedAt: "2024-02-14T10:20:00Z",
      category: "Économie",
      external: true,
      url: "#"
    },
    {
      id: 7,
      title: "Travaux sur l'autoroute A6 ce weekend",
      excerpt: "Fermeture partielle de l'A6 dans le sens Paris-Province entre les sorties 15 et 17 samedi de 22h à 6h.",
      source: "APRR",
      publishedAt: "2024-02-14T08:45:00Z",
      category: "Transport",
      external: true,
      url: "#"
    },
    {
      id: 8,
      title: "Concours de recrutement fonction publique",
      excerpt: "Ouverture des inscriptions pour les concours de la fonction publique territoriale. Date limite: 15 mars.",
      source: "CDG",
      publishedAt: "2024-02-13T14:00:00Z",
      category: "Emploi",
      external: true,
      url: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Réglementation': 'bg-gray-100 text-gray-800',
      'Environnement': 'bg-green-100 text-green-800',
      'Météo': 'bg-blue-100 text-blue-800',
      'Transport': 'bg-orange-100 text-orange-800',
      'Santé': 'bg-red-100 text-red-800',
      'Économie': 'bg-purple-100 text-purple-800',
      'Emploi': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
                <li className="text-gray-900">Dépêches</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-primary rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dépêches</h1>
                <p className="text-lg text-gray-600">Informations officielles et communiqués institutionnels</p>
              </div>
              <Globe className="w-8 h-8 text-primary ml-auto" />
            </div>
          </div>

          {/* Info Banner */}
          <div className="mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">À propos des dépêches</h3>
                    <p className="text-blue-800 text-sm">
                      Cette section regroupe les communiqués officiels, annonces institutionnelles et informations 
                      provenant des organismes publics qui peuvent concerner notre commune et ses habitants.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {depeches.map((depeche) => (
                  <Card key={depeche.id} className="news-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className={getCategoryColor(depeche.category)}>
                            {depeche.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {depeche.source}
                          </Badge>
                          {depeche.external && (
                            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Externe
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{new Date(depeche.publishedAt).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                        {depeche.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {depeche.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Source: {depeche.source} • {new Date(depeche.publishedAt).toLocaleTimeString('fr-FR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            Lire la suite
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Charger plus de dépêches
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Sources */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Sources Officielles</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Préfecture</span>
                      <Badge variant="outline" className="text-xs">3</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Conseil Régional</span>
                      <Badge variant="outline" className="text-xs">2</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Conseil Départemental</span>
                      <Badge variant="outline" className="text-xs">1</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">ARS</span>
                      <Badge variant="outline" className="text-xs">1</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Météo France</span>
                      <Badge variant="outline" className="text-xs">1</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Catégories</h3>
                  <div className="space-y-2">
                    {['Transport', 'Environnement', 'Santé', 'Économie', 'Réglementation', 'Emploi', 'Météo'].map((category) => {
                      const count = depeches.filter(d => d.category === category).length;
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

              {/* Quick Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Liens Utiles</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Site de la Préfecture
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Conseil Régional
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Service Public
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Météo France
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Alert Subscription */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Alertes Dépêches</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez les dépêches importantes par email
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
        </div>
      </div>
    </Layout>
  );
};

export default DepechesPage;