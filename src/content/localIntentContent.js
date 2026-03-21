import { getZoneBySlug } from "./automotiveContent";
import { getSymptomBySlug } from "./seoExpansionContent";

const localIntentSeeds = [
  {
    slug: "auto-no-arranca-villa-el-salvador",
    symptomSlug: "auto-no-arranca",
    zoneSlug: "villa-el-salvador",
    problemLabel: "no arranca",
    localSummary:
      "Alta prioridad para vecinos y unidades de trabajo en Villa El Salvador que necesitan volver a moverse rapido.",
    localBullets: [
      "En Villa El Salvador este problema suele llegar con urgencia porque el auto se usa para trabajo diario o traslados constantes.",
      "La primera pregunta comercial es si el motor gira o no, porque eso cambia totalmente la ruta entre bateria, arranque, combustible o sensor.",
      "Si ya intentaste pasar corriente y sigue igual, conviene ir directo a una orientacion mas seria.",
    ],
    localFaq: [
      {
        question: "Si mi auto no arranca en Villa El Salvador, que revisan primero?",
        answer:
          "Primero filtramos si el problema apunta a bateria, arranque, combustible o sensor, segun como se comporte al dar llave.",
      },
    ],
  },
  {
    slug: "auto-no-arranca-sjm",
    symptomSlug: "auto-no-arranca",
    zoneSlug: "san-juan-de-miraflores",
    problemLabel: "no arranca",
    localSummary:
      "Busqueda hiperlocal para San Juan de Miraflores con fuerte intención de resolución inmediata.",
    localBullets: [
      "En SJM es muy comun que el cliente llegue diciendo solo 'no prende'; por eso el filtrado rapido de sintomas es clave.",
      "Si el tablero prende pero no arranca, muchas veces la ruta se mueve hacia combustible, sensor CKP o chispa.",
      "Si el auto se usa todos los dias, la urgencia comercial sube aunque la falla aparezca solo en frio.",
    ],
    localFaq: [
      {
        question: "En SJM atienden autos que fallan solo por las mañanas?",
        answer:
          "Si. Ese patron es bastante comun y ayuda a orientar si la falla esta en bateria, sensor, combustible o encendido.",
      },
    ],
  },
  {
    slug: "check-engine-sjm",
    symptomSlug: "check-engine-encendido",
    zoneSlug: "san-juan-de-miraflores",
    problemLabel: "tiene check engine encendido",
    localSummary:
      "Pensada para captar consultas urbanas de SJM donde la luz de motor viene con jaloneo o consumo alto.",
    localBullets: [
      "En San Juan de Miraflores este sintoma suele aparecer en autos de uso urbano intensivo y trayectos cortos con trafico.",
      "La oportunidad comercial esta en pasar del codigo a una explicacion clara de urgencia, no solo a borrar la luz.",
      "Si ademas hay jaloneo, apagones o perdida de potencia, conviene priorizar la revision.",
    ],
    localFaq: [
      {
        question: "Si tengo check engine en SJM pero el auto aun camina, igual debo verlo?",
        answer:
          "Si, sobre todo si ya sientes que el auto responde distinto, consume mas o se apaga a veces.",
      },
    ],
  },
  {
    slug: "consume-mucho-lurin",
    symptomSlug: "consume-mucho-combustible",
    zoneSlug: "lurin",
    problemLabel: "consume mucho combustible",
    localSummary:
      "Muy buena para unidades de trabajo y recorridos largos desde Lurin.",
    localBullets: [
      "En Lurin esta busqueda conecta bien con clientes que usan el auto para trabajo y sienten el gasto cada semana.",
      "Antes de vender ahorro por GNV o GLP, conviene ordenar mantenimiento, inyectores y sensores.",
      "Si el auto recorre trayectos largos, una mejora de consumo tiene impacto comercial inmediato.",
    ],
    localFaq: [
      {
        question: "Si mi auto consume mucho en Lurin, me conviene GNV de frente?",
        answer:
          "No siempre. Primero conviene revisar si el consumo subio por una falla o por mantenimiento atrasado.",
      },
    ],
  },
  {
    slug: "falla-al-acelerar-vmt",
    symptomSlug: "falla-al-acelerar",
    zoneSlug: "villa-maria-del-triunfo",
    problemLabel: "falla al acelerar",
    localSummary:
      "En VMT esta búsqueda mezcla frustración, miedo a daño de motor y necesidad de solución rápida.",
    localBullets: [
      "En Villa Maria del Triunfo este problema suele llegar despues de pasar por varios mecanicos sin una causa clara.",
      "La gracia comercial aqui es separar si el cliente necesita motor, bomba, encendido o solo diagnostico.",
      "Si la falla aparece en subidas o al exigirlo, el mensaje tiene que priorizar revision real y no suposiciones.",
    ],
    localFaq: [
      {
        question: "En VMT revisan fallas al acelerar aunque no sepa si es motor o bomba?",
        answer:
          "Si. Justamente ahi entra bien el diagnostico para separar combustible, sensores, encendido o motor.",
      },
    ],
  },
  {
    slug: "se-apaga-en-marcha-villa-el-salvador",
    symptomSlug: "se-apaga-en-marcha",
    zoneSlug: "villa-el-salvador",
    problemLabel: "se apaga en marcha",
    localSummary:
      "Muy fuerte para urgencia en Villa El Salvador porque toca seguridad y tiempo perdido.",
    localBullets: [
      "Cuando un auto se apaga en marcha en Villa El Salvador, la objecion principal no es precio: es confianza y rapidez.",
      "Esta pagina funciona bien si el auto se usa para trabajar o moverse todos los dias.",
      "El enfoque correcto es confirmar si la falla va por combustible, sensor, ralenti o sistema electrico.",
    ],
    localFaq: [
      {
        question: "Si se apaga manejando en Villa El Salvador, es una urgencia?",
        answer:
          "Si, porque afecta seguridad y puede terminar dejandote varado si no se revisa a tiempo.",
      },
    ],
  },
  {
    slug: "motor-se-calienta-pachacamac",
    symptomSlug: "motor-se-calienta",
    zoneSlug: "pachacamac",
    problemLabel: "se calienta",
    localSummary:
      "Ideal para recorridos largos o exigentes desde Pachacamac donde la temperatura sube bajo carga.",
    localBullets: [
      "En Pachacamac este problema suele aparecer en trayectos largos, subidas o recorridos donde el motor va cargado.",
      "Si ya hubo una calentada fuerte, la pagina tiene que empujar a revisar rapido para no llevar el problema a motor.",
      "Sirve muy bien para conectar refrigeracion con diagnostico o revision de motor segun el riesgo.",
    ],
    localFaq: [
      {
        question: "Si se calienta en ruta por Pachacamac pero luego baja, igual lo reviso?",
        answer:
          "Si. Ese tipo de patron suele anticipar un problema de refrigeracion o carga que luego escala.",
      },
    ],
  },
  {
    slug: "pierde-potencia-lurin",
    symptomSlug: "pierde-potencia",
    zoneSlug: "lurin",
    problemLabel: "pierde potencia",
    localSummary:
      "Pensada para autos de trabajo o trayectos largos desde Lurin donde la potencia perdida se siente mas.",
    localBullets: [
      "En Lurin, perder potencia pega fuerte cuando el auto carga peso, sube o recorre distancias largas.",
      "Este tipo de consulta convierte bien hacia diagnostico, combustible, encendido o motor segun el contexto.",
      "Si ademas subio el consumo, la oportunidad comercial crece porque el cliente ya siente el costo doble.",
    ],
    localFaq: [
      {
        question: "Si mi auto pierde potencia en Lurin y lo uso para trabajar, por donde entro?",
        answer:
          "Lo mejor es entrar por diagnostico para definir si la salida va por bomba, inyectores, encendido o motor.",
      },
    ],
  },
  {
    slug: "bota-humo-vmt",
    symptomSlug: "bota-humo",
    zoneSlug: "villa-maria-del-triunfo",
    problemLabel: "bota humo",
    localSummary:
      "Hiperlocal para captar la mezcla entre miedo, urgencia y ticket potencial en VMT.",
    localBullets: [
      "En VMT esta busqueda suele venir con preocupacion alta por motor, sobre todo si el auto ya tambien pierde fuerza.",
      "La pagina sirve para bajar ansiedad, ordenar la revision y no saltar directo a una reparacion mayor sin base.",
      "Si hubo calentada previa o consumo de aceite, la prioridad de atencion sube bastante.",
    ],
    localFaq: [
      {
        question: "En VMT atienden autos que botan humo aunque todavia sigan andando?",
        answer:
          "Si. Ese es precisamente el mejor momento para revisarlo antes de que se vuelva una falla mas cara.",
      },
    ],
  },
  {
    slug: "arranca-pero-se-apaga-chorrillos",
    symptomSlug: "arranca-pero-se-apaga",
    zoneSlug: "chorrillos",
    problemLabel: "arranca pero se apaga",
    localSummary:
      "Muy buena para usuarios de Chorrillos que llegan con desesperación pero aun no saben si el problema es combustible, ralenti o eléctrico.",
    localBullets: [
      "En Chorrillos este patron suele aparecer en uso urbano: prende, parece estable y se apaga a los segundos o en la primera parada.",
      "Comercialmente convierte bien hacia cuerpo de aceleracion, combustible o sistema electrico.",
      "La clave es preguntar si aguanta acelerando un poco o si se apaga igual, porque eso orienta mucho la ruta.",
    ],
    localFaq: [
      {
        question: "Si en Chorrillos mi auto prende y se apaga al toque, que revisan?",
        answer:
          "Segun el patron, se revisa ralenti, cuerpo de aceleracion, combustible, sensor o alimentacion electrica.",
      },
    ],
  },
];

function dedupe(values) {
  return [...new Set(values.filter(Boolean))];
}

function buildLocalIntentPage(seed) {
  const symptom = getSymptomBySlug(seed.symptomSlug);
  const zone = getZoneBySlug(seed.zoneSlug);

  if (!symptom || !zone) {
    return null;
  }

  return {
    slug: seed.slug,
    zoneSlug: seed.zoneSlug,
    symptomSlug: seed.symptomSlug,
    summary: seed.localSummary,
    intentLabel: `SEO local - ${zone.name}`,
    metaTitle: `${symptom.heroTitle} en ${zone.name} | EDU MOTORS`,
    metaDescription: `${symptom.metaDescription} Atencion orientada a ${zone.name}, Lima Sur.`,
    heroTitle: `${symptom.heroTitle} en ${zone.name}`,
    heroSubtitle: `Orientacion local para clientes de ${zone.name} con autos que ${seed.problemLabel}`,
    heroDescription: `${symptom.heroDescription} En ${zone.name}, esta consulta suele venir con necesidad de solucion rapida y presupuesto claro.`,
    cardsTitle: `Lo que mas se revisa cuando tu auto ${seed.problemLabel} en ${zone.name}`,
    cards: [
      ...symptom.cards.slice(0, 3),
      {
        title: `En ${zone.name}`,
        description: seed.localSummary,
      },
    ],
    sections: [
      {
        title: `Contexto local en ${zone.name}`,
        description:
          "La misma falla se vende distinto segun la zona, el tipo de uso y la urgencia del cliente.",
        bullets: seed.localBullets,
      },
      symptom.sections[0],
      {
        title: `Servicios que mas suelen entrar en ${zone.name}`,
        description:
          "Estas son las rutas que mas sentido suelen tener cuando el sintoma aparece en esta zona.",
        bullets: dedupe([
          ...zone.recommendedSlugs.slice(0, 3).map((slug) => {
            const parts = slug.split("-");
            return parts.join(" ");
          }),
          ...symptom.relatedServiceSlugs.slice(0, 3).map((slug) => slug.split("-").join(" ")),
        ]),
      },
    ],
    faq: [...seed.localFaq, ...symptom.faq.slice(0, 2)],
    relatedServiceSlugs: dedupe([
      ...symptom.relatedServiceSlugs,
      ...zone.recommendedSlugs,
    ]).slice(0, 4),
    quickOptions: dedupe([
      ...zone.quickOptions.slice(0, 2),
      ...symptom.quickOptions.slice(0, 3),
    ]),
    whatsappText: `Hola EDU MOTORS, estoy en ${zone.name} y mi auto ${seed.problemLabel}. Necesito orientacion.`,
    ctaTitle: `Si tu auto ${seed.problemLabel} en ${zone.name}, conviene moverlo con rapidez y criterio`,
    ctaDescription:
      "Escribenos con el patron exacto y la zona para orientarte hacia la revision que mejor encaje con la falla real.",
    ctaButton: `Quiero ayuda en ${zone.name}`,
  };
}

export const localIntentPages = localIntentSeeds
  .map(buildLocalIntentPage)
  .filter(Boolean);

export function getLocalIntentBySlug(slug) {
  return localIntentPages.find((item) => item.slug === slug) || null;
}

export function getLocalIntentsByZone(zoneSlug) {
  const normalizedZoneSlug = getZoneBySlug(zoneSlug || "").slug;

  return localIntentPages.filter((item) => item.zoneSlug === normalizedZoneSlug);
}

export function getLocalIntentsBySymptom(symptomSlug) {
  return localIntentPages.filter((item) => item.symptomSlug === symptomSlug);
}
