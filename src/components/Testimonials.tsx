
import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  logo: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "Taste Delights Inc.",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/fork-and-knife-restaurant-logo-free-vector.jpg",
    text: "Hare Krishna Food has been our trusted supplier for 5 years. Their dehydrated fruits maintain exceptional flavor and color, elevating our premium snack line.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "Organic Harvest Co.",
    logo: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3250939/organic-food-icon-md.png",
    text: "The consistent quality and reliability of their dehydrated vegetables help us meet our strict organic standards. A partner who truly understands our needs.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Global Flavors Ltd.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-global-184-460295.png",
    text: "We've sourced dehydrated herbs from many suppliers, but Hare Krishna Food stands out with their exceptional aromatic quality and on-time deliveries.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/80">
            We take pride in the relationships we've built with food manufacturers and distributors worldwide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center bg-secondary/50 rounded-xl p-8 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <div className="flex-shrink-0 w-32 space-y-4 text-center">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-accent"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full mx-auto bg-primary flex items-center justify-center text-2xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company} 
                    className="max-h-10 max-w-full mx-auto"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-lg italic mb-4">"{testimonial.text}"</blockquote>
                  
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-white/70">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-accent' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/nestle-4-logo-png-transparent.png" alt="Client Logo" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cdn.freebiesupply.com/logos/large/2x/unilever-logo-png-transparent.png" alt="Client Logo" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cdn.freebiesupply.com/logos/large/2x/kraft-logo-png-transparent.png" alt="Client Logo" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cdn.freebiesupply.com/logos/large/2x/general-mills-logo-png-transparent.png" alt="Client Logo" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
