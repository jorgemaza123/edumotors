import React from "react";
import Header from "../../components/Header";
import FooterCTA from "../../components/FooterCTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { blogPosts } from "../../content/automotiveContent";

export function meta() {
  const currentUrl = "https://edumotors.pe/blog";

  return [
    {
      title:
        "Blog automotriz en Lima Sur | Auto no arranca, motor, bomba y GNV | EDU MOTORS",
    },
    {
      name: "description",
      content:
        "Articulos orientados a problemas reales del conductor en Lima Sur: auto no arranca, falla de motor, bomba de gasolina y conversion a GNV.",
    },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
              Blog de problemas reales
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white italic mt-4 mb-6">
              Contenido para captar trafico que ya esta cerca de comprar
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Articulos enfocados en sintomas, costo de error y siguiente paso.
              No llenamos el blog con relleno: cada pieza debe acercar al lead a WhatsApp.
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#070B16]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-8"
                >
                  <div className="text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3">
                    {post.intent}
                  </div>
                  <h2 className="text-2xl font-black text-white italic mb-4">
                    <a href={`/blog/${post.slug}`} className="hover:text-[#39FF14] transition-colors">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-white/55 leading-relaxed mb-6">{post.excerpt}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-center bg-[#39FF14] text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide"
                  >
                    Leer articulo
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FooterCTA
          title="Si ya reconoces el sintoma, el siguiente paso es escribirnos"
          description="El blog esta hecho para reducir dudas y llevar la conversacion a diagnostico, presupuesto o evaluacion comercial."
          buttonText="Quiero hablar por WhatsApp"
          whatsappText="Hola EDU MOTORS, lei su blog y quiero orientacion para mi auto."
        />
      </main>

      <WhatsAppButton whatsappText="Hola EDU MOTORS, lei su blog y quiero orientacion para mi auto." />
    </div>
  );
}
