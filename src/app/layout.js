import { Montserrat, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kumbh",
});

export const metadata = {
  title: "Solar Panel Website",
  description: "Solar energy solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${kumbhSans.variable}`}>
      <body className="font-montserrat antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
