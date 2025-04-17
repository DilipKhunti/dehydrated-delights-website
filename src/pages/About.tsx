import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timelineEvents = [
  {
    year: "2004",
    title: "Humble Beginnings",
    description: "Started as a small family business with cotton industry",
  },
  {
    year: "2005",
    title: "First Factory",
    description:
      "Expanded operations with our first dedicated processing facility.",
  },
  {
    year: "2022",
    title: "second factory",
    description:
      "Began exporting premium dehydrated products to global markets.",
  },
  {
    year: "2024",
    title: "Third Factory ",
    description:
      "Inaugurated state-of-the-art production facility with advanced technology.Get more experience in this field,Continiued growth with focus on innovation and sustainability",
  },
];

const facilities = [
  {
    title: "Hare Krishna 1",
    image: "./photos/HK1.jpg",
  },
  {
    title: "Hare Krishna 2",
    image: "./photos/HK2.jpg",
  },
  {
    title: "Hare Krishna 3",
    image: "./photos/HK3.jpg",
  },
  {
    title: "Hare Krishna 4",
    image: "./photos/HK4.jpg",
  },
  {
    title: "Hare Krishna 5",
    image: "./photos/HK5.jpg",
  },
  {
    title: "Hare Krishna 6",
    image: "./photos/HK6.jpg",
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
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To provide the highest quality dehydrated food products through
                sustainable practices, preserving the natural goodness of
                fruits, vegetables, and herbs while exceeding industry standards
                for safety and quality.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Our Vision
              </h2>
              <p className="text-gray-700">
                To become the global leader in premium dehydrated food products,
                recognized for innovation, sustainability, and unwavering
                commitment to quality, while supporting the communities where we
                operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Journey
            </h2>
            <p className="text-gray-600">
              Tracing the evolution of Hare Krishna Food from a small family
              business to an industry leader.
            </p>
          </div>

          <div className="relative pt-12">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/30"></div>

            {/* Timeline Events */}
            <div className="space-y-36">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } md:justify-center`}
                >
                  <div
                    className={`md:absolute md:w-1/2 ${
                      index % 2 === 0
                        ? "md:right-1/2 md:pr-12 text-right"
                        : "md:left-1/2 md:pl-12 text-left"
                    }`}
                  >
                    <div
                      className={`bg-white p-6 rounded-lg shadow-md inline-block ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="text-secondary font-bold text-lg block mb-1">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="none md:absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-white z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factory Tour */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Facilities
            </h2>
            <p className="text-gray-600">
              Take a virtual tour of our state-of-the-art production facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {facilities.map((facility, index) => (
              <div className="rounded-lg overflow-hidden shadow-md h-60">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join the growing family of businesses that trust Hare Krishna Food
            for premium dehydrated products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-ghost">
              Explore Our Products
            </Link>
            <Link
              to="/contact"
              className="bg-white text-secondary hover:bg-white/90 px-5 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
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
