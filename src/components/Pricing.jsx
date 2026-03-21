import React from "react";
import { motion } from "motion/react";
import { HelpCircle, Tag } from "lucide-react";
import { buildWhatsAppUrl } from "../content/automotiveContent";

const prices = [
  {
    name: "Orientacion inicial por WhatsApp",
    price: "Gratis",
    detail: "Ideal si todavia no sabes si el problema es motor, combustible o sensores.",
  },
  {
    name: "Escaneo y diagnostico base",
    price: "Desde S/ 50",
    detail: "Entrada recomendada para check engine, fallas intermitentes y perdida de potencia.",
  },
  {
    name: "Mantenimiento preventivo",
    price: "Desde S/ 120",
    detail: "Pensado para bajar riesgo de falla y corregir consumo alto.",
  },
  {
    name: "Conversion a GNV",
    price: "Desde S/ 2,800",
    detail: "Servicio alto ticket para quien necesita ahorrar por kilometraje.",
  },
];

const Pricing = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola EDU MOTORS, quisiera una cotizacion exacta para mi vehiculo.",
  );

  return (
    <section id="precios" className="py-24 bg-[#0A0F1E] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white italic">
                Precios <span className="text-[#39FF14]">que ayudan a decidir</span>
              </h2>
              <p className="text-white/40 mt-2 leading-relaxed">
                Mostramos rangos de entrada para reducir friccion sin prometer
                algo que dependa del vehiculo real.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <HelpCircle size={16} /> Consultar precio exacto por WhatsApp
            </a>
          </div>

          <div className="grid gap-4">
            {prices.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF]">
                    <Tag size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold italic">{item.name}</h3>
                    <p className="text-white/40 text-xs">{item.detail}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-8">
                  <div className="text-right">
                    <span className="text-white/40 text-xs block uppercase tracking-widest font-bold">
                      Desde
                    </span>
                    <span className="text-2xl font-bold text-[#39FF14] italic">
                      {item.price}
                    </span>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10"
                  >
                    Cotizar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-white/30 text-[10px] uppercase tracking-[0.2em]">
            Precios sujetos a evaluacion tecnica del vehiculo y disponibilidad
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
