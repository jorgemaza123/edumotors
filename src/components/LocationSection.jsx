import { Clock, MapPin, Navigation, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import {
  buildWhatsAppUrl,
  businessData,
} from "../content/automotiveContent";
import { trackEvent } from "../utils/analytics";

const points = [
  "Ubicacion real para clientes de Villa El Salvador y zonas cercanas.",
  "Ideal para quien necesita decidir rapido si va hoy o agenda revision.",
  "Puedes abrir Google Maps o escribir por WhatsApp antes de salir.",
];

const mapEmbedUrl = `https://www.google.com/maps?q=${businessData.latitude},${businessData.longitude}&z=17&output=embed`;

const LocationSection = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola EDU MOTORS, quiero llegar hoy al taller y necesito ubicacion.",
  );

  return (
    <section className="py-16 md:py-20 bg-[#0A0F1E] relative overflow-hidden" id="ubicacion">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
            Ubicacion y cobertura
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2">
            Llega al taller sin perder tiempo
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed">
            En movil conviene mas un bloque corto con direccion, llamada y Google
            Maps que un mapa gigante. Lo importante es que el cliente llegue o
            escriba.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            <div className="bg-[#070B16] border border-white/5 p-6 md:p-8 rounded-3xl hover:border-[#0055FF]/20 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Direccion</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {businessData.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Horario</h3>
                  <p className="text-white/50 text-sm">Lunes a Sabado: 8:00 AM - 6:00 PM</p>
                  <p className="text-white/50 text-sm italic">Domingos: Cerrado</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Telefono</h3>
                  <p className="text-white/50 text-sm font-bold tracking-wider">
                    {businessData.phoneDisplay}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("click_cta_principal", { location: "map_whatsapp" })}
                  className="bg-[#39FF14] text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)]"
                >
                  <Send size={18} />
                  WhatsApp
                </a>
                <a
                  href={`tel:${businessData.phoneRaw}`}
                  onClick={() => trackEvent("click_cta_principal", { location: "map_call" })}
                  className="border border-white/10 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:border-[#0055FF]/30 transition-all"
                >
                  <Phone size={18} />
                  Llamar
                </a>
                <a
                  href={businessData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("click_mapa")}
                  className="border border-[#0055FF]/30 bg-[#0055FF]/10 text-[#8eb8ff] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation size={18} />
                  Maps
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="p-4 rounded-2xl border border-white/5 bg-white/5 text-white/55 text-sm"
                >
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block rounded-3xl overflow-hidden border border-white/10 min-h-[340px] shadow-[0_0_50px_rgba(0,85,255,0.1)]"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion EDU MOTORS"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
