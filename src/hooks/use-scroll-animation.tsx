
import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
}

export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export function useScrollToTopOnRouteChange() {
  const [pathname, setPathname] = useState(window.location.pathname);
  
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    if (pathname !== currentPath) {
      window.scrollTo(0, 0);
      setPathname(currentPath);
    }
    
    const handleLocationChange = () => {
      const newPath = window.location.pathname;
      if (pathname !== newPath) {
        window.scrollTo(0, 0);
        setPathname(newPath);
      }
    };
    
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [pathname]);
}

export function ScrollToTop() {
  useScrollToTop();
  return null;
}
