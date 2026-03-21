import React from "react";
import { useParams } from "react-router";
import IntentLandingPage from "../../../components/IntentLandingPage";
import { getLocalIntentsBySymptom } from "../../../content/localIntentContent";
import { getSymptomBySlug } from "../../../content/seoExpansionContent";

export function meta({ params }) {
  const item = getSymptomBySlug(params.problema || "");
  const currentUrl = `https://edumotors.pe/problemas/${params.problema}`;

  if (!item) {
    return [
      { title: "Problemas de autos en Lima Sur | EDU MOTORS" },
      {
        name: "description",
        content:
          "Guias de sintomas y problemas reales para autos en Lima Sur.",
      },
      { rel: "canonical", href: currentUrl },
    ];
  }

  return [
    { title: item.metaTitle },
    { name: "description", content: item.metaDescription },
    { property: "og:title", content: item.metaTitle },
    { property: "og:description", content: item.metaDescription },
    { property: "og:url", content: currentUrl },
    { rel: "canonical", href: currentUrl },
  ];
}

export default function ProblemPage() {
  const { problema } = useParams();
  const item = getSymptomBySlug(problema || "");

  if (!item) {
    return null;
  }

  const localVariants = getLocalIntentsBySymptom(item.slug).slice(0, 4);

  return (
    <IntentLandingPage
      item={item}
      path={`/problemas/${item.slug}`}
      relatedEntries={localVariants}
      relatedEntriesEyebrow="Versiones locales"
      relatedEntriesTitle="Donde esta misma falla ya se esta buscando en Lima Sur"
      relatedEntriesDescription="Estas combinaciones de sintoma + zona refuerzan la intencion local y ayudan a capturar al cliente que quiere resolver hoy, no solo informarse."
      relatedEntriesBasePath="/local"
    />
  );
}
