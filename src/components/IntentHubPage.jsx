import React from "react";
import Header from "./Header";
import FooterCTA from "./FooterCTA";
import WhatsAppButton from "./WhatsAppButton";

export default function IntentHubPage({
  eyebrow,
  title,
  description,
  items,
  basePath,
  ctaTitle,
  ctaDescription,
  ctaButton,
  whatsappText,
}) {
  return (
    <div className="min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
              {eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white italic mt-4 mb-6">
              {title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{description}</p>
          </div>
        </section>

        <section className="py-20 bg-[#070B16]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {items.map((item) => (
                <article
                  key={item.slug}
                  className="rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-8"
                >
                  <div className="text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3">
                    {item.intentLabel}
                  </div>
                  <h2 className="text-2xl font-black text-white italic mb-4">
                    <a
                      href={`${basePath}/${item.slug}`}
                      className="hover:text-[#39FF14] transition-colors"
                    >
                      {item.heroTitle}
                    </a>
                  </h2>
                  <p className="text-white/55 leading-relaxed mb-6">{item.summary}</p>
                  <a
                    href={`${basePath}/${item.slug}`}
                    className="inline-flex items-center justify-center bg-[#39FF14] text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide"
                  >
                    Abrir pagina
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FooterCTA
          title={ctaTitle}
          description={ctaDescription}
          buttonText={ctaButton}
          whatsappText={whatsappText}
        />
      </main>

      <WhatsAppButton whatsappText={whatsappText} />
    </div>
  );
}
