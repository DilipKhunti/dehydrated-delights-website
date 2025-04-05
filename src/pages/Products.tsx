
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  category: 'fruit' | 'vegetable' | 'herb';
  form: 'flakes' | 'powder' | 'whole';
  packaging: 'bulk' | 'retail' | 'both';
  description: string;
  shelfLife: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Dehydrated Mango",
    category: "fruit",
    form: "flakes",
    packaging: "both",
    description: "Premium dehydrated mango flakes with vibrant color and authentic tropical flavor.",
    shelfLife: "12 months",
    image: "https://images.unsplash.com/photo-1501746877-14782df58970?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    id: 2,
    name: "Dehydrated Tomato",
    category: "vegetable",
    form: "flakes",
    packaging: "bulk",
    description: "Intensely flavored tomato flakes perfect for sauces, soups, and seasonings.",
    shelfLife: "18 months",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    id: 3,
    name: "Dried Mint",
    category: "herb",
    form: "whole",
    packaging: "both",
    description: "Aromatic dried mint leaves that retain their full flavor and fragrance.",
    shelfLife: "24 months",
    image: "https://images.unsplash.com/photo-1628614449317-0df89c343b55?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    id: 4,
    name: "Banana Powder",
    category: "fruit",
    form: "powder",
    packaging: "bulk",
    description: "Fine banana powder with natural sweetness, ideal for baking and smoothies.",
    shelfLife: "12 months",
    image: "https://images.unsplash.com/photo-1542384557-0824d90731ee?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    id: 5,
    name: "Dehydrated Onion",
    category: "vegetable",
    form: "flakes",
    packaging: "both",
    description: "Convenient onion flakes that provide instant flavor to any dish.",
    shelfLife: "24 months",
    image: "https://images.unsplash.com/photo-1524593326659-67fc5a0a199c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    id: 6,
    name: "Dried Rosemary",
    category: "herb",
    form: "whole",
    packaging: "retail",
    description: "Premium whole rosemary needles with intense aroma and flavor.",
    shelfLife: "36 months",
    image: "https://images.unsplash.com/photo-1596806941028-93c4230e5910?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    id: 7,
    name: "Pineapple Flakes",
    category: "fruit",
    form: "flakes",
    packaging: "both",
    description: "Sweet, tangy pineapple flakes that add tropical flavor to snacks and recipes.",
    shelfLife: "12 months",
    image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    id: 8,
    name: "Bell Pepper Powder",
    category: "vegetable",
    form: "powder",
    packaging: "bulk",
    description: "Colorful bell pepper powder that adds vibrant flavor to any dish.",
    shelfLife: "18 months",
    image: "https://images.unsplash.com/photo-1551465222-23e9586a0fb6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    id: 9,
    name: "Dried Basil",
    category: "herb",
    form: "whole",
    packaging: "both",
    description: "Aromatic whole basil leaves with Mediterranean flavor.",
    shelfLife: "24 months",
    image: "https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300"
  },
];

const Products = () => {
  const [activeProducts, setActiveProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState({
    category: 'all',
    form: 'all',
    packaging: 'all'
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for hash in URL to scroll to specific category
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
          
          // Set filter based on hash
          if (id === 'fruits' || id === 'vegetables' || id === 'herbs') {
            const categoryMap: Record<string, string> = {
              fruits: 'fruit',
              vegetables: 'vegetable',
              herbs: 'herb'
            };
            
            setFilters({
              ...filters,
              category: categoryMap[id] || 'all'
            });
          }
        }
      }, 500);
    }
  }, []);
  
  useEffect(() => {
    filterProducts();
  }, [filters]);
  
  const filterProducts = () => {
    let filtered = [...products];
    
    if (filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    
    if (filters.form !== 'all') {
      filtered = filtered.filter(product => product.form === filters.form);
    }
    
    if (filters.packaging !== 'all') {
      filtered = filtered.filter(product => 
        product.packaging === filters.packaging || product.packaging === 'both'
      );
    }
    
    setActiveProducts(filtered);
  };
  
  const handleFilterChange = (filter: string, value: string) => {
    setFilters({
      ...filters,
      [filter]: value
    });
  };
  
  const handleRequestSample = (product: Product) => {
    toast({
      title: "Sample Request",
      description: `Your request for ${product.name} sample has been submitted.`,
    });
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-sage-900 text-white">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Catalog</h1>
            <p className="text-xl text-sage-100 mb-8">
              Explore our comprehensive range of premium dehydrated fruits, vegetables, and herbs,
              available in various forms and packaging options to meet your specific needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Category Anchors */}
      <section className="py-8 bg-white border-b">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#fruits"
              className="bg-sage-100 hover:bg-sage-200 px-6 py-3 rounded-full text-sage-800 font-medium transition-colors"
              onClick={() => handleFilterChange('category', 'fruit')}
            >
              Dehydrated Fruits
            </a>
            <a 
              href="#vegetables"
              className="bg-sage-100 hover:bg-sage-200 px-6 py-3 rounded-full text-sage-800 font-medium transition-colors"
              onClick={() => handleFilterChange('category', 'vegetable')}
            >
              Dehydrated Vegetables
            </a>
            <a 
              href="#herbs"
              className="bg-sage-100 hover:bg-sage-200 px-6 py-3 rounded-full text-sage-800 font-medium transition-colors"
              onClick={() => handleFilterChange('category', 'herb')}
            >
              Dehydrated Herbs
            </a>
            <a 
              href="#custom"
              className="bg-sage-100 hover:bg-sage-200 px-6 py-3 rounded-full text-sage-800 font-medium transition-colors"
            >
              Custom Solutions
            </a>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 bg-sage-50">
        <div className="container-wide">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Filter Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Type</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="fruit">Fruits</option>
                  <option value="vegetable">Vegetables</option>
                  <option value="herb">Herbs</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Form</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  value={filters.form}
                  onChange={(e) => handleFilterChange('form', e.target.value)}
                >
                  <option value="all">All Forms</option>
                  <option value="flakes">Flakes</option>
                  <option value="powder">Powder</option>
                  <option value="whole">Whole</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Packaging Options</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  value={filters.packaging}
                  onChange={(e) => handleFilterChange('packaging', e.target.value)}
                >
                  <option value="all">All Packaging</option>
                  <option value="bulk">Bulk</option>
                  <option value="retail">Retail</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          {activeProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <span className="bg-sage-100 text-sage-800 text-xs px-2 py-1 rounded-full">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {product.form.charAt(0).toUpperCase() + product.form.slice(1)}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        Shelf Life: {product.shelfLife}
                      </span>
                      {product.packaging === 'both' ? (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          Bulk & Retail
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          {product.packaging.charAt(0).toUpperCase() + product.packaging.slice(1)}
                        </span>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => handleRequestSample(product)}
                      className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
                    >
                      Request Sample
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No products match your filters</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filter criteria to see more products.</p>
              <button 
                onClick={() => setFilters({ category: 'all', form: 'all', packaging: 'all' })}
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Category sections */}
      <section id="fruits" className="py-16 bg-sage-50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Dehydrated Fruits</h2>
              <p className="text-gray-600 mb-4">
                Our premium dehydrated fruits retain their natural sweetness, vibrant colors, and nutritional benefits.
                Available in various cuts and packaging options to suit your specific needs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>No added sugars or preservatives</li>
                <li>Extended shelf life without refrigeration</li>
                <li>Available as flakes, powder, or whole pieces</li>
                <li>Perfect for snacks, breakfast cereals, baking, and more</li>
              </ul>
              <button 
                onClick={() => handleFilterChange('category', 'fruit')}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View Fruit Products
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=700&h=500" 
                alt="Dehydrated Fruits" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="vegetables" className="py-16 bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Dehydrated Vegetables</h2>
              <p className="text-gray-600 mb-4">
                Our dehydrated vegetables offer convenience without compromising on taste or nutritional value.
                Ideal for food manufacturers, restaurants, and home cooks looking for consistent quality.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Minimally processed to preserve nutrients</li>
                <li>Available in various cuts and forms</li>
                <li>Free from artificial additives</li>
                <li>Ideal for soups, seasonings, ready meals, and more</li>
              </ul>
              <button 
                onClick={() => handleFilterChange('category', 'vegetable')}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View Vegetable Products
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=700&h=500" 
                alt="Dehydrated Vegetables" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="herbs" className="py-16 bg-sage-50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Dehydrated Herbs</h2>
              <p className="text-gray-600 mb-4">
                Our dehydrated herbs capture the full essence and aroma of fresh herbs, providing 
                a convenient way to add authentic flavor to your products year-round.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Harvested at peak freshness</li>
                <li>Carefully dried to preserve essential oils</li>
                <li>Available whole or ground</li>
                <li>Perfect for seasonings, teas, and culinary applications</li>
              </ul>
              <button 
                onClick={() => handleFilterChange('category', 'herb')}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View Herb Products
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1596111929301-c0ce89129a91?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=700&h=500" 
                alt="Dehydrated Herbs" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="custom" className="py-16 bg-terracotta-500 text-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Solutions</h2>
            <p className="text-xl">
              Can't find exactly what you need? We offer custom dehydration solutions to meet your specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Custom Blends</h3>
              <p className="text-white/80 mb-4">
                We can create proprietary blends of dehydrated fruits, vegetables, and herbs 
                according to your specific recipe or requirements.
              </p>
              <a href="/contact" className="text-white font-medium hover:underline">
                Request Custom Blend →
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Special Cuts & Sizes</h3>
              <p className="text-white/80 mb-4">
                If you need specific shapes, sizes, or cuts that aren't in our standard offering, 
                we can accommodate your requirements.
              </p>
              <a href="/contact" className="text-white font-medium hover:underline">
                Discuss Special Requirements →
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Custom Packaging</h3>
              <p className="text-white/80 mb-4">
                From bulk industrial packaging to branded retail solutions, 
                we offer flexible packaging options to suit your business needs.
              </p>
              <a href="/contact" className="text-white font-medium hover:underline">
                Explore Packaging Options →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
