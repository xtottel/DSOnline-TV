// app/gallery/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaPlayCircle,
  FaVideo,
  FaImages,
  FaArrowRight,
  FaFilter,
  FaExpand,
} from "react-icons/fa";
import { Container } from "@/layout/Container";
import GalleryHero from "./GalleryHero";

export default function Gallery() {
  return (
    <main className="bg-gray-50">
      {/* Gallery Hero */}
      <GalleryHero />

      {/* Featured Gallery */}
      <section className="py-15 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Featured Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked moments that capture the essence of our regions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredGalleries.map((gallery, index) => (
              <div key={index} className="group bg-black rounded-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={gallery.coverImage}
                    alt={gallery.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#cb991e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {gallery.itemCount} {gallery.type}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{gallery.title}</h3>
                    <p className="text-gray-300 mb-4">{gallery.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#cb991e] text-sm">{gallery.date}</span>
                      <Link
                        href={gallery.link}
                        className="inline-flex items-center text-white hover:text-[#cb991e] font-medium"
                      >
                        View Gallery
                        <FaArrowRight className="ml-2 text-sm" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Media Grid */}
      <section className="py-15 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Media Library
              </h2>
              <p className="text-xl text-gray-600">
                Browse our complete collection of photos and videos
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <FaFilter className="text-[#cb991e]" />
              <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]">
                <option>All Categories</option>
                <option>Festivals</option>
                <option>Cultural Events</option>
                <option>Landscapes</option>
                <option>People & Portraits</option>
                <option>Traditional Arts</option>
              </select>
              <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaImages className="text-[#cb991e] text-2xl" />
              <h3 className="text-3xl font-bold text-black">Photos</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photoGallery.map((photo, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white bg-opacity-90 rounded-full p-2">
                        <FaExpand className="text-black text-lg" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-black mb-1">{photo.title}</h4>
                    <p className="text-sm text-gray-600">{photo.category}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">{photo.date}</span>
                      <span className="text-xs text-[#cb991e]">{photo.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300">
                Load More Photos
              </button>
            </div>
          </div>

          {/* Video Grid */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaVideo className="text-[#cb991e] text-2xl" />
              <h3 className="text-3xl font-bold text-black">Videos</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoGallery.map((video, index) => (
                <div
                  key={index}
                  className="group bg-black rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <button className="bg-[#cb991e] hover:bg-[#d8aa3a] rounded-full p-4 transition-all duration-300 transform group-hover:scale-110">
                        <FaPlayCircle className="text-black text-2xl" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-semibold">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#cb991e] transition-colors duration-300">
                      {video.title}
                    </h4>
                    <p className="text-gray-400 mb-4">{video.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#cb991e]">{video.views} views</span>
                      <span className="text-sm text-gray-500">{video.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300">
                Load More Videos
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <section className="py-15 bg-black text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {galleryStats.map((stat, index) => (
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
              Want to Use Our Media?
            </h2>
            <p className="text-xl mb-8">
              Contact us for licensing, collaborations, or to feature your event in our gallery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Contact Us
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 border-2 border-black hover:bg-black hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Data for gallery sections
const featuredGalleries = [
  {
    title: "Hogbetsotso Festival 2023",
    description: "Complete visual coverage of the annual migration festival",
    type: "photos",
    itemCount: "45",
    date: "November 2023",
    coverImage: "/gallery/featured1.jpg",
    link: "/gallery/hogbetsotso-2023",
  },
  {
    title: "Volta Landscape Series",
    description: "Breathtaking views of mountains, rivers, and waterfalls",
    type: "videos",
    itemCount: "12",
    date: "October 2023",
    coverImage: "/gallery/featured2.jpg",
    link: "/gallery/volta-landscapes",
  },
];

const photoGallery = [
  {
    title: "Traditional Dancers",
    category: "Cultural Performance",
    location: "Ho",
    date: "Nov 15, 2023",
    image: "/gallery/photo1.jpg",
  },
  {
    title: "Wli Waterfalls",
    category: "Landscape",
    location: "Hohoe",
    date: "Oct 22, 2023",
    image: "/gallery/photo2.jpg",
  },
  {
    title: "Market Scene",
    category: "Daily Life",
    location: "Keta",
    date: "Nov 8, 2023",
    image: "/gallery/photo3.jpg",
  },
  {
    title: "Festival Chief",
    category: "Portrait",
    location: "Anloga",
    date: "Nov 5, 2023",
    image: "/gallery/photo4.jpg",
  },
  {
    title: "Traditional Weaving",
    category: "Arts & Crafts",
    location: "Kpando",
    date: "Oct 18, 2023",
    image: "/gallery/photo5.jpg",
  },
  {
    title: "Lake Volta",
    category: "Landscape",
    location: "Akosombo",
    date: "Oct 12, 2023",
    image: "/gallery/photo6.jpg",
  },
  {
    title: "Youth Performers",
    category: "Cultural Performance",
    location: "Jasikan",
    date: "Nov 20, 2023",
    image: "/gallery/photo7.jpg",
  },
  {
    title: "Sunset at Coast",
    category: "Landscape",
    location: "Ada",
    date: "Oct 30, 2023",
    image: "/gallery/photo8.jpg",
  },
];

const videoGallery = [
  {
    title: "Hogbetsotso Festival Highlights",
    description: "Best moments from the 2023 festival celebrations",
    duration: "5:30",
    views: "15.2K",
    date: "Nov 2023",
    thumbnail: "/gallery/video1.jpg",
  },
  {
    title: "Traditional Ewe Music",
    description: "Authentic performance of traditional instruments",
    duration: "8:15",
    views: "23.7K",
    date: "Oct 2023",
    thumbnail: "/gallery/video2.jpg",
  },
  {
    title: "Volta Region Tourism Guide",
    description: "Exploring hidden gems and popular attractions",
    duration: "12:45",
    views: "45.1K",
    date: "Sep 2023",
    thumbnail: "/gallery/video3.jpg",
  },
];

const galleryStats = [
  {
    value: "2K+",
    label: "High-Quality Photos",
  },
  {
    value: "500+",
    label: "Video Clips",
  },
  {
    value: "150+",
    label: "Events Covered",
  },
  {
    value: "5M+",
    label: "Total Views",
  },
];