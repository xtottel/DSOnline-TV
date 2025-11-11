// app/contact/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import { Container } from "@/layout/Container";

export default function Contact() {
  return (
    <main className="bg-gray-50">
      {/* Contact Hero */}
      <section className="py-20 bg-black text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-[#cb991e]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to share your story or collaborate with us? We'd love to hear from you. 
              Reach out and let's create something amazing together.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-15 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Let's Start a <span className="text-[#cb991e]">Conversation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a story to share, an event to cover, or just want to 
                learn more about our work, we're here to help. Get in touch with our 
                team and let's discuss how we can work together.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#cb991e] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">+233 24 123 4567</p>
                    <p className="text-gray-600">+233 20 987 6543</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#cb991e] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">info@dsonlinetv.com</p>
                    <p className="text-gray-600">production@dsonlinetv.com</p>
                    <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#cb991e] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-1">
                      DS Online TV Studios<br />
                      Hohoe, Volta Region<br />
                      Ghana, West Africa
                    </p>
                    <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#cb991e] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-sm text-gray-500 mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => (
                    <Link
                      key={index}
                      href={social.link}
                      className="w-12 h-12 bg-gray-100 hover:bg-[#cb991e] rounded-full flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon className="text-gray-600 group-hover:text-white text-lg transition-colors duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-black mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e] focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e] focus:border-transparent"
                    placeholder="+233 24 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="event-coverage">Event Coverage Request</option>
                    <option value="story-submission">Story Submission</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media-inquiry">Media Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e] focus:border-transparent resize-vertical"
                    placeholder="Tell us about your project, event, or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300"
                >
                  Send Message
                  <FaPaperPlane className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Map & Location */}
      <section className="py-15 bg-gray-900 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Find Our <span className="text-[#cb991e]">Studio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visit our state-of-the-art production studio in Hohoe, Volta Region
            </p>
          </div>

          <div className="bg-black rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Map Placeholder */}
              <div className="lg:col-span-2 h-96 bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-[#cb991e] text-4xl mx-auto mb-4" />
                    <p className="text-gray-300">Interactive Map</p>
                    <p className="text-sm text-gray-500">Hohoe, Volta Region</p>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Studio Location</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#cb991e] mb-2">Address</h4>
                    <p className="text-gray-300">
                      DS Online TV Studios<br />
                      Main Street, Hohoe<br />
                      Volta Region, Ghana
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#cb991e] mb-2">Directions</h4>
                    <p className="text-gray-300">
                      Located in central Hohoe, opposite the Municipal Assembly. 
                      Ample parking available.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#cb991e] mb-2">Studio Tours</h4>
                    <p className="text-gray-300">
                      Schedule a studio tour to see our facilities and meet our team.
                    </p>
                    <Link
                      href="/booking"
                      className="inline-flex items-center mt-2 text-[#cb991e] hover:text-white font-medium"
                    >
                      Book a Tour
                      <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Actions */}
      <section className="py-15 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Quick <span className="text-[#cb991e]">Actions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need something specific? Here are some quick ways to get what you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.link}
                className="group text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <action.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <span className="inline-flex items-center text-[#cb991e] hover:text-black font-medium">
                  {action.actionText}
                  <FaArrowRight className="ml-2 text-sm" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

// Data for contact page
const socialMedia = [
  {
    icon: FaFacebook,
    link: "https://facebook.com/dsonlinetv",
    name: "Facebook"
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/dsonlinetv",
    name: "Twitter"
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com/dsonlinetv",
    name: "Instagram"
  },
  {
    icon: FaYoutube,
    link: "https://youtube.com/dsonlinetv",
    name: "YouTube"
  }
];

const quickActions = [
  {
    icon: FaClock,
    title: "Book a Service",
    description: "Schedule our production team for your event or project",
    actionText: "Book Now",
    link: "/booking"
  },
  {
    icon: FaPaperPlane,
    title: "Submit a Story",
    description: "Share your community story or event for potential coverage",
    actionText: "Submit Story",
    link: "/story-submission"
  },
  {
    icon: FaEnvelope,
    title: "Media Kit",
    description: "Download our media kit for partnership opportunities",
    actionText: "Download Kit",
    link: "/media-kit"
  }
];