'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <Card className="shadow-lg border-2">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div className="flex-grow">
              <h4 className="font-semibold text-gray-900 mb-2">
                Cookies et confidentialité
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Nous utilisons des cookies pour améliorer votre expérience de navigation 
                et analyser le trafic de notre site.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button size="sm" onClick={acceptCookies} className="flex-1">
                  Accepter
                </Button>
                <Button size="sm" variant="outline" onClick={rejectCookies} className="flex-1">
                  Refuser
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={rejectCookies}
              className="p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}