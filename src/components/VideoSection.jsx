import React from "react";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Auto no arranca: revision paso a paso",
    thumbnail:
      "https://images.unsplash.com/photo-1486006396193-47106858e75a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Conversion GNV para auto de trabajo",
    thumbnail:
      "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Check engine y diagnostico real",
    thumbnail:
      "https://images.unsplash.com/photo-1517524204709-440d89f24824?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Mantenimiento para bajar consumo",
    thumbnail:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
];

const VideoSection = () => {
  return (
    <section className="py-24 bg-[#0A0F1E] border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white italic">
            Contenido que ataca{" "}
            <span className="text-[#39FF14]">problemas reales</span>
          </h2>
          <p className="text-white/40 mt-2 max-w-2xl mx-auto leading-relaxed">
            Estas piezas sirven para TikTok, Reels o futuros embeds con casos que
            convierten mejor porque hablan del sintoma y no del ego del taller.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-3xl overflow-hidden relative group border border-white/5 bg-[#070B16]"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Play fill="white" className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[#39FF14] text-[10px] font-bold uppercase tracking-widest mb-1 block">
                    Contenido para conversion
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
