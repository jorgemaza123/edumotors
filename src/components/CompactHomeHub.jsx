import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Gauge,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  ScanSearch,
  Settings2,
  Wrench,
} from "lucide-react";
import {
  buildWhatsAppUrl,
  businessData,
  getServiceBySlug,
  zoneLinks,
} from "../content/automotiveContent";

const problemRoutes = [
  {
    href: "/problemas/auto-no-arranca",
    title: "Auto no arranca",
    description: "Entra directo si necesitas orientacion hoy mismo.",
  },
  {
    href: "/problemas/falla-al-acelerar",
    title: "Falla al acelerar",
    description: "Ideal si pierde fuerza, tironea o responde mal.",
  },
  {
    href: "/problemas/check-engine-encendido",
    title: "Check engine",
    description: "Para escaneo, sensores y diagnostico sin adivinar.",
  },
  {
    href: "/problemas/consume-mucho-combustible",
    title: "Consume mucho",
    description: "Mantenimiento, inyectores, sensores o conversion.",
  },
];

const ahorroRoutes = [
  {
    href: "/servicios/conversion-gnv",
    title: "Conversion a GNV",
    description: "Si buscas bajar gasto mensual con kilometraje alto.",
  },
  {
    href: "/servicios/conversion-glp",
    title: "Conversion a GLP",
    description: "Alternativa para ahorro con una inversion menor.",
  },
  {
    href: "/precios/conversion-gnv-lima-precio",
    title: "Precios de conversion",
    description: "Revisa orientacion comercial antes de decidir.",
  },
  {
    href: "/comparativas/gnv-vs-glp",
    title: "GNV vs GLP",
    description: "Compara retorno, uso y conveniencia real.",
  },
];

const tabs = [
  {
    id: "urgencias",
    label: "Urgencias",
    icon: ScanSearch,
    title: "Entra por el sintoma real del auto",
    description:
      "Cuando el problema es urgente, la home no debe hacerte bajar veinte pantallas. Toca el problema y entra al camino correcto.",
  },
  {
    id: "servicios",
    label: "Servicios",
    icon: Wrench,
    title: "Servicios que mas convierten",
    description:
      "Solo mostramos lo que mueve dinero: diagnostico, motor, combustible, mantenimiento y conversion.",
  },
  {
    id: "ahorro",
    label: "GNV / GLP",
    icon: Gauge,
    title: "Opciones de ahorro y alto ticket",
    description:
      "Para conductores que usan el auto para trabajar o quieren bajar costo por kilometro.",
  },
  {
    id: "llegar",
    label: "Como llegar",
    icon: MapPin,
    title: "Contacto rapido y ubicacion real",
    description:
      "Llamar, escribir o abrir Google Maps debe tomar un toque, no una busqueda extra.",
  },
];

function HubCard({ href, title, description }) {
  return (
    <a
      href={href}
      className="group rounded-[1.75rem] border border-white/[0.08] bg-[#070B16] p-5 transition-all hover:border-[#0055FF]/35 hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-lg italic mb-2">{title}</h3>
          <p className="text-white/55 text-sm leading-relaxed">{description}</p>
        </div>
        <ArrowRight
          size={18}
          className="text-[#39FF14] shrink-0 transition-transform group-hover:translate-x-1"
        />
      </div>
    </a>
  );
}

export default function CompactHomeHub() {
  const [activeTab, setActiveTab] = useState("urgencias");

  const mainServices = useMemo(
    () =>
      [
        "diagnostico",
        "reparacion-motores",
        "bomba-gasolina",
        "mantenimiento-general",
      ]
        .map((slug) => getServiceBySlug(slug))
        .filter(Boolean)
        .map((service) => ({
          href: `/servicios/${service.slug}`,
          title: service.name,
          description: service.cardDescription,
        })),
    [],
  );

  const activeMeta = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  const whatsappUrl = buildWhatsAppUrl(
    "Hola EDU MOTORS, necesito una orientacion rapida para mi vehiculo.",
  );

  return (
    <section className="py-14 md:py-20 bg-[#070B16] border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
            Ruta de conversion
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2 mb-4">
            Menos scroll. Mas decisiones rapidas.
          </h2>
          <p className="text-white/55 leading-relaxed">
            Esta portada esta pensada para que el cliente entre por urgencia,
            servicio, ahorro o ubicacion sin perderse en una landing eterna.
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 md:justify-center md:flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? "border-[#39FF14]/40 bg-[#39FF14]/10 text-[#39FF14]"
                    : "border-white/10 bg-white/[0.03] text-white/65 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/[0.08] bg-[#0A0F1E] p-6 md:p-8">
          <div className="max-w-3xl mb-6">
            <h3 className="text-2xl md:text-4xl font-black text-white italic mb-3">
              {activeMeta.title}
            </h3>
            <p className="text-white/55 leading-relaxed">{activeMeta.description}</p>
          </div>

          {activeTab === "urgencias" ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {problemRoutes.map((item) => (
                <HubCard key={item.href} {...item} />
              ))}
            </div>
          ) : null}

          {activeTab === "servicios" ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {mainServices.map((item) => (
                <HubCard key={item.href} {...item} />
              ))}
            </div>
          ) : null}

          {activeTab === "ahorro" ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {ahorroRoutes.map((item) => (
                <HubCard key={item.href} {...item} />
              ))}
            </div>
          ) : null}

          {activeTab === "llegar" ? (
            <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-4">
              <div className="rounded-[1.75rem] border border-white/[0.08] bg-[#070B16] p-5">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={18} className="text-[#39FF14] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">
                      Ubicacion real del taller
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {businessData.address}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#39FF14] px-4 py-3 text-sm font-black text-black"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${businessData.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-white"
                  >
                    <Phone size={16} />
                    Llamar
                  </a>
                  <a
                    href={businessData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#0055FF]/30 bg-[#0055FF]/10 px-4 py-3 text-sm font-bold text-[#7fb0ff]"
                  >
                    <Route size={16} />
                    Google Maps
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/[0.08] bg-[#070B16] p-5">
                <div className="flex items-center gap-2 text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-4">
                  <Settings2 size={14} />
                  Zonas atendidas
                </div>
                <div className="flex flex-wrap gap-3 mb-5">
                  {zoneLinks.slice(0, 4).map((zone) => (
                    <a
                      key={zone.slug}
                      href={`/zonas/${zone.slug}`}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-bold text-white/75"
                    >
                      {zone.shortName}
                    </a>
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Si estas en Villa El Salvador, SJM, VMT o Lurin, entra por tu
                  zona o escribe directo. La prioridad es cerrar el siguiente
                  paso rapido.
                </p>
              </div>
            </div>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-white/45 text-sm">
              Si no sabes por donde entrar, empieza por diagnostico y te guiamos
              sin hacerte perder tiempo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/servicios/diagnostico"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white"
              >
                Ver diagnostico
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#39FF14] px-4 py-2 text-sm font-black text-black"
              >
                Resolver por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
