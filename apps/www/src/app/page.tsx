// app/page.tsx
import Hero from "@/components/core/Hero";
import Image from "next/image";
import Link from "next/link";
import {
  FaPlayCircle,
  FaUsers,
  FaFilm,
  FaBroadcastTower,
  FaCalendarAlt,
  FaGlobeAfrica,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Container } from "@/layout/Container";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />

      {/* About Section */}
      <section className="py-15 bg-black text-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bringing <span className="text-[#cb991e]">Volta & Oti</span> to
                the World
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                DS Online TV is a modern digital media platform dedicated to
                showcasing the rich culture, authentic stories, and vibrant
                entertainment from the Volta and Oti Regions.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We connect the global community with live events, cultural
                highlights, and compelling content that celebrates our heritage
                while embracing modern storytelling techniques.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300"
              >
                Learn More About Us
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder-about.jpg"
                  alt="DS Online TV Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">Our Studio</h3>
                  <p className="text-[#cb991e]">Hohoe, Volta Region</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-15 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive media services that celebrate and promote Volta and
              Oti culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="w-20 h-20 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#cb991e] hover:text-black font-medium"
                >
                  Explore
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Live Events Section */}
      <section className="py-15 bg-gray-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Upcoming Live Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t miss our exclusive coverage of major events from the
              Volta and Oti Regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-black rounded-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#cb991e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center text-[#cb991e]">
                      <FaPlayCircle className="mr-2" />
                      Live Stream
                    </span>
                    <Link
                      href={event.link}
                      className="text-white hover:text-[#cb991e] text-sm font-medium"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center px-6 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300"
            >
              View All Events
              <FaCalendarAlt className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-15 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              From Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stories, news, and insights from the heart of Volta and Oti
              Regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#cb991e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#cb991e] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="inline-flex items-center text-[#cb991e] hover:text-black font-medium"
                  >
                    Read More
                    <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300"
            >
              View All Articles
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-15 bg-black text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Viewers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our global audience about their experience with DS Online
              TV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <FaQuoteLeft className="text-[#cb991e] text-2xl mb-4" />
                <p className="text-gray-300 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#cb991e] rounded-full mr-4 flex items-center justify-center text-black font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#cb991e] text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-15 bg-gradient-to-r from-[#cb991e] to-[#e0b34e] text-black">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to DS Online TV and never miss out on the latest from
              the Volta and Oti Regions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
              />
              <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-800">
              By subscribing, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Data for the sections (unchanged)
const services = [
  {
    icon: <FaBroadcastTower className="text-white text-2xl" />,
    title: "Live Broadcasting",
    description:
      "Streaming of cultural events, festivals, and community gatherings in real-time.",
    link: "/services/live-broadcasting",
  },
  {
    icon: <FaFilm className="text-white text-2xl" />,
    title: "Documentary Production",
    description:
      "Authentic stories and documentaries showcasing the rich heritage of Volta and Oti.",
    link: "/services/documentaries",
  },
  {
    icon: <FaPlayCircle className="text-white text-2xl" />,
    title: "Entertainment Content",
    description:
      "Music, drama, and entertainment programs featuring local talents and artists.",
    link: "/services/entertainment",
  },
  {
    icon: <FaGlobeAfrica className="text-white text-2xl" />,
    title: "Cultural Programming",
    description:
      "Content that celebrates and preserves the unique traditions of our regions.",
    link: "/services/cultural",
  },
  {
    icon: <FaUsers className="text-white text-2xl" />,
    title: "Community Stories",
    description:
      "Highlighting the people, businesses, and initiatives making a difference.",
    link: "/services/community",
  },
  {
    icon: <FaCalendarAlt className="text-white text-2xl" />,
    title: "Event Coverage",
    description:
      "Comprehensive coverage of major events and festivals across Volta and Oti.",
    link: "/services/events",
  },
];

const events = [
  {
    title: "Ho Hogbetsotso Festival",
    date: "Nov 5, 2023",
    location: "Ho, Volta Region",
    image: "/event1.jpg",
    link: "/events/hogbetsotso",
  },
  {
    title: "Oti Regional Music Awards",
    date: "Dec 12, 2023",
    location: "Dambai, Oti Region",
    image: "/event2.jpg",
    link: "/events/music-awards",
  },
  {
    title: "Volta Trade & Investment Fair",
    date: "Jan 18, 2024",
    location: "Ho, Volta Region",
    image: "/event3.jpg",
    link: "/events/trade-fair",
  },
];

const blogPosts = [
  {
    title: "The Rich Cultural Heritage of the Ewe People",
    excerpt:
      "Exploring the traditions, customs, and history that make the Ewe culture unique and vibrant...",
    category: "Culture",
    date: "Oct 15, 2023",
    readTime: "5 min",
    image: "/blog1.jpg",
    link: "/blog/ewe-culture",
  },
  {
    title: "10 Hidden Gems to Visit in the Volta Region",
    excerpt:
      "From breathtaking waterfalls to historical sites, discover the must-visit places in Volta...",
    category: "Travel",
    date: "Oct 8, 2023",
    readTime: "7 min",
    image: "/blog2.jpg",
    link: "/blog/volta-travel",
  },
  {
    title:
      "How Digital Media is Transforming Storytelling in Rural Communities",
    excerpt:
      "Examining the impact of platforms like DS Online TV on preserving and sharing local narratives...",
    category: "Media",
    date: "Oct 1, 2023",
    readTime: "6 min",
    image: "/blog3.jpg",
    link: "/blog/digital-storytelling",
  },
];

const testimonials = [
  {
    quote:
      "As someone living abroad, DS Online TV keeps me connected to my roots. The quality of production and authentic content is impressive.",
    name: "Kofi Mensah",
    initials: "KM",
    location: "New York, USA",
  },
  {
    quote:
      "Finally, a platform that truly represents our culture with dignity and professionalism. The live events coverage is exceptional.",
    name: "Ama Nyuieme",
    initials: "AN",
    location: "Ho, Ghana",
  },
  {
    quote:
      "The documentaries on DS Online TV have educated my family about the rich history of the Volta Region. Keep up the great work!",
    name: "David Johnson",
    initials: "DJ",
    location: "London, UK",
  },
];