// "use client";

// import { Target } from "lucide-react";
// import { motion } from "framer-motion";
// import { Container } from "@/layout/Container";

// export function MissionSection() {
//   return (
//     <section className="bg-white py-16">
//       <Container>
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col md:flex-row gap-12 items-center"
//           >
//             {/* Text Content */}
//             <div className="md:w-1/2">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0c9a4]/20 rounded-full mb-6">
//                 <Target className="w-5 h-5 text-[#4d3b7d]" />
//                 <span className="font-medium text-[#4d3b7d]">Our Mission</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#4d3b7d] mb-6">
//                 Empowering African Businesses Through Innovative Payments
//               </h2>
//               <p className="text-lg text-gray-700 mb-8">
//                 At Xtopay, we’re committed to removing payment barriers and enabling financial inclusion across Africa. Our mission is to provide secure, affordable, and accessible digital payment solutions that fuel economic growth.
//               </p>
//               <ul className="space-y-4">
//                 {[
//                   "Enable seamless cross-border transactions",
//                   "Make payment solutions accessible to all",
//                   "Reduce transaction costs for SMEs",
//                   "Build infrastructure for the next generation of African commerce",
//                 ].map((point, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <div className="flex-shrink-0 mt-1">
//                       <div className="w-5 h-5 rounded-full bg-[#e0c9a4]/30 flex items-center justify-center">
//                         <div className="w-2 h-2 rounded-full bg-[#4d3b7d]" />
//                       </div>
//                     </div>
//                     <p className="text-gray-700">{point}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Image Content */}
//             <div className="md:w-1/2 bg-[#f9f7f5] rounded-2xl p-6 border border-gray-100">
//               <img
//                 src="/images/africa-map.webp"
//                 alt="African map with payment connections"
//                 className="w-full h-auto object-contain rounded-lg"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import { Target } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function MissionSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            {/* Text Content */}
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f8971d]/20 rounded-full mb-6">
                <Target className="w-5 h-5 text-[#094a94]" />
                <span className="font-medium text-[#094a94]">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#094a94] mb-6">
                Empowering African Businesses Through Reliable Communications
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At Sendexa, we&apos;re committed to removing communication barriers and enabling seamless business interactions across Africa. Our mission is to provide secure, affordable, and accessible messaging solutions that drive business growth.
              </p>
              <ul className="space-y-4">
                {[
                  "Enable seamless business messaging across channels",
                  "Make communication solutions accessible to all businesses",
                  "Reduce communication costs for SMEs",
                  "Build infrastructure for the next generation of African commerce",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-[#f8971d]/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#094a94]" />
                      </div>
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 bg-[#f9f7f5] rounded-2xl p-6 border border-gray-100">
              <img
                src="/images/africa-map.webp"
                alt="African map with communication connections"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
