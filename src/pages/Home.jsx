import Hero from "../components/Hero";
import WhyPepper from "../components/WhyPepper";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import InvestmentPlans from "../components/InvestmentPlans";

import ROIStats from "../components/ROIStats";
import Calculator from "../components/Calculator";
import Sustainability from "../components/Sustainability";
import GlobalExports from "../components/GlobalExports";
import PlantationGallery from "../components/PlantationGallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />

      <WhyPepper />

      <ROIStats />

      <Features />

      <HowItWorks />

      <Calculator />

      <InvestmentPlans />

      <GlobalExports />

      <Sustainability />

      <PlantationGallery />

      <Testimonials />

      <FAQ />

      <ContactCTA />
    </main>
  );
}