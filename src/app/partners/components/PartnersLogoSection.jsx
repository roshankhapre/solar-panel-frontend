"use client";
import Image from "next/image";

const batteryPartners = [
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

const pcsPartners = [
  { name: "Deye", logo: "/partners/deye.png" },
  { name: "Sungrow", logo: "/partners/sungrow.png" },
  { name: "Hopewind", logo: "/partners/hopewind.png" },
  { name: "Sineng", logo: "/partners/sineng.png" },
  { name: "ABB", logo: "/partners/abb.png" },
  { name: "Fimer", logo: "/partners/fimer.png" },
  { name: "Indrivetec", logo: "/partners/indrivetec.png" },
  { name: "TMEIC", logo: "/partners/tmeic.png" },
  { name: "Fuji Electric", logo: "/partners/fuji.png" },
  { name: "SMA", logo: "/partners/sma.png" },
  { name: "Kehua", logo: "/partners/kehua.png" },
  { name: "Dynapower", logo: "/partners/dynapower.png" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-24 font-montserrat">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* ================= BATTERIES GRID ================= */}
        <PartnersGrid title="Batteries" items={batteryPartners} />

        {/* Divider */}
        <div className="my-24 h-px bg-black/80 w-full" />

        {/* ================= PCS / INVERTERS GRID ================= */}
        <PartnersGrid title="PCS / INVERTERS" items={pcsPartners} />
      </div>
    </section>
  );
}

/* ================= REUSABLE GRID ================= */
function PartnersGrid({ title, items }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-24 place-items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              w-full max-w-[360px] aspect-square
              bg-white rounded-xl
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              flex flex-col items-center justify-center
              text-center p-6
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]
              ${index % 3 === 1 ? "md:-mt-20" : ""}
            `}
          >
            {/* Logo */}
            <div className="relative w-full h-32 mb-4">
              <Image
                src={item.logo}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Category */}
            <h4 className="text-2xl md:text-3xl font-medium text-black">
              {title}
            </h4>

            {/* CTA */}
            <span className="mt-1 text-sm md:text-base font-medium text-gray-600 hover:text-black cursor-pointer">
              Learn more
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
