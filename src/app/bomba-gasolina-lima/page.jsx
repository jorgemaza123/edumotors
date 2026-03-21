import React from "react";
import ServiceLandingPage from "../../components/ServiceLandingPage";
import { getServiceBySlug } from "../../content/automotiveContent";

const service = getServiceBySlug("bomba-gasolina");

export function meta() {
  return [
    { title: "Bomba de gasolina en Lima Sur | EDU MOTORS" },
    {
      name: "description",
      content:
        "Landing alternativa de bomba de gasolina. La version principal vive en /servicios/bomba-gasolina.",
    },
    { name: "robots", content: "noindex, follow" },
    { rel: "canonical", href: "https://edumotors.pe/servicios/bomba-gasolina" },
  ];
}

export default function BombaGasolinaLima() {
  return <ServiceLandingPage service={service} />;
}
