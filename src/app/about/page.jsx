import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutHero from "./components/AboutHero";
import AboutIntroSection from "./components/AboutIntroSection";
import CustomizedBatterySection from "./components/CustomizedBatterySection";
import EMSSection from "./components/EMSSection";
import EnergySolutionsGrid from "./components/EnergySolutionsGrid";
import FutureStorageSection from "./components/FutureStorageSection";
import ProductHighlightSection from "./components/ProductHighlightSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntroSection />
      <FutureStorageSection />
      <EnergySolutionsGrid />
      <ProductHighlightSection />
      <CustomizedBatterySection />
      <EMSSection />
    </>
  );
}
