'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, Clock, Filter, Zap } from 'lucide-react';
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

const FlashInfosPage = () => {
  const [filter, setFilter] = useState('all');
  const [autoRefresh, setAutoRefresh] = useState(true);

  const flashInfos = [
    {
      id: 1,
      title: "URGENT: Fermeture temporaire de la rue principale",
      content: "Travaux d'urgence sur les canalisations d'eau potable. Circulation déviée par la rue des Écoles. Durée estimée: 4 heures.",
      category: "Urgent",
      publishedAt: "2024-02-15T16:45:00Z",
      priority: "high",
      status: "active"
    },
    {
      id: 2,
      title: "Conseil municipal extraordinaire ce soir",
      content: "Séance publique à 18h en salle des fêtes. Ordre du jour: validation du budget travaux place centrale.",
      category: "Politique",
      publishedAt: "2024-02-15T15:30:00Z",
      priority: "medium",
      status: "active"
    },
    {
      id: 3,
      title: "Coupure d'électricité programmée demain",
      content: "Maintenance du réseau électrique de 9h à 12h dans le quartier des Tilleuls. Merci de votre compréhension.",
      category: "Services",
      publishedAt: "2024-02-15T14:15:00Z",
      priority: "medium",
      status: "active"
    },
    {
      id: 4,
      title: "Match de football reporté",
      content: "Le match FC Communal vs AS Voisins prévu samedi est reporté en raison des conditions météorologiques.",
      category: "Sport",
      publishedAt: "2024-02-15T13:20:00Z",
      priority: "low",
      status: "active"
    },
    {
      id: 5,
      title: "Pharmacie de garde ce weekend",
      content: "Pharmacie Central, 15 rue de la République, ouverte samedi et dimanche de 9h à 19h. Tél: 01 23 45 67 89",
      category: "Santé",
      publishedAt: "2024-02-15T12:00:00Z",
      priority: "medium",
      status: "active"
    },
    {
      id: 6,
      title: "Collecte des déchets verts avancée",
      content: "Exceptionnellement, la collecte des déchets verts aura lieu mardi au lieu de mercredi cette semaine.",
      category: "Environnement",
      publishedAt: "2024-02-15T10:30:00Z",
      priority: "low",
      status: "active"
    },
    {
      id: 7,
      title: "Inscription cantine scolaire",
      content: "Les inscriptions pour la cantine scolaire du mois de mars sont ouvertes jusqu'au 25 février sur le site de la mairie.",
      category: "Éducation",
      publishedAt: "2024-02-15T09:45:00Z",
      priority: "low",
      status: "active"
    },
    {
      id: 8,
      title: "Marché aux fleurs ce weekend",
      content: "Marché spécialisé samedi et dimanche sur la place centrale. Plus de 20 exposants présents.",
      category: "Commerce",
      publishedAt: "2024-02-15T08:15:00Z",
      priority: "low",
      status: "active"
    }
  ];

  const categories = ['all', 'Urgent', 'Politique', 'Services', 'Sport', 'Santé', 'Environnement', 'Éducation', 'Commerce'];

  const filteredInfos = flashInfos.filter(info => 
    filter === 'all' || info.category === filter
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'medium':
        return <Zap className="w-4 h-4 text-orange-600" />;
      case 'low':
        return <Clock className="w-4 h-4 text-blue-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const publishedDate = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - publishedDate.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `il y a ${diffInMinutes} min`;
    } else if (diffInMinutes < 1440) {
      return `il y a ${Math.floor(diffInMinutes / 60)}h`;
    } else {
      return publishedDate.toLocaleDateString('fr-FR');
    }
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        // Ici on pourrait recharger les données depuis une API
        console.log('Auto-refresh des flash infos');
      }, 30000); // Refresh toutes les 30 secondes

      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

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
                <li className="text-gray-900">Flash Infos</li>
              </ol>
            </nav>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-12 bg-red-600 rounded"></div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Flash Infos</h1>
                  <p className="text-lg text-gray-600">Informations urgentes et actualités en temps réel</p>
                </div>
                <Zap className="w-8 h-8 text-red-600 ml-auto" />
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${autoRefresh ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span className="text-sm text-gray-600">
                    {autoRefresh ? 'Actualisation auto' : 'Actualisation manuelle'}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setAutoRefresh(!autoRefresh)}
                >
                  {autoRefresh ? 'Désactiver' : 'Activer'} auto-refresh
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full sm:w-64">
                  <Filter className="w-4 h-4 mr-2" />
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
              
              <div className="text-sm text-gray-500">
                {filteredInfos.length} flash info{filteredInfos.length > 1 ? 's' : ''} 
                {filter !== 'all' && ` dans "${filter}"`}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredInfos.map((info) => (
                  <Card key={info.id} className={`border-l-4 ${
                    info.priority === 'high' ? 'border-red-500' :
                    info.priority === 'medium' ? 'border-orange-500' : 'border-blue-500'
                  } hover:shadow-md transition-shadow`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {getPriorityIcon(info.priority)}
                          <Badge variant="outline" className={getPriorityColor(info.priority)}>
                            {info.category}
                          </Badge>
                          {info.priority === 'high' && (
                            <Badge className="bg-red-600 text-white animate-pulse">
                              URGENT
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {getTimeAgo(info.publishedAt)}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {info.content}
                      </p>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>
                            Publié le {new Date(info.publishedAt).toLocaleDateString('fr-FR')} à {new Date(info.publishedAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            Partager
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Priority Legend */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Niveaux de Priorité</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm">Urgent - Information critique</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Important - À noter</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Standard - Information générale</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Par Catégorie</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = flashInfos.filter(info => info.category === category).length;
                      return (
                        <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <button
                            onClick={() => setFilter(category)}
                            className={`text-sm text-left hover:text-primary transition-colors ${
                              filter === category ? 'text-primary font-medium' : 'text-gray-700'
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

              {/* Emergency Contacts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Contacts d'Urgence</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900">Mairie</h4>
                      <p className="text-gray-600">01 23 45 67 80</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Police Municipale</h4>
                      <p className="text-gray-600">01 23 45 67 81</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Services Techniques</h4>
                      <p className="text-gray-600">01 23 45 67 82</p>
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

export default FlashInfosPage;