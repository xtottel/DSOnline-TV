// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaPlayCircle,
  FaUsers,
  FaAward,
  FaGlobeAfrica,
  FaArrowRight,
  FaQuoteLeft,
  FaHeart,
  FaRocket,
  FaEye,
} from "react-icons/fa";
import { Container } from "@/layout/Container";

export default function About() {
  return (
    <main className="bg-gray-50">
      {/* About Hero */}
      <section className="py-20 bg-black text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-[#cb991e]">DS Online TV</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Pioneering digital storytelling from the heart of Volta and Oti Regions, 
              connecting cultures and communities through innovative media.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300"
              >
                Get In Touch
                <FaArrowRight className="ml-2" />
              </Link>
              <button className="inline-flex items-center px-6 py-3 border border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300">
                <FaPlayCircle className="mr-2" />
                Watch Our Story
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-15 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/about/story.jpg"
                  alt="DS Online TV Team at work"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-6 left-6 bg-[#cb991e] text-black px-4 py-2 rounded-lg">
                  <p className="font-semibold">Since 2020</p>
                  <p className="text-sm">Telling Volta & Oti Stories</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our <span className="text-[#cb991e]">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                DS Online TV was born from a passion to showcase the rich cultural heritage, 
                vibrant communities, and untold stories of the Volta and Oti Regions to the world. 
                Founded in 2020, we started as a small team of media enthusiasts with a big vision.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we've grown into a comprehensive digital media platform that reaches 
                audiences across Ghana and the global diaspora. Our commitment remains the same: 
                to provide authentic, high-quality content that celebrates our heritage while 
                embracing modern storytelling techniques.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#cb991e] mb-2">50+</div>
                  <div className="text-gray-600">Events Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#cb991e] mb-2">100K+</div>
                  <div className="text-gray-600">Global Viewers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#cb991e] mb-2">25+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#cb991e] mb-2">15+</div>
                  <div className="text-gray-600">Communities Served</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-15 bg-gray-900 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-gray-300 mb-6">
                To be the leading digital media platform that bridges cultures and connects 
                the global community with the authentic stories and rich heritage of Volta 
                and Oti Regions.
              </p>
              <p className="text-gray-400">
                We envision a world where every community's story is told with dignity, 
                respect, and professional excellence.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-gray-300 mb-6">
                To create, produce, and distribute high-quality digital content that 
                celebrates our cultural heritage, promotes tourism, supports local 
                businesses, and preserves our traditions for future generations.
              </p>
              <p className="text-gray-400">
                Through innovative storytelling and cutting-edge technology, we empower 
                communities and inspire global connections.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-15 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our <span className="text-[#cb991e]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at DS Online TV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-15 bg-gray-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-[#cb991e]">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to showcasing the best of Volta and Oti Regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group text-center bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#cb991e] mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/careers"
              className="inline-flex items-center px-6 py-3 border-2 border-[#cb991e] text-[#cb991e] hover:bg-[#cb991e] hover:text-black font-semibold rounded-lg transition-all duration-300"
            >
              Join Our Team
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section className="py-15 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our <span className="text-[#cb991e]">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones and recognition that mark our journey in digital storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <span className="text-[#cb991e] font-semibold">{achievement.year}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-15 bg-black text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What People Say <span className="text-[#cb991e]">About Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our partners, viewers, and community members
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
                      {testimonial.role}
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
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl mb-8">
              Partner with us to showcase your event, business, or community initiative 
              to a global audience
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

// Data for about page
const values = [
  {
    icon: <FaHeart className="text-white text-2xl" />,
    title: "Authenticity",
    description: "We believe in telling real stories from real people, preserving the genuine essence of our culture and communities."
  },
  {
    icon: <FaAward className="text-white text-2xl" />,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from production to storytelling and customer service."
  },
  {
    icon: <FaUsers className="text-white text-2xl" />,
    title: "Community First",
    description: "Our work is centered around serving and uplifting the communities of Volta and Oti Regions."
  },
  {
    icon: <FaGlobeAfrica className="text-white text-2xl" />,
    title: "Cultural Preservation",
    description: "We are committed to documenting and preserving our cultural heritage for future generations."
  },
  {
    icon: <FaRocket className="text-white text-2xl" />,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to storytelling while respecting tradition."
  },
  {
    icon: <FaEye className="text-white text-2xl" />,
    title: "Transparency",
    description: "We maintain open communication and honest relationships with our partners and audience."
  },
];

const teamMembers = [
  {
    name: "David Sefakor",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in media production",
    image: "/team/ceo.jpg",
  },
  {
    name: "Akua Nyuieme",
    role: "Creative Director",
    bio: "Award-winning filmmaker and cultural preservationist",
    image: "/team/creative.jpg",
  },
  {
    name: "Kofi Agbenyo",
    role: "Technical Lead",
    bio: "Expert in live streaming and broadcast technology",
    image: "/team/technical.jpg",
  },
  {
    name: "Esi Amedorme",
    role: "Community Manager",
    bio: "Connecting with communities across Volta and Oti",
    image: "/team/community.jpg",
  },
];

const achievements = [
  {
    title: "Best Digital Media Platform 2023",
    description: "Recognition for innovation in cultural storytelling",
    year: "2023",
  },
  {
    title: "Volta Tourism Partnership",
    description: "Official media partner for Volta Regional Tourism",
    year: "2022",
  },
  {
    title: "Global Audience Reach",
    description: "Expanded to serve viewers in 15+ countries",
    year: "2023",
  },
];

const testimonials = [
  {
    quote: "DS Online TV has revolutionized how we share our cultural stories. Their professionalism and dedication to authenticity is unmatched.",
    name: "Chief Togbe Agorkorli",
    initials: "TA",
    role: "Community Leader, Anlo State",
  },
  {
    quote: "Working with DS Online TV was transformative for our festival. Their coverage reached audiences we never thought possible.",
    name: "Madam Abla Dzidzienyo",
    initials: "AD",
    role: "Event Organizer, Ho",
  },
  {
    quote: "The team's commitment to quality and cultural sensitivity makes them the perfect partners for heritage documentation.",
    name: "Dr. Kwame Asante",
    initials: "KA",
    role: "Cultural Historian",
  },
];