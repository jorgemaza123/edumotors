import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { buildWhatsAppUrl } from "../content/automotiveContent";

const FAQ = ({
  customQuestions = [],
  title = "Preguntas frecuentes",
  description = "Respuestas rapidas a las preguntas mas comunes sobre nuestros servicios y tiempos de atencion.",
  ctaText = "Escribenos por WhatsApp",
  ctaMessage = "Hola EDU MOTORS, tengo una consulta sobre mi vehiculo.",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultQuestions = [
    {
      question: "Si mi auto no arranca, que servicio conviene pedir primero?",
      answer:
        "Lo mas rentable suele ser empezar por diagnostico. Asi confirmas si la falla viene de bateria, arranque, bomba de gasolina, sensores o motor antes de gastar en piezas.",
    },
    {
      question: "Cuanto cuesta un diagnostico automotriz en Lima Sur?",
      answer:
        "La orientacion inicial por WhatsApp es gratis y el valor de la revision tecnica depende del tipo de falla y de las pruebas necesarias.",
    },
    {
      question: "Atienden Villa El Salvador, SJM, VMT y Lurin?",
      answer:
        "Si. Trabajamos con clientes de distintas zonas de Lima Sur y orientamos por WhatsApp antes de programar el siguiente paso.",
    },
    {
      question: "Cuando conviene pensar en GNV o GLP?",
      answer:
        "Cuando el kilometraje y el uso diario justifican el ahorro. Antes de convertir, conviene confirmar que el auto este en buen estado base.",
    },
    {
      question: "Atienden fallas urgentes el mismo dia?",
      answer:
        "Si hay disponibilidad, priorizamos fallas con alta urgencia como auto que no arranca, se apaga o pierde fuerza en uso diario o de trabajo.",
    },
  ];

  const allQuestions =
    customQuestions.length > 0 ? customQuestions : defaultQuestions;

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0055FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2">
            {title}
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {allQuestions.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-[#070B16] border border-white/5 overflow-hidden hover:border-[#0055FF]/20 transition-all"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className="text-white font-bold text-lg pr-4 group-hover:text-[#39FF14] transition-colors">
                  {item.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#0055FF]/20 transition-all">
                  {openIndex === index ? (
                    <Minus size={16} className="text-[#39FF14]" />
                  ) : (
                    <Plus size={16} className="text-white/40" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/40 mb-4">Todavia tienes dudas?</p>
          <a
            href={buildWhatsAppUrl(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#39FF14]/20 transition-all"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
