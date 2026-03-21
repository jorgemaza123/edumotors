import React from "react";
import { motion } from "motion/react";
import { ArrowRight, BriefcaseBusiness, Gauge, ShieldCheck } from "lucide-react";
import { buildWhatsAppUrl } from "../content/automotiveContent";
import { trackEvent } from "../utils/analytics";

const blocks = [
  {
    id: "diagnostico",
    title: "No cambies piezas sin confirmar la falla",
    desc: "Muchos clientes llegan despues de gastar en bateria, bujias o bomba sin resolver el problema. Nuestro mensaje comercial parte del diagnostico correcto.",
    icon: <ShieldCheck size={32} />,
    color: "from-[#39FF14]/15 to-transparent",
    accent: "#39FF14",
    cta: "Quiero diagnostico claro",
    link: buildWhatsAppUrl(
      "Hola EDU MOTORS, quiero diagnostico para no cambiar piezas a ciegas.",
    ),
  },
  {
    id: "trabajo",
    title: "Si tu auto trabaja, tu prioridad es volver a circular rapido",
    desc: "Taxi, reparto, movilidad o uso diario intenso: cuando el auto produce ingresos, el discurso debe hablar de tiempo, prioridad y retorno.",
    icon: <BriefcaseBusiness size={32} />,
    color: "from-[#0055FF]/20 to-transparent",
    accent: "#0055FF",
    cta: "Mi auto es de trabajo",
    link: buildWhatsAppUrl(
      "Hola EDU MOTORS, uso mi auto para trabajar y necesito ayuda rapida.",
    ),
  },
  {
    id: "ahorro",
    title: "El alto ticket entra por ahorro, no por tecnologia",
    desc: "GNV y GLP venden mejor cuando conectan con gasto mensual, kilometraje y retorno. Primero evaluamos si tu caso realmente lo justifica.",
    icon: <Gauge size={32} />,
    color: "from-white/10 to-transparent",
    accent: "white",
    cta: "Quiero evaluar ahorro",
    link: buildWhatsAppUrl(
      "Hola EDU MOTORS, quiero evaluar si me conviene GNV o GLP.",
    ),
  },
];

const CommercialBlocks = () => {
  return (
    <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br ${block.color} border border-white/5 flex flex-col h-full`}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                style={{ backgroundColor: `${block.accent}15`, color: block.accent }}
              >
                {block.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 italic leading-tight">
                {block.title}
              </h3>

              <p className="text-white/55 mb-8 flex-grow leading-relaxed">
                {block.desc}
              </p>

              <a
                href={block.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_cta_principal", { block: block.id })}
                className="group flex items-center justify-between bg-white text-black font-black px-6 py-4 rounded-2xl hover:bg-white/90 transition-all uppercase tracking-wide text-sm"
              >
                <span>{block.cta}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div
                className="absolute top-8 right-8 w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: block.accent }}
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute -bottom-10 -left-10 text-[10rem] font-black text-white/[0.02] pointer-events-none select-none italic leading-none whitespace-nowrap">
          LIMA SUR - DIAGNOSTICO - MOTOR - GNV - GLP
        </div>
      </div>
    </section>
  );
};

export default CommercialBlocks;
