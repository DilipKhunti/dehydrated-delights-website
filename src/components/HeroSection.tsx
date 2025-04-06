
import { Link } from 'react-router-dom';
import { ShoppingBag, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.product-categories');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-primary/70 z-10"></div>
        <img 
          src="public/photos/onion.jpg"
          alt="Dehydrated food ingredients" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block mb-6 bg-secondary/30 backdrop-blur-sm px-6 py-2 rounded-full animate-slide-in">
            <span className="text-white/90 font-medium">Premium Quality Dehydrated Products</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Delivering Nature's Goodness – <br />
            <span className="text-accent">One Dehydrated Slice at a Time</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in opacity-90">
            Premium quality dehydrated fruits, vegetables, and herbs 
            for food manufacturers and exporters worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button asChild className="btn-primary" variant="default">
              <Link to="/products">
                <ShoppingBag className="w-5 h-5 mr-2" /> 
                Browse Our Products
              </Link>
            </Button>
            
            <Button asChild className="btn-highlight" variant="default">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" /> 
                Request a Quote
              </Link>
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNextSection}>
            <ChevronDown className="w-10 h-10 text-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
