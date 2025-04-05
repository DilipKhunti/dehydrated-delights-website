
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://static.videezy.com/system/resources/previews/000/044/604/original/Drying-food-ingredients.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Delivering Nature's Goodness – <br />
          One Dehydrated Slice at a Time
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
          Premium quality dehydrated fruits, vegetables, and herbs 
          for food manufacturers and exporters worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Link to="/products" className="btn-primary">
            Browse Our Products
          </Link>
          <Link to="/contact" className="btn-secondary">
            Request a Quote
          </Link>
          <Link to="/contact" className="btn-ghost">
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
