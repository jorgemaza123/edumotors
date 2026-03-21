import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, BadgeDollarSign, CheckCircle2, Clock3 } from "lucide-react";
import Header from "./Header";
import ServiceHero from "./ServiceHero";
import ServiceCardsSection from "./ServiceCardsSection";
import LocalSEO from "./LocalSEO";
import FAQ from "./FAQ";
import QuickForm from "./QuickForm";
import FooterCTA from "./FooterCTA";
import WhatsAppButton from "./WhatsAppButton";
import { buildWhatsAppUrl, getServiceBySlug } from "../content/automotiveContent";

function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    areaServed: "Lima Sur, Lima, Peru",
    provider: {
      "@type": "AutoRepair",
      name: "EDU MOTORS",
      telephone: "+51960812600",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villa El Salvador",
        addressRegion: "Lima",
        addressCountry: "PE",
      },
    },
  };
}

export default function ServiceLandingPage({ service }) {
  const relatedServices = (service.relatedSlugs || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  const whatsappUrl = buildWhatsAppUrl(service.whatsappText);

  return (
    <div className="min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema(service)).replace(/</g, "\\u003c"),
          }}
        />

        <ServiceHero
          title={service.heroTitle}
          subtitle={service.heroSubtitle}
          description={service.heroDescription}
          badges={service.badges}
          whatsappText={service.whatsappText}
        />

        <section className="py-20 bg-[#0A0F1E]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                Problemas de alta intencion
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2">
                Asi llega la gente cuando necesita{" "}
                <span className="text-[#0055FF]">{service.name}</span>
              </h2>
              <p className="text-white/50 mt-4 leading-relaxed">
                No vendemos un servicio generico. Resolvemos sintomas concretos
                con diagnostico claro y una propuesta que tenga sentido comercial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {service.problemQueries.map((query, index) => (
                <motion.div
                  key={query}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/5 bg-[#070B16] px-5 py-5 text-white/75 text-sm leading-relaxed"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle size={18} className="text-[#39FF14] shrink-0" />
                    <span className="font-bold text-white">{query}</span>
                  </div>
                  <p>
                    Lo revisamos sin adivinar ni empujarte a cambiar piezas antes
                    de confirmar la causa.
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#39FF14] text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#32e012] transition-all shadow-[0_0_30px_rgba(57,255,20,0.3)]"
              >
                Diagnostico por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#070B16]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div>
                <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                  Lo que revisamos
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white italic mt-2 mb-4">
                  Antes de cotizar, validamos esto
                </h2>
                <p className="text-white/55 leading-relaxed">
                  La idea es simple: confirmar la falla antes de sugerir cambio
                  de piezas. Eso reduce gasto, tiempo muerto y retrabajos.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.diagnosisFocus.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="rounded-2xl border border-white/5 bg-[#0A0F1E] p-6"
                  >
                    <h3 className="text-white font-bold mb-3 flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#39FF14] shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="precios" className="py-20 bg-[#0A0F1E]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1.4fr,0.8fr] gap-8">
              <div className="rounded-[2rem] border border-white/5 bg-[#070B16] p-8 md:p-10">
                <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                  Precio y tiempos
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white italic mt-2 mb-8">
                  Guia referencial para decidir rapido
                </h2>
                <div className="space-y-4">
                  {service.priceGuide.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-[#0A0F1E] px-5 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <BadgeDollarSign size={18} className="text-[#0055FF] shrink-0" />
                        <span className="text-white/70 text-sm">{item.label}</span>
                      </div>
                      <span className="text-[#39FF14] font-black text-sm text-right">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#39FF14]/15 bg-[#39FF14]/5 p-8">
                <div className="flex items-center gap-3 text-[#39FF14] mb-4">
                  <Clock3 size={20} />
                  <span className="font-bold uppercase tracking-widest text-xs">
                    Enfoque comercial
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white italic mb-4">
                  Primero claridad, luego presupuesto
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Si tu auto es herramienta de trabajo o el problema ya te esta
                  frenando, te orientamos para priorizar lo urgente y no perder
                  tiempo en pasos innecesarios.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-[#39FF14] text-black px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-wide hover:bg-[#32e012] transition-all"
                >
                  Quiero una orientacion hoy
                </a>
              </div>
            </div>
          </div>
        </section>

        {relatedServices.length ? (
          <ServiceCardsSection
            eyebrow="Servicios relacionados"
            title="Soluciones que suelen aparecer junto con esta falla"
            description="Muchos clientes llegan buscando un solo servicio, pero la causa real suele tocar combustible, sensores, motor o mantenimiento."
            items={relatedServices}
            ctaLabel="Ver solucion"
            compact
          />
        ) : null}

        <LocalSEO />

        <FAQ
          customQuestions={service.faq}
          title={`Preguntas sobre ${service.name.toLowerCase()}`}
          description="Respuestas pensadas para gente que necesita tomar una decision rapida sin perder dinero ni tiempo."
          ctaText="Resolver mi duda por WhatsApp"
          ctaMessage={service.whatsappText}
        />

        <QuickForm
          eyebrow="Diagnostico guiado"
          title={`Cuéntanos que pasa con tu ${service.name.toLowerCase()}`}
          subtitle="No necesitas saber de mecanica. Describe el sintoma y te orientamos por WhatsApp."
          quickOptions={service.quickOptions}
          ctaText={service.ctaButton}
          contextLabel={service.name}
        />

        <FooterCTA
          title={service.ctaTitle}
          description={service.ctaDescription}
          buttonText={service.ctaButton}
          whatsappText={service.whatsappText}
        />
      </main>

      <WhatsAppButton whatsappText={service.whatsappText} />
    </div>
  );
}
