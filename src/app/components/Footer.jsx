export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">

        {/* LEFT BRAND */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">joulecube®</h2>

          <p className="text-gray-400 leading-relaxed max-w-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="md:border-l md:border-gray-700 md:pl-16">
          <ul className="space-y-3 text-gray-300">
            <li>Home</li>
            <li>Solutions</li>
            <li>Contact</li>
            <li>Resources</li>
            <li>404</li>
            <li>Terms and Conditions</li>
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
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">▶</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
