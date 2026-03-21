import React from "react";
import IntentHubPage from "../../components/IntentHubPage";
import { pricePages } from "../../content/seoExpansionContent";

export function meta() {
  const currentUrl = "https://edumotors.pe/precios";

  return [
    {
      title:
        "Precios automotrices en Lima Sur | Diagnostico, motor, bomba, GNV y GLP | EDU MOTORS",
    },
    {
      name: "description",
      content:
        "Paginas de precio orientadas a conversion: diagnostico automotriz, reparacion de motor, bomba de gasolina, GNV y GLP en Lima Sur.",
    },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function PricesPage() {
  return (
    <IntentHubPage
      eyebrow="Cluster de precio"
      title="Paginas de precio pensadas para vender, no solo para responder cuanto cuesta"
      description="El objetivo no es dar un numero vacio: es llevar la consulta de precio hacia una decision mejor orientada y una conversion mas fuerte."
      items={pricePages}
      basePath="/precios"
      ctaTitle="Si el precio te preocupa, primero aterriza bien la falla o la inversion"
      ctaDescription="Escribenos por WhatsApp con tu sintoma o tu objetivo de ahorro y te ayudamos a encajar el precio con tu caso real."
      ctaButton="Quiero orientacion sobre precio"
      whatsappText="Hola EDU MOTORS, quiero orientacion sobre precio para mi auto."
    />
  );
}
