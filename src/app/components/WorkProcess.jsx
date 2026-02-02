import Image from "next/image";
import { Bell, ClipboardCheck, Wrench } from "lucide-react";

export default function WorkProcess() {
  return (
    <section className="py-20 px-6 bg-white font-montserrat">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 ">
        {/* LEFT GRID */}
        <div className="grid grid-cols-1 max-w-full  md:text-2xl sm:grid-cols-2 gap-6 auto-rows-fr">
          <ProcessCard
            active
            icon={<Bell size={18} />}
            title="Book Your Service"
            desc="Reach out to us, pick a service, and schedule a visit that suits your time."
          />

          <ProcessCard
            icon={<ClipboardCheck size={18} />}
            title="Get a Free Assessment"
            desc="Contact us, choose a service, and schedule your convenient visit."
          />

          <ProcessCard
            icon={<Wrench size={18} />}
            title="We Get to Work"
            desc="Message us, choose your service, and arrange a visit at your convenience."
          />

          {/* IMAGE CARD */}
          <div className="relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[260px] ">
            <Image
              src="/worker.png"
              alt="Worker"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT BIG IMAGE */}
        <div className="relative rounded-2xl overflow-hidden min-h-[350px] sm:min-h-[450px] lg:min-h-full">
          <Image
            src="/solar-roof.png"
            alt="Solar Panel Roof"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
function ProcessCard({ icon, title, desc, active = false }) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col gap-4 min-h-[220px]
      ${active ? "bg-red-500 text-white" : "bg-gray-100 text-black"}`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
        ${active ? "bg-white text-red-500" : "bg-black text-white"}`}
      >
        {icon}
      </div>

      <div>
        {/* TITLE */}
        <h4 className="font-semibold text-lg mb-1 whitespace-nowrap">
          {title}
        </h4>

        {/* DESCRIPTION */}
        <p
          className={`text-base leading-relaxed
          ${active ? "text-white/80" : "text-black text-2xl font-medium "}`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
