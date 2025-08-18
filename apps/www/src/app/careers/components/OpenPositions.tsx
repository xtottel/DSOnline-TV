"use client";

import { Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function OpenPositions() {
  const positions = [
    {
      title: "Senior Backend Engineer",
      type: "Full-time",
      location: "Remote (Africa)",
      department: "Engineering",
      salary: "Competitive"
    },
    {
      title: "Product Designer",
      type: "Full-time",
      location: "Lagos, Nigeria",
      department: "Design",
      salary: "Competitive"
    },
    {
      title: "Growth Marketing Manager",
      type: "Full-time",
      location: "Nairobi, Kenya",
      department: "Marketing",
      salary: "Competitive"
    },
    {
      title: "Data Scientist",
      type: "Full-time",
      location: "Remote (Africa)",
      department: "Data",
      salary: "Competitive"
    },
    {
      title: "Customer Success Specialist",
      type: "Full-time",
      location: "Remote (Africa)",
      department: "Customer Success",
      salary: "Competitive"
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote (Africa)",
      department: "Engineering",
      salary: "Competitive"
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
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Explore opportunities to join our growing team
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-[#f8971d] hover:border-[#094a94] transition-all duration-300 bg-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#094a94] mb-3">{position.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2 text-[#f8971d]" />
                      <span>{position.type} • {position.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#f8971d]" />
                      <span>{position.location}</span>
                    </div>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium bg-[#094a94] text-white hover:bg-[#083a7a] transition-colors w-full"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don&apos;t see your perfect role? We&apos;re always looking for great talent.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-[#094a94] border border-[#f8971d] hover:border-[#094a94] transition-colors"
          >
            Contact Our Talent Team
          </a>
        </div>
      </Container>
    </section>
  );
}