import Image from "next/image";

export default function PowerBackup() {
  return (
    <>
      {/* SECTION 1: Full Background Image */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/power-bg.png"
            alt="House with solar panels at night"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="relative h-full flex items-end">
          <div className="pb-16 pl-6 md:pl-16 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 ">
              Grid Goes Down,
              <br />
              Lights Stay On
            </h2>
            <p className="text-gray-100 text-3xl py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Monitoring Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text Content - Left Side */}
            <div className="lg:pl-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 md:mb-8">
                <span className="text-red-500">24/7</span> Monitoring,
                <br />
                <span className="font-bold">Maximum Control</span>
              </h3>
              <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Image Container - Simplified */}
            <div className="relative h-[500px] md:h-[600px] w-full">
              <div className="relative w-full h-full">
                <Image
                  src="/monitor-man1.jpeg"
                  alt="Man monitoring solar system"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
