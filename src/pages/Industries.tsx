
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Industry {
  id: number;
  name: string;
  icon: string;
  description: string;
  benefits: string[];
  products: string[];
  image: string;
}

const industries: Industry[] = [
  {
    id: 1,
    name: "Food & Beverage Manufacturers",
    icon: "🍽️",
    description: "We supply premium dehydrated ingredients to food manufacturers producing snacks, ready meals, soups, seasonings, and more.",
    benefits: [
      "Consistent flavor and color for your products",
      "Extended shelf life without artificial preservatives",
      "Custom sizing and cutting options",
      "Reduced storage space and logistics costs"
    ],
    products: [
      "Dehydrated Vegetable Blends",
      "Fruit Powders for Beverages",
      "Herb Mixes for Seasonings",
      "Custom Formulations"
    ],
    image: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    name: "Pharmaceutical Companies",
    icon: "💊",
    description: "We provide high-quality dehydrated ingredients for pharmaceutical products, supplements, and natural remedies.",
    benefits: [
      "Rigorous quality control and documentation",
      "Consistent active compound concentration",
      "Free from contaminants and adulterants",
      "Traceability from source to finished product"
    ],
    products: [
      "Herb Extracts",
      "Fruit Powders for Supplements",
      "Natural Colorants",
      "Therapeutic Herb Blends"
    ],
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 3,
    name: "Nutraceutical Brands",
    icon: "🌿",
    description: "Our dehydrated ingredients serve as the foundation for high-quality nutraceutical products that promote health and wellness.",
    benefits: [
      "Preserved nutritional content",
      "Natural, clean-label ingredients",
      "Versatile application in various formulations",
      "Consistent potency and bioavailability"
    ],
    products: [
      "Superfood Powders",
      "Fruit and Vegetable Concentrates",
      "Natural Supplements",
      "Functional Food Ingredients"
    ],
    image: "https://images.unsplash.com/photo-1612470958676-2ce8e8e9e0c9?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 4,
    name: "Retail Chains",
    icon: "🛒",
    description: "We supply packaged dehydrated products for retail distribution, including specialty food stores and supermarket chains.",
    benefits: [
      "Private labeling options",
      "Attractive packaging solutions",
      "Consistent product quality",
      "Flexible order quantities"
    ],
    products: [
      "Retail-Ready Dried Fruit Snacks",
      "Gourmet Dried Vegetable Assortments",
      "Premium Herb and Spice Blends",
      "Gift Sets and Specialty Items"
    ],
    image: "https://images.unsplash.com/photo-1595614007536-6e6a8cb9f256?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 5,
    name: "Export Partners",
    icon: "🌎",
    description: "We work with export partners to distribute our premium dehydrated products to markets worldwide.",
    benefits: [
      "Complete export documentation",
      "International certification compliance",
      "Stable shelf life for long-distance shipping",
      "Bulk and container load options"
    ],
    products: [
      "Bulk Dehydrated Fruits",
      "Industrial Vegetable Ingredients",
      "Large Volume Herb Supplies",
      "Mixed Container Programs"
    ],
    image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 6,
    name: "Food Service Providers",
    icon: "🍲",
    description: "Our dehydrated ingredients are ideal for restaurants, catering companies, and institutional food service operations.",
    benefits: [
      "Easy storage and long shelf life",
      "Consistent flavor across seasons",
      "Time-saving preparation",
      "Reduced food waste and spoilage"
    ],
    products: [
      "Chef-Ready Vegetable Mixes",
      "Just-Add-Water Soup Bases",
      "Culinary Herb Blends",
      "Fruit Ingredients for Desserts"
    ],
    image: "https://images.unsplash.com/photo-1528740096961-3798add19cb7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=500"
  },
];

const Industries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-sage-900 text-white">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-sage-100 mb-8">
              Our premium dehydrated products serve a wide range of industries, 
              each benefiting from our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Industries Grid */}
      <section className="py-16 bg-sage-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Solutions for Various Industries</h2>
            <p className="text-gray-600">
              We understand the unique requirements of different sectors and provide custom solutions to meet specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <a 
                key={industry.id} 
                href={`#industry-${industry.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-6">{industry.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <p className="text-gray-600">{industry.description.substring(0, 100)}...</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Industry Sections */}
      {industries.map((industry) => (
        <section key={industry.id} id={`industry-${industry.id}`} className={`py-16 ${industry.id % 2 === 0 ? 'bg-white' : 'bg-sage-50'}`}>
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{industry.icon}</div>
                  <h2 className="text-3xl font-bold">{industry.name}</h2>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-sage-700">Key Benefits</h3>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-sage-700">Popular Products</h3>
                  <ul className="space-y-2">
                    {industry.products.map((product, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-primary font-medium group transition-all"
                  >
                    Discuss Your Specific Requirements
                    <svg 
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Success Stories */}
      <section className="py-16 bg-sage-800 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-sage-200">
              See how our dehydrated products have helped businesses across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sage-700/50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Client Avatar" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">GreenBite Foods</h3>
                  <p className="text-sage-300">Food Manufacturer</p>
                </div>
              </div>
              <blockquote className="italic mb-4">
                "Hare Krishna Food's dehydrated vegetable ingredients have allowed us to develop a line of clean-label, shelf-stable snacks that maintain their vibrant colors and flavors. Their consistent quality has been a key factor in our product success."
              </blockquote>
              <div className="flex justify-between items-center">
                <span className="text-sage-300">Results:</span>
                <span className="bg-sage-600 text-white px-3 py-1 rounded-full text-sm">
                  30% Growth in Product Line
                </span>
              </div>
            </div>
            
            <div className="bg-sage-700/50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Client Avatar" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">VitaWell Supplements</h3>
                  <p className="text-sage-300">Nutraceutical Brand</p>
                </div>
              </div>
              <blockquote className="italic mb-4">
                "The consistent potency and purity of Hare Krishna Food's herb powders have allowed us to develop premium supplements with reliable efficacy. Their documentation and traceability also help us meet regulatory requirements."
              </blockquote>
              <div className="flex justify-between items-center">
                <span className="text-sage-300">Results:</span>
                <span className="bg-sage-600 text-white px-3 py-1 rounded-full text-sm">
                  Expanded to 12 New Markets
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-terracotta-500 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Industry Needs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts can help you find the perfect dehydrated ingredients solution for your specific application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="btn-ghost"
            >
              View Our Product Range
            </a>
            <a 
              href="/contact" 
              className="bg-white text-terracotta-500 hover:bg-white/90 px-5 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Industries;
