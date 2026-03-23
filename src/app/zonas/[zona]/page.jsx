import React from "react";
import { motion } from "motion/react";
import { useParams } from "react-router";
import { MapPin, MessageCircle } from "lucide-react";
import Header from "../../../components/Header";
import ServiceCardsSection from "../../../components/ServiceCardsSection";
import FAQ from "../../../components/FAQ";
import QuickForm from "../../../components/QuickForm";
import FooterCTA from "../../../components/FooterCTA";
import WhatsAppButton from "../../../components/WhatsAppButton";
import {
  buildWhatsAppUrl,
  businessData,
  getServiceBySlug,
  getZoneBySlug,
} from "../../../content/automotiveContent";
import { getLocalIntentsByZone } from "../../../content/localIntentContent";

export function meta({ params }) {
  const zone = getZoneBySlug(params.zona || "");
  const currentUrl = `https://edumotors.pe/zonas/${params.zona}`;

  return [
    { title: zone.metaTitle },
    { name: "description", content: zone.metaDescription },
    { property: "og:title", content: zone.metaTitle },
    { property: "og:description", content: zone.metaDescription },
    { property: "og:url", content: currentUrl },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: zone.metaTitle },
    { name: "twitter:description", content: zone.metaDescription },
    { rel: "canonical", href: currentUrl },
  ];
}

function zoneSchema(zoneName) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Servicio automotriz en ${zoneName}`,
    areaServed: zoneName,
    provider: {
      "@type": "AutoRepair",
      name: businessData.name,
      telephone: `+${businessData.whatsappNumber}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessData.address,
        addressLocality: businessData.district,
        addressRegion: businessData.region,
        postalCode: businessData.postalCode,
        addressCountry: businessData.country,
      },
    },
  };
}

export default function ZonePage() {
  const { zona } = useParams();
  const zone = getZoneBySlug(zona || "");
  const whatsappUrl = buildWhatsAppUrl(zone.whatsappText);
  const recommendedServices = (zone.recommendedSlugs || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
  const localIntentPages = getLocalIntentsByZone(zone.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(zoneSchema(zone.name)).replace(/</g, "\\u003c"),
          }}
        />

        <section className="pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
              Taller automotriz en {zone.name}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white italic mt-4 mb-6">
              {zone.heroTitle}
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              {zone.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#39FF14] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(57,255,20,0.3)]"
              >
                Diagnostico por WhatsApp
              </a>
              <a
                href="/servicios"
                className="border border-white/10 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:border-[#0055FF]/40 hover:bg-white/5 transition-all"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0A0F1E]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {zone.localSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 text-white/65 text-sm leading-relaxed"
                >
                  <div className="flex items-center gap-2 text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3">
                    <MapPin size={14} />
                    Micro contenido local
                  </div>
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#070B16]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                Problemas reales en {zone.name}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2">
                Lo que mas se busca cuando el auto falla en esta zona
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {zone.commonProblems.map((problem, index) => (
                <motion.article
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-3xl border border-white/5 bg-[#0A0F1E] p-7"
                >
                  <h3 className="text-white text-xl font-bold italic mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#39FF14] text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#32e012] transition-all"
              >
                <MessageCircle size={18} />
                Estoy en {zone.name} y necesito ayuda
              </a>
            </div>
          </div>
        </section>

        {localIntentPages.length ? (
          <section className="py-16 bg-[#0A0F1E] border-t border-white/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                  Dominio local
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2 mb-4">
                  Busquedas hiperlocales que ya valen en {zone.name}
                </h2>
                <p className="text-white/55 leading-relaxed">
                  Estas paginas cruzan sintoma + zona para captar al cliente que
                  ya quiere una solucion cercana y rapida.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                {localIntentPages.map((page) => (
                  <article
                    key={page.slug}
                    className="rounded-[2rem] border border-white/5 bg-[#070B16] p-7"
                  >
                    <div className="text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3">
                      {page.intentLabel}
                    </div>
                    <h3 className="text-2xl font-black text-white italic mb-4">
                      <a
                        href={`/local/${page.slug}`}
                        className="hover:text-[#39FF14] transition-colors"
                      >
                        {page.heroTitle}
                      </a>
                    </h3>
                    <p className="text-white/55 leading-relaxed mb-6">
                      {page.summary}
                    </p>
                    <a
                      href={`/local/${page.slug}`}
                      className="inline-flex items-center justify-center bg-[#39FF14] text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide"
                    >
                      Ver caso local
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <ServiceCardsSection
          eyebrow={`Servicios para ${zone.name}`}
          title={`Soluciones que mas encajan con ${zone.name}`}
          description="Cada zona tiene patrones de uso y urgencia distintos. Aqui priorizamos los servicios que mejor capturan esa demanda."
          items={recommendedServices}
          ctaLabel="Ver solucion"
          compact
        />

        <FAQ
          customQuestions={zone.faq}
          title={`FAQ de ${zone.name}`}
          description="Preguntas frecuentes pensadas para captar dudas locales y convertirlas en consulta directa."
          ctaText={`Resolver mi duda en ${zone.name}`}
          ctaMessage={zone.whatsappText}
        />

        <QuickForm
          eyebrow={`Diagnostico en ${zone.name}`}
          title={`Cuentanos que pasa con tu auto en ${zone.name}`}
          subtitle="Describe el sintoma principal y te orientamos por WhatsApp para acelerar la decision."
          quickOptions={zone.quickOptions}
          ctaText={`Quiero ayuda en ${zone.name}`}
          contextLabel={`Zona ${zone.name}`}
        />

        <FooterCTA
          title={`Si tu auto falla en ${zone.name}, no lo sigas pateando`}
          description="Escribenos con el sintoma y la zona. La idea es ayudarte a decidir rapido si necesitas diagnostico, combustible, motor o mantenimiento."
          buttonText={`Hablar por WhatsApp en ${zone.name}`}
          whatsappText={zone.whatsappText}
        />
      </main>

      <WhatsAppButton whatsappText={zone.whatsappText} />
    </div>
  );
}
