import Image from "next/image";

export default function PowerBackup() {
  return (
    <>
      {/* SECTION 1 */}
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
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Grid Goes Down,
              <br />
              Lights Stay On
            </h2>

            <p className="text-gray-100 text-2xl md:text-3xl leading-relaxed max-w-4xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
<section className="py-28 lg:py-36 px-6 bg-white overflow-hidden">
  <div className="max-w-[1700px] mx-auto">
    <div className="grid lg:grid-cols-[1fr_1.9fr] gap-10 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-8 leading-tight">
          <span className="text-red-500 font-semibold">24/7</span>{" "}
          Monitoring,
          <br />
          <span className="font-bold">Maximum Control</span>
        </h3>

        <p className="text-gray-800 text-lg md:text-xl lg:text-2xl md:font-medium leading-relaxed">
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </p>
      </div>

      {/* RIGHT HUGE IMAGE */}
      <div className="relative flex justify-end -mr-24 lg:-mr-40 xl:-mr-56">
        <div className="relative mr-40 w-[420px] sm:w-[520px] md:w-[650px] lg:w-[780px] xl:w-[900px] 2xl:w-[1000px]">
          <Image
            src="/monitor-man1.jpeg"
            alt="Man monitoring solar system"
            width={1000}
            height={1200}
            priority
            className="object-contain "
          />
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
}
