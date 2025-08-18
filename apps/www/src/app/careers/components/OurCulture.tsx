"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function OurCulture() {
  const culturePoints = [
    {
      title: "Ownership Mindset",
      description: "We trust our team to take initiative and drive impact"
    },
    {
      title: "Continuous Learning",
      description: "Regular learning sessions and growth opportunities"
    },
    {
      title: "Diverse Perspectives",
      description: "Team members from 10+ African countries"
    },
    {
      title: "Work-Life Harmony",
      description: "Flexible schedules and remote-friendly policies"
    }
  ];

  return (
    <section className="py-16 bg-[#f9f7f5]">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Left - Text and Culture Points */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f8971d]/30 rounded-full mb-6">
                <span className="font-medium text-[#094a94]">Our Culture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#094a94] mb-6">
                How We Work Together
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Sendexa, we&apos;ve built a culture that values collaboration, innovation, and personal growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {culturePoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 rounded-xl border border-[#f8971d] hover:border-[#094a94] transition-all bg-white"
                  >
                    <h3 className="text-lg font-semibold text-[#094a94] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Culture Photos */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="aspect-square overflow-hidden rounded-xl"
                >
                  <img
                    src={`/images/culture-${item}.jpg`}
                    alt="Team culture"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}