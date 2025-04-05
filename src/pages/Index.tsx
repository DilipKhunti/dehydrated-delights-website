
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import TrustBadges from '@/components/TrustBadges';
import FounderMessage from '@/components/FounderMessage';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <TrustBadges />
      <FounderMessage />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
