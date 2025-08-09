import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, FileText, ArrowRight, Clock, Eye } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Mock data pour les dossiers
const dossiers = {
  1: {
    id: 1,
    title: "Rénovation Urbaine 2024-2026",
    description: "Dossier complet sur le grand projet de rénovation du centre-ville : planning, budget, impact sur les habitants et commerces.",
    content: `
      <p>Le projet de rénovation urbaine 2024-2026 représente l'un des chantiers les plus ambitieux de notre commune. Ce dossier complet vous présente tous les aspects de cette transformation majeure de notre centre-ville.</p>

      <h3>Objectifs du projet</h3>
      <p>Cette rénovation vise à moderniser notre centre-ville tout en préservant son caractère historique. Les objectifs principaux sont :</p>
      <ul>
        <li>Améliorer l'accessibilité et la mobilité</li>
        <li>Créer des espaces verts et de détente</li>
        <li>Dynamiser l'activité commerciale</li>
        <li>Rénover les infrastructures vieillissantes</li>
        <li>Valoriser le patrimoine architectural</li>
      </ul>

      <h3>Budget et financement</h3>
      <p>Le budget total du projet s'élève à 15 millions d'euros, répartis comme suit :</p>
      <ul>
        <li>Aménagement des espaces publics : 6 millions €</li>
        <li>Rénovation des infrastructures : 4 millions €</li>
        <li>Création d'espaces verts : 2 millions €</li>
        <li>Valorisation du patrimoine : 2 millions €</li>
        <li>Accompagnement des commerçants : 1 million €</li>
      </ul>

      <h3>Planning des travaux</h3>
      <p>Les travaux s'étaleront sur 30 mois, de mars 2024 à septembre 2026, en plusieurs phases pour minimiser les désagréments.</p>
    `,
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Urbanisme",
    author: "Équipe Rédaction",
    publishedAt: "2024-02-10",
    readTime: 15,
    articlesCount: 8,
    status: "En cours",
    featured: true,
    articles: [
      {
        id: 1,
        title: "Lancement officiel du projet de rénovation",
        excerpt: "La maire annonce le début des travaux pour mars 2024",
        publishedAt: "2024-02-10",
        readTime: 3
      },
      {
        id: 2,
        title: "Concertation citoyenne : vos avis comptent",
        excerpt: "Réunions publiques pour recueillir les suggestions des habitants",
        publishedAt: "2024-02-08",
        readTime: 4
      },
      {
        id: 3,
        title: "Impact sur les commerces : mesures d'accompagnement",
        excerpt: "Dispositifs d'aide pour soutenir les commerçants pendant les travaux",
        publishedAt: "2024-02-05",
        readTime: 5
      }
    ],
    timeline: [
      {
        date: "2024-03-01",
        title: "Début des travaux préparatoires",
        description: "Mise en place des déviations et signalisation"
      },
      {
        date: "2024-04-15",
        title: "Phase 1 : Réseaux souterrains",
        description: "Rénovation des canalisations et câblages"
      },
      {
        date: "2024-09-01",
        title: "Phase 2 : Aménagement de surface",
        description: "Réfection des voiries et création des espaces verts"
      }
    ]
  },
  2: {
    id: 2,
    title: "Transition Énergétique Communale",
    description: "Analyse des initiatives écologiques de la commune : panneaux solaires, éclairage LED, isolation des bâtiments publics.",
    content: `
      <p>Notre commune s'engage résolument dans la transition énergétique. Ce dossier présente l'ensemble des actions menées pour réduire notre empreinte carbone et développer les énergies renouvelables.</p>

      <h3>Bilan énergétique actuel</h3>
      <p>Avant de présenter nos projets, faisons le point sur la situation énergétique de notre commune :</p>
      <ul>
        <li>Consommation annuelle : 2,3 GWh</li>
        <li>Part des énergies renouvelables : 15%</li>
        <li>Émissions de CO2 : 450 tonnes/an</li>
        <li>Coût énergétique annuel : 280 000 €</li>
      </ul>

      <h3>Objectifs 2030</h3>
      <p>D'ici 2030, nous visons :</p>
      <ul>
        <li>Réduction de 40% de la consommation énergétique</li>
        <li>50% d'énergies renouvelables</li>
        <li>Neutralité carbone des bâtiments publics</li>
        <li>Économies de 150 000 € par an</li>
      </ul>
    `,
    image: "https://images.pexels.com/photos/2909077/pexels-photo-2909077.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Environnement",
    author: "Claire Durand",
    publishedAt: "2024-02-05",
    readTime: 12,
    articlesCount: 6,
    status: "Complet",
    articles: [
      {
        id: 4,
        title: "Installation de panneaux solaires sur la mairie",
        excerpt: "100 m² de panneaux pour une production de 15 kWh",
        publishedAt: "2024-02-05",
        readTime: 3
      },
      {
        id: 5,
        title: "Éclairage LED : 80% d'économies d'énergie",
        excerpt: "Remplacement complet de l'éclairage public",
        publishedAt: "2024-02-03",
        readTime: 4
      }
    ],
    timeline: [
      {
        date: "2024-01-15",
        title: "Audit énergétique complet",
        description: "Analyse de tous les bâtiments publics"
      },
      {
        date: "2024-02-01",
        title: "Installation panneaux solaires",
        description: "Mise en service sur la mairie et l'école"
      },
      {
        date: "2024-03-01",
        title: "Rénovation thermique",
        description: "Isolation de la salle des fêtes"
      }
    ]
  },
  3: {
    id: 3,
    title: "Portrait des Commerces Locaux",
    description: "Découverte des commerces de proximité : histoire, spécialités, projets d'avenir et impact sur la vie locale.",
    content: `
      <p>Les commerces de proximité constituent le cœur battant de notre commune. Ce dossier vous invite à découvrir les artisans et commerçants qui font la richesse de notre territoire.</p>

      <h3>Un tissu commercial diversifié</h3>
      <p>Notre commune compte aujourd'hui :</p>
      <ul>
        <li>45 commerces de proximité</li>
        <li>12 artisans d'art</li>
        <li>8 restaurants et cafés</li>
        <li>6 services de santé</li>
        <li>3 marchés hebdomadaires</li>
      </ul>

      <h3>Histoire et tradition</h3>
      <p>Certains de nos commerces perpétuent des traditions séculaires :</p>
      <ul>
        <li>La boulangerie Dupont, fondée en 1892</li>
        <li>L'atelier de poterie Martin, 4ème génération</li>
        <li>La pharmacie centrale, plus de 100 ans d'histoire</li>
        <li>Le café de la Place, lieu de rencontre depuis 1920</li>
      </ul>

      <h3>Innovation et modernité</h3>
      <p>Nos commerçants s'adaptent aux nouveaux enjeux :</p>
      <ul>
        <li>Développement du commerce en ligne</li>
        <li>Initiatives écologiques et durables</li>
        <li>Services de livraison à domicile</li>
        <li>Partenariats avec les producteurs locaux</li>
      </ul>
    `,
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Économie",
    author: "Marie Leblanc",
    publishedAt: "2024-01-28",
    readTime: 18,
    articlesCount: 12,
    status: "Complet",
    articles: [
      {
        id: 6,
        title: "La boulangerie Dupont : 130 ans de savoir-faire",
        excerpt: "Rencontre avec la famille Dupont, gardienne des traditions boulangères",
        publishedAt: "2024-01-28",
        readTime: 5
      },
      {
        id: 7,
        title: "L'atelier de poterie Martin : l'art au bout des doigts",
        excerpt: "Découverte d'un artisan d'art qui perpétue la tradition familiale",
        publishedAt: "2024-01-25",
        readTime: 4
      },
      {
        id: 8,
        title: "Le marché du samedi : rendez-vous incontournable",
        excerpt: "Portrait des producteurs locaux qui animent notre marché",
        publishedAt: "2024-01-22",
        readTime: 6
      },
      {
        id: 9,
        title: "Commerce en ligne : la révolution numérique",
        excerpt: "Comment nos commerçants s'adaptent à l'ère digitale",
        publishedAt: "2024-01-20",
        readTime: 4
      }
    ],
    timeline: [
      {
        date: "2024-01-10",
        title: "Lancement de l'enquête commerciale",
        description: "Recensement de tous les commerces et services"
      },
      {
        date: "2024-01-15",
        title: "Interviews des commerçants",
        description: "Rencontres individuelles avec chaque commerçant"
      },
      {
        date: "2024-01-25",
        title: "Analyse des données économiques",
        description: "Étude de l'impact économique du commerce local"
      }
    ]
  }
};

// Fonction requise pour la génération statique
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

interface DossierPageProps {
  params: {
    id: string;
  };
}

export default function DossierPage({ params }: DossierPageProps) {
  const dossierId = parseInt(params.id);
  const dossier = dossiers[dossierId as keyof typeof dossiers];

  if (!dossier) {
    notFound();
  }

  const publishedDate = new Date(dossier.publishedAt);

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

  return (
    <Layout>
      <div className="py-8">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
              <li>/</li>
              <li><Link href="/dossiers" className="hover:text-primary">Dossiers</Link></li>
              <li>/</li>
              <li className="text-gray-900 truncate">{dossier.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Dossier Header */}
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className={getCategoryColor(dossier.category)} variant="outline">
                    {dossier.category}
                  </Badge>
                  <Badge className={getStatusColor(dossier.status)}>
                    {dossier.status}
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {dossier.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {dossier.description}
                </p>
                
                {/* Dossier Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Par {dossier.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{publishedDate.toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>{dossier.articlesCount} articles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{dossier.readTime} min de lecture</span>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={dossier.image}
                  alt={dossier.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Dossier Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: dossier.content }}
              />

              <Separator className="my-8" />

              {/* Articles du dossier */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles du dossier</h2>
                <div className="space-y-4">
                  {dossier.articles.map((article, index) => (
                    <Card key={article.id} className="news-card hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </span>
                              <h3 className="text-lg font-semibold text-gray-900">
                                <Link href={`/articles/${article.id}`} className="hover:text-primary transition-colors">
                                  {article.title}
                                </Link>
                              </h3>
                            </div>
                            <p className="text-gray-600 mb-3 ml-11">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 ml-11">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR')}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{article.readTime} min</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/articles/${article.id}`}>
                              Lire
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <Separator className="my-8" />

              {/* Timeline */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Chronologie du projet</h2>
                <div className="space-y-6">
                  {dossier.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className="text-sm font-medium text-primary">
                            {new Date(event.date).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Dossier Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Informations</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Statut</span>
                      <Badge className={getStatusColor(dossier.status)}>
                        {dossier.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Articles</span>
                      <span className="font-medium">{dossier.articlesCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Temps de lecture</span>
                      <span className="font-medium">{dossier.readTime} min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Publié le</span>
                      <span className="font-medium">{publishedDate.toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Navigation</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      📄 Articles du dossier
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      📅 Chronologie
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      📊 Documents officiels
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      🎥 Vidéos explicatives
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Dossiers */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Dossiers liés</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-900 mb-1">
                        <Link href="/dossiers/2" className="hover:text-primary">
                          Transition Énergétique
                        </Link>
                      </h4>
                      <p className="text-gray-600 text-xs">6 articles • Complet</p>
                    </div>
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-900 mb-1">
                        <Link href="/dossiers/1" className="hover:text-primary">
                          Rénovation Urbaine
                        </Link>
                      </h4>
                      <p className="text-gray-600 text-xs">8 articles • En cours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Suivre ce dossier</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez les mises à jour de ce dossier par email
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
}