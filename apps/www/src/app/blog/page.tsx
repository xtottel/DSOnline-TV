// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaTag,
  FaComment,
  FaShare,
} from "react-icons/fa";
import { Container } from "@/layout/Container";

export default function Blog() {
  return (
    <main className="bg-gray-50">
      {/* Blog Hero */}
      <section className="py-20 bg-black text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#cb991e]">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stories, insights, and news from the heart of Volta and Oti Regions. 
              Discover the culture, people, and events that shape our communities.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pl-12 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="py-15 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Post */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-8">Featured Story</h2>
                <div className="group bg-black rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/blog/featured.jpg"
                      alt="Featured blog post"
                      width={800}
                      height={400}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#cb991e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                        Culture
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <div className="flex items-center mr-6">
                        <FaCalendarAlt className="mr-2 text-[#cb991e]" />
                        <span>December 15, 2023</span>
                      </div>
                      <div className="flex items-center mr-6">
                        <FaUser className="mr-2 text-[#cb991e]" />
                        <span>David Sefakor</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-2 text-[#cb991e]" />
                        <span>8 min read</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#cb991e] transition-colors duration-300">
                      The Evolution of Ewe Storytelling: From Oral Traditions to Digital Platforms
                    </h3>
                    {/* <p className="text-gray-300 mb-6 text-lg">
                      Explore how ancient storytelling techniques from the Volta Region are being 
                      preserved and transformed through modern digital media, creating new ways 
                      to share our cultural heritage with the world.
                    </p> */}
                    <div className="flex justify-between items-center">
                      <Link
                        href="/blog/ewe-storytelling-evolution"
                        className="inline-flex items-center text-[#cb991e] hover:text-white font-semibold transition-colors duration-300"
                      >
                        Read Full Story
                        <FaArrowRight className="ml-2" />
                      </Link>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <button className="hover:text-[#cb991e] transition-colors duration-300">
                          <FaComment className="text-lg" />
                        </button>
                        <button className="hover:text-[#cb991e] transition-colors duration-300">
                          <FaShare className="text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-black">Latest Articles</h2>
                  <div className="flex items-center gap-4">
                    <FaFilter className="text-[#cb991e]" />
                    <select className="px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]">
                      <option>Newest First</option>
                      <option>Oldest First</option>
                      <option>Most Popular</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <div className="absolute top-4 right-4">
                          <span className="bg-[#cb991e] text-black px-2 py-1 rounded text-sm font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <div className="flex items-center mr-4">
                            <FaCalendarAlt className="mr-1 text-[#cb991e]" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="mr-1 text-[#cb991e]" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#cb991e] transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        {/* <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p> */}
                        <div className="flex justify-between items-center">
                          <Link
                            href={post.link}
                            className="inline-flex items-center text-[#cb991e] hover:text-black font-medium"
                          >
                            Read More
                            <FaArrowRight className="ml-2 text-sm" />
                          </Link>
                          <div className="flex items-center text-sm text-gray-500">
                            <FaComment className="mr-1" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Load More */}
              <div className="text-center">
                <button className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-bold text-black mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center">
                        <FaTag className="text-[#cb991e] mr-3" />
                        <span className="text-gray-700 group-hover:text-black font-medium">
                          {category.name}
                        </span>
                      </div>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm group-hover:bg-[#cb991e] group-hover:text-black transition-colors duration-300">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-bold text-black mb-6">Popular Posts</h3>
                <div className="space-y-6">
                  {popularPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={post.link}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black group-hover:text-[#cb991e] transition-colors duration-300 line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <FaCalendarAlt className="mr-1 text-[#cb991e]" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-[#cb991e] to-[#e0b34e] text-black rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-4">
                  Get the latest articles and news from Volta and Oti Regions delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button className="w-full px-4 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-15 bg-black text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have a Story to Share?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for compelling stories from the Volta and Oti Regions. 
              Share your experiences, insights, or community news with our global audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300"
              >
                Submit a Story
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Data for blog page
const blogPosts = [
  {
    title: "Traditional Festivals of Oti Region: A Complete Guide",
    excerpt: "Discover the vibrant festivals that celebrate the rich cultural heritage of the Oti Region, from the Kyempɛ to the Kente festivals.",
    category: "Culture",
    date: "Dec 10, 2023",
    readTime: "6 min",
    comments: "12",
    image: "/blog/post1.jpg",
    link: "/blog/oti-festivals-guide",
  },
  {
    title: "The Rise of Digital Media in Rural Ghana: Opportunities and Challenges",
    excerpt: "How digital platforms are transforming communication and business in rural communities across Volta and Oti Regions.",
    category: "Media",
    date: "Dec 5, 2023",
    readTime: "8 min",
    comments: "23",
    image: "/blog/post2.jpg",
    link: "/blog/digital-media-rural-ghana",
  },
  {
    title: "10 Must-Visit Historical Sites in Volta Region",
    excerpt: "From ancient slave trade routes to colonial forts, explore the historical landmarks that tell the story of Volta Region.",
    category: "Travel",
    date: "Nov 28, 2023",
    readTime: "5 min",
    comments: "18",
    image: "/blog/post3.jpg",
    link: "/blog/volta-historical-sites",
  },
  {
    title: "Preserving Indigenous Languages Through Digital Content",
    excerpt: "How DS Online TV is helping to preserve Ewe and other local languages through innovative digital storytelling.",
    category: "Culture",
    date: "Nov 22, 2023",
    readTime: "7 min",
    comments: "15",
    image: "/blog/post4.jpg",
    link: "/blog/preserving-indigenous-languages",
  },
  {
    title: "The Economic Impact of Cultural Tourism in Volta Region",
    excerpt: "Analyzing how cultural events and heritage sites are driving economic growth in local communities.",
    category: "Business",
    date: "Nov 15, 2023",
    readTime: "9 min",
    comments: "9",
    image: "/blog/post5.jpg",
    link: "/blog/cultural-tourism-impact",
  },
  {
    title: "Meet the Artisans: Traditional Craftsmanship in Modern Times",
    excerpt: "Profiling the skilled artisans keeping traditional crafts alive while adapting to contemporary markets.",
    category: "Arts",
    date: "Nov 8, 2023",
    readTime: "6 min",
    comments: "21",
    image: "/blog/post6.jpg",
    link: "/blog/traditional-artisans",
  },
];

const categories = [
  { name: "Culture", slug: "culture", count: 24 },
  { name: "Travel", slug: "travel", count: 18 },
  { name: "Business", slug: "business", count: 12 },
  { name: "Arts", slug: "arts", count: 15 },
  { name: "Media", slug: "media", count: 9 },
  { name: "Community", slug: "community", count: 21 },
  { name: "Events", slug: "events", count: 17 },
  { name: "History", slug: "history", count: 11 },
];

const popularPosts = [
  {
    title: "The Complete Guide to Hogbetsotso Festival",
    date: "Nov 5, 2023",
    image: "/blog/popular1.jpg",
    link: "/blog/hogbetsotso-guide",
  },
  {
    title: "How to Start a Business in Volta Region",
    date: "Oct 28, 2023",
    image: "/blog/popular2.jpg",
    link: "/blog/volta-business-guide",
  },
  {
    title: "Traditional Ewe Cuisine: Recipes and History",
    date: "Oct 15, 2023",
    image: "/blog/popular3.jpg",
    link: "/blog/ewe-cuisine",
  },
  {
    title: "Digital Skills Training for Rural Youth",
    date: "Oct 8, 2023",
    image: "/blog/popular4.jpg",
    link: "/blog/digital-skills-youth",
  },
];