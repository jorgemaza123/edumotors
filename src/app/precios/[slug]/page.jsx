import React from "react";
import { useParams } from "react-router";
import IntentLandingPage from "../../../components/IntentLandingPage";
import { getPricePageBySlug } from "../../../content/seoExpansionContent";

export function meta({ params }) {
  const item = getPricePageBySlug(params.slug || "");
  const currentUrl = `https://edumotors.pe/precios/${params.slug}`;

  if (!item) {
    return [
      { title: "Precios automotrices en Lima Sur | EDU MOTORS" },
      {
        name: "description",
        content:
          "Paginas de precio para diagnostico, motor, bomba de gasolina y conversiones a gas en Lima Sur.",
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

export default function PriceDetailPage() {
  const { slug } = useParams();
  const item = getPricePageBySlug(slug || "");

  if (!item) {
    return null;
  }

  return (
    <IntentLandingPage
      item={item}
      path={`/precios/${item.slug}`}
      eyebrow="Busqueda de precio"
      cardsEyebrow="Que cambia el costo"
      sectionsEyebrow="Como evaluar el precio"
      quickFormEyebrow="Cotizacion guiada"
      quickFormTitle={`Cuentanos tu caso para orientar el precio de ${item.heroTitle.toLowerCase()}`}
      quickFormSubtitle="Describe tu vehiculo, el sintoma o tu objetivo y te ayudamos a aterrizar el rango correcto."
    />
  );
}
