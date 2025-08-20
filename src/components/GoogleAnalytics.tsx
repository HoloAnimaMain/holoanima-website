'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  useEffect(() => {
    if (GA_TRACKING_ID) {
      ReactGA.initialize(GA_TRACKING_ID);
      
      // Send initial pageview
      ReactGA.send({ 
        hitType: 'pageview', 
        page: window.location.pathname + window.location.search 
      });
      
      // Set up page tracking for client-side navigation
      const handleRouteChange = () => {
        ReactGA.send({ 
          hitType: 'pageview', 
          page: window.location.pathname + window.location.search 
        });
      };
      
      // Listen for route changes (this is a simplified approach)
      // In a real app, you'd want to use Next.js router events
      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, []);

  return null;
}