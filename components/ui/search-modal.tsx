'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      // Simuler une recherche
      const mockResults = [
        { id: 1, title: 'Nouveau projet urbain', type: 'Article', url: '/articles/1' },
        { id: 2, title: 'Festival de musique', type: 'Événement', url: '/evenements/2' },
        { id: 3, title: 'Bibliothèque municipale', type: 'Service', url: '/bibliotheque' },
      ].filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(mockResults);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Rechercher
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="search"
              placeholder="Rechercher des articles, événements, services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10"
              autoFocus
            />
          </div>
          
          {results.length > 0 && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  onClick={() => {
                    window.location.href = result.url;
                    onClose();
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{result.title}</h4>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {result.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {searchTerm.length > 2 && results.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Aucun résultat trouvé pour "{searchTerm}"
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}