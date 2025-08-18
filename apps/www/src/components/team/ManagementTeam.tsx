import { Container } from "@/layout/Container";
import Image from "next/image";

interface ManagementMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface ManagementTeamProps {
  management: ManagementMember[];
}

export default function ManagementTeam({ management }: ManagementTeamProps) {
  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl text-[#094a94]">
            Management <span className="text-[#f8971d]">Team</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experienced managers guiding our communication solutions to success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {management.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#094a94] transition-all duration-300 ease-in-out group"
            >
              <div className="relative aspect-[1.5/1] w-full overflow-hidden">
                <Image
                  src={person.image}
                  alt={`${person.name}, ${person.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-[#094a94]">{person.name}</h3>
                <p className="text-[#f8971d] text-sm">{person.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}