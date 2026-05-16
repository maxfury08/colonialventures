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
import Reveal  from "../components/Reveal";
import InvestmentChart from "../components/InvestmentChart";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}

      <Hero />


      {/* CREAM SECTION */}

      <Reveal>
        <WhyPepper />
      </Reveal>

      {/* DARK GREEN SECTION */}
      <Reveal>  
      <ROIStats />
      </Reveal>

      {/* WHITE SECTION */}
      <Reveal>
      <Features />
      </Reveal>
      {/* DARK SECTION */}
      <Reveal>
      <HowItWorks />
      </Reveal>

      {/* CREAM SECTION */}
      <Reveal>
      <Calculator />
      </Reveal>

      <Reveal>
      <InvestmentChart />
      </Reveal>

      {/* WHITE SECTION */}
      <Reveal>
      <InvestmentPlans />
      </Reveal>

      {/* DARK GREEN SECTION */}
      <Reveal>
        <GlobalExports />
      </Reveal>
      

      {/* CREAM SECTION */}
      <Reveal>
      <Sustainability />
      </Reveal>
      {/* WHITE SECTION */}
      <Reveal>
      <PlantationGallery />
      </Reveal>

      {/* CREAM SECTION */}
      <Reveal>
      <Testimonials />
      </Reveal>
      {/* WHITE SECTION */}

      <Reveal>
      <FAQ />
      </Reveal>

      {/* GREEN CTA */}

      <ContactCTA />
    </main>
  );
}