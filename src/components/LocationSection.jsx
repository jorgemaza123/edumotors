import { Clock, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { buildWhatsAppUrl } from "../content/automotiveContent";
import { trackEvent } from "../utils/analytics";

const points = [
  "Ubicacion comoda para clientes de Villa El Salvador, SJM, VMT y Lurin.",
  "Ideal para quienes necesitan una revision rapida en Lima Sur.",
  "Puedes escribir primero por WhatsApp y llegar con el problema mejor definido.",
];

const LocationSection = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola EDU MOTORS, quiero llegar hoy al taller y necesito ubicacion.",
  );

  return (
    <section className="py-24 bg-[#0A0F1E] relative overflow-hidden" id="ubicacion">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
            Ubicacion y cobertura
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2">
            Taller en <span className="text-[#0055FF]">Villa El Salvador</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed">
            La ubicacion tambien vende: ayuda al cliente a confirmar que el taller
            esta cerca, que puede ir hoy y que atiende su zona de Lima Sur.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => trackEvent("click_mapa")}
            className="relative rounded-3xl overflow-hidden border border-white/10 h-[450px] shadow-[0_0_50px_rgba(0,85,255,0.1)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15594.364402636!2d-76.9427357!3d-12.2032047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b0d0d0d0d0d0%3A0x0!2sVilla%20El%20Salvador%2C%20Lima!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion EDU MOTORS"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="bg-[#070B16] border border-white/5 p-8 rounded-3xl hover:border-[#0055FF]/20 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Direccion</h3>
                  <p className="text-white/50 text-sm">
                    Av. Principal S/N (cerca a Panamericana Sur), Villa El Salvador, Lima.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Horario</h3>
                  <p className="text-white/50 text-sm">Lunes a Sabado: 8:00 AM - 6:00 PM</p>
                  <p className="text-white/50 text-sm italic">Domingos: Cerrado</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Telefono</h3>
                  <p className="text-white/50 text-sm font-bold tracking-wider">960 812 600</p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_cta_principal", { location: "map_section" })}
                className="w-full bg-[#39FF14] text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)]"
              >
                <Send size={18} />
                Quiero llegar hoy / consultar
              </a>
            </div>

            <div className="grid gap-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="p-5 rounded-2xl border border-white/5 bg-white/5 text-white/55 text-sm"
                >
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
