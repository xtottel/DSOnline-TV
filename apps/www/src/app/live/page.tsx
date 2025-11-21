// app/live-broadcasting/page.tsx
import { Container } from "@/layout/Container";
import { FaPlay, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function LiveBroadcasting() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Live Event <span className="text-[#cb991e]">Broadcasting</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-4">
              Professional live streaming services for events, ceremonies, and
              special occasions. Reach your audience in real-time with
              crystal-clear quality.
            </p>
          </div>
        </Container>
      </section>

      {/* Live Video Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="mx-auto">
            <div className="text-center mb-8 md:mb-12 px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">
                Live Now
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Watch our current live broadcast
              </p>
            </div>

            {/* Live Video Player */}
            <div className="bg-black rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-2xl mb-6 md:mb-8 mx-2 md:mx-0">
              {/* Video Container with responsive aspect ratio */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                <iframe
                  src="https://www.youtube.com/embed/srJg6ZIPmvU?si=mm1WUC0EbklKykey"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Live Broadcast"
                  loading="lazy"
                />
              </div>

              {/* Live Status Bar */}
              <div className="bg-red-600 px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-sm md:text-base">LIVE NOW</span>
                </div>
                <div className="text-white text-xs md:text-sm">
                  <span className="opacity-90">Viewers: </span>
                  <span className="font-semibold">Watching Live</span>
                </div>
              </div>
            </div>

            {/* Mobile Optimized Info Section */}
            <div className="block md:hidden bg-gray-50 rounded-lg p-4 mx-2 mb-6">
              <h3 className="text-lg font-semibold text-black mb-2">
                Current Event
              </h3>
              <p className="text-sm text-gray-600">
                Professional live streaming with multi-camera setup and crystal-clear audio.
                Swipe down to refresh if the stream doesn&apos;t load.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              Why Choose Our Live Broadcasting?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md md:shadow-lg border border-gray-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#cb991e] rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto md:mx-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#cb991e] to-[#e0b34e] text-black">
        <Container>
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Want to Broadcast Your Event Live?
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-8">
              Contact us to schedule your live broadcast and reach your audience
              with professional streaming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 md:px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                Book Live Streaming
              </a>
              <a
                href="tel:+233249416700"
                className="px-6 md:px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                Call Now
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <FaPlay className="text-white text-base md:text-lg" />,
    title: "Real-time Streaming",
    description:
      "Broadcast your event live to YouTube, Facebook, and other platforms simultaneously.",
  },
  {
    icon: <FaUsers className="text-white text-base md:text-lg" />,
    title: "Multi-platform Reach",
    description:
      "Reach your audience wherever they are with simultaneous streaming to multiple platforms.",
  },
  {
    icon: <FaCheckCircle className="text-white text-base md:text-lg" />,
    title: "Professional Quality",
    description:
      "4K resolution, multi-camera setup, and professional audio for the best viewing experience.",
  },
];