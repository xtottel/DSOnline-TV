// app/page.tsx
import Hero from "./Hero";
import Image from "next/image";
import Link from "next/link";
import {
  FaFilm,
  FaBroadcastTower,
  FaArrowRight,
  FaPhotoVideo,
  FaUsers,
  FaAward,
  FaChartLine,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { Container } from "@/layout/Container";
import { GiBigDiamondRing, GiDeliveryDrone } from "react-icons/gi";
import { TbCoffin } from "react-icons/tb";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#cb991e] mb-2">500+</div>
              <p className="text-gray-300">Events Covered</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#cb991e] mb-2">100+</div>
              <p className="text-gray-300">Satisfied Clients</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#cb991e] mb-2">5+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#cb991e] mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Professional Media Production in{" "}
                <span className="text-[#cb991e]">Volta & Oti Regions</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                DS Online TV is a premier media production company delivering
                broadcast-quality content and professional media services to
                businesses, organizations, and individuals across Ghana.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With state-of-the-art equipment and a team of experienced
                professionals, we transform your vision into compelling visual
                content that drives engagement and delivers results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300"
                >
                  Our Story
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/Slider1.jpg"
                  alt="DS Online TV Professional Studio"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    Broadcast Studio
                  </h3>
                  <p className="text-[#cb991e]">Hohoe, Volta Region</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive media solutions tailored to meet your business and
              personal needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#cb991e]/30"
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
                  className="inline-flex items-center text-[#cb991e] hover:text-black font-medium group/link"
                >
                  Explore
                  <FaArrowRight className="ml-2 text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose DS Online TV
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional excellence and unmatched quality in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 group">
                <div className="w-16 h-16 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our latest work and successful client projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#cb991e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {project.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2 text-[#cb991e]" />
                      {project.date}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-[#cb991e] hover:text-black font-semibold text-sm group/link"
                    >
                      View Project
                      <FaArrowRight className="ml-1 text-xs group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300"
            >
              View All Projects
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Partners & Clients Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Trusted By
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re proud to work with leading organizations and businesses
              across Ghana
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative h-24 w-full flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-16 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-gray-300 rounded-md bg-white p-2"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Client Success Stories
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Hear what our partners say about working with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#cb991e] rounded-full flex items-center justify-center text-black font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#cb991e] text-sm">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#cb991e]">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
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
                    className="inline-flex items-center text-[#cb991e] hover:text-black font-medium group/link"
                  >
                    Read More
                    <FaArrowRight className="ml-2 text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#cb991e] to-[#e0b34e] text-black">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Media Presence?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for a professional consultation and let&apos;s
              discuss how we can bring your vision to life with our premium
              media services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Updated data with more professional approach
const services = [
  {
    icon: <FaBroadcastTower className="text-white text-xl" />,
    title: "Live Event Broadcasting",
    description:
      "Professional multi-camera live streaming for corporate events, festivals, and special occasions.",
    image: "/services/live-broadcasting.jpg",
    features: [
      "Multi-camera setup",
      "HD streaming",
      "Real-time production",
      "Global reach",
    ],
    link: "/services/live-broadcasting",
  },
  {
    icon: <FaPhotoVideo className="text-white text-xl" />,
    title: "Professional Photography",
    description:
      "High-quality commercial and event photography with professional editing and delivery.",
    image: "/services/photography.jpg",
    features: [
      "Commercial shoots",
      "Event coverage",
      "Professional editing",
      "Fast delivery",
    ],
    link: "/services/photography",
  },
  {
    icon: <GiBigDiamondRing className="text-white text-xl" />,
    title: "Wedding Services",
    description:
      "Comprehensive wedding coverage with cinematic videography and professional photography.",
    image: "/services/wedding.jpg",
    features: [
      "Cinematic videos",
      "Professional photos",
      "Drone coverage",
      "Custom packages",
    ],
    link: "/services/wedding",
  },
  {
    icon: <TbCoffin className="text-white text-xl" />,
    title: "Memorial Services",
    description:
      "Respectful and dignified coverage of funeral and memorial services.",
    image: "/services/funeral.jpg",
    features: [
      "Respectful coverage",
      "Memorial videos",
      "Live streaming",
      "Professional editing",
    ],
    link: "/services/funeral",
  },
  {
    icon: <GiDeliveryDrone className="text-white text-xl" />,
    title: "Aerial Videography",
    description:
      "Stunning aerial footage using professional drone technology for unique perspectives.",
    image: "/services/drone.jpg",
    features: [
      "4K aerial footage",
      "Licensed pilots",
      "Safe operation",
      "Creative angles",
    ],
    link: "/services/drone-videography",
  },
  {
    icon: <FaFilm className="text-white text-xl" />,
    title: "Corporate Production",
    description:
      "Professional video production for corporate communications, training, and marketing.",
    image: "/services/corporate.jpg",
    features: [
      "Corporate videos",
      "Training content",
      "Marketing films",
      "Brand storytelling",
    ],
    link: "/services/corporate",
  },
];

const features = [
  {
    icon: <FaAward className="text-black text-2xl" />,
    title: "Award-Winning Quality",
    description:
      "Consistently delivering broadcast-quality content that exceeds expectations",
  },
  {
    icon: <FaUsers className="text-black text-2xl" />,
    title: "Expert Team",
    description: "Experienced professionals with years of industry expertise",
  },
  {
    icon: <FaChartLine className="text-black text-2xl" />,
    title: "Proven Results",
    description: "Track record of successful projects for satisfied clients",
  },
  {
    icon: <FaShieldAlt className="text-black text-2xl" />,
    title: "Reliable Service",
    description: "Dependable and professional service from start to finish",
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
    image: "/Slider1.jpg",
    link: "/blog/ewe-culture",
  },
  {
    title: "10 Hidden Gems to Visit in the Volta Region",
    excerpt:
      "From breathtaking waterfalls to historical sites, discover the must-visit places in Volta...",
    category: "Travel",
    date: "Oct 8, 2023",
    readTime: "7 min",
    image: "/Slider1.jpg",
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
    image: "/Slider1.jpg",
    link: "/blog/digital-storytelling",
  },
];

// Recent Projects Data
const recentProjects = [
  {
    title: "Volta Trade Expo 2024",
    description:
      "Complete media coverage including live streaming, photography, and promotional videos for the largest trade fair in Volta Region.",
    category: "Event Coverage",
    image: "/projects/trade-expo-2024.jpg",
    date: "Jan 2024",
    duration: "3 Days",
    link: "/portfolio/trade-expo-2024",
  },
  {
    title: "Ghana Education Service Conference",
    description:
      "Professional video documentation and live streaming for the regional education conference with multiple speakers.",
    category: "Corporate",
    image: "/projects/education-conference.jpg",
    date: "Dec 2023",
    duration: "2 Days",
    link: "/portfolio/education-conference",
  },
  {
    title: "Traditional Wedding Ceremony",
    description:
      "Cinematic coverage of a traditional Ewe wedding with drone footage and multi-camera setup for the ceremony.",
    category: "Wedding",
    image: "/projects/traditional-wedding.jpg",
    date: "Nov 2023",
    duration: "Full Day",
    link: "/portfolio/traditional-wedding",
  },
];

// Partners Data
const partners = [
  {
    name: "Volta Regional Coordinating Council",
    logo: "/partners/volta-rcc.png",
  },
  {
    name: "Ghana Tourism Authority",
    logo: "/partners/ghana-tourism.png",
  },
  {
    name: "Ho Technical University",
    logo: "/partners/ho-technical.png",
  },
  {
    name: "Oti Regional Health Directorate",
    logo: "/partners/oti-health.png",
  },
  {
    name: "Volta Star Radio",
    logo: "/partners/volta-star.png",
  },
  {
    name: "Ghana Education Service",
    logo: "/partners/ges.png",
  },
  {
    name: "National Youth Authority",
    logo: "/partners/nya.png",
  },
  {
    name: "Hohoe Municipal Assembly",
    logo: "/partners/hohoe-assembly.png",
  },
  {
    name: "Jasikan District Assembly",
    logo: "/partners/jasikan-assembly.png",
  },
  {
    name: "Kpando Municipal Assembly",
    logo: "/partners/kpando-assembly.png",
  },
];

// Client Testimonials Data
const clientTestimonials = [
  {
    name: "Dr. Kwame Asare",
    initials: "KA",
    position: "Regional Director",
    company: "Ghana Education Service",
    quote:
      "DS Online TV delivered exceptional coverage of our regional conference. Their professionalism and attention to detail were outstanding.",
    project: "Education Conference",
    rating: 5,
  },
  {
    name: "Madam Akua Mensah",
    initials: "AM",
    position: "Event Coordinator",
    company: "Volta Trade Expo",
    quote:
      "The live streaming service was flawless, and the promotional videos generated significant engagement for our event.",
    project: "Trade Expo 2024",
    rating: 5,
  },
  {
    name: "Mr. Kofi Adjei",
    initials: "KA",
    position: "Managing Director",
    company: "AgroTech Solutions",
    quote:
      "Our corporate documentary exceeded expectations. DS Online TV truly understood our brand and told our story beautifully.",
    project: "Brand Documentary",
    rating: 5,
  },
];
