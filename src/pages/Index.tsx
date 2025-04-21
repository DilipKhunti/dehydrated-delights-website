
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import TrustBadges from '@/components/TrustBadges';
import FounderMessage from '@/components/FounderMessage';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Index = () => {
  useScrollAnimation();
  
  // Initialize scroll animations
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('animate-active');
        }
      });
    };
    
    // Run once on load
    setTimeout(animateOnScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <main>
        <HeroSection />
        <div className="animate-on-scroll product-categories">
          <ProductCategories />
        </div>
        <div className="animate-on-scroll">
          <TrustBadges />
        </div>
        <div className="animate-on-scroll">
          <FounderMessage />
        </div>
        <div className="animate-on-scroll">
          <Testimonials />
        </div>
        <div className="animate-on-scroll">
          <Newsletter />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
