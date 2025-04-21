
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

interface Certification {
  id: number;
  name: string;
  description: string;
  logo: string;
  details: string[];
  downloadLink: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "FSSAI Certification",
    description:
      "Food Safety and Standards Authority of India certification ensures our products meet strict food safety standards.",
    logo: "https://vectorconversion.net/wp-content/uploads/2019/11/fssai-01.jpg",
    details: [
      "Compliance with Food Safety and Standards Act, 2006",
      "Regular audits to ensure facility meets all requirements",
      "Guarantees products are safe for consumption",
      "License Number: 10012345678910",
    ],
    downloadLink: "./photos/fssai.png",
  },
  {
    id: 2,
    name: "ISO 22000:2018",
    description:
      "International Organization for Standardization certification for our food safety management system.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTcqBwPFOwWfLTqS1HpqElS_XKpOa74Dw2Q&s",
    details: [
      "Food safety management system certification",
      "Ensures consistent and safe food production",
      "Includes HACCP principles and prerequisites",
      "Certificate Number: ISO22000-IN-12345",
    ],
    downloadLink: "./photos/iso.png",
  },
  {
    id: 3,
    name: "HACCP Certification",
    description:
      "Hazard Analysis Critical Control Point system ensures food safety throughout our production process.",
    logo: "https://5.imimg.com/data5/SELLER/Default/2020/10/RQ/QB/ET/44636240/hazard-analysis-critical-control-point-haccp.jpg",
    details: [
      "Systematic approach to food safety from raw materials to distribution",
      "Identifies and controls biological, chemical, and physical hazards",
      "Preventive approach to food safety",
      "Certification Number: HACCP-2022-7890",
    ],
    downloadLink: "./photos/haccp.png",
  },
  {
    id: 4,
    name: "Organic Certification",
    description:
      "Our organic products are certified to meet international organic standards.",
    logo: "https://www.akeandhumphris.co.uk/cdn/shop/collections/shutterstock_1169688391_organic_landscape.jpg?v=1694590105",
    details: [
      "Ensures no synthetic fertilizers, pesticides, or GMOs",
      "Meets USDA NOP and EU Organic standards",
      "Annual inspections of our organic production line",
      "Certificate Number: ORG-12345678",
    ],
    downloadLink: "./photos/organic.jpg",
  },
];

const Certifications = () => {
  const isMobile = useIsMobile();
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Certifications & Compliance
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Our commitment to quality, safety, and regulatory compliance is
              reflected in our certifications and adherence to international
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Certifications
            </h2>
            <p className="text-gray-600">
              We maintain the highest standards through rigorous certification
              processes and regular audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center bg-white rounded shadow-sm p-2">
                      <img
                        src={cert.logo}
                        alt={`${cert.name} Logo`}
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {cert.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  <details className="mb-4 group">
                    <summary className="list-none flex items-center cursor-pointer font-medium text-secondary">
                      <span>View Details</span>
                      <svg
                        className="ml-2 h-5 w-5 transform transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-4 pl-4 border-l-2 border-accent">
                      <ul className="space-y-2 text-gray-600">
                        {cert.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  <div className="mt-auto">
                    <a
                      href={cert.downloadLink}
                      className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors"
                    >
                      Download Certificate
                      <svg
                        className="ml-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary">
              Our Quality Assurance Process
            </h2>
            <p className="text-gray-600">
              From raw material inspection to final product testing, quality is
              assured at every step.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps for Desktop */}
            {!isMobile && (
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-secondary/30 transform -translate-x-1/2"></div>
            )}

            <div className="space-y-8 md:space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-6 md:mb-0 md:pr-12 text-center md:text-right order-2 md:order-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    1. Raw Material Sourcing
                  </h3>
                  <p className="text-gray-600">
                    We select only the highest quality raw materials, working
                    directly with trusted farmers and suppliers who share our
                    commitment to quality.
                  </p>
                </div>

                {/* Step number indicator */}
                <div className="absolute md:static left-0 top-0 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary text-white font-bold order-1 md:order-2">
                  1
                </div>

                <div className="md:w-5/12 md:pl-12 order-3">
                  <img
                    src="photos/image1.jpg"
                    alt="Raw Material Sourcing"
                    className="rounded-lg shadow-md mt-4 md:mt-0"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-6 md:mb-0 md:pl-12 text-center md:text-left order-2 md:order-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    2. Inspection & Washing
                  </h3>
                  <p className="text-gray-600">
                    All incoming materials undergo rigorous inspection and
                    thorough washing to ensure cleanliness and remove any
                    foreign materials.
                  </p>
                </div>

                {/* Step number indicator */}
                <div className="absolute md:static left-0 top-0 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary text-white font-bold order-1 md:order-2">
                  2
                </div>

                <div className="md:w-5/12 md:pr-12 order-3">
                  <img
                    src="photos/image6.jpg"
                    alt="Inspection & Washing"
                    className="rounded-lg shadow-md mt-4 md:mt-0"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-6 md:mb-0 md:pr-12 text-center md:text-right order-2 md:order-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    3. Preparation & Cutting
                  </h3>
                  <p className="text-gray-600">
                    Materials are carefully prepared and cut to specification,
                    ensuring uniformity and consistency in the final product.
                  </p>
                </div>

                {/* Step number indicator */}
                <div className="absolute md:static left-0 top-0 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary text-white font-bold order-1 md:order-2">
                  3
                </div>

                <div className="md:w-5/12 md:pl-12 order-3">
                  <img
                    src="photos/image3.jpg"
                    alt="Preparation & Cutting"
                    className="rounded-lg shadow-md mt-4 md:mt-0"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-6 md:mb-0 md:pl-12 text-center md:text-left order-2 md:order-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    4. Dehydration Process
                  </h3>
                  <p className="text-gray-600">
                    Our controlled dehydration process ensures optimal moisture
                    removal while preserving nutrients, flavor, and color.
                  </p>
                </div>

                {/* Step number indicator */}
                <div className="absolute md:static left-0 top-0 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary text-white font-bold order-1 md:order-2">
                  4
                </div>

                <div className="md:w-5/12 md:pr-12 order-3">
                  <img
                    src="photos/process.jpg"
                    alt="Dehydration Process"
                    className="rounded-lg shadow-md mt-4 md:mt-0"
                  />
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-6 md:mb-0 md:pr-12 text-center md:text-right order-2 md:order-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    5. Quality Testing
                  </h3>
                  <p className="text-gray-600">
                    Every batch undergoes comprehensive testing for moisture
                    content, microbiological safety, and sensory attributes.
                  </p>
                </div>

                {/* Step number indicator */}
                <div className="absolute md:static left-0 top-0 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary text-white font-bold order-1 md:order-2">
                  5
                </div>

                <div className="md:w-5/12 md:pl-12 order-3">
                  <img
                    src="photos/image7.jpg"
                    alt="Quality Testing"
                    className="rounded-lg shadow-md mt-4 md:mt-0"
                  />
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-6 md:mb-0 md:pl-12 text-center md:text-left order-2 md:order-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    6. Packaging & Shipping
                  </h3>
                  <p className="text-gray-600">
                    Products are carefully packaged in our clean room facility
                    and shipped under controlled conditions to maintain quality.
                  </p>
                </div>

                {/* Step number indicator */}
                <div className="absolute md:static left-0 top-0 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary text-white font-bold order-1 md:order-2">
                  6
                </div>

                <div className="md:w-5/12 md:pr-12 order-3">
                  <img
                    src="photos/image2.jpg"
                    alt="Packaging & Shipping"
                    className="rounded-lg shadow-md mt-4 md:mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Specific Certification Information?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Our team can provide detailed information about our certifications
            and compliance with specific market requirements.
          </p>
          <a
            href="/contact"
            className="bg-white text-secondary hover:bg-white/90 px-8 py-3 rounded-md font-medium shadow-md inline-block transition-all duration-300"
          >
            Contact Our Quality Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
