"use client";

import { Rocket, Users, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function WhyJoinUs() {
  const reasons = [
    {
      icon: <Rocket className="w-6 h-6 text-[#094a94]" />,
      title: "Impact at Scale",
      description: "Build communication tools used by businesses across Africa"
    },
    {
      icon: <Globe className="w-6 h-6 text-[#094a94]" />,
      title: "Pan-African Reach",
      description: "Work with teams across multiple African markets"
    },
    {
      icon: <Zap className="w-6 h-6 text-[#094a94]" />,
      title: "Cutting-edge Tech",
      description: "Work with modern stack solving unique communication challenges"
    },
    {
      icon: <Users className="w-6 h-6 text-[#094a94]" />,
      title: "Top Talent",
      description: "Collaborate with the best minds in communications tech"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#094a94] mb-4">
              Why Join Sendexa?
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;re building more than a company – we&apos;re building the future of African business communications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-[#f8971d] bg-white transition-all duration-300 hover:border-[#094a94] hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-lg bg-[#f8971d]/30 flex items-center justify-center mb-4 mx-auto">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#094a94] mb-3 text-center">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}