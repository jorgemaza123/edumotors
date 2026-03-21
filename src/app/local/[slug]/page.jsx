import React from "react";
import { useParams } from "react-router";
import IntentLandingPage from "../../../components/IntentLandingPage";
import { getZoneBySlug } from "../../../content/automotiveContent";
import {
  getLocalIntentBySlug,
  getLocalIntentsBySymptom,
  getLocalIntentsByZone,
} from "../../../content/localIntentContent";

export function meta({ params }) {
  const item = getLocalIntentBySlug(params.slug || "");
  const currentUrl = `https://edumotors.pe/local/${params.slug}`;

  if (!item) {
    return [
      { title: "Paginas locales automotrices en Lima Sur | EDU MOTORS" },
      {
        name: "description",
        content:
          "Contenido local para sintomas automotrices y zonas de Lima Sur.",
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

export default function LocalIntentPage() {
  const { slug } = useParams();
  const item = getLocalIntentBySlug(slug || "");

  if (!item) {
    return null;
  }

  const zone = getZoneBySlug(item.zoneSlug);
  const sameSymptomEntries = getLocalIntentsBySymptom(item.symptomSlug)
    .filter((entry) => entry.slug !== item.slug)
    .slice(0, 3);
  const sameZoneEntries = getLocalIntentsByZone(item.zoneSlug)
    .filter((entry) => entry.slug !== item.slug)
    .slice(0, 3);
  const relatedEntries =
    sameSymptomEntries.length > 0 ? sameSymptomEntries : sameZoneEntries;
  const relatedEntriesTitle =
    sameSymptomEntries.length > 0
      ? "Esta misma falla tambien se esta buscando en otras zonas"
      : `Otras consultas de alta intencion en ${zone.name}`;
  const relatedEntriesDescription =
    sameSymptomEntries.length > 0
      ? "Estas variantes ayudan a reforzar el dominio local del sintoma sin repetir el mismo contenido base."
      : `Estas paginas refuerzan la cobertura de ${zone.name} con problemas reales que suelen convertirse rapido.`;

  return (
    <IntentLandingPage
      item={item}
      path={`/local/${item.slug}`}
      showLocalSEO={false}
      relatedEntries={relatedEntries}
      relatedEntriesEyebrow="Cobertura local"
      relatedEntriesTitle={relatedEntriesTitle}
      relatedEntriesDescription={relatedEntriesDescription}
      relatedEntriesBasePath="/local"
      quickFormEyebrow={`Orientacion en ${zone.name}`}
      quickFormTitle={`Cuentanos que pasa con tu auto en ${zone.name}`}
      quickFormSubtitle="Describe el patron exacto y te orientamos por WhatsApp para definir rapido la revision correcta."
    />
  );
}
