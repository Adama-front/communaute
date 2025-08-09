import Link from 'next/link';
import Image from 'next/image';
import { Book, Users, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const LibraryPreview = () => {
  const libraryStats = {
    books: 15000,
    members: 1250,
    events: 8
  };

  const featuredBooks = [
    {
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      available: true
    },
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      available: false
    },
    {
      title: 'L\'Étranger',
      author: 'Albert Camus',
      available: true
    }
  ];

  const upcomingEvents = [
    {
      title: 'Heure du conte',
      date: '2024-02-21',
      audience: 'Enfants 3-8 ans'
    },
    {
      title: 'Club de lecture',
      date: '2024-02-24',
      audience: 'Adultes'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-indigo-600 rounded"></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Médiathèque Municipale
                </h2>
                <p className="text-lg text-gray-600">Votre espace de culture et de savoir</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Découvrez notre riche collection de plus de 15 000 livres, magazines, CD, DVD et livres numériques. 
              Un lieu de culture, d'apprentissage et de rencontre au cœur de notre commune.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600">{libraryStats.books.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Livres</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600">{libraryStats.members}</div>
                <div className="text-sm text-gray-600">Adhérents</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600">{libraryStats.events}</div>
                <div className="text-sm text-gray-600">Événements/mois</div>
              </div>
            </div>

            {/* Featured Books */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Sélection du moment</h3>
              <div className="space-y-2">
                {featuredBooks.map((book, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{book.title}</h4>
                      <p className="text-xs text-gray-600">{book.author}</p>
                    </div>
                    <Badge variant={book.available ? "default" : "secondary"} className="text-xs">
                      {book.available ? 'Disponible' : 'Emprunté'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Prochains événements</h3>
              <div className="space-y-2">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                      <p className="text-xs text-gray-600">{event.audience}</p>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(event.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/bibliotheque">
                <Book className="w-4 h-4 mr-2" />
                Découvrir la médiathèque
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Intérieur de la bibliothèque"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Collection de livres"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Espace lecture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Événement bibliothèque"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryPreview;