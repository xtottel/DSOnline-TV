// app/shows/page.tsx
import ShowsHero from "./ShowsHero";
import { Container } from "@/layout/Container";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaPlay, FaCalendarAlt, FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";

export default function ShowsPage() {
  return (
    <main className="bg-white">
      <ShowsHero />

      {/* Current Shows Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Popular Shows
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engaging content that connects with audiences across Volta and Oti Regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#cb991e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {show.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {show.schedule}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#cb991e] hover:bg-[#d8aa3a] text-black p-4 rounded-full cursor-pointer transition-all duration-300">
                      <FaPlay className="text-xl" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {show.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {show.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2 text-[#cb991e]" />
                      {show.schedule}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUsers className="mr-2 text-[#cb991e]" />
                      {show.audience}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Host: {show.host}
                    </span>
                    <Link
                      href={`/shows/${show.slug}`}
                      className="inline-flex items-center text-[#cb991e] hover:text-black font-semibold text-sm group/link"
                    >
                      Learn More
                      <FaArrowRight className="ml-1 text-xs group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sponsorship Benefits Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Sponsor Our Shows?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach your target audience and build brand recognition through our popular shows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advertising Packages Section */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advertising Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the package that best fits your marketing goals and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 ${
                  pkg.featured ? 'ring-2 ring-[#cb991e] transform scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="bg-[#cb991e] text-black px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-center">{pkg.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#cb991e]">GHS{pkg.price}</span>
                  <span className="text-gray-400">/{pkg.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaArrowRight className="text-[#cb991e] mr-3 text-sm" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?package=${pkg.slug}`}
                  className={`w-full text-center block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-[#cb991e] hover:bg-[#d8aa3a] text-black'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Show Statistics Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Show Reach & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our shows consistently deliver impressive results for our sponsors
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-[#cb991e] mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#cb991e] to-[#e0b34e] text-black">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Sponsor a Show?
            </h2>
            <p className="text-xl mb-8">
              Join our growing list of sponsors and reach thousands of engaged viewers across Volta and Oti Regions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Become a Sponsor
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-all duration-300"
              >
                View Show Demos
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Data for shows
const shows = [
  {
    title: "Hohoe This Week",
    description: "Weekly roundup of news, events, and developments in Hohoe and surrounding communities. Stay informed about local happenings.",
    image: "/shows/hohoe-this-week.jpg",
    category: "News & Current Affairs",
    schedule: "Every Friday, 7:00 PM",
    audience: "10K+ viewers",
    host: "John Doe",
    slug: "hohoe-this-week"
  },
  {
    title: "Volta Business Spotlight",
    description: "Featuring successful entrepreneurs and businesses in the Volta Region. Learn from local business leaders and innovators.",
    image: "/shows/business-spotlight.jpg",
    category: "Business",
    schedule: "Every Tuesday, 6:00 PM",
    audience: "8K+ viewers",
    host: "Sarah Mensah",
    slug: "volta-business-spotlight"
  },
  {
    title: "Youth Voice",
    description: "A platform for the youth to discuss issues affecting them and showcase their talents and achievements.",
    image: "/shows/youth-voice.jpg",
    category: "Youth & Entertainment",
    schedule: "Every Thursday, 5:00 PM",
    audience: "15K+ viewers",
    host: "Michael Kofi",
    slug: "youth-voice"
  },
  {
    title: "Cultural Heritage",
    description: "Exploring the rich cultural traditions, festivals, and history of the Volta and Oti Regions.",
    image: "/shows/cultural-heritage.jpg",
    category: "Culture & History",
    schedule: "Every Sunday, 4:00 PM",
    audience: "12K+ viewers",
    host: "Akua Adjei",
    slug: "cultural-heritage"
  },
  {
    title: "Health Matters",
    description: "Educational program focusing on health issues, wellness tips, and interviews with healthcare professionals.",
    image: "/shows/health-matters.jpg",
    category: "Health & Wellness",
    schedule: "Every Wednesday, 3:00 PM",
    audience: "9K+ viewers",
    host: "Dr. Emma Asare",
    slug: "health-matters"
  },
  {
    title: "Sports Arena",
    description: "Coverage of local sports events, athlete interviews, and discussions about sports development in the region.",
    image: "/shows/sports-arena.jpg",
    category: "Sports",
    schedule: "Every Monday, 7:30 PM",
    audience: "18K+ viewers",
    host: "Kwame Sports",
    slug: "sports-arena"
  }
];

// Benefits data
const benefits = [
  {
    icon: <FaUsers className="text-white text-xl" />,
    title: "Targeted Audience",
    description: "Reach specific demographic groups interested in your products or services"
  },
  {
    icon: <FaChartLine className="text-white text-xl" />,
    title: "Brand Recognition",
    description: "Build strong brand awareness through consistent exposure"
  },
  {
    icon: <FaDollarSign className="text-white text-xl" />,
    title: "Cost Effective",
    description: "Get maximum impact for your marketing budget"
  },
  {
    icon: <FaPlay className="text-white text-xl" />,
    title: "Engaging Content",
    description: "Your brand associated with high-quality, engaging programming"
  }
];

// Packages data
const packages = [
  {
    name: "Basic Package",
    price: "200",
    duration: "month",
    slug: "basic",
    features: [
      "15-second ad spot per episode",
      "Logo display in credits",
      "Social media mention",
      "4 episodes per month"
    ]
  },
  {
    name: "Standard Package",
    price: "400",
    duration: "month",
    slug: "standard",
    featured: true,
    features: [
      "30-second ad spot per episode",
      "Logo display in credits and website",
      "Social media features",
      "8 episodes per month",
      "Interview opportunity",
      "Monthly performance report"
    ]
  },
  {
    name: "Premium Package",
    price: "700",
    duration: "month",
    slug: "premium",
    features: [
      "60-second ad spot per episode",
      "Brand integration in show content",
      "Dedicated social media campaign",
      "All episodes monthly",
      "Regular interview features",
      "Detailed analytics report",
      "Priority placement"
    ]
  }
];

// Statistics data
const statistics = [
  {
    value: "10M+",
    label: "Monthly Viewers"
  },
  {
    value: "80%",
    label: "Audience Engagement"
  },
  {
    value: "6",
    label: "Active Shows"
  },
  {
    value: "95%",
    label: "Sponsor Satisfaction"
  }
];