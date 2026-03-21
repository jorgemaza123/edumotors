import React from "react";
import { motion } from "motion/react";
import { CheckCircle, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../content/automotiveContent";

const ServiceHero = ({
  title,
  subtitle,
  description,
  badges = [],
  whatsappText,
}) => {
  const whatsappUrl = buildWhatsAppUrl(
    whatsappText || `Hola EDU MOTORS, necesito informacion sobre ${title}.`,
  );

  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#070B16] overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0055FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#39FF14]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,85,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
          <a href="/" className="hover:text-white transition-colors">
            Inicio
          </a>
          <span>/</span>
          <a href="/servicios" className="hover:text-white transition-colors">
            Servicios
          </a>
          <span>/</span>
          <span className="text-[#39FF14]">{title}</span>
        </div>

        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Atencion rapida en Lima Sur",
              "Diagnostico por WhatsApp",
              "Enfoque en urgencia y conversion",
            ].map((badge) => (
              <span
                key={badge}
                className="text-xs font-bold text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/20 px-3 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-white italic leading-tight mb-4"
          >
            {title}
          </motion.h1>

          {subtitle ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-[#0055FF] font-bold mb-4"
            >
              {subtitle}
            </motion.p>
          ) : null}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {description}
          </motion.p>

          {badges.length ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle size={14} className="text-[#39FF14]" />
                  {badge}
                </div>
              ))}
            </motion.div>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#39FF14] text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#32e012] transition-all shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_50px_rgba(57,255,20,0.6)]"
            >
              <MessageCircle size={20} />
              Diagnostico por WhatsApp
            </a>
            <div className="flex flex-col justify-center gap-1">
              <span className="text-white/40 text-xs">
                Respuesta rapida para sintomas urgentes
              </span>
              <span className="text-white/40 text-xs">
                Cobertura comercial en Lima Sur
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
