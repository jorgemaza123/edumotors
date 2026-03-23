import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Phone, Zap } from "lucide-react";
import { buildWhatsAppUrl, businessData } from "../content/automotiveContent";
import { trackEvent } from "../utils/analytics";

const painSignals = [
  {
    title: "No arranca o se apaga",
    description: "Bateria, bomba de gasolina, sensor CKP o alimentacion.",
  },
  {
    title: "Falla al acelerar",
    description: "Combustible, inyectores, encendido o desgaste real de motor.",
  },
  {
    title: "Quiere bajar gasto",
    description: "Diagnostico, mantenimiento o conversion a GNV / GLP segun el caso.",
  },
];

const Hero = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola EDU MOTORS, necesito un diagnostico para mi vehiculo.",
  );

  return (
    <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-[#0A0F1E] pt-28 pb-12 md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0055FF]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#39FF14]/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[36%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0055FF] to-transparent"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
          className="absolute top-[41%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span className="flex items-center gap-1 text-[#39FF14] text-xs font-bold uppercase tracking-widest bg-[#39FF14]/10 px-3 py-1 rounded-full border border-[#39FF14]/20">
              <CheckCircle2 size={14} /> Mecanico urgente en Lima Sur
            </span>
            <span className="flex items-center gap-1 text-white/80 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <CheckCircle2 size={14} /> Diagnostico por WhatsApp
            </span>
            <span className="flex items-center gap-1 text-white/80 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <CheckCircle2 size={14} /> Motor, combustible y GNV
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight italic"
          >
            Auto no arranca, falla al acelerar o consume demasiado?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-[#39FF14]">
              Lo diagnosticamos y lo resolvemos en Lima Sur
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Taller automotriz enfocado en clientes con intencion inmediata:
            diagnostico automotriz, reparacion de motores, bomba de gasolina,
            conversion a GNV y GLP, y mantenimiento para autos particulares o de trabajo.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("click_cta_principal", { location: "hero_whatsapp" })
              }
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black transition-all duration-200 bg-[#39FF14] rounded-full shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] hover:scale-105"
            >
              Diagnostico GRATIS por WhatsApp
            </a>
            <a
              href={`tel:${businessData.phoneRaw}`}
              onClick={() =>
                trackEvent("click_cta_principal", { location: "hero_phone" })
              }
              className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/10 rounded-full text-white font-bold hover:border-[#0055FF]/40 hover:bg-white/5 transition-all"
            >
              <Phone size={18} />
              Llamar al {businessData.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-5 flex items-center justify-center gap-2 text-white/45 text-sm italic"
          >
            <Zap size={14} className="text-[#39FF14]" />
            Taller en {businessData.addressShort}. Atendemos Lima Sur con respuesta rapida.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {painSignals.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 text-left"
              >
                <div className="text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3">
                  Alta intencion
                </div>
                <h3 className="text-white text-xl font-bold italic mb-2">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
