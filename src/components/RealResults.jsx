import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Play } from "lucide-react";
import { trackEvent } from "../utils/analytics";

const cases = [
  {
    id: 1,
    title: "Caso: auto que no arrancaba en Villa El Salvador",
    before:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1487750148645-909848360975?q=80&w=600&auto=format&fit=crop",
    desc: "Se reviso alimentacion, arranque y sensor para confirmar la causa antes de cotizar.",
  },
  {
    id: 2,
    title: "Caso: ahorro para auto de trabajo en Lima Sur",
    before:
      "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?q=80&w=600&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1619641782842-83d2845c4519?q=80&w=600&auto=format&fit=crop",
    desc: "Primero se ordeno el estado base del vehiculo y luego se evaluo la mejor ruta para bajar gasto.",
  },
];

const videos = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop",
  },
];

const RealResults = () => {
  const [activeTab, setActiveTab] = useState("casos");

  return (
    <section className="py-24 bg-[#070B16] relative overflow-hidden" id="resultados">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
            Casos y contenido
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2">
            Señales para vender mejor{" "}
            <span className="text-[#0055FF]">servicios automotrices</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            Casos, historias de problema-solucion y piezas de video para reforzar
            confianza sin caer en claims inflados.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("casos")}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              activeTab === "casos"
                ? "bg-[#0055FF] text-white shadow-[0_0_20px_rgba(0,85,255,0.4)]"
                : "bg-white/5 text-white/40 hover:text-white"
            }`}
          >
            Casos problema-solucion
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              activeTab === "videos"
                ? "bg-[#0055FF] text-white shadow-[0_0_20px_rgba(0,85,255,0.4)]"
                : "bg-white/5 text-white/40 hover:text-white"
            }`}
          >
            Videos cortos
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "casos" ? (
            <motion.div
              key="casos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {cases.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0A0F1E] border border-white/5 rounded-3xl overflow-hidden group"
                >
                  <div className="relative aspect-video flex">
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={item.before}
                        alt="Antes"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase text-white/80 border border-white/10">
                        Sintoma
                      </div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden border-l-2 border-[#39FF14]">
                      <img
                        src={item.after}
                        alt="Despues"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 right-4 bg-[#39FF14] px-3 py-1 rounded-md text-[10px] font-bold uppercase text-black">
                        Solucion
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 italic flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-[#39FF14]" />
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/5 group bg-[#0A0F1E] cursor-pointer"
                  onClick={() => trackEvent("click_video", { video_id: vid.id })}
                >
                  <img
                    src={vid.thumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#0055FF] transition-all group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,85,255,0.5)]">
                      <Play fill="white" size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="aspect-[9/16] rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center p-6 bg-white/5 group hover:bg-[#0055FF]/5 transition-all">
                <p className="text-white/20 text-sm font-bold uppercase tracking-widest group-hover:text-white/40">
                  Mas contenido de problemas reales para RRSS y landings
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RealResults;
