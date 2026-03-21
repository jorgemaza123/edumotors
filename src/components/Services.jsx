import React from "react";
import ServiceCardsSection from "./ServiceCardsSection";
import { getServiceCatalog, hiddenServices } from "../content/automotiveContent";

const services = getServiceCatalog();

const featuredServices = services.filter((service) =>
  [
    "reparacion-motores",
    "bomba-gasolina",
    "diagnostico",
    "conversion-gnv",
    "conversion-glp",
    "mantenimiento-general",
  ].includes(service.slug),
);

const Services = () => {
  return (
    <>
      <ServiceCardsSection
        eyebrow="Servicios con intencion real"
        title="Lo que mas pide un cliente cuando su auto falla"
        description="Organizamos la oferta para captar desde la urgencia, la consulta de entrada y el servicio de alto ticket sin mezclar mensajes."
        items={featuredServices}
        ctaLabel="Ver servicio"
      />

      <section className="py-16 bg-[#0A0F1E] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
                Servicios ocultos que venden
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-white italic mt-2">
                Fallas relacionadas que el cliente no nombra, pero si necesita
              </h3>
            </div>
            <p className="text-white/45 max-w-xl leading-relaxed">
              Si alguien busca motor, muchas veces tambien necesita sensores,
              inyectores, bomba, escaneo o revision electrica. Aqui es donde se
              gana conversion y ticket promedio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {hiddenServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/5 bg-[#070B16] px-5 py-5"
              >
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
