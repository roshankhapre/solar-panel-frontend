import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InstallSection from "./components/InstallSection";
import Maintenance from "./components/Maintenance";
import Navbar from "./components/Navbar";
import PowerBackup from "./components/PowerBackup";
import ProcessTimeline from "./components/ProcessTimeline";
import Savings from "./components/Savings";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Savings />
      <Maintenance />
      <FeatureCards />
      <PowerBackup />
      <ServicesSection />
      <ProcessTimeline />
      <WorkProcess />
      <InstallSection />
      <Footer />
    </>
  );
}
