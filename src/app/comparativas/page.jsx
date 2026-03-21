import React from "react";
import IntentHubPage from "../../components/IntentHubPage";
import { comparisonPages } from "../../content/seoExpansionContent";

export function meta() {
  const currentUrl = "https://edumotors.pe/comparativas";

  return [
    {
      title:
        "Comparativas automotrices en Lima Sur | GNV vs GLP, diagnostico vs piezas y mas | EDU MOTORS",
    },
    {
      name: "description",
      content:
        "Comparativas orientadas a conversion y decision: GNV vs GLP, diagnostico vs cambiar piezas, reparar vs cambiar motor y mas.",
    },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function ComparisonsPage() {
  return (
    <IntentHubPage
      eyebrow="Cluster de comparativas"
      title="Paginas para capturar usuarios que ya estan comparando opciones y mas cerca de decidir"
      description="Estas comparativas sirven para romper objeciones, filtrar mejor la intención y mover al usuario hacia WhatsApp con una decisión más madura."
      items={comparisonPages}
      basePath="/comparativas"
      ctaTitle="Comparar bien hoy evita gastar mal mañana"
      ctaDescription="Escribenos por WhatsApp si estas entre dos caminos y te ayudamos a decidir con criterio tecnico y comercial."
      ctaButton="Quiero ayuda para comparar"
      whatsappText="Hola EDU MOTORS, estoy comparando opciones para mi auto y quiero orientacion."
    />
  );
}
