import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, Battery, Fuel, Gauge, ScanLine, Wrench } from "lucide-react";
import { buildWhatsAppUrl } from "../content/automotiveContent";

const problems = [
  {
    icon: <Battery className="text-yellow-400" />,
    title: "Auto no arranca",
    detail: "Bateria, arranque, sensor CKP o alimentacion.",
  },
  {
    icon: <AlertTriangle className="text-red-400" />,
    title: "Falla de motor",
    detail: "Perdida de fuerza, humo, ruido o temperatura.",
  },
  {
    icon: <Fuel className="text-orange-400" />,
    title: "Bomba o combustible",
    detail: "Apagones, jaloneos, poca respuesta o ruido en tanque.",
  },
  {
    icon: <ScanLine className="text-blue-400" />,
    title: "Check engine",
    detail: "Escaneo y pruebas antes de cambiar piezas.",
  },
  {
    icon: <Gauge className="text-[#39FF14]" />,
    title: "Quiero ahorrar",
    detail: "Evaluamos GNV o GLP segun kilometraje y uso real.",
  },
  {
    icon: <Wrench className="text-white" />,
    title: "Consume demasiado",
    detail: "Mantenimiento, inyectores, sensores o afinamiento.",
  },
];

const urgentLinks = [
  { href: "/problemas/auto-no-arranca", label: "Auto no arranca" },
  { href: "/problemas/falla-al-acelerar", label: "Falla al acelerar" },
  { href: "/problemas/check-engine-encendido", label: "Check engine" },
  { href: "/problemas/consume-mucho-combustible", label: "Consume mucho" },
];

const UrgentSection = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola EDU MOTORS, tengo una urgencia con mi auto y necesito orientacion.",
  );

  return (
    <section className="py-24 bg-[#0A0F1E] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic">
            Problemas que si traen{" "}
            <span className="text-[#0055FF]">intencion de compra inmediata</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            Cuando alguien busca esto, no esta comparando contenido. Quiere una
            solucion clara, rapida y cercana. Por eso el mensaje tiene que hablar
            del problema, no del taller.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col transition-all hover:border-[#0055FF]/30"
            >
              <div className="mb-4">{React.cloneElement(problem.icon, { size: 32 })}</div>
              <h3 className="text-white font-semibold text-lg leading-tight italic mb-2">
                {problem.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{problem.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#39FF14] text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_25px_rgba(57,255,20,0.3)] hover:shadow-[0_0_35px_rgba(57,255,20,0.5)] transition-all"
          >
            Resolver mi falla por WhatsApp
          </motion.a>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {urgentLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-bold hover:border-[#0055FF]/40 hover:text-white transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentSection;
