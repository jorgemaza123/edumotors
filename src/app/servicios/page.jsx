import React from "react";
import Header from "../../components/Header";
import ServiceCardsSection from "../../components/ServiceCardsSection";
import FAQ from "../../components/FAQ";
import FooterCTA from "../../components/FooterCTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import {
  getServiceCatalog,
  hiddenServices,
} from "../../content/automotiveContent";

const services = getServiceCatalog();

export function meta() {
  const currentUrl = "https://edumotors.pe/servicios";

  return [
    {
      title:
        "Servicios automotrices en Lima Sur | Diagnostico, motor, combustible y GNV | EDU MOTORS",
    },
    {
      name: "description",
      content:
        "Conoce los servicios automotrices de EDU MOTORS en Lima Sur: diagnostico, reparacion de motores, bomba de gasolina, conversion a GNV y GLP, y mantenimiento general.",
    },
    { property: "og:title", content: "Servicios automotrices en Lima Sur | EDU MOTORS" },
    {
      property: "og:description",
      content:
        "Arquitectura de servicios pensada para captar urgencia, entrada y alto ticket en Lima Sur.",
    },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
              Arquitectura comercial
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white italic mt-4 mb-6">
              Servicios automotrices pensados para captar urgencia y cerrar mas rapido
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              No todos los servicios cumplen el mismo rol. Algunos captan la urgencia,
              otros entran por diagnostico y otros elevan ticket desde el ahorro.
            </p>
          </div>
        </section>

        <ServiceCardsSection
          eyebrow="Servicios principales"
          title="Cluster comercial de servicios"
          description="La estructura separa bien la intencion urgente, el servicio de entrada y los servicios de alto ticket para que cada pagina venda mejor."
          items={services}
          ctaLabel="Abrir landing"
        />

        <section className="py-16 bg-[#0A0F1E]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-[2rem] border border-white/5 bg-[#070B16] p-8 md:p-10">
              <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                Expansion de servicios
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white italic mt-2 mb-6">
                Servicios secundarios que aumentan conversion y ticket promedio
              </h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {hiddenServices.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/5 bg-[#0A0F1E] p-5"
                  >
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQ
          title="Preguntas sobre servicios y tiempos"
          description="Respuestas generales para ayudar al usuario a entrar por el servicio correcto."
          ctaText="Quiero saber que servicio necesito"
          ctaMessage="Hola EDU MOTORS, no estoy seguro de que servicio necesito para mi auto."
        />

        <FooterCTA
          title="Si no sabes que servicio pedir, empieza por diagnostico"
          description="Es la mejor forma de convertir sintomas en una ruta clara de reparacion o ahorro sin empujar cambios innecesarios."
          buttonText="Quiero orientacion por WhatsApp"
          whatsappText="Hola EDU MOTORS, no se que servicio necesita mi auto y quiero orientacion."
        />
      </main>

      <WhatsAppButton />
    </div>
  );
}
