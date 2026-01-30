"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/solar-hero.jpeg"
        alt="Solar Panels"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* TOP RIGHT RED SHAPE */}
      <div className="absolute top-[0px] right-[40px] z-[2] -mt-30 mr-18 ">
        <Image
          src="/top-red-line.png"
          alt="top red line"
          width={130}
          height={240}
          priority
          className="object-contain opacity-50"
        />
      </div>

      {/* BOTTOM RIGHT RED SHAPE */}
      <div className="absolute bottom-[0px] right-[40px] z-[2] mr-18 ">
        <Image
          src="/down-red-line.png"
          alt="down red line"
          width={120}
          height={420}
          priority
          className="object-contain opacity-50"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-[3] h-full">
        <div className="max-w-[1450px] ml-0 mr-auto px-[72px] h-full flex flex-col justify-between">
          {/* CENTER TEXT */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-[64px] md:text-[78px] font-semibold leading-tight">
                Solar Panels
              </h1>

              <p className="mt-4 text-[20px] md:text-[22px] text-white/90">
                Save on Energy, Power Your Home
              </p>

              {/* Arrow */}
              <div className="mt-4 ml-1">
                <Image src="/arrow.png" alt="arrow" width={42} height={42} />
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="max-w-2xl mb-20 flex gap-12">
            <button className="border border-white/90 px-10 py-4 rounded-md text-[18px] text-white backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black transition-all">
              Schedule consultation
            </button>

            <button className="bg-white text-black px-10 py-4 rounded-md text-[18px] hover:bg-gray-200 transition-all">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
