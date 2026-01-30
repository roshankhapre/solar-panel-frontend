import { ArrowUpRight, Home, Zap, Wrench } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <>
      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-sm text-gray-500">Service</span>

            <h2 className="text-4xl font-semibold mt-3 leading-tight text-black">
              Complete home service <br />
              solutions you can trust
            </h2>

            <button className="mt-8 border border-gray-300 px-6 py-3 rounded-md text-sm hover:bg-gray-100 transition text-black">
              Explore More Service
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6">
            <ServiceCard
              icon={<Home size={18} />}
              title="Customize Preferences"
              desc="It is a long established fact that a reader will be distracted by the readable content of a page"
            />

            <ServiceCard
              active
              icon={<Zap size={18} />}
              title="Monitor Energy Flow"
              desc="It is a long established fact that a reader will be distracted by the readable content of a page"
            />

            <ServiceCard
              icon={<Wrench size={18} />}
              title="Get Urgent Alerts"
              desc="It is a long established fact that a reader will be distracted by the readable content of a page"
            />
          </div>
        </div>
      </section>
      {/* ================= FULL WIDTH IMAGE ================= */}
      <section className="relative w-full h-[900px]">
        <Image
          src="/service-full.jpeg"
          alt="Solar Home"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ================= TEXT BELOW IMAGE ================= */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-start">
          {/* LEFT: Title */}
          <div>
            <h3 className="text-5xl  font-semibold text-black -ml-30">
              Getting to Power On
            </h3>
          </div>

          {/* RIGHT: Description */}
          <div>
            <p className="max-w-7xl mx-auto text-gray-900 leading-relaxed text-2xl font-medium ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= CARD ================= */

function ServiceCard({ icon, title, desc, active = false }) {
  return (
    <div
      className={`rounded-2xl p-6 flex items-center justify-between
  ${active ? "bg-red-500 text-white" : "bg-gray-100 text-black"}`}
    >
      <div className="flex gap-4 items-start">
        {/* Icon Circle */}
        <div
          className={`w-12 aspect-square shrink-0 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300

      ${active ? "bg-white text-red-500" : "bg-black text-white"}`}
        >
          {icon}
        </div>

        {/* Text */}
        <div>
          <h4 className="font-semibold text-lg mb-1">{title}</h4>
          <p
            className={`text-sm leading-relaxed
        ${active ? "text-white/80" : "text-gray-600"}`}
          >
            {desc}
          </p>
        </div>
      </div>

      {/* Arrow Circle */}
      <div
        className={`w-12 aspect-square shrink-0 rounded-full flex items-center justify-center border hover:rotate-45 transition-transform

    ${active ? "border-white" : "border-gray-300"}`}
      >
        <ArrowUpRight size={18} />
      </div>
    </div>
  );
}
