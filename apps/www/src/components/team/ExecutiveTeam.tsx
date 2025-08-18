import { Container } from "@/layout/Container";
import Image from "next/image";

interface Executive {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface ExecutiveTeamProps {
  executives: Executive[];
}

export default function ExecutiveTeam({ executives }: ExecutiveTeamProps) {
  return (
    <section className="py-16 bg-[#f9f7f5]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl text-[#094a94]">
            Executive <span className="text-[#f8971d]">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading the future of reliable communication infrastructure in Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#094a94] transition-all duration-300 group"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={person.image}
                  alt={`${person.name}, ${person.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#094a94] mb-1">
                  {person.name}
                </h3>
                <p className="text-[#f8971d] text-sm mb-2">{person.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}