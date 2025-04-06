
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const timelineEvents = [
  {
    year: "2004",
    title: "Humble Beginnings",
    description: "Started as a small family business with cotton industry"
  },
  {
    year: "2005",
    title: "First Factory",
    description: "Expanded operations with our first dedicated processing facility."
  },
  {
    year: "2022",
    title: "second factory",
    description: "Began exporting premium dehydrated products to global markets."
  },
  {
    year: "2024",
    title: "Third Factory ",
    description: "Inaugurated state-of-the-art production facility with advanced technology.Get more experience in this field,Continiued growth with focus on innovation and sustainability"
  },

];



const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-white/80 mb-8">
              From humble beginnings to a leader in dehydrated food products, 
              discover the journey, values, and people behind Hare Krishna Food.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-700">
                To provide the highest quality dehydrated food products through sustainable 
                practices, preserving the natural goodness of fruits, vegetables, and herbs 
                while exceeding industry standards for safety and quality.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-700">
                To become the global leader in premium dehydrated food products, 
                recognized for innovation, sustainability, and unwavering commitment 
                to quality, while supporting the communities where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Journey</h2>
            <p className="text-gray-600">
              Tracing the evolution of Hare Krishna Food from a small family business to an industry leader.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/30"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-center`}
                >
                  <div className={`md:absolute md:w-1/2 ${index % 2 === 0 ? 'md:right-1/2 md:pr-12 text-right' : 'md:left-1/2 md:pl-12 text-left'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md inline-block ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-secondary font-bold text-lg block mb-1">{event.year}</span>
                      <h3 className="text-xl font-bold mb-2 text-primary">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-white z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the dedicated professionals who guide our company with expertise and vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-cream rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Factory Tour */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Facilities</h2>
            <p className="text-gray-600">
              Take a virtual tour of our state-of-the-art production facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md h-60">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" 
                alt="Production Facility" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-60">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" 
                alt="Quality Control Lab" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-60">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" 
                alt="Dehydration Process" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-60">
              <img 
                src="https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" 
                alt="Packaging Area" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-60">
              <img 
                src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" 
                alt="Storage Warehouse" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-60">
              <img 
                src="https://images.unsplash.com/photo-1634141613544-01dd9983d3b4?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" 
                alt="R&D Department" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join the growing family of businesses that trust Hare Krishna Food for premium dehydrated products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-ghost">
              Explore Our Products
            </Link>
            <Link to="/contact" className="bg-white text-secondary hover:bg-white/90 px-5 py-3 rounded-md font-medium shadow-md transition-all duration-300">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
