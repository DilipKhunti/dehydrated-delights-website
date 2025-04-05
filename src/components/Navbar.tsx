
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, Home, Users, FileText, Award, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/ecff1123-e2bc-4393-83db-e545834059ad.png" 
            alt="Hare Krishna Food" 
            className="h-14 md:h-16" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`font-medium hover:text-secondary transition-colors flex items-center gap-1 ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className={`font-medium hover:text-secondary transition-colors flex items-center gap-1 ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            <Users size={18} />
            <span>About Us</span>
          </Link>
          <Link 
            to="/products" 
            className={`font-medium hover:text-secondary transition-colors flex items-center gap-1 ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            <ShoppingBag size={18} />
            <span>Products</span>
          </Link>
          <Link 
            to="/certifications" 
            className={`font-medium hover:text-secondary transition-colors flex items-center gap-1 ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            <Award size={18} />
            <span>Certifications</span>
          </Link>
          <Link 
            to="/industries" 
            className={`font-medium hover:text-secondary transition-colors flex items-center gap-1 ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            <Factory size={18} />
            <span>Industries</span>
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium hover:text-secondary transition-colors flex items-center gap-1 ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            <Phone size={18} />
            <span>Contact</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <Link 
            to="/" 
            className="font-medium hover:text-secondary transition-colors py-2 flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className="font-medium hover:text-secondary transition-colors py-2 flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Users size={18} />
            <span>About Us</span>
          </Link>
          <Link 
            to="/products" 
            className="font-medium hover:text-secondary transition-colors py-2 flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingBag size={18} />
            <span>Products</span>
          </Link>
          <Link 
            to="/certifications" 
            className="font-medium hover:text-secondary transition-colors py-2 flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Award size={18} />
            <span>Certifications</span>
          </Link>
          <Link 
            to="/industries" 
            className="font-medium hover:text-secondary transition-colors py-2 flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Factory size={18} />
            <span>Industries</span>
          </Link>
          <Link 
            to="/contact" 
            className="font-medium hover:text-secondary transition-colors py-2 flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={18} />
            <span>Contact</span>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
