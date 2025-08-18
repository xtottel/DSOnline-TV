"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function CareersHero() {
  const primaryLight = "rgba(9, 74, 148, 0.3)";
  const secondaryText = "#f8971d";

  return (
    <section
      aria-labelledby="careers-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
    >
      {/* Glow Effect */}
      <div 
        className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[100px] animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{ backgroundColor: primaryLight }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6 border border-gray-700"
              style={{ color: secondaryText }}
            >
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">Join Our Team</span>
            </motion.div>

            <motion.h1
              id="careers-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              Build the Future of{" "}
              <span style={{ color: secondaryText }}>African Communications</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto"
            >
              We&apos;re hiring exceptional talent to help revolutionize business communications across Africa. Grow your career while building transformative technology.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}