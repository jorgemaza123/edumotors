import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import UrgentSection from "../components/UrgentSection";
import Services from "../components/Services";
import QuickForm from "../components/QuickForm";
import VideoSection from "../components/VideoSection";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import LocalSEO from "../components/LocalSEO";
import LocationSection from "../components/LocationSection";
import RealResults from "../components/RealResults";
import CommercialBlocks from "../components/CommercialBlocks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FooterCTA from "../components/FooterCTA";
import WhatsAppButton from "../components/WhatsAppButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        :root {
          --primary-blue: #0055FF;
          --neon-green: #39FF14;
          --bg-dark: #0A0F1E;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-dark);
          color: white;
          scroll-behavior: smooth;
        }

        .italic {
          font-style: italic;
        }
      `}</style>

      <Header />

      <main>
        <Hero />
        <UrgentSection />
        <Services />
        <QuickForm />
        <VideoSection />
        <Process />
        <Pricing />
        <LocalSEO />
        <LocationSection />
        <RealResults />
        <CommercialBlocks />
        <Testimonials />
        <FAQ />
        <FooterCTA />
      </main>

      <WhatsAppButton />
    </div>
  );
}
