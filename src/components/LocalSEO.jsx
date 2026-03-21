import React from "react";
import { MapPin } from "lucide-react";
import { zoneLinks } from "../content/automotiveContent";

const LocalSEO = () => {
  return (
    <section className="py-16 bg-[#070B16] border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
          Cobertura local
        </span>
        <h2 className="text-2xl md:text-4xl font-black text-white mt-2 mb-4 italic">
          Atendemos en <span className="text-[#0055FF]">Lima Sur</span>
        </h2>
        <p className="text-white/45 max-w-2xl mx-auto mb-10 leading-relaxed">
          Esta estructura ayuda tanto al usuario que busca cerca de su zona como
          a Google a entender que el servicio esta orientado a Villa El Salvador,
          San Juan de Miraflores, Villa Maria del Triunfo, Lurin y alrededores.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {zoneLinks.map((zone) => (
            <a
              key={zone.slug}
              href={`/zonas/${zone.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:border-[#0055FF]/40 hover:text-white transition-all"
            >
              <MapPin size={12} className="text-[#0055FF]" />
              {zone.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalSEO;
