'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FavoritesButtonProps {
  itemId: string;
  itemType: 'article' | 'event' | 'book';
  className?: string;
}

export function FavoritesButton({ itemId, itemType, className }: FavoritesButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    // Sauvegarder dans localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteItem = { id: itemId, type: itemType };
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav: any) => !(fav.id === itemId && fav.type === itemType)
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(favoriteItem);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleFavorite}
      className={cn(
        "transition-all duration-200",
        isFavorite && "text-red-600 border-red-600 bg-red-50",
        className
      )}
    >
      <Heart 
        className={cn(
          "w-4 h-4 mr-2 transition-all duration-200",
          isFavorite && "fill-current"
        )} 
      />
      {isFavorite ? 'Retiré des favoris' : 'Ajouter aux favoris'}
    </Button>
  );
}