import React from "react";
import IntentHubPage from "../../components/IntentHubPage";
import { localIntentPages } from "../../content/localIntentContent";

export function meta() {
  const currentUrl = "https://edumotors.pe/local";

  return [
    {
      title:
        "SEO local automotriz en Lima Sur | Sintoma + zona con intencion real | EDU MOTORS",
    },
    {
      name: "description",
      content:
        "Paginas locales que cruzan sintomas automotrices con zonas de Lima Sur para captar clientes con urgencia real: auto no arranca, check engine, consumo alto, temperatura y mas.",
    },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function LocalIntentHubPage() {
  return (
    <IntentHubPage
      eyebrow="Cluster local"
      title="Paginas hiperlocales para convertir cuando la busqueda ya trae sintoma y zona"
      description="Aqui cruzamos problema + ubicacion para competir mejor en Lima Sur sin duplicar el contenido principal de sintomas ni de zonas."
      items={localIntentPages}
      basePath="/local"
      ctaTitle="Si tu auto falla y ya sabes tu zona, el siguiente paso es hablar claro"
      ctaDescription="Escribenos por WhatsApp con el sintoma exacto y tu zona para orientarte rapido hacia diagnostico, combustible, motor o ahorro."
      ctaButton="Quiero ayuda segun mi zona"
      whatsappText="Hola EDU MOTORS, quiero orientacion local para la falla de mi auto."
    />
  );
}
