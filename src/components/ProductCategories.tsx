
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  icon: string;
  description: string;
  link: string;
  image: string;
}

const CategoryCard = ({ title, icon, description, link, image }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-xl overflow-hidden shadow-lg card-hover bg-white relative h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            opacity: 0.7,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/10"></div>
      </div>
      
      <div className="relative z-10 p-6 flex flex-col h-full justify-between">
        <div>
          <div className="mb-4 text-4xl">{icon}</div>
          <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-accent font-medium mt-4 group transition-all"
        >
          Explore Products
          <svg 
            className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const ProductCategories = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Premium Product Categories</h2>
          <p className="text-gray-600">
            Explore our wide range of high-quality dehydrated products, meticulously processed to preserve nutrients and flavor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            title="Dehydrated Fruits" 
            icon="🍍" 
            description="Sweet, nutritious dehydrated fruits with extended shelf life and authentic taste." 
            link="/products#fruits"
            image="https://images.unsplash.com/photo-1578622338644-63ea20a01ff3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000"
          />
          
          <CategoryCard 
            title="Dehydrated Vegetables" 
            icon="🥕" 
            description="Crisp, colorful vegetable products perfect for soups, seasonings, and more." 
            link="/products#vegetables"
            image="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000"
          />
          
          <CategoryCard 
            title="Dehydrated Herbs" 
            icon="🌿" 
            description="Aromatic herbs that add distinctive flavors to any culinary creation." 
            link="/products#herbs"
            image="https://images.unsplash.com/photo-1602170284347-c45bd7931238?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
