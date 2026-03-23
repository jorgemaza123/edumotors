import React from "react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppUrl, businessData } from "../content/automotiveContent";

export default function MobileActionBar({
  whatsappText = "Hola EDU MOTORS, necesito ayuda con mi auto.",
}) {
  const whatsappUrl = buildWhatsAppUrl(whatsappText);

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-[1.5rem] border border-white/10 bg-[#050913]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-[1rem] bg-[#39FF14] px-3 py-3 text-[11px] font-black uppercase tracking-wide text-black"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href={`tel:${businessData.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 rounded-[1rem] border border-white/10 px-3 py-3 text-[11px] font-bold uppercase tracking-wide text-white"
        >
          <Phone size={18} />
          Llamar
        </a>
        <a
          href={businessData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-[1rem] border border-[#0055FF]/30 bg-[#0055FF]/10 px-3 py-3 text-[11px] font-bold uppercase tracking-wide text-[#8eb8ff]"
        >
          <MapPin size={18} />
          Llegar
        </a>
      </div>
    </div>
  );
}
