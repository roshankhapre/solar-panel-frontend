import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        {/* LEFT BRAND */}
        <div>
          {/* LOGO */}
          <div className="flex items-center shrink-0 z-10 mb-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Joulecube Logo"
                width={220}
                height={54}
                priority
                className="object-contain w-28 sm:w-32 md:w-36 lg:w-40 xl:w-48 2xl:w-56 h-auto"
              />
            </Link>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="md:border-l md:border-gray-700 md:pl-16">
          <ul className="space-y-3 text-gray-300">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Solutions</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
            <li className="cursor-pointer hover:text-white">Resources</li>
            <li className="cursor-pointer hover:text-white">404</li>
            <li className="cursor-pointer hover:text-white">
              Terms and Conditions
            </li>
          </ul>
        </div>

        {/* RIGHT CONTACT */}
        <div className="md:border-l md:border-gray-700 md:pl-16">
          <p className="text-gray-300 leading-relaxed mb-6">
            Königsallee 92, Green Energy <br />
            Tower 40212 Düsseldorf, Germany
          </p>

          <p className="text-gray-300 mb-2">hello@energymax.com</p>
          <p className="text-gray-300 mb-6">+49 211 8765 4200</p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-gray-300">
            <span className="cursor-pointer hover:text-white">X</span>
            <span className="cursor-pointer hover:text-white">in</span>
            <span className="cursor-pointer hover:text-white">▶</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
