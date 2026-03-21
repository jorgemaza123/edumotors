import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Flame,
  Fuel,
  Gauge,
  RadioTower,
  ScanLine,
  Settings,
  Sparkles,
  Thermometer,
  Activity,
  Wrench,
} from "lucide-react";
import { buildWhatsAppUrl } from "../content/automotiveContent";
import { trackEvent } from "../utils/analytics";

const iconMap = {
  "reparacion-motores": Settings,
  "bomba-gasolina": Fuel,
  diagnostico: ScanLine,
  "conversion-gnv": Gauge,
  "conversion-glp": Gauge,
  "mantenimiento-general": Wrench,
  inyectores: Fuel,
  "sensores-automotrices": RadioTower,
  "sistema-electrico": Sparkles,
  "cuerpo-aceleracion": Activity,
  "check-engine": ScanLine,
  "sistema-encendido": Flame,
  "sistema-refrigeracion": Thermometer,
  afinamiento: Wrench,
};

const toneMap = {
  Urgencia: "bg-[#FF5C5C]/10 text-[#FFB3B3] border border-[#FF5C5C]/20",
  Entrada: "bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20",
  "Alto ticket": "bg-[#0055FF]/10 text-[#8CB3FF] border border-[#0055FF]/20",
  Recurrente: "bg-white/10 text-white/70 border border-white/10",
};

export default function ServiceCardsSection({
  eyebrow = "Servicios",
  title,
  description,
  items = [],
  ctaLabel = "Ver servicio",
  compact = false,
}) {
  return (
    <section className={`bg-[#070B16] ${compact ? "py-16" : "py-24"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="text-white/50 max-w-xl leading-relaxed">{description}</p>
          ) : null}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((service, index) => {
            const Icon = iconMap[service.slug] || Wrench;
            const whatsappUrl = buildWhatsAppUrl(
              service.whatsappText ||
                `Hola EDU MOTORS, quiero informacion sobre ${service.name}.`,
            );

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl border border-white/5 bg-[#0A0F1E] p-7 hover:border-[#0055FF]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 text-[#0055FF] flex items-center justify-center">
                    <Icon size={28} />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${toneMap[service.group] || toneMap.Recurrente}`}
                  >
                    {service.group}
                  </span>
                </div>

                <h3 className="text-white text-xl font-bold italic mb-3">
                  {service.cardTitle || service.name}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  {service.cardDescription}
                </p>

                <div className="space-y-3 mb-6">
                  {service.problemQueries?.slice(0, 2).map((query) => (
                    <div
                      key={query}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#39FF14] shrink-0" />
                      <span>{query}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`/servicios/${service.slug}`}
                    onClick={() =>
                      trackEvent("click_cta_principal", {
                        location: "service_grid",
                        service: service.slug,
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 bg-[#39FF14] text-black px-5 py-3 rounded-2xl font-black text-sm uppercase tracking-wide hover:bg-[#32e012] transition-all"
                  >
                    {ctaLabel}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("click_whatsapp", {
                        location: "service_grid",
                        service: service.slug,
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/75 px-5 py-3 rounded-2xl font-bold text-sm hover:border-[#0055FF]/40 hover:text-white transition-all"
                  >
                    WhatsApp
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
