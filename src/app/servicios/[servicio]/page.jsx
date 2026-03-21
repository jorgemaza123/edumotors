import React from "react";
import { useParams } from "react-router";
import ServiceLandingPage from "../../../components/ServiceLandingPage";
import { getServiceBySlug } from "../../../content/automotiveContent";

export function meta({ params }) {
  const service = getServiceBySlug(params.servicio || "");
  const currentUrl = `https://edumotors.pe/servicios/${params.servicio}`;

  if (!service) {
    return [
      { title: "Servicio automotriz en Lima Sur | EDU MOTORS" },
      {
        name: "description",
        content:
          "Servicio automotriz en Lima Sur para diagnostico, motor, combustible, GNV, GLP y mantenimiento.",
      },
      { rel: "canonical", href: currentUrl },
    ];
  }

  return [
    { title: service.metaTitle },
    { name: "description", content: service.metaDescription },
    { property: "og:title", content: service.metaTitle },
    { property: "og:description", content: service.metaDescription },
    { property: "og:url", content: currentUrl },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: service.metaTitle },
    { name: "twitter:description", content: service.metaDescription },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function ServicePage() {
  const { servicio } = useParams();
  const service = getServiceBySlug(servicio || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-4xl font-black italic mb-4">Servicio no encontrado</h1>
          <p className="text-white/55 mb-8">
            Revisa nuestros servicios principales o escribenos por WhatsApp para orientar la falla.
          </p>
          <a
            href="/servicios"
            className="inline-flex items-center justify-center bg-[#39FF14] text-black px-8 py-4 rounded-full font-black uppercase tracking-wider"
          >
            Ver servicios
          </a>
        </div>
      </div>
    );
  }

  return <ServiceLandingPage service={service} />;
}
