import { Metadata } from "next";
import CareersHero from "./components/CareersHero";
import { EmployeeBenefits } from "./components/EmployeeBenefits";
import { OpenPositions } from "./components/OpenPositions";
import { OurCulture } from "./components/OurCulture";
import { WhyJoinUs } from "./components/WhyJoinUs";


export const metadata: Metadata = {
  title: "Careers | Sendexa - Join Our Team",
  description:
    "Explore exciting career opportunities at Sendexa. Join us in building Africa's premier communication platform.",
  openGraph: {
    title: "Careers at Sendexa | Join Our Team",
    description:
      "Discover career opportunities at Sendexa and be part of a team shaping the future of communication in Africa.",
    images: [
      {
        url: "/images/careers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Sendexa",
      },
    ],
  },
};

export default function CareersPage() {
  return (
    <div className="bg-gray-900 text-white">
      <CareersHero />
      <WhyJoinUs />
      <OpenPositions />
      <OurCulture />
      <EmployeeBenefits />
    </div>
  );
}