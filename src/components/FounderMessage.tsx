
const FounderMessage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-xl">
              <img 
                src="photos/founder.jpg" 
                alt="Founder of Hare Krishna Food" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent rounded-xl p-8 shadow-lg w-48 h-48 flex items-center justify-center">
              <img
                src="/lovable-uploads/logo.png"
                alt="Company Logo"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Founder's Message</h2>
            <div className="bg-cream rounded-lg p-6 mb-6 border-l-4 border-secondary italic">
              <p className="text-xl leading-relaxed text-gray-700">
                ""Under the visionary leadership of founder Hareshbhai Hadiya, Hare Krishna Food exemplifies a harmonious blend of traditional values and modern innovation. With a steadfast commitment to quality and sustainability, the company meticulously selects the finest raw materials and employs state-of-the-art dehydration technologies to preserve the natural essence of every ingredient."

"
              </p>
            </div>
            <p className="text-gray-600 mb-6">
              Since our humble beginnings in 2024, we've grown to become a leading provider of premium dehydrated food products, 
              serving clients across the globe. Our journey has been guided by a simple philosophy: respect for nature, 
              commitment to quality, and dedication to customer satisfaction.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="photos/hari.jpg" 
                alt="Founder" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-primary">HARESHBHAI HADIYA</h3>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
            <a 
              href="/about" 
              className="inline-flex items-center text-secondary font-medium group transition-all"
            >
              Read Our Story
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
      </div>
    </section>
  );
};

export default FounderMessage;
