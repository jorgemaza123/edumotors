import React from "react";
import { motion } from "motion/react";
import Header from "./Header";
import LocalSEO from "./LocalSEO";
import FAQ from "./FAQ";
import QuickForm from "./QuickForm";
import FooterCTA from "./FooterCTA";
import WhatsAppButton from "./WhatsAppButton";
import ServiceCardsSection from "./ServiceCardsSection";
import { getServiceBySlug } from "../content/automotiveContent";

function webPageSchema(title, description, path) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `https://edumotors.pe${path}`,
  };
}

export default function IntentLandingPage({
  item,
  path,
  eyebrow = "Busqueda transaccional",
  cardsEyebrow = "Lo que hay detras",
  sectionsEyebrow = "Como decidir bien",
  relatedTitle = "Servicios que suelen resolver este escenario",
  relatedDescription = "La mejor pagina de intencion no se queda en el problema: lo conecta con el servicio correcto.",
  quickFormEyebrow = "Orientacion rapida",
  quickFormTitle,
  quickFormSubtitle,
  relatedEntries = [],
  relatedEntriesEyebrow = "Dominio local",
  relatedEntriesTitle = "Busquedas relacionadas",
  relatedEntriesDescription = "Variantes pensadas para reforzar la intencion local y mejorar el enlazado interno.",
  relatedEntriesBasePath = "",
  showLocalSEO = true,
}) {
  const relatedServices = (item.relatedServiceSlugs || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
  const relatedEntryCards = relatedEntries
    .map((entry) => ({
      ...entry,
      href:
        entry.path || (relatedEntriesBasePath ? `${relatedEntriesBasePath}/${entry.slug}` : ""),
    }))
    .filter((entry) => entry.href);

  return (
    <div className="min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              webPageSchema(item.heroTitle, item.metaDescription, path),
            ).replace(/</g, "\\u003c"),
          }}
        />

        <section className="pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
              {item.intentLabel || eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white italic mt-4 mb-6">
              {item.heroTitle}
            </h1>
            <p className="text-[#0055FF] font-bold text-lg md:text-xl mb-4">
              {item.heroSubtitle}
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              {item.heroDescription}
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#070B16]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                {cardsEyebrow}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2">
                {item.cardsTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {item.cards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-3xl border border-white/5 bg-[#0A0F1E] p-6"
                >
                  <h3 className="text-white text-xl font-bold italic mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0F1E]">
          <div className="container mx-auto px-4 max-w-5xl space-y-6">
            <div className="text-center mb-4">
              <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                {sectionsEyebrow}
              </span>
            </div>
            {item.sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border border-white/5 bg-[#070B16] p-8 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-black text-white italic mb-4">
                  {section.title}
                </h2>
                <p className="text-white/55 leading-relaxed mb-6">
                  {section.description}
                </p>
                <div className="grid gap-3">
                  {section.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-3 text-white/65 leading-relaxed"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#39FF14] shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {relatedServices.length ? (
          <ServiceCardsSection
            eyebrow="Servicios relacionados"
            title={relatedTitle}
            description={relatedDescription}
            items={relatedServices}
            ctaLabel="Ver servicio"
            compact
          />
        ) : null}

        {relatedEntryCards.length ? (
          <section className="py-16 bg-[#070B16] border-t border-white/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                  {relatedEntriesEyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2 mb-4">
                  {relatedEntriesTitle}
                </h2>
                <p className="text-white/55 leading-relaxed">
                  {relatedEntriesDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {relatedEntryCards.map((entry) => (
                  <article
                    key={entry.slug || entry.href}
                    className="rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-7"
                  >
                    <div className="text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3">
                      {entry.intentLabel || "Relacionado"}
                    </div>
                    <h3 className="text-2xl font-black text-white italic mb-4">
                      <a href={entry.href} className="hover:text-[#39FF14] transition-colors">
                        {entry.heroTitle || entry.title}
                      </a>
                    </h3>
                    <p className="text-white/55 leading-relaxed mb-6">
                      {entry.summary}
                    </p>
                    <a
                      href={entry.href}
                      className="inline-flex items-center justify-center bg-[#39FF14] text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide"
                    >
                      Ver pagina local
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {showLocalSEO ? <LocalSEO /> : null}

        <FAQ
          customQuestions={item.faq}
          title="Preguntas frecuentes"
          description="Respuestas pensadas para ayudar a decidir sin perder tiempo ni dinero."
          ctaText="Resolver mi duda por WhatsApp"
          ctaMessage={item.whatsappText}
        />

        <QuickForm
          eyebrow={quickFormEyebrow}
          title={quickFormTitle || `Cuentanos mas sobre: ${item.heroTitle}`}
          subtitle={
            quickFormSubtitle ||
            "Describe tu caso y te orientamos por WhatsApp para definir el siguiente paso."
          }
          quickOptions={item.quickOptions}
          ctaText={item.ctaButton}
          contextLabel={item.heroTitle}
        />

        <FooterCTA
          title={item.ctaTitle}
          description={item.ctaDescription}
          buttonText={item.ctaButton}
          whatsappText={item.whatsappText}
        />
      </main>

      <WhatsAppButton whatsappText={item.whatsappText} />
    </div>
  );
}
