'use client';

import { useEffect } from 'react';

interface AnalyticsProps {
  pageTitle: string;
  pageUrl?: string;
}

export function Analytics({ pageTitle, pageUrl }: AnalyticsProps) {
  useEffect(() => {
    // Simuler l'envoi d'analytics
    const analytics = {
      page: pageTitle,
      url: pageUrl || window.location.href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    // Dans un vrai projet, vous enverriez ces données à votre service d'analytics
    console.log('Analytics:', analytics);

    // Sauvegarder dans localStorage pour les statistiques locales
    const visits = JSON.parse(localStorage.getItem('pageVisits') || '[]');
    visits.push(analytics);
    
    // Garder seulement les 100 dernières visites
    if (visits.length > 100) {
      visits.splice(0, visits.length - 100);
    }
    
    localStorage.setItem('pageVisits', JSON.stringify(visits));
  }, [pageTitle, pageUrl]);

  return null;
}