import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures the window scrolls to top (0, 0) on every route navigation in the Single Page Application.
 * Also supports smooth scrolling to element IDs when a URL hash is present (e.g. #configurator).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If a hash exists (e.g. #configurator), scroll smoothly to that element
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        // Small delay to allow target section to be in DOM
        const hashTimer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(hashTimer);
      }
    }

    // Immediately scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Secondary backup scroll right after route transition begins
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
