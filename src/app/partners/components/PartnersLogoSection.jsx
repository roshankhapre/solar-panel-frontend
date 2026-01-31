"use client";
import Image from "next/image";

const partners = [
  { name: "Hithium", logo: "/partners/hithium.png" },
  { name: "Gotion", logo: "/partners/gotion.png" },
  { name: "EVE Energy", logo: "/partners/eve.png" },
  { name: "Cornex", logo: "/partners/cornex.png" },
  { name: "CATL", logo: "/partners/catl.png" },
  { name: "Coslight", logo: "/partners/coslight.png" },
  { name: "LG", logo: "/partners/lg.png" },
  { name: "Amara Raja", logo: "/partners/amara.png" },
  { name: "Kore Power", logo: "/partners/kore.png" },
  { name: "Great Power", logo: "/partners/greatpower.png" },
];

export default function PartnersLogoSection() {
  return (
    <section className="bg-white py-28 font-montserrat">
      <div className="max-w-6xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-16 gap-y-20 place-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="
                w-[220px] h-[160px]
                bg-white rounded-xl
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                flex items-center justify-center
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.16)]
              "
            >
              {/* LOGO ONLY */}
              <div className="relative w-[120px] h-[60px]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="mt-24 h-px bg-gray-300 w-full" />
      </div>
    </section>
  );
}
