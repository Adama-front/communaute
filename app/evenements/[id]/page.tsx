import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Bookmark,
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Share2,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data - Dans un vrai projet, ceci viendrait d'une base de données
const events = {
  1: {
    id: 1,
    title: "Conseil Municipal",
    description:
      "Réunion mensuelle du conseil municipal. Ordre du jour : budget 2024, projets urbains, questions diverses.",
    fullDescription: `
      <p>Le conseil municipal se réunit en séance publique pour traiter les affaires courantes de la commune et prendre les décisions importantes pour l'avenir de notre territoire.</p>

      <h3>Ordre du jour</h3>
      <ul>
        <li>Approbation du procès-verbal de la séance précédente</li>
        <li>Présentation et vote du budget communal 2024</li>
        <li>Point sur les projets d'aménagement urbain</li>
        <li>Délibération sur la rénovation de l'école primaire</li>
        <li>Questions diverses</li>
      </ul>

      <h3>Participation du public</h3>
      <p>Les habitants sont invités à assister à cette séance publique. Un temps de parole sera accordé au public en fin de séance pour poser des questions aux élus.</p>

      <h3>Documents disponibles</h3>
      <p>L'ordre du jour complet et les documents relatifs aux délibérations sont consultables en mairie aux heures d'ouverture ou sur le site internet de la commune.</p>
    `,
    date: "2024-02-20",
    time: "18:00",
    endTime: "20:00",
    location: "Salle du Conseil - Mairie",
    address: "1 Place de la Mairie, 12345 Ville",
    category: "Politique",
    organizer: "Mairie",
    organizerContact: {
      phone: "01 23 45 67 80",
      email: "mairie@ville.fr",
      website: "https://www.ville.fr"
    },
    capacity: 50,
    attending: 12,
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    isFree: true,
    price: undefined, // Ajouté pour la cohérence du type
    isPublic: true,
    tags: ["conseil municipal", "politique", "budget", "urbanisme"]
  },
  2: {
    id: 2,
    title: "Concert de Printemps",
    description:
      "Concert exceptionnel avec l'orchestre municipal et des invités surprises. Soirée dédiée aux œuvres de compositeurs locaux.",
    fullDescription: `
      <p>L'orchestre municipal vous invite à un concert exceptionnel pour célébrer l'arrivée du printemps. Cette soirée musicale mettra à l'honneur les compositeurs de notre région.</p>

      <h3>Programme musical</h3>
      <ul>
        <li>Ouverture : "Printemps en Vallée" de Jean Durand (compositeur local)</li>
        <li>Concerto pour piano de Marie Leblanc</li>
        <li>Suite symphonique "Paysages de chez nous" de Pierre Martin</li>
        <li>Finale : Création mondiale d'une œuvre collective</li>
      </ul>

      <h3>Artistes invités</h3>
      <p>Nous aurons le plaisir d'accueillir plusieurs musiciens professionnels de la région qui se joindront à notre orchestre municipal pour cette soirée exceptionnelle.</p>

      <h3>Informations pratiques</h3>
      <p>Les portes ouvrent à 20h00 pour un concert à 20h30. Une buvette sera disponible à l'entracte. Réservation conseillée.</p>
    `,
    date: "2024-02-22",
    time: "20:30",
    endTime: "22:30",
    location: "Salle des Fêtes",
    address: "15 Rue de la Culture, 12345 Ville",
    category: "Culture",
    organizer: "Association Musicale",
    organizerContact: {
      phone: "01 23 45 67 85",
      email: "musique@association.fr",
      website: undefined
    },
    capacity: 200,
    attending: 87,
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    isFree: false,
    price: 15,
    isPublic: true,
    tags: ["concert", "musique", "orchestre", "culture locale"]
  },
  3: {
    id: 3,
    title: "Marché aux Fleurs",
    description:
      "Marché spécialisé avec des producteurs locaux. Découvrez les variétés de saison et bénéficiez de conseils d'experts.",
    fullDescription: `
      <p>Le marché aux fleurs de printemps revient pour sa 15e édition ! Venez découvrir une large sélection de plantes, fleurs et produits de jardinage proposés par les meilleurs producteurs de la région.</p>

      <h3>Les exposants</h3>
      <p>Plus de 20 producteurs et pépiniéristes seront présents pour vous proposer :</p>
      <ul>
        <li>Plantes vivaces et annuelles</li>
        <li>Arbustes et arbres fruitiers</li>
        <li>Légumes et aromates</li>
        <li>Outils et accessoires de jardinage</li>
        <li>Conseils personnalisés</li>
      </ul>

      <h3>Animations</h3>
      <p>Tout au long de la journée, des ateliers gratuits seront proposés : rempotage, bouturage, composition florale. Des experts seront également disponibles pour répondre à toutes vos questions.</p>

      <h3>Restauration</h3>
      <p>Food trucks et stands de produits locaux seront présents pour vous restaurer sur place.</p>
    `,
    date: "2024-02-25",
    time: "09:00",
    endTime: "17:00",
    location: "Place Centrale",
    address: "Place de la République, 12345 Ville",
    category: "Commerce",
    organizer: "Association des Commerçants",
    organizerContact: {
      phone: "01 23 45 67 88",
      email: "commercants@ville.fr",
      website: undefined
    },
    capacity: null,
    attending: 156,
    image:
      "https://images.pexels.com/photos/1458627/pexels-photo-1458627.jpeg?auto=compress&cs=tinysrgb&w=1200",
    isFree: true,
    price: undefined, // Ajouté pour la cohérence du type
    isPublic: true,
    tags: ["marché", "fleurs", "jardinage", "producteurs locaux"]
  }
};

// Fonction requise pour la génération statique
export async function generateStaticParams() {
  return Object.keys(events).map((id) => ({
    id: id.toString()
  }));
}

interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventPage({ params }: EventPageProps) {
  const eventId = parseInt(params.id);
  const event = events[eventId as keyof typeof events];

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.date);
  const eventDateTime = new Date(`${event.date}T${event.time}`);
  const isUpcoming = eventDateTime > new Date();

  const relatedEvents = [
    {
      id: 4,
      title: "Tournoi de Football des Familles",
      image:
        "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2024-02-26",
      category: "Sport"
    },
    {
      id: 5,
      title: "Exposition : 50 ans d'Histoire Locale",
      image:
        "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2024-03-01",
      category: "Culture"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Culture: "bg-purple-100 text-purple-800",
      Sport: "bg-blue-100 text-blue-800",
      Politique: "bg-gray-100 text-gray-800",
      Commerce: "bg-green-100 text-green-800",
      Associatif: "bg-orange-100 text-orange-800",
      Famille: "bg-pink-100 text-pink-800"
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <Layout>
      <div className="py-8">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/evenements" className="hover:text-primary">
                  Événements
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 truncate">{event.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Event Header */}
              <header className="mb-8">
                <Badge
                  className={getCategoryColor(event.category)}
                  variant="outline"
                >
                  {event.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-2 leading-tight">
                  {event.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Meta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {eventDate.toLocaleDateString("fr-FR", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </p>
                        <p className="text-sm text-gray-600">
                          {event.time} - {event.endTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {event.location}
                        </p>
                        <p className="text-sm text-gray-600">{event.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Organisé par {event.organizer}
                        </p>
                        {event.capacity && (
                          <p className="text-sm text-gray-600">
                            {event.attending}/{event.capacity} participants
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        💰
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {event.isFree ? "Gratuit" : `${event.price || 0}€`}
                        </p>
                        <p className="text-sm text-gray-600">
                          {event.isPublic
                            ? "Ouvert au public"
                            : "Sur invitation"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  {isUpcoming && (
                    <Button size="lg">
                      {event.isFree ? "Participer" : "Réserver"}
                    </Button>
                  )}
                  <Button variant="outline" size="lg">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="lg">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Event Content */}
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: event.fullDescription }}
              />

              {/* Tags */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Mots-clés :
                </h4>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-8" />

              {/* Organizer Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Organisateur
                </h4>
                <div className="space-y-3">
                  <h5 className="text-lg font-medium">{event.organizer}</h5>
                  <div className="space-y-2">
                    {event.organizerContact.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">
                          {event.organizerContact.phone}
                        </span>
                      </div>
                    )}
                    {event.organizerContact.email && (
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">
                          {event.organizerContact.email}
                        </span>
                      </div>
                    )}
                    {event.organizerContact.website && (
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                        <a
                          href={event.organizerContact.website}
                          className="text-sm text-primary hover:underline"
                        >
                          Site web
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Informations pratiques
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Date :</span>
                      <p className="text-gray-600">
                        {eventDate.toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Horaires :
                      </span>
                      <p className="text-gray-600">
                        {event.time} - {event.endTime}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Lieu :</span>
                      <p className="text-gray-600">
                        {event.location}
                        <br />
                        {event.address}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Tarif :</span>
                      <p className="text-gray-600">
                        {event.isFree ? "Gratuit" : `${event.price || 0}€`}
                      </p>
                    </div>
                    {event.capacity && (
                      <div>
                        <span className="font-medium text-gray-900">
                          Capacité :
                        </span>
                        <p className="text-gray-600">
                          {event.capacity} personnes
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Related Events */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Autres événements
                  </h3>
                  <div className="space-y-4">
                    {relatedEvents.map((relatedEvent) => (
                      <div key={relatedEvent.id} className="flex space-x-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={relatedEvent.image}
                            alt={relatedEvent.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-grow">
                          <Badge variant="outline" className="text-xs mb-1">
                            {relatedEvent.category}
                          </Badge>
                          <h4 className="text-sm font-medium leading-tight">
                            <Link
                              href={`/evenements/${relatedEvent.id}`}
                              className="hover:text-primary"
                            >
                              {relatedEvent.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500">
                            {new Date(relatedEvent.date).toLocaleDateString(
                              "fr-FR"
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Contact</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Une question sur cet événement ?
                  </p>
                  <Button size="sm" className="w-full">
                    Contacter l&apos;organisateur
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
