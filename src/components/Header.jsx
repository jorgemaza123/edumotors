import React from "react";
import { Phone } from "lucide-react";
import { buildWhatsAppUrl, businessData } from "../content/automotiveContent";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/problemas", label: "Problemas" },
  { href: "/zonas/villa-el-salvador", label: "Zonas" },
  { href: "/local", label: "Local" },
  { href: "/precios", label: "Precios" },
  { href: "/servicios/conversion-gnv", label: "GNV / GLP" },
  { href: "/blog", label: "Blog" },
];

const Header = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola EDU MOTORS, necesito un diagnostico para mi vehiculo.",
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#0055FF] rounded flex items-center justify-center font-bold text-white italic">
            EM
          </div>
          <span className="text-white font-bold text-xl tracking-tight italic">
            EDU MOTORS
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-white/70 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${businessData.phoneRaw}`}
            className="hidden sm:flex items-center gap-2 text-white font-bold text-sm"
          >
            <Phone size={16} className="text-[#0055FF]" />
            {businessData.phoneDisplay}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#39FF14] text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#32e012] transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)]"
          >
            Diagnostico por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
