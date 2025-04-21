import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShoppingBag,
  Leaf,
  Apple,
  ChevronRight,
  Filter,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  useScrollAnimation,
  useScrollToTop,
} from "@/hooks/use-scroll-animation";

interface Product {
  id: number;
  name: string;
  category: "fruit" | "vegetable" | "herb";
  form: "flakes" | "powder" | "whole";
  packaging: "bulk" | "retail" | "both";
  description: string;
  shelfLife: string;
  image: string;
}

const products: Product[] = [
  {
    id: 2,
    name: "Dehydrated Onion",
    category: "vegetable",
    form: "flakes",
    packaging: "bulk",
    description:
      "Dehydrated onion flakes with a rich flavor, perfect for soups and sauces.",
    shelfLife: "18 months",
    image:
      "./photos/onion-product.jpg",
  },
  {
    id: 3,
    name: "Dehydrated Garlic",
    category: "vegetable",
    form: "whole",
    packaging: "both",
    description:
      "Whole Dehydrated garlic cloves, ideal for seasoning and flavoring dishes.",
    shelfLife: "24 months",
    image:
      "./photos/garlic-product.jpg",
  },
];

const Products = () => {
  useScrollToTop();
  useScrollAnimation();

  const [activeProducts, setActiveProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState({
    category: "all",
    form: "all",
    packaging: "all",
  });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });

          if (id === "fruits" || id === "vegetables" || id === "herbs") {
            const categoryMap: Record<string, string> = {
              fruits: "fruit",
              vegetables: "vegetable",
              herbs: "herb",
            };

            setFilters({
              ...filters,
              category: categoryMap[id] || "all",
            });
          }
        }
      }, 500);
    }
  }, [location.hash]);

  useEffect(() => {
    filterProducts();
  }, [filters]);

  const filterProducts = () => {
    let filtered = [...products];

    if (filters.category !== "all") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.form !== "all") {
      filtered = filtered.filter((product) => product.form === filters.form);
    }

    if (filters.packaging !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.packaging === filters.packaging ||
          product.packaging === "both"
      );
    }

    setActiveProducts(filtered);
  };

  const handleFilterChange = (filter: string, value: string) => {
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

  const handleRequestSample = (product: Product) => {
    toast({
      title: "Sample Request Sent",
      description: `Your request for ${product.name} sample has been submitted. Our team will contact you shortly.`,
      duration: 5000,
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fruit":
        return <Apple size={16} />;
      case "vegetable":
        return <ShoppingBag size={16} />;
      case "herb":
        return <Leaf size={16} />;
      default:
        return <ShoppingBag size={16} />;
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Navbar />

      <section className="pt-32 pb-20 bg-primary text-white animate-on-scroll">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Product Catalog
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our comprehensive range of premium dehydrated fruits,
              vegetables, and herbs, available in various forms and packaging
              options to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-cream border-b animate-on-scroll">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#fruits"
              className="bg-secondary/10 hover:bg-secondary/20 px-6 py-3 rounded-full text-primary font-medium transition-colors flex items-center gap-2"
              onClick={() => handleFilterChange("category", "fruit")}
            >
              <Apple size={18} />
              Dehydrated Fruits
            </a>
            <a
              href="#vegetables"
              className="bg-secondary/10 hover:bg-secondary/20 px-6 py-3 rounded-full text-primary font-medium transition-colors flex items-center gap-2"
              onClick={() => handleFilterChange("category", "vegetable")}
            >
              <ShoppingBag size={18} />
              Dehydrated Vegetables
            </a>
            <a
              href="#herbs"
              className="bg-secondary/10 hover:bg-secondary/20 px-6 py-3 rounded-full text-primary font-medium transition-colors flex items-center gap-2"
              onClick={() => handleFilterChange("category", "herb")}
            >
              <Leaf size={18} />
              Dehydrated Herbs
            </a>
            <a
              href="#custom"
              className="bg-highlight/10 hover:bg-highlight/20 px-6 py-3 rounded-full text-highlight font-medium transition-colors flex items-center gap-2"
            >
              <Filter size={18} />
              Custom Solutions
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-cream animate-on-scroll">
        <div className="container-wide">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Filter size={20} className="text-primary" />
              Filter Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Type
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                >
                  <option value="all">All Types</option>
                  <option value="fruit">Fruits</option>
                  <option value="vegetable">Vegetables</option>
                  <option value="herb">Herbs</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Form
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  value={filters.form}
                  onChange={(e) => handleFilterChange("form", e.target.value)}
                >
                  <option value="all">All Forms</option>
                  <option value="flakes">Flakes</option>
                  <option value="powder">Powder</option>
                  <option value="whole">Whole</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Packaging Options
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  value={filters.packaging}
                  onChange={(e) =>
                    handleFilterChange("packaging", e.target.value)
                  }
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

      <section className="py-12 bg-white animate-on-scroll">
        <div className="container-wide">
          {activeProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
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
                      <span className="bg-secondary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        {getCategoryIcon(product.category)}
                        {product.category.charAt(0).toUpperCase() +
                          product.category.slice(1)}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-cream text-gray-800 text-xs px-2 py-1 rounded-full">
                        {product.form.charAt(0).toUpperCase() +
                          product.form.slice(1)}
                      </span>
                      <span className="bg-cream text-gray-800 text-xs px-2 py-1 rounded-full">
                        Shelf Life: {product.shelfLife}
                      </span>
                      {product.packaging === "both" ? (
                        <span className="bg-cream text-gray-800 text-xs px-2 py-1 rounded-full">
                          Bulk & Retail
                        </span>
                      ) : (
                        <span className="bg-cream text-gray-800 text-xs px-2 py-1 rounded-full">
                          {product.packaging.charAt(0).toUpperCase() +
                            product.packaging.slice(1)}
                        </span>
                      )}
                    </div>

                    <Button
                      onClick={() => handleRequestSample(product)}
                      className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={16} /> Request Sample
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">
                No products match your filters
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filter criteria to see more products.
              </p>
              <Button
                onClick={() =>
                  setFilters({ category: "all", form: "all", packaging: "all" })
                }
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="onions" className="py-16 bg-cream animate-on-scroll">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Dehytrated Onions</h2>
              <p className="text-gray-600 mb-4">
                Our high-quality dried onions deliver a strong, natural flavor
                and aroma. Ideal for culinary applications where convenience and
                long shelf life are key.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>No artificial additives or preservatives</li>
                <li>Excellent shelf stability and easy storage</li>
                <li>Available in flakes, granules, powder, or chopped form</li>
                <li>
                  Perfect for soups, sauces, spice blends, and ready meals
                </li>
              </ul>
              <button
                onClick={() => handleFilterChange("category", "onion")}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View Onion Products
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="./photos/onion-product.jpg"
                alt="Dried Onions"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="garlic" className="py-16 bg-white animate-on-scroll">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Dehydrated Garlic</h2>
              <p className="text-gray-600 mb-4">
                Our dehydrated garlic delivers bold flavor and long-lasting
                freshness. It's a staple ingredient for food processors, spice
                manufacturers, and culinary professionals seeking consistent
                taste and convenience.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Strong, natural garlic flavor without additives</li>
                <li>Available in flakes, granules, powder, or minced form</li>
                <li>Extended shelf life and easy to store</li>
                <li>
                  Perfect for seasoning blends, sauces, ready meals, and more
                </li>
              </ul>
              <button
                onClick={() => handleFilterChange("category", "garlic")}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View Garlic Products
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="./photos/garlic-product.jpg"
                alt="Dehydrated Garlic"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="custom"
        className="py-16 bg-highlight text-white animate-on-scroll"
      >
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Solutions
            </h2>
            <p className="text-xl">
              Can't find exactly what you need? We offer custom dehydration
              solutions to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Custom Blends</h3>
              <p className="text-white/80 mb-4">
                We can create proprietary blends of dehydrated fruits,
                vegetables, and herbs according to your specific recipe or
                requirements.
              </p>
              <a
                href="/contact"
                className="text-white font-medium hover:underline"
              >
                Request Custom Blend →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Special Cuts & Sizes</h3>
              <p className="text-white/80 mb-4">
                If you need specific shapes, sizes, or cuts that aren't in our
                standard offering, we can accommodate your requirements.
              </p>
              <a
                href="/contact"
                className="text-white font-medium hover:underline"
              >
                Discuss Special Requirements →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Custom Packaging</h3>
              <p className="text-white/80 mb-4">
                From bulk industrial packaging to branded retail solutions, we
                offer flexible packaging options to suit your business needs.
              </p>
              <a
                href="/contact"
                className="text-white font-medium hover:underline"
              >
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
