"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function PartnersSection() {
  const partners = [
    { name: "MTN", logo: "/logos/mtn.svg" },
    { name: "AirtelTigo", logo: "/logos/airteltigo.svg" },
    { name: "Vodafone", logo: "/logos/vodafone.svg" },
    { name: "Afreximbank", logo: "/logos/afreximbank.svg" },
    { name: "Ecobank", logo: "/logos/ecobank.svg" },
  ];

  return (
    <section className="py-16 bg-[#f9f7f5]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#094a94] mb-4">
              Trusted By Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Partnerships that strengthen Africa&apos;s communication infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Strategic Partners */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center text-[#094a94] mb-8">
            Strategic Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="h-16 w-36 flex items-center justify-center bg-white border border-[#f8971d] rounded-lg p-2 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}