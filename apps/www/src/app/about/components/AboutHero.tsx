// "use client";

// import { Building2 } from "lucide-react";
// import { motion } from "framer-motion";
// import { Container } from "@/layout/Container";

// export default function AboutHero() {
// //   const primaryColor = "#513b7e";
//   const primaryLight = "rgba(81, 59, 126, 0.3)";
//   const primaryText = "#b8a1e6";

//   return (
//     <section
//       aria-labelledby="about-heading"
//       className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
//     >
//       {/* Glow Effect */}
//       <div 
//         className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[100px] animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
//         style={{ backgroundColor: primaryLight }}
//       />
      
//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

//       <Container>
//         <div className="relative max-w-6xl mx-auto z-10">
//           <div className="text-center mb-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6 border border-gray-700"
//               style={{ color: primaryText }}
//             >
//               <Building2 className="w-5 h-5" />
//               <span className="font-medium">Our Story</span>
//             </motion.div>

//             <motion.h1
//               id="about-heading"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
//             >
//               Building the Future of{" "}
//               <span style={{ color: primaryText }}>African Communications</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto"
//             >
//               Xtopay is revolutionizing digital payments across Africa with secure, scalable solutions tailored for businesses of all sizes.
//             </motion.p>
//           </div>

          
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import { Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function AboutHero() {
  const primaryLight = "rgba(9, 74, 148, 0.3)";
  const secondaryText = "#f8971d";

  return (
    <section
      aria-labelledby="about-heading"
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
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Our Story</span>
            </motion.div>

            <motion.h1
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              Building the Future of{" "}
              <span style={{ color: secondaryText }}>African Communications</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto"
            >
              Sendexa is revolutionizing business communications across Africa with secure, scalable messaging solutions for enterprises of all sizes.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}