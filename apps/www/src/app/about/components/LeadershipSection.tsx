"use client";

import ExecutiveTeam from "@/components/team/ExecutiveTeam";

const executives = [
  {
    name: "Collins Joe",
    title: "Co-Founder & CEO",
    bio: "Technical lead focused on building modern, reliable communication infrastructure across Africa. Drives the vision behind Sendexa's platform.",
    image: "/team/joe.jpeg",
  },
  {
    name: "Ethel Akorfa Agama",
    title: "Executive Director, Operations",
    bio: "Leads operational excellence and customer success, ensuring Sendexa delivers consistent, high-quality communication services.",
    image: "/team/akorfa.jpeg",
  },
  {
    name: "Kane Vidzro",
    title: "Co-Founder & CTO",
    bio: "Technical architect focused on building secure, scalable infrastructure for Sendexa's core communication systems and APIs.",
    image: "/team/Profile.svg",
  },
];

export function LeadershipSection() {
  return (
    <section className="py-15 bg-white">
      <ExecutiveTeam executives={executives} />
    </section>
  );
}