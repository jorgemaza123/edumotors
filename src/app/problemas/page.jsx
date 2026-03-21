import React from "react";
import IntentHubPage from "../../components/IntentHubPage";
import { symptomPages } from "../../content/seoExpansionContent";

export function meta() {
  const currentUrl = "https://edumotors.pe/problemas";

  return [
    {
      title:
        "Problemas de autos en Lima Sur | No arranca, falla al acelerar, check engine | EDU MOTORS",
    },
    {
      name: "description",
      content:
        "Guias orientadas a problemas reales de autos en Lima Sur: auto no arranca, se apaga, check engine, pierde potencia, consume mucho y mas.",
    },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function ProblemsPage() {
  return (
    <IntentHubPage
      eyebrow="Cluster de sintomas"
      title="Paginas para captar al cliente cuando todavia piensa en el problema, no en el servicio"
      description="Estas URLs atacan sintomas urgentes y conectan cada busqueda con los servicios que realmente suelen resolverla."
      items={symptomPages}
      basePath="/problemas"
      ctaTitle="Si ya sabes el sintoma, el siguiente paso es orientarlo bien"
      ctaDescription="Escribenos por WhatsApp con el problema exacto y te ayudamos a aterrizar si necesitas diagnostico, combustible, motor o ahorro."
      ctaButton="Quiero orientacion por sintoma"
      whatsappText="Hola EDU MOTORS, quiero orientacion segun el sintoma de mi auto."
    />
  );
}
