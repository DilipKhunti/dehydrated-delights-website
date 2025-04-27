
import { Link } from 'react-router-dom';
import { ShoppingBag, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.product-categories');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative ${isMobile ? 'h-[60vh]' : 'h-screen'} flex items-center justify-center overflow-hidden pt-16 md:pt-0`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/images/hero.webp"
          alt="Dehydrated food ingredients" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block mb-3 md:mb-6 bg-secondary/30 backdrop-blur-sm px-3 md:px-6 py-1 md:py-2 rounded-full animate-slide-in">
            <span className="text-white/90 text-xs md:text-base font-medium">Premium Quality Dehydrated Products</span>
          </div>
          
          <h1 className="text-xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight animate-fade-in">
            Delivering Nature's Goodness 
            <span className="md:hidden"> – </span>
            <br className="hidden md:block" />
            <span className="text-accent">One Dehydrated Slice at a Time</span>
          </h1>
          
          <p className="text-sm md:text-xl mb-4 md:mb-10 max-w-2xl mx-auto animate-fade-in opacity-90">
            Premium quality dehydrated onion and garlic
            for food manufacturers and exporters worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center animate-scale-in">
            <Button asChild className="btn-primary text-sm md:text-base" variant="default">
              <Link to="/products">
                <ShoppingBag className="w-4 h-4 mr-1 md:mr-2" /> 
                Browse Products
              </Link>
            </Button>
            
            <Button asChild className="btn-highlight text-sm md:text-base" variant="default">
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-1 md:mr-2" /> 
                Request a Quote
              </Link>
            </Button>
          </div>
          
          <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNextSection}>
            <ChevronDown className="w-6 h-6 md:w-10 md:h-10 text-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
