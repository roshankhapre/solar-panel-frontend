"use client";
import Image from "next/image";

const partners = [
  { name: "Hithium", logo: "/partners/hithium.png" },
  { name: "Gotion", logo: "/partners/gotion.png" },
  { name: "EVE Energy", logo: "/partners/eve.png" },
  { name: "CATL", logo: "/partners/catl.png" },
  { name: "Cornex", logo: "/partners/cornex.png" },
  { name: "Coslight", logo: "/partners/coslight.png" },
  { name: "LG", logo: "/partners/lg.png" },
  { name: "Amara Raja", logo: "/partners/amara-raja.png" },
  { name: "Kore Power", logo: "/partners/korepower.png" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-32 font-montserrat">
      {/* ⬅️ WIDER CONTAINER */}
      <div className="max-w-[1600px] mx-auto px-10">
        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-x-20 gap-y-28 place-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`
                w-[440px] h-[440px]
                bg-white rounded-xl
                shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                flex flex-col items-center justify-center
                text-center
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(0,0,0,0.18)]

                ${
                  index % 3 === 1
                    ? "md:-mt-24"   // ⬆️ ONLY MIDDLE CARD UP
                    : "md:mt-0"
                }
              `}
            >
              {/* LOGO */}
              <div className="relative w-[300px] h-[200px] -mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <h4 className="text-5xl font-medium text-black mb-2">
                Batteries
              </h4>

              <span className="text-2xl font-medium text-gray-600 hover:text-black cursor-pointer transition-colors">
                Learn more
              </span>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="mt-36 h-px bg-gray-300 w-full" />
      </div>
    </section>
  );
}
