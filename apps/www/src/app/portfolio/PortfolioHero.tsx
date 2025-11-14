import { Container } from "@/layout/Container";
import { FaCheckCircle, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/portfolio-hero.jpg" // Fallback image
        >
          <source src="/videos/VID-20250917-WA0027.mp4" type="video/mp4" />
          {/* You can use the same video or a different one for portfolio */}
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Glass Overlay Container */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass Effect Box */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Creative{" "}
              <span className="text-[#cb991e]">Portfolio</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Explore our collection of stunning media projects that showcase 
              our expertise in photography, videography, and creative production. 
              Each project tells a unique story crafted with precision and passion.
            </p>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center">
                <FaCheckCircle className="text-[#cb991e] mr-2" />
                Diverse Project Range
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-[#cb991e] mr-2" />
                Creative Excellence
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-[#cb991e] mr-2" />
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <FaArrowDown className="text-white text-xl" />
        </div>
      </div>
    </section>
  );
}