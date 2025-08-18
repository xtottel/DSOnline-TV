// "use client";

// import { HeartHandshake, Globe, Shield, Rocket } from "lucide-react";
// import { motion } from "framer-motion";
// import { Container } from "@/layout/Container";

// export function ValuesSection() {
//   const values = [
//     {
//       icon: <Globe className="w-7 h-7 text-[#4d3b7d]" />,
//       title: "Inclusion",
//       description:
//         "We design for all Africans, ensuring our solutions work for both urban and rural users."
//     },
//     {
//       icon: <HeartHandshake className="w-7 h-7 text-[#4d3b7d]" />,
//       title: "Integrity",
//       description:
//         "We build trust through transparency, ethical business practices, and accountability."
//     },
//     {
//       icon: <Shield className="w-7 h-7 text-[#4d3b7d]" />,
//       title: "Security",
//       description:
//         "Safeguarding our users' data and funds is our top priority—always."
//     },
//     {
//       icon: <Rocket className="w-7 h-7 text-[#4d3b7d]" />,
//       title: "Innovation",
//       description:
//         "We embrace bold ideas to solve Africa’s payment challenges with modern solutions."
//     }
//   ];

//   return (
//     <section className="bg-[#f9f7f5] py-16">
//       <Container>
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#4d3b7d] mb-4">
//               Our Core Values
//             </h2>
//             <p className="text-lg text-gray-600">
//               These principles guide every decision we make at Xtopay.
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {values.map((value, index) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="p-6 rounded-xl border border-[#e0c9a4] hover:border-[#4d3b7d] bg-white transition-all"
//             >
//               <div className="w-12 h-12 rounded-lg bg-[#e0c9a4]/30 flex items-center justify-center mb-4 mx-auto">
//                 {value.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-[#4d3b7d] mb-2 text-center">
//                 {value.title}
//               </h3>
//               <p className="text-gray-600 text-sm text-center leading-relaxed">
//                 {value.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import { HeartHandshake, Globe, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function ValuesSection() {
  const values = [
    {
      icon: <Globe className="w-7 h-7 text-[#094a94]" />,
      title: "Inclusion",
      description:
        "We design for all African businesses, ensuring our solutions work for enterprises of all sizes."
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#094a94]" />,
      title: "Reliability",
      description:
        "We build trust through consistent, dependable messaging services with 99.9% uptime."
    },
    {
      icon: <Shield className="w-7 h-7 text-[#094a94]" />,
      title: "Security",
      description:
        "Safeguarding our clients' communication data is our top priority—always."
    },
    {
      icon: <Rocket className="w-7 h-7 text-[#094a94]" />,
      title: "Innovation",
      description:
        "We embrace bold ideas to solve Africa's communication challenges with modern solutions."
    }
  ];

  return (
    <section className="bg-[#f9f7f5] py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#094a94] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide every decision we make at Sendexa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-[#f8971d] hover:border-[#094a94] bg-white transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#f8971d]/30 flex items-center justify-center mb-4 mx-auto">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#094a94] mb-2 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}