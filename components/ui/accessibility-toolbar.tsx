'use client';

import { useState } from 'react';
import { Settings, Type, Eye, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';

export function AccessibilityToolbar() {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const adjustFontSize = (size: number[]) => {
    const newSize = size[0];
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const adjustContrast = (value: number[]) => {
    const newContrast = value[0];
    setContrast(newContrast);
    document.documentElement.style.filter = `contrast(${newContrast}%)`;
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast', !isHighContrast);
  };

  const resetSettings = () => {
    setFontSize(16);
    setContrast(100);
    setIsHighContrast(false);
    document.documentElement.style.fontSize = '';
    document.documentElement.style.filter = '';
    document.documentElement.classList.remove('high-contrast');
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full p-3 shadow-lg bg-white"
          >
            <Settings className="w-4 h-4" />
            <span className="sr-only">Outils d'accessibilité</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" side="right">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Accessibilité
              </h4>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium flex items-center mb-2">
                  <Type className="w-4 h-4 mr-2" />
                  Taille du texte: {fontSize}px
                </label>
                <Slider
                  value={[fontSize]}
                  onValueChange={adjustFontSize}
                  min={12}
                  max={24}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium flex items-center mb-2">
                  <Eye className="w-4 h-4 mr-2" />
                  Contraste: {contrast}%
                </label>
                <Slider
                  value={[contrast]}
                  onValueChange={adjustContrast}
                  min={50}
                  max={200}
                  step={10}
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Contraste élevé</label>
                <Button
                  variant={isHighContrast ? "default" : "outline"}
                  size="sm"
                  onClick={toggleHighContrast}
                >
                  {isHighContrast ? 'Activé' : 'Désactivé'}
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={resetSettings}
                className="w-full"
              >
                Réinitialiser
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}