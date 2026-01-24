import Image from "next/image";

export default function InstallSection() {
  return (
    <section className="bg-white">
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[500px] md:h-[600px]">
        {/* LEFT: Black Content */}
        <div className="bg-black text-white flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Install Solar Panels
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition">
                Schedule consultation
              </button>
              <button className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Image with gradient */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/install-bg.png"
              alt="Solar installation"
              fill
              className="object-cover object-left"
            />
          </div>
          {/* Circular gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* 4 IMAGES WITH ROUNDED TOPS */}
      <div className="relative">
        {/* Top rounded white overlay */}
        <div className="absolute -top-6 left-0 right-0 h-12 bg-black"></div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {["/G1.png", "/G2.png", "/G3.png", "/G4.png"].map((img, i) => (
            <div
              key={i}
              className="relative h-[200px] md:h-[300px] lg:h-[350px] rounded-t-3xl  "
            >
              <div className="absolute inset-0">
                <Image
                  src={img}
                  alt={`Solar ${i + 1}`}
                  fill
                  className="object-cover rounded-t-3xl "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
