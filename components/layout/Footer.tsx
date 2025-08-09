import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    navigation: [
      { title: 'Accueil', href: '/' },
      { title: 'Actualités', href: '/actualites' },
      { title: 'Sport', href: '/sport' },
      { title: 'Culture', href: '/culture' },
      { title: 'Économie', href: '/economie' },
      { title: 'Société', href: '/societe' },
    ],
    services: [
      { title: 'Agenda', href: '/evenements' },
      { title: 'Annonces', href: '/annonces' },
      { title: 'Galerie Photos', href: '/galerie/photos' },
      { title: 'Vidéos', href: '/galerie/videos' },
      { title: 'Dossiers', href: '/dossiers' },
      { title: 'Flash Infos', href: '/flash-infos' },
    ],
    info: [
      { title: 'À Propos', href: '/a-propos' },
      { title: 'Contact', href: '/contact' },
      { title: 'Newsletter', href: '/newsletter' },
      { title: 'App Mobile', href: '/app-mobile' },
      { title: 'Mentions Légales', href: '/mentions-legales' },
      { title: 'Politique de Confidentialité', href: '/confidentialite' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Restez informé</h3>
              <p className="text-blue-100">Recevez nos dernières actualités directement dans votre boîte mail</p>
            </div>
            <div className="flex w-full md:w-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-white text-gray-900 border-none rounded-r-none md:w-64"
              />
              <Button variant="secondary" className="rounded-l-none">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="text-xl font-bold">Voix de la Communauté</span>
              </div>
              <p className="text-gray-300 mb-4">
                Votre plateforme d'information dédiée à notre commune. 
                Créé par et pour les habitants.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-300 hover:text-secondary transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-300 hover:text-secondary transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-gray-300">123 Rue de la Commune, 12345 Ville</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-gray-300">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-gray-300">contact@voixcommunaute.fr</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold mb-2">Informations Utiles</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  {footerLinks.info.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} className="hover:text-secondary transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Voix de la Communauté. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-secondary text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-secondary text-sm transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;