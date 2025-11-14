import { Container } from "@/layout/Container";
import { FaCheckCircle, FaArrowDown } from "react-icons/fa";

export default function ServicesHero() {
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
          poster="/services-hero.jpg" // Fallback image
        >
          <source src="/videos/VID-20250917-WA0027.mp4" type="video/mp4" />
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
              Professional{" "}
              <span className="text-[#cb991e]">Media Services</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Premium media production services delivering exceptional quality
              for businesses, events, and creative projects. We transform your
              vision into compelling visual content that drives engagement and
              results.
            </p>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center">
                <FaCheckCircle className="text-[#cb991e] mr-2" />
                Premium Quality Guaranteed
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-[#cb991e] mr-2" />
                Professional Equipment
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-[#cb991e] mr-2" />
                Fast Turnaround
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
