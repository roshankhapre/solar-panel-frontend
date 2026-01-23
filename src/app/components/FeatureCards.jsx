import Image from "next/image";

const features = [
  {
    title: "Simple Aesthetic",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/feature1.jpeg",
  },
  {
    title: "Easy Installation",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/feature2.png",
  },
  {
    title: "Weather Resistant",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/feature3.png",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 text-black ">
          {features.map((item, i) => (
            <div key={i}>
              <div className="relative h-[220px] rounded-xl overflow-hidden mb-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Indicator */}
        <div className="flex items-center gap-3 mt-10">
          <span className="w-10 h-[3px] bg-red-500"></span>
          <span className="w-6 h-[3px] bg-gray-300"></span>
          <span className="w-6 h-[3px] bg-gray-300"></span>
          <span className="w-6 h-[3px] bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
}
