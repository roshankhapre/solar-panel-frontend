import Image from "next/image";

export default function ProcessTimeline() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* TOP IMAGE */}
        <div className="relative w-full h-[500px] border-2 rounded-md overflow-hidden mb-20">
          <Image
            src="/timeline-house.png"
            alt="Solar House"
            fill
            className="object-cover"
          />
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-3 left-0 w-full h-[2px] bg-gray-300"></div>

          {/* Red Indicator */}
          <div className="absolute top-[5px] left-[10%] w-4 h-4 bg-red-500 rounded-full"></div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-12">
            <TimelineItem
              title="From Order to Design"
              desc="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

            <TimelineItem
              title="From Install to Power On"
              desc="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

            <TimelineItem
              title="From Day One to Onward"
              desc="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, desc }) {
  return (
    <div className="pt-10">
      <h4 className="font-semibold text-base text-center text-black mb-3">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
