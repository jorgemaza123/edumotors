import React from "react";
import { useParams } from "react-router";
import Header from "../../../components/Header";
import FAQ from "../../../components/FAQ";
import FooterCTA from "../../../components/FooterCTA";
import WhatsAppButton from "../../../components/WhatsAppButton";
import ServiceCardsSection from "../../../components/ServiceCardsSection";
import {
  getBlogPostBySlug,
  getServiceBySlug,
} from "../../../content/automotiveContent";

export function meta({ params }) {
  const post = getBlogPostBySlug(params.slug || "");
  const currentUrl = `https://edumotors.pe/blog/${params.slug}`;

  if (!post) {
    return [
      { title: "Blog automotriz en Lima Sur | EDU MOTORS" },
      {
        name: "description",
        content:
          "Blog automotriz enfocado en fallas reales, diagnostico y captacion de clientes en Lima Sur.",
      },
      { rel: "canonical", href: currentUrl },
    ];
  }

  return [
    { title: post.metaTitle },
    { name: "description", content: post.metaDescription },
    { property: "og:title", content: post.metaTitle },
    { property: "og:description", content: post.metaDescription },
    { property: "og:url", content: currentUrl },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-4xl font-black italic mb-4">Articulo no encontrado</h1>
          <p className="text-white/55 mb-8">
            Revisa nuestro blog o escribe por WhatsApp para contarnos el sintoma de tu auto.
          </p>
          <a
            href="/blog"
            className="inline-flex items-center justify-center bg-[#39FF14] text-black px-8 py-4 rounded-full font-black uppercase tracking-wider"
          >
            Volver al blog
          </a>
        </div>
      </div>
    );
  }

  const relatedService = getServiceBySlug(post.relatedServiceSlug);

  return (
    <div className="min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
              {post.intent}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white italic mt-4 mb-6">
              {post.title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              {post.heroProblem}
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#070B16]">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            {post.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-8"
              >
                <h2 className="text-2xl md:text-3xl font-black text-white italic mb-5">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-white/65 leading-relaxed"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#39FF14] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {relatedService ? (
          <ServiceCardsSection
            eyebrow="Servicio sugerido"
            title="Si ya identificaste este problema, este es el siguiente paso"
            description="Conectamos cada articulo con la landing comercial que mejor encaja para no perder al lead en la navegacion."
            items={[relatedService]}
            ctaLabel="Abrir landing"
            compact
          />
        ) : null}

        <FAQ
          customQuestions={post.faq}
          title="Preguntas frecuentes del problema"
          description="Dudas rapidas para mover al usuario desde la investigacion hacia la consulta."
          ctaText="Quiero revisar este problema"
          ctaMessage={post.whatsappText}
        />

        <FooterCTA
          title="Si tu auto muestra este sintoma, no sigas adivinando"
          description="Escribenos con el problema exacto y te orientamos por WhatsApp para pasar del contenido a la accion."
          buttonText="Resolverlo por WhatsApp"
          whatsappText={post.whatsappText}
        />
      </main>

      <WhatsAppButton whatsappText={post.whatsappText} />
    </div>
  );
}
