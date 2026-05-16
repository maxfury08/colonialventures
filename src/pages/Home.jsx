import Hero from "../components/Hero";

import WhyPepper from "../components/WhyPepper";

import ROIStats from "../components/ROIStats";

import Features from "../components/Features";

import HowItWorks from "../components/HowItWorks";

import Calculator from "../components/Calculator";

import InvestmentPlans from "../components/InvestmentPlans";

import GlobalExports from "../components/GlobalExports";

import Sustainability from "../components/Sustainability";

import PlantationGallery from "../components/PlantationGallery";

import Testimonials from "../components/Testimonials";

import FAQ from "../components/FAQ";

import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}

      <Hero />

      {/* CREAM SECTION */}

      <WhyPepper />

      {/* DARK GREEN SECTION */}

      <ROIStats />

      {/* WHITE SECTION */}

      <Features />

      {/* DARK SECTION */}

      <HowItWorks />

      {/* CREAM SECTION */}

      <Calculator />

      {/* WHITE SECTION */}

      <InvestmentPlans />

      {/* DARK GREEN SECTION */}

      <GlobalExports />

      {/* CREAM SECTION */}

      <Sustainability />

      {/* WHITE SECTION */}

      <PlantationGallery />

      {/* CREAM SECTION */}

      <Testimonials />

      {/* WHITE SECTION */}

      <FAQ />

      {/* GREEN CTA */}

      <ContactCTA />
    </main>
  );
}