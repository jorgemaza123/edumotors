export const businessData = {
  name: "EDU MOTORS",
  phoneDisplay: "960 812 600",
  phoneRaw: "960812600",
  whatsappNumber: "51960812600",
  address: "Av. Principal S/N, Villa El Salvador, Lima",
  city: "Lima",
  region: "Lima",
  country: "PE",
};

export const zoneLinks = [
  { slug: "villa-el-salvador", name: "Villa El Salvador", shortName: "Villa El Salvador" },
  { slug: "san-juan-de-miraflores", name: "San Juan de Miraflores", shortName: "SJM" },
  { slug: "villa-maria-del-triunfo", name: "Villa Maria del Triunfo", shortName: "VMT" },
  { slug: "lurin", name: "Lurin", shortName: "Lurin" },
  { slug: "pachacamac", name: "Pachacamac", shortName: "Pachacamac" },
  { slug: "chorrillos", name: "Chorrillos", shortName: "Chorrillos" },
];

export const hiddenServices = [
  {
    title: "Revision de inyectores",
    description: "Cuando el motor tiembla, consume mucho o responde con tirones.",
  },
  {
    title: "Revision de sensores CKP, MAP y TPS",
    description: "Clave si el auto no arranca, se apaga o falla al acelerar.",
  },
  {
    title: "Sistema electrico automotriz",
    description: "Fusibles, relevos, alimentacion y tierras antes de cambiar piezas.",
  },
  {
    title: "Limpieza de cuerpo de aceleracion",
    description: "Ayuda cuando hay ralenti inestable, jaloneos o perdida de respuesta.",
  },
  {
    title: "Check engine y escaneo multimarca",
    description: "Ideal para detectar fallas reales y evitar gastos innecesarios.",
  },
  {
    title: "Afinamiento y consumo alto",
    description: "Ajustes preventivos para recuperar rendimiento y ahorrar combustible.",
  },
];

const servicePages = {
  "reparacion-motores": {
    slug: "reparacion-motores",
    group: "Urgencia",
    name: "Reparacion de motores",
    cardTitle: "Reparacion de motores en Lima Sur",
    cardDescription:
      "Cuando el motor pierde fuerza, humea, consume aceite o ya no responde como antes.",
    metaTitle:
      "Reparacion de motores en Lima Sur | Falla motor y perdida de potencia | EDU MOTORS",
    metaDescription:
      "Especialistas en reparacion de motores en Lima Sur. Revisamos compresion, fuga, temperatura y consumo de aceite con diagnostico claro y presupuesto antes de intervenir.",
    moneyKeyword: "reparacion de motores lima sur",
    searchIntent: "Urgente y transaccional",
    heroTitle: "Reparacion de motores en Lima Sur",
    heroSubtitle: "Si el motor falla, pierde fuerza o consume aceite, hay que revisar la causa real",
    heroDescription:
      "Atendemos motores con ruido, humo, temperatura alta, baja compresion y perdida de potencia. Primero diagnosticamos, luego te damos un presupuesto claro para reparar sin cambiar piezas a ciegas.",
    badges: [
      "Diagnostico claro antes de abrir motor",
      "Soporte para autos particulares y de trabajo",
      "Presupuesto transparente",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Mi motor falla al acelerar",
      "El auto bota humo o consume aceite",
      "Se calienta en trafico o subidas",
      "Pierde fuerza y vibra al prender",
      "Hace ruido metalico o golpetea",
      "Prende check engine y no responde",
    ],
    diagnosisFocus: [
      {
        title: "Compresion y estado interno",
        description:
          "Revisamos compresion, fugas y desgaste para saber si el problema es interno o periferico.",
      },
      {
        title: "Sistema de combustible",
        description:
          "La falla no siempre es del motor. Tambien evaluamos bomba, inyectores y presion.",
      },
      {
        title: "Temperatura y refrigeracion",
        description:
          "Cuando se recalienta, tambien revisamos radiador, termostato, electro y mangueras.",
      },
      {
        title: "Sensores y encendido",
        description:
          "Sensor CKP, bobinas, bujias y sincronizacion pueden provocar fallas que parecen mayores.",
      },
    ],
    relatedSlugs: ["diagnostico", "bomba-gasolina", "mantenimiento-general"],
    priceGuide: [
      { label: "Orientacion inicial por WhatsApp", price: "Gratis" },
      { label: "Revision y diagnostico de falla", price: "Desde S/ 50" },
      { label: "Pruebas complementarias de motor", price: "Segun evaluacion" },
      { label: "Reparacion mayor de motor", price: "Cotizacion personalizada" },
    ],
    faq: [
      {
        question: "Como saber si realmente necesito reparar el motor?",
        answer:
          "Si hay humo, ruido, perdida fuerte de potencia, consumo de aceite o temperatura alta, primero hay que medir compresion y revisar combustible, sensores y encendido. No siempre la solucion es abrir el motor.",
      },
      {
        question: "Cuanto demora una revision de falla de motor?",
        answer:
          "La revision inicial suele hacerse el mismo dia. Si se necesitan pruebas adicionales, te explicamos el tiempo exacto antes de intervenir.",
      },
      {
        question: "Tambien revisan fallas que parecen motor pero pueden ser otra cosa?",
        answer:
          "Si. Muchas fallas de potencia se originan en bomba de gasolina, inyectores, sensor de ciguenal o sistema electrico. Por eso hacemos diagnostico antes de cambiar piezas.",
      },
      {
        question: "Atienden autos de trabajo o taxi?",
        answer:
          "Si. Priorizamos casos donde el auto es herramienta de trabajo y el tiempo parado afecta ingresos.",
      },
    ],
    quickOptions: [
      "Pierde fuerza",
      "Bota humo",
      "Se calienta",
      "Consume aceite",
    ],
    whatsappText:
      "Hola EDU MOTORS, necesito revisar una falla de motor en mi vehiculo.",
    ctaTitle: "Cuida el motor antes de que el dano escale",
    ctaDescription:
      "Escribenos con el sintoma exacto y te orientamos por WhatsApp para avanzar rapido.",
    ctaButton: "Quiero revisar mi motor",
  },
  "bomba-gasolina": {
    slug: "bomba-gasolina",
    group: "Urgencia",
    name: "Bomba de gasolina",
    cardTitle: "Bomba de gasolina en Lima Sur",
    cardDescription:
      "Diagnostico cuando el auto no arranca, se apaga o pierde fuerza al acelerar.",
    metaTitle:
      "Bomba de gasolina en Lima Sur | Auto no arranca o se apaga | EDU MOTORS",
    metaDescription:
      "Revision de bomba de gasolina en Lima Sur. Detectamos perdida de presion, rele, fusibles, inyectores y alimentacion antes de recomendar reemplazo.",
    moneyKeyword: "bomba de gasolina falla sintomas lima",
    searchIntent: "Urgente y transaccional",
    heroTitle: "Bomba de gasolina en Lima Sur",
    heroSubtitle: "Si tu auto no arranca, se apaga o no responde, puede ser combustible",
    heroDescription:
      "Revisamos presion, alimentacion electrica, rele, fusibles e inyectores para confirmar si la falla viene de la bomba de gasolina o de un componente relacionado.",
    badges: [
      "Ideal para autos que no arrancan",
      "Pruebas antes de reemplazar",
      "Atencion el mismo dia",
      "Cobertura Lima Sur",
    ],
    problemQueries: [
      "Mi auto no arranca",
      "Se apaga en semaforos o en marcha",
      "Pierde fuerza al acelerar",
      "Le cuesta prender en frio",
      "Escucho ruido en el tanque",
      "Huele a gasolina o gasta mas de lo normal",
    ],
    diagnosisFocus: [
      {
        title: "Presion y caudal de combustible",
        description:
          "Probamos si la bomba entrega la presion correcta antes de recomendar cambio.",
      },
      {
        title: "Rele, fusibles y alimentacion",
        description:
          "Una falla electrica puede parecer bomba danada y encarecer el diagnostico si no se revisa.",
      },
      {
        title: "Inyectores y filtro",
        description:
          "Combustible sucio, inyectores o filtro tapado generan sintomas casi identicos.",
      },
      {
        title: "Sensores de encendido",
        description:
          "Sensor CKP o fallas de chispa pueden hacerte pensar que el problema es la bomba.",
      },
    ],
    relatedSlugs: ["diagnostico", "mantenimiento-general", "reparacion-motores"],
    priceGuide: [
      { label: "Orientacion inicial por WhatsApp", price: "Gratis" },
      { label: "Revision de presion y falla", price: "Desde S/ 50" },
      { label: "Limpieza y prueba complementaria", price: "Desde S/ 80" },
      { label: "Cambio de bomba con mano de obra", price: "Cotizacion segun modelo" },
    ],
    faq: [
      {
        question: "Como saber si la bomba de gasolina esta fallando?",
        answer:
          "Los sintomas mas comunes son auto que no arranca, perdida de fuerza, apagones, ruido en el tanque y consumo elevado. Igual hay que medir presion antes de cambiar la pieza.",
      },
      {
        question: "Siempre hay que cambiar la bomba?",
        answer:
          "No. A veces la falla esta en rele, fusible, cableado, filtro, inyectores o alimentacion. Por eso revisamos el sistema completo.",
      },
      {
        question: "La revision se puede hacer el mismo dia?",
        answer:
          "Si. La evaluacion inicial suele resolverse el mismo dia y te damos el siguiente paso con precio claro.",
      },
      {
        question: "Atienden autos que se apagan en la calle o al calentar?",
        answer:
          "Si. Ese sintoma suele requerir revisar combustible, chispa y sensores al mismo tiempo para no perder tiempo ni dinero.",
      },
    ],
    quickOptions: [
      "No arranca",
      "Se apaga",
      "Pierde fuerza",
      "Huele a gasolina",
    ],
    whatsappText:
      "Hola EDU MOTORS, necesito revisar la bomba de gasolina de mi vehiculo.",
    ctaTitle: "Evita quedarte botado por una falla de combustible",
    ctaDescription:
      "Escribenos apenas aparezca el sintoma y te guiamos con el siguiente paso por WhatsApp.",
    ctaButton: "Quiero revisar la bomba",
  },
  diagnostico: {
    slug: "diagnostico",
    group: "Entrada",
    name: "Diagnostico automotriz",
    cardTitle: "Diagnostico automotriz en Lima Sur",
    cardDescription:
      "La mejor puerta de entrada cuando no sabes si la falla es motor, combustible, sensores o sistema electrico.",
    metaTitle:
      "Diagnostico automotriz en Lima Sur | Check engine, escaner y fallas | EDU MOTORS",
    metaDescription:
      "Diagnostico automotriz en Lima Sur para autos que no arrancan, pierden fuerza o prenden check engine. Escaner, pruebas electricas y revision mecanica sin cambiar piezas a ciegas.",
    moneyKeyword: "diagnostico automotriz lima sur",
    searchIntent: "Alta intencion de entrada",
    heroTitle: "Diagnostico automotriz en Lima Sur",
    heroSubtitle: "Encuentra la falla real antes de gastar en repuestos innecesarios",
    heroDescription:
      "Si tu auto falla al prender, acelera mal, vibra o prende check engine, hacemos un diagnostico que combina escaner, pruebas electricas y revision mecanica para darte una ruta clara.",
    badges: [
      "Servicio ideal para primera consulta",
      "Escaner + revision tecnica",
      "Check engine y fallas intermitentes",
      "Atencion rapida en Lima Sur",
    ],
    problemQueries: [
      "Prendio check engine",
      "Mi auto falla y no se por que",
      "Pierde fuerza al acelerar",
      "No arranca en las mananas",
      "Gasta mucho combustible",
      "Tiembla o jalonea al prender",
    ],
    diagnosisFocus: [
      {
        title: "Escaner y lectura de codigos",
        description:
          "Vemos codigos y parametros para acortar tiempo y apuntar a la causa real.",
      },
      {
        title: "Pruebas electricas basicas",
        description:
          "Voltaje, tierras, fusibles y alimentacion para descartar fallas invisibles al escaner.",
      },
      {
        title: "Revision mecanica asociada",
        description:
          "No nos quedamos solo en la computadora. Revisamos combustible, vacios y componentes fisicos.",
      },
      {
        title: "Priorizacion comercial",
        description:
          "Te indicamos que resolver primero si el presupuesto es limitado o el auto se usa para trabajar.",
      },
    ],
    relatedSlugs: ["bomba-gasolina", "reparacion-motores", "mantenimiento-general"],
    priceGuide: [
      { label: "Orientacion inicial por WhatsApp", price: "Gratis" },
      { label: "Escaneo y revision base", price: "Desde S/ 50" },
      { label: "Pruebas adicionales segun falla", price: "Segun evaluacion" },
      { label: "Presupuesto de reparacion", price: "Sin sorpresas" },
    ],
    faq: [
      {
        question: "Que incluye un diagnostico automotriz?",
        answer:
          "Incluye escaneo, lectura de sintomas, revision visual y pruebas tecnicas basicas para encontrar la falla con mejor criterio.",
      },
      {
        question: "Sirve aunque el auto falle solo a veces?",
        answer:
          "Si. Las fallas intermitentes son comunes en sensores, alimentacion electrica y combustible, y se pueden orientar con sintomas y codigos.",
      },
      {
        question: "Me ayudan aunque otro mecanico ya cambio piezas?",
        answer:
          "Si. Muchos clientes llegan despues de gastar en partes que no eran la causa. Nuestro enfoque es diagnosticar antes de seguir cambiando piezas.",
      },
      {
        question: "En cuanto tiempo me dicen que tiene el auto?",
        answer:
          "La orientacion inicial es rapida y la revision base suele resolverse el mismo dia, segun disponibilidad y complejidad.",
      },
    ],
    quickOptions: [
      "Check engine",
      "Jalonea",
      "No arranca",
      "Consume mucho",
    ],
    whatsappText:
      "Hola EDU MOTORS, necesito un diagnostico automotriz para mi vehiculo.",
    ctaTitle: "No gastes sin saber donde esta la falla",
    ctaDescription:
      "Escribenos el sintoma y te orientamos con un diagnostico inicial por WhatsApp.",
    ctaButton: "Quiero un diagnostico",
  },
};

export function getServiceCatalog() {
  return Object.values(servicePages);
}

Object.assign(servicePages, {
  "conversion-gnv": {
    slug: "conversion-gnv",
    group: "Alto ticket",
    name: "Conversion a GNV",
    cardTitle: "Conversion a GNV en Lima Sur",
    cardDescription:
      "Para conductores que quieren bajar gasto fijo sin descuidar respuesta y seguridad.",
    metaTitle:
      "Conversion a GNV en Lima Sur | Ahorro en combustible y diagnostico previo | EDU MOTORS",
    metaDescription:
      "Conversion a GNV en Lima Sur para autos particulares, taxi y unidades de trabajo. Evalua si tu vehiculo aplica y recibe una propuesta segun uso, kilometraje y presupuesto.",
    moneyKeyword: "conversion gnv lima precio",
    searchIntent: "Alto ticket y comparativo",
    heroTitle: "Conversion a GNV en Lima Sur",
    heroSubtitle: "Convierte tu auto para ahorrar combustible sin improvisar la instalacion",
    heroDescription:
      "Te ayudamos a evaluar si tu vehiculo y tu uso diario justifican una conversion a GNV. Ideal para autos que recorren bastante y necesitan bajar costo por kilometro.",
    badges: [
      "Servicio alto ticket con enfoque en ahorro",
      "Ideal para taxi y auto de trabajo",
      "Consulta por compatibilidad y tiempos",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Gasto demasiado en gasolina",
      "Quiero saber si me conviene GNV",
      "Uso mi auto para trabajar",
      "Busco precio de conversion GNV en Lima",
      "Quiero bajar costo por kilometro",
      "Necesito evaluar mi vehiculo antes de convertir",
    ],
    diagnosisFocus: [
      {
        title: "Compatibilidad del vehiculo",
        description:
          "Revisamos estado general, uso y objetivo de ahorro antes de avanzar.",
      },
      {
        title: "Consumo y retorno estimado",
        description:
          "La conversion tiene mas sentido cuando el kilometraje compensa la inversion.",
      },
      {
        title: "Motor y mantenimiento previo",
        description:
          "Si el motor ya falla, conviene corregirlo antes de convertir para evitar problemas posteriores.",
      },
      {
        title: "Plan de trabajo claro",
        description:
          "Te explicamos tiempos, cuidados y que revisar despues de la conversion.",
      },
    ],
    relatedSlugs: ["diagnostico", "reparacion-motores", "mantenimiento-general"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Evaluacion previa del vehiculo", price: "Segun caso" },
      { label: "Conversion a GNV", price: "Desde S/ 2,800" },
      { label: "Plan final", price: "Segun equipo y vehiculo" },
    ],
    faq: [
      {
        question: "Como saber si me conviene convertir a GNV?",
        answer:
          "Depende del kilometraje, tipo de uso y estado del motor. Si manejas bastante o usas el auto para trabajar, suele tener mejor retorno.",
      },
      {
        question: "Puedo convertir si mi auto ya tiene una falla?",
        answer:
          "Lo recomendable es resolver primero cualquier falla de motor, encendido o combustible antes de instalar el sistema.",
      },
      {
        question: "Cuanto cuesta convertir a GNV?",
        answer:
          "El precio depende del vehiculo y del equipo. Manejamos rangos referenciales y te damos una propuesta despues de revisar tu caso.",
      },
      {
        question: "Atienden consultas de ahorro y financiamiento?",
        answer:
          "Si. Si buscas bajar gasto mensual, te orientamos sobre escenarios posibles segun tu recorrido y presupuesto.",
      },
    ],
    quickOptions: [
      "Quiero ahorrar",
      "Uso taxi",
      "Busco precio GNV",
      "Quiero evaluar mi auto",
    ],
    whatsappText:
      "Hola EDU MOTORS, quiero evaluar una conversion a GNV para mi vehiculo.",
    ctaTitle: "Evalua si GNV realmente te conviene",
    ctaDescription:
      "Escribenos cuanto recorres y que vehiculo usas para orientarte con enfoque comercial, no solo tecnico.",
    ctaButton: "Quiero evaluar GNV",
  },
  "conversion-glp": {
    slug: "conversion-glp",
    group: "Alto ticket",
    name: "Conversion a GLP",
    cardTitle: "Conversion a GLP en Lima Sur",
    cardDescription:
      "Alternativa para bajar gasto cuando buscas ahorro y una conversion bien evaluada.",
    metaTitle:
      "Conversion a GLP en Lima Sur | Evaluacion previa y ahorro en combustible | EDU MOTORS",
    metaDescription:
      "Conversion a GLP en Lima Sur con evaluacion previa del vehiculo, enfoque en seguridad y rendimiento diario. Consulta compatibilidad, tiempos y costos segun tu unidad.",
    moneyKeyword: "conversion glp lima",
    searchIntent: "Alto ticket y comparativo",
    heroTitle: "Conversion a GLP en Lima Sur",
    heroSubtitle: "Una opcion para reducir gasto de combustible con evaluacion previa",
    heroDescription:
      "Si buscas ahorrar combustible y comparar alternativas frente a gasolina o GNV, te ayudamos a evaluar si GLP encaja con tu vehiculo, tu recorrido y tu presupuesto.",
    badges: [
      "Evaluacion previa segun tu unidad",
      "Comparacion real con otras opciones",
      "Ideal para uso particular o mixto",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Quiero ahorrar combustible",
      "Busco conversion GLP en Lima",
      "No se si elegir GLP o GNV",
      "Uso mi auto todos los dias",
      "Quiero revisar si mi vehiculo aplica",
      "Busco una alternativa de menor gasto",
    ],
    diagnosisFocus: [
      {
        title: "Uso del vehiculo",
        description:
          "Analizamos kilometraje y rutina para elegir la opcion con mejor sentido economico.",
      },
      {
        title: "Estado actual del motor",
        description:
          "Una conversion bien hecha empieza revisando motor, encendido y mantenimiento base.",
      },
      {
        title: "Comparacion con GNV",
        description:
          "Te ayudamos a entender que opcion encaja mejor segun espacio, uso y retorno.",
      },
      {
        title: "Plan de instalacion y control",
        description:
          "La idea es que el ahorro no te genere nuevas fallas por una mala base mecanica.",
      },
    ],
    relatedSlugs: ["diagnostico", "mantenimiento-general", "reparacion-motores"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Evaluacion previa", price: "Segun caso" },
      { label: "Conversion a GLP", price: "Cotizacion segun unidad" },
      { label: "Revision post conversion", price: "Segun servicio" },
    ],
    faq: [
      {
        question: "GLP o GNV: cual me conviene mas?",
        answer:
          "Depende del kilometraje, tipo de uso, espacio disponible y presupuesto. Si no lo tienes claro, te orientamos segun tu caso.",
      },
      {
        question: "Se puede convertir cualquier auto?",
        answer:
          "No siempre. Primero hay que revisar compatibilidad y estado mecanico para decidir si conviene avanzar.",
      },
      {
        question: "Necesito hacer mantenimiento antes de convertir?",
        answer:
          "Si el auto tiene fallas de motor, encendido o combustible, conviene solucionarlas antes para que la conversion funcione bien.",
      },
      {
        question: "Dan orientacion sobre tiempos y costos?",
        answer:
          "Si. Te damos una orientacion inicial por WhatsApp y, si tu unidad aplica, el siguiente paso para una propuesta mas precisa.",
      },
    ],
    quickOptions: [
      "Quiero GLP",
      "GLP o GNV",
      "Busco ahorro",
      "Quiero evaluar mi auto",
    ],
    whatsappText:
      "Hola EDU MOTORS, quiero evaluar una conversion a GLP para mi vehiculo.",
    ctaTitle: "Compara ahorro sin comprometer el motor",
    ctaDescription:
      "Escribenos tu tipo de uso y te orientamos sobre GLP, GNV o una solucion mecanica previa.",
    ctaButton: "Quiero evaluar GLP",
  },
  "mantenimiento-general": {
    slug: "mantenimiento-general",
    group: "Recurrente",
    name: "Mantenimiento general",
    cardTitle: "Mantenimiento general en Lima Sur",
    cardDescription:
      "Prevencion para evitar que una falla pequena termine en un gasto mayor.",
    metaTitle:
      "Mantenimiento general en Lima Sur | Afinamiento, revision y consumo | EDU MOTORS",
    metaDescription:
      "Mantenimiento general en Lima Sur para autos con consumo alto, vibracion, arranque pesado o uso diario intenso. Revisamos los puntos clave para prevenir fallas mayores.",
    moneyKeyword: "mantenimiento automotriz lima sur",
    searchIntent: "Preventivo y recurrente",
    heroTitle: "Mantenimiento general en Lima Sur",
    heroSubtitle: "Previene fallas mayores antes de quedarte sin auto o sin tiempo",
    heroDescription:
      "Hacemos mantenimiento preventivo, afinamiento, revision de consumo y controles basicos para que tu auto no llegue al taller solo cuando el problema ya es caro.",
    badges: [
      "Ideal para autos de uso diario",
      "Ayuda a bajar riesgo de falla",
      "Control de consumo y rendimiento",
      "Cobertura Lima Sur",
    ],
    problemQueries: [
      "Mi auto gasta mucho combustible",
      "Siento vibracion o respuesta lenta",
      "Quiero prevenir fallas del motor",
      "Necesito mantenimiento antes de viajar",
      "Uso el auto todos los dias para trabajar",
      "Quiero revisar frenos, aceite y puntos clave",
    ],
    diagnosisFocus: [
      {
        title: "Control de consumo y afinamiento",
        description:
          "Ideal si el auto jala mas gasolina, pierde respuesta o trabaja forzado.",
      },
      {
        title: "Revision preventiva",
        description:
          "Detectamos alertas antes de que se conviertan en una parada costosa.",
      },
      {
        title: "Chequeo para autos de trabajo",
        description:
          "Si el vehiculo produce ingresos, conviene evitar fallas por desgaste acumulado.",
      },
      {
        title: "Base para conversion o viaje",
        description:
          "Tambien sirve como revision previa si piensas convertir a gas o salir a ruta.",
      },
    ],
    relatedSlugs: ["diagnostico", "conversion-gnv", "bomba-gasolina"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Mantenimiento preventivo base", price: "Desde S/ 120" },
      { label: "Afinamiento y limpieza", price: "Desde S/ 150" },
      { label: "Plan segun kilometraje", price: "Cotizacion segun unidad" },
    ],
    faq: [
      {
        question: "Cada cuanto conviene hacer mantenimiento?",
        answer:
          "Depende del uso. Si manejas a diario o trabajas con tu auto, es mejor revisar por kilometraje y sintomas antes de esperar una falla grande.",
      },
      {
        question: "El mantenimiento ayuda con consumo alto?",
        answer:
          "Si. Muchas veces el consumo sube por afinamiento pendiente, inyectores, sensores o filtros descuidados.",
      },
      {
        question: "Puedo hacer mantenimiento si quiero convertir a gas despues?",
        answer:
          "Si. De hecho, revisar el estado base del auto antes de convertir ayuda a evitar problemas posteriores.",
      },
      {
        question: "Atienden mantenimiento para autos de uso comercial?",
        answer:
          "Si. Ajustamos la recomendacion segun el ritmo de trabajo del vehiculo y la urgencia por volver a circular.",
      },
    ],
    quickOptions: [
      "Consume mucho",
      "Quiero mantenimiento",
      "Uso el auto para trabajar",
      "Quiero prevenir fallas",
    ],
    whatsappText:
      "Hola EDU MOTORS, quiero cotizar un mantenimiento general para mi vehiculo.",
    ctaTitle: "Manten tu auto produciendo, no parado",
    ctaDescription:
      "Escribenos si buscas prevenir fallas, bajar consumo o revisar puntos clave antes de un gasto mayor.",
    ctaButton: "Quiero mi mantenimiento",
  },
});

Object.assign(servicePages, {
  inyectores: {
    slug: "inyectores",
    group: "Entrada",
    name: "Revision de inyectores",
    cardTitle: "Inyectores en Lima Sur",
    cardDescription:
      "Cuando el auto jalonea, gasta mucho o pierde respuesta al acelerar.",
    metaTitle:
      "Revision de inyectores en Lima Sur | Jaloneos, consumo alto y perdida de potencia | EDU MOTORS",
    metaDescription:
      "Revision de inyectores en Lima Sur para autos con jaloneos, consumo alto, ralenti inestable y perdida de potencia. Diagnostico antes de cambiar piezas.",
    moneyKeyword: "inyectores lima sur",
    searchIntent: "Entrada con sintoma claro",
    heroTitle: "Revision de inyectores en Lima Sur",
    heroSubtitle: "Si tu auto jalonea, consume mucho o vibra, los inyectores pueden ser parte de la causa",
    heroDescription:
      "Revisamos si la mezcla, la pulverizacion o una obstruccion en inyectores esta afectando el rendimiento real de tu auto.",
    badges: [
      "Ideal para consumo alto",
      "Revision antes de reemplazar",
      "Compatible con diagnostico general",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Jalonea al acelerar",
      "Consume mucho combustible",
      "Huele a gasolina",
      "Tiembla en ralenti",
      "Pierde fuerza en subidas",
      "Le cuesta responder al pisar",
    ],
    diagnosisFocus: [
      {
        title: "Pulverizacion y mezcla",
        description:
          "Buscamos si la entrega de combustible esta afectando potencia, consumo o estabilidad.",
      },
      {
        title: "Filtro, presion y bomba",
        description:
          "A veces el sintoma parece inyector y la causa real esta en presion o alimentacion.",
      },
      {
        title: "Sensores asociados",
        description:
          "MAP, TPS o sensor de oxigeno pueden alterar la mezcla y confundirse con falla de inyectores.",
      },
      {
        title: "Prioridad comercial",
        description:
          "Te decimos si conviene limpiar, revisar mas a fondo o pasar primero por diagnostico general.",
      },
    ],
    relatedSlugs: ["diagnostico", "bomba-gasolina", "afinamiento"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Revision base de falla", price: "Desde S/ 50" },
      { label: "Limpieza o prueba complementaria", price: "Segun evaluacion" },
      { label: "Solucion final", price: "Cotizacion segun causa" },
    ],
    faq: [
      {
        question: "Como saber si el problema si son los inyectores?",
        answer:
          "No se confirma solo por sintoma. Jaloneos y consumo alto tambien pueden venir de bomba, sensores, chispa o cuerpo de aceleracion.",
      },
      {
        question: "Siempre hay que limpiar inyectores?",
        answer:
          "No. Primero conviene ver si realmente aportan a la falla para no sumar un gasto que no resuelve el problema.",
      },
      {
        question: "La revision sirve si el auto solo falla a veces?",
        answer:
          "Si. Las fallas intermitentes de mezcla suelen aparecer por momentos y se pueden orientar con sintomas y pruebas.",
      },
      {
        question: "Conviene empezar por inyectores o por diagnostico?",
        answer:
          "Si no tienes claro el origen de la falla, lo mejor es empezar por diagnostico y luego definir si entran inyectores, combustible o encendido.",
      },
    ],
    quickOptions: [
      "Jalonea",
      "Consume mucho",
      "Tiembla",
      "Huele a gasolina",
    ],
    whatsappText:
      "Hola EDU MOTORS, necesito revisar posible falla de inyectores en mi auto.",
    ctaTitle: "No dejes que una mala mezcla te haga gastar de mas",
    ctaDescription:
      "Escribenos el sintoma exacto y te orientamos si conviene revisar inyectores o ir por diagnostico general.",
    ctaButton: "Quiero revisar inyectores",
  },
  "sensores-automotrices": {
    slug: "sensores-automotrices",
    group: "Entrada",
    name: "Revision de sensores automotrices",
    cardTitle: "Sensores automotrices en Lima Sur",
    cardDescription:
      "Para autos que fallan de forma intermitente, no arrancan o prenden check engine.",
    metaTitle:
      "Sensores automotrices en Lima Sur | CKP, MAP, TPS y check engine | EDU MOTORS",
    metaDescription:
      "Revision de sensores automotrices en Lima Sur para autos con check engine, apagones, arranque dificil o perdida de potencia. CKP, MAP, TPS y mas.",
    moneyKeyword: "sensores automotrices lima sur",
    searchIntent: "Entrada informada",
    heroTitle: "Revision de sensores automotrices en Lima Sur",
    heroSubtitle: "Fallas intermitentes, apagones o check engine suelen apuntar a sensores y lecturas fuera de rango",
    heroDescription:
      "Revisamos los sensores que mas afectan arranque, mezcla, respuesta y estabilidad para no cambiar piezas al tanteo.",
    badges: [
      "Ideal para fallas intermitentes",
      "Check engine y apagones",
      "CKP, MAP, TPS y asociados",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Prendio check engine",
      "Se apaga sin aviso",
      "No arranca a veces",
      "Pierde fuerza de forma rara",
      "Jalonea en ciertos momentos",
      "Falla al calentar",
    ],
    diagnosisFocus: [
      {
        title: "Lectura con escaner",
        description:
          "Cruzamos codigos y parametros con el sintoma real para evitar falsas conclusiones.",
      },
      {
        title: "Revision de alimentacion y tierras",
        description:
          "No siempre el sensor esta mal. Tambien revisamos señal, voltaje y conexion.",
      },
      {
        title: "Prueba segun contexto",
        description:
          "Un sensor puede fallar en frio, en caliente o solo bajo carga. Lo orientamos segun tu caso.",
      },
      {
        title: "Siguiente paso claro",
        description:
          "Te indicamos si conviene seguir con sensor, combustible, encendido o una revision mas amplia.",
      },
    ],
    relatedSlugs: ["diagnostico", "check-engine", "sistema-electrico"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Escaneo y revision base", price: "Desde S/ 50" },
      { label: "Pruebas de señal y continuidad", price: "Segun evaluacion" },
      { label: "Solucion final", price: "Cotizacion segun pieza y causa" },
    ],
    faq: [
      {
        question: "Como saber si el problema si es un sensor?",
        answer:
          "Por codigos, parametros, sintomas y pruebas. Cambiar un sensor solo por intuicion suele terminar en doble gasto.",
      },
      {
        question: "Que sensores suelen fallar mas?",
        answer:
          "Depende del caso, pero CKP, MAP, TPS y sensor de oxigeno suelen aparecer mucho en fallas de arranque, mezcla y respuesta.",
      },
      {
        question: "Si prende check engine, siempre es sensor?",
        answer:
          "No. El check engine puede venir de mezcla, encendido, combustible, emisiones o fallas electricas relacionadas.",
      },
      {
        question: "Conviene pedir este servicio o diagnostico general?",
        answer:
          "Si ya sospechas de sensores, sirve. Si no tienes claro el origen, mejor entrar por diagnostico general.",
      },
    ],
    quickOptions: [
      "Check engine",
      "Se apaga",
      "No arranca a veces",
      "Pierde fuerza",
    ],
    whatsappText:
      "Hola EDU MOTORS, necesito revisar sensores automotrices en mi vehiculo.",
    ctaTitle: "Una mala lectura de sensor puede parecer una falla mucho mas cara",
    ctaDescription:
      "Escribenos el sintoma y te ayudamos a decidir si conviene revisar sensores o abrir un diagnostico mas amplio.",
    ctaButton: "Quiero revisar sensores",
  },
  "sistema-electrico": {
    slug: "sistema-electrico",
    group: "Urgencia",
    name: "Sistema electrico automotriz",
    cardTitle: "Sistema electrico en Lima Sur",
    cardDescription:
      "Para autos que no arrancan, se apagan o presentan fallas electricas intermitentes.",
    metaTitle:
      "Sistema electrico automotriz en Lima Sur | Auto no arranca o se apaga | EDU MOTORS",
    metaDescription:
      "Revision de sistema electrico automotriz en Lima Sur. Fusibles, relevos, tierras, alimentacion y fallas intermitentes para autos que no arrancan o se apagan.",
    moneyKeyword: "sistema electrico automotriz lima sur",
    searchIntent: "Urgente",
    heroTitle: "Sistema electrico automotriz en Lima Sur",
    heroSubtitle: "Si tu auto se apaga, no arranca o falla de forma rara, no siempre es motor",
    heroDescription:
      "Revisamos fusibles, relevos, tierras, alimentacion y puntos electricos criticos para evitar cambios innecesarios de bateria, bomba o sensores.",
    badges: [
      "Ideal para fallas intermitentes",
      "No arranca o se apaga",
      "Revision de alimentacion",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "No arranca sin razon clara",
      "Se apaga de repente",
      "Falla despues de pasar un bache",
      "A veces prende, a veces no",
      "Check engine sin causa clara",
      "Ya cambie piezas y sigue igual",
    ],
    diagnosisFocus: [
      {
        title: "Fusibles, relevos y alimentacion",
        description:
          "Piezas simples pueden provocar sintomas que parecen fallas mayores.",
      },
      {
        title: "Tierras y continuidad",
        description:
          "Una mala tierra puede generar apagones, errores y arranque inestable.",
      },
      {
        title: "Cruce con sensores y combustible",
        description:
          "Confirmamos si el problema electrico esta afectando chispa, bomba o lectura de sensores.",
      },
      {
        title: "Ruta comercial clara",
        description:
          "Definimos si basta con corregir alimentacion o si el caso pide diagnostico integral.",
      },
    ],
    relatedSlugs: ["diagnostico", "sensores-automotrices", "sistema-encendido"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Revision electrica base", price: "Desde S/ 50" },
      { label: "Pruebas complementarias", price: "Segun evaluacion" },
      { label: "Reparacion final", price: "Cotizacion segun falla" },
    ],
    faq: [
      {
        question: "Como saber si la falla es electrica y no mecanica?",
        answer:
          "Cuando el auto presenta sintomas intermitentes, apagones, fallas aleatorias o ya se cambiaron piezas sin resultado, conviene revisar la parte electrica.",
      },
      {
        question: "La falla electrica puede parecer bomba o sensor?",
        answer:
          "Si. Una alimentacion inestable puede simular falla de bomba, sensor o incluso arranque.",
      },
      {
        question: "Atienden fallas que aparecen y desaparecen?",
        answer:
          "Si. Ese es precisamente uno de los casos donde mas sentido tiene revisar sistema electrico.",
      },
      {
        question: "Conviene pedir este servicio si el auto no arranca?",
        answer:
          "Si el origen no esta claro, tambien puedes entrar por diagnostico y ahi se define si el problema es electrico, de combustible o de motor.",
      },
    ],
    quickOptions: [
      "No arranca",
      "Se apaga",
      "Falla intermitente",
      "Ya cambie piezas",
    ],
    whatsappText:
      "Hola EDU MOTORS, necesito revisar una posible falla electrica en mi auto.",
    ctaTitle: "No sigas cambiando piezas si la falla puede ser electrica",
    ctaDescription:
      "Escribenos con el sintoma y te orientamos para descartar alimentacion, relevos o tierras antes de gastar mas.",
    ctaButton: "Quiero revisar sistema electrico",
  },
  "cuerpo-aceleracion": {
    slug: "cuerpo-aceleracion",
    group: "Entrada",
    name: "Cuerpo de aceleracion",
    cardTitle: "Cuerpo de aceleracion en Lima Sur",
    cardDescription:
      "Para ralenti inestable, apagones en semaforo y respuesta irregular al acelerar.",
    metaTitle:
      "Cuerpo de aceleracion en Lima Sur | Ralenti inestable y apagones | EDU MOTORS",
    metaDescription:
      "Revision de cuerpo de aceleracion en Lima Sur para autos con ralenti inestable, apagones, respuesta lenta o jaloneos en ciudad.",
    moneyKeyword: "cuerpo de aceleracion lima sur",
    searchIntent: "Sintoma claro urbano",
    heroTitle: "Revision de cuerpo de aceleracion en Lima Sur",
    heroSubtitle: "Cuando el auto tiembla en ralenti o se apaga en semaforos, hay que revisar admision y respuesta",
    heroDescription:
      "Evaluamos si el cuerpo de aceleracion y componentes asociados estan provocando ralenti inestable, apagones o una respuesta torpe al acelerar.",
    badges: [
      "Ideal para uso urbano",
      "Apagones en semaforo",
      "Ralenti inestable",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Se apaga en semaforos",
      "Ralenti inestable",
      "Acelera raro",
      "Jalonea en ciudad",
      "Demora en responder",
      "Vibra al detenerme",
    ],
    diagnosisFocus: [
      {
        title: "Respuesta y admision",
        description:
          "Buscamos si el flujo de aire y el control del ralenti estan afectando la estabilidad del motor.",
      },
      {
        title: "Cruce con sensores",
        description:
          "TPS, MAP u otros sensores pueden generar sintomas parecidos y deben cruzarse con la revision.",
      },
      {
        title: "Condicion urbana",
        description:
          "Estas fallas suelen aparecer mas en trafico, semaforos o baja velocidad.",
      },
      {
        title: "Siguiente paso",
        description:
          "Te indicamos si conviene revisar cuerpo, sensores, mezcla o arrancar por diagnostico completo.",
      },
    ],
    relatedSlugs: ["diagnostico", "sensores-automotrices", "afinamiento"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Revision base", price: "Desde S/ 50" },
      { label: "Limpieza o ajuste segun caso", price: "Segun evaluacion" },
      { label: "Solucion final", price: "Cotizacion segun falla" },
    ],
    faq: [
      {
        question: "Se apaga en semaforo, siempre es cuerpo de aceleracion?",
        answer:
          "No siempre. Tambien puede ser mezcla, sensores, vacios, combustible o ralenti fuera de rango.",
      },
      {
        question: "Sirve revisar esto si el auto vibra al detenerme?",
        answer:
          "Si. Ese es uno de los sintomas mas comunes cuando el control de admision o ralenti no esta estable.",
      },
      {
        question: "Conviene limpiar el cuerpo sin revisar nada mas?",
        answer:
          "No por defecto. Si la causa real es sensor, mezcla o combustible, limpiar solo no resuelve.",
      },
      {
        question: "Puedo entrar por diagnostico general?",
        answer:
          "Si. Si no estas seguro del origen, diagnostico suele ser la mejor entrada.",
      },
    ],
    quickOptions: [
      "Se apaga en semaforo",
      "Ralenti inestable",
      "Vibra al detenerme",
      "Acelera raro",
    ],
    whatsappText:
      "Hola EDU MOTORS, necesito revisar el cuerpo de aceleracion de mi auto.",
    ctaTitle: "Una mala respuesta en ciudad se vuelve una falla diaria",
    ctaDescription:
      "Escribenos si el auto se apaga en semaforos o trabaja inestable y te guiamos con el siguiente paso.",
    ctaButton: "Quiero revisar el cuerpo de aceleracion",
  },
  "check-engine": {
    slug: "check-engine",
    group: "Entrada",
    name: "Check engine",
    cardTitle: "Check engine en Lima Sur",
    cardDescription:
      "Para autos con luz de motor encendida, codigos de falla y sintomas sin causa clara.",
    metaTitle:
      "Check engine en Lima Sur | Escaneo y diagnostico de luz de motor | EDU MOTORS",
    metaDescription:
      "Revision de check engine en Lima Sur. Escaneo, lectura de codigos y diagnostico de sintomas para no cambiar piezas a ciegas.",
    moneyKeyword: "check engine lima sur",
    searchIntent: "Entrada inmediata",
    heroTitle: "Check engine en Lima Sur",
    heroSubtitle: "La luz de motor no dice la solucion. Solo indica donde empezar a investigar",
    heroDescription:
      "Leemos codigos, cruzamos sintomas y definimos si la falla apunta a sensores, mezcla, combustible, encendido o una revision mas profunda.",
    badges: [
      "Escaneo y contexto real",
      "Ideal para dudas iniciales",
      "Evita cambiar piezas al tanteo",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Prendio check engine",
      "El auto sigue andando pero raro",
      "Jalonea y prende la luz",
      "Pierde fuerza con luz encendida",
      "Consume mas combustible",
      "No se que codigo tiene",
    ],
    diagnosisFocus: [
      {
        title: "Lectura de codigos",
        description:
          "Extraemos el codigo, pero no nos quedamos solo ahi porque muchas veces el codigo no es la pieza exacta a cambiar.",
      },
      {
        title: "Cruce con sintomas",
        description:
          "La misma luz puede venir por mezcla, sensores, encendido, combustible o emisiones.",
      },
      {
        title: "Priorizacion",
        description:
          "Te decimos si es algo que puedes programar o si conviene atenderlo rapido.",
      },
      {
        title: "Salida comercial",
        description:
          "El objetivo es pasar del codigo a una ruta clara de solucion y presupuesto.",
      },
    ],
    relatedSlugs: ["diagnostico", "sensores-automotrices", "sistema-electrico"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Escaneo y revision base", price: "Desde S/ 50" },
      { label: "Pruebas complementarias", price: "Segun evaluacion" },
      { label: "Solucion final", price: "Segun causa" },
    ],
    faq: [
      {
        question: "Si prende check engine, puedo seguir manejando?",
        answer:
          "Depende del sintoma. Si hay perdida fuerte de potencia, apagones o vibracion, conviene revisarlo rapido.",
      },
      {
        question: "Borrar el codigo resuelve el problema?",
        answer:
          "No. Solo limpia la señal temporalmente. Si la causa sigue, la luz volvera.",
      },
      {
        question: "El check engine siempre es un sensor?",
        answer:
          "No. Tambien puede estar relacionado con mezcla, combustible, encendido o emisiones.",
      },
      {
        question: "Es mejor pedir este servicio o diagnostico?",
        answer:
          "Si tu problema principal es la luz encendida, este servicio encaja bien. Si la falla es mas amplia, diagnostico general sigue siendo una gran entrada.",
      },
    ],
    quickOptions: [
      "Check engine",
      "Pierde fuerza",
      "Jalonea",
      "Consume mucho",
    ],
    whatsappText:
      "Hola EDU MOTORS, prendio el check engine y necesito orientacion.",
    ctaTitle: "No conviertas una luz de alerta en una reparacion improvisada",
    ctaDescription:
      "Escribenos con el sintoma adicional y te ayudamos a priorizar la revision correcta.",
    ctaButton: "Quiero revisar el check engine",
  },
  "sistema-encendido": {
    slug: "sistema-encendido",
    group: "Urgencia",
    name: "Sistema de encendido",
    cardTitle: "Sistema de encendido en Lima Sur",
    cardDescription:
      "Para fallas de arranque, tirones, perdida de chispa y motor inestable.",
    metaTitle:
      "Sistema de encendido en Lima Sur | Bujias, bobinas y falla al arrancar | EDU MOTORS",
    metaDescription:
      "Revision de sistema de encendido en Lima Sur para autos que no arrancan bien, jalonean, vibran o pierden potencia por chispa irregular.",
    moneyKeyword: "sistema de encendido lima sur",
    searchIntent: "Urgente y sintomatico",
    heroTitle: "Sistema de encendido en Lima Sur",
    heroSubtitle: "Si no hay chispa estable, el motor falla aunque el problema parezca otro",
    heroDescription:
      "Revisamos bobinas, bujias y comportamiento de encendido para saber si la falla de arranque o vibracion viene de chispa irregular.",
    badges: [
      "No arranca o arranca mal",
      "Jaloneos y vibracion",
      "Perdida de potencia",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Le cuesta prender",
      "Vibra al encender",
      "Jalonea en marcha",
      "Pierde potencia",
      "Parece que trabaja en menos cilindros",
      "Check engine con vibracion",
    ],
    diagnosisFocus: [
      {
        title: "Calidad de chispa",
        description:
          "Identificamos si la combustion esta siendo afectada por chispa debil o irregular.",
      },
      {
        title: "Cruce con combustible",
        description:
          "Comparamos sintomas para diferenciar si el problema es encendido o suministro de combustible.",
      },
      {
        title: "Arranque y vibracion",
        description:
          "Estas dos senales suelen apuntar rapido a encendido cuando el resto del sistema esta estable.",
      },
      {
        title: "Decision rapida",
        description:
          "Te orientamos si conviene atacar bujias, bobinas, sensores o pasar a un diagnostico mas amplio.",
      },
    ],
    relatedSlugs: ["diagnostico", "sensores-automotrices", "reparacion-motores"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Revision base de falla", price: "Desde S/ 50" },
      { label: "Pruebas de encendido", price: "Segun evaluacion" },
      { label: "Solucion final", price: "Segun causa y piezas" },
    ],
    faq: [
      {
        question: "Como saber si la falla viene del encendido?",
        answer:
          "Cuando hay arranque dificil, vibracion, jaloneo o perdida de potencia sin una causa clara, conviene revisar la chispa y el sistema asociado.",
      },
      {
        question: "Una falla de encendido puede prender check engine?",
        answer:
          "Si. La combustión irregular suele generar codigos y luz de motor.",
      },
      {
        question: "Siempre hay que cambiar bobinas o bujias?",
        answer:
          "No. Primero hay que confirmar si realmente ese es el origen o si el problema viene de sensores, combustible o compresion.",
      },
      {
        question: "Sirve para autos que fallan solo en frio?",
        answer:
          "Si. El comportamiento en frio es una pista importante para orientar el diagnostico.",
      },
    ],
    quickOptions: [
      "Le cuesta prender",
      "Vibra",
      "Jalonea",
      "Pierde potencia",
    ],
    whatsappText:
      "Hola EDU MOTORS, necesito revisar el sistema de encendido de mi auto.",
    ctaTitle: "Sin buena chispa no hay potencia ni estabilidad",
    ctaDescription:
      "Escribenos si el auto vibra, jalonea o arranca mal y te orientamos con el siguiente paso.",
    ctaButton: "Quiero revisar el encendido",
  },
  "sistema-refrigeracion": {
    slug: "sistema-refrigeracion",
    group: "Urgencia",
    name: "Sistema de refrigeracion",
    cardTitle: "Sistema de refrigeracion en Lima Sur",
    cardDescription:
      "Para motores que se calientan, pierden liquido o trabajan a temperatura alta.",
    metaTitle:
      "Sistema de refrigeracion en Lima Sur | Auto se calienta | EDU MOTORS",
    metaDescription:
      "Revision de sistema de refrigeracion en Lima Sur para autos que se calientan, pierden refrigerante o muestran temperatura alta en trafico o subidas.",
    moneyKeyword: "auto se calienta lima sur",
    searchIntent: "Urgente",
    heroTitle: "Sistema de refrigeracion en Lima Sur",
    heroSubtitle: "Si tu auto se calienta, no conviene seguir usandolo como si nada",
    heroDescription:
      "Revisamos temperatura, refrigerante y componentes clave para saber si el problema es preventivo o si ya esta afectando al motor.",
    badges: [
      "Temperatura alta",
      "Ideal para trafico y subidas",
      "Evita dano mayor",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Se calienta en trafico",
      "Sube la temperatura en subidas",
      "Pierde refrigerante",
      "Prende ventilador muy seguido",
      "Ya hirvio una vez",
      "Tengo miedo de danar el motor",
    ],
    diagnosisFocus: [
      {
        title: "Temperatura real y comportamiento",
        description:
          "El contexto importa: no es igual calentarse en trafico que bajo carga o despues de rato.",
      },
      {
        title: "Cruce con dano de motor",
        description:
          "Si hubo sobrecalentamiento fuerte, revisamos si ya hay señales de problema mayor.",
      },
      {
        title: "Revision de componentes base",
        description:
          "Buscamos donde se esta generando el riesgo para no improvisar con una solucion temporal.",
      },
      {
        title: "Prioridad de atencion",
        description:
          "Te decimos si el auto se puede mover o si conviene detenerlo hasta revisar.",
      },
    ],
    relatedSlugs: ["reparacion-motores", "diagnostico", "mantenimiento-general"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Revision base de temperatura", price: "Desde S/ 50" },
      { label: "Pruebas complementarias", price: "Segun evaluacion" },
      { label: "Solucion final", price: "Cotizacion segun causa" },
    ],
    faq: [
      {
        question: "Si se calienta una sola vez, igual debo revisarlo?",
        answer:
          "Si. Una sola subida fuerte de temperatura ya puede anticipar un problema que luego escala.",
      },
      {
        question: "Se calienta en trafico pero no en carretera, eso que indica?",
        answer:
          "Ese contexto ayuda mucho. Puede apuntar a flujo de aire, ventilacion o comportamiento del sistema bajo baja velocidad.",
      },
      {
        question: "Puede terminar afectando al motor?",
        answer:
          "Si, por eso no conviene postergarlo si la temperatura ya se esta yendo por encima de lo normal.",
      },
      {
        question: "Es mejor pedir este servicio o revisar motor?",
        answer:
          "Si el problema principal es temperatura alta, esta pagina encaja bien. Si ya hay humo, mezcla rara o consumo de aceite, conviene mirar motor tambien.",
      },
    ],
    quickOptions: [
      "Se calienta",
      "Pierde refrigerante",
      "Sube temperatura",
      "Tengo miedo de danar motor",
    ],
    whatsappText:
      "Hola EDU MOTORS, mi auto se esta calentando y necesito orientacion.",
    ctaTitle: "Una temperatura mal manejada termina costando mucho mas",
    ctaDescription:
      "Escribenos si el auto se calienta en trafico, subidas o recorridos largos y te ayudamos a priorizar la revision.",
    ctaButton: "Quiero revisar la temperatura",
  },
  afinamiento: {
    slug: "afinamiento",
    group: "Recurrente",
    name: "Afinamiento automotriz",
    cardTitle: "Afinamiento en Lima Sur",
    cardDescription:
      "Para autos con consumo alto, respuesta lenta y mantenimiento atrasado.",
    metaTitle:
      "Afinamiento automotriz en Lima Sur | Consumo alto y mejor respuesta | EDU MOTORS",
    metaDescription:
      "Afinamiento automotriz en Lima Sur para autos con consumo alto, respuesta lenta, vibracion o mantenimiento atrasado. Ideal para prevenir fallas y bajar gasto.",
    moneyKeyword: "afinamiento automotriz lima sur",
    searchIntent: "Preventivo con impacto comercial",
    heroTitle: "Afinamiento automotriz en Lima Sur",
    heroSubtitle: "Cuando el auto gasta de mas o responde lento, muchas veces el problema esta en el mantenimiento base",
    heroDescription:
      "Te ayudamos a recuperar rendimiento, bajar consumo y prevenir una falla mayor si tu auto ya muestra senales de desgaste o mantenimiento atrasado.",
    badges: [
      "Ideal para consumo alto",
      "Previene fallas mayores",
      "Buena entrada para uso diario",
      "Atencion en Lima Sur",
    ],
    problemQueries: [
      "Consume mucho",
      "Se siente pesado",
      "Quiero prevenir fallas",
      "Uso el auto todos los dias",
      "Quiero mejor respuesta",
      "Hace tiempo no lo reviso",
    ],
    diagnosisFocus: [
      {
        title: "Consumo y respuesta",
        description:
          "Buscamos si la base de mantenimiento esta afectando gasto y potencia.",
      },
      {
        title: "Filtro, mezcla y combustion",
        description:
          "Una mala base de afinamiento puede amplificar sintomas de otros sistemas.",
      },
      {
        title: "Uso del vehiculo",
        description:
          "El tipo de recorrido y carga diaria influye en cuanto conviene ajustar y prevenir.",
      },
      {
        title: "Siguiente escalon",
        description:
          "Si al revisar vemos algo mayor, te decimos si conviene pasar a diagnostico o a un servicio mas especifico.",
      },
    ],
    relatedSlugs: ["mantenimiento-general", "diagnostico", "inyectores"],
    priceGuide: [
      { label: "Orientacion por WhatsApp", price: "Gratis" },
      { label: "Revision base", price: "Desde S/ 50" },
      { label: "Afinamiento segun unidad", price: "Desde S/ 150" },
      { label: "Plan final", price: "Cotizacion segun necesidades" },
    ],
    faq: [
      {
        question: "El afinamiento ayuda si mi auto consume mucho?",
        answer:
          "Si, sobre todo cuando el problema viene de mantenimiento atrasado, mezcla o desgaste basico, pero no reemplaza un diagnostico si la falla es mayor.",
      },
      {
        question: "Conviene hacer afinamiento antes de pensar en GNV o GLP?",
        answer:
          "Si. Tener el auto en mejor estado base ayuda a evaluar con mas criterio una conversion a gas.",
      },
      {
        question: "Sirve aunque el auto no tenga una falla fuerte?",
        answer:
          "Si. Es precisamente uno de los servicios que mejor funciona para prevenir que el problema escale.",
      },
      {
        question: "Y si despues del afinamiento sigue fallando?",
        answer:
          "Eso nos indica que la causa probablemente esta en un sistema mas especifico y se puede pasar a diagnostico con mejor contexto.",
      },
    ],
    quickOptions: [
      "Consume mucho",
      "Se siente pesado",
      "Quiero prevenir fallas",
      "Quiero mejor respuesta",
    ],
    whatsappText:
      "Hola EDU MOTORS, quiero revisar si mi auto necesita afinamiento.",
    ctaTitle: "Corregir la base suele costar menos que reparar una falla ya avanzada",
    ctaDescription:
      "Escribenos si tu auto gasta de mas o se siente pesado y te orientamos si conviene afinamiento o diagnostico.",
    ctaButton: "Quiero afinar mi auto",
  },
});

const zonePages = {
  "villa-el-salvador": {
    slug: "villa-el-salvador",
    name: "Villa El Salvador",
    metaTitle:
      "Mecanico en Villa El Salvador | Diagnostico, motor y GNV | EDU MOTORS",
    metaDescription:
      "Taller automotriz para Villa El Salvador. Revisamos autos que no arrancan, fallan al acelerar, consumen mucho o necesitan diagnostico, motor, bomba de gasolina y GNV.",
    heroTitle: "Mecanico en Villa El Salvador para fallas urgentes",
    heroDescription:
      "Si tu auto no arranca antes de salir a trabajar, se apaga en ruta o falla al acelerar, te ayudamos con diagnostico, combustible, motor y mantenimiento cerca de Lima Sur.",
    localSignals: [
      "Ideal para autos particulares, taxi y unidades de trabajo.",
      "Cobertura para vecinos que necesitan respuesta rapida en Lima Sur.",
      "Diagnostico antes de cambiar piezas o perder dias de trabajo.",
    ],
    commonProblems: [
      {
        title: "Auto no arranca temprano",
        description:
          "Suele requerir revisar bateria, alimentacion, bomba de gasolina y sensor CKP antes de comprar piezas.",
      },
      {
        title: "Pierde fuerza al acelerar",
        description:
          "Puede venir de combustible, inyectores, encendido o una falla mayor de motor.",
      },
      {
        title: "Check engine y consumo alto",
        description:
          "El diagnostico ayuda a saber si el problema esta en sensores, afinamiento o sistema de combustible.",
      },
    ],
    recommendedSlugs: [
      "diagnostico",
      "bomba-gasolina",
      "reparacion-motores",
      "conversion-gnv",
    ],
    faq: [
      {
        question: "Atienden Villa El Salvador si mi auto no arranca?",
        answer:
          "Si. Si estas en Villa El Salvador y tu auto no arranca, lo primero es orientarte por WhatsApp para definir si el problema apunta a bateria, combustible, sensor o motor.",
      },
      {
        question: "Que servicio suele necesitar un auto que pierde fuerza en Villa El Salvador?",
        answer:
          "Normalmente empezamos por diagnostico. Luego puede derivar en bomba de gasolina, inyectores, mantenimiento o revision de motor segun la falla real.",
      },
      {
        question: "Atienden conversiones a gas para vecinos de Villa El Salvador?",
        answer:
          "Si. Si usas el auto a diario o para trabajar, te orientamos sobre GNV o GLP segun kilometraje y presupuesto.",
      },
    ],
    quickOptions: [
      "Estoy en Villa El Salvador",
      "No arranca",
      "Pierde fuerza",
      "Prendio check engine",
    ],
    whatsappText:
      "Hola EDU MOTORS, estoy en Villa El Salvador y necesito ayuda con mi auto.",
  },
  lurin: {
    slug: "lurin",
    name: "Lurin",
    metaTitle: "Mecanico en Lurin | Diagnostico, mantenimiento y motor | EDU MOTORS",
    metaDescription:
      "Mecanico en Lurin para autos de uso diario y trabajo. Diagnostico automotriz, fallas de motor, mantenimiento, combustible y conversiones a gas con enfoque comercial.",
    heroTitle: "Mecanico en Lurin para autos que trabajan duro",
    heroDescription:
      "Si tu vehiculo recorre trayectos largos, carga trabajo diario o ya presenta fallas de arranque, potencia o consumo, te ayudamos a detectar la causa y priorizar la solucion.",
    localSignals: [
      "Buen enfoque para autos particulares, vans y unidades de trabajo.",
      "Diagnostico util si el vehiculo no puede parar varios dias.",
      "Soluciones para consumo alto, fallas de ruta y mantenimiento preventivo.",
    ],
    commonProblems: [
      {
        title: "Auto de trabajo con consumo elevado",
        description:
          "Conviene revisar mantenimiento, inyectores, sensores y afinamiento antes de pensar en una falla mayor.",
      },
      {
        title: "Se apaga o falla en ruta",
        description:
          "Puede involucrar combustible, temperatura, encendido o una falla electrica intermitente.",
      },
      {
        title: "Quiero bajar costo por kilometro",
        description:
          "Si usas mucho el vehiculo, vale la pena evaluar mantenimiento correcto y conversion a gas.",
      },
    ],
    recommendedSlugs: [
      "diagnostico",
      "mantenimiento-general",
      "conversion-gnv",
      "reparacion-motores",
    ],
    faq: [
      {
        question: "Atienden vehiculos de trabajo en Lurin?",
        answer:
          "Si. Entendemos que cuando el auto produce ingresos, la prioridad es diagnosticar bien y reducir tiempo parado.",
      },
      {
        question: "Que recomiendan si mi auto en Lurin gasta mucho combustible?",
        answer:
          "Empezar por un diagnostico y mantenimiento base. Si el kilometraje lo justifica, luego evaluar GNV o GLP.",
      },
      {
        question: "Atienden fallas que aparecen solo en trayectos largos?",
        answer:
          "Si. Sobre todo temperatura, alimentacion de combustible y fallas electricas que no siempre se presentan en frio.",
      },
    ],
    quickOptions: [
      "Estoy en Lurin",
      "Uso el auto para trabajar",
      "Consume mucho",
      "Se apaga en ruta",
    ],
    whatsappText:
      "Hola EDU MOTORS, estoy en Lurin y necesito revisar una falla en mi auto.",
  },
  "san-juan-de-miraflores": {
    slug: "san-juan-de-miraflores",
    name: "San Juan de Miraflores",
    metaTitle:
      "Mecanico en San Juan de Miraflores | Auto no arranca, diagnostico y GNV | EDU MOTORS",
    metaDescription:
      "Mecanico en San Juan de Miraflores para autos que no arrancan, se apagan, consumen mucho o necesitan diagnostico, bomba de gasolina, motor y conversiones a gas.",
    heroTitle: "Mecanico en San Juan de Miraflores para resolver la falla rapido",
    heroDescription:
      "Si tu auto falla en ciudad, se apaga en semaforos, prende check engine o ya no responde al acelerar, te ayudamos con diagnostico, combustible, motor y ahorro en combustible.",
    localSignals: [
      "Pensado para trayectos urbanos, congestion y uso diario intenso.",
      "Diagnostico util cuando la falla aparece en semaforos o en trafico.",
      "Atencion para autos particulares y de trabajo en Lima Sur.",
    ],
    commonProblems: [
      {
        title: "Se apaga en trafico o semaforos",
        description:
          "Suele apuntar a combustible, cuerpo de aceleracion, sensores o ralenti inestable.",
      },
      {
        title: "Check engine con jaloneos",
        description:
          "Un escaneo bien hecho ayuda a no perder dinero cambiando partes equivocadas.",
      },
      {
        title: "Busco ahorrar porque uso el auto todos los dias",
        description:
          "Si el kilometraje acompana, vale la pena evaluar conversion a gas despues de revisar el estado base.",
      },
    ],
    recommendedSlugs: [
      "diagnostico",
      "bomba-gasolina",
      "conversion-gnv",
      "mantenimiento-general",
    ],
    faq: [
      {
        question: "Atienden San Juan de Miraflores si mi auto se apaga en semaforos?",
        answer:
          "Si. Ese sintoma suele requerir revisar ralenti, cuerpo de aceleracion, sensores, combustible y alimentacion electrica.",
      },
      {
        question: "Puedo pedir orientacion si solo tengo sintomas y no se cual servicio necesito?",
        answer:
          "Si. Justamente el objetivo del diagnostico es convertir sintomas en una ruta clara de solucion.",
      },
      {
        question: "Atienden conversion a gas para San Juan de Miraflores?",
        answer:
          "Si. Si buscas bajar gasto por uso diario, evaluamos primero si tu vehiculo y kilometraje hacen sentido.",
      },
    ],
    quickOptions: [
      "Estoy en SJM",
      "Se apaga en semaforo",
      "Check engine",
      "Busco ahorro",
    ],
    whatsappText:
      "Hola EDU MOTORS, estoy en San Juan de Miraflores y necesito ayuda con mi auto.",
  },
  "villa-maria-del-triunfo": {
    slug: "villa-maria-del-triunfo",
    name: "Villa Maria del Triunfo",
    metaTitle:
      "Mecanico en Villa Maria del Triunfo | Falla motor, diagnostico y combustible | EDU MOTORS",
    metaDescription:
      "Mecanico en Villa Maria del Triunfo para autos con falla de motor, perdida de fuerza, consumo alto, arranque pesado o necesidad de diagnostico automotriz.",
    heroTitle: "Mecanico en Villa Maria del Triunfo para autos que ya dan senales",
    heroDescription:
      "Si tu auto vibra, pierde fuerza, se recalienta o gasta mas de lo normal, te ayudamos a detectar si la falla viene del motor, combustible, sensores o mantenimiento atrasado.",
    localSignals: [
      "Enfoque util para autos con uso diario y trayectos exigentes.",
      "Diagnostico antes de gastar en piezas sin certeza.",
      "Atencion para prevenir fallas mayores en Lima Sur.",
    ],
    commonProblems: [
      {
        title: "Motor con ruido, vibracion o poca fuerza",
        description:
          "Puede ser desde encendido o combustible hasta una falla interna del motor.",
      },
      {
        title: "Temperatura alta y consumo elevado",
        description:
          "Conviene revisar mantenimiento, refrigeracion, sensores y estado general antes de que escale.",
      },
      {
        title: "No arranca o arranca con dificultad",
        description:
          "La causa puede estar en bateria, arranque, combustible o sensor de ciguenal.",
      },
    ],
    recommendedSlugs: [
      "reparacion-motores",
      "diagnostico",
      "bomba-gasolina",
      "mantenimiento-general",
    ],
    faq: [
      {
        question: "Atienden Villa Maria del Triunfo si mi auto pierde fuerza?",
        answer:
          "Si. Esa falla puede venir de motor, combustible, sensores o afinamiento. El diagnostico evita adivinar.",
      },
      {
        question: "Que pasa si mi auto vibra y gasta mucho combustible?",
        answer:
          "Suele requerir revisar afinamiento, inyectores, sensores, cuerpo de aceleracion y estado general del motor.",
      },
      {
        question: "Atienden revisiones preventivas en Villa Maria del Triunfo?",
        answer:
          "Si. El mantenimiento preventivo es clave si usas el auto a diario y quieres evitar una parada mas costosa.",
      },
    ],
    quickOptions: [
      "Estoy en VMT",
      "Pierde fuerza",
      "Se recalienta",
      "Consume mucho",
    ],
    whatsappText:
      "Hola EDU MOTORS, estoy en Villa Maria del Triunfo y necesito revisar mi auto.",
  },
  pachacamac: {
    slug: "pachacamac",
    name: "Pachacamac",
    metaTitle:
      "Mecanico en Pachacamac | Diagnostico, mantenimiento y conversion a gas | EDU MOTORS",
    metaDescription:
      "Mecanico en Pachacamac para autos con consumo alto, fallas de ruta, mantenimiento atrasado o interes en conversion a gas. Diagnostico y servicio automotriz en Lima Sur.",
    heroTitle: "Mecanico en Pachacamac para prevenir fallas y bajar gasto",
    heroDescription:
      "Si usas el auto en recorridos largos o buscas bajar gasto fijo, te ayudamos con diagnostico, mantenimiento y evaluacion de conversiones a gas segun el estado de tu unidad.",
    localSignals: [
      "Buen enfoque para trayectos largos y uso constante.",
      "Ideal si quieres prevenir fallas antes de ruta.",
      "Alternativas para consumo alto y ahorro en combustible.",
    ],
    commonProblems: [
      {
        title: "Consumo alto en recorridos largos",
        description:
          "A veces el problema es mantenimiento atrasado, otras veces conviene evaluar conversion a gas.",
      },
      {
        title: "Falla despues de varios kilometros",
        description:
          "Temperatura, combustible o alimentacion electrica pueden aparecer solo bajo carga.",
      },
      {
        title: "Quiero revisar el auto antes de invertir en GNV o GLP",
        description:
          "Lo ideal es validar primero el estado del motor y el uso real del vehiculo.",
      },
    ],
    recommendedSlugs: [
      "diagnostico",
      "mantenimiento-general",
      "conversion-gnv",
      "conversion-glp",
    ],
    faq: [
      {
        question: "Atienden diagnostico en Pachacamac si la falla aparece en ruta?",
        answer:
          "Si. Ese tipo de falla requiere revisar temperatura, combustible, sensores y carga de trabajo del motor.",
      },
      {
        question: "Me conviene GNV o GLP si uso el auto muchos kilometros?",
        answer:
          "Depende del vehiculo y del kilometraje. Si recorres bastante, conviene evaluarlo con datos y no por intuicion.",
      },
      {
        question: "Tambien hacen mantenimiento preventivo para viajes o trabajo?",
        answer:
          "Si. Es una buena forma de bajar riesgo de averia y sostener el rendimiento del vehiculo.",
      },
    ],
    quickOptions: [
      "Estoy en Pachacamac",
      "Falla en ruta",
      "Quiero GNV o GLP",
      "Quiero mantenimiento",
    ],
    whatsappText:
      "Hola EDU MOTORS, estoy en Pachacamac y necesito ayuda con mi auto.",
  },
  chorrillos: {
    slug: "chorrillos",
    name: "Chorrillos",
    metaTitle:
      "Mecanico en Chorrillos | Diagnostico, bomba de gasolina y mantenimiento | EDU MOTORS",
    metaDescription:
      "Mecanico en Chorrillos para autos que no arrancan, se apagan, fallan al acelerar o necesitan diagnostico automotriz, combustible y mantenimiento preventivo.",
    heroTitle: "Mecanico en Chorrillos con diagnostico y solucion clara",
    heroDescription:
      "Si tu auto falla en trayectos diarios, se apaga, pierde fuerza o ya consume mas de lo normal, te ayudamos a detectar la causa real y priorizar la reparacion correcta.",
    localSignals: [
      "Pensado para autos de uso diario y ciudad.",
      "Diagnostico rapido para fallas intermitentes.",
      "Soporte para prevenir gastos repetidos en mecanicos distintos.",
    ],
    commonProblems: [
      {
        title: "Arranque pesado o apagones",
        description:
          "Puede involucrar bateria, alimentacion, bomba de gasolina o sensores.",
      },
      {
        title: "Consumo alto con trayectos urbanos",
        description:
          "Mantenimiento, cuerpo de aceleracion, sensores e inyectores suelen ser la primera revision.",
      },
      {
        title: "Quiero una revision antes de seguir gastando",
        description:
          "El diagnostico ayuda a poner orden cuando ya cambiaste piezas y la falla sigue.",
      },
    ],
    recommendedSlugs: [
      "diagnostico",
      "bomba-gasolina",
      "mantenimiento-general",
      "conversion-glp",
    ],
    faq: [
      {
        question: "Atienden Chorrillos si mi auto no arranca?",
        answer:
          "Si. Empezamos por orientarte con sintomas y luego proponemos la revision que mejor encaja con la falla.",
      },
      {
        question: "Que hacen si mi auto consume mucho y falla a veces?",
        answer:
          "Revisamos mantenimiento, escaner, sensores, cuerpo de aceleracion y combustible para encontrar la causa real.",
      },
      {
        question: "Puedo pedir orientacion antes de ir al taller?",
        answer:
          "Si. La orientacion por WhatsApp ayuda a llegar con mejor contexto y a priorizar lo urgente.",
      },
    ],
    quickOptions: [
      "Estoy en Chorrillos",
      "No arranca",
      "Consume mucho",
      "Ya cambie piezas",
    ],
    whatsappText:
      "Hola EDU MOTORS, estoy en Chorrillos y necesito ayuda con mi auto.",
  },
};

const zoneAliases = {
  sjm: "san-juan-de-miraflores",
  vmt: "villa-maria-del-triunfo",
};

export const blogPosts = [
  {
    slug: "auto-no-arranca-lima-sur",
    title: "Auto no arranca: que revisar antes de gastar de mas en Lima Sur",
    metaTitle:
      "Auto no arranca en Lima Sur | Causas y solucion rapida | EDU MOTORS",
    metaDescription:
      "Si tu auto no arranca, revisa las causas mas comunes antes de cambiar piezas. Guia rapida sobre bateria, arranque, bomba de gasolina, sensores y diagnostico en Lima Sur.",
    excerpt:
      "Una guia para quien busca solucion rapida y no quiere perder dinero cambiando partes sin diagnostico.",
    intent: "Informacional con urgencia comercial",
    heroProblem:
      "Cuando el auto no arranca, la gente suele pensar primero en bateria. Pero muchas veces la falla esta en arranque, bomba de gasolina, sensor CKP o alimentacion electrica.",
    sections: [
      {
        title: "Las 4 causas mas comunes",
        points: [
          "Bateria descargada o bornes flojos.",
          "Motor de arranque o relay con fallo.",
          "Bomba de gasolina sin presion suficiente.",
          "Sensor de ciguenal, fusibles o falta de chispa.",
        ],
      },
      {
        title: "Lo que conviene revisar antes de comprar piezas",
        points: [
          "Si el tablero enciende normal o no.",
          "Si el motor gira o no gira al dar llave.",
          "Si se escucha la bomba de gasolina.",
          "Si la falla aparecio de golpe o ya venia avisando.",
        ],
      },
      {
        title: "Cuando debes escribir al taller hoy mismo",
        points: [
          "Si el auto ya se apago en la calle y no vuelve a encender.",
          "Si despues de pasar corriente sigue sin prender.",
          "Si se repite la falla cada manana o al calentar.",
          "Si ya cambiaste bateria o bujias y sigue igual.",
        ],
      },
    ],
    faq: [
      {
        question: "Si mi auto no arranca, siempre es bateria?",
        answer:
          "No. Tambien puede fallar el arranque, la bomba de gasolina, el sensor de ciguenal o la alimentacion electrica.",
      },
      {
        question: "Conviene cambiar la bomba de gasolina de frente?",
        answer:
          "No. Antes hay que revisar si realmente falta presion o si la falla esta en rele, fusible, cableado o chispa.",
      },
    ],
    relatedServiceSlug: "diagnostico",
    whatsappText:
      "Hola EDU MOTORS, mi auto no arranca y necesito orientacion.",
  },
  {
    slug: "falla-motor-al-acelerar-lima",
    title: "Falla de motor al acelerar: cuando es combustible, sensores o desgaste real",
    metaTitle:
      "Falla motor al acelerar | Causas comunes en Lima Sur | EDU MOTORS",
    metaDescription:
      "Si tu auto falla al acelerar, revisa si el problema apunta a combustible, inyectores, sensores, encendido o motor. Guia con enfoque practico para Lima Sur.",
    excerpt:
      "Una falla al acelerar no significa automaticamente motor danado. Muchas veces el problema viene de combustible, chispa o sensores.",
    intent: "Informacional con intencion transaccional",
    heroProblem:
      "Cuando el auto jalonea o pierde fuerza al acelerar, la prioridad es diferenciar si es una falla de mezcla, encendido, combustible o desgaste del motor.",
    sections: [
      {
        title: "Fallas que suelen confundirse",
        points: [
          "Inyectores sucios o con mala pulverizacion.",
          "Bomba de gasolina sin presion suficiente.",
          "Sensor MAP, TPS o CKP dando lectura erratica.",
          "Bujias, bobinas o cables con chispa irregular.",
        ],
      },
      {
        title: "Senales de que ya no conviene seguir manejando igual",
        points: [
          "Pierde potencia en subidas o al exigirlo.",
          "Prende check engine con vibracion.",
          "Se apaga al soltar o pisar acelerador.",
          "Hay humo, ruido o temperatura alta al mismo tiempo.",
        ],
      },
      {
        title: "La salida comercial correcta",
        points: [
          "Empezar por diagnostico automotriz.",
          "Revisar combustible y encendido antes de abrir motor.",
          "Priorizar lo urgente si el auto se usa para trabajar.",
          "Pedir presupuesto solo despues de confirmar la causa.",
        ],
      },
    ],
    faq: [
      {
        question: "Una falla al acelerar significa motor dañado?",
        answer:
          "No siempre. Muchas veces la causa esta en combustible, inyectores, sensores o chispa.",
      },
      {
        question: "Que servicio conviene pedir primero?",
        answer:
          "Lo mejor es pedir diagnostico. Asi se define si luego necesitas bomba, mantenimiento o reparacion de motor.",
      },
    ],
    relatedServiceSlug: "reparacion-motores",
    whatsappText:
      "Hola EDU MOTORS, mi auto falla al acelerar y necesito revisarlo.",
  },
  {
    slug: "bomba-gasolina-falla-sintomas",
    title: "Bomba de gasolina: sintomas que si ameritan revision inmediata",
    metaTitle:
      "Bomba de gasolina falla sintomas | Cuando revisar urgente | EDU MOTORS",
    metaDescription:
      "Descubre los sintomas mas claros de una bomba de gasolina en mal estado y que otras piezas pueden causar una falla parecida antes de cambiarla.",
    excerpt:
      "La bomba de gasolina rara vez se debe cambiar sin pruebas. Estos sintomas ayudan a orientar mejor la revision.",
    intent: "Informacional con urgencia alta",
    heroProblem:
      "Una bomba de gasolina con falla puede dejarte sin arranque, sin potencia o con apagones. Pero tambien hay fallas electricas y de inyeccion que se parecen mucho.",
    sections: [
      {
        title: "Sintomas mas comunes",
        points: [
          "Auto que no arranca o demora en prender.",
          "Perdida de potencia al acelerar.",
          "Apagones al calentar o en semaforos.",
          "Ruido anormal en el tanque y consumo elevado.",
        ],
      },
      {
        title: "Lo que tambien puede estar fallando",
        points: [
          "Relay o fusible de la bomba.",
          "Filtro de combustible tapado.",
          "Inyectores sucios o sin buen patron.",
          "Sensor CKP o falta de chispa.",
        ],
      },
      {
        title: "Como se evita gastar dos veces",
        points: [
          "Midiendo presion antes de cambiar la bomba.",
          "Revisando alimentacion electrica completa.",
          "Cruzar sintomas con escaneo y prueba mecanica.",
          "Cotizando solo cuando ya se confirmo la causa.",
        ],
      },
    ],
    faq: [
      {
        question: "La bomba de gasolina siempre avisa antes de fallar por completo?",
        answer:
          "No siempre, pero suele dar sintomas como arranque pesado, perdida de fuerza o apagones antes de dejar de funcionar.",
      },
      {
        question: "Si se escucha ruido en el tanque, ya hay que cambiarla?",
        answer:
          "No necesariamente. El ruido es una senal, pero lo correcto es revisar presion, alimentacion y estado general del sistema.",
      },
    ],
    relatedServiceSlug: "bomba-gasolina",
    whatsappText:
      "Hola EDU MOTORS, quiero revisar sintomas de bomba de gasolina en mi auto.",
  },
  {
    slug: "conversion-gnv-lima-precio",
    title: "Conversion a GNV en Lima: como evaluar si el precio realmente te conviene",
    metaTitle:
      "Conversion GNV Lima precio | Como saber si conviene | EDU MOTORS",
    metaDescription:
      "Antes de elegir una conversion a GNV por precio, revisa kilometraje, tipo de uso, estado del motor y retorno estimado. Guia practica para conductores de Lima Sur.",
    excerpt:
      "No se trata solo del precio de instalacion. La conversion a GNV tiene sentido cuando el kilometraje y el estado del auto justifican la inversion.",
    intent: "Comparativo con intencion alta",
    heroProblem:
      "Mucha gente busca conversion GNV Lima precio, pero la pregunta comercial correcta es si tu vehiculo y tu rutina hacen rentable la inversion.",
    sections: [
      {
        title: "Antes de pensar solo en el precio",
        points: [
          "Cuantos kilometros recorres al mes.",
          "Si el auto se usa para trabajo o solo fines de semana.",
          "Si el motor esta sano o ya falla.",
          "Si te conviene mas GNV, GLP o mejorar consumo primero.",
        ],
      },
      {
        title: "Casos donde suele hacer mas sentido",
        points: [
          "Taxi o auto de trabajo con alto kilometraje.",
          "Conductores que usan el auto todos los dias.",
          "Vehiculos en buen estado base y con mantenimiento al dia.",
          "Usuarios que quieren bajar costo fijo de combustible.",
        ],
      },
      {
        title: "Cuando primero conviene revisar otra cosa",
        points: [
          "Si el auto ya falla de motor o encendido.",
          "Si hay consumo alto por mal mantenimiento.",
          "Si no recorres suficiente kilometraje para recuperar la inversion.",
          "Si todavia no comparaste GNV vs GLP segun tu caso.",
        ],
      },
    ],
    faq: [
      {
        question: "Buscar solo el precio mas bajo de conversion GNV es buena idea?",
        answer:
          "No. Primero conviene validar si el auto esta apto y si el kilometraje justifica la inversion.",
      },
      {
        question: "Si mi auto ya falla, puedo convertir igual?",
        answer:
          "Lo recomendable es corregir primero la falla base. Una conversion no compensa un motor o sistema de encendido en mal estado.",
      },
    ],
    relatedServiceSlug: "conversion-gnv",
    whatsappText:
      "Hola EDU MOTORS, quiero evaluar si una conversion a GNV me conviene.",
  },
];

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getServiceBySlug(slug) {
  return servicePages[slug] || null;
}

export function getZoneBySlug(slug) {
  const normalizedSlug = zoneAliases[slug] || slug;
  const zone = zonePages[normalizedSlug];

  if (!zone) {
    return {
      slug,
      name: "Lima Sur",
      metaTitle: "Mecanico en Lima Sur | Diagnostico, motor y GNV | EDU MOTORS",
      metaDescription:
        "Taller automotriz en Lima Sur para fallas de motor, combustible, diagnostico, mantenimiento y conversiones a gas.",
      heroTitle: "Mecanico en Lima Sur para fallas urgentes",
      heroDescription:
        "Atendemos autos con fallas de arranque, potencia, consumo, check engine y necesidades de ahorro en combustible en distintas zonas de Lima Sur.",
      localSignals: [
        "Diagnostico rapido para sintomas urgentes.",
        "Soporte para autos particulares y de trabajo.",
        "Servicios de motor, combustible, GNV, GLP y mantenimiento.",
      ],
      commonProblems: [
        {
          title: "Auto no arranca o arranca con dificultad",
          description:
            "Suele requerir revisar bateria, arranque, bomba de gasolina y sensores.",
        },
        {
          title: "Pierde fuerza, consume mucho o prende check engine",
          description:
            "El diagnostico ayuda a definir si el problema es combustible, sensores, afinamiento o motor.",
        },
      ],
      recommendedSlugs: ["diagnostico", "bomba-gasolina", "reparacion-motores", "conversion-gnv"],
      faq: [
        {
          question: "Atienden en mi zona de Lima Sur?",
          answer:
            "Si. Trabajamos con clientes de distintas zonas de Lima Sur. Escribenos tu ubicacion y el sintoma del vehiculo para orientarte.",
        },
      ],
      quickOptions: [
        "Estoy en Lima Sur",
        "No arranca",
        "Pierde fuerza",
        "Quiero diagnostico",
      ],
      whatsappText:
        "Hola EDU MOTORS, estoy en Lima Sur y necesito ayuda con mi auto.",
    };
  }

  return zone;
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}
