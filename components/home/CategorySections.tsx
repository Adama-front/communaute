'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CategorySections = () => {
  const [formattedDates, setFormattedDates] = useState<{[key: string]: string}>({});

  const categories = [
    {
      title: 'Économie',
      href: '/economie',
      color: 'bg-green-600',
      articles: [
        {
          id: 101,
          title: 'Marché local: hausse de 15% de la fréquentation',
          excerpt: 'Les commerçants locaux observent une reprise encourageante.',
          image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=400',
          publishedAt: '2024-02-15'
        },
        {
          id: 102,
          title: 'Nouvelle zone artisanale en projet',
          excerpt: 'Un espace dédié aux métiers d\'art et à l\'artisanat local.',
          image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
          publishedAt: '2024-02-14'
        }
      ]
    },
    {
      title: 'Sport',
      href: '/sport',
      color: 'bg-blue-600',
      articles: [
        {
          id: 201,
          title: 'Championnat régional: nos équipes en finale',
          excerpt: 'Trois équipes locales se qualifient pour les finales régionales.',
          image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400',
          publishedAt: '2024-02-15'
        },
        {
          id: 202,
          title: 'Nouveaux cours de fitness pour seniors',
          excerpt: 'Un programme adapté pour maintenir la forme après 60 ans.',
          image: 'https://images.pexels.com/photos/853247/pexels-photo-853247.jpeg?auto=compress&cs=tinysrgb&w=400',
          publishedAt: '2024-02-13'
        }
      ]
    },
    {
      title: 'Culture',
      href: '/culture',
      color: 'bg-purple-600',
      articles: [
        {
          id: 301,
          title: 'Exposition: 50 ans d\'histoire locale',
          excerpt: 'Une rétrospective photographique émouvante à la médiathèque.',
          image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=400',
          publishedAt: '2024-02-14'
        },
        {
          id: 302,
          title: 'Atelier d\'écriture: inscriptions ouvertes',
          excerpt: 'Découvrez l\'art de l\'écriture avec des auteurs locaux.',
          image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=400',
          publishedAt: '2024-02-12'
        }
      ]
    },
    {
      title: 'Société',
      href: '/societe',
      color: 'bg-red-600',
      articles: [
        {
          id: 401,
          title: 'Solidarité: collecte alimentaire exceptionnelle',
          excerpt: 'Les associations locales mobilisées pour les plus démunis.',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
          publishedAt: '2024-02-15'
        },
        {
          id: 402,
          title: 'Transport: nouvelle ligne de bus gratuite',
          excerpt: 'Amélioration de la mobilité pour tous les habitants.',
          image: 'https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=400',
          publishedAt: '2024-02-13'
        }
      ]
    }
  ];

  useEffect(() => {
    const dates: {[key: string]: string} = {};
    categories.forEach(category => {
      category.articles.forEach(article => {
        dates[article.publishedAt] = new Date(article.publishedAt).toLocaleDateString('fr-FR');
      });
    });
    setFormattedDates(dates);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-1 h-8 ${category.color} rounded`}></div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={category.href}>
                    Voir tout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {category.articles.map((article, index) => (
                  <Card key={article.id} className="news-card hover-lift">
                    <div className="flex">
                      <div className="relative w-32 h-24 flex-shrink-0">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover rounded-l-lg"
                        />
                      </div>
                      <CardContent className="p-4 flex-grow">
                        <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                          <Link 
                            href={`/articles/${article.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {article.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{formattedDates[article.publishedAt] || ''}</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySections;