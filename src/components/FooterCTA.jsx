import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import {
  buildWhatsAppUrl,
  businessData,
  zoneLinks,
} from "../content/automotiveContent";

const mainServices = [
  { href: "/servicios/diagnostico", label: "Diagnostico" },
  { href: "/servicios/reparacion-motores", label: "Motores" },
  { href: "/servicios/bomba-gasolina", label: "Bomba de gasolina" },
  { href: "/servicios/conversion-gnv", label: "Conversion GNV" },
];

const contentHubs = [
  { href: "/problemas", label: "Problemas reales" },
  { href: "/local", label: "Sintoma + zona" },
  { href: "/precios", label: "Precios" },
  { href: "/comparativas", label: "Comparativas" },
  { href: "/blog", label: "Blog de fallas" },
];

const FooterCTA = ({
  title = "No esperes a que la falla te deje sin movilidad",
  description = "Escribenos por WhatsApp y te ayudamos a definir el siguiente paso segun el sintoma real de tu auto.",
  buttonText = "Hablar por WhatsApp ahora",
  whatsappText = "Hola EDU MOTORS, necesito ayuda con mi auto ahora.",
}) => {
  const whatsappUrl = buildWhatsAppUrl(whatsappText);

  return (
    <footer className="bg-[#070B16] pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0055FF]/10 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] bg-gradient-to-b from-[#0A0F1E] to-transparent border border-white/10 shadow-2xl"
          >
            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 italic tracking-tight">
              {title}
            </h2>
            <p className="text-white/60 mb-10 text-lg max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 font-bold text-black transition-all duration-200 bg-[#39FF14] rounded-full shadow-[0_0_40px_rgba(57,255,20,0.5)] hover:shadow-[0_0_60px_rgba(57,255,20,0.7)] hover:scale-105 text-xl"
            >
              {buttonText}
            </a>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/40 text-sm font-bold uppercase tracking-widest">
              <span>Respuesta rapida</span>
              <span>Diagnostico orientado a la falla</span>
              <span>Atencion en Lima Sur</span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 border-t border-white/5 pt-16 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#0055FF] rounded flex items-center justify-center font-bold text-white italic">
                EM
              </div>
              <span className="text-white font-bold text-2xl tracking-tight italic">
                EDU MOTORS
              </span>
            </a>
            <p className="text-white/40 max-w-md leading-relaxed">
              Taller automotriz en Lima Sur orientado a captar y resolver
              clientes con urgencia real: diagnostico, motor, combustible, GNV,
              GLP y mantenimiento.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">
              Servicios clave
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              {mainServices.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">
              Contenido SEO
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              {contentHubs.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">
              Zonas y contacto
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              {zoneLinks.slice(0, 4).map((zone) => (
                <li key={zone.slug}>
                  <a
                    href={`/zonas/${zone.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {zone.name}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2 text-white/60 pt-2">
                <MapPin size={16} className="text-[#0055FF] shrink-0 mt-0.5" />
                <span>{businessData.address}</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Phone size={16} className="text-[#0055FF] shrink-0" />
                <a href={`tel:${businessData.phoneRaw}`}>{businessData.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
          &copy; 2026 EDU MOTORS LIMA SUR. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
