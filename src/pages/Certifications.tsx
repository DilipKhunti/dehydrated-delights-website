
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    description: "Food Safety and Standards Authority of India certification ensures our products meet strict food safety standards.",
    logo: "https://fssai.gov.in/img/home/FSSAI_logo.png",
    details: [
      "Compliance with Food Safety and Standards Act, 2006",
      "Regular audits to ensure facility meets all requirements",
      "Guarantees products are safe for consumption",
      "License Number: 10012345678910"
    ],
    downloadLink: "#"
  },
  {
    id: 2,
    name: "ISO 22000:2018",
    description: "International Organization for Standardization certification for our food safety management system.",
    logo: "https://www.iso.org/files/live/sites/isoorg/files/about%20ISO/img/logo/logo_iso_black.png",
    details: [
      "Food safety management system certification",
      "Ensures consistent and safe food production",
      "Includes HACCP principles and prerequisites",
      "Certificate Number: ISO22000-IN-12345"
    ],
    downloadLink: "#"
  },
  {
    id: 3,
    name: "HACCP Certification",
    description: "Hazard Analysis Critical Control Point system ensures food safety throughout our production process.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HACCP_logo.png/800px-HACCP_logo.png",
    details: [
      "Systematic approach to food safety from raw materials to distribution",
      "Identifies and controls biological, chemical, and physical hazards",
      "Preventive approach to food safety",
      "Certification Number: HACCP-2022-7890"
    ],
    downloadLink: "#"
  },
  {
    id: 4,
    name: "Organic Certification",
    description: "Our organic products are certified to meet international organic standards.",
    logo: "https://images.squarespace-cdn.com/content/v1/5ee899cd0cc99f1b9d64463c/1596051152496-62YVUKF9VHC28WHPRZ1M/Organic+Logo+USA+USDA.jpg",
    details: [
      "Ensures no synthetic fertilizers, pesticides, or GMOs",
      "Meets USDA NOP and EU Organic standards",
      "Annual inspections of our organic production line",
      "Certificate Number: ORG-12345678"
    ],
    downloadLink: "#"
  },
  {
    id: 5,
    name: "Kosher Certification",
    description: "Kosher certified products that meet religious dietary requirements.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Orthodox_union_kashrus_logo.svg/1200px-Orthodox_union_kashrus_logo.svg.png",
    details: [
      "Strict adherence to kosher dietary laws",
      "Regular rabbi inspections of our facility",
      "Separated processing for kosher certified products",
      "Certificate Number: KOS-24680"
    ],
    downloadLink: "#"
  },
  {
    id: 6,
    name: "Halal Certification",
    description: "Our products are certified halal, meeting Islamic dietary requirements.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Malaysian_Department_of_Islamic_Development.svg/1200px-Malaysian_Department_of_Islamic_Development.svg.png",
    details: [
      "Compliance with Islamic dietary laws",
      "Regular inspections by halal certification body",
      "Ensures products are permissible according to Islamic law",
      "Certificate Number: HAL-13579"
    ],
    downloadLink: "#"
  },
];

const marketCompliance = [
  {
    market: "European Union",
    requirements: [
      "Compliance with EU Food Safety Regulations",
      "Adherence to Maximum Residue Limits (MRLs)",
      "GDPR compliance for customer data",
      "Complete product traceability"
    ]
  },
  {
    market: "United States",
    requirements: [
      "FDA registration for food facilities",
      "Compliance with FSMA regulations",
      "Adherence to US-specific labeling requirements",
      "Documentation for CBP import procedures"
    ]
  },
  {
    market: "Gulf Cooperation Council",
    requirements: [
      "Compliance with GSO standards",
      "Halal certification for applicable products",
      "Product registration with appropriate authorities",
      "Arabic labeling requirements"
    ]
  },
  {
    market: "Southeast Asia",
    requirements: [
      "Compliance with ASEAN harmonized standards",
      "Country-specific import requirements",
      "Product registration where required",
      "Documentation for customs clearance"
    ]
  },
];

const Certifications = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Compliance</h1>
            <p className="text-xl text-sage-100 mb-8">
              Our commitment to quality, safety, and regulatory compliance is reflected in our certifications 
              and adherence to international standards.
            </p>
          </div>
        </div>
      </section>
      
      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-gray-600">
              We maintain the highest standards through rigorous certification processes and regular audits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center bg-white rounded shadow-sm p-2">
                      <img src={cert.logo} alt={`${cert.name} Logo`} className="max-w-full max-h-full" />
                    </div>
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  
                  <details className="mb-4 group">
                    <summary className="list-none flex items-center cursor-pointer font-medium text-primary">
                      <span>View Details</span>
                      <svg 
                        className="ml-2 h-5 w-5 transform transition-transform group-open:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 pl-4 border-l-2 border-sage-200">
                      <ul className="space-y-2 text-gray-600">
                        {cert.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                  
                  <div className="mt-auto">
                    <a 
                      href={cert.downloadLink} 
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download Certificate
                      <svg 
                        className="ml-2 h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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
      <section className="py-16 bg-sage-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Quality Assurance Process</h2>
            <p className="text-gray-600">
              From raw material inspection to final product testing, quality is assured at every step.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-sage-300 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold mb-2">1. Raw Material Sourcing</h3>
                  <p className="text-gray-600">
                    We select only the highest quality raw materials, working directly with trusted farmers and suppliers who share our commitment to quality.
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-sage-600 text-white font-bold">1</div>
                
                <div className="md:w-5/12 md:pl-12">
                  <img src="https://images.unsplash.com/photo-1595850655192-fc87884c7fb1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" alt="Raw Material Sourcing" className="rounded-lg shadow-md" />
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pl-12">
                  <h3 className="text-xl font-bold mb-2">2. Inspection & Washing</h3>
                  <p className="text-gray-600">
                    All incoming materials undergo rigorous inspection and thorough washing to ensure cleanliness and remove any foreign materials.
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-sage-600 text-white font-bold">2</div>
                
                <div className="md:w-5/12 md:pr-12 md:text-right">
                  <img src="https://images.unsplash.com/photo-1584509172619-ef2396421d9f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" alt="Inspection & Washing" className="rounded-lg shadow-md" />
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold mb-2">3. Preparation & Cutting</h3>
                  <p className="text-gray-600">
                    Materials are carefully prepared and cut to specification, ensuring uniformity and consistency in the final product.
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-sage-600 text-white font-bold">3</div>
                
                <div className="md:w-5/12 md:pl-12">
                  <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" alt="Preparation & Cutting" className="rounded-lg shadow-md" />
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pl-12">
                  <h3 className="text-xl font-bold mb-2">4. Dehydration Process</h3>
                  <p className="text-gray-600">
                    Our controlled dehydration process ensures optimal moisture removal while preserving nutrients, flavor, and color.
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-sage-600 text-white font-bold">4</div>
                
                <div className="md:w-5/12 md:pr-12 md:text-right">
                  <img src="https://images.unsplash.com/photo-1546069901-d5aeb1d67ca2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" alt="Dehydration Process" className="rounded-lg shadow-md" />
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold mb-2">5. Quality Testing</h3>
                  <p className="text-gray-600">
                    Every batch undergoes comprehensive testing for moisture content, microbiological safety, and sensory attributes.
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-sage-600 text-white font-bold">5</div>
                
                <div className="md:w-5/12 md:pl-12">
                  <img src="https://images.unsplash.com/photo-1579165466741-7f35e4755199?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" alt="Quality Testing" className="rounded-lg shadow-md" />
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pl-12">
                  <h3 className="text-xl font-bold mb-2">6. Packaging & Shipping</h3>
                  <p className="text-gray-600">
                    Products are carefully packaged in our clean room facility and shipped under controlled conditions to maintain quality.
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-sage-600 text-white font-bold">6</div>
                
                <div className="md:w-5/12 md:pr-12 md:text-right">
                  <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500&h=300" alt="Packaging & Shipping" className="rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Compliance */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">International Market Compliance</h2>
            <p className="text-gray-600">
              We meet regulatory requirements for key markets worldwide, ensuring smooth import procedures for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketCompliance.map((market, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-sage-800">{market.market}</h3>
                <ul className="space-y-2">
                  {market.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-terracotta-500 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Specific Certification Information?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team can provide detailed information about our certifications and compliance 
            with specific market requirements.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-terracotta-500 hover:bg-white/90 px-8 py-3 rounded-md font-medium shadow-md inline-block transition-all duration-300"
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
