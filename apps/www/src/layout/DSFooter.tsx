
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTwitch,
  FaFacebook,
  FaTiktok
} from "react-icons/fa";

export const DSFooter = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Services",
      items: [
        { name: "Live Streaming", href: "/services/live-streaming" },
        { name: "Event Coverage", href: "/services/event-coverage" },
        { name: "Video Production", href: "/services/video-production" },
        { name: "Studio Rental", href: "/services/studio-rental" },
        { name: "Media Training", href: "/services/media-training" },
      ],
    },
    {
      title: "Productions",
      items: [
        { name: "TV Shows", href: "/productions/tv-shows" },
        { name: "Documentaries", href: "/productions/documentaries" },
        { name: "Corporate Videos", href: "/productions/corporate" },
        { name: "Live Events", href: "/productions/live-events" },
        { name: "Our Equipment", href: "/productions/equipment" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Blog & Tutorials", href: "/resources/blog" },
        { name: "FAQs", href: "/resources/faqs" },
        { name: "Media Kit", href: "/resources/media-kit" },
        { name: "Pricing", href: "/pricing" },
        { name: "Client Portal", href: "/login" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: FaYoutube,
      href: "https://youtube.com/dsonlinetv",
      label: "YouTube",
      className: "hover:text-red-600",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/dsonlinetv",
      label: "Instagram",
      className: "hover:text-pink-500",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/dsonlinetv",
      label: "Twitter/X",
      className: "hover:text-blue-400",
    },
    {
      icon: FaTwitch,
      href: "https://twitch.tv/dsonlinetv",
      label: "Twitch",
      className: "hover:text-purple-500",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/@dsonlinetv",
      label: "TikTok",
      className: "hover:text-black dark:hover:text-white",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/dsonlinetv",
      label: "Facebook",
      className: "hover:text-blue-600",
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/dstv.png"
                  width={85}
                  height={85}
                  alt="DS Online TV Logo"
                  className="h-auto"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-gray-400">
              DS Online TV GH is a premier media production company specializing in live 
              streaming, video production, and broadcast services. We bring your 
              vision to life with cutting-edge technology and creative storytelling.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              {socialIcons.map(({ icon: Icon, href, label, className }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2 rounded-md bg-gray-900 hover:bg-gray-800 transition-all border border-gray-800 ${className}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {links.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((link) => (
                      <motion.li key={link.name} whileHover={{ x: 2 }}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition font-medium"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-6"
        />

        {/* Final Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
            aria-label={`Copyright ${currentYear} DS Online TV`}
          >
            &copy; {currentYear}{" "}
            <span className="font-medium text-[#f8971d] transition-colors duration-300 underline-offset-2">
              DS Online TV GH
            </span>
            . All rights reserved.
          </motion.p>

          {/* Built with Love by Xtottel Ltd */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 transition-all group"
          >
            <p className="transition-all duration-300">
              Built with <span className="text-red-500">💚</span> by{" "}
              <a
                href="https://xtottel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#f8971d] group-hover:text-yellow-500 transition-colors duration-300"
              >
                Xtottel Ltd
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};