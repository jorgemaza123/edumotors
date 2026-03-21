import React from "react";
import { useParams } from "react-router";
import IntentLandingPage from "../../../components/IntentLandingPage";
import { getComparisonBySlug } from "../../../content/seoExpansionContent";

export function meta({ params }) {
  const item = getComparisonBySlug(params.slug || "");
  const currentUrl = `https://edumotors.pe/comparativas/${params.slug}`;

  if (!item) {
    return [
      { title: "Comparativas automotrices en Lima Sur | EDU MOTORS" },
      {
        name: "description",
        content:
          "Comparativas para decisiones de diagnostico, ahorro y reparacion en Lima Sur.",
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

export default function ComparisonDetailPage() {
  const { slug } = useParams();
  const item = getComparisonBySlug(slug || "");

  if (!item) {
    return null;
  }

  return (
    <IntentLandingPage
      item={item}
      path={`/comparativas/${item.slug}`}
      eyebrow="Comparativa comercial"
      cardsEyebrow="Criterios que importan"
      sectionsEyebrow="Como decidir sin adivinar"
      quickFormEyebrow="Decision guiada"
      quickFormTitle={`Cuentanos tu caso para comparar mejor: ${item.heroTitle.toLowerCase()}`}
      quickFormSubtitle="Describe tu uso, tu objetivo o tu sintoma y te ayudamos a comparar con criterio real."
    />
  );
}
