// app/services/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/layout/Container";
import { FaPlayCircle, FaFilm, FaBroadcastTower, FaMicrophone, FaGlobeAfrica, FaPhotoVideo, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-hero.jpg"
            alt="DS Online TV Services"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#cb991e]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              DS Online TV offers comprehensive media solutions that celebrate and promote the rich culture, 
              stories, and talents of the Volta and Oti Regions to a global audience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300">
                Get in Touch
              </Link>
              <Link href="/portfolio" className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all duration-300">
                View Our Work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From live event coverage to documentary production, we provide end-to-end media solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute top-4 left-4 bg-[#cb991e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#cb991e] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <FaCheckCircle className="text-[#cb991e] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} className="inline-flex items-center text-[#cb991e] hover:text-black font-medium">
                    Learn More
                    <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we bring your vision to life with professional media production
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-lg">
                <div className="w-16 h-16 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-black font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#cb991e]">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible options to meet your media production needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-lg border ${index === 1 ? 'border-[#cb991e] bg-gray-50 scale-105' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-semibold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">GHS {plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">GHS {plan.originalPrice}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-[#cb991e] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center px-6 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#cb991e] to-[#e0b34e] text-black">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can bring your vision to life with our professional media services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300">
                Request a Quote
              </Link>
              <Link href="/portfolio" className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-lg transition-all duration-300">
                View Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// Data for the services page (unchanged)
const services = [
  {
    icon: <FaBroadcastTower className="text-white text-2xl" />,
    title: "Live Event Broadcasting",
    category: "Broadcast",
    description: "Professional live streaming of cultural events, festivals, and ceremonies.",
    features: [
      "Multi-camera setup",
      "Professional audio capture",
      "Real-time streaming",
      "Social media integration",
      "Post-event highlights"
    ],
    image: "/live-broadcast.jpg",
    link: "/services/live-broadcasting"
  },
  {
    icon: <FaFilm className="text-white text-2xl" />,
    title: "Documentary Production",
    category: "Production",
    description: "Authentic storytelling that captures the essence of Volta and Oti cultures.",
    features: [
      "Research and scripting",
      "Professional filming",
      "Cultural sensitivity",
      "Post-production editing",
      "Distribution planning"
    ],
    image: "/documentary-production.jpg",
    link: "/services/documentaries"
  },
  {
    icon: <FaPlayCircle className="text-white text-2xl" />,
    title: "Entertainment Content",
    category: "Entertainment",
    description: "Music videos, drama series, and entertainment shows featuring local talent.",
    features: [
      "Concept development",
      "Talent coordination",
      "Professional production",
      "Editing and effects",
      "Platform optimization"
    ],
    image: "/entertainment-content.jpg",
    link: "/services/entertainment"
  },
  {
    icon: <FaMicrophone className="text-white text-2xl" />,
    title: "Audio Production",
    category: "Audio",
    description: "Professional audio recording, podcasts, and sound design services.",
    features: [
      "Studio recording",
      "Field recording",
      "Audio editing",
      "Sound design",
      "Mixing and mastering"
    ],
    image: "/audio-production.jpg",
    link: "/services/audio"
  },
  {
    icon: <FaPhotoVideo className="text-white text-2xl" />,
    title: "Photography Services",
    category: "Photography",
    description: "High-quality photography for events, portraits, and commercial use.",
    features: [
      "Event coverage",
      "Portrait sessions",
      "Product photography",
      "Photo editing",
      "Digital delivery"
    ],
    image: "/photography-services.jpg",
    link: "/services/photography"
  },
  {
    icon: <FaGlobeAfrica className="text-white text-2xl" />,
    title: "Cultural Programming",
    category: "Cultural",
    description: "Content that celebrates and preserves the unique traditions of our regions.",
    features: [
      "Cultural research",
      "Elder consultations",
      "Traditional practices",
      "Language preservation",
      "Educational content"
    ],
    image: "/cultural-programming.jpg",
    link: "/services/cultural"
  }
];

const processSteps = [
  {
    title: "Consultation",
    description: "We discuss your vision, goals, and requirements to understand your project needs."
  },
  {
    title: "Planning",
    description: "Our team develops a detailed plan including timeline, resources, and creative approach."
  },
  {
    title: "Production",
    description: "We execute the plan with professional equipment and expertise to capture your content."
  },
  {
    title: "Delivery",
    description: "You receive the final product, optimized for your chosen platforms and audience."
  }
];

const pricingPlans = [
  {
    name: "Basic Package",
    description: "For small events and simple productions",
    price: "1,500",
    originalPrice: "2,000",
    features: [
      "2-hour coverage",
      "Single camera setup",
      "Basic editing",
      "1080p resolution",
      "1 revision"
    ]
  },
  {
    name: "Professional Package",
    description: "Our most popular option for quality productions",
    price: "3,500",
    originalPrice: "4,200",
    features: [
      "4-hour coverage",
      "Multi-camera setup",
      "Professional editing",
      "4K resolution available",
      "3 revisions",
      "Drone footage (optional)"
    ]
  },
  {
    name: "Premium Package",
    description: "Comprehensive coverage for major events",
    price: "6,500",
    originalPrice: "7,800",
    features: [
      "Full-day coverage",
      "Multi-camera + drone",
      "Cinematic editing",
      "4K resolution",
      "Unlimited revisions",
      "Behind-the-scenes footage",
      "Social media highlights"
    ]
  }
];