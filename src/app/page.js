import Hero from "./components/Hero";
import Savings from "./components/Savings";
import Maintenance from "./components/Maintenance";
import FeatureCards from "./components/FeatureCards";
import PowerBackup from "./components/PowerBackup";
import ServicesSection from "./components/ServicesSection";
import ProcessTimeline from "./components/ProcessTimeline";
import WorkProcess from "./components/WorkProcess";
import InstallSection from "./components/InstallSection";
import Durable from "./components/Durable";

export default function Home() {
  return (
    <>
      <Hero />
      <Savings />
      <Maintenance />
      <Durable />
      <FeatureCards />
      <PowerBackup />
      <ServicesSection />
      <ProcessTimeline />
      <WorkProcess />
      <InstallSection />
    </>
  );
}
