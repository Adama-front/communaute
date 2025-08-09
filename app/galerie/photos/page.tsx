'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');

  const categories = ['Toutes', 'Événements', 'Architecture', 'Nature', 'Sport', 'Culture'];

  const photos = [
    {
      id: 1,
      title: 'Festival de musique 2024',
      description: 'Concert en plein air sur la place centrale',
      src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Événements',
      photographer: 'Jean Dupont',
      date: '2024-02-15',
      likes: 45
    },
    {
      id: 2,
      title: 'Mairie au coucher du soleil',
      description: 'Vue de notre mairie historique en fin de journée',
      src: 'https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Architecture',
      photographer: 'Marie Martin',
      date: '2024-02-14',
      likes: 32
    },
    {
      id: 3,
      title: 'Parc communal en automne',
      description: 'Les couleurs automnales dans notre parc principal',
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Nature',
      photographer: 'Pierre Dubois',
      date: '2024-02-13',
      likes: 67
    },
    {
      id: 4,
      title: 'Match de football local',
      description: 'Notre équipe en action au stade municipal',
      src: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sport',
      photographer: 'Sophie Laurent',
      date: '2024-02-12',
      likes: 28
    },
    {
      id: 5,
      title: 'Exposition d\'art contemporain',
      description: 'Vernissage à la galerie municipale',
      src: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Culture',
      photographer: 'Thomas Moreau',
      date: '2024-02-11',
      likes: 19
    },
    {
      id: 6,
      title: 'Marché hebdomadaire',
      description: 'Animation du samedi matin sur la place du marché',
      src: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Événements',
      photographer: 'Claire Durand',
      date: '2024-02-10',
      likes: 41
    },
    {
      id: 7,
      title: 'Église Saint-Pierre',
      description: 'Notre patrimoine religieux sous un ciel dramatique',
      src: 'https://images.pexels.com/photos/208271/pexels-photo-208271.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Architecture',
      photographer: 'Michel Bernard',
      date: '2024-02-09',
      likes: 38
    },
    {
      id: 8,
      title: 'Sentier de randonnée',
      description: 'Le chemin des crêtes au printemps',
      src: 'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Nature',
      photographer: 'Isabelle Petit',
      date: '2024-02-08',
      likes: 55
    },
    {
      id: 9,
      title: 'Course cycliste communale',
      description: 'Le peloton traverse le centre-ville',
      src: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sport',
      photographer: 'Antoine Rousseau',
      date: '2024-02-07',
      likes: 23
    }
  ];

  const filteredPhotos = selectedCategory === 'Toutes' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex].id);
  };

  const selectedPhotoData = selectedPhoto 
    ? photos.find(photo => photo.id === selectedPhoto)
    : null;

  return (
    <Layout>
      <div className="py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galerie Photos
            </h1>
            <p className="text-lg text-gray-600">
              Découvrez notre commune à travers l'objectif de nos photographes locaux
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {filteredPhotos.length} photo{filteredPhotos.length > 1 ? 's' : ''} 
              {selectedCategory !== 'Toutes' && ` dans "${selectedCategory}"`}
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredPhotos.map((photo) => (
              <Card key={photo.id} className="group cursor-pointer hover-lift" onClick={() => openLightbox(photo.id)}>
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {photo.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                    {photo.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Par {photo.photographer}</span>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{photo.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lightbox */}
          {selectedPhoto && selectedPhotoData && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  onClick={closeLightbox}
                >
                  <X className="w-4 h-4" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  onClick={() => navigatePhoto('prev')}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  onClick={() => navigatePhoto('next')}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Main Image */}
                <div className="relative max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedPhotoData.src}
                    alt={selectedPhotoData.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Photo Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{selectedPhotoData.title}</h3>
                      <p className="text-sm text-white/80 mb-2">{selectedPhotoData.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-white/70">
                        <span>📸 {selectedPhotoData.photographer}</span>
                        <span>📅 {new Date(selectedPhotoData.date).toLocaleDateString('fr-FR')}</span>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{selectedPhotoData.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PhotoGallery;