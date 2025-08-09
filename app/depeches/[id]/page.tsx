import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ExternalLink, Globe, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Mock data pour les dépêches complètes
const depeches = {
  1: {
    id: 1,
    title: "Nouvelle réglementation sur les déchets verts",
    excerpt: "La préfecture annonce de nouvelles règles pour la collecte des déchets verts dans toutes les communes du département.",
    content: `
      <p>La préfecture du département vient d'annoncer l'entrée en vigueur d'une nouvelle réglementation concernant la collecte et le traitement des déchets verts sur l'ensemble du territoire départemental.</p>

      <h3>Principales modifications</h3>
      <p>À compter du 1er mars 2024, plusieurs changements importants entrent en application :</p>
      <ul>
        <li><strong>Fréquence de collecte :</strong> Passage d'une collecte hebdomadaire à une collecte bimensuelle pendant la période hivernale (novembre à février)</li>
        <li><strong>Volumes autorisés :</strong> Limitation à 3 sacs de 50 litres maximum par foyer et par collecte</li>
        <li><strong>Types de déchets :</strong> Interdiction des déchets de cuisine dans les bacs verts, réservés exclusivement aux déchets de jardinage</li>
        <li><strong>Horaires de sortie :</strong> Les bacs doivent être sortis la veille au soir après 18h et rentrés avant 20h le jour de la collecte</li>
      </ul>

      <h3>Objectifs environnementaux</h3>
      <p>Cette nouvelle réglementation s'inscrit dans une démarche de développement durable visant à :</p>
      <ul>
        <li>Réduire les émissions de CO2 liées au transport des déchets</li>
        <li>Optimiser le traitement et le compostage des déchets verts</li>
        <li>Encourager le compostage domestique</li>
        <li>Améliorer la qualité du compost produit</li>
      </ul>

      <h3>Accompagnement des communes</h3>
      <p>Pour faciliter cette transition, la préfecture met en place plusieurs mesures d'accompagnement :</p>
      <ul>
        <li>Distribution gratuite de composteurs individuels (sur demande)</li>
        <li>Ateliers de formation au compostage domestique</li>
        <li>Création de points de collecte supplémentaires en déchetterie</li>
        <li>Campagne d'information dans tous les foyers</li>
      </ul>

      <h3>Sanctions prévues</h3>
      <p>Le non-respect de cette nouvelle réglementation pourra entraîner :</p>
      <ul>
        <li>Avertissement pour la première infraction</li>
        <li>Amende de 35€ pour les infractions répétées</li>
        <li>Non-collecte des bacs non conformes</li>
      </ul>

      <h3>Mise en application</h3>
      <p>Une période de tolérance de deux mois (mars-avril 2024) permettra aux habitants de s'adapter progressivement à ces nouvelles règles. Les agents de collecte distribueront des rappels pédagogiques avant toute sanction.</p>

      <p>Pour plus d'informations, les habitants peuvent consulter le site internet de la préfecture ou contacter le numéro vert : 0800 123 456 (gratuit depuis un poste fixe).</p>
    `,
    source: "Préfecture",
    publishedAt: "2024-02-15T14:30:00Z",
    category: "Réglementation",
    external: true,
    url: "https://www.prefecture.fr/dechets-verts",
    tags: ["déchets verts", "environnement", "réglementation", "collecte"]
  },
  2: {
    id: 2,
    title: "Subventions régionales pour la transition énergétique",
    excerpt: "La région lance un nouveau programme d'aide financière pour les projets d'économie d'énergie des collectivités.",
    content: `
      <p>Le Conseil Régional annonce le lancement d'un ambitieux programme de subventions destiné à accompagner les collectivités locales dans leur transition énergétique.</p>

      <h3>Enveloppe budgétaire</h3>
      <p>Ce nouveau dispositif, doté d'une enveloppe de 50 millions d'euros sur trois ans, vise à accélérer la transformation énergétique des territoires. Les fonds seront répartis selon les priorités suivantes :</p>
      <ul>
        <li>40% pour les énergies renouvelables</li>
        <li>30% pour l'efficacité énergétique des bâtiments publics</li>
        <li>20% pour la mobilité durable</li>
        <li>10% pour l'innovation et la recherche</li>
      </ul>

      <h3>Projets éligibles</h3>
      <p>Peuvent bénéficier de ces subventions les projets portant sur :</p>
      <ul>
        <li><strong>Énergies renouvelables :</strong> Installation de panneaux solaires, éoliennes, géothermie, biomasse</li>
        <li><strong>Rénovation énergétique :</strong> Isolation, changement de chauffage, ventilation</li>
        <li><strong>Mobilité :</strong> Bornes de recharge électrique, vélos électriques, transports en commun propres</li>
        <li><strong>Éclairage public :</strong> Passage au LED, systèmes intelligents</li>
      </ul>

      <h3>Conditions d'attribution</h3>
      <p>Pour être éligibles, les projets doivent respecter plusieurs critères :</p>
      <ul>
        <li>Être portés par une collectivité de moins de 20 000 habitants</li>
        <li>Démontrer un gain énergétique d'au moins 30%</li>
        <li>Inclure un volet pédagogique ou de sensibilisation</li>
        <li>Prévoir un suivi des performances sur 5 ans</li>
      </ul>

      <h3>Taux de subvention</h3>
      <p>Les taux d'aide varient selon le type de projet et la situation de la collectivité :</p>
      <ul>
        <li>Communes rurales : jusqu'à 80% du coût total</li>
        <li>Communes urbaines : jusqu'à 60% du coût total</li>
        <li>Projets innovants : bonus de 10%</li>
        <li>Projets intercommunaux : bonus de 15%</li>
      </ul>

      <h3>Procédure de candidature</h3>
      <p>Les dossiers de candidature doivent être déposés avant le 30 avril 2024 sur la plateforme dédiée. Ils doivent comprendre :</p>
      <ul>
        <li>Étude de faisabilité technique et financière</li>
        <li>Plan de financement détaillé</li>
        <li>Calendrier de réalisation</li>
        <li>Indicateurs de suivi et d'évaluation</li>
      </ul>

      <p>Un comité d'experts examinera les dossiers et rendra ses décisions avant le 30 juin 2024. Les premiers financements seront versés dès septembre 2024.</p>
    `,
    source: "Conseil Régional",
    publishedAt: "2024-02-15T11:45:00Z",
    category: "Environnement",
    external: true,
    url: "https://www.region.fr/transition-energetique",
    tags: ["subventions", "transition énergétique", "collectivités", "environnement"]
  },
  3: {
    id: 3,
    title: "Alerte météo: risque de verglas cette nuit",
    excerpt: "Météo France place le département en vigilance jaune pour risque de verglas entre 22h et 8h.",
    content: `
      <p>Météo France vient de placer notre département en vigilance jaune pour risque de verglas. Cette alerte concerne la période de 22h00 ce soir à 8h00 demain matin.</p>

      <h3>Phénomène attendu</h3>
      <p>Les conditions météorologiques prévues cette nuit sont particulièrement propices à la formation de verglas :</p>
      <ul>
        <li><strong>Températures :</strong> Chute brutale de +3°C à -2°C entre 20h et 23h</li>
        <li><strong>Précipitations :</strong> Pluie fine persistante jusqu'à 21h</li>
        <li><strong>Vent :</strong> Faible, favorisant le refroidissement au sol</li>
        <li><strong>Humidité :</strong> Très élevée (95%)</li>
      </ul>

      <h3>Zones les plus exposées</h3>
      <p>Le risque de verglas sera particulièrement marqué sur :</p>
      <ul>
        <li>Les routes de campagne et départementales</li>
        <li>Les ponts et ouvrages d'art</li>
        <li>Les zones ombragées et en altitude</li>
        <li>Les parkings et cours d'école</li>
      </ul>

      <h3>Recommandations aux usagers</h3>
      <p>Face à ce risque, les autorités recommandent :</p>
      <ul>
        <li><strong>Circulation :</strong> Reporter les déplacements non indispensables</li>
        <li><strong>Conduite :</strong> Réduire la vitesse, augmenter les distances de sécurité</li>
        <li><strong>Équipement :</strong> Vérifier l'état des pneus, prévoir des équipements de déneigement</li>
        <li><strong>Piétons :</strong> Porter des chaussures antidérapantes, éviter les zones à risque</li>
      </ul>

      <h3>Dispositif de viabilité hivernale</h3>
      <p>Les services départementaux ont activé le plan de viabilité hivernale :</p>
      <ul>
        <li>12 véhicules de salage mobilisés dès 21h</li>
        <li>Traitement prioritaire des axes principaux</li>
        <li>Surveillance renforcée des points sensibles</li>
        <li>Astreinte technique maintenue jusqu'à 10h</li>
      </ul>

      <h3>Transports scolaires</h3>
      <p>En fonction de l'évolution de la situation, des perturbations sont possibles sur les lignes de transport scolaire. Les familles seront informées dès 6h30 par SMS et sur le site du département.</p>

      <h3>Numéros d'urgence</h3>
      <p>En cas de problème lié aux conditions météorologiques :</p>
      <ul>
        <li><strong>Urgences :</strong> 15 (SAMU), 18 (Pompiers), 112 (numéro européen)</li>
        <li><strong>Info route :</strong> 0800 100 200 (gratuit)</li>
        <li><strong>Préfecture :</strong> 01 23 45 67 00</li>
      </ul>

      <p>Météo France actualisera ce bulletin à 6h00 demain matin. La vigilance pourrait être levée si les températures remontent plus rapidement que prévu.</p>
    `,
    source: "Météo France",
    publishedAt: "2024-02-15T16:20:00Z",
    category: "Météo",
    external: true,
    url: "https://www.meteofrance.fr/vigilance",
    tags: ["météo", "verglas", "vigilance", "sécurité routière"]
  }
};

// Fonction requise pour la génération statique
export async function generateStaticParams() {
  return Object.keys(depeches).map((id) => ({
    id: id.toString(),
  }));
}

interface DepechePageProps {
  params: {
    id: string;
  };
}

export default function DepechePage({ params }: DepechePageProps) {
  const depecheId = parseInt(params.id);
  const depeche = depeches[depecheId as keyof typeof depeches];

  if (!depeche) {
    notFound();
  }

  const publishedDate = new Date(depeche.publishedAt);

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
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
              <li>/</li>
              <li><Link href="/depeches" className="hover:text-primary">Dépêches</Link></li>
              <li>/</li>
              <li className="text-gray-900 truncate">{depeche.title}</li>
            </ol>
          </nav>

          {/* Back Button */}
          <div className="mb-6">
            <Button variant="outline" asChild>
              <Link href="/depeches">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux dépêches
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className={getCategoryColor(depeche.category)}>
                    {depeche.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {depeche.source}
                  </Badge>
                  {depeche.external && (
                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Source externe
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {depeche.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {depeche.excerpt}
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Source: {depeche.source}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{publishedDate.toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                  {depeche.external && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={depeche.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Source officielle
                      </a>
                    </Button>
                  )}
                </div>
              </header>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: depeche.content }}
              />

              {/* Tags */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Mots-clés :</h4>
                <div className="flex flex-wrap gap-2">
                  {depeche.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-8" />

              {/* Source Info */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{depeche.source}</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Cette dépêche provient d'une source officielle. 
                      Pour plus d'informations, consultez le site de l'organisme émetteur.
                    </p>
                    {depeche.external && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={depeche.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Consulter la source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Related Depeches */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Autres dépêches</h3>
                  <div className="space-y-4">
                    {Object.values(depeches)
                      .filter(d => d.id !== depeche.id)
                      .slice(0, 3)
                      .map((relatedDepeche) => (
                        <div key={relatedDepeche.id}>
                          <Badge variant="outline" className={getCategoryColor(relatedDepeche.category) + " text-xs mb-1"}>
                            {relatedDepeche.category}
                          </Badge>
                          <h4 className="text-sm font-medium leading-tight mb-1">
                            <Link href={`/depeches/${relatedDepeche.id}`} className="hover:text-primary">
                              {relatedDepeche.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500">
                            {relatedDepeche.source} • {new Date(relatedDepeche.publishedAt).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      ))}
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
}