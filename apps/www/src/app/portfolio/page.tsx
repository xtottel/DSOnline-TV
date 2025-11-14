// app/portfolio/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaPlayCircle,
  FaExternalLinkAlt,
  FaFilter,
  FaArrowRight,
} from "react-icons/fa";
import { Container } from "@/layout/Container";
import PortfolioHero from "./PortfolioHero";

export default function Portfolio() {
  return (
    <main className="bg-gray-50">
      {/* Portfolio Hero */}
      <PortfolioHero />

      {/* Featured Projects */}
      <section className="py-15 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked selections that represent the quality and diversity of our work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-black rounded-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#cb991e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={project.link}
                      className="bg-white text-black p-3 rounded-full hover:bg-[#cb991e] transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* All Projects Grid */}
      <section className="py-15 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                All Projects
              </h2>
              <p className="text-xl text-gray-600">
                Browse our complete collection of work
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <FaFilter className="text-[#cb991e]" />
              <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]">
                <option>All Categories</option>
                <option>Live Events</option>
                <option>Documentaries</option>
                <option>Cultural Programming</option>
                <option>Entertainment</option>
                <option>Community Stories</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#cb991e] text-black px-2 py-1 rounded text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  {project.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-50 rounded-full p-4">
                        <FaPlayCircle className="text-[#cb991e] text-2xl" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#cb991e] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.date}</span>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-[#cb991e] hover:text-black font-medium"
                    >
                      View Project
                      <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300">
              Load More Projects
            </button>
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-15 bg-black text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-[#cb991e] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-15 bg-gradient-to-r from-[#cb991e] to-[#e0b34e] text-black">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8">
              Let&apos;s work together to tell your story and showcase the beauty of Volta and Oti Regions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Start a Project
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-black hover:bg-black hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Data for the portfolio sections
const featuredProjects = [
  {
    title: "Hogbetsotso Festival 2023",
    description: "Complete live coverage of the annual Hogbetsotso festival in Anlo",
    category: "Live Event",
    image: "/portfolio/featured1.jpg",
    link: "/portfolio/hogbetsotso-2023",
  },
  {
    title: "Voices of Volta",
    description: "Documentary series exploring the diverse cultures of Volta Region",
    category: "Documentary",
    image: "/portfolio/featured2.jpg",
    link: "/portfolio/voices-of-volta",
  },
];

const allProjects = [
  {
    title: "Traditional Dance Showcase",
    excerpt: "Capturing the beauty and energy of traditional Ewe dances",
    category: "Cultural",
    type: "video",
    date: "Nov 2023",
    image: "/portfolio/project1.jpg",
    link: "/portfolio/traditional-dance",
  },
  {
    title: "Oti Music Awards",
    excerpt: "Full coverage of the inaugural Oti Regional Music Awards",
    category: "Live Event",
    type: "video",
    date: "Dec 2023",
    image: "/portfolio/project2.jpg",
    link: "/portfolio/oti-music-awards",
  },
  {
    title: "Volta Business Spotlight",
    excerpt: "Documentary series highlighting successful entrepreneurs in Volta",
    category: "Community",
    type: "documentary",
    date: "Oct 2023",
    image: "/portfolio/project3.jpg",
    link: "/portfolio/business-spotlight",
  },
  {
    title: "Traditional Cuisine",
    excerpt: "Exploring the unique culinary traditions of the Volta Region",
    category: "Cultural",
    type: "documentary",
    date: "Sep 2023",
    image: "/portfolio/project4.jpg",
    link: "/portfolio/traditional-cuisine",
  },
  {
    title: "Youth Talent Competition",
    excerpt: "Annual talent show showcasing young artists from Volta and Oti",
    category: "Entertainment",
    type: "video",
    date: "Aug 2023",
    image: "/portfolio/project5.jpg",
    link: "/portfolio/youth-talent",
  },
  {
    title: "Historical Sites of Volta",
    excerpt: "Photographic journey through historical landmarks and sites",
    category: "Cultural",
    type: "photo",
    date: "Jul 2023",
    image: "/portfolio/project6.jpg",
    link: "/portfolio/historical-sites",
  },
];

const statistics = [
  {
    value: "150+",
    label: "Projects Completed",
  },
  {
    value: "50+",
    label: "Live Events Covered",
  },
  {
    value: "25+",
    label: "Documentaries Produced",
  },
  {
    value: "10M+",
    label: "Total Views",
  },
];