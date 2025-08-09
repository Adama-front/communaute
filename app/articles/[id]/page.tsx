import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Share2, Bookmark, MessageCircle, Eye, ThumbsUp } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Mock data - Dans un vrai projet, ceci viendrait d'une base de données
const articles = {
  1: {
    id: 1,
    title: "Nouveau projet urbain: La place centrale sera rénovée",
    excerpt: "Un investissement de 2,5 millions d'euros pour moderniser le cœur de notre ville avec des espaces verts et une fontaine interactive.",
    content: `
      <p>La municipalité a officiellement lancé le projet de rénovation de la place centrale, un chantier d'envergure qui transformera le cœur historique de notre commune. Cette initiative, fruit de plusieurs mois de concertation avec les habitants, représente un investissement de 2,5 millions d'euros.</p>

      <h3>Un projet ambitieux et moderne</h3>
      <p>La nouvelle place comprendra plusieurs espaces thématiques : une zone de détente avec des bancs et des espaces verts, une aire de jeux pour enfants, et une fontaine interactive qui constituera le point central du projet. L'éclairage LED permettra de mettre en valeur l'architecture environnante tout en réduisant la consommation énergétique.</p>

      <p>« Nous voulons créer un espace de vie qui rassemble toutes les générations », explique la maire, Marie Dubois. « Cette place sera le nouveau poumon de notre centre-ville, un lieu de rencontre et d'échange pour tous les habitants. »</p>

      <h3>Concertation citoyenne</h3>
      <p>Le projet a été élaboré suite à une large consultation citoyenne menée l'année dernière. Plus de 300 habitants ont participé aux réunions publiques et aux ateliers de co-création. Leurs suggestions ont été intégrées dans la conception finale, notamment l'ajout d'espaces pour les événements culturels et les marchés locaux.</p>

      <h3>Planning des travaux</h3>
      <p>Les travaux débuteront en mars prochain et s'étaleront sur 8 mois. Pour minimiser les désagréments, ils seront réalisés en plusieurs phases :</p>
      <ul>
        <li><strong>Phase 1 (mars-avril)</strong> : Préparation du terrain et réseaux souterrains</li>
        <li><strong>Phase 2 (mai-juillet)</strong> : Construction de la fontaine et aménagements centraux</li>
        <li><strong>Phase 3 (août-octobre)</strong> : Espaces verts, éclairage et finitions</li>
      </ul>

      <p>Un plan de circulation temporaire sera mis en place pour maintenir l'accès aux commerces environnants. Les commerçants bénéficieront d'un accompagnement spécifique pendant cette période.</p>

      <h3>Retombées économiques attendues</h3>
      <p>Au-delà de l'amélioration du cadre de vie, ce projet devrait dynamiser l'économie locale. Les études prévisionnelles estiment une augmentation de 20% de la fréquentation du centre-ville une fois les travaux terminés. Plusieurs nouvelles entreprises ont déjà manifesté leur intérêt pour s'installer aux abords de la future place.</p>

      <p>L'inauguration officielle est prévue pour novembre 2024, avec une grande fête populaire pour célébrer cette nouvelle étape dans l'histoire de notre commune.</p>
    `,
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Urbanisme",
    author: "Marie Dubois",
    publishedAt: "2024-02-15T10:30:00Z",
    readTime: 5,
    views: 1247,
    likes: 89,
    comments: 23,
    tags: ["urbanisme", "rénovation", "place centrale", "investissement"]
  },
  2: {
    id: 2,
    title: "Festival de musique: 50 artistes locaux à l'honneur",
    excerpt: "Le festival annuel met en lumière les talents de notre région avec trois jours de concerts gratuits.",
    content: `
      <p>Le festival de musique de notre commune revient pour sa 15e édition avec un programme exceptionnel mettant à l'honneur 50 artistes locaux. Cet événement gratuit se déroulera du 15 au 17 mars sur la place centrale nouvellement rénovée.</p>

      <h3>Une programmation éclectique</h3>
      <p>Cette année, le festival propose une programmation particulièrement riche avec des concerts de jazz, rock, folk et musique électronique. Les organisateurs ont souhaité mettre l'accent sur la diversité musicale de notre région.</p>

      <p>« Nous avons découvert des talents extraordinaires lors des auditions », confie Jean Martin, directeur artistique du festival. « Cette édition sera l'occasion de montrer la richesse culturelle de notre territoire. »</p>

      <h3>Trois jours de festivités</h3>
      <p>Le programme s'articule autour de trois soirées thématiques :</p>
      <ul>
        <li><strong>Vendredi 15 mars</strong> : Soirée jazz et blues avec 8 groupes locaux</li>
        <li><strong>Samedi 16 mars</strong> : Rock et pop avec les talents émergents de la région</li>
        <li><strong>Dimanche 17 mars</strong> : Musique du monde et électronique</li>
      </ul>

      <p>Des stands de restauration locale et d'artisanat seront également présents pour faire découvrir les saveurs et savoir-faire de notre commune.</p>
    `,
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Culture",
    author: "Jean Martin",
    publishedAt: "2024-02-14T14:20:00Z",
    readTime: 4,
    views: 892,
    likes: 67,
    comments: 15,
    tags: ["festival", "musique", "culture", "artistes locaux"]
  },
  3: {
    id: 3,
    title: "Transport public: nouvelle ligne de bus vers la zone industrielle",
    excerpt: "Une nouvelle ligne de transport en commun facilite l'accès à la zone d'activité économique.",
    content: `
      <p>La municipalité, en partenariat avec la communauté d'agglomération, lance une nouvelle ligne de bus desservant la zone industrielle. Cette initiative répond aux besoins de mobilité des salariés et contribue à réduire l'impact environnemental des déplacements.</p>

      <h3>Un service adapté aux horaires de travail</h3>
      <p>La ligne 15 fonctionnera du lundi au vendredi avec des horaires adaptés aux équipes du matin et de l'après-midi. Six allers-retours quotidiens sont prévus, avec un premier départ à 6h30 et un dernier retour à 19h30.</p>

      <h3>Tarification attractive</h3>
      <p>Un abonnement mensuel spécial "Zone Industrie" est proposé à 25 euros, soit 40% moins cher que l'abonnement standard. Cette mesure vise à encourager l'utilisation des transports en commun.</p>
    `,
    image: "https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Transport",
    author: "Paul Durand",
    publishedAt: "2024-02-13T12:15:00Z",
    readTime: 3,
    views: 678,
    likes: 45,
    comments: 12,
    tags: ["transport", "bus", "zone industrielle", "mobilité"]
  },
  4: {
    id: 4,
    title: "Sécurité routière: nouveaux aménagements près des écoles",
    excerpt: "La municipalité installe des ralentisseurs et améliore la signalisation pour sécuriser les abords des établissements scolaires.",
    content: `
      <p>Dans le cadre de sa politique de sécurité routière, la municipalité vient d'achever l'installation de nouveaux aménagements aux abords des écoles primaires et du collège. Ces travaux, d'un montant de 180 000 euros, visent à réduire les risques d'accidents et à sécuriser les trajets des élèves.</p>

      <h3>Des aménagements complets</h3>
      <p>Les nouveaux équipements comprennent l'installation de ralentisseurs, la création de passages piétons surélevés, l'amélioration de l'éclairage public et la mise en place d'une signalisation renforcée. Des zones 30 km/h ont également été étendues dans un rayon de 200 mètres autour de chaque établissement.</p>

      <p>« La sécurité de nos enfants est une priorité absolue », déclare l'adjoint à la sécurité, Michel Durand. « Ces aménagements s'inscrivent dans notre plan global de sécurisation des déplacements piétons et cyclistes. »</p>

      <h3>Concertation avec les parents</h3>
      <p>Le projet a été élaboré en concertation avec les associations de parents d'élèves et les directions des établissements scolaires. Plusieurs réunions publiques ont permis de recueillir les préoccupations des familles et d'adapter les aménagements aux besoins spécifiques de chaque site.</p>

      <h3>Sensibilisation continue</h3>
      <p>En complément de ces aménagements, la police municipale renforcera ses contrôles aux heures d'entrée et de sortie des classes. Des actions de sensibilisation seront également menées dans les écoles pour éduquer les enfants aux règles de sécurité routière.</p>

      <p>Ces travaux s'achèveront par l'installation de panneaux lumineux variables qui rappelleront aux automobilistes la présence d'établissements scolaires et les limitations de vitesse en vigueur.</p>
    `,
    image: "https://images.pexels.com/photos/8828786/pexels-photo-8828786.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Sécurité",
    author: "Michel Durand",
    publishedAt: "2024-02-14T08:45:00Z",
    readTime: 4,
    views: 1156,
    likes: 94,
    comments: 31,
    tags: ["sécurité routière", "écoles", "aménagements", "prévention"]
  },
  5: {
    id: 5,
    title: "Budget communal 2024: les priorités annoncées",
    excerpt: "La municipalité présente son budget pour l'année 2024 avec un focus sur l'éducation et l'environnement.",
    content: `
      <p>Le conseil municipal a adopté le budget communal 2024 lors de sa dernière séance. Avec un montant total de 12,8 millions d'euros, ce budget reflète les priorités de la municipalité pour les mois à venir.</p>

      <h3>Éducation et jeunesse en priorité</h3>
      <p>Plus de 40% du budget sera consacré à l'éducation et aux services à la jeunesse. Cette enveloppe permettra notamment la rénovation de l'école primaire et l'extension de la crèche municipale.</p>

      <h3>Transition écologique</h3>
      <p>Un budget de 2,1 millions d'euros est alloué aux projets environnementaux, incluant l'installation de panneaux solaires sur les bâtiments publics et la création de nouvelles pistes cyclables.</p>
    `,
    image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Politique",
    author: "Pierre Moreau",
    publishedAt: "2024-02-13T16:45:00Z",
    readTime: 4,
    views: 756,
    likes: 34,
    comments: 12,
    tags: ["budget", "politique", "éducation", "environnement"]
  },
  6: {
    id: 6,
    title: "Environnement: nouvelle collecte de déchets verts",
    excerpt: "Un service renforcé pour la collecte des déchets verts avec des créneaux étendus et de nouveaux points de collecte.",
    content: `
      <p>La municipalité lance un nouveau service de collecte des déchets verts pour répondre aux besoins croissants des habitants. Cette initiative s'inscrit dans la démarche environnementale de la commune.</p>

      <h3>Service étendu</h3>
      <p>À partir du 1er mars, la collecte des déchets verts aura lieu deux fois par semaine au lieu d'une seule. Les créneaux sont étendus de 7h à 19h pour s'adapter aux horaires de chacun.</p>

      <h3>Nouveaux points de collecte</h3>
      <p>Trois nouveaux points de collecte sont créés dans les quartiers résidentiels pour faciliter l'accès au service. Une carte interactive sera disponible sur le site de la mairie.</p>

      <h3>Valorisation des déchets</h3>
      <p>Les déchets collectés seront transformés en compost de qualité, redistribué gratuitement aux habitants lors des journées environnement organisées chaque trimestre.</p>
    `,
    image: "https://images.pexels.com/photos/2909077/pexels-photo-2909077.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Environnement",
    author: "Claire Dubois",
    publishedAt: "2024-02-12T11:30:00Z",
    readTime: 3,
    views: 543,
    likes: 28,
    comments: 9,
    tags: ["environnement", "déchets verts", "compost", "écologie"]
  },
  7: {
    id: 7,
    title: "Commerce local: ouverture de trois nouvelles boutiques",
    excerpt: "Le centre-ville s'enrichit de trois nouveaux commerces qui ouvriront leurs portes ce mois-ci.",
    content: `
      <p>Le dynamisme commercial de notre commune se confirme avec l'ouverture prochaine de trois nouvelles boutiques dans le centre-ville. Ces ouvertures témoignent de l'attractivité retrouvée de notre cœur de ville.</p>

      <h3>Une boulangerie artisanale</h3>
      <p>La première boutique sera une boulangerie-pâtisserie artisanale tenue par un jeune couple de boulangers formés dans les meilleures maisons. Ouverture prévue le 20 février.</p>

      <h3>Une librairie-café</h3>
      <p>Un concept original alliant librairie et salon de thé s'installera rue de la République. Ce lieu culturel proposera également des rencontres avec des auteurs locaux.</p>

      <h3>Un magasin de produits bio</h3>
      <p>Enfin, une épicerie spécialisée dans les produits biologiques et locaux complètera l'offre commerciale, en partenariat avec les producteurs de la région.</p>
    `,
    image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Économie",
    author: "Marc Leroy",
    publishedAt: "2024-02-11T14:15:00Z",
    readTime: 3,
    views: 432,
    likes: 19,
    comments: 7,
    tags: ["commerce", "économie locale", "centre-ville", "artisanat"]
  },
  101: {
    id: 101,
    title: 'Marché local: hausse de 15% de la fréquentation',
    excerpt: 'Les commerçants locaux observent une reprise encourageante.',
    content: `
      <p>Le marché hebdomadaire de notre commune connaît une croissance remarquable avec une hausse de 15% de la fréquentation par rapport à l'année dernière. Cette tendance positive témoigne du dynamisme retrouvé du commerce local.</p>

      <h3>Des chiffres encourageants</h3>
      <p>Selon les dernières statistiques de l'association des commerçants, le marché du samedi attire désormais plus de 2000 visiteurs chaque semaine, contre 1750 l'année précédente.</p>
    `,
    image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Économie',
    author: 'Sophie Laurent',
    publishedAt: '2024-02-15T09:00:00Z',
    readTime: 3,
    views: 654,
    likes: 42,
    comments: 8,
    tags: ['marché', 'commerce', 'économie locale']
  },
  102: {
    id: 102,
    title: 'Éducation: rénovation de l\'école primaire Jules Ferry',
    excerpt: 'Des travaux de modernisation pour améliorer les conditions d\'apprentissage des élèves.',
    content: `
      <p>L'école primaire Jules Ferry bénéficiera d'une rénovation complète durant les vacances d'été. Ce projet de 850 000 euros vise à moderniser les infrastructures et à améliorer le confort des 240 élèves de l'établissement.</p>

      <h3>Travaux de modernisation</h3>
      <p>Les travaux incluront la réfection de la toiture, l'isolation thermique, le remplacement des fenêtres et la modernisation du système de chauffage. Une attention particulière sera portée à l'accessibilité pour les personnes à mobilité réduite.</p>

      <h3>Nouveaux équipements</h3>
      <p>L'école sera dotée d'une nouvelle bibliothèque, d'une salle informatique équipée de tablettes numériques et d'un réfectoire agrandi. La cour de récréation sera également réaménagée avec de nouveaux jeux et espaces verts.</p>

      <h3>Planning des travaux</h3>
      <p>Les travaux débuteront le 8 juillet et s'achèveront avant la rentrée scolaire de septembre. Un suivi régulier sera assuré pour respecter les délais et garantir la qualité des réalisations.</p>
    `,
    image: 'https://images.pexels.com/photos/8500189/pexels-photo-8500189.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Éducation',
    author: 'Isabelle Martin',
    publishedAt: '2024-02-16T10:15:00Z',
    readTime: 4,
    views: 723,
    likes: 56,
    comments: 14,
    tags: ['éducation', 'école', 'rénovation', 'modernisation']
  },
  103: {
    id: 103,
    title: 'Santé: nouveau centre médical en construction',
    excerpt: 'Un pôle de santé moderne pour répondre aux besoins de la population.',
    content: `
      <p>La construction du nouveau centre médical a officiellement débuté. Cette infrastructure de 1200 m² regroupera plusieurs professionnels de santé et offrira des services médicaux de proximité à tous les habitants.</p>

      <h3>Un pôle de santé complet</h3>
      <p>Le centre accueillera deux médecins généralistes, un pédiatre, un dentiste, un kinésithérapeute et une pharmacie. Des consultations spécialisées seront également proposées une fois par semaine.</p>

      <h3>Ouverture prévue en 2025</h3>
      <p>Les travaux s'étaleront sur 18 mois avec une ouverture prévue pour janvier 2025. Ce projet représente un investissement de 2,8 millions d'euros.</p>
    `,
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Santé',
    author: 'Dr. Philippe Rousseau',
    publishedAt: '2024-02-15T14:30:00Z',
    readTime: 3,
    views: 891,
    likes: 67,
    comments: 19,
    tags: ['santé', 'centre médical', 'construction', 'proximité']
  },
  104: {
    id: 104,
    title: 'Numérique: fibre optique pour tous les quartiers',
    excerpt: 'Le déploiement de la fibre optique s\'accélère sur l\'ensemble du territoire communal.',
    content: `
      <p>Le déploiement de la fibre optique entre dans sa phase finale avec la couverture des derniers quartiers de la commune. D'ici fin 2024, 100% des foyers auront accès au très haut débit.</p>

      <h3>Un déploiement accéléré</h3>
      <p>Les travaux de raccordement s'intensifient avec trois équipes techniques mobilisées simultanément. Les quartiers des Tilleuls et de la Gare seront les prochains à bénéficier de cette technologie.</p>

      <h3>Impact sur l'attractivité</h3>
      <p>Cette infrastructure numérique renforce l'attractivité de la commune pour les entreprises et facilite le télétravail pour les habitants.</p>
    `,
    image: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Numérique',
    author: 'Technician Network',
    publishedAt: '2024-02-14T16:20:00Z',
    readTime: 3,
    views: 445,
    likes: 23,
    comments: 6,
    tags: ['numérique', 'fibre optique', 'très haut débit', 'infrastructure']
  },
  105: {
    id: 105,
    title: 'Patrimoine: restauration de l\'église Saint-Martin',
    excerpt: 'Des travaux de restauration pour préserver ce monument historique du XIIe siècle.',
    content: `
      <p>L'église Saint-Martin, monument historique classé du XIIe siècle, fait l'objet d'une campagne de restauration d'envergure. Ces travaux, soutenus par l'État et la région, préserveront ce patrimoine exceptionnel.</p>

      <h3>Restauration complète</h3>
      <p>Les travaux concernent la réfection de la toiture, la restauration des vitraux, la consolidation des murs et la mise aux normes électriques. Les fresques murales feront également l'objet d'une restauration minutieuse.</p>

      <h3>Financement participatif</h3>
      <p>Une souscription publique est lancée pour compléter le financement. Les dons bénéficient d'une réduction fiscale et contribuent à la sauvegarde de ce patrimoine commun.</p>
    `,
    image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Patrimoine',
    author: 'Marie-Claire Dubois',
    publishedAt: '2024-02-13T09:45:00Z',
    readTime: 4,
    views: 612,
    likes: 48,
    comments: 11,
    tags: ['patrimoine', 'église', 'restauration', 'histoire']
  },
  106: {
    id: 106,
    title: 'Jeunesse: nouveau skate-park inauguré',
    excerpt: 'Un équipement moderne pour la pratique des sports urbains par les jeunes de la commune.',
    content: `
      <p>Le nouveau skate-park a été inauguré en présence de nombreux jeunes et de leurs familles. Cet équipement de 400 m² répond à une forte demande des adolescents de la commune.</p>

      <h3>Équipement moderne</h3>
      <p>Le skate-park comprend des modules variés adaptés à tous les niveaux : bowl, street course, rampes et rails. L'éclairage LED permet une utilisation en soirée.</p>

      <h3>Concertation avec les jeunes</h3>
      <p>Le projet a été conçu en collaboration avec les jeunes utilisateurs qui ont participé aux ateliers de conception. Leur expertise a permis de créer un équipement parfaitement adapté à leurs besoins.</p>
    `,
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Jeunesse',
    author: 'Lucas Moreau',
    publishedAt: '2024-02-12T15:00:00Z',
    readTime: 3,
    views: 387,
    likes: 29,
    comments: 8,
    tags: ['jeunesse', 'skate-park', 'sports urbains', 'loisirs']
  },
  201: {
    id: 201,
    title: 'Agriculture: marché de producteurs locaux',
    excerpt: 'Un nouveau marché hebdomadaire met en valeur les produits du terroir.',
    content: `
      <p>Chaque mercredi matin, la place du marché accueille désormais un marché exclusivement dédié aux producteurs locaux. Cette initiative soutient l'agriculture de proximité et offre aux habitants des produits frais et de qualité.</p>

      <h3>Produits du terroir</h3>
      <p>Une quinzaine de producteurs proposent légumes, fruits, fromages, viandes et produits transformés issus de l'agriculture locale dans un rayon de 30 kilomètres.</p>

      <h3>Circuit court</h3>
      <p>Cette démarche favorise les circuits courts, réduit l'empreinte carbone et maintient le lien entre producteurs et consommateurs.</p>
    `,
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Agriculture',
    author: 'Pierre Cultivateur',
    publishedAt: '2024-02-11T08:30:00Z',
    readTime: 3,
    views: 521,
    likes: 35,
    comments: 12,
    tags: ['agriculture', 'producteurs locaux', 'marché', 'terroir']
  },
  202: {
    id: 202,
    title: 'Tourisme: nouveau sentier de randonnée balisé',
    excerpt: 'Un parcours de 12 km pour découvrir les paysages et le patrimoine local.',
    content: `
      <p>L'office de tourisme vient d'inaugurer un nouveau sentier de randonnée de 12 kilomètres. Ce parcours balisé permet de découvrir les plus beaux paysages de la commune et son patrimoine historique.</p>

      <h3>Parcours varié</h3>
      <p>Le sentier traverse forêts, prairies et villages, avec des points de vue remarquables sur la vallée. Plusieurs panneaux d'interprétation jalonnent le parcours.</p>

      <h3>Application mobile</h3>
      <p>Une application gratuite propose un guide audio du parcours avec des informations sur la faune, la flore et l'histoire locale.</p>
    `,
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Tourisme',
    author: 'Guide Nature',
    publishedAt: '2024-02-10T14:45:00Z',
    readTime: 3,
    views: 678,
    likes: 44,
    comments: 9,
    tags: ['tourisme', 'randonnée', 'sentier', 'patrimoine']
  },
  203: {
    id: 203,
    title: 'Solidarité: nouvelle épicerie sociale',
    excerpt: 'Un lieu d\'aide alimentaire pour les familles en difficulté.',
    content: `
      <p>L'épicerie sociale "Solidarité Plus" ouvre ses portes pour venir en aide aux familles en situation de précarité. Cette structure propose des produits alimentaires et d'hygiène à prix réduits.</p>

      <h3>Aide alimentaire</h3>
      <p>L'épicerie propose des produits frais et secs à 10% de leur prix habituel. Un système de points permet aux bénéficiaires de choisir librement leurs achats.</p>

      <h3>Accompagnement social</h3>
      <p>Au-delà de l'aide alimentaire, l'épicerie propose un accompagnement social et des ateliers de cuisine économique.</p>
    `,
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Solidarité',
    author: 'Travailleur Social',
    publishedAt: '2024-02-09T11:20:00Z',
    readTime: 3,
    views: 456,
    likes: 38,
    comments: 15,
    tags: ['solidarité', 'épicerie sociale', 'aide alimentaire', 'précarité']
  },
  204: {
    id: 204,
    title: 'Innovation: fab lab communautaire',
    excerpt: 'Un espace de création numérique ouvert à tous les habitants.',
    content: `
      <p>Le fab lab communautaire ouvre ses portes dans les locaux de l'ancienne poste. Cet espace de création numérique met à disposition des habitants des outils de fabrication moderne.</p>

      <h3>Équipements disponibles</h3>
      <p>Le fab lab dispose d'imprimantes 3D, de découpeuses laser, d'outils de prototypage électronique et d'un atelier de menuiserie numérique.</p>

      <h3>Formation et accompagnement</h3>
      <p>Des formations gratuites sont proposées pour apprendre à utiliser les équipements. Des makers expérimentés accompagnent les débutants dans leurs projets.</p>
    `,
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Innovation',
    author: 'Maker Expert',
    publishedAt: '2024-02-08T16:10:00Z',
    readTime: 3,
    views: 334,
    likes: 27,
    comments: 7,
    tags: ['innovation', 'fab lab', 'création numérique', 'formation']
  },
  205: {
    id: 205,
    title: 'Mobilité: stations de vélos en libre-service',
    excerpt: 'Dix stations de vélos partagés installées dans toute la commune.',
    content: `
      <p>Le système de vélos en libre-service "VéloCité" est désormais opérationnel avec dix stations réparties sur l'ensemble du territoire communal. Cette initiative favorise la mobilité douce et réduit l'usage de la voiture.</p>

      <h3>Réseau étendu</h3>
      <p>Les stations sont situées près des équipements publics, des commerces et des arrêts de transport en commun pour faciliter l'intermodalité.</p>

      <h3>Tarification attractive</h3>
      <p>L'abonnement annuel est proposé à 30 euros avec les 30 premières minutes gratuites pour chaque trajet.</p>
    `,
    image: 'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Mobilité',
    author: 'Responsable Mobilité',
    publishedAt: '2024-02-07T13:25:00Z',
    readTime: 3,
    views: 567,
    likes: 41,
    comments: 10,
    tags: ['mobilité', 'vélos', 'libre-service', 'transport doux']
  },
  206: {
    id: 206,
    title: 'Énergie: centrale solaire citoyenne',
    excerpt: 'Un projet participatif pour développer les énergies renouvelables.',
    content: `
      <p>La centrale solaire citoyenne voit le jour grâce à la mobilisation des habitants. Ce projet participatif de 500 kWc produira l'équivalent de la consommation électrique de 200 foyers.</p>

      <h3>Financement participatif</h3>
      <p>Les habitants ont pu investir dans le projet via une coopérative citoyenne. Plus de 150 familles participent à cette initiative énergétique.</p>

      <h3>Retombées locales</h3>
      <p>Les bénéfices de la vente d'électricité financeront de nouveaux projets environnementaux sur la commune.</p>
    `,
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Énergie',
    author: 'Coopérative Citoyenne',
    publishedAt: '2024-02-06T10:40:00Z',
    readTime: 3,
    views: 423,
    likes: 33,
    comments: 8,
    tags: ['énergie', 'solaire', 'participatif', 'renouvelable']
  },
  301: {
    id: 301,
    title: 'Festivités: carnaval de printemps',
    excerpt: 'Trois jours de fête pour célébrer l\'arrivée du printemps.',
    content: `
      <p>Le carnaval de printemps revient pour sa 20e édition avec un programme festif exceptionnel. Trois jours de célébrations animeront les rues de la commune du 20 au 22 mars.</p>

      <h3>Programme varié</h3>
      <p>Défilés costumés, concerts, spectacles de rue et animations pour enfants rythmeront ces journées festives. Le thème de cette année : "Les métiers d'autrefois".</p>

      <h3>Participation citoyenne</h3>
      <p>Plus de 500 bénévoles participent à l'organisation de cet événement qui attire chaque année près de 10 000 visiteurs.</p>
    `,
    image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Festivités',
    author: 'Comité des Fêtes',
    publishedAt: '2024-02-05T15:30:00Z',
    readTime: 3,
    views: 789,
    likes: 56,
    comments: 18,
    tags: ['festivités', 'carnaval', 'printemps', 'animation']
  },
  302: {
    id: 302,
    title: 'Artisanat: salon des métiers d\'art',
    excerpt: 'Une exposition-vente met en valeur le savoir-faire local.',
    content: `
      <p>Le salon des métiers d'art rassemble une trentaine d'artisans locaux dans la salle polyvalente. Cette manifestation met en valeur le savoir-faire traditionnel et contemporain de notre territoire.</p>

      <h3>Artisans passionnés</h3>
      <p>Potiers, ébénistes, bijoutiers, tisserands et sculpteurs présentent leurs créations et font découvrir leurs techniques aux visiteurs.</p>

      <h3>Démonstrations en direct</h3>
      <p>Des ateliers de démonstration permettent au public de s'initier aux gestes traditionnels de l'artisanat.</p>
    `,
    image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Artisanat',
    author: 'Chambre des Métiers',
    publishedAt: '2024-02-04T12:15:00Z',
    readTime: 3,
    views: 445,
    likes: 32,
    comments: 9,
    tags: ['artisanat', 'métiers d\'art', 'savoir-faire', 'tradition']
  },
  303: {
    id: 303,
    title: 'Gastronomie: concours du meilleur plat local',
    excerpt: 'Les restaurateurs rivalisent de créativité autour des produits du terroir.',
    content: `
      <p>Le concours gastronomique "Saveurs du terroir" met à l'honneur la cuisine locale. Huit restaurateurs de la commune participent à cette compétition culinaire organisée par l'office de tourisme.</p>

      <h3>Produits locaux à l'honneur</h3>
      <p>Chaque chef doit créer un menu complet en utilisant exclusivement des produits issus de l'agriculture locale dans un rayon de 20 kilomètres.</p>

      <h3>Jury d'experts</h3>
      <p>Un jury composé de chefs reconnus, de producteurs locaux et de gastronomes évaluera les créations selon plusieurs critères : goût, créativité et valorisation des produits locaux.</p>
    `,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Gastronomie',
    author: 'Chef Cuisinier',
    publishedAt: '2024-02-03T14:50:00Z',
    readTime: 3,
    views: 612,
    likes: 47,
    comments: 13,
    tags: ['gastronomie', 'concours', 'terroir', 'restauration']
  },
  304: {
    id: 304,
    title: 'Histoire: exposition sur le patrimoine industriel',
    excerpt: 'Une plongée dans le passé industriel de la commune.',
    content: `
      <p>L'exposition "Mémoire industrielle" retrace l'histoire des entreprises qui ont façonné l'identité économique de la commune. Documents d'archives, témoignages et objets d'époque racontent cette aventure humaine.</p>

      <h3>Patrimoine préservé</h3>
      <p>L'exposition présente l'évolution des techniques, les conditions de travail d'autrefois et l'impact social de l'industrialisation sur la vie locale.</p>

      <h3>Témoignages vivants</h3>
      <p>D'anciens ouvriers et dirigeants d'entreprises partagent leurs souvenirs lors de conférences organisées chaque samedi.</p>
    `,
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Histoire',
    author: 'Historien Local',
    publishedAt: '2024-02-02T09:35:00Z',
    readTime: 4,
    views: 378,
    likes: 28,
    comments: 7,
    tags: ['histoire', 'patrimoine industriel', 'mémoire', 'exposition']
  },
  305: {
    id: 305,
    title: 'Nature: création d\'un jardin pédagogique',
    excerpt: 'Un espace vert éducatif pour sensibiliser à la biodiversité.',
    content: `
      <p>Le jardin pédagogique "Nature en ville" ouvre ses portes près de l'école primaire. Cet espace de 800 m² sensibilise petits et grands à la biodiversité urbaine et aux pratiques de jardinage écologique.</p>

      <h3>Espaces thématiques</h3>
      <p>Le jardin comprend un potager bio, une zone de plantes aromatiques, un hôtel à insectes et une mare pédagogique pour observer la faune aquatique.</p>

      <h3>Animations scolaires</h3>
      <p>Les classes de l'école primaire bénéficient d'ateliers hebdomadaires pour apprendre les cycles naturels et les gestes éco-responsables.</p>
    `,
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Nature',
    author: 'Animateur Nature',
    publishedAt: '2024-02-01T11:20:00Z',
    readTime: 3,
    views: 523,
    likes: 39,
    comments: 11,
    tags: ['nature', 'jardin pédagogique', 'biodiversité', 'éducation']
  },
  306: {
    id: 306,
    title: 'Technologie: borne de recharge électrique',
    excerpt: 'Nouvelles infrastructures pour véhicules électriques.',
    content: `
      <p>Quatre bornes de recharge rapide pour véhicules électriques sont installées sur le parking de la mairie. Cette infrastructure accompagne la transition vers une mobilité plus respectueuse de l'environnement.</p>

      <h3>Recharge rapide</h3>
      <p>Les bornes permettent une recharge complète en moins de 2 heures. Elles sont compatibles avec tous les modèles de véhicules électriques du marché.</p>

      <h3>Service 24h/24</h3>
      <p>Accessibles jour et nuit, les bornes fonctionnent avec une carte ou une application mobile. Le tarif préférentiel pour les habitants encourage l'adoption de véhicules propres.</p>
    `,
    image: 'https://images.pexels.com/photos/4254557/pexels-photo-4254557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Technologie',
    author: 'Technicien Énergie',
    publishedAt: '2024-01-31T16:45:00Z',
    readTime: 3,
    views: 467,
    likes: 31,
    comments: 8,
    tags: ['technologie', 'véhicule électrique', 'recharge', 'mobilité']
  },
  401: {
    id: 401,
    title: 'Nouvelle infrastructure sportive: complexe aquatique en projet',
    excerpt: 'La municipalité annonce la construction d\'un nouveau complexe aquatique pour 2025.',
    content: `
      <p>La municipalité vient d'annoncer officiellement le lancement du projet de construction d'un nouveau complexe aquatique. Cette infrastructure moderne, d'un coût de 8,5 millions d'euros, devrait voir le jour d'ici 2025.</p>

      <h3>Un équipement moderne et écologique</h3>
      <p>Le futur complexe aquatique comprendra une piscine olympique de 50 mètres, un bassin ludique avec toboggan, un espace bien-être avec sauna et hammam, ainsi qu'un bassin d'apprentissage pour les plus jeunes.</p>

      <p>« Ce projet répond à une demande forte de nos concitoyens », explique le maire adjoint aux sports, Thomas Lefevre. « Nous avons conçu un équipement qui servira aussi bien aux sportifs de haut niveau qu'aux familles souhaitant se détendre. »</p>

      <h3>Respect de l'environnement</h3>
      <p>Le complexe sera alimenté par des panneaux solaires et utilisera un système de récupération des eaux de pluie. La construction respectera les normes HQE (Haute Qualité Environnementale) les plus strictes.</p>

      <h3>Impact sur l'emploi local</h3>
      <p>Ce projet créera une quinzaine d'emplois permanents et mobilisera les entreprises locales du BTP pendant la phase de construction. L'ouverture est prévue pour septembre 2025.</p>
    `,
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Sport',
    author: 'Thomas Lefevre',
    publishedAt: '2024-02-16T08:30:00Z',
    readTime: 4,
    views: 892,
    likes: 76,
    comments: 18,
    tags: ['sport', 'infrastructure', 'piscine', 'environnement']
  },
  402: {
    id: 402,
    title: 'Tennis: tournoi inter-communes',
    excerpt: 'Compétition sportive rassemblant les meilleurs joueurs de la région.',
    content: `
      <p>Le tournoi de tennis inter-communes se déroulera du 15 au 17 juin sur les courts municipaux. Cette compétition rassemble les meilleurs joueurs amateurs de huit communes voisines.</p>

      <h3>Compétition ouverte</h3>
      <p>Le tournoi propose plusieurs catégories : seniors hommes et femmes, vétérans et jeunes. Les inscriptions sont ouvertes jusqu'au 1er juin.</p>

      <h3>Animation festive</h3>
      <p>En marge des matchs, des animations et une buvette seront proposées pour créer une ambiance conviviale autour de cet événement sportif.</p>
    `,
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Sport',
    author: 'Club de Tennis',
    publishedAt: '2024-01-30T14:20:00Z',
    readTime: 3,
    views: 356,
    likes: 24,
    comments: 6,
    tags: ['sport', 'tennis', 'tournoi', 'compétition']
  },
  403: {
    id: 403,
    title: 'Football: nouveau terrain synthétique',
    excerpt: 'Modernisation des installations sportives pour le club local.',
    content: `
      <p>Le club de football inaugure son nouveau terrain synthétique de dernière génération. Cette installation permet une pratique sportive optimale quelles que soient les conditions météorologiques.</p>

      <h3>Technologie avancée</h3>
      <p>Le terrain utilise une pelouse synthétique de nouvelle génération, plus respectueuse de l'environnement et offrant un confort de jeu optimal.</p>

      <h3>Utilisation élargie</h3>
      <p>Au-delà du football, le terrain accueillera d'autres sports et servira pour l'éducation physique des écoles de la commune.</p>
    `,
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Sport',
    author: 'Président FC Local',
    publishedAt: '2024-01-29T10:15:00Z',
    readTime: 3,
    views: 478,
    likes: 35,
    comments: 9,
    tags: ['sport', 'football', 'terrain synthétique', 'modernisation']
  },
  404: {
    id: 404,
    title: 'Cyclisme: nouvelle piste cyclable',
    excerpt: 'Aménagement d\'une voie verte pour les cyclistes et piétons.',
    content: `
      <p>La nouvelle piste cyclable de 5 kilomètres relie désormais le centre-ville à la zone commerciale. Cette voie verte sécurisée encourage la pratique du vélo pour les déplacements quotidiens.</p>

      <h3>Sécurité renforcée</h3>
      <p>La piste est entièrement séparée de la circulation automobile avec un revêtement spécifique et une signalisation adaptée.</p>

      <h3>Mobilité douce</h3>
      <p>Cet aménagement s'inscrit dans le plan communal de développement des mobilités douces et de réduction des émissions de CO2.</p>
    `,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Sport',
    author: 'Responsable Voirie',
    publishedAt: '2024-01-28T13:40:00Z',
    readTime: 3,
    views: 623,
    likes: 42,
    comments: 12,
    tags: ['sport', 'cyclisme', 'piste cyclable', 'mobilité douce']
  },
  405: {
    id: 405,
    title: 'Natation: cours pour seniors',
    excerpt: 'Programme d\'aquagym adapté aux personnes âgées.',
    content: `
      <p>La piscine municipale lance un programme d'aquagym spécialement conçu pour les seniors. Ces cours adaptés favorisent le maintien en forme et le lien social.</p>

      <h3>Activité adaptée</h3>
      <p>Les séances d'aquagym sont encadrées par un maître-nageur formé aux spécificités de l'activité physique pour seniors.</p>

      <h3>Bienfaits reconnus</h3>
      <p>L'aquagym améliore la souplesse, renforce les muscles et soulage les articulations tout en préservant le plaisir de l'activité physique.</p>
    `,
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Sport',
    author: 'Maître-nageur',
    publishedAt: '2024-01-27T09:25:00Z',
    readTime: 3,
    views: 412,
    likes: 28,
    comments: 7,
    tags: ['sport', 'natation', 'seniors', 'aquagym']
  },
  406: {
    id: 406,
    title: 'Athlétisme: piste d\'athlétisme rénovée',
    excerpt: 'Remise aux normes de la piste pour les compétitions officielles.',
    content: `
      <p>La piste d'athlétisme du stade municipal a été entièrement rénovée pour répondre aux normes des compétitions officielles. Cette modernisation bénéficie aux athlètes locaux et permet d'accueillir des événements régionaux.</p>

      <h3>Normes officielles</h3>
      <p>La nouvelle piste respecte toutes les normes internationales avec un revêtement moderne qui améliore les performances et réduit les risques de blessures.</p>

      <h3>Équipements complets</h3>
      <p>Les aires de saut et de lancer ont également été rénovées, offrant un complexe d'athlétisme complet aux sportifs de tous niveaux.</p>
    `,
    image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Sport',
    author: 'Club d\'Athlétisme',
    publishedAt: '2024-01-26T15:50:00Z',
    readTime: 3,
    views: 389,
    likes: 26,
    comments: 5,
    tags: ['sport', 'athlétisme', 'piste', 'rénovation']
  }
};

// Fonction requise pour la génération statique
export async function generateStaticParams() {
  // Retourne la liste des IDs d'articles pour la génération statique
  return Object.keys(articles).map((id) => ({
    id: id.toString(),
  }));
}

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const articleId = parseInt(params.id);
  const article = articles[articleId as keyof typeof articles];

  if (!article) {
    notFound();
  }

  const publishedDate = new Date(article.publishedAt);
  const relatedArticles = [
    {
      id: 5,
      title: "Budget communal 2024: les priorités annoncées",
      image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Politique"
    },
    {
      id: 6,
      title: "Environnement: nouvelle collecte de déchets verts",
      image: "https://images.pexels.com/photos/2909077/pexels-photo-2909077.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Environnement"
    },
    {
      id: 7,
      title: "Commerce local: ouverture de trois nouvelles boutiques",
      image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Économie"
    }
  ];

  return (
    <Layout>
      <div className="py-8">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
              <li>/</li>
              <li><Link href="/actualites" className="hover:text-primary">Actualités</Link></li>
              <li>/</li>
              <li className="text-gray-900 truncate">{article.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-8">
                <Badge variant="outline" className="mb-4">
                  {article.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Par {article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{publishedDate.toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{article.views} vues</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>{article.comments} commentaires</span>
                  </div>
                  <span>📖 {article.readTime} min de lecture</span>
                </div>

                {/* Social Actions */}
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    J'aime ({article.likes})
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Mots-clés :</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-8" />

              {/* Author Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{article.author}</h4>
                    <p className="text-gray-600 text-sm">
                      Journaliste spécialisé en actualités locales. 
                      Couvre l'actualité municipale depuis plus de 10 ans.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Commentaires ({article.comments})
                  </h3>
                  
                  {/* Comment Form */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <textarea
                      placeholder="Laissez votre commentaire..."
                      className="w-full p-3 border rounded-lg resize-none h-24"
                      rows={3}
                    />
                    <div className="flex justify-end mt-3">
                      <Button size="sm">Publier</Button>
                    </div>
                  </div>

                  {/* Sample Comments */}
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm">Jean Martin</span>
                            <span className="text-xs text-gray-500">il y a 2 heures</span>
                          </div>
                          <p className="text-gray-700 text-sm">
                            Excellente initiative ! Il était temps de rénover cette place. 
                            J'espère que les espaces verts seront bien entretenus.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm">Sophie Dubois</span>
                            <span className="text-xs text-gray-500">il y a 5 heures</span>
                          </div>
                          <p className="text-gray-700 text-sm">
                            Bravo pour ce projet ! Ma question : y aura-t-il assez de places de parking 
                            aux alentours une fois les travaux terminés ?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Articles liés</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((relatedArticle) => (
                      <div key={relatedArticle.id} className="flex space-x-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-grow">
                          <Badge variant="outline" className="text-xs mb-1">
                            {relatedArticle.category}
                          </Badge>
                          <h4 className="text-sm font-medium leading-tight">
                            <Link href={`/articles/${relatedArticle.id}`} className="hover:text-primary">
                              {relatedArticle.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez nos actualités directement dans votre boîte mail
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