// src/PageTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-8MM9MLGX0B', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default PageTracker;