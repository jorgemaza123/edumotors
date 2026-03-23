import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CompactHomeHub from "../components/CompactHomeHub";
import QuickForm from "../components/QuickForm";
import LocationSection from "../components/LocationSection";
import FAQ from "../components/FAQ";
import FooterCTA from "../components/FooterCTA";
import MobileActionBar from "../components/MobileActionBar";
import WhatsAppButton from "../components/WhatsAppButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] pb-24 font-sans selection:bg-[#39FF14] selection:text-black md:pb-0">
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
        <CompactHomeHub />
        <QuickForm
          eyebrow="Respuesta rapida"
          title="Escribenos en menos de 30 segundos"
          subtitle="Si tu auto falla hoy, deja tu nombre, telefono y sintoma principal. Te respondemos por WhatsApp con el siguiente paso."
          quickOptions={["No arranca", "Se apaga", "Check engine", "Quiero GNV / GLP"]}
          ctaText="Quiero una respuesta ahora"
          contextLabel="Home corta de conversion"
        />
        <LocationSection />
        <FAQ
          customQuestions={[
            {
              question: "Si no se que tiene mi auto, por donde empiezo?",
              answer:
                "Empieza por diagnostico. Es la forma mas rapida de saber si la falla viene de motor, bomba de gasolina, sensores, sistema electrico o mantenimiento.",
            },
            {
              question: "Atienden urgencias en Villa El Salvador y Lima Sur?",
              answer:
                "Si. Priorizamos autos que no arrancan, se apagan, pierden fuerza o afectan el trabajo diario del cliente.",
            },
            {
              question: "Tambien orientan sobre conversion a GNV o GLP?",
              answer:
                "Si. Evaluamos kilometraje, uso, ahorro esperado y estado general del auto antes de recomendar una conversion.",
            },
            {
              question: "Puedo escribir por WhatsApp antes de ir al taller?",
              answer:
                "Si. Esa es la idea: reducir friccion, revisar el sintoma y ayudarte a definir si conviene ir hoy, pedir diagnostico o revisar un servicio especifico.",
            },
          ]}
          title="Lo que el cliente necesita saber para decidir rapido"
          description="Solo las dudas que frenan una venta. Lo demas lo resolvemos en WhatsApp o en la revision."
        />
        <FooterCTA
          title="Si tu auto te hace perder tiempo o dinero, resuelvelo hoy"
          description="Llamanos, escribenos por WhatsApp o entra al servicio exacto que necesitas. Esta web ya no esta pensada para leerla entera, sino para hacerte avanzar rapido."
          buttonText="Hablar por WhatsApp ahora"
        />
      </main>

      <MobileActionBar />
      <WhatsAppButton hideOnMobile />
    </div>
  );
}
