'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  const [formattedDates, setFormattedDates] = useState<{[key: string]: string}>({});

  const featuredArticles = [
    {
      id: 1,
      title: "Nouveau projet urbain: La place centrale sera rénovée",
      excerpt: "Un investissement de 2,5 millions d'euros pour moderniser le cœur de notre ville avec des espaces verts et une fontaine interactive.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Urbanisme",
      author: "Marie Dubois",
      publishedAt: "2024-02-15",
      featured: true,
    },
    {
      id: 2,
      title: "Festival de musique: 50 artistes locaux à l'honneur",
      excerpt: "Le festival annuel met en lumière les talents de notre région avec trois jours de concerts gratuits.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Culture",
      author: "Jean Martin",
      publishedAt: "2024-02-14",
    },
    {
      id: 3,
      title: "Économie: Trois nouvelles entreprises s'installent",
      excerpt: "L'emploi local bénéficie de l'arrivée de startups innovantes dans la zone industrielle.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Économie",
      author: "Sophie Laurent",
      publishedAt: "2024-02-13",
    },
    {
      id: 4,
      title: "Sport: Inauguration du nouveau complexe sportif",
      excerpt: "Un équipement moderne de 1000m² pour développer la pratique sportive locale.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sport",
      author: "Pierre Moreau",
      publishedAt: "2024-02-12",
    }
  ];

  useEffect(() => {
    const dates: {[key: string]: string} = {};
    featuredArticles.forEach(article => {
      dates[article.publishedAt] = new Date(article.publishedAt).toLocaleDateString('fr-FR');
    });
    setFormattedDates(dates);
  }, []);

  const mainArticle = featuredArticles[0];
  const sideArticles = featuredArticles.slice(1);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <Card className="news-card hover-lift h-full">
              <div className="relative h-64 md:h-80">
                <Image
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {mainArticle.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  {mainArticle.title}
                </h2>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  {mainArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{mainArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{formattedDates[mainArticle.publishedAt] || ''}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/articles/${mainArticle.id}`}>
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            <h3 className="section-title">Autres Actualités</h3>
            {sideArticles.map((article) => (
              <Card key={article.id} className="news-card hover-lift">
                <div className="flex">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-l-lg"
                    />
                  </div>
                  <CardContent className="p-4 flex-grow">
                    <div className="mb-2">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                      <Link href={`/articles/${article.id}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-xs mb-2 line-clamp-2">
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
      </div>
    </section>
  );
};

export default HeroSection;