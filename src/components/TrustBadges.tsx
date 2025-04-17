import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const certifications = [
  {
    name: "FSSAI Certified",
    logo: "./photos/fssai.png",
    tooltip:
      "Food Safety and Standards Authority of India certification ensures our products meet strict food safety standards.",
  },
  {
    name: "ISO 22000:2018",
    logo: "./photos/iso.png",
    tooltip:
      "International Organization for Standardization certification for our food safety management system.",
  },
  {
    name: "HACCP Certified",
    logo: "./photos/haccp.png",
    tooltip:
      "Hazard Analysis Critical Control Point system ensures food safety throughout our production process.",
  },
  {
    name: "Organic Certified",
    logo: "./photos/organic.jpg",
    tooltip:
      "Our organic products are certified to meet international organic standards.",
  },
];

const Counter = ({
  value,
  label,
  suffix = "",
  duration = 2000,
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const interval = duration / value;
        let counter = 0;
        const timer = setInterval(() => {
          counter += 1;
          setCount(counter);
          if (counter >= value) {
            clearInterval(timer);
          }
        }, interval);

        return () => clearInterval(timer);
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div className="text-center" ref={counterRef}>
      <div className="text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const TrustBadges = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trust & Excellence
          </h2>
          <p className="text-gray-600">
            With certifications and a track record of excellence, we're
            committed to delivering the highest quality dehydrated products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center group relative">
              <div className="bg-white rounded-lg shadow-md shadow-black p-4 h-56 flex items-center justify-center mb-2">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="max-h-48 max-w-full"
                />
              </div>
              <h3 className="text-sm font-medium">{cert.name}</h3>

              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-2 px-4 w-64 z-10 pointer-events-none">
                {cert.tooltip}
                <svg
                  className="absolute text-black h-2 w-full left-0 top-0 transform -translate-y-full"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 255"
                >
                  <polygon
                    className="fill-current"
                    points="0,255 127.5,0 255,255"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 bg-sage-50 rounded-xl">
          <Counter value={500} label="MT/year production capacity" suffix="+" />
          <Counter value={100} label="Premium products" suffix="+" />
          <Counter value={50} label="Export destinations" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
