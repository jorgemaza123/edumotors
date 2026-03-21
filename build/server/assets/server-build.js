import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter, UNSAFE_withComponentProps, Outlet, useNavigate, useLocation, Meta, Links, ScrollRestoration, Scripts, useRouteError, useAsyncError, useParams } from 'react-router';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { useButton } from '@react-aria/button';
import React, { useState, useEffect, Component, useRef, useCallback } from 'react';
import { f as fetchWithHeaders } from './index-DVSnOkLB.js';
import { SessionProvider } from '@hono/auth-js/react';
import { toPng } from 'html-to-image';
import { serializeError } from 'serialize-error';
import { Toaster, toast } from 'sonner';
import { useIdleTimer } from 'react-idle-timer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import _JSXStyle from 'styled-jsx/style.js';
import { Phone, CheckCircle2, Zap, Battery, AlertTriangle, Fuel, ScanLine, Gauge, Wrench, Thermometer, Flame, Activity, Sparkles, RadioTower, Settings, ArrowRight, CheckCircle, User, MessageCircle, Play, Search, ClipboardCheck, ShieldCheck, HelpCircle, Tag, MapPin, Clock, Send, BriefcaseBusiness, Quote, Clock3, Minus, Plus, BadgeDollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams as useParams$1 } from 'react-router-dom';
import fg from 'fast-glob';
import 'node:async_hooks';
import 'node:console';
import '@auth/core';
import '@auth/core/providers/credentials';
import '@hono/auth-js';
import '@neondatabase/serverless';
import 'argon2';
import 'hono';
import 'hono/context-storage';
import 'hono/cors';
import 'hono/proxy';
import 'hono/body-limit';
import 'hono/request-id';
import 'hono/factory';
import '@hono/node-server';
import '@hono/node-server/serve-static';
import 'hono/logger';
import 'ws';
import '@auth/core/jwt';
import 'node:path';
import 'node:fs';
import 'node:url';
import '@react-router/dev/routes';
import 'node:fs/promises';

const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}

const entryServer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: 'Module' }));

function LoadFonts() {
  return /* @__PURE__ */ jsx(Fragment, {});
}

function useDevServerHeartbeat() {
  useIdleTimer({
    disabled: typeof window === "undefined",
    throttle: 6e4 * 3,
    timeout: 6e4,
    onAction: () => {
      fetch("/", {
        method: "GET"
      }).catch((error) => {
      });
    }
  });
}

const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined") return;
};
const initScrollTracking = () => {
  if (typeof window === "undefined") return;
  const handleScroll = () => {
    (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
  };
  window.addEventListener("scroll", handleScroll, {
    passive: true
  });
  return () => window.removeEventListener("scroll", handleScroll);
};

function meta({
  location
}) {
  const currentUrl = `https://edumotors.pe${location.pathname}`;
  return [{
    title: "EDU MOTORS | Taller Automotriz en Lima Sur - GNV y Reparación de Motores"
  }, {
    name: "description",
    content: "Mecánico especializado en Lima Sur (Villa El Salvador, Lurín, VMT). Reparación de motores, bombas de gasolina y conversión a GNV. Diagnóstico GRATIS hoy."
  }, {
    name: "keywords",
    content: "mecánico en Villa El Salvador, mecánico en Lurín, taller automotriz Lima Sur, reparación de motores en Lima Sur, conversión GNV Lima Sur, bomba de gasolina Lima Sur"
  }, {
    property: "og:title",
    content: "EDU MOTORS | Taller Automotriz en Lima Sur"
  }, {
    property: "og:description",
    content: "Atención inmediata en Lima Sur. Especialistas en motores y GNV. Diagnóstico gratis por WhatsApp."
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:image",
    content: "https://edumotors.pe/og-image.jpg"
  }, {
    property: "og:url",
    content: currentUrl
  }, {
    name: "twitter:card",
    content: "summary_large_image"
  }, {
    name: "twitter:title",
    content: "EDU MOTORS | Taller Automotriz en Lima Sur"
  }, {
    name: "twitter:description",
    content: "Atención inmediata en Lima Sur. Especialistas en motores y GNV. Diagnóstico gratis por WhatsApp."
  }, {
    name: "robots",
    content: "index, follow, max-image-preview:large"
  }, {
    rel: "canonical",
    href: currentUrl
  }];
}
const links = () => [];
if (globalThis.window && globalThis.window !== void 0) {
  globalThis.window.fetch = fetchWithHeaders;
}
const LoadFontsSSR = LoadFonts ;
function InternalErrorBoundary({
  error: errorArg
}) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);
  const shouldScale = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const scaleFactor = shouldScale ? 1.02 : 1;
  const copyButtonTextClass = shouldScale ? "text-sm" : "text-xs";
  const copyButtonPaddingClass = shouldScale ? "px-[10px] py-[5px]" : "px-[6px] py-[3px]";
  const postCountRef = useRef(0);
  const lastPostTimeRef = useRef(0);
  const lastErrorKeyRef = useRef(null);
  const MAX_ERROR_POSTS_PER_ERROR = 5;
  const THROTTLE_MS = 1e3;
  useEffect(() => {
    const serialized = serializeError(error);
    const errorKey = JSON.stringify(serialized);
    if (errorKey !== lastErrorKeyRef.current) {
      lastErrorKeyRef.current = errorKey;
      postCountRef.current = 0;
    }
    if (postCountRef.current >= MAX_ERROR_POSTS_PER_ERROR) {
      return;
    }
    const now = Date.now();
    const timeSinceLastPost = now - lastPostTimeRef.current;
    const post = () => {
      if (postCountRef.current >= MAX_ERROR_POSTS_PER_ERROR) {
        return;
      }
      postCountRef.current += 1;
      lastPostTimeRef.current = Date.now();
      window.parent.postMessage({
        type: "sandbox:error:detected",
        error: serialized
      }, "*");
    };
    if (timeSinceLastPost < THROTTLE_MS) {
      const timer = setTimeout(post, THROTTLE_MS - timeSinceLastPost);
      return () => clearTimeout(timer);
    }
    post();
  }, [error]);
  useEffect(() => {
    const animateTimer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(animateTimer);
  }, []);
  const {
    buttonProps: copyButtonProps
  } = useButton({
    onPress: useCallback(() => {
      const toastScale = shouldScale ? 1.2 : 1;
      const toastStyle = {
        padding: `${16 * toastScale}px`,
        background: "#18191B",
        border: "1px solid #2C2D2F",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: `${280 * toastScale}px`,
        fontSize: `${13 * toastScale}px`,
        display: "flex",
        alignItems: "center",
        gap: `${6 * toastScale}px`,
        justifyContent: "flex-start",
        margin: "0 auto"
      };
      navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
      toast.custom(() => /* @__PURE__ */ jsxs("div", {
        style: toastStyle,
        children: [/* @__PURE__ */ jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
          children: [/* @__PURE__ */ jsx("title", {
            children: "Success"
          }), /* @__PURE__ */ jsx("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd"
          })]
        }), /* @__PURE__ */ jsx("span", {
          children: "Copied successfully!"
        })]
      }), {
        id: "copy-error-success",
        duration: 3e3
      });
    }, [error, shouldScale])
  }, useRef(null));
  function isInIframe() {
    try {
      return window.parent !== window;
    } catch {
      return true;
    }
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: !isInIframe() && /* @__PURE__ */ jsx("div", {
      className: `fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-md z-50 transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`,
      style: {
        width: "75vw"
      },
      children: /* @__PURE__ */ jsx("div", {
        className: "bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 shadow-lg w-full",
        style: scaleFactor !== 1 ? {
          transform: `scale(${scaleFactor})`,
          transformOrigin: "bottom center"
        } : void 0,
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-start gap-3",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex-shrink-0",
            children: /* @__PURE__ */ jsx("div", {
              className: "w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center",
              children: /* @__PURE__ */ jsx("span", {
                className: "text-black text-[1.125rem] leading-none",
                children: "!"
              })
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col gap-2 flex-1",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex flex-col gap-1",
              children: [/* @__PURE__ */ jsx("p", {
                className: "font-light text-[#F2F2F2] text-sm",
                children: "App Error Detected"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-[#959697] text-sm font-light",
                children: "It looks like an error occurred while trying to use your app."
              })]
            }), /* @__PURE__ */ jsx("button", {
              className: `flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white ${copyButtonTextClass} ${copyButtonPaddingClass} w-fit`,
              type: "button",
              ...copyButtonProps,
              children: "Copy error"
            })]
          })]
        })
      })
    })
  });
}
class ErrorBoundaryWrapper extends Component {
  state = {
    hasError: false,
    error: null
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx(InternalErrorBoundary, {
        error: this.state.error,
        params: {}
      });
    }
    return this.props.children;
  }
}
function LoaderWrapper({
  loader
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: loader()
  });
}
const ClientOnly = ({
  loader
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return /* @__PURE__ */ jsx(ErrorBoundaryWrapper, {
    children: /* @__PURE__ */ jsx(LoaderWrapper, {
      loader
    })
  });
};
function useHmrConnection() {
  const [connected, setConnected] = useState(() => false);
  useEffect(() => {
    return;
  }, []);
  return connected;
}
const healthyResponseType = "sandbox:web:healthcheck:response";
const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected,
      supportsErrorDetected: true
    };
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:healthcheck") {
        window.parent.postMessage(healthyResponse, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage(healthyResponse, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [isHmrConnected]);
};
const waitForScreenshotReady = async () => {
  const images = Array.from(document.images);
  await Promise.all([
    // make sure custom fonts are loaded
    "fonts" in document ? document.fonts.ready : Promise.resolve(),
    ...images.map((img) => new Promise((resolve) => {
      img.crossOrigin = "anonymous";
      if (img.complete) {
        resolve(true);
        return;
      }
      img.onload = () => resolve(true);
      img.onerror = () => resolve(true);
    }))
  ]);
  await new Promise((resolve) => setTimeout(resolve, 250));
};
const useHandleScreenshotRequest = () => {
  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.data.type === "sandbox:web:screenshot:request") {
        try {
          await waitForScreenshotReady();
          const width = window.innerWidth;
          const aspectRatio = 16 / 9;
          const height = Math.floor(width / aspectRatio);
          const dataUrl = await toPng(document.body, {
            cacheBust: true,
            skipFonts: false,
            width,
            height,
            style: {
              // force snapshot sizing
              width: `${width}px`,
              height: `${height}px`,
              margin: "0"
            }
          });
          window.parent.postMessage({
            type: "sandbox:web:screenshot:response",
            dataUrl
          }, "*");
        } catch (error) {
          window.parent.postMessage({
            type: "sandbox:web:screenshot:error",
            error: error instanceof Error ? error.message : String(error)
          }, "*");
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
function Layout({
  children
}) {
  useHandshakeParent();
  useHandleScreenshotRequest();
  useDevServerHeartbeat();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  useEffect(() => {
    const cleanupScroll = initScrollTracking();
    return () => {
      if (cleanupScroll) cleanupScroll();
    };
  }, []);
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:navigation") {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage({
      type: "sandbox:web:ready"
    }, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);
  useEffect(() => {
    if (pathname) {
      window.parent.postMessage({
        type: "sandbox:web:navigation",
        pathname
      }, "*");
    }
  }, [pathname]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "es-PE",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), typeof undefined                                  !== "undefined", typeof undefined                                     !== "undefined", /* @__PURE__ */ jsx("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "EDU MOTORS",
            "image": "https://edumotors.pe/logo.png",
            "@id": "https://edumotors.pe",
            "url": "https://edumotors.pe",
            "telephone": "+51960812600",
            "areaServed": ["Villa El Salvador", "San Juan de Miraflores", "Villa Maria del Triunfo", "Lurin", "Pachacamac", "Chorrillos"],
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Principal S/N",
              "addressLocality": "Villa El Salvador",
              "addressRegion": "Lima",
              "postalCode": "15067",
              "addressCountry": "PE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -12.2032047,
              "longitude": -76.9427357
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          }).replace(/</g, "\\u003c")
        }
      }), /* @__PURE__ */ jsx("script", {
        type: "module",
        src: "/src/__create/dev-error-overlay.js"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/src/__create/favicon.png"
      }), LoadFontsSSR ? /* @__PURE__ */ jsx(LoadFontsSSR, {}) : null]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(ClientOnly, {
        loader: () => children
      }), /* @__PURE__ */ jsx(Toaster, {
        position: isMobile ? "top-center" : "bottom-right"
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx("script", {
        src: "https://kit.fontawesome.com/2c15cc0cc7.js",
        crossOrigin: "anonymous",
        async: true
      })]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(SessionProvider, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});

const route0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ClientOnly,
  Layout,
  default: root,
  links,
  meta,
  useHandleScreenshotRequest,
  useHmrConnection
}, Symbol.toStringTag, { value: 'Module' }));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      cacheTime: 1e3 * 60 * 30,
      // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
function RootLayout({
  children
}) {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children });
}

const businessData = {
  phoneDisplay: "960 812 600",
  phoneRaw: "960812600",
  whatsappNumber: "51960812600",
  address: "Av. Principal S/N, Villa El Salvador, Lima"};
const zoneLinks = [{
  slug: "villa-el-salvador",
  name: "Villa El Salvador",
  shortName: "Villa El Salvador"
}, {
  slug: "san-juan-de-miraflores",
  name: "San Juan de Miraflores",
  shortName: "SJM"
}, {
  slug: "villa-maria-del-triunfo",
  name: "Villa Maria del Triunfo",
  shortName: "VMT"
}, {
  slug: "lurin",
  name: "Lurin",
  shortName: "Lurin"
}, {
  slug: "pachacamac",
  name: "Pachacamac",
  shortName: "Pachacamac"
}, {
  slug: "chorrillos",
  name: "Chorrillos",
  shortName: "Chorrillos"
}];
const hiddenServices = [{
  title: "Revision de inyectores",
  description: "Cuando el motor tiembla, consume mucho o responde con tirones."
}, {
  title: "Revision de sensores CKP, MAP y TPS",
  description: "Clave si el auto no arranca, se apaga o falla al acelerar."
}, {
  title: "Sistema electrico automotriz",
  description: "Fusibles, relevos, alimentacion y tierras antes de cambiar piezas."
}, {
  title: "Limpieza de cuerpo de aceleracion",
  description: "Ayuda cuando hay ralenti inestable, jaloneos o perdida de respuesta."
}, {
  title: "Check engine y escaneo multimarca",
  description: "Ideal para detectar fallas reales y evitar gastos innecesarios."
}, {
  title: "Afinamiento y consumo alto",
  description: "Ajustes preventivos para recuperar rendimiento y ahorrar combustible."
}];
const servicePages = {
  "reparacion-motores": {
    slug: "reparacion-motores",
    group: "Urgencia",
    name: "Reparacion de motores",
    cardTitle: "Reparacion de motores en Lima Sur",
    cardDescription: "Cuando el motor pierde fuerza, humea, consume aceite o ya no responde como antes.",
    metaTitle: "Reparacion de motores en Lima Sur | Falla motor y perdida de potencia | EDU MOTORS",
    metaDescription: "Especialistas en reparacion de motores en Lima Sur. Revisamos compresion, fuga, temperatura y consumo de aceite con diagnostico claro y presupuesto antes de intervenir.",
    moneyKeyword: "reparacion de motores lima sur",
    searchIntent: "Urgente y transaccional",
    heroTitle: "Reparacion de motores en Lima Sur",
    heroSubtitle: "Si el motor falla, pierde fuerza o consume aceite, hay que revisar la causa real",
    heroDescription: "Atendemos motores con ruido, humo, temperatura alta, baja compresion y perdida de potencia. Primero diagnosticamos, luego te damos un presupuesto claro para reparar sin cambiar piezas a ciegas.",
    badges: ["Diagnostico claro antes de abrir motor", "Soporte para autos particulares y de trabajo", "Presupuesto transparente", "Atencion en Lima Sur"],
    problemQueries: ["Mi motor falla al acelerar", "El auto bota humo o consume aceite", "Se calienta en trafico o subidas", "Pierde fuerza y vibra al prender", "Hace ruido metalico o golpetea", "Prende check engine y no responde"],
    diagnosisFocus: [{
      title: "Compresion y estado interno",
      description: "Revisamos compresion, fugas y desgaste para saber si el problema es interno o periferico."
    }, {
      title: "Sistema de combustible",
      description: "La falla no siempre es del motor. Tambien evaluamos bomba, inyectores y presion."
    }, {
      title: "Temperatura y refrigeracion",
      description: "Cuando se recalienta, tambien revisamos radiador, termostato, electro y mangueras."
    }, {
      title: "Sensores y encendido",
      description: "Sensor CKP, bobinas, bujias y sincronizacion pueden provocar fallas que parecen mayores."
    }],
    relatedSlugs: ["diagnostico", "bomba-gasolina", "mantenimiento-general"],
    priceGuide: [{
      label: "Orientacion inicial por WhatsApp",
      price: "Gratis"
    }, {
      label: "Revision y diagnostico de falla",
      price: "Desde S/ 50"
    }, {
      label: "Pruebas complementarias de motor",
      price: "Segun evaluacion"
    }, {
      label: "Reparacion mayor de motor",
      price: "Cotizacion personalizada"
    }],
    faq: [{
      question: "Como saber si realmente necesito reparar el motor?",
      answer: "Si hay humo, ruido, perdida fuerte de potencia, consumo de aceite o temperatura alta, primero hay que medir compresion y revisar combustible, sensores y encendido. No siempre la solucion es abrir el motor."
    }, {
      question: "Cuanto demora una revision de falla de motor?",
      answer: "La revision inicial suele hacerse el mismo dia. Si se necesitan pruebas adicionales, te explicamos el tiempo exacto antes de intervenir."
    }, {
      question: "Tambien revisan fallas que parecen motor pero pueden ser otra cosa?",
      answer: "Si. Muchas fallas de potencia se originan en bomba de gasolina, inyectores, sensor de ciguenal o sistema electrico. Por eso hacemos diagnostico antes de cambiar piezas."
    }, {
      question: "Atienden autos de trabajo o taxi?",
      answer: "Si. Priorizamos casos donde el auto es herramienta de trabajo y el tiempo parado afecta ingresos."
    }],
    quickOptions: ["Pierde fuerza", "Bota humo", "Se calienta", "Consume aceite"],
    whatsappText: "Hola EDU MOTORS, necesito revisar una falla de motor en mi vehiculo.",
    ctaTitle: "Cuida el motor antes de que el dano escale",
    ctaDescription: "Escribenos con el sintoma exacto y te orientamos por WhatsApp para avanzar rapido.",
    ctaButton: "Quiero revisar mi motor"
  },
  "bomba-gasolina": {
    slug: "bomba-gasolina",
    group: "Urgencia",
    name: "Bomba de gasolina",
    cardTitle: "Bomba de gasolina en Lima Sur",
    cardDescription: "Diagnostico cuando el auto no arranca, se apaga o pierde fuerza al acelerar.",
    metaTitle: "Bomba de gasolina en Lima Sur | Auto no arranca o se apaga | EDU MOTORS",
    metaDescription: "Revision de bomba de gasolina en Lima Sur. Detectamos perdida de presion, rele, fusibles, inyectores y alimentacion antes de recomendar reemplazo.",
    moneyKeyword: "bomba de gasolina falla sintomas lima",
    searchIntent: "Urgente y transaccional",
    heroTitle: "Bomba de gasolina en Lima Sur",
    heroSubtitle: "Si tu auto no arranca, se apaga o no responde, puede ser combustible",
    heroDescription: "Revisamos presion, alimentacion electrica, rele, fusibles e inyectores para confirmar si la falla viene de la bomba de gasolina o de un componente relacionado.",
    badges: ["Ideal para autos que no arrancan", "Pruebas antes de reemplazar", "Atencion el mismo dia", "Cobertura Lima Sur"],
    problemQueries: ["Mi auto no arranca", "Se apaga en semaforos o en marcha", "Pierde fuerza al acelerar", "Le cuesta prender en frio", "Escucho ruido en el tanque", "Huele a gasolina o gasta mas de lo normal"],
    diagnosisFocus: [{
      title: "Presion y caudal de combustible",
      description: "Probamos si la bomba entrega la presion correcta antes de recomendar cambio."
    }, {
      title: "Rele, fusibles y alimentacion",
      description: "Una falla electrica puede parecer bomba danada y encarecer el diagnostico si no se revisa."
    }, {
      title: "Inyectores y filtro",
      description: "Combustible sucio, inyectores o filtro tapado generan sintomas casi identicos."
    }, {
      title: "Sensores de encendido",
      description: "Sensor CKP o fallas de chispa pueden hacerte pensar que el problema es la bomba."
    }],
    relatedSlugs: ["diagnostico", "mantenimiento-general", "reparacion-motores"],
    priceGuide: [{
      label: "Orientacion inicial por WhatsApp",
      price: "Gratis"
    }, {
      label: "Revision de presion y falla",
      price: "Desde S/ 50"
    }, {
      label: "Limpieza y prueba complementaria",
      price: "Desde S/ 80"
    }, {
      label: "Cambio de bomba con mano de obra",
      price: "Cotizacion segun modelo"
    }],
    faq: [{
      question: "Como saber si la bomba de gasolina esta fallando?",
      answer: "Los sintomas mas comunes son auto que no arranca, perdida de fuerza, apagones, ruido en el tanque y consumo elevado. Igual hay que medir presion antes de cambiar la pieza."
    }, {
      question: "Siempre hay que cambiar la bomba?",
      answer: "No. A veces la falla esta en rele, fusible, cableado, filtro, inyectores o alimentacion. Por eso revisamos el sistema completo."
    }, {
      question: "La revision se puede hacer el mismo dia?",
      answer: "Si. La evaluacion inicial suele resolverse el mismo dia y te damos el siguiente paso con precio claro."
    }, {
      question: "Atienden autos que se apagan en la calle o al calentar?",
      answer: "Si. Ese sintoma suele requerir revisar combustible, chispa y sensores al mismo tiempo para no perder tiempo ni dinero."
    }],
    quickOptions: ["No arranca", "Se apaga", "Pierde fuerza", "Huele a gasolina"],
    whatsappText: "Hola EDU MOTORS, necesito revisar la bomba de gasolina de mi vehiculo.",
    ctaTitle: "Evita quedarte botado por una falla de combustible",
    ctaDescription: "Escribenos apenas aparezca el sintoma y te guiamos con el siguiente paso por WhatsApp.",
    ctaButton: "Quiero revisar la bomba"
  },
  diagnostico: {
    slug: "diagnostico",
    group: "Entrada",
    name: "Diagnostico automotriz",
    cardTitle: "Diagnostico automotriz en Lima Sur",
    cardDescription: "La mejor puerta de entrada cuando no sabes si la falla es motor, combustible, sensores o sistema electrico.",
    metaTitle: "Diagnostico automotriz en Lima Sur | Check engine, escaner y fallas | EDU MOTORS",
    metaDescription: "Diagnostico automotriz en Lima Sur para autos que no arrancan, pierden fuerza o prenden check engine. Escaner, pruebas electricas y revision mecanica sin cambiar piezas a ciegas.",
    moneyKeyword: "diagnostico automotriz lima sur",
    searchIntent: "Alta intencion de entrada",
    heroTitle: "Diagnostico automotriz en Lima Sur",
    heroSubtitle: "Encuentra la falla real antes de gastar en repuestos innecesarios",
    heroDescription: "Si tu auto falla al prender, acelera mal, vibra o prende check engine, hacemos un diagnostico que combina escaner, pruebas electricas y revision mecanica para darte una ruta clara.",
    badges: ["Servicio ideal para primera consulta", "Escaner + revision tecnica", "Check engine y fallas intermitentes", "Atencion rapida en Lima Sur"],
    problemQueries: ["Prendio check engine", "Mi auto falla y no se por que", "Pierde fuerza al acelerar", "No arranca en las mananas", "Gasta mucho combustible", "Tiembla o jalonea al prender"],
    diagnosisFocus: [{
      title: "Escaner y lectura de codigos",
      description: "Vemos codigos y parametros para acortar tiempo y apuntar a la causa real."
    }, {
      title: "Pruebas electricas basicas",
      description: "Voltaje, tierras, fusibles y alimentacion para descartar fallas invisibles al escaner."
    }, {
      title: "Revision mecanica asociada",
      description: "No nos quedamos solo en la computadora. Revisamos combustible, vacios y componentes fisicos."
    }, {
      title: "Priorizacion comercial",
      description: "Te indicamos que resolver primero si el presupuesto es limitado o el auto se usa para trabajar."
    }],
    relatedSlugs: ["bomba-gasolina", "reparacion-motores", "mantenimiento-general"],
    priceGuide: [{
      label: "Orientacion inicial por WhatsApp",
      price: "Gratis"
    }, {
      label: "Escaneo y revision base",
      price: "Desde S/ 50"
    }, {
      label: "Pruebas adicionales segun falla",
      price: "Segun evaluacion"
    }, {
      label: "Presupuesto de reparacion",
      price: "Sin sorpresas"
    }],
    faq: [{
      question: "Que incluye un diagnostico automotriz?",
      answer: "Incluye escaneo, lectura de sintomas, revision visual y pruebas tecnicas basicas para encontrar la falla con mejor criterio."
    }, {
      question: "Sirve aunque el auto falle solo a veces?",
      answer: "Si. Las fallas intermitentes son comunes en sensores, alimentacion electrica y combustible, y se pueden orientar con sintomas y codigos."
    }, {
      question: "Me ayudan aunque otro mecanico ya cambio piezas?",
      answer: "Si. Muchos clientes llegan despues de gastar en partes que no eran la causa. Nuestro enfoque es diagnosticar antes de seguir cambiando piezas."
    }, {
      question: "En cuanto tiempo me dicen que tiene el auto?",
      answer: "La orientacion inicial es rapida y la revision base suele resolverse el mismo dia, segun disponibilidad y complejidad."
    }],
    quickOptions: ["Check engine", "Jalonea", "No arranca", "Consume mucho"],
    whatsappText: "Hola EDU MOTORS, necesito un diagnostico automotriz para mi vehiculo.",
    ctaTitle: "No gastes sin saber donde esta la falla",
    ctaDescription: "Escribenos el sintoma y te orientamos con un diagnostico inicial por WhatsApp.",
    ctaButton: "Quiero un diagnostico"
  }
};
function getServiceCatalog() {
  return Object.values(servicePages);
}
Object.assign(servicePages, {
  "conversion-gnv": {
    slug: "conversion-gnv",
    group: "Alto ticket",
    name: "Conversion a GNV",
    cardTitle: "Conversion a GNV en Lima Sur",
    cardDescription: "Para conductores que quieren bajar gasto fijo sin descuidar respuesta y seguridad.",
    metaTitle: "Conversion a GNV en Lima Sur | Ahorro en combustible y diagnostico previo | EDU MOTORS",
    metaDescription: "Conversion a GNV en Lima Sur para autos particulares, taxi y unidades de trabajo. Evalua si tu vehiculo aplica y recibe una propuesta segun uso, kilometraje y presupuesto.",
    moneyKeyword: "conversion gnv lima precio",
    searchIntent: "Alto ticket y comparativo",
    heroTitle: "Conversion a GNV en Lima Sur",
    heroSubtitle: "Convierte tu auto para ahorrar combustible sin improvisar la instalacion",
    heroDescription: "Te ayudamos a evaluar si tu vehiculo y tu uso diario justifican una conversion a GNV. Ideal para autos que recorren bastante y necesitan bajar costo por kilometro.",
    badges: ["Servicio alto ticket con enfoque en ahorro", "Ideal para taxi y auto de trabajo", "Consulta por compatibilidad y tiempos", "Atencion en Lima Sur"],
    problemQueries: ["Gasto demasiado en gasolina", "Quiero saber si me conviene GNV", "Uso mi auto para trabajar", "Busco precio de conversion GNV en Lima", "Quiero bajar costo por kilometro", "Necesito evaluar mi vehiculo antes de convertir"],
    diagnosisFocus: [{
      title: "Compatibilidad del vehiculo",
      description: "Revisamos estado general, uso y objetivo de ahorro antes de avanzar."
    }, {
      title: "Consumo y retorno estimado",
      description: "La conversion tiene mas sentido cuando el kilometraje compensa la inversion."
    }, {
      title: "Motor y mantenimiento previo",
      description: "Si el motor ya falla, conviene corregirlo antes de convertir para evitar problemas posteriores."
    }, {
      title: "Plan de trabajo claro",
      description: "Te explicamos tiempos, cuidados y que revisar despues de la conversion."
    }],
    relatedSlugs: ["diagnostico", "reparacion-motores", "mantenimiento-general"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Evaluacion previa del vehiculo",
      price: "Segun caso"
    }, {
      label: "Conversion a GNV",
      price: "Desde S/ 2,800"
    }, {
      label: "Plan final",
      price: "Segun equipo y vehiculo"
    }],
    faq: [{
      question: "Como saber si me conviene convertir a GNV?",
      answer: "Depende del kilometraje, tipo de uso y estado del motor. Si manejas bastante o usas el auto para trabajar, suele tener mejor retorno."
    }, {
      question: "Puedo convertir si mi auto ya tiene una falla?",
      answer: "Lo recomendable es resolver primero cualquier falla de motor, encendido o combustible antes de instalar el sistema."
    }, {
      question: "Cuanto cuesta convertir a GNV?",
      answer: "El precio depende del vehiculo y del equipo. Manejamos rangos referenciales y te damos una propuesta despues de revisar tu caso."
    }, {
      question: "Atienden consultas de ahorro y financiamiento?",
      answer: "Si. Si buscas bajar gasto mensual, te orientamos sobre escenarios posibles segun tu recorrido y presupuesto."
    }],
    quickOptions: ["Quiero ahorrar", "Uso taxi", "Busco precio GNV", "Quiero evaluar mi auto"],
    whatsappText: "Hola EDU MOTORS, quiero evaluar una conversion a GNV para mi vehiculo.",
    ctaTitle: "Evalua si GNV realmente te conviene",
    ctaDescription: "Escribenos cuanto recorres y que vehiculo usas para orientarte con enfoque comercial, no solo tecnico.",
    ctaButton: "Quiero evaluar GNV"
  },
  "conversion-glp": {
    slug: "conversion-glp",
    group: "Alto ticket",
    name: "Conversion a GLP",
    cardTitle: "Conversion a GLP en Lima Sur",
    cardDescription: "Alternativa para bajar gasto cuando buscas ahorro y una conversion bien evaluada.",
    metaTitle: "Conversion a GLP en Lima Sur | Evaluacion previa y ahorro en combustible | EDU MOTORS",
    metaDescription: "Conversion a GLP en Lima Sur con evaluacion previa del vehiculo, enfoque en seguridad y rendimiento diario. Consulta compatibilidad, tiempos y costos segun tu unidad.",
    moneyKeyword: "conversion glp lima",
    searchIntent: "Alto ticket y comparativo",
    heroTitle: "Conversion a GLP en Lima Sur",
    heroSubtitle: "Una opcion para reducir gasto de combustible con evaluacion previa",
    heroDescription: "Si buscas ahorrar combustible y comparar alternativas frente a gasolina o GNV, te ayudamos a evaluar si GLP encaja con tu vehiculo, tu recorrido y tu presupuesto.",
    badges: ["Evaluacion previa segun tu unidad", "Comparacion real con otras opciones", "Ideal para uso particular o mixto", "Atencion en Lima Sur"],
    problemQueries: ["Quiero ahorrar combustible", "Busco conversion GLP en Lima", "No se si elegir GLP o GNV", "Uso mi auto todos los dias", "Quiero revisar si mi vehiculo aplica", "Busco una alternativa de menor gasto"],
    diagnosisFocus: [{
      title: "Uso del vehiculo",
      description: "Analizamos kilometraje y rutina para elegir la opcion con mejor sentido economico."
    }, {
      title: "Estado actual del motor",
      description: "Una conversion bien hecha empieza revisando motor, encendido y mantenimiento base."
    }, {
      title: "Comparacion con GNV",
      description: "Te ayudamos a entender que opcion encaja mejor segun espacio, uso y retorno."
    }, {
      title: "Plan de instalacion y control",
      description: "La idea es que el ahorro no te genere nuevas fallas por una mala base mecanica."
    }],
    relatedSlugs: ["diagnostico", "mantenimiento-general", "reparacion-motores"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Evaluacion previa",
      price: "Segun caso"
    }, {
      label: "Conversion a GLP",
      price: "Cotizacion segun unidad"
    }, {
      label: "Revision post conversion",
      price: "Segun servicio"
    }],
    faq: [{
      question: "GLP o GNV: cual me conviene mas?",
      answer: "Depende del kilometraje, tipo de uso, espacio disponible y presupuesto. Si no lo tienes claro, te orientamos segun tu caso."
    }, {
      question: "Se puede convertir cualquier auto?",
      answer: "No siempre. Primero hay que revisar compatibilidad y estado mecanico para decidir si conviene avanzar."
    }, {
      question: "Necesito hacer mantenimiento antes de convertir?",
      answer: "Si el auto tiene fallas de motor, encendido o combustible, conviene solucionarlas antes para que la conversion funcione bien."
    }, {
      question: "Dan orientacion sobre tiempos y costos?",
      answer: "Si. Te damos una orientacion inicial por WhatsApp y, si tu unidad aplica, el siguiente paso para una propuesta mas precisa."
    }],
    quickOptions: ["Quiero GLP", "GLP o GNV", "Busco ahorro", "Quiero evaluar mi auto"],
    whatsappText: "Hola EDU MOTORS, quiero evaluar una conversion a GLP para mi vehiculo.",
    ctaTitle: "Compara ahorro sin comprometer el motor",
    ctaDescription: "Escribenos tu tipo de uso y te orientamos sobre GLP, GNV o una solucion mecanica previa.",
    ctaButton: "Quiero evaluar GLP"
  },
  "mantenimiento-general": {
    slug: "mantenimiento-general",
    group: "Recurrente",
    name: "Mantenimiento general",
    cardTitle: "Mantenimiento general en Lima Sur",
    cardDescription: "Prevencion para evitar que una falla pequena termine en un gasto mayor.",
    metaTitle: "Mantenimiento general en Lima Sur | Afinamiento, revision y consumo | EDU MOTORS",
    metaDescription: "Mantenimiento general en Lima Sur para autos con consumo alto, vibracion, arranque pesado o uso diario intenso. Revisamos los puntos clave para prevenir fallas mayores.",
    moneyKeyword: "mantenimiento automotriz lima sur",
    searchIntent: "Preventivo y recurrente",
    heroTitle: "Mantenimiento general en Lima Sur",
    heroSubtitle: "Previene fallas mayores antes de quedarte sin auto o sin tiempo",
    heroDescription: "Hacemos mantenimiento preventivo, afinamiento, revision de consumo y controles basicos para que tu auto no llegue al taller solo cuando el problema ya es caro.",
    badges: ["Ideal para autos de uso diario", "Ayuda a bajar riesgo de falla", "Control de consumo y rendimiento", "Cobertura Lima Sur"],
    problemQueries: ["Mi auto gasta mucho combustible", "Siento vibracion o respuesta lenta", "Quiero prevenir fallas del motor", "Necesito mantenimiento antes de viajar", "Uso el auto todos los dias para trabajar", "Quiero revisar frenos, aceite y puntos clave"],
    diagnosisFocus: [{
      title: "Control de consumo y afinamiento",
      description: "Ideal si el auto jala mas gasolina, pierde respuesta o trabaja forzado."
    }, {
      title: "Revision preventiva",
      description: "Detectamos alertas antes de que se conviertan en una parada costosa."
    }, {
      title: "Chequeo para autos de trabajo",
      description: "Si el vehiculo produce ingresos, conviene evitar fallas por desgaste acumulado."
    }, {
      title: "Base para conversion o viaje",
      description: "Tambien sirve como revision previa si piensas convertir a gas o salir a ruta."
    }],
    relatedSlugs: ["diagnostico", "conversion-gnv", "bomba-gasolina"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Mantenimiento preventivo base",
      price: "Desde S/ 120"
    }, {
      label: "Afinamiento y limpieza",
      price: "Desde S/ 150"
    }, {
      label: "Plan segun kilometraje",
      price: "Cotizacion segun unidad"
    }],
    faq: [{
      question: "Cada cuanto conviene hacer mantenimiento?",
      answer: "Depende del uso. Si manejas a diario o trabajas con tu auto, es mejor revisar por kilometraje y sintomas antes de esperar una falla grande."
    }, {
      question: "El mantenimiento ayuda con consumo alto?",
      answer: "Si. Muchas veces el consumo sube por afinamiento pendiente, inyectores, sensores o filtros descuidados."
    }, {
      question: "Puedo hacer mantenimiento si quiero convertir a gas despues?",
      answer: "Si. De hecho, revisar el estado base del auto antes de convertir ayuda a evitar problemas posteriores."
    }, {
      question: "Atienden mantenimiento para autos de uso comercial?",
      answer: "Si. Ajustamos la recomendacion segun el ritmo de trabajo del vehiculo y la urgencia por volver a circular."
    }],
    quickOptions: ["Consume mucho", "Quiero mantenimiento", "Uso el auto para trabajar", "Quiero prevenir fallas"],
    whatsappText: "Hola EDU MOTORS, quiero cotizar un mantenimiento general para mi vehiculo.",
    ctaTitle: "Manten tu auto produciendo, no parado",
    ctaDescription: "Escribenos si buscas prevenir fallas, bajar consumo o revisar puntos clave antes de un gasto mayor.",
    ctaButton: "Quiero mi mantenimiento"
  }
});
Object.assign(servicePages, {
  inyectores: {
    slug: "inyectores",
    group: "Entrada",
    name: "Revision de inyectores",
    cardTitle: "Inyectores en Lima Sur",
    cardDescription: "Cuando el auto jalonea, gasta mucho o pierde respuesta al acelerar.",
    metaTitle: "Revision de inyectores en Lima Sur | Jaloneos, consumo alto y perdida de potencia | EDU MOTORS",
    metaDescription: "Revision de inyectores en Lima Sur para autos con jaloneos, consumo alto, ralenti inestable y perdida de potencia. Diagnostico antes de cambiar piezas.",
    moneyKeyword: "inyectores lima sur",
    searchIntent: "Entrada con sintoma claro",
    heroTitle: "Revision de inyectores en Lima Sur",
    heroSubtitle: "Si tu auto jalonea, consume mucho o vibra, los inyectores pueden ser parte de la causa",
    heroDescription: "Revisamos si la mezcla, la pulverizacion o una obstruccion en inyectores esta afectando el rendimiento real de tu auto.",
    badges: ["Ideal para consumo alto", "Revision antes de reemplazar", "Compatible con diagnostico general", "Atencion en Lima Sur"],
    problemQueries: ["Jalonea al acelerar", "Consume mucho combustible", "Huele a gasolina", "Tiembla en ralenti", "Pierde fuerza en subidas", "Le cuesta responder al pisar"],
    diagnosisFocus: [{
      title: "Pulverizacion y mezcla",
      description: "Buscamos si la entrega de combustible esta afectando potencia, consumo o estabilidad."
    }, {
      title: "Filtro, presion y bomba",
      description: "A veces el sintoma parece inyector y la causa real esta en presion o alimentacion."
    }, {
      title: "Sensores asociados",
      description: "MAP, TPS o sensor de oxigeno pueden alterar la mezcla y confundirse con falla de inyectores."
    }, {
      title: "Prioridad comercial",
      description: "Te decimos si conviene limpiar, revisar mas a fondo o pasar primero por diagnostico general."
    }],
    relatedSlugs: ["diagnostico", "bomba-gasolina", "afinamiento"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Revision base de falla",
      price: "Desde S/ 50"
    }, {
      label: "Limpieza o prueba complementaria",
      price: "Segun evaluacion"
    }, {
      label: "Solucion final",
      price: "Cotizacion segun causa"
    }],
    faq: [{
      question: "Como saber si el problema si son los inyectores?",
      answer: "No se confirma solo por sintoma. Jaloneos y consumo alto tambien pueden venir de bomba, sensores, chispa o cuerpo de aceleracion."
    }, {
      question: "Siempre hay que limpiar inyectores?",
      answer: "No. Primero conviene ver si realmente aportan a la falla para no sumar un gasto que no resuelve el problema."
    }, {
      question: "La revision sirve si el auto solo falla a veces?",
      answer: "Si. Las fallas intermitentes de mezcla suelen aparecer por momentos y se pueden orientar con sintomas y pruebas."
    }, {
      question: "Conviene empezar por inyectores o por diagnostico?",
      answer: "Si no tienes claro el origen de la falla, lo mejor es empezar por diagnostico y luego definir si entran inyectores, combustible o encendido."
    }],
    quickOptions: ["Jalonea", "Consume mucho", "Tiembla", "Huele a gasolina"],
    whatsappText: "Hola EDU MOTORS, necesito revisar posible falla de inyectores en mi auto.",
    ctaTitle: "No dejes que una mala mezcla te haga gastar de mas",
    ctaDescription: "Escribenos el sintoma exacto y te orientamos si conviene revisar inyectores o ir por diagnostico general.",
    ctaButton: "Quiero revisar inyectores"
  },
  "sensores-automotrices": {
    slug: "sensores-automotrices",
    group: "Entrada",
    name: "Revision de sensores automotrices",
    cardTitle: "Sensores automotrices en Lima Sur",
    cardDescription: "Para autos que fallan de forma intermitente, no arrancan o prenden check engine.",
    metaTitle: "Sensores automotrices en Lima Sur | CKP, MAP, TPS y check engine | EDU MOTORS",
    metaDescription: "Revision de sensores automotrices en Lima Sur para autos con check engine, apagones, arranque dificil o perdida de potencia. CKP, MAP, TPS y mas.",
    moneyKeyword: "sensores automotrices lima sur",
    searchIntent: "Entrada informada",
    heroTitle: "Revision de sensores automotrices en Lima Sur",
    heroSubtitle: "Fallas intermitentes, apagones o check engine suelen apuntar a sensores y lecturas fuera de rango",
    heroDescription: "Revisamos los sensores que mas afectan arranque, mezcla, respuesta y estabilidad para no cambiar piezas al tanteo.",
    badges: ["Ideal para fallas intermitentes", "Check engine y apagones", "CKP, MAP, TPS y asociados", "Atencion en Lima Sur"],
    problemQueries: ["Prendio check engine", "Se apaga sin aviso", "No arranca a veces", "Pierde fuerza de forma rara", "Jalonea en ciertos momentos", "Falla al calentar"],
    diagnosisFocus: [{
      title: "Lectura con escaner",
      description: "Cruzamos codigos y parametros con el sintoma real para evitar falsas conclusiones."
    }, {
      title: "Revision de alimentacion y tierras",
      description: "No siempre el sensor esta mal. Tambien revisamos señal, voltaje y conexion."
    }, {
      title: "Prueba segun contexto",
      description: "Un sensor puede fallar en frio, en caliente o solo bajo carga. Lo orientamos segun tu caso."
    }, {
      title: "Siguiente paso claro",
      description: "Te indicamos si conviene seguir con sensor, combustible, encendido o una revision mas amplia."
    }],
    relatedSlugs: ["diagnostico", "check-engine", "sistema-electrico"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Escaneo y revision base",
      price: "Desde S/ 50"
    }, {
      label: "Pruebas de señal y continuidad",
      price: "Segun evaluacion"
    }, {
      label: "Solucion final",
      price: "Cotizacion segun pieza y causa"
    }],
    faq: [{
      question: "Como saber si el problema si es un sensor?",
      answer: "Por codigos, parametros, sintomas y pruebas. Cambiar un sensor solo por intuicion suele terminar en doble gasto."
    }, {
      question: "Que sensores suelen fallar mas?",
      answer: "Depende del caso, pero CKP, MAP, TPS y sensor de oxigeno suelen aparecer mucho en fallas de arranque, mezcla y respuesta."
    }, {
      question: "Si prende check engine, siempre es sensor?",
      answer: "No. El check engine puede venir de mezcla, encendido, combustible, emisiones o fallas electricas relacionadas."
    }, {
      question: "Conviene pedir este servicio o diagnostico general?",
      answer: "Si ya sospechas de sensores, sirve. Si no tienes claro el origen, mejor entrar por diagnostico general."
    }],
    quickOptions: ["Check engine", "Se apaga", "No arranca a veces", "Pierde fuerza"],
    whatsappText: "Hola EDU MOTORS, necesito revisar sensores automotrices en mi vehiculo.",
    ctaTitle: "Una mala lectura de sensor puede parecer una falla mucho mas cara",
    ctaDescription: "Escribenos el sintoma y te ayudamos a decidir si conviene revisar sensores o abrir un diagnostico mas amplio.",
    ctaButton: "Quiero revisar sensores"
  },
  "sistema-electrico": {
    slug: "sistema-electrico",
    group: "Urgencia",
    name: "Sistema electrico automotriz",
    cardTitle: "Sistema electrico en Lima Sur",
    cardDescription: "Para autos que no arrancan, se apagan o presentan fallas electricas intermitentes.",
    metaTitle: "Sistema electrico automotriz en Lima Sur | Auto no arranca o se apaga | EDU MOTORS",
    metaDescription: "Revision de sistema electrico automotriz en Lima Sur. Fusibles, relevos, tierras, alimentacion y fallas intermitentes para autos que no arrancan o se apagan.",
    moneyKeyword: "sistema electrico automotriz lima sur",
    searchIntent: "Urgente",
    heroTitle: "Sistema electrico automotriz en Lima Sur",
    heroSubtitle: "Si tu auto se apaga, no arranca o falla de forma rara, no siempre es motor",
    heroDescription: "Revisamos fusibles, relevos, tierras, alimentacion y puntos electricos criticos para evitar cambios innecesarios de bateria, bomba o sensores.",
    badges: ["Ideal para fallas intermitentes", "No arranca o se apaga", "Revision de alimentacion", "Atencion en Lima Sur"],
    problemQueries: ["No arranca sin razon clara", "Se apaga de repente", "Falla despues de pasar un bache", "A veces prende, a veces no", "Check engine sin causa clara", "Ya cambie piezas y sigue igual"],
    diagnosisFocus: [{
      title: "Fusibles, relevos y alimentacion",
      description: "Piezas simples pueden provocar sintomas que parecen fallas mayores."
    }, {
      title: "Tierras y continuidad",
      description: "Una mala tierra puede generar apagones, errores y arranque inestable."
    }, {
      title: "Cruce con sensores y combustible",
      description: "Confirmamos si el problema electrico esta afectando chispa, bomba o lectura de sensores."
    }, {
      title: "Ruta comercial clara",
      description: "Definimos si basta con corregir alimentacion o si el caso pide diagnostico integral."
    }],
    relatedSlugs: ["diagnostico", "sensores-automotrices", "sistema-encendido"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Revision electrica base",
      price: "Desde S/ 50"
    }, {
      label: "Pruebas complementarias",
      price: "Segun evaluacion"
    }, {
      label: "Reparacion final",
      price: "Cotizacion segun falla"
    }],
    faq: [{
      question: "Como saber si la falla es electrica y no mecanica?",
      answer: "Cuando el auto presenta sintomas intermitentes, apagones, fallas aleatorias o ya se cambiaron piezas sin resultado, conviene revisar la parte electrica."
    }, {
      question: "La falla electrica puede parecer bomba o sensor?",
      answer: "Si. Una alimentacion inestable puede simular falla de bomba, sensor o incluso arranque."
    }, {
      question: "Atienden fallas que aparecen y desaparecen?",
      answer: "Si. Ese es precisamente uno de los casos donde mas sentido tiene revisar sistema electrico."
    }, {
      question: "Conviene pedir este servicio si el auto no arranca?",
      answer: "Si el origen no esta claro, tambien puedes entrar por diagnostico y ahi se define si el problema es electrico, de combustible o de motor."
    }],
    quickOptions: ["No arranca", "Se apaga", "Falla intermitente", "Ya cambie piezas"],
    whatsappText: "Hola EDU MOTORS, necesito revisar una posible falla electrica en mi auto.",
    ctaTitle: "No sigas cambiando piezas si la falla puede ser electrica",
    ctaDescription: "Escribenos con el sintoma y te orientamos para descartar alimentacion, relevos o tierras antes de gastar mas.",
    ctaButton: "Quiero revisar sistema electrico"
  },
  "cuerpo-aceleracion": {
    slug: "cuerpo-aceleracion",
    group: "Entrada",
    name: "Cuerpo de aceleracion",
    cardTitle: "Cuerpo de aceleracion en Lima Sur",
    cardDescription: "Para ralenti inestable, apagones en semaforo y respuesta irregular al acelerar.",
    metaTitle: "Cuerpo de aceleracion en Lima Sur | Ralenti inestable y apagones | EDU MOTORS",
    metaDescription: "Revision de cuerpo de aceleracion en Lima Sur para autos con ralenti inestable, apagones, respuesta lenta o jaloneos en ciudad.",
    moneyKeyword: "cuerpo de aceleracion lima sur",
    searchIntent: "Sintoma claro urbano",
    heroTitle: "Revision de cuerpo de aceleracion en Lima Sur",
    heroSubtitle: "Cuando el auto tiembla en ralenti o se apaga en semaforos, hay que revisar admision y respuesta",
    heroDescription: "Evaluamos si el cuerpo de aceleracion y componentes asociados estan provocando ralenti inestable, apagones o una respuesta torpe al acelerar.",
    badges: ["Ideal para uso urbano", "Apagones en semaforo", "Ralenti inestable", "Atencion en Lima Sur"],
    problemQueries: ["Se apaga en semaforos", "Ralenti inestable", "Acelera raro", "Jalonea en ciudad", "Demora en responder", "Vibra al detenerme"],
    diagnosisFocus: [{
      title: "Respuesta y admision",
      description: "Buscamos si el flujo de aire y el control del ralenti estan afectando la estabilidad del motor."
    }, {
      title: "Cruce con sensores",
      description: "TPS, MAP u otros sensores pueden generar sintomas parecidos y deben cruzarse con la revision."
    }, {
      title: "Condicion urbana",
      description: "Estas fallas suelen aparecer mas en trafico, semaforos o baja velocidad."
    }, {
      title: "Siguiente paso",
      description: "Te indicamos si conviene revisar cuerpo, sensores, mezcla o arrancar por diagnostico completo."
    }],
    relatedSlugs: ["diagnostico", "sensores-automotrices", "afinamiento"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Revision base",
      price: "Desde S/ 50"
    }, {
      label: "Limpieza o ajuste segun caso",
      price: "Segun evaluacion"
    }, {
      label: "Solucion final",
      price: "Cotizacion segun falla"
    }],
    faq: [{
      question: "Se apaga en semaforo, siempre es cuerpo de aceleracion?",
      answer: "No siempre. Tambien puede ser mezcla, sensores, vacios, combustible o ralenti fuera de rango."
    }, {
      question: "Sirve revisar esto si el auto vibra al detenerme?",
      answer: "Si. Ese es uno de los sintomas mas comunes cuando el control de admision o ralenti no esta estable."
    }, {
      question: "Conviene limpiar el cuerpo sin revisar nada mas?",
      answer: "No por defecto. Si la causa real es sensor, mezcla o combustible, limpiar solo no resuelve."
    }, {
      question: "Puedo entrar por diagnostico general?",
      answer: "Si. Si no estas seguro del origen, diagnostico suele ser la mejor entrada."
    }],
    quickOptions: ["Se apaga en semaforo", "Ralenti inestable", "Vibra al detenerme", "Acelera raro"],
    whatsappText: "Hola EDU MOTORS, necesito revisar el cuerpo de aceleracion de mi auto.",
    ctaTitle: "Una mala respuesta en ciudad se vuelve una falla diaria",
    ctaDescription: "Escribenos si el auto se apaga en semaforos o trabaja inestable y te guiamos con el siguiente paso.",
    ctaButton: "Quiero revisar el cuerpo de aceleracion"
  },
  "check-engine": {
    slug: "check-engine",
    group: "Entrada",
    name: "Check engine",
    cardTitle: "Check engine en Lima Sur",
    cardDescription: "Para autos con luz de motor encendida, codigos de falla y sintomas sin causa clara.",
    metaTitle: "Check engine en Lima Sur | Escaneo y diagnostico de luz de motor | EDU MOTORS",
    metaDescription: "Revision de check engine en Lima Sur. Escaneo, lectura de codigos y diagnostico de sintomas para no cambiar piezas a ciegas.",
    moneyKeyword: "check engine lima sur",
    searchIntent: "Entrada inmediata",
    heroTitle: "Check engine en Lima Sur",
    heroSubtitle: "La luz de motor no dice la solucion. Solo indica donde empezar a investigar",
    heroDescription: "Leemos codigos, cruzamos sintomas y definimos si la falla apunta a sensores, mezcla, combustible, encendido o una revision mas profunda.",
    badges: ["Escaneo y contexto real", "Ideal para dudas iniciales", "Evita cambiar piezas al tanteo", "Atencion en Lima Sur"],
    problemQueries: ["Prendio check engine", "El auto sigue andando pero raro", "Jalonea y prende la luz", "Pierde fuerza con luz encendida", "Consume mas combustible", "No se que codigo tiene"],
    diagnosisFocus: [{
      title: "Lectura de codigos",
      description: "Extraemos el codigo, pero no nos quedamos solo ahi porque muchas veces el codigo no es la pieza exacta a cambiar."
    }, {
      title: "Cruce con sintomas",
      description: "La misma luz puede venir por mezcla, sensores, encendido, combustible o emisiones."
    }, {
      title: "Priorizacion",
      description: "Te decimos si es algo que puedes programar o si conviene atenderlo rapido."
    }, {
      title: "Salida comercial",
      description: "El objetivo es pasar del codigo a una ruta clara de solucion y presupuesto."
    }],
    relatedSlugs: ["diagnostico", "sensores-automotrices", "sistema-electrico"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Escaneo y revision base",
      price: "Desde S/ 50"
    }, {
      label: "Pruebas complementarias",
      price: "Segun evaluacion"
    }, {
      label: "Solucion final",
      price: "Segun causa"
    }],
    faq: [{
      question: "Si prende check engine, puedo seguir manejando?",
      answer: "Depende del sintoma. Si hay perdida fuerte de potencia, apagones o vibracion, conviene revisarlo rapido."
    }, {
      question: "Borrar el codigo resuelve el problema?",
      answer: "No. Solo limpia la señal temporalmente. Si la causa sigue, la luz volvera."
    }, {
      question: "El check engine siempre es un sensor?",
      answer: "No. Tambien puede estar relacionado con mezcla, combustible, encendido o emisiones."
    }, {
      question: "Es mejor pedir este servicio o diagnostico?",
      answer: "Si tu problema principal es la luz encendida, este servicio encaja bien. Si la falla es mas amplia, diagnostico general sigue siendo una gran entrada."
    }],
    quickOptions: ["Check engine", "Pierde fuerza", "Jalonea", "Consume mucho"],
    whatsappText: "Hola EDU MOTORS, prendio el check engine y necesito orientacion.",
    ctaTitle: "No conviertas una luz de alerta en una reparacion improvisada",
    ctaDescription: "Escribenos con el sintoma adicional y te ayudamos a priorizar la revision correcta.",
    ctaButton: "Quiero revisar el check engine"
  },
  "sistema-encendido": {
    slug: "sistema-encendido",
    group: "Urgencia",
    name: "Sistema de encendido",
    cardTitle: "Sistema de encendido en Lima Sur",
    cardDescription: "Para fallas de arranque, tirones, perdida de chispa y motor inestable.",
    metaTitle: "Sistema de encendido en Lima Sur | Bujias, bobinas y falla al arrancar | EDU MOTORS",
    metaDescription: "Revision de sistema de encendido en Lima Sur para autos que no arrancan bien, jalonean, vibran o pierden potencia por chispa irregular.",
    moneyKeyword: "sistema de encendido lima sur",
    searchIntent: "Urgente y sintomatico",
    heroTitle: "Sistema de encendido en Lima Sur",
    heroSubtitle: "Si no hay chispa estable, el motor falla aunque el problema parezca otro",
    heroDescription: "Revisamos bobinas, bujias y comportamiento de encendido para saber si la falla de arranque o vibracion viene de chispa irregular.",
    badges: ["No arranca o arranca mal", "Jaloneos y vibracion", "Perdida de potencia", "Atencion en Lima Sur"],
    problemQueries: ["Le cuesta prender", "Vibra al encender", "Jalonea en marcha", "Pierde potencia", "Parece que trabaja en menos cilindros", "Check engine con vibracion"],
    diagnosisFocus: [{
      title: "Calidad de chispa",
      description: "Identificamos si la combustion esta siendo afectada por chispa debil o irregular."
    }, {
      title: "Cruce con combustible",
      description: "Comparamos sintomas para diferenciar si el problema es encendido o suministro de combustible."
    }, {
      title: "Arranque y vibracion",
      description: "Estas dos senales suelen apuntar rapido a encendido cuando el resto del sistema esta estable."
    }, {
      title: "Decision rapida",
      description: "Te orientamos si conviene atacar bujias, bobinas, sensores o pasar a un diagnostico mas amplio."
    }],
    relatedSlugs: ["diagnostico", "sensores-automotrices", "reparacion-motores"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Revision base de falla",
      price: "Desde S/ 50"
    }, {
      label: "Pruebas de encendido",
      price: "Segun evaluacion"
    }, {
      label: "Solucion final",
      price: "Segun causa y piezas"
    }],
    faq: [{
      question: "Como saber si la falla viene del encendido?",
      answer: "Cuando hay arranque dificil, vibracion, jaloneo o perdida de potencia sin una causa clara, conviene revisar la chispa y el sistema asociado."
    }, {
      question: "Una falla de encendido puede prender check engine?",
      answer: "Si. La combustión irregular suele generar codigos y luz de motor."
    }, {
      question: "Siempre hay que cambiar bobinas o bujias?",
      answer: "No. Primero hay que confirmar si realmente ese es el origen o si el problema viene de sensores, combustible o compresion."
    }, {
      question: "Sirve para autos que fallan solo en frio?",
      answer: "Si. El comportamiento en frio es una pista importante para orientar el diagnostico."
    }],
    quickOptions: ["Le cuesta prender", "Vibra", "Jalonea", "Pierde potencia"],
    whatsappText: "Hola EDU MOTORS, necesito revisar el sistema de encendido de mi auto.",
    ctaTitle: "Sin buena chispa no hay potencia ni estabilidad",
    ctaDescription: "Escribenos si el auto vibra, jalonea o arranca mal y te orientamos con el siguiente paso.",
    ctaButton: "Quiero revisar el encendido"
  },
  "sistema-refrigeracion": {
    slug: "sistema-refrigeracion",
    group: "Urgencia",
    name: "Sistema de refrigeracion",
    cardTitle: "Sistema de refrigeracion en Lima Sur",
    cardDescription: "Para motores que se calientan, pierden liquido o trabajan a temperatura alta.",
    metaTitle: "Sistema de refrigeracion en Lima Sur | Auto se calienta | EDU MOTORS",
    metaDescription: "Revision de sistema de refrigeracion en Lima Sur para autos que se calientan, pierden refrigerante o muestran temperatura alta en trafico o subidas.",
    moneyKeyword: "auto se calienta lima sur",
    searchIntent: "Urgente",
    heroTitle: "Sistema de refrigeracion en Lima Sur",
    heroSubtitle: "Si tu auto se calienta, no conviene seguir usandolo como si nada",
    heroDescription: "Revisamos temperatura, refrigerante y componentes clave para saber si el problema es preventivo o si ya esta afectando al motor.",
    badges: ["Temperatura alta", "Ideal para trafico y subidas", "Evita dano mayor", "Atencion en Lima Sur"],
    problemQueries: ["Se calienta en trafico", "Sube la temperatura en subidas", "Pierde refrigerante", "Prende ventilador muy seguido", "Ya hirvio una vez", "Tengo miedo de danar el motor"],
    diagnosisFocus: [{
      title: "Temperatura real y comportamiento",
      description: "El contexto importa: no es igual calentarse en trafico que bajo carga o despues de rato."
    }, {
      title: "Cruce con dano de motor",
      description: "Si hubo sobrecalentamiento fuerte, revisamos si ya hay señales de problema mayor."
    }, {
      title: "Revision de componentes base",
      description: "Buscamos donde se esta generando el riesgo para no improvisar con una solucion temporal."
    }, {
      title: "Prioridad de atencion",
      description: "Te decimos si el auto se puede mover o si conviene detenerlo hasta revisar."
    }],
    relatedSlugs: ["reparacion-motores", "diagnostico", "mantenimiento-general"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Revision base de temperatura",
      price: "Desde S/ 50"
    }, {
      label: "Pruebas complementarias",
      price: "Segun evaluacion"
    }, {
      label: "Solucion final",
      price: "Cotizacion segun causa"
    }],
    faq: [{
      question: "Si se calienta una sola vez, igual debo revisarlo?",
      answer: "Si. Una sola subida fuerte de temperatura ya puede anticipar un problema que luego escala."
    }, {
      question: "Se calienta en trafico pero no en carretera, eso que indica?",
      answer: "Ese contexto ayuda mucho. Puede apuntar a flujo de aire, ventilacion o comportamiento del sistema bajo baja velocidad."
    }, {
      question: "Puede terminar afectando al motor?",
      answer: "Si, por eso no conviene postergarlo si la temperatura ya se esta yendo por encima de lo normal."
    }, {
      question: "Es mejor pedir este servicio o revisar motor?",
      answer: "Si el problema principal es temperatura alta, esta pagina encaja bien. Si ya hay humo, mezcla rara o consumo de aceite, conviene mirar motor tambien."
    }],
    quickOptions: ["Se calienta", "Pierde refrigerante", "Sube temperatura", "Tengo miedo de danar motor"],
    whatsappText: "Hola EDU MOTORS, mi auto se esta calentando y necesito orientacion.",
    ctaTitle: "Una temperatura mal manejada termina costando mucho mas",
    ctaDescription: "Escribenos si el auto se calienta en trafico, subidas o recorridos largos y te ayudamos a priorizar la revision.",
    ctaButton: "Quiero revisar la temperatura"
  },
  afinamiento: {
    slug: "afinamiento",
    group: "Recurrente",
    name: "Afinamiento automotriz",
    cardTitle: "Afinamiento en Lima Sur",
    cardDescription: "Para autos con consumo alto, respuesta lenta y mantenimiento atrasado.",
    metaTitle: "Afinamiento automotriz en Lima Sur | Consumo alto y mejor respuesta | EDU MOTORS",
    metaDescription: "Afinamiento automotriz en Lima Sur para autos con consumo alto, respuesta lenta, vibracion o mantenimiento atrasado. Ideal para prevenir fallas y bajar gasto.",
    moneyKeyword: "afinamiento automotriz lima sur",
    searchIntent: "Preventivo con impacto comercial",
    heroTitle: "Afinamiento automotriz en Lima Sur",
    heroSubtitle: "Cuando el auto gasta de mas o responde lento, muchas veces el problema esta en el mantenimiento base",
    heroDescription: "Te ayudamos a recuperar rendimiento, bajar consumo y prevenir una falla mayor si tu auto ya muestra senales de desgaste o mantenimiento atrasado.",
    badges: ["Ideal para consumo alto", "Previene fallas mayores", "Buena entrada para uso diario", "Atencion en Lima Sur"],
    problemQueries: ["Consume mucho", "Se siente pesado", "Quiero prevenir fallas", "Uso el auto todos los dias", "Quiero mejor respuesta", "Hace tiempo no lo reviso"],
    diagnosisFocus: [{
      title: "Consumo y respuesta",
      description: "Buscamos si la base de mantenimiento esta afectando gasto y potencia."
    }, {
      title: "Filtro, mezcla y combustion",
      description: "Una mala base de afinamiento puede amplificar sintomas de otros sistemas."
    }, {
      title: "Uso del vehiculo",
      description: "El tipo de recorrido y carga diaria influye en cuanto conviene ajustar y prevenir."
    }, {
      title: "Siguiente escalon",
      description: "Si al revisar vemos algo mayor, te decimos si conviene pasar a diagnostico o a un servicio mas especifico."
    }],
    relatedSlugs: ["mantenimiento-general", "diagnostico", "inyectores"],
    priceGuide: [{
      label: "Orientacion por WhatsApp",
      price: "Gratis"
    }, {
      label: "Revision base",
      price: "Desde S/ 50"
    }, {
      label: "Afinamiento segun unidad",
      price: "Desde S/ 150"
    }, {
      label: "Plan final",
      price: "Cotizacion segun necesidades"
    }],
    faq: [{
      question: "El afinamiento ayuda si mi auto consume mucho?",
      answer: "Si, sobre todo cuando el problema viene de mantenimiento atrasado, mezcla o desgaste basico, pero no reemplaza un diagnostico si la falla es mayor."
    }, {
      question: "Conviene hacer afinamiento antes de pensar en GNV o GLP?",
      answer: "Si. Tener el auto en mejor estado base ayuda a evaluar con mas criterio una conversion a gas."
    }, {
      question: "Sirve aunque el auto no tenga una falla fuerte?",
      answer: "Si. Es precisamente uno de los servicios que mejor funciona para prevenir que el problema escale."
    }, {
      question: "Y si despues del afinamiento sigue fallando?",
      answer: "Eso nos indica que la causa probablemente esta en un sistema mas especifico y se puede pasar a diagnostico con mejor contexto."
    }],
    quickOptions: ["Consume mucho", "Se siente pesado", "Quiero prevenir fallas", "Quiero mejor respuesta"],
    whatsappText: "Hola EDU MOTORS, quiero revisar si mi auto necesita afinamiento.",
    ctaTitle: "Corregir la base suele costar menos que reparar una falla ya avanzada",
    ctaDescription: "Escribenos si tu auto gasta de mas o se siente pesado y te orientamos si conviene afinamiento o diagnostico.",
    ctaButton: "Quiero afinar mi auto"
  }
});
const zonePages = {
  "villa-el-salvador": {
    slug: "villa-el-salvador",
    name: "Villa El Salvador",
    metaTitle: "Mecanico en Villa El Salvador | Diagnostico, motor y GNV | EDU MOTORS",
    metaDescription: "Taller automotriz para Villa El Salvador. Revisamos autos que no arrancan, fallan al acelerar, consumen mucho o necesitan diagnostico, motor, bomba de gasolina y GNV.",
    heroTitle: "Mecanico en Villa El Salvador para fallas urgentes",
    heroDescription: "Si tu auto no arranca antes de salir a trabajar, se apaga en ruta o falla al acelerar, te ayudamos con diagnostico, combustible, motor y mantenimiento cerca de Lima Sur.",
    localSignals: ["Ideal para autos particulares, taxi y unidades de trabajo.", "Cobertura para vecinos que necesitan respuesta rapida en Lima Sur.", "Diagnostico antes de cambiar piezas o perder dias de trabajo."],
    commonProblems: [{
      title: "Auto no arranca temprano",
      description: "Suele requerir revisar bateria, alimentacion, bomba de gasolina y sensor CKP antes de comprar piezas."
    }, {
      title: "Pierde fuerza al acelerar",
      description: "Puede venir de combustible, inyectores, encendido o una falla mayor de motor."
    }, {
      title: "Check engine y consumo alto",
      description: "El diagnostico ayuda a saber si el problema esta en sensores, afinamiento o sistema de combustible."
    }],
    recommendedSlugs: ["diagnostico", "bomba-gasolina", "reparacion-motores", "conversion-gnv"],
    faq: [{
      question: "Atienden Villa El Salvador si mi auto no arranca?",
      answer: "Si. Si estas en Villa El Salvador y tu auto no arranca, lo primero es orientarte por WhatsApp para definir si el problema apunta a bateria, combustible, sensor o motor."
    }, {
      question: "Que servicio suele necesitar un auto que pierde fuerza en Villa El Salvador?",
      answer: "Normalmente empezamos por diagnostico. Luego puede derivar en bomba de gasolina, inyectores, mantenimiento o revision de motor segun la falla real."
    }, {
      question: "Atienden conversiones a gas para vecinos de Villa El Salvador?",
      answer: "Si. Si usas el auto a diario o para trabajar, te orientamos sobre GNV o GLP segun kilometraje y presupuesto."
    }],
    quickOptions: ["Estoy en Villa El Salvador", "No arranca", "Pierde fuerza", "Prendio check engine"],
    whatsappText: "Hola EDU MOTORS, estoy en Villa El Salvador y necesito ayuda con mi auto."
  },
  lurin: {
    slug: "lurin",
    name: "Lurin",
    metaTitle: "Mecanico en Lurin | Diagnostico, mantenimiento y motor | EDU MOTORS",
    metaDescription: "Mecanico en Lurin para autos de uso diario y trabajo. Diagnostico automotriz, fallas de motor, mantenimiento, combustible y conversiones a gas con enfoque comercial.",
    heroTitle: "Mecanico en Lurin para autos que trabajan duro",
    heroDescription: "Si tu vehiculo recorre trayectos largos, carga trabajo diario o ya presenta fallas de arranque, potencia o consumo, te ayudamos a detectar la causa y priorizar la solucion.",
    localSignals: ["Buen enfoque para autos particulares, vans y unidades de trabajo.", "Diagnostico util si el vehiculo no puede parar varios dias.", "Soluciones para consumo alto, fallas de ruta y mantenimiento preventivo."],
    commonProblems: [{
      title: "Auto de trabajo con consumo elevado",
      description: "Conviene revisar mantenimiento, inyectores, sensores y afinamiento antes de pensar en una falla mayor."
    }, {
      title: "Se apaga o falla en ruta",
      description: "Puede involucrar combustible, temperatura, encendido o una falla electrica intermitente."
    }, {
      title: "Quiero bajar costo por kilometro",
      description: "Si usas mucho el vehiculo, vale la pena evaluar mantenimiento correcto y conversion a gas."
    }],
    recommendedSlugs: ["diagnostico", "mantenimiento-general", "conversion-gnv", "reparacion-motores"],
    faq: [{
      question: "Atienden vehiculos de trabajo en Lurin?",
      answer: "Si. Entendemos que cuando el auto produce ingresos, la prioridad es diagnosticar bien y reducir tiempo parado."
    }, {
      question: "Que recomiendan si mi auto en Lurin gasta mucho combustible?",
      answer: "Empezar por un diagnostico y mantenimiento base. Si el kilometraje lo justifica, luego evaluar GNV o GLP."
    }, {
      question: "Atienden fallas que aparecen solo en trayectos largos?",
      answer: "Si. Sobre todo temperatura, alimentacion de combustible y fallas electricas que no siempre se presentan en frio."
    }],
    quickOptions: ["Estoy en Lurin", "Uso el auto para trabajar", "Consume mucho", "Se apaga en ruta"],
    whatsappText: "Hola EDU MOTORS, estoy en Lurin y necesito revisar una falla en mi auto."
  },
  "san-juan-de-miraflores": {
    slug: "san-juan-de-miraflores",
    name: "San Juan de Miraflores",
    metaTitle: "Mecanico en San Juan de Miraflores | Auto no arranca, diagnostico y GNV | EDU MOTORS",
    metaDescription: "Mecanico en San Juan de Miraflores para autos que no arrancan, se apagan, consumen mucho o necesitan diagnostico, bomba de gasolina, motor y conversiones a gas.",
    heroTitle: "Mecanico en San Juan de Miraflores para resolver la falla rapido",
    heroDescription: "Si tu auto falla en ciudad, se apaga en semaforos, prende check engine o ya no responde al acelerar, te ayudamos con diagnostico, combustible, motor y ahorro en combustible.",
    localSignals: ["Pensado para trayectos urbanos, congestion y uso diario intenso.", "Diagnostico util cuando la falla aparece en semaforos o en trafico.", "Atencion para autos particulares y de trabajo en Lima Sur."],
    commonProblems: [{
      title: "Se apaga en trafico o semaforos",
      description: "Suele apuntar a combustible, cuerpo de aceleracion, sensores o ralenti inestable."
    }, {
      title: "Check engine con jaloneos",
      description: "Un escaneo bien hecho ayuda a no perder dinero cambiando partes equivocadas."
    }, {
      title: "Busco ahorrar porque uso el auto todos los dias",
      description: "Si el kilometraje acompana, vale la pena evaluar conversion a gas despues de revisar el estado base."
    }],
    recommendedSlugs: ["diagnostico", "bomba-gasolina", "conversion-gnv", "mantenimiento-general"],
    faq: [{
      question: "Atienden San Juan de Miraflores si mi auto se apaga en semaforos?",
      answer: "Si. Ese sintoma suele requerir revisar ralenti, cuerpo de aceleracion, sensores, combustible y alimentacion electrica."
    }, {
      question: "Puedo pedir orientacion si solo tengo sintomas y no se cual servicio necesito?",
      answer: "Si. Justamente el objetivo del diagnostico es convertir sintomas en una ruta clara de solucion."
    }, {
      question: "Atienden conversion a gas para San Juan de Miraflores?",
      answer: "Si. Si buscas bajar gasto por uso diario, evaluamos primero si tu vehiculo y kilometraje hacen sentido."
    }],
    quickOptions: ["Estoy en SJM", "Se apaga en semaforo", "Check engine", "Busco ahorro"],
    whatsappText: "Hola EDU MOTORS, estoy en San Juan de Miraflores y necesito ayuda con mi auto."
  },
  "villa-maria-del-triunfo": {
    slug: "villa-maria-del-triunfo",
    name: "Villa Maria del Triunfo",
    metaTitle: "Mecanico en Villa Maria del Triunfo | Falla motor, diagnostico y combustible | EDU MOTORS",
    metaDescription: "Mecanico en Villa Maria del Triunfo para autos con falla de motor, perdida de fuerza, consumo alto, arranque pesado o necesidad de diagnostico automotriz.",
    heroTitle: "Mecanico en Villa Maria del Triunfo para autos que ya dan senales",
    heroDescription: "Si tu auto vibra, pierde fuerza, se recalienta o gasta mas de lo normal, te ayudamos a detectar si la falla viene del motor, combustible, sensores o mantenimiento atrasado.",
    localSignals: ["Enfoque util para autos con uso diario y trayectos exigentes.", "Diagnostico antes de gastar en piezas sin certeza.", "Atencion para prevenir fallas mayores en Lima Sur."],
    commonProblems: [{
      title: "Motor con ruido, vibracion o poca fuerza",
      description: "Puede ser desde encendido o combustible hasta una falla interna del motor."
    }, {
      title: "Temperatura alta y consumo elevado",
      description: "Conviene revisar mantenimiento, refrigeracion, sensores y estado general antes de que escale."
    }, {
      title: "No arranca o arranca con dificultad",
      description: "La causa puede estar en bateria, arranque, combustible o sensor de ciguenal."
    }],
    recommendedSlugs: ["reparacion-motores", "diagnostico", "bomba-gasolina", "mantenimiento-general"],
    faq: [{
      question: "Atienden Villa Maria del Triunfo si mi auto pierde fuerza?",
      answer: "Si. Esa falla puede venir de motor, combustible, sensores o afinamiento. El diagnostico evita adivinar."
    }, {
      question: "Que pasa si mi auto vibra y gasta mucho combustible?",
      answer: "Suele requerir revisar afinamiento, inyectores, sensores, cuerpo de aceleracion y estado general del motor."
    }, {
      question: "Atienden revisiones preventivas en Villa Maria del Triunfo?",
      answer: "Si. El mantenimiento preventivo es clave si usas el auto a diario y quieres evitar una parada mas costosa."
    }],
    quickOptions: ["Estoy en VMT", "Pierde fuerza", "Se recalienta", "Consume mucho"],
    whatsappText: "Hola EDU MOTORS, estoy en Villa Maria del Triunfo y necesito revisar mi auto."
  },
  pachacamac: {
    slug: "pachacamac",
    name: "Pachacamac",
    metaTitle: "Mecanico en Pachacamac | Diagnostico, mantenimiento y conversion a gas | EDU MOTORS",
    metaDescription: "Mecanico en Pachacamac para autos con consumo alto, fallas de ruta, mantenimiento atrasado o interes en conversion a gas. Diagnostico y servicio automotriz en Lima Sur.",
    heroTitle: "Mecanico en Pachacamac para prevenir fallas y bajar gasto",
    heroDescription: "Si usas el auto en recorridos largos o buscas bajar gasto fijo, te ayudamos con diagnostico, mantenimiento y evaluacion de conversiones a gas segun el estado de tu unidad.",
    localSignals: ["Buen enfoque para trayectos largos y uso constante.", "Ideal si quieres prevenir fallas antes de ruta.", "Alternativas para consumo alto y ahorro en combustible."],
    commonProblems: [{
      title: "Consumo alto en recorridos largos",
      description: "A veces el problema es mantenimiento atrasado, otras veces conviene evaluar conversion a gas."
    }, {
      title: "Falla despues de varios kilometros",
      description: "Temperatura, combustible o alimentacion electrica pueden aparecer solo bajo carga."
    }, {
      title: "Quiero revisar el auto antes de invertir en GNV o GLP",
      description: "Lo ideal es validar primero el estado del motor y el uso real del vehiculo."
    }],
    recommendedSlugs: ["diagnostico", "mantenimiento-general", "conversion-gnv", "conversion-glp"],
    faq: [{
      question: "Atienden diagnostico en Pachacamac si la falla aparece en ruta?",
      answer: "Si. Ese tipo de falla requiere revisar temperatura, combustible, sensores y carga de trabajo del motor."
    }, {
      question: "Me conviene GNV o GLP si uso el auto muchos kilometros?",
      answer: "Depende del vehiculo y del kilometraje. Si recorres bastante, conviene evaluarlo con datos y no por intuicion."
    }, {
      question: "Tambien hacen mantenimiento preventivo para viajes o trabajo?",
      answer: "Si. Es una buena forma de bajar riesgo de averia y sostener el rendimiento del vehiculo."
    }],
    quickOptions: ["Estoy en Pachacamac", "Falla en ruta", "Quiero GNV o GLP", "Quiero mantenimiento"],
    whatsappText: "Hola EDU MOTORS, estoy en Pachacamac y necesito ayuda con mi auto."
  },
  chorrillos: {
    slug: "chorrillos",
    name: "Chorrillos",
    metaTitle: "Mecanico en Chorrillos | Diagnostico, bomba de gasolina y mantenimiento | EDU MOTORS",
    metaDescription: "Mecanico en Chorrillos para autos que no arrancan, se apagan, fallan al acelerar o necesitan diagnostico automotriz, combustible y mantenimiento preventivo.",
    heroTitle: "Mecanico en Chorrillos con diagnostico y solucion clara",
    heroDescription: "Si tu auto falla en trayectos diarios, se apaga, pierde fuerza o ya consume mas de lo normal, te ayudamos a detectar la causa real y priorizar la reparacion correcta.",
    localSignals: ["Pensado para autos de uso diario y ciudad.", "Diagnostico rapido para fallas intermitentes.", "Soporte para prevenir gastos repetidos en mecanicos distintos."],
    commonProblems: [{
      title: "Arranque pesado o apagones",
      description: "Puede involucrar bateria, alimentacion, bomba de gasolina o sensores."
    }, {
      title: "Consumo alto con trayectos urbanos",
      description: "Mantenimiento, cuerpo de aceleracion, sensores e inyectores suelen ser la primera revision."
    }, {
      title: "Quiero una revision antes de seguir gastando",
      description: "El diagnostico ayuda a poner orden cuando ya cambiaste piezas y la falla sigue."
    }],
    recommendedSlugs: ["diagnostico", "bomba-gasolina", "mantenimiento-general", "conversion-glp"],
    faq: [{
      question: "Atienden Chorrillos si mi auto no arranca?",
      answer: "Si. Empezamos por orientarte con sintomas y luego proponemos la revision que mejor encaja con la falla."
    }, {
      question: "Que hacen si mi auto consume mucho y falla a veces?",
      answer: "Revisamos mantenimiento, escaner, sensores, cuerpo de aceleracion y combustible para encontrar la causa real."
    }, {
      question: "Puedo pedir orientacion antes de ir al taller?",
      answer: "Si. La orientacion por WhatsApp ayuda a llegar con mejor contexto y a priorizar lo urgente."
    }],
    quickOptions: ["Estoy en Chorrillos", "No arranca", "Consume mucho", "Ya cambie piezas"],
    whatsappText: "Hola EDU MOTORS, estoy en Chorrillos y necesito ayuda con mi auto."
  }
};
const zoneAliases = {
  sjm: "san-juan-de-miraflores",
  vmt: "villa-maria-del-triunfo"
};
const blogPosts = [{
  slug: "auto-no-arranca-lima-sur",
  title: "Auto no arranca: que revisar antes de gastar de mas en Lima Sur",
  metaTitle: "Auto no arranca en Lima Sur | Causas y solucion rapida | EDU MOTORS",
  metaDescription: "Si tu auto no arranca, revisa las causas mas comunes antes de cambiar piezas. Guia rapida sobre bateria, arranque, bomba de gasolina, sensores y diagnostico en Lima Sur.",
  excerpt: "Una guia para quien busca solucion rapida y no quiere perder dinero cambiando partes sin diagnostico.",
  intent: "Informacional con urgencia comercial",
  heroProblem: "Cuando el auto no arranca, la gente suele pensar primero en bateria. Pero muchas veces la falla esta en arranque, bomba de gasolina, sensor CKP o alimentacion electrica.",
  sections: [{
    title: "Las 4 causas mas comunes",
    points: ["Bateria descargada o bornes flojos.", "Motor de arranque o relay con fallo.", "Bomba de gasolina sin presion suficiente.", "Sensor de ciguenal, fusibles o falta de chispa."]
  }, {
    title: "Lo que conviene revisar antes de comprar piezas",
    points: ["Si el tablero enciende normal o no.", "Si el motor gira o no gira al dar llave.", "Si se escucha la bomba de gasolina.", "Si la falla aparecio de golpe o ya venia avisando."]
  }, {
    title: "Cuando debes escribir al taller hoy mismo",
    points: ["Si el auto ya se apago en la calle y no vuelve a encender.", "Si despues de pasar corriente sigue sin prender.", "Si se repite la falla cada manana o al calentar.", "Si ya cambiaste bateria o bujias y sigue igual."]
  }],
  faq: [{
    question: "Si mi auto no arranca, siempre es bateria?",
    answer: "No. Tambien puede fallar el arranque, la bomba de gasolina, el sensor de ciguenal o la alimentacion electrica."
  }, {
    question: "Conviene cambiar la bomba de gasolina de frente?",
    answer: "No. Antes hay que revisar si realmente falta presion o si la falla esta en rele, fusible, cableado o chispa."
  }],
  relatedServiceSlug: "diagnostico",
  whatsappText: "Hola EDU MOTORS, mi auto no arranca y necesito orientacion."
}, {
  slug: "falla-motor-al-acelerar-lima",
  title: "Falla de motor al acelerar: cuando es combustible, sensores o desgaste real",
  metaTitle: "Falla motor al acelerar | Causas comunes en Lima Sur | EDU MOTORS",
  metaDescription: "Si tu auto falla al acelerar, revisa si el problema apunta a combustible, inyectores, sensores, encendido o motor. Guia con enfoque practico para Lima Sur.",
  excerpt: "Una falla al acelerar no significa automaticamente motor danado. Muchas veces el problema viene de combustible, chispa o sensores.",
  intent: "Informacional con intencion transaccional",
  heroProblem: "Cuando el auto jalonea o pierde fuerza al acelerar, la prioridad es diferenciar si es una falla de mezcla, encendido, combustible o desgaste del motor.",
  sections: [{
    title: "Fallas que suelen confundirse",
    points: ["Inyectores sucios o con mala pulverizacion.", "Bomba de gasolina sin presion suficiente.", "Sensor MAP, TPS o CKP dando lectura erratica.", "Bujias, bobinas o cables con chispa irregular."]
  }, {
    title: "Senales de que ya no conviene seguir manejando igual",
    points: ["Pierde potencia en subidas o al exigirlo.", "Prende check engine con vibracion.", "Se apaga al soltar o pisar acelerador.", "Hay humo, ruido o temperatura alta al mismo tiempo."]
  }, {
    title: "La salida comercial correcta",
    points: ["Empezar por diagnostico automotriz.", "Revisar combustible y encendido antes de abrir motor.", "Priorizar lo urgente si el auto se usa para trabajar.", "Pedir presupuesto solo despues de confirmar la causa."]
  }],
  faq: [{
    question: "Una falla al acelerar significa motor dañado?",
    answer: "No siempre. Muchas veces la causa esta en combustible, inyectores, sensores o chispa."
  }, {
    question: "Que servicio conviene pedir primero?",
    answer: "Lo mejor es pedir diagnostico. Asi se define si luego necesitas bomba, mantenimiento o reparacion de motor."
  }],
  relatedServiceSlug: "reparacion-motores",
  whatsappText: "Hola EDU MOTORS, mi auto falla al acelerar y necesito revisarlo."
}, {
  slug: "bomba-gasolina-falla-sintomas",
  title: "Bomba de gasolina: sintomas que si ameritan revision inmediata",
  metaTitle: "Bomba de gasolina falla sintomas | Cuando revisar urgente | EDU MOTORS",
  metaDescription: "Descubre los sintomas mas claros de una bomba de gasolina en mal estado y que otras piezas pueden causar una falla parecida antes de cambiarla.",
  excerpt: "La bomba de gasolina rara vez se debe cambiar sin pruebas. Estos sintomas ayudan a orientar mejor la revision.",
  intent: "Informacional con urgencia alta",
  heroProblem: "Una bomba de gasolina con falla puede dejarte sin arranque, sin potencia o con apagones. Pero tambien hay fallas electricas y de inyeccion que se parecen mucho.",
  sections: [{
    title: "Sintomas mas comunes",
    points: ["Auto que no arranca o demora en prender.", "Perdida de potencia al acelerar.", "Apagones al calentar o en semaforos.", "Ruido anormal en el tanque y consumo elevado."]
  }, {
    title: "Lo que tambien puede estar fallando",
    points: ["Relay o fusible de la bomba.", "Filtro de combustible tapado.", "Inyectores sucios o sin buen patron.", "Sensor CKP o falta de chispa."]
  }, {
    title: "Como se evita gastar dos veces",
    points: ["Midiendo presion antes de cambiar la bomba.", "Revisando alimentacion electrica completa.", "Cruzar sintomas con escaneo y prueba mecanica.", "Cotizando solo cuando ya se confirmo la causa."]
  }],
  faq: [{
    question: "La bomba de gasolina siempre avisa antes de fallar por completo?",
    answer: "No siempre, pero suele dar sintomas como arranque pesado, perdida de fuerza o apagones antes de dejar de funcionar."
  }, {
    question: "Si se escucha ruido en el tanque, ya hay que cambiarla?",
    answer: "No necesariamente. El ruido es una senal, pero lo correcto es revisar presion, alimentacion y estado general del sistema."
  }],
  relatedServiceSlug: "bomba-gasolina",
  whatsappText: "Hola EDU MOTORS, quiero revisar sintomas de bomba de gasolina en mi auto."
}, {
  slug: "conversion-gnv-lima-precio",
  title: "Conversion a GNV en Lima: como evaluar si el precio realmente te conviene",
  metaTitle: "Conversion GNV Lima precio | Como saber si conviene | EDU MOTORS",
  metaDescription: "Antes de elegir una conversion a GNV por precio, revisa kilometraje, tipo de uso, estado del motor y retorno estimado. Guia practica para conductores de Lima Sur.",
  excerpt: "No se trata solo del precio de instalacion. La conversion a GNV tiene sentido cuando el kilometraje y el estado del auto justifican la inversion.",
  intent: "Comparativo con intencion alta",
  heroProblem: "Mucha gente busca conversion GNV Lima precio, pero la pregunta comercial correcta es si tu vehiculo y tu rutina hacen rentable la inversion.",
  sections: [{
    title: "Antes de pensar solo en el precio",
    points: ["Cuantos kilometros recorres al mes.", "Si el auto se usa para trabajo o solo fines de semana.", "Si el motor esta sano o ya falla.", "Si te conviene mas GNV, GLP o mejorar consumo primero."]
  }, {
    title: "Casos donde suele hacer mas sentido",
    points: ["Taxi o auto de trabajo con alto kilometraje.", "Conductores que usan el auto todos los dias.", "Vehiculos en buen estado base y con mantenimiento al dia.", "Usuarios que quieren bajar costo fijo de combustible."]
  }, {
    title: "Cuando primero conviene revisar otra cosa",
    points: ["Si el auto ya falla de motor o encendido.", "Si hay consumo alto por mal mantenimiento.", "Si no recorres suficiente kilometraje para recuperar la inversion.", "Si todavia no comparaste GNV vs GLP segun tu caso."]
  }],
  faq: [{
    question: "Buscar solo el precio mas bajo de conversion GNV es buena idea?",
    answer: "No. Primero conviene validar si el auto esta apto y si el kilometraje justifica la inversion."
  }, {
    question: "Si mi auto ya falla, puedo convertir igual?",
    answer: "Lo recomendable es corregir primero la falla base. Una conversion no compensa un motor o sistema de encendido en mal estado."
  }],
  relatedServiceSlug: "conversion-gnv",
  whatsappText: "Hola EDU MOTORS, quiero evaluar si una conversion a GNV me conviene."
}];
function buildWhatsAppUrl(message) {
  return `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function getServiceBySlug(slug) {
  return servicePages[slug] || null;
}
function getZoneBySlug(slug) {
  const normalizedSlug = zoneAliases[slug] || slug;
  const zone = zonePages[normalizedSlug];
  if (!zone) {
    return {
      slug,
      name: "Lima Sur",
      metaTitle: "Mecanico en Lima Sur | Diagnostico, motor y GNV | EDU MOTORS",
      metaDescription: "Taller automotriz en Lima Sur para fallas de motor, combustible, diagnostico, mantenimiento y conversiones a gas.",
      heroTitle: "Mecanico en Lima Sur para fallas urgentes",
      heroDescription: "Atendemos autos con fallas de arranque, potencia, consumo, check engine y necesidades de ahorro en combustible en distintas zonas de Lima Sur.",
      localSignals: ["Diagnostico rapido para sintomas urgentes.", "Soporte para autos particulares y de trabajo.", "Servicios de motor, combustible, GNV, GLP y mantenimiento."],
      commonProblems: [{
        title: "Auto no arranca o arranca con dificultad",
        description: "Suele requerir revisar bateria, arranque, bomba de gasolina y sensores."
      }, {
        title: "Pierde fuerza, consume mucho o prende check engine",
        description: "El diagnostico ayuda a definir si el problema es combustible, sensores, afinamiento o motor."
      }],
      recommendedSlugs: ["diagnostico", "bomba-gasolina", "reparacion-motores", "conversion-gnv"],
      faq: [{
        question: "Atienden en mi zona de Lima Sur?",
        answer: "Si. Trabajamos con clientes de distintas zonas de Lima Sur. Escribenos tu ubicacion y el sintoma del vehiculo para orientarte."
      }],
      quickOptions: ["Estoy en Lima Sur", "No arranca", "Pierde fuerza", "Quiero diagnostico"],
      whatsappText: "Hola EDU MOTORS, estoy en Lima Sur y necesito ayuda con mi auto."
    };
  }
  return zone;
}
function getBlogPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug) || null;
}

const navItems = [{
  href: "/servicios",
  label: "Servicios"
}, {
  href: "/problemas",
  label: "Problemas"
}, {
  href: "/zonas/villa-el-salvador",
  label: "Zonas"
}, {
  href: "/local",
  label: "Local"
}, {
  href: "/precios",
  label: "Precios"
}, {
  href: "/servicios/conversion-gnv",
  label: "GNV / GLP"
}, {
  href: "/blog",
  label: "Blog"
}];
const Header = () => {
  const whatsappUrl = buildWhatsAppUrl("Hola EDU MOTORS, necesito un diagnostico para mi vehiculo.");
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 left-0 right-0 z-40 bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 h-20 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#0055FF] rounded flex items-center justify-center font-bold text-white italic", children: "EM" }),
      /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xl tracking-tight italic", children: "EDU MOTORS" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-8 text-white/70 text-sm font-medium", children: navItems.map((item) => /* @__PURE__ */ jsx("a", { href: item.href, className: "hover:text-white transition-colors", children: item.label }, item.href)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxs("a", { href: "tel:960812600", className: "hidden sm:flex items-center gap-2 text-white font-bold text-sm", children: [
        /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-[#0055FF]" }),
        "960 812 600"
      ] }),
      /* @__PURE__ */ jsx("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "bg-[#39FF14] text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#32e012] transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)]", children: "Diagnostico por WhatsApp" })
    ] })
  ] }) });
};

const painSignals = [{
  title: "No arranca o se apaga",
  description: "Bateria, bomba de gasolina, sensor CKP o alimentacion."
}, {
  title: "Falla al acelerar",
  description: "Combustible, inyectores, encendido o desgaste real de motor."
}, {
  title: "Quiere bajar gasto",
  description: "Diagnostico, mantenimiento o conversion a GNV / GLP segun el caso."
}];
const Hero = () => {
  const whatsappUrl = buildWhatsAppUrl("Hola EDU MOTORS, necesito un diagnostico para mi vehiculo.");
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0A0F1E]", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0055FF]/20 rounded-full blur-[120px] animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#39FF14]/10 rounded-full blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none opacity-20", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        x: -100,
        opacity: 0
      }, animate: {
        x: 0,
        opacity: 1
      }, transition: {
        duration: 1.2,
        ease: "easeOut"
      }, className: "absolute top-[36%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0055FF] to-transparent" }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        x: 100,
        opacity: 0
      }, animate: {
        x: 0,
        opacity: 1
      }, transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.15
      }, className: "absolute top-[41%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        y: 20,
        opacity: 0
      }, animate: {
        y: 0,
        opacity: 1
      }, transition: {
        duration: 0.6
      }, className: "flex flex-wrap justify-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[#39FF14] text-xs font-bold uppercase tracking-widest bg-[#39FF14]/10 px-3 py-1 rounded-full border border-[#39FF14]/20", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 14 }),
          " Mecanico urgente en Lima Sur"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-white/80 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 14 }),
          " Diagnostico por WhatsApp"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-white/80 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 14 }),
          " Motor, combustible y GNV"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        y: 20,
        opacity: 0
      }, animate: {
        y: 0,
        opacity: 1
      }, transition: {
        duration: 0.6,
        delay: 0.1
      }, className: "text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight italic", children: [
        "Auto no arranca, falla al acelerar o consume demasiado?",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-[#39FF14]", children: "Lo diagnosticamos y lo resolvemos en Lima Sur" })
      ] }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        y: 20,
        opacity: 0
      }, animate: {
        y: 0,
        opacity: 1
      }, transition: {
        duration: 0.6,
        delay: 0.2
      }, className: "text-lg md:text-xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed", children: "Taller automotriz enfocado en clientes con intencion inmediata: diagnostico automotriz, reparacion de motores, bomba de gasolina, conversion a GNV y GLP, y mantenimiento para autos particulares o de trabajo." }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        y: 20,
        opacity: 0
      }, animate: {
        y: 0,
        opacity: 1
      }, transition: {
        duration: 0.6,
        delay: 0.3
      }, className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", onClick: () => trackEvent("click_cta_principal", {
          }), className: "group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black transition-all duration-200 bg-[#39FF14] rounded-full shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] hover:scale-105", children: "Diagnostico GRATIS por WhatsApp" }),
        /* @__PURE__ */ jsxs("a", { href: "tel:960812600", onClick: () => trackEvent("click_cta_principal", {
          }), className: "inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/10 rounded-full text-white font-bold hover:border-[#0055FF]/40 hover:bg-white/5 transition-all", children: [
          /* @__PURE__ */ jsx(Phone, { size: 18 }),
          "Llamar ahora"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 0.8,
        delay: 0.4
      }, className: "mt-5 flex items-center justify-center gap-2 text-white/45 text-sm italic", children: [
        /* @__PURE__ */ jsx(Zap, { size: 14, className: "text-[#39FF14]" }),
        "Respuesta rapida para Villa El Salvador, SJM, VMT, Lurin y zonas cercanas"
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.5
      }, className: "mt-16 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto", children: painSignals.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/5 bg-white/[0.03] p-6 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3", children: "Alta intencion" }),
        /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-bold italic mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/55 text-sm leading-relaxed", children: item.description })
      ] }, item.title)) })
    ] }) })
  ] });
};

const problems = [{
  icon: /* @__PURE__ */ jsx(Battery, { className: "text-yellow-400" }),
  title: "Auto no arranca",
  detail: "Bateria, arranque, sensor CKP o alimentacion."
}, {
  icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-400" }),
  title: "Falla de motor",
  detail: "Perdida de fuerza, humo, ruido o temperatura."
}, {
  icon: /* @__PURE__ */ jsx(Fuel, { className: "text-orange-400" }),
  title: "Bomba o combustible",
  detail: "Apagones, jaloneos, poca respuesta o ruido en tanque."
}, {
  icon: /* @__PURE__ */ jsx(ScanLine, { className: "text-blue-400" }),
  title: "Check engine",
  detail: "Escaneo y pruebas antes de cambiar piezas."
}, {
  icon: /* @__PURE__ */ jsx(Gauge, { className: "text-[#39FF14]" }),
  title: "Quiero ahorrar",
  detail: "Evaluamos GNV o GLP segun kilometraje y uso real."
}, {
  icon: /* @__PURE__ */ jsx(Wrench, { className: "text-white" }),
  title: "Consume demasiado",
  detail: "Mantenimiento, inyectores, sensores o afinamiento."
}];
const urgentLinks = [{
  href: "/problemas/auto-no-arranca",
  label: "Auto no arranca"
}, {
  href: "/problemas/falla-al-acelerar",
  label: "Falla al acelerar"
}, {
  href: "/problemas/check-engine-encendido",
  label: "Check engine"
}, {
  href: "/problemas/consume-mucho-combustible",
  label: "Consume mucho"
}];
const UrgentSection = () => {
  const whatsappUrl = buildWhatsAppUrl("Hola EDU MOTORS, tengo una urgencia con mi auto y necesito orientacion.");
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#0A0F1E] relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-4 italic", children: [
        "Problemas que si traen",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#0055FF]", children: "intencion de compra inmediata" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/60 leading-relaxed", children: "Cuando alguien busca esto, no esta comparando contenido. Quiere una solucion clara, rapida y cercana. Por eso el mensaje tiene que hablar del problema, no del taller." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto", children: problems.map((problem, index) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: index * 0.05
    }, className: "p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col transition-all hover:border-[#0055FF]/30", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: React.cloneElement(problem.icon, {
        size: 32
      }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-lg leading-tight italic mb-2", children: problem.title }),
      /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm leading-relaxed", children: problem.detail })
    ] }, problem.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
      /* @__PURE__ */ jsx(motion.a, { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", whileHover: {
        scale: 1.05
      }, whileTap: {
        scale: 0.95
      }, className: "inline-flex items-center gap-3 bg-[#39FF14] text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_25px_rgba(57,255,20,0.3)] hover:shadow-[0_0_35px_rgba(57,255,20,0.5)] transition-all", children: "Resolver mi falla por WhatsApp" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: urgentLinks.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: "px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-bold hover:border-[#0055FF]/40 hover:text-white transition-all", children: link.label }, link.href)) })
    ] })
  ] }) });
};

const iconMap = {
  "reparacion-motores": Settings,
  "bomba-gasolina": Fuel,
  diagnostico: ScanLine,
  "conversion-gnv": Gauge,
  "conversion-glp": Gauge,
  "mantenimiento-general": Wrench,
  inyectores: Fuel,
  "sensores-automotrices": RadioTower,
  "sistema-electrico": Sparkles,
  "cuerpo-aceleracion": Activity,
  "check-engine": ScanLine,
  "sistema-encendido": Flame,
  "sistema-refrigeracion": Thermometer,
  afinamiento: Wrench
};
const toneMap = {
  Urgencia: "bg-[#FF5C5C]/10 text-[#FFB3B3] border border-[#FF5C5C]/20",
  Entrada: "bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20",
  "Alto ticket": "bg-[#0055FF]/10 text-[#8CB3FF] border border-[#0055FF]/20",
  Recurrente: "bg-white/10 text-white/70 border border-white/10"
};
function ServiceCardsSection({
  eyebrow = "Servicios",
  title,
  description,
  items = [],
  ctaLabel = "Ver servicio",
  compact = false
}) {
  return /* @__PURE__ */ jsx("section", { className: `bg-[#070B16] ${compact ? "py-16" : "py-24"}`, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2", children: title })
      ] }),
      description ? /* @__PURE__ */ jsx("p", { className: "text-white/50 max-w-xl leading-relaxed", children: description }) : null
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-6", children: items.map((service, index) => {
      const Icon = iconMap[service.slug] || Wrench;
      const whatsappUrl = buildWhatsAppUrl(service.whatsappText || `Hola EDU MOTORS, quiero informacion sobre ${service.name}.`);
      return /* @__PURE__ */ jsxs(motion.article, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: index * 0.06
      }, className: "rounded-3xl border border-white/5 bg-[#0A0F1E] p-7 hover:border-[#0055FF]/30 transition-all", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-white/5 text-[#0055FF] flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { size: 28 }) }),
          /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${toneMap[service.group] || toneMap.Recurrente}`, children: service.group })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-bold italic mb-3", children: service.cardTitle || service.name }),
        /* @__PURE__ */ jsx("p", { className: "text-white/55 text-sm leading-relaxed mb-6", children: service.cardDescription }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: service.problemQueries?.slice(0, 2).map((query) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm text-white/70", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1 h-2 w-2 rounded-full bg-[#39FF14] shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: query })
        ] }, query)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: `/servicios/${service.slug}`, onClick: () => trackEvent("click_cta_principal", {
            service: service.slug
          }), className: "inline-flex items-center justify-center gap-2 bg-[#39FF14] text-black px-5 py-3 rounded-2xl font-black text-sm uppercase tracking-wide hover:bg-[#32e012] transition-all", children: ctaLabel }),
          /* @__PURE__ */ jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", onClick: () => trackEvent("click_whatsapp", {
            service: service.slug
          }), className: "inline-flex items-center justify-center gap-2 border border-white/10 text-white/75 px-5 py-3 rounded-2xl font-bold text-sm hover:border-[#0055FF]/40 hover:text-white transition-all", children: [
            "WhatsApp",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] })
        ] })
      ] }, service.slug);
    }) })
  ] }) });
}

const services$1 = getServiceCatalog();
const featuredServices = services$1.filter((service) => ["reparacion-motores", "bomba-gasolina", "diagnostico", "conversion-gnv", "conversion-glp", "mantenimiento-general"].includes(service.slug));
const Services = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ServiceCardsSection, { eyebrow: "Servicios con intencion real", title: "Lo que mas pide un cliente cuando su auto falla", description: "Organizamos la oferta para captar desde la urgencia, la consulta de entrada y el servicio de alto ticket sin mezclar mensajes.", items: featuredServices, ctaLabel: "Ver servicio" }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#0A0F1E] border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Servicios ocultos que venden" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-4xl font-black text-white italic mt-2", children: "Fallas relacionadas que el cliente no nombra, pero si necesita" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/45 max-w-xl leading-relaxed", children: "Si alguien busca motor, muchas veces tambien necesita sensores, inyectores, bomba, escaneo o revision electrica. Aqui es donde se gana conversion y ticket promedio." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-4", children: hiddenServices.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/5 bg-[#070B16] px-5 py-5", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-bold mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/55 text-sm leading-relaxed", children: item.description })
      ] }, item.title)) })
    ] }) })
  ] });
};

const defaultQuickOptions = ["No arranca", "Pierde fuerza", "Check engine", "Consume mucho"];
const QuickForm = ({
  eyebrow = "Diagnostico GRATIS",
  title = "Cuentanos que le pasa a tu auto",
  subtitle = "Dejanos tus datos y te respondemos por WhatsApp con una orientacion inicial.",
  quickOptions = defaultQuickOptions,
  ctaText = "Solicitar diagnostico GRATIS",
  contextLabel = "Diagnostico general"
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    problema: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  const applyQuickOption = (option) => {
    setFormData((current) => ({
      ...current,
      problema: current.problema ? `${current.problema}. ${option}` : option
    }));
    if (errors.problema) {
      setErrors((current) => ({
        ...current,
        problema: ""
      }));
    }
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = "Por favor ingresa tu nombre";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "Por favor ingresa tu telefono";
    } else if (!/^\d{9}$/.test(formData.telefono.trim())) {
      newErrors.telefono = "Ingresa un numero valido de 9 digitos";
    }
    if (!formData.problema.trim()) {
      newErrors.problema = "Cuentanos cual es la falla o sintoma principal";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const message = [`Hola EDU MOTORS, solicito orientacion para: ${contextLabel}.`, "", `Nombre: ${formData.nombre}`, `Telefono: ${formData.telefono}`, `Problema: ${formData.problema}`].join("\n");
    const whatsappUrl = buildWhatsAppUrl(message);
    trackEvent("submit_formulario", {
      problema: formData.problema.substring(0, 80)
    });
    setSubmitted(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank");
      }
      setTimeout(() => {
        setFormData({
          nombre: "",
          telefono: "",
          problema: ""
        });
        setSubmitted(false);
      }, 1e3);
    }, 800);
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-[#070B16] relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#39FF14]/5 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-[#0055FF]/5 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2 mb-4", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/55 text-lg leading-relaxed", children: subtitle })
      ] }),
      /* @__PURE__ */ jsx(motion.form, { onSubmit: handleSubmit, initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "bg-[#0A0F1E] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl", children: submitted ? /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, animate: {
        opacity: 1,
        scale: 1
      }, className: "text-center py-8", children: [
        /* @__PURE__ */ jsx(CheckCircle, { size: 64, className: "text-[#39FF14] mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "Listo" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60", children: "Te estamos llevando a WhatsApp..." })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-white/55 text-sm mb-3", children: "Puedes tocar uno o varios sintomas para llenar mas rapido:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: quickOptions.map((option) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => applyQuickOption(option), className: "px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/75 text-sm font-bold hover:border-[#0055FF]/40 hover:text-white transition-all", children: option }, option)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-white/70 font-bold text-sm mb-2", children: [
            /* @__PURE__ */ jsx(User, { size: 16, className: "inline mr-2 text-[#0055FF]" }),
            "Tu nombre"
          ] }),
          /* @__PURE__ */ jsx("input", { type: "text", name: "nombre", value: formData.nombre, onChange: handleChange, disabled: submitted, placeholder: "Ej: Carlos Perez", className: `w-full px-5 py-4 bg-[#070B16] border ${errors.nombre ? "border-red-500" : "border-white/10"} rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#0055FF] transition-all disabled:opacity-50` }),
          errors.nombre ? /* @__PURE__ */ jsx("p", { className: "text-red-400 text-xs mt-1 ml-1", children: errors.nombre }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-white/70 font-bold text-sm mb-2", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "inline mr-2 text-[#0055FF]" }),
            "Tu telefono"
          ] }),
          /* @__PURE__ */ jsx("input", { type: "tel", name: "telefono", value: formData.telefono, onChange: handleChange, disabled: submitted, maxLength: "9", placeholder: "Ej: 987654321", className: `w-full px-5 py-4 bg-[#070B16] border ${errors.telefono ? "border-red-500" : "border-white/10"} rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#0055FF] transition-all disabled:opacity-50` }),
          errors.telefono ? /* @__PURE__ */ jsx("p", { className: "text-red-400 text-xs mt-1 ml-1", children: errors.telefono }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-white/70 font-bold text-sm mb-2", children: [
            /* @__PURE__ */ jsx(Wrench, { size: 16, className: "inline mr-2 text-[#0055FF]" }),
            "Cual es el sintoma principal?"
          ] }),
          /* @__PURE__ */ jsx("textarea", { name: "problema", value: formData.problema, onChange: handleChange, disabled: submitted, placeholder: "Ej: No arranca en frio y ayer se apago en un semaforo", rows: 4, className: `w-full px-5 py-4 bg-[#070B16] border ${errors.problema ? "border-red-500" : "border-white/10"} rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#0055FF] transition-all resize-none disabled:opacity-50` }),
          errors.problema ? /* @__PURE__ */ jsx("p", { className: "text-red-400 text-xs mt-1 ml-1", children: errors.problema }) : null
        ] }),
        /* @__PURE__ */ jsxs(motion.button, { type: "submit", disabled: submitted, whileHover: {
          scale: 1.02
        }, whileTap: {
          scale: 0.98
        }, className: "w-full bg-[#39FF14] text-black px-8 py-5 rounded-full font-black text-base uppercase tracking-wider hover:bg-[#32e012] transition-all shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_50px_rgba(57,255,20,0.6)] flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 22 }),
          ctaText
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/35 text-xs text-center", children: "Respuesta por WhatsApp, sin llamada obligatoria y con orientacion inicial para que tomes una decision rapida." })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 mt-8 text-white/40 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { size: 16, className: "text-[#39FF14]" }),
          "Sin compromiso"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { size: 16, className: "text-[#39FF14]" }),
          "Prioridad para fallas urgentes"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { size: 16, className: "text-[#39FF14]" }),
          "Presupuesto claro si aplica"
        ] })
      ] })
    ] }) })
  ] });
};

const videos$1 = [{
  id: 1,
  title: "Auto no arranca: revision paso a paso",
  thumbnail: "https://images.unsplash.com/photo-1486006396193-47106858e75a?auto=format&fit=crop&w=800&q=80"
}, {
  id: 2,
  title: "Conversion GNV para auto de trabajo",
  thumbnail: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&w=800&q=80"
}, {
  id: 3,
  title: "Check engine y diagnostico real",
  thumbnail: "https://images.unsplash.com/photo-1517524204709-440d89f24824?auto=format&fit=crop&w=800&q=80"
}, {
  id: 4,
  title: "Mantenimiento para bajar consumo",
  thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
}];
const VideoSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#0A0F1E] border-y border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black text-white italic", children: [
        "Contenido que ataca",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14]", children: "problemas reales" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/40 mt-2 max-w-2xl mx-auto leading-relaxed", children: "Estas piezas sirven para TikTok, Reels o futuros embeds con casos que convierten mejor porque hablan del sintoma y no del ego del taller." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-4 gap-4", children: videos$1.map((video) => /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden relative group border border-white/5 bg-[#070B16]", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[4/5] overflow-hidden relative", children: [
      /* @__PURE__ */ jsx("img", { src: video.thumbnail, alt: video.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700", loading: "lazy", decoding: "async" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20", children: /* @__PURE__ */ jsx(Play, { fill: "white", className: "ml-1" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] text-[10px] font-bold uppercase tracking-widest mb-1 block", children: "Contenido para conversion" }),
        /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-lg leading-tight", children: video.title })
      ] })
    ] }) }, video.id)) })
  ] }) });
};

const steps = [{
  icon: /* @__PURE__ */ jsx(MessageCircle, { className: "text-[#25D366]" }),
  title: "Escribenos con el sintoma",
  desc: "No necesitas saber de mecanica. Solo dinos si no arranca, falla o consume demasiado."
}, {
  icon: /* @__PURE__ */ jsx(Search, { className: "text-[#0055FF]" }),
  title: "Diagnostico con criterio",
  desc: "Revisamos la causa real para no cambiar piezas a ciegas."
}, {
  icon: /* @__PURE__ */ jsx(ClipboardCheck, { className: "text-[#39FF14]" }),
  title: "Presupuesto claro",
  desc: "Te explicamos que es urgente, que puede esperar y cuanto costaria resolverlo."
}, {
  icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "text-white" }),
  title: "Solucion y seguimiento",
  desc: "Reparamos con foco en que el auto vuelva a circular sin retrabajos innecesarios."
}];
const Process = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#070B16] relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#0055FF] font-bold uppercase tracking-widest text-xs", children: "Proceso comercial" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-white mt-2 italic", children: [
        "Asi convertimos una falla en una",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14]", children: "decision rapida" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col text-left rounded-3xl border border-white/5 bg-[#0A0F1E] p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative", children: [
        React.cloneElement(step.icon, {
          size: 34
        }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0055FF] flex items-center justify-center text-white font-bold text-sm italic", children: [
          "0",
          index + 1
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4 italic", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "text-white/45 leading-relaxed text-sm", children: step.desc })
    ] }, step.title)) })
  ] }) });
};

const prices = [{
  name: "Orientacion inicial por WhatsApp",
  price: "Gratis",
  detail: "Ideal si todavia no sabes si el problema es motor, combustible o sensores."
}, {
  name: "Escaneo y diagnostico base",
  price: "Desde S/ 50",
  detail: "Entrada recomendada para check engine, fallas intermitentes y perdida de potencia."
}, {
  name: "Mantenimiento preventivo",
  price: "Desde S/ 120",
  detail: "Pensado para bajar riesgo de falla y corregir consumo alto."
}, {
  name: "Conversion a GNV",
  price: "Desde S/ 2,800",
  detail: "Servicio alto ticket para quien necesita ahorrar por kilometraje."
}];
const Pricing = () => {
  const whatsappUrl = buildWhatsAppUrl("Hola EDU MOTORS, quisiera una cotizacion exacta para mi vehiculo.");
  return /* @__PURE__ */ jsx("section", { id: "precios", className: "py-24 bg-[#0A0F1E] relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between mb-12 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-white italic", children: [
          "Precios ",
          /* @__PURE__ */ jsx("span", { className: "text-[#39FF14]", children: "que ayudan a decidir" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/40 mt-2 leading-relaxed", children: "Mostramos rangos de entrada para reducir friccion sin prometer algo que dependa del vehiculo real." })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm", children: [
        /* @__PURE__ */ jsx(HelpCircle, { size: 16 }),
        " Consultar precio exacto por WhatsApp"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: prices.map((item, index) => /* @__PURE__ */ jsxs(motion.div, { whileHover: {
      x: 10,
      backgroundColor: "rgba(255,255,255,0.03)"
    }, className: "p-6 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF]", children: /* @__PURE__ */ jsx(Tag, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-bold italic", children: item.name }),
          /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs", children: item.detail })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between sm:justify-end gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsx("span", { className: "text-white/40 text-xs block uppercase tracking-widest font-bold", children: "Desde" }),
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-[#39FF14] italic", children: item.price })
        ] }),
        /* @__PURE__ */ jsx("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10", children: "Cotizar" })
      ] })
    ] }, item.name)) }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-center text-white/30 text-[10px] uppercase tracking-[0.2em]", children: "Precios sujetos a evaluacion tecnica del vehiculo y disponibilidad" })
  ] }) }) });
};

const LocalSEO = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#070B16] border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Cobertura local" }),
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-4xl font-black text-white mt-2 mb-4 italic", children: [
      "Atendemos en ",
      /* @__PURE__ */ jsx("span", { className: "text-[#0055FF]", children: "Lima Sur" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-white/45 max-w-2xl mx-auto mb-10 leading-relaxed", children: "Esta estructura ayuda tanto al usuario que busca cerca de su zona como a Google a entender que el servicio esta orientado a Villa El Salvador, San Juan de Miraflores, Villa Maria del Triunfo, Lurin y alrededores." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: zoneLinks.map((zone) => /* @__PURE__ */ jsxs("a", { href: `/zonas/${zone.slug}`, className: "flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:border-[#0055FF]/40 hover:text-white transition-all", children: [
      /* @__PURE__ */ jsx(MapPin, { size: 12, className: "text-[#0055FF]" }),
      zone.name
    ] }, zone.slug)) })
  ] }) });
};

const points = ["Ubicacion comoda para clientes de Villa El Salvador, SJM, VMT y Lurin.", "Ideal para quienes necesitan una revision rapida en Lima Sur.", "Puedes escribir primero por WhatsApp y llegar con el problema mejor definido."];
const LocationSection = () => {
  const whatsappUrl = buildWhatsAppUrl("Hola EDU MOTORS, quiero llegar hoy al taller y necesito ubicacion.");
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#0A0F1E] relative overflow-hidden", id: "ubicacion", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Ubicacion y cobertura" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2", children: [
        "Taller en ",
        /* @__PURE__ */ jsx("span", { className: "text-[#0055FF]", children: "Villa El Salvador" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed", children: "La ubicacion tambien vende: ayuda al cliente a confirmar que el taller esta cerca, que puede ir hoy y que atiende su zona de Lima Sur." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, onClick: () => trackEvent(), className: "relative rounded-3xl overflow-hidden border border-white/10 h-[450px] shadow-[0_0_50px_rgba(0,85,255,0.1)]", children: /* @__PURE__ */ jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15594.364402636!2d-76.9427357!3d-12.2032047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b0d0d0d0d0d0%3A0x0!2sVilla%20El%20Salvador%2C%20Lima!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe", width: "100%", height: "100%", style: {
        border: 0,
        filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)"
      }, allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Ubicacion EDU MOTORS" }) }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: 20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-[#070B16] border border-white/5 p-8 rounded-3xl hover:border-[#0055FF]/20 transition-all", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] shrink-0", children: /* @__PURE__ */ jsx(MapPin, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-lg mb-1", children: "Direccion" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm", children: "Av. Principal S/N (cerca a Panamericana Sur), Villa El Salvador, Lima." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] shrink-0", children: /* @__PURE__ */ jsx(Clock, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-lg mb-1", children: "Horario" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm", children: "Lunes a Sabado: 8:00 AM - 6:00 PM" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm italic", children: "Domingos: Cerrado" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] shrink-0", children: /* @__PURE__ */ jsx(Phone, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-lg mb-1", children: "Telefono" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm font-bold tracking-wider", children: "960 812 600" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", onClick: () => trackEvent("click_cta_principal", {
            }), className: "w-full bg-[#39FF14] text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)]", children: [
            /* @__PURE__ */ jsx(Send, { size: 18 }),
            "Quiero llegar hoy / consultar"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: points.map((point) => /* @__PURE__ */ jsx("div", { className: "p-5 rounded-2xl border border-white/5 bg-white/5 text-white/55 text-sm", children: point }, point)) })
      ] })
    ] })
  ] }) });
};

const cases$1 = [{
  id: 1,
  title: "Caso: auto que no arrancaba en Villa El Salvador",
  before: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
  after: "https://images.unsplash.com/photo-1487750148645-909848360975?q=80&w=600&auto=format&fit=crop",
  desc: "Se reviso alimentacion, arranque y sensor para confirmar la causa antes de cotizar."
}, {
  id: 2,
  title: "Caso: ahorro para auto de trabajo en Lima Sur",
  before: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?q=80&w=600&auto=format&fit=crop",
  after: "https://images.unsplash.com/photo-1619641782842-83d2845c4519?q=80&w=600&auto=format&fit=crop",
  desc: "Primero se ordeno el estado base del vehiculo y luego se evaluo la mejor ruta para bajar gasto."
}];
const videos = [{
  id: 1,
  thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop"
}, {
  id: 2,
  thumbnail: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=400&auto=format&fit=crop"
}, {
  id: 3,
  thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop"
}];
const RealResults = () => {
  const [activeTab, setActiveTab] = useState("casos");
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#070B16] relative overflow-hidden", id: "resultados", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Casos y contenido" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2", children: [
        "Señales para vender mejor",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#0055FF]", children: "servicios automotrices" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/40 mt-4 max-w-2xl mx-auto", children: "Casos, historias de problema-solucion y piezas de video para reforzar confianza sin caer en claims inflados." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 mb-12", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("casos"), className: `px-8 py-3 rounded-full font-bold transition-all ${activeTab === "casos" ? "bg-[#0055FF] text-white shadow-[0_0_20px_rgba(0,85,255,0.4)]" : "bg-white/5 text-white/40 hover:text-white"}`, children: "Casos problema-solucion" }),
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("videos"), className: `px-8 py-3 rounded-full font-bold transition-all ${activeTab === "videos" ? "bg-[#0055FF] text-white shadow-[0_0_20px_rgba(0,85,255,0.4)]" : "bg-white/5 text-white/40 hover:text-white"}`, children: "Videos cortos" })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: activeTab === "casos" ? /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -20
    }, className: "grid md:grid-cols-2 gap-8", children: cases$1.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0F1E] border border-white/5 rounded-3xl overflow-hidden group", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-video flex", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: item.before, alt: "Antes", className: "w-full h-full object-cover", loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase text-white/80 border border-white/10", children: "Sintoma" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 relative overflow-hidden border-l-2 border-[#39FF14]", children: [
          /* @__PURE__ */ jsx("img", { src: item.after, alt: "Despues", className: "w-full h-full object-cover", loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 bg-[#39FF14] px-3 py-1 rounded-md text-[10px] font-bold uppercase text-black", children: "Solucion" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-2 italic flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-[#39FF14]" }),
          item.title
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm", children: item.desc })
      ] })
    ] }, item.id)) }, "casos") : /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -20
    }, className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: [
      videos.map((vid) => /* @__PURE__ */ jsxs("div", { className: "relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/5 group bg-[#0A0F1E] cursor-pointer", onClick: () => trackEvent("click_video", {
        video_id: vid.id
      }), children: [
        /* @__PURE__ */ jsx("img", { src: vid.thumbnail, alt: "Thumbnail", className: "w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500", loading: "lazy", decoding: "async" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#0055FF] transition-all group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,85,255,0.5)]", children: /* @__PURE__ */ jsx(Play, { fill: "white", size: 24, className: "ml-1" }) }) })
      ] }, vid.id)),
      /* @__PURE__ */ jsx("div", { className: "aspect-[9/16] rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center p-6 bg-white/5 group hover:bg-[#0055FF]/5 transition-all", children: /* @__PURE__ */ jsx("p", { className: "text-white/20 text-sm font-bold uppercase tracking-widest group-hover:text-white/40", children: "Mas contenido de problemas reales para RRSS y landings" }) })
    ] }, "videos") })
  ] }) });
};

const blocks = [{
  id: "diagnostico",
  title: "No cambies piezas sin confirmar la falla",
  desc: "Muchos clientes llegan despues de gastar en bateria, bujias o bomba sin resolver el problema. Nuestro mensaje comercial parte del diagnostico correcto.",
  icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 32 }),
  color: "from-[#39FF14]/15 to-transparent",
  accent: "#39FF14",
  cta: "Quiero diagnostico claro",
  link: buildWhatsAppUrl("Hola EDU MOTORS, quiero diagnostico para no cambiar piezas a ciegas.")
}, {
  id: "trabajo",
  title: "Si tu auto trabaja, tu prioridad es volver a circular rapido",
  desc: "Taxi, reparto, movilidad o uso diario intenso: cuando el auto produce ingresos, el discurso debe hablar de tiempo, prioridad y retorno.",
  icon: /* @__PURE__ */ jsx(BriefcaseBusiness, { size: 32 }),
  color: "from-[#0055FF]/20 to-transparent",
  accent: "#0055FF",
  cta: "Mi auto es de trabajo",
  link: buildWhatsAppUrl("Hola EDU MOTORS, uso mi auto para trabajar y necesito ayuda rapida.")
}, {
  id: "ahorro",
  title: "El alto ticket entra por ahorro, no por tecnologia",
  desc: "GNV y GLP venden mejor cuando conectan con gasto mensual, kilometraje y retorno. Primero evaluamos si tu caso realmente lo justifica.",
  icon: /* @__PURE__ */ jsx(Gauge, { size: 32 }),
  color: "from-white/10 to-transparent",
  accent: "white",
  cta: "Quiero evaluar ahorro",
  link: buildWhatsAppUrl("Hola EDU MOTORS, quiero evaluar si me conviene GNV o GLP.")
}];
const CommercialBlocks = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#0A0F1E] relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
    /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: blocks.map((block, index) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      delay: index * 0.1
    }, className: `relative p-8 rounded-[2.5rem] bg-gradient-to-br ${block.color} border border-white/5 flex flex-col h-full`, children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl flex items-center justify-center mb-8", style: {
        backgroundColor: `${block.accent}15`,
        color: block.accent
      }, children: block.icon }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-black text-white mb-4 italic leading-tight", children: block.title }),
      /* @__PURE__ */ jsx("p", { className: "text-white/55 mb-8 flex-grow leading-relaxed", children: block.desc }),
      /* @__PURE__ */ jsxs("a", { href: block.link, target: "_blank", rel: "noopener noreferrer", onClick: () => trackEvent("click_cta_principal", {
        block: block.id
      }), className: "group flex items-center justify-between bg-white text-black font-black px-6 py-4 rounded-2xl hover:bg-white/90 transition-all uppercase tracking-wide text-sm", children: [
        /* @__PURE__ */ jsx("span", { children: block.cta }),
        /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-8 right-8 w-2 h-2 rounded-full animate-pulse", style: {
        backgroundColor: block.accent
      } })
    ] }, block.id)) }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -left-10 text-[10rem] font-black text-white/[0.02] pointer-events-none select-none italic leading-none whitespace-nowrap", children: "LIMA SUR - DIAGNOSTICO - MOTOR - GNV - GLP" })
  ] }) });
};

const cases = [{
  zone: "Villa El Salvador",
  title: "Sedan que no arrancaba temprano",
  comment: "El problema parecia bateria, pero termino siendo una combinacion de alimentacion y sensor. Se evito cambiar piezas a ciegas.",
  result: "Diagnostico primero, gasto mejor dirigido"
}, {
  zone: "San Juan de Miraflores",
  title: "Auto que se apagaba en semaforos",
  comment: "La falla apuntaba a combustible y cuerpo de aceleracion. El enfoque fue resolver la causa y no solo borrar el sintoma.",
  result: "Se priorizo una solucion util para uso diario"
}, {
  zone: "Lurin",
  title: "Unidad de trabajo con consumo alto",
  comment: "Antes de pensar en conversion a gas, se ordeno mantenimiento y diagnostico para mejorar el rendimiento base del vehiculo.",
  result: "Mejor decision comercial antes del alto ticket"
}];
const Testimonials = () => {
  return /* @__PURE__ */ jsx("section", { id: "testimonios", className: "py-24 bg-[#0A0F1E] relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Casos frecuentes" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-white mt-2 italic", children: [
        "Asi se convierten las fallas en",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#0055FF]", children: "decisiones de compra reales" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: cases.map((item, index) => /* @__PURE__ */ jsxs(motion.article, { initial: {
      opacity: 0,
      scale: 0.9
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      delay: index * 0.1
    }, className: "p-8 rounded-3xl bg-white/5 border border-white/10 relative group", children: [
      /* @__PURE__ */ jsx(Quote, { className: "absolute top-6 right-8 text-white/5", size: 60 }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-5", children: [
        /* @__PURE__ */ jsx(Clock3, { size: 14 }),
        item.zone
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-xl italic mb-4", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-white/75 text-sm leading-relaxed mb-8", children: item.comment }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-white/10 pt-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-white/45 text-sm", children: item.result }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-[#39FF14] text-[10px] font-bold uppercase tracking-widest", children: [
          /* @__PURE__ */ jsx(CheckCircle, { size: 10 }),
          " Caso comun"
        ] })
      ] })
    ] }, item.title)) })
  ] }) });
};

const FAQ = ({
  customQuestions = [],
  title = "Preguntas frecuentes",
  description = "Respuestas rapidas a las preguntas mas comunes sobre nuestros servicios y tiempos de atencion.",
  ctaText = "Escribenos por WhatsApp",
  ctaMessage = "Hola EDU MOTORS, tengo una consulta sobre mi vehiculo."
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const defaultQuestions = [{
    question: "Si mi auto no arranca, que servicio conviene pedir primero?",
    answer: "Lo mas rentable suele ser empezar por diagnostico. Asi confirmas si la falla viene de bateria, arranque, bomba de gasolina, sensores o motor antes de gastar en piezas."
  }, {
    question: "Cuanto cuesta un diagnostico automotriz en Lima Sur?",
    answer: "La orientacion inicial por WhatsApp es gratis y el valor de la revision tecnica depende del tipo de falla y de las pruebas necesarias."
  }, {
    question: "Atienden Villa El Salvador, SJM, VMT y Lurin?",
    answer: "Si. Trabajamos con clientes de distintas zonas de Lima Sur y orientamos por WhatsApp antes de programar el siguiente paso."
  }, {
    question: "Cuando conviene pensar en GNV o GLP?",
    answer: "Cuando el kilometraje y el uso diario justifican el ahorro. Antes de convertir, conviene confirmar que el auto este en buen estado base."
  }, {
    question: "Atienden fallas urgentes el mismo dia?",
    answer: "Si hay disponibilidad, priorizamos fallas con alta urgencia como auto que no arranca, se apaga o pierde fuerza en uso diario o de trabajo."
  }];
  const allQuestions = customQuestions.length > 0 ? customQuestions : defaultQuestions;
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-[#0A0F1E] relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c")
    } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-1/4 w-96 h-96 bg-[#0055FF]/5 rounded-full blur-3xl" }) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Preguntas frecuentes" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed", children: description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: allQuestions.map((item, index) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: index * 0.05
      }, className: "rounded-2xl bg-[#070B16] border border-white/5 overflow-hidden hover:border-[#0055FF]/20 transition-all", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => toggleQuestion(index), className: "w-full p-6 flex items-center justify-between text-left group", children: [
          /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg pr-4 group-hover:text-[#39FF14] transition-colors", children: item.question }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#0055FF]/20 transition-all", children: openIndex === index ? /* @__PURE__ */ jsx(Minus, { size: 16, className: "text-[#39FF14]" }) : /* @__PURE__ */ jsx(Plus, { size: 16, className: "text-white/40" }) })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: openIndex === index ? /* @__PURE__ */ jsx(motion.div, { initial: {
          height: 0,
          opacity: 0
        }, animate: {
          height: "auto",
          opacity: 1
        }, exit: {
          height: 0,
          opacity: 0
        }, transition: {
          duration: 0.3
        }, children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-white/60 leading-relaxed", children: item.answer }) }) : null })
      ] }, item.question)) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mt-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-white/40 mb-4", children: "Todavia tienes dudas?" }),
        /* @__PURE__ */ jsx("a", { href: buildWhatsAppUrl(ctaMessage), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#39FF14]/20 transition-all", children: ctaText })
      ] })
    ] })
  ] });
};

const mainServices = [{
  href: "/servicios/diagnostico",
  label: "Diagnostico"
}, {
  href: "/servicios/reparacion-motores",
  label: "Motores"
}, {
  href: "/servicios/bomba-gasolina",
  label: "Bomba de gasolina"
}, {
  href: "/servicios/conversion-gnv",
  label: "Conversion GNV"
}];
const contentHubs = [{
  href: "/problemas",
  label: "Problemas reales"
}, {
  href: "/local",
  label: "Sintoma + zona"
}, {
  href: "/precios",
  label: "Precios"
}, {
  href: "/comparativas",
  label: "Comparativas"
}, {
  href: "/blog",
  label: "Blog de fallas"
}];
const FooterCTA = ({
  title = "No esperes a que la falla te deje sin movilidad",
  description = "Escribenos por WhatsApp y te ayudamos a definir el siguiente paso segun el sintoma real de tu auto.",
  buttonText = "Hablar por WhatsApp ahora",
  whatsappText = "Hola EDU MOTORS, necesito ayuda con mi auto ahora."
}) => {
  const whatsappUrl = buildWhatsAppUrl(whatsappText);
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#070B16] pt-24 pb-12 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0055FF]/10 blur-[100px]" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto text-center mb-20", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
        y: 20,
        opacity: 0
      }, whileInView: {
        y: 0,
        opacity: 1
      }, viewport: {
        once: true
      }, className: "p-12 rounded-[40px] bg-gradient-to-b from-[#0A0F1E] to-transparent border border-white/10 shadow-2xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-6xl font-extrabold text-white mb-6 italic tracking-tight", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 mb-10 text-lg max-w-3xl mx-auto leading-relaxed", children: description }),
        /* @__PURE__ */ jsx("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center px-12 py-6 font-bold text-black transition-all duration-200 bg-[#39FF14] rounded-full shadow-[0_0_40px_rgba(57,255,20,0.5)] hover:shadow-[0_0_60px_rgba(57,255,20,0.7)] hover:scale-105 text-xl", children: buttonText }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-6 text-white/40 text-sm font-bold uppercase tracking-widest", children: [
          /* @__PURE__ */ jsx("span", { children: "Respuesta rapida" }),
          /* @__PURE__ */ jsx("span", { children: "Diagnostico orientado a la falla" }),
          /* @__PURE__ */ jsx("span", { children: "Atencion en Lima Sur" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-5 gap-10 border-t border-white/5 pt-16 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#0055FF] rounded flex items-center justify-center font-bold text-white italic", children: "EM" }),
            /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-2xl tracking-tight italic", children: "EDU MOTORS" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/40 max-w-md leading-relaxed", children: "Taller automotriz en Lima Sur orientado a captar y resolver clientes con urgencia real: diagnostico, motor, combustible, GNV, GLP y mantenimiento." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-bold mb-5 uppercase tracking-widest text-xs", children: "Servicios clave" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm text-white/55", children: mainServices.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: "hover:text-white transition-colors", children: item.label }) }, item.href)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-bold mb-5 uppercase tracking-widest text-xs", children: "Contenido SEO" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm text-white/55", children: contentHubs.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: "hover:text-white transition-colors", children: item.label }) }, item.href)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-bold mb-5 uppercase tracking-widest text-xs", children: "Zonas y contacto" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-white/55", children: [
            zoneLinks.slice(0, 4).map((zone) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `/zonas/${zone.slug}`, className: "hover:text-white transition-colors", children: zone.name }) }, zone.slug)),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-white/60 pt-2", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-[#0055FF] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: businessData.address })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-white/60", children: [
              /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-[#0055FF] shrink-0" }),
              /* @__PURE__ */ jsx("a", { href: `tel:${businessData.phoneRaw}`, children: businessData.phoneDisplay })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold", children: "© 2026 EDU MOTORS LIMA SUR. Todos los derechos reservados." })
    ] })
  ] });
};

const WhatsAppButton = ({
  whatsappText = "Hola EDU MOTORS, necesito un diagnostico para mi vehiculo."
}) => {
  const whatsappUrl = buildWhatsAppUrl(whatsappText);
  return /* @__PURE__ */ jsx(motion.a, { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", onClick: () => trackEvent("click_whatsapp", {
    }), className: "fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg flex items-center justify-center text-white", initial: {
    scale: 0
  }, animate: {
    scale: 1
  }, whileHover: {
    scale: 1.1
  }, whileTap: {
    scale: 0.9
  }, children: /* @__PURE__ */ jsx(motion.div, { animate: {
    scale: [1, 1.2, 1]
  }, transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }, children: /* @__PURE__ */ jsx(MessageCircle, { size: 32, fill: "white" }) }) });
};

function LandingPage() {
  return /* @__PURE__ */ jsxs("div", { className: "jsx-2920734254 min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black", children: [
    /* @__PURE__ */ jsx(_JSXStyle, { id: "2920734254", children: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');", ":root{--primary-blue:#0055FF;--neon-green:#39FF14;--bg-dark:#0A0F1E;}", "body{font-family:'Inter',sans-serif;background-color:var(--bg-dark);color:white;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", ".italic{font-style:italic;}"] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "jsx-2920734254", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(UrgentSection, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(QuickForm, {}),
      /* @__PURE__ */ jsx(VideoSection, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(Pricing, {}),
      /* @__PURE__ */ jsx(LocalSEO, {}),
      /* @__PURE__ */ jsx(LocationSection, {}),
      /* @__PURE__ */ jsx(RealResults, {}),
      /* @__PURE__ */ jsx(CommercialBlocks, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(FAQ, {}),
      /* @__PURE__ */ jsx(FooterCTA, {})
    ] }),
    /* @__PURE__ */ jsx(WhatsAppButton, {})
  ] });
}

const page$e = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(LandingPage, {
      ...props
    })
  });
});

const route1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$e
}, Symbol.toStringTag, { value: 'Module' }));

function BlogPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center max-w-4xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Blog de problemas reales" }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black text-white italic mt-4 mb-6", children: "Contenido para captar trafico que ya esta cerca de comprar" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg leading-relaxed", children: "Articulos enfocados en sintomas, costo de error y siguiente paso. No llenamos el blog con relleno: cada pieza debe acercar al lead a WhatsApp." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#070B16]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-6xl mx-auto", children: blogPosts.map((post) => /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3", children: post.intent }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white italic mb-4", children: /* @__PURE__ */ jsx("a", { href: `/blog/${post.slug}`, className: "hover:text-[#39FF14] transition-colors", children: post.title }) }),
        /* @__PURE__ */ jsx("p", { className: "text-white/55 leading-relaxed mb-6", children: post.excerpt }),
        /* @__PURE__ */ jsx("a", { href: `/blog/${post.slug}`, className: "inline-flex items-center justify-center bg-[#39FF14] text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide", children: "Leer articulo" })
      ] }, post.slug)) }) }) }),
      /* @__PURE__ */ jsx(FooterCTA, { title: "Si ya reconoces el sintoma, el siguiente paso es escribirnos", description: "El blog esta hecho para reducir dudas y llevar la conversacion a diagnostico, presupuesto o evaluacion comercial.", buttonText: "Quiero hablar por WhatsApp", whatsappText: "Hola EDU MOTORS, lei su blog y quiero orientacion para mi auto." })
    ] }),
    /* @__PURE__ */ jsx(WhatsAppButton, { whatsappText: "Hola EDU MOTORS, lei su blog y quiero orientacion para mi auto." })
  ] });
}

const page$d = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(BlogPage, {
      ...props
    })
  });
});

const route2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$d
}, Symbol.toStringTag, { value: 'Module' }));

function BlogPostPage() {
  const {
    slug
  } = useParams();
  const post = getBlogPostBySlug(slug || "");
  if (!post) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center px-4 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black italic mb-4", children: "Articulo no encontrado" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/55 mb-8", children: "Revisa nuestro blog o escribe por WhatsApp para contarnos el sintoma de tu auto." }),
      /* @__PURE__ */ jsx("a", { href: "/blog", className: "inline-flex items-center justify-center bg-[#39FF14] text-black px-8 py-4 rounded-full font-black uppercase tracking-wider", children: "Volver al blog" })
    ] }) });
  }
  const relatedService = getServiceBySlug(post.relatedServiceSlug);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: post.intent }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black text-white italic mt-4 mb-6", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg leading-relaxed", children: post.heroProblem })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#070B16]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-4xl space-y-8", children: post.sections.map((section) => /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black text-white italic mb-5", children: section.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: section.points.map((point) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-white/65 leading-relaxed", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-[#39FF14] shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: point })
        ] }, point)) })
      ] }, section.title)) }) }),
      relatedService ? /* @__PURE__ */ jsx(ServiceCardsSection, { eyebrow: "Servicio sugerido", title: "Si ya identificaste este problema, este es el siguiente paso", description: "Conectamos cada articulo con la landing comercial que mejor encaja para no perder al lead en la navegacion.", items: [relatedService], ctaLabel: "Abrir landing", compact: true }) : null,
      /* @__PURE__ */ jsx(FAQ, { customQuestions: post.faq, title: "Preguntas frecuentes del problema", description: "Dudas rapidas para mover al usuario desde la investigacion hacia la consulta.", ctaText: "Quiero revisar este problema", ctaMessage: post.whatsappText }),
      /* @__PURE__ */ jsx(FooterCTA, { title: "Si tu auto muestra este sintoma, no sigas adivinando", description: "Escribenos con el problema exacto y te orientamos por WhatsApp para pasar del contenido a la accion.", buttonText: "Resolverlo por WhatsApp", whatsappText: post.whatsappText })
    ] }),
    /* @__PURE__ */ jsx(WhatsAppButton, { whatsappText: post.whatsappText })
  ] });
}

const page$c = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams$1();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(BlogPostPage, {
      ...props,
      slug: params.slug
    })
  });
});

const route3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$c
}, Symbol.toStringTag, { value: 'Module' }));

const ServiceHero = ({
  title,
  subtitle,
  description,
  badges = [],
  whatsappText
}) => {
  const whatsappUrl = buildWhatsAppUrl(whatsappText || `Hola EDU MOTORS, necesito informacion sobre ${title}.`);
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[70vh] flex items-center bg-[#070B16] overflow-hidden pt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-[#0055FF]/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#39FF14]/5 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5", style: {
        backgroundImage: "linear-gradient(rgba(0,85,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,255,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/40 text-sm mb-8", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-white transition-colors", children: "Inicio" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("a", { href: "/servicios", className: "hover:text-white transition-colors", children: "Servicios" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14]", children: title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mb-6", children: ["Atencion rapida en Lima Sur", "Diagnostico por WhatsApp", "Enfoque en urgencia y conversion"].map((badge) => /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/20 px-3 py-1 rounded-full", children: badge }, badge)) }),
        /* @__PURE__ */ jsx(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "text-4xl md:text-6xl font-black text-white italic leading-tight mb-4", children: title }),
        subtitle ? /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.1
        }, className: "text-xl text-[#0055FF] font-bold mb-4", children: subtitle }) : null,
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, className: "text-white/60 text-lg leading-relaxed mb-8 max-w-2xl", children: description }),
        badges.length ? /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.3
        }, className: "flex flex-wrap gap-4 mb-8", children: badges.map((badge) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/70 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle, { size: 14, className: "text-[#39FF14]" }),
          badge
        ] }, badge)) }) : null,
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.4
        }, className: "flex flex-col sm:flex-row gap-4 items-start", children: [
          /* @__PURE__ */ jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 bg-[#39FF14] text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#32e012] transition-all shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_50px_rgba(57,255,20,0.6)]", children: [
            /* @__PURE__ */ jsx(MessageCircle, { size: 20 }),
            "Diagnostico por WhatsApp"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white/40 text-xs", children: "Respuesta rapida para sintomas urgentes" }),
            /* @__PURE__ */ jsx("span", { className: "text-white/40 text-xs", children: "Cobertura comercial en Lima Sur" })
          ] })
        ] })
      ] })
    ] })
  ] });
};

function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    areaServed: "Lima Sur, Lima, Peru",
    provider: {
      "@type": "AutoRepair",
      name: "EDU MOTORS",
      telephone: "+51960812600",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villa El Salvador",
        addressRegion: "Lima",
        addressCountry: "PE"
      }
    }
  };
}
function ServiceLandingPage({
  service
}) {
  const relatedServices = (service.relatedSlugs || []).map((slug) => getServiceBySlug(slug)).filter(Boolean);
  const whatsappUrl = buildWhatsAppUrl(service.whatsappText);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: JSON.stringify(serviceSchema(service)).replace(/</g, "\\u003c")
      } }),
      /* @__PURE__ */ jsx(ServiceHero, { title: service.heroTitle, subtitle: service.heroSubtitle, description: service.heroDescription, badges: service.badges, whatsappText: service.whatsappText }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#0A0F1E]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Problemas de alta intencion" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2", children: [
            "Asi llega la gente cuando necesita",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-[#0055FF]", children: service.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/50 mt-4 leading-relaxed", children: "No vendemos un servicio generico. Resolvemos sintomas concretos con diagnostico claro y una propuesta que tenga sentido comercial." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto", children: service.problemQueries.map((query, index) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: index * 0.05
        }, className: "rounded-2xl border border-white/5 bg-[#070B16] px-5 py-5 text-white/75 text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { size: 18, className: "text-[#39FF14] shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: query })
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Lo revisamos sin adivinar ni empujarte a cambiar piezas antes de confirmar la causa." })
        ] }, query)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 bg-[#39FF14] text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#32e012] transition-all shadow-[0_0_30px_rgba(57,255,20,0.3)]", children: "Diagnostico por WhatsApp" }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#070B16]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Lo que revisamos" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-black text-white italic mt-2 mb-4", children: "Antes de cotizar, validamos esto" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 leading-relaxed", children: "La idea es simple: confirmar la falla antes de sugerir cambio de piezas. Eso reduce gasto, tiempo muerto y retrabajos." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: service.diagnosisFocus.map((item, index) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: index * 0.07
        }, className: "rounded-2xl border border-white/5 bg-[#0A0F1E] p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-white font-bold mb-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "text-[#39FF14] shrink-0" }),
            item.title
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 text-sm leading-relaxed", children: item.description })
        ] }, item.title)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { id: "precios", className: "py-20 bg-[#0A0F1E]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1.4fr,0.8fr] gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] border border-white/5 bg-[#070B16] p-8 md:p-10", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Precio y tiempos" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-black text-white italic mt-2 mb-8", children: "Guia referencial para decidir rapido" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: service.priceGuide.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-[#0A0F1E] px-5 py-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(BadgeDollarSign, { size: 18, className: "text-[#0055FF] shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-white/70 text-sm", children: item.label })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-black text-sm text-right", children: item.price })
          ] }, item.label)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] border border-[#39FF14]/15 bg-[#39FF14]/5 p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[#39FF14] mb-4", children: [
            /* @__PURE__ */ jsx(Clock3, { size: 20 }),
            /* @__PURE__ */ jsx("span", { className: "font-bold uppercase tracking-widest text-xs", children: "Enfoque comercial" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-white italic mb-4", children: "Primero claridad, luego presupuesto" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 leading-relaxed mb-6", children: "Si tu auto es herramienta de trabajo o el problema ya te esta frenando, te orientamos para priorizar lo urgente y no perder tiempo en pasos innecesarios." }),
          /* @__PURE__ */ jsx("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center w-full bg-[#39FF14] text-black px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-wide hover:bg-[#32e012] transition-all", children: "Quiero una orientacion hoy" })
        ] })
      ] }) }) }),
      relatedServices.length ? /* @__PURE__ */ jsx(ServiceCardsSection, { eyebrow: "Servicios relacionados", title: "Soluciones que suelen aparecer junto con esta falla", description: "Muchos clientes llegan buscando un solo servicio, pero la causa real suele tocar combustible, sensores, motor o mantenimiento.", items: relatedServices, ctaLabel: "Ver solucion", compact: true }) : null,
      /* @__PURE__ */ jsx(LocalSEO, {}),
      /* @__PURE__ */ jsx(FAQ, { customQuestions: service.faq, title: `Preguntas sobre ${service.name.toLowerCase()}`, description: "Respuestas pensadas para gente que necesita tomar una decision rapida sin perder dinero ni tiempo.", ctaText: "Resolver mi duda por WhatsApp", ctaMessage: service.whatsappText }),
      /* @__PURE__ */ jsx(QuickForm, { eyebrow: "Diagnostico guiado", title: `Cuéntanos que pasa con tu ${service.name.toLowerCase()}`, subtitle: "No necesitas saber de mecanica. Describe el sintoma y te orientamos por WhatsApp.", quickOptions: service.quickOptions, ctaText: service.ctaButton, contextLabel: service.name }),
      /* @__PURE__ */ jsx(FooterCTA, { title: service.ctaTitle, description: service.ctaDescription, buttonText: service.ctaButton, whatsappText: service.whatsappText })
    ] }),
    /* @__PURE__ */ jsx(WhatsAppButton, { whatsappText: service.whatsappText })
  ] });
}

const service = getServiceBySlug("bomba-gasolina");
function BombaGasolinaLima() {
  return /* @__PURE__ */ jsx(ServiceLandingPage, { service });
}

const page$b = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(BombaGasolinaLima, {
      ...props
    })
  });
});

const route4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$b
}, Symbol.toStringTag, { value: 'Module' }));

function IntentHubPage({
  eyebrow,
  title,
  description,
  items,
  basePath,
  ctaTitle,
  ctaDescription,
  ctaButton,
  whatsappText
}) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center max-w-4xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black text-white italic mt-4 mb-6", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg leading-relaxed", children: description })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#070B16]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto", children: items.map((item) => /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3", children: item.intentLabel }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white italic mb-4", children: /* @__PURE__ */ jsx("a", { href: `${basePath}/${item.slug}`, className: "hover:text-[#39FF14] transition-colors", children: item.heroTitle }) }),
        /* @__PURE__ */ jsx("p", { className: "text-white/55 leading-relaxed mb-6", children: item.summary }),
        /* @__PURE__ */ jsx("a", { href: `${basePath}/${item.slug}`, className: "inline-flex items-center justify-center bg-[#39FF14] text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide", children: "Abrir pagina" })
      ] }, item.slug)) }) }) }),
      /* @__PURE__ */ jsx(FooterCTA, { title: ctaTitle, description: ctaDescription, buttonText: ctaButton, whatsappText })
    ] }),
    /* @__PURE__ */ jsx(WhatsAppButton, { whatsappText })
  ] });
}

const symptomPages = [{
  slug: "auto-no-arranca",
  summary: "Una de las busquedas mas urgentes. Suele mezclar bateria, arranque, combustible y sensores.",
  intentLabel: "Sintoma urgente",
  metaTitle: "Auto no arranca en Lima Sur | Causas comunes y diagnostico rapido | EDU MOTORS",
  metaDescription: "Si tu auto no arranca en Lima Sur, revisa si el problema apunta a bateria, arranque, bomba de gasolina, sensor CKP o sistema electrico. Diagnostico y orientacion rapida.",
  heroTitle: "Auto no arranca: que revisar antes de gastar de mas",
  heroSubtitle: "No todo auto que no prende necesita bateria nueva",
  heroDescription: "Cuando el auto no arranca, la causa puede estar en bateria, arranque, bomba de gasolina, sensor CKP o alimentacion electrica. La clave es no cambiar piezas a ciegas.",
  cardsTitle: "Causas mas probables",
  cards: [{
    title: "Bateria o arranque",
    description: "Si no gira o gira muy lento, puede venir por energia, bornes o arranque."
  }, {
    title: "Combustible sin presion",
    description: "Si gira pero no prende, la bomba, el rele o el filtro pueden estar metidos."
  }, {
    title: "Sensor CKP o chispa",
    description: "A veces parece combustible, pero el motor no recibe señal para encender."
  }, {
    title: "Falla electrica intermitente",
    description: "Un rele, fusible o mala tierra puede hacerte perder horas y dinero."
  }],
  sections: [{
    title: "Lo que conviene observar antes de escribir",
    description: "Con dos o tres datos claros, el taller puede orientarte mejor desde WhatsApp.",
    bullets: ["Si el tablero enciende normal o se queda casi muerto.", "Si el motor gira o no gira al dar llave.", "Si escuchas la bomba de gasolina al contacto.", "Si la falla aparecio de golpe o ya venia avisando."]
  }, {
    title: "El error mas caro",
    description: "Cambiar bateria, bomba o sensor por intuicion suele terminar en doble gasto.",
    bullets: ["Una bateria nueva no ayuda si el problema es arranque o alimentacion.", "Cambiar bomba sin medir presion puede dejar la falla igual.", "Muchos apagones de sensor se confunden con falla mecanica."]
  }, {
    title: "Cuando ya es una urgencia real",
    description: "Si dependes del auto para trabajar o la falla se repite, conviene moverlo rapido.",
    bullets: ["Se apago en la calle y ya no quiso prender.", "Pasaste corriente y sigue sin encender.", "Solo falla en frio o despues de calentarse."]
  }],
  faq: [{
    question: "Si mi auto no arranca, siempre es bateria?",
    answer: "No. Tambien puede ser arranque, bomba de gasolina, sensor CKP, chispa o un problema electrico."
  }, {
    question: "Conviene cambiar bomba de gasolina de frente?",
    answer: "No. Primero conviene revisar si realmente falta presion o si la falla viene por rele, fusible o sensor."
  }, {
    question: "Si uso el auto para trabajar, que debo hacer?",
    answer: "Escribir con el sintoma exacto y pedir orientacion inmediata para priorizar lo urgente y evitar mas tiempo parado."
  }],
  relatedServiceSlugs: ["diagnostico", "bomba-gasolina", "sistema-electrico", "sistema-encendido"],
  quickOptions: ["No arranca", "Gira pero no prende", "No gira nada", "Se apago y no prende"],
  whatsappText: "Hola EDU MOTORS, mi auto no arranca y necesito orientacion.",
  ctaTitle: "Resolver un no arranca rapido evita gastos y tiempo muerto",
  ctaDescription: "Escribenos con el contexto: si gira, si prende tablero y si escuchas la bomba. Eso acelera mucho la orientacion.",
  ctaButton: "Quiero ayuda porque no arranca"
}, {
  slug: "falla-al-acelerar",
  summary: "Sintoma de alta intencion que puede venir de combustible, encendido, sensores o motor.",
  intentLabel: "Sintoma de conversion",
  metaTitle: "Falla al acelerar en Lima Sur | Combustible, sensores o motor | EDU MOTORS",
  metaDescription: "Si tu auto falla al acelerar en Lima Sur, revisa si el problema apunta a combustible, inyectores, sensores, encendido o desgaste de motor. Diagnostico real antes de cotizar.",
  heroTitle: "Falla al acelerar: no siempre es motor",
  heroSubtitle: "Jaloneos y perdida de respuesta suelen confundirse con una reparacion mas grande",
  heroDescription: "Cuando el auto falla al acelerar, la causa puede venir de mezcla, combustible, sensores, encendido o desgaste real. La clave es diferenciar antes de presupuestar.",
  cardsTitle: "Donde suele estar la causa",
  cards: [{
    title: "Combustible",
    description: "Presion insuficiente, filtro o inyectores fuera de rango."
  }, {
    title: "Sensores",
    description: "MAP, TPS o CKP pueden alterar la respuesta del motor."
  }, {
    title: "Encendido",
    description: "Bobinas, bujias o chispa irregular generan tirones y vibracion."
  }, {
    title: "Motor",
    description: "Si ademas hay humo, temperatura o ruido, ya conviene revisar dano mayor."
  }],
  sections: [{
    title: "Como describir bien la falla",
    description: "Mientras mas preciso sea el sintoma, mas rapido se filtra la causa.",
    bullets: ["Si jalonea en baja o solo cuando lo exiges.", "Si falla en subidas, en trafico o en carretera.", "Si prende check engine al mismo tiempo.", "Si el problema va con vibracion, humo o temperatura."]
  }, {
    title: "Lo que no conviene hacer",
    description: "Cambiar partes aisladas sin revisar el conjunto casi siempre retrasa la solucion.",
    bullets: ["Meter mano a bomba sin revisar chispa o sensores.", "Pensar en abrir motor sin medir antes mezcla y respuesta.", "Borrar codigos sin entender el origen de la falla."]
  }, {
    title: "Cuando subir de nivel",
    description: "Si el auto ya combina falla al acelerar con humo, temperatura o ruido, la revision debe ser mas seria.",
    bullets: ["Pierde potencia de forma constante.", "Tiembla incluso en ralenti.", "Hace ruido o humea bajo carga."]
  }],
  faq: [{
    question: "Falla al acelerar significa motor dañado?",
    answer: "No siempre. Muchas veces viene de combustible, encendido o sensores."
  }, {
    question: "Que servicio conviene pedir primero?",
    answer: "Si no tienes claro el origen, diagnostico automotriz. Luego se define si entra bomba, inyectores, sensores o motor."
  }, {
    question: "Y si solo falla de vez en cuando?",
    answer: "Igual conviene revisarlo, porque ese tipo de falla suele empeorar y es muy comun en sensores y sistema electrico."
  }],
  relatedServiceSlugs: ["diagnostico", "inyectores", "sensores-automotrices", "reparacion-motores"],
  quickOptions: ["Falla al acelerar", "Jalonea", "Pierde fuerza", "Prende check engine"],
  whatsappText: "Hola EDU MOTORS, mi auto falla al acelerar y necesito orientacion.",
  ctaTitle: "La falla correcta se vende como solucion, no como suposicion",
  ctaDescription: "Escribenos si la falla aparece en baja, en subida o con check engine para orientarte mejor.",
  ctaButton: "Quiero revisar la falla al acelerar"
}, {
  slug: "se-apaga-en-marcha",
  summary: "Muy valioso porque mezcla urgencia, miedo y necesidad de solucion inmediata.",
  intentLabel: "Sintoma urgente",
  metaTitle: "Auto se apaga en marcha en Lima Sur | Combustible, sensor o electrico | EDU MOTORS",
  metaDescription: "Si tu auto se apaga en marcha en Lima Sur, revisa si la causa apunta a bomba de gasolina, sensor CKP, cuerpo de aceleracion o sistema electrico.",
  heroTitle: "Se apaga en marcha: una falla que no conviene subestimar",
  heroSubtitle: "Cuando el auto se apaga, el problema suele ser mas que incomodo: puede ser inseguro",
  heroDescription: "Apagarse en marcha puede apuntar a combustible, sensor CKP, alimentacion electrica, cuerpo de aceleracion o encendido. Conviene revisar el patron exacto.",
  cardsTitle: "Los patrones que mas ayudan",
  cards: [{
    title: "Se apaga en semaforos",
    description: "Suele cruzarse con ralenti, cuerpo de aceleracion o mezcla."
  }, {
    title: "Se apaga al calentar",
    description: "Puede apuntar a sensor, alimentacion o componente sensible a temperatura."
  }, {
    title: "Se apaga manejando y luego prende",
    description: "Muy comun en fallas intermitentes de sensor o sistema electrico."
  }, {
    title: "Se apaga y no vuelve a prender",
    description: "Sube la urgencia porque entra fuerte combustible o encendido."
  }],
  sections: [{
    title: "Que decir para orientar mejor",
    description: "No basta con decir 'se apaga'. Hay que contar el contexto.",
    bullets: ["Si se apaga al detenerte o mientras avanzas.", "Si lo hace con motor frio o caliente.", "Si vuelve a prender enseguida o demora.", "Si prende check engine o vibra antes de apagarse."]
  }, {
    title: "Servicios que suelen cruzarse",
    description: "Este sintoma casi nunca vive solo en una sola pagina de servicio.",
    bullets: ["Bomba de gasolina y presion.", "Sensor CKP y sensores asociados.", "Sistema electrico y alimentacion.", "Cuerpo de aceleracion y ralenti."]
  }, {
    title: "Cuando ya no conviene seguir probando",
    description: "Si pasa seguido, el auto deja de ser confiable y puede convertirse en una parada total.",
    bullets: ["Ya te dejo varado una vez.", "Se apaga con mas frecuencia.", "Usas el auto para trabajar."]
  }],
  faq: [{
    question: "Se apaga en marcha, siempre es la bomba?",
    answer: "No. Tambien puede ser sensor CKP, cuerpo de aceleracion, sistema electrico o encendido."
  }, {
    question: "Si prende de nuevo al rato, igual debo revisarlo?",
    answer: "Si. Ese patron es comun en fallas intermitentes que luego empeoran."
  }, {
    question: "Que servicio pido si no se exactamente la causa?",
    answer: "Diagnostico general. Desde ahi se define si la ruta va por combustible, sensor o electrico."
  }],
  relatedServiceSlugs: ["diagnostico", "bomba-gasolina", "sistema-electrico", "cuerpo-aceleracion"],
  quickOptions: ["Se apaga en marcha", "Se apaga en semaforos", "Se apaga al calentar", "Vuelve a prender"],
  whatsappText: "Hola EDU MOTORS, mi auto se apaga en marcha y necesito ayuda.",
  ctaTitle: "Una falla que apaga el auto no se debe patear para despues",
  ctaDescription: "Escribenos con el patron exacto y te ayudamos a filtrar si apunta a combustible, sensor o sistema electrico.",
  ctaButton: "Quiero revisar por que se apaga"
}];
const pricePages = [];
const comparisonPages = [];
symptomPages.push({
  slug: "check-engine-encendido",
  summary: "Busqueda de entrada masiva para captar usuarios que aun no saben que servicio necesitan.",
  intentLabel: "Sintoma de entrada",
  metaTitle: "Check engine encendido en Lima Sur | Que significa y que revisar | EDU MOTORS",
  metaDescription: "Si tienes el check engine encendido en Lima Sur, descubre que revisar y como pasar de un codigo a un diagnostico real sin cambiar piezas a ciegas.",
  heroTitle: "Check engine encendido: la luz no es la solucion",
  heroSubtitle: "Sirve para detectar el problema, no para adivinar la pieza",
  heroDescription: "Cuando prende check engine, la mejor jugada es pasar del codigo a una lectura comercialmente util: que es urgente, que puede esperar y que servicio encaja.",
  cardsTitle: "Lo que puede estar detras",
  cards: [{
    title: "Sensor o lectura fuera de rango",
    description: "Muy comun, pero no es la unica posibilidad."
  }, {
    title: "Combustible o mezcla",
    description: "Puede elevar consumo, vibracion o perdida de potencia."
  }, {
    title: "Encendido",
    description: "Chispa irregular suele venir acompañada de check engine."
  }, {
    title: "Emisiones o fallo intermitente",
    description: "A veces el auto anda, pero ya avisa un problema."
  }],
  sections: [{
    title: "Que te conviene saber antes de borrar la luz",
    description: "Borrarla sin revisar el origen solo te quita visibilidad temporal.",
    bullets: ["Si prende fija o parpadea.", "Si viene con jaloneo o perdida de potencia.", "Si consume mas de lo normal.", "Si el auto sigue andando pero raro."]
  }, {
    title: "Como se convierte en venta",
    description: "Esta busqueda entra por diagnostico y desde ahi puede abrir varias rutas.",
    bullets: ["Sensores automotrices.", "Sistema electrico.", "Bomba o mezcla.", "Encendido o motor segun el caso."]
  }, {
    title: "Cuando atenderlo rapido",
    description: "No todas las luces tienen la misma prioridad, pero algunas si ameritan moverlo hoy.",
    bullets: ["Si parpadea.", "Si el auto vibra o se apaga.", "Si pierde mucha potencia."]
  }],
  faq: [{
    question: "Puedo seguir manejando con check engine?",
    answer: "Depende del sintoma. Si el auto vibra, se apaga o pierde mucha fuerza, conviene revisarlo rapido."
  }, {
    question: "Borrar el codigo arregla el problema?",
    answer: "No. Solo limpia la señal temporalmente."
  }, {
    question: "Si prende la luz, que servicio suele seguir?",
    answer: "Generalmente diagnostico, y luego sensores, sistema electrico, combustible o encendido segun lo que arroje."
  }],
  relatedServiceSlugs: ["check-engine", "diagnostico", "sensores-automotrices", "sistema-electrico"],
  quickOptions: ["Check engine", "Luz fija", "Luz parpadea", "Pierde fuerza"],
  whatsappText: "Hola EDU MOTORS, tengo el check engine encendido y quiero orientacion.",
  ctaTitle: "La luz sola no dice que cambiar, pero si te avisa que ya toca revisar",
  ctaDescription: "Escribenos si la luz es fija o parpadea y con que sintoma viene acompañada.",
  ctaButton: "Quiero revisar el check engine"
}, {
  slug: "consume-mucho-combustible",
  summary: "Busqueda ideal para captar ahorro, mantenimiento y futuro alto ticket de GNV/GLP.",
  intentLabel: "Sintoma + ahorro",
  metaTitle: "Mi auto consume mucho combustible en Lima Sur | Que revisar | EDU MOTORS",
  metaDescription: "Si tu auto consume mucho combustible en Lima Sur, revisa mantenimiento, inyectores, sensores, cuerpo de aceleracion o si ya conviene pensar en GNV o GLP.",
  heroTitle: "Consume mucho combustible: donde se pierde tu dinero",
  heroSubtitle: "Antes de pensar solo en gas, conviene entender por que el auto gasta de mas",
  heroDescription: "Consumo alto puede venir de mantenimiento atrasado, mezcla, inyectores, sensores o mal estado base. Y si usas mucho el auto, luego si vale mirar GNV o GLP.",
  cardsTitle: "Lo que mas se cruza con consumo alto",
  cards: [{
    title: "Afinamiento y mantenimiento",
    description: "La base atrasada suele inflar el gasto antes de que te des cuenta."
  }, {
    title: "Inyectores y mezcla",
    description: "Una mala pulverizacion o lectura cambia el consumo rapido."
  }, {
    title: "Sensores",
    description: "MAP, TPS o sensor de oxigeno pueden alterar mezcla y respuesta."
  }, {
    title: "Ahorro estructural",
    description: "Si recorres mucho, luego entra la comparacion GNV vs GLP."
  }],
  sections: [{
    title: "Primero: detectar si el consumo subio de verdad",
    description: "No todo consumo alto se siente igual; ayuda compararlo con el patron normal del auto.",
    bullets: ["Si el tanque dura claramente menos que antes.", "Si el auto se siente mas pesado o lento.", "Si hay olor fuerte a gasolina.", "Si el consumo subio junto con otro sintoma."]
  }, {
    title: "Lo que el cliente suele necesitar sin saberlo",
    description: "Buscar 'consume mucho' abre varias oportunidades comerciales correctas.",
    bullets: ["Afinamiento.", "Revision de inyectores.", "Sensores automotrices.", "Evaluacion de GNV o GLP si el kilometraje lo amerita."]
  }, {
    title: "Como priorizar",
    description: "No todo empieza por conversion a gas: primero hay que ordenar la base.",
    bullets: ["Si el auto falla, diagnostico antes de pensar en ahorro estructural.", "Si el auto solo gasta de mas, revisar mantenimiento e inyectores.", "Si usas el auto para trabajar, evaluar luego retorno de GNV o GLP."]
  }],
  faq: [{
    question: "Consumo alto siempre significa inyectores?",
    answer: "No. Tambien puede venir de mantenimiento, sensores, cuerpo de aceleracion, mezcla o forma de uso."
  }, {
    question: "Si consume mucho, ya me conviene GNV?",
    answer: "No siempre. Primero conviene revisar si el consumo esta subiendo por una falla o por mantenimiento atrasado."
  }, {
    question: "Que servicio conviene pedir primero?",
    answer: "Mantenimiento, afinamiento o diagnostico segun si el auto tiene otros sintomas ademas del gasto."
  }],
  relatedServiceSlugs: ["afinamiento", "inyectores", "diagnostico", "conversion-gnv"],
  quickOptions: ["Consume mucho", "Quiero ahorrar", "Huele a gasolina", "Uso el auto para trabajar"],
  whatsappText: "Hola EDU MOTORS, siento que mi auto consume mucho combustible y quiero orientacion.",
  ctaTitle: "Si el consumo subio, ese dinero ya se esta yendo cada semana",
  ctaDescription: "Escribenos cuanto ha subido el gasto y si el auto tiene otros sintomas para orientarte mejor.",
  ctaButton: "Quiero revisar el consumo"
}, {
  slug: "pierde-potencia",
  summary: "Captura la mezcla entre frustracion, urgencia y dudas sobre motor o combustible.",
  intentLabel: "Sintoma transaccional",
  metaTitle: "Auto pierde potencia en Lima Sur | Combustible, encendido o motor | EDU MOTORS",
  metaDescription: "Si tu auto pierde potencia en Lima Sur, revisa si el problema viene de combustible, encendido, sensores, temperatura o motor. Diagnostico y orientacion comercial.",
  heroTitle: "Pierde potencia: la falla que mas se confunde",
  heroSubtitle: "Puede parecer motor cuando en realidad la causa esta en combustible, chispa o sensores",
  heroDescription: "La perdida de potencia necesita contexto: si aparece en subidas, en caliente o junto a check engine, la ruta comercial cambia bastante.",
  cardsTitle: "Donde suele esconderse la perdida de potencia",
  cards: [{
    title: "Combustible",
    description: "Bomba, presion o inyectores afectan la respuesta bajo carga."
  }, {
    title: "Encendido",
    description: "Sin buena chispa, el motor responde como si estuviera amarrado."
  }, {
    title: "Temperatura",
    description: "Cuando se calienta, el rendimiento baja y el riesgo sube."
  }, {
    title: "Motor",
    description: "Si ademas humea o hace ruido, toca descartar dano real."
  }],
  sections: [{
    title: "Lo que mas ayuda a orientarla",
    description: "No es lo mismo perder potencia en un semaforo que en una subida con el carro cargado.",
    bullets: ["Si pasa siempre o solo en ciertos momentos.", "Si aparece en subidas o al exigirlo.", "Si se acompana de humo, vibracion o check engine.", "Si empeora con el motor caliente."]
  }, {
    title: "Servicios que suelen entrar",
    description: "Este sintoma casi nunca se resuelve con una sola suposicion.",
    bullets: ["Diagnostico.", "Bomba de gasolina o inyectores.", "Sistema de encendido.", "Motor o refrigeracion si ya hay otras alertas."]
  }, {
    title: "Cuando la potencia perdida ya cuesta caro",
    description: "Si usas el auto para trabajar, la baja de respuesta afecta tiempo y facturacion.",
    bullets: ["El auto ya no pasa bien las subidas.", "Se siente ahogado al adelantar o cargar peso.", "Cada semana responde peor."]
  }],
  faq: [{
    question: "Perder potencia siempre significa problema de motor?",
    answer: "No. De hecho, muchas veces viene de combustible, encendido o sensores."
  }, {
    question: "Que servicio suele entrar primero?",
    answer: "Diagnostico. Luego se afina si la ruta va por bomba, inyectores, encendido o motor."
  }, {
    question: "Si tambien se calienta, cambia la prioridad?",
    answer: "Si. Temperatura mas perdida de potencia requiere revisarlo con mayor cuidado para no escalar el dano."
  }],
  relatedServiceSlugs: ["diagnostico", "bomba-gasolina", "sistema-encendido", "reparacion-motores"],
  quickOptions: ["Pierde potencia", "Falla en subidas", "Se siente ahogado", "Prende check engine"],
  whatsappText: "Hola EDU MOTORS, mi auto pierde potencia y quiero orientacion.",
  ctaTitle: "Sin potencia, el auto deja de ser confiable y productivo",
  ctaDescription: "Escribenos si la falla aparece en subida, en caliente o con check engine y te ayudamos a enfocar la revision.",
  ctaButton: "Quiero revisar la potencia"
});
pricePages.push({
  slug: "diagnostico-automotriz",
  summary: "Pagina de dinero para quien ya acepta pagar si entiende que evita gastos peores.",
  intentLabel: "Precio de entrada",
  metaTitle: "Precio diagnostico automotriz en Lima Sur | Cuanto cuesta revisar una falla | EDU MOTORS",
  metaDescription: "Conoce cuanto cuesta un diagnostico automotriz en Lima Sur, que influye en el precio y cuando conviene pedirlo antes de cambiar piezas.",
  heroTitle: "Precio de diagnostico automotriz: cuanto cuesta y cuando si conviene pagarlo",
  heroSubtitle: "El mejor diagnostico no es el mas barato: es el que evita doble gasto",
  heroDescription: "La gente busca precio, pero lo que realmente compra es claridad. Un buen diagnostico te ahorra cambios de piezas innecesarios y acelera la solucion correcta.",
  cardsTitle: "Que mueve el precio",
  cards: [{
    title: "Tipo de falla",
    description: "No es lo mismo un check engine simple que una falla intermitente."
  }, {
    title: "Pruebas necesarias",
    description: "Escaneo, pruebas electricas y revision mecanica pueden cambiar el alcance."
  }, {
    title: "Tiempo de observacion",
    description: "Las fallas que aparecen por momentos suelen requerir mas criterio."
  }, {
    title: "Si el auto ya fue manipulado",
    description: "Cuando ya cambiaron piezas, el caso suele complicarse un poco mas."
  }],
  sections: [{
    title: "Cuando si vale pagar un diagnostico",
    description: "La pregunta correcta no es solo cuanto cuesta, sino cuanto te ahorra.",
    bullets: ["Cuando no sabes si la falla es motor, combustible o electrica.", "Cuando ya cambiaste piezas y el problema sigue.", "Cuando el auto se usa para trabajar y no puedes seguir adivinando."]
  }, {
    title: "Rango referencial",
    description: "La orientacion inicial por WhatsApp puede ser gratis, pero una revision tecnica base suele arrancar desde un valor de entrada.",
    bullets: ["Orientacion inicial: gratis.", "Revision base: desde S/ 50.", "Pruebas adicionales: segun complejidad."]
  }, {
    title: "Como aumenta conversion",
    description: "Esta pagina no solo responde precio; tambien educa por que conviene diagnosticar antes de cotizar reparacion.",
    bullets: ["Filtra a quien quiere resolver de verdad.", "Dispara servicios de entrada y secundarios.", "Reduce objecion de 'solo dime cuanto cuesta'."]
  }],
  faq: [{
    question: "El diagnostico vale la pena aunque luego no repare?",
    answer: "Si. Porque te da una ruta clara y evita seguir gastando sin certeza."
  }, {
    question: "El precio del diagnostico es fijo?",
    answer: "Hay una base referencial, pero depende del tipo de falla y pruebas que haga falta realizar."
  }, {
    question: "Si mi auto no arranca, primero pido diagnostico?",
    answer: "Si no sabes el origen, casi siempre es la mejor entrada."
  }],
  relatedServiceSlugs: ["diagnostico", "check-engine", "sistema-electrico"],
  quickOptions: ["Quiero precio", "No se que tiene", "Check engine", "No arranca"],
  whatsappText: "Hola EDU MOTORS, quiero saber el precio de un diagnostico automotriz.",
  ctaTitle: "Pagar claridad suele ser mas barato que cambiar piezas por intuicion",
  ctaDescription: "Escribenos tu sintoma y te orientamos si tu caso entra con diagnostico base o necesita algo mas puntual.",
  ctaButton: "Quiero precio de diagnostico"
}, {
  slug: "reparacion-de-motores",
  summary: "Busqueda de alto miedo y ticket alto. Conviene responder con transparencia, no con promesas vagas.",
  intentLabel: "Precio alto ticket",
  metaTitle: "Precio reparacion de motor en Lima Sur | Cuanto cuesta segun la falla | EDU MOTORS",
  metaDescription: "Descubre de que depende el precio de una reparacion de motor en Lima Sur y por que primero conviene diagnosticar antes de hablar de costo final.",
  heroTitle: "Precio de reparacion de motor: de que depende de verdad",
  heroSubtitle: "No existe un solo precio serio sin revisar si el problema si es del motor",
  heroDescription: "Buscar precio de motor casi siempre viene con ansiedad alta. Lo comercialmente correcto es explicar por que el costo cambia segun dano, pruebas y si el problema viene del motor o de otro sistema.",
  cardsTitle: "Lo que mas cambia el costo",
  cards: [{
    title: "Si la falla si es de motor",
    description: "Muchos sintomas parecen motor y terminan siendo combustible, sensores o encendido."
  }, {
    title: "Nivel de dano",
    description: "No es igual ruido leve que humo, consumo de aceite y temperatura alta."
  }, {
    title: "Tipo de trabajo",
    description: "Desde revision y pruebas hasta reparacion mayor."
  }, {
    title: "Tiempo parado",
    description: "Si el auto trabaja, tambien importa definir prioridades de intervencion."
  }],
  sections: [{
    title: "Cuando hablar de precio sin revisar es un error",
    description: "Porque el numero puede espantar o quedarse corto si el origen no esta confirmado.",
    bullets: ["Falla al acelerar no siempre es motor.", "Humo puede venir de mezcla o de dano mayor.", "Temperatura alta puede haber afectado o no el bloque."]
  }, {
    title: "Rango comercialmente correcto",
    description: "Lo mejor es trabajar con precios de entrada y dejar claro que el total depende de evaluacion.",
    bullets: ["Orientacion inicial: gratis.", "Revision base: desde S/ 50.", "Pruebas de motor: segun evaluacion.", "Reparacion mayor: cotizacion personalizada."]
  }, {
    title: "Que hace vender esta pagina",
    description: "No intenta cerrar el motor de frente; ayuda a llevar al usuario desde el miedo a una revision racional.",
    bullets: ["Baja objecion de precio absoluto.", "Invita a entrar por diagnostico.", "Activa servicios ocultos relacionados."]
  }],
  faq: [{
    question: "Me pueden dar precio exacto de reparar motor por WhatsApp?",
    answer: "Se puede dar orientacion inicial, pero el precio serio depende de confirmar la falla y el nivel de dano."
  }, {
    question: "Una falla de motor siempre significa reparacion mayor?",
    answer: "No. Varias fallas de potencia vienen de combustible, encendido o sensores y no de dano interno."
  }, {
    question: "Entonces por donde entro si tengo miedo al costo?",
    answer: "Lo mejor es empezar por diagnostico o revision base del sintoma."
  }],
  relatedServiceSlugs: ["reparacion-motores", "diagnostico", "sistema-refrigeracion"],
  quickOptions: ["Quiero precio motor", "Bota humo", "Pierde fuerza", "Se calienta"],
  whatsappText: "Hola EDU MOTORS, quiero orientacion sobre el precio de una reparacion de motor.",
  ctaTitle: "El precio del motor no se adivina, se aterriza con una revision correcta",
  ctaDescription: "Escribenos con el sintoma real y te ayudamos a saber si de verdad ya estas en una reparacion mayor.",
  ctaButton: "Quiero orientacion sobre precio de motor"
}, {
  slug: "bomba-de-gasolina",
  summary: "Precio con urgencia alta. Perfecta para convertir usuarios que ya sospechan de combustible.",
  intentLabel: "Precio urgente",
  metaTitle: "Precio bomba de gasolina en Lima Sur | Revisar, limpiar o cambiar | EDU MOTORS",
  metaDescription: "Conoce cuanto puede costar revisar o cambiar una bomba de gasolina en Lima Sur y por que primero conviene medir presion antes de reemplazar.",
  heroTitle: "Precio de bomba de gasolina: cuando se revisa, cuando se limpia y cuando se cambia",
  heroSubtitle: "No toda falla de arranque o apagones termina en reemplazo de bomba",
  heroDescription: "El precio correcto depende de si el problema esta en presion real, rele, fusible, cableado, filtro o en la bomba misma.",
  cardsTitle: "Que influye en el costo",
  cards: [{
    title: "Si el problema si es la bomba",
    description: "Primero hay que confirmar presion y alimentacion."
  }, {
    title: "Tipo de intervencion",
    description: "Puede ir desde revision hasta cambio completo."
  }, {
    title: "Modelo del vehiculo",
    description: "La accesibilidad y la pieza cambian bastante."
  }, {
    title: "Fallas asociadas",
    description: "A veces tambien entran filtro, inyectores o sistema electrico."
  }],
  sections: [{
    title: "La pregunta correcta antes del precio",
    description: "Antes de pedir cuanto cuesta cambiarla, conviene saber si realmente hace falta cambiarla.",
    bullets: ["El auto no arranca o se apaga.", "Pierde fuerza al acelerar.", "Hace ruido en el tanque.", "Huele a gasolina o consume mas de lo normal."]
  }, {
    title: "Rango referencial",
    description: "Se puede trabajar con precios de entrada sin prometer algo que dependa del modelo y de la causa.",
    bullets: ["Orientacion inicial: gratis.", "Revision base: desde S/ 50.", "Limpieza y prueba: desde S/ 80.", "Cambio con mano de obra: cotizacion segun unidad."]
  }, {
    title: "Como mejora conversion",
    description: "Responde precio, pero empuja a una revision inteligente antes del cambio.",
    bullets: ["Reduce miedo al costo oculto.", "Evita devolverte a una guerra de precios mal planteada.", "Conecta con diagnostico, sensores e inyectores."]
  }],
  faq: [{
    question: "Cambiar la bomba es lo mismo que revisar la bomba?",
    answer: "No. Revisar es confirmar si la presion y la alimentacion realmente la hacen responsable de la falla."
  }, {
    question: "Me pueden dar precio exacto sin ver el auto?",
    answer: "Se puede orientar, pero el precio final depende del modelo y de la causa confirmada."
  }, {
    question: "Si mi auto no arranca, siempre es bomba?",
    answer: "No. Tambien puede ser bateria, arranque, sensor CKP o sistema electrico."
  }],
  relatedServiceSlugs: ["bomba-gasolina", "diagnostico", "sistema-electrico"],
  quickOptions: ["Quiero precio bomba", "No arranca", "Se apaga", "Pierde fuerza"],
  whatsappText: "Hola EDU MOTORS, quiero saber el precio de revisar o cambiar la bomba de gasolina.",
  ctaTitle: "Antes de pagar una bomba nueva, confirma si de verdad es la causa",
  ctaDescription: "Escribenos el sintoma y te orientamos si conviene revisar presion, rele, fusible o cambio directo.",
  ctaButton: "Quiero precio de bomba"
});
pricePages.push({
  slug: "conversion-gnv",
  summary: "Pagina de dinero puro para usuarios que ya estan comparando inversion y ahorro.",
  intentLabel: "Precio alto ticket",
  metaTitle: "Precio conversion GNV en Lima Sur | Cuanto cuesta y cuando conviene | EDU MOTORS",
  metaDescription: "Conoce el precio de una conversion a GNV en Lima Sur, que cambia el costo y cuando realmente conviene segun kilometraje, uso y estado del auto.",
  heroTitle: "Precio conversion GNV: cuanto cuesta y cuando de verdad te conviene",
  heroSubtitle: "La decision no es solo el precio: es el retorno",
  heroDescription: "La mejor pagina de precio para GNV no compite solo por barato. Explica si tu kilometraje, tipo de uso y estado del auto justifican la inversion.",
  cardsTitle: "Que mueve el precio y el retorno",
  cards: [{
    title: "Tipo de vehiculo",
    description: "El equipo y la configuracion no son iguales para todos."
  }, {
    title: "Kilometraje mensual",
    description: "A mas uso, mas sentido economico tiene la conversion."
  }, {
    title: "Estado base del auto",
    description: "Si ya falla, primero conviene corregir el motor o encendido."
  }, {
    title: "Objetivo real",
    description: "No es igual un auto de trabajo que uno de uso ocasional."
  }],
  sections: [{
    title: "Cuando si conviene mirar precio de GNV",
    description: "Cuando el ahorro potencial tiene una razon clara y medible.",
    bullets: ["Usas el auto todos los dias.", "Haces bastante kilometraje mensual.", "El vehiculo esta en buen estado base.", "Buscas bajar costo fijo por trabajo o movilidad diaria."]
  }, {
    title: "Rango referencial",
    description: "Conviene usar rangos y dejar claro que la propuesta final depende del equipo y la unidad.",
    bullets: ["Orientacion inicial: gratis.", "Evaluacion previa: segun caso.", "Conversion GNV: desde S/ 2,800."]
  }, {
    title: "Que hace vender esta pagina",
    description: "No solo responde precio; filtra a quien realmente tiene perfil para conversion.",
    bullets: ["Conecta gasto actual con retorno.", "Reduce leads frios curiosos.", "Abre paso a financiamiento y comparativas GNV vs GLP."]
  }],
  faq: [{
    question: "El precio de GNV es fijo?",
    answer: "No. Depende del vehiculo, el equipo y la evaluacion previa."
  }, {
    question: "Si mi auto falla, igual puedo convertir?",
    answer: "Lo recomendable es corregir primero la falla base."
  }, {
    question: "Como saber si me conviene GNV?",
    answer: "Depende sobre todo de kilometraje, uso diario y estado actual del auto."
  }],
  relatedServiceSlugs: ["conversion-gnv", "diagnostico", "mantenimiento-general"],
  quickOptions: ["Quiero precio GNV", "Uso el auto para trabajar", "Quiero ahorrar", "Quiero evaluar mi auto"],
  whatsappText: "Hola EDU MOTORS, quiero saber el precio de una conversion a GNV.",
  ctaTitle: "El precio de GNV tiene sentido cuando el ahorro te devuelve la inversion",
  ctaDescription: "Escribenos cuanto recorres y que auto usas para orientarte con enfoque real de retorno.",
  ctaButton: "Quiero precio de GNV"
}, {
  slug: "conversion-glp",
  summary: "Pagina para quienes comparan alternativas y necesitan una respuesta menos obvia que GNV.",
  intentLabel: "Precio comparativo",
  metaTitle: "Precio conversion GLP en Lima Sur | Cuanto cuesta y si conviene | EDU MOTORS",
  metaDescription: "Conoce el precio de una conversion a GLP en Lima Sur, que influye en el costo y cuando tiene sentido frente a gasolina o GNV.",
  heroTitle: "Precio conversion GLP: cuanto cuesta y cuando si tiene sentido",
  heroSubtitle: "No todo ahorro se resuelve igual; a veces GLP encaja mejor segun el uso",
  heroDescription: "La mejor forma de vender GLP no es aislarlo: es compararlo con el uso real del auto, el kilometraje y el estado base de la unidad.",
  cardsTitle: "Lo que conviene evaluar",
  cards: [{
    title: "Uso del vehiculo",
    description: "No es igual un auto diario que uno eventual."
  }, {
    title: "Comparacion con GNV",
    description: "Depende de espacio, kilometraje y retorno."
  }, {
    title: "Estado base",
    description: "Si el auto ya falla, la conversion debe esperar."
  }, {
    title: "Presupuesto disponible",
    description: "La decision tambien pasa por cuanto quieres invertir y recuperar."
  }],
  sections: [{
    title: "Cuando si conviene mirar GLP",
    description: "Tiene sentido cuando la unidad y el uso encajan con el retorno esperado.",
    bullets: ["Buscas bajar gasto pero aun no defines si GNV es lo tuyo.", "Usas el auto a diario o en esquema mixto.", "Tu auto esta en un estado base razonable."]
  }, {
    title: "Rango referencial",
    description: "Conviene hablar de cotizacion segun unidad y no forzar un numero absoluto.",
    bullets: ["Orientacion inicial: gratis.", "Evaluacion previa: segun caso.", "Conversion GLP: cotizacion segun unidad."]
  }, {
    title: "Como gana esta pagina",
    description: "Atrae usuarios con intencion de ahorro que aun no decidieron tecnologia.",
    bullets: ["Conecta muy bien con comparativas.", "Abre conversaciones de GNV vs GLP.", "Filtra por presupuesto y uso."]
  }],
  faq: [{
    question: "GLP es mas barato que GNV?",
    answer: "Depende del caso. La decision correcta se toma con kilometraje, uso y retorno, no solo con un numero suelto."
  }, {
    question: "Puedo convertir si el auto tiene fallas?",
    answer: "Lo ideal es corregir primero la falla de base."
  }, {
    question: "Como saber si me conviene GLP?",
    answer: "Comparando uso, presupuesto y estado del auto frente a otras opciones."
  }],
  relatedServiceSlugs: ["conversion-glp", "diagnostico", "mantenimiento-general"],
  quickOptions: ["Quiero precio GLP", "GLP o GNV", "Quiero ahorrar", "Quiero evaluar mi auto"],
  whatsappText: "Hola EDU MOTORS, quiero saber el precio de una conversion a GLP.",
  ctaTitle: "El mejor precio no sirve si la alternativa no encaja con tu uso",
  ctaDescription: "Escribenos que auto tienes y cuanto recorres para orientarte entre GLP, GNV o una mejora previa del auto.",
  ctaButton: "Quiero precio de GLP"
});
comparisonPages.push({
  slug: "gnv-vs-glp",
  summary: "Comparativa de dinero puro para capturar usuarios con intención alta de ahorro.",
  intentLabel: "Comparativa comercial",
  metaTitle: "GNV vs GLP en Lima Sur | Cual conviene segun tu uso | EDU MOTORS",
  metaDescription: "Compara GNV vs GLP segun kilometraje, uso, presupuesto y retorno en Lima Sur. Descubre cual te conviene de verdad.",
  heroTitle: "GNV vs GLP: cual conviene segun tu caso",
  heroSubtitle: "La respuesta correcta no es universal; depende de como usas el auto",
  heroDescription: "Comparar GNV vs GLP sirve cuando ya sabes que quieres ahorrar, pero aun no decides con que alternativa. Lo clave es cruzar kilometraje, presupuesto y estado del auto.",
  cardsTitle: "Los criterios que mas importan",
  cards: [{
    title: "Kilometraje mensual",
    description: "A mas recorrido, mas pesa el retorno economico."
  }, {
    title: "Uso del vehiculo",
    description: "Trabajo diario y uso ocasional no se comparan igual."
  }, {
    title: "Estado base",
    description: "Si el auto falla, ninguna conversion arregla eso."
  }, {
    title: "Presupuesto",
    description: "Tambien importa cuanto estas dispuesto a invertir ahora."
  }],
  sections: [{
    title: "Cuando GNV suele tener mas sentido",
    description: "No por moda, sino por retorno.",
    bullets: ["Recorres mucho cada mes.", "Usas el auto para trabajo.", "Buscas bajar costo fijo fuerte de combustible."]
  }, {
    title: "Cuando GLP puede encajar mejor",
    description: "Hay perfiles donde GLP resulta una opcion razonable.",
    bullets: ["Buscas ahorro pero con otro perfil de uso.", "Quieres evaluar una alternativa distinta segun tu unidad.", "Todavia estas comparando presupuesto y retorno."]
  }, {
    title: "La decision correcta",
    description: "Primero validar el estado del auto, luego comparar tecnologia.",
    bullets: ["Si hay falla actual, primero diagnostico.", "Si el auto esta bien, comparar kilometraje y uso real.", "No decidir solo por precio de instalacion."]
  }],
  faq: [{
    question: "GNV siempre conviene mas que GLP?",
    answer: "No. Depende de kilometraje, uso, espacio y presupuesto."
  }, {
    question: "Si uso el auto para trabajar, cual suele encajar mejor?",
    answer: "Depende del kilometraje real, pero ese perfil suele justificar mejor una comparacion seria de retorno."
  }, {
    question: "Puedo decidir sin revisar el estado del motor?",
    answer: "No es lo recomendable. Primero conviene asegurar que la base mecanica este sana."
  }],
  relatedServiceSlugs: ["conversion-gnv", "conversion-glp", "diagnostico"],
  quickOptions: ["GNV o GLP", "Quiero ahorrar", "Uso el auto para trabajar", "Quiero evaluar mi auto"],
  whatsappText: "Hola EDU MOTORS, quiero comparar GNV vs GLP para mi auto.",
  ctaTitle: "Comparar bien evita una inversion mal alineada",
  ctaDescription: "Escribenos cuanto recorres y que auto usas para orientarte con una comparativa mas real.",
  ctaButton: "Quiero comparar GNV vs GLP"
}, {
  slug: "diagnostico-vs-cambiar-piezas",
  summary: "Comparativa perfecta para romper objeción de clientes que solo piden precio de pieza.",
  intentLabel: "Comparativa de conversion",
  metaTitle: "Diagnostico vs cambiar piezas en Lima Sur | Que conviene primero | EDU MOTORS",
  metaDescription: "Descubre por que suele convenir diagnosticar antes de cambiar piezas si tu auto no arranca, falla al acelerar o prende check engine.",
  heroTitle: "Diagnostico vs cambiar piezas: que conviene primero",
  heroSubtitle: "La mayoria de dobles gastos nacen de cambiar partes antes de confirmar la causa",
  heroDescription: "Esta comparativa sirve para usuarios que creen ahorrar yendo directo a la pieza, cuando en realidad se exponen a repetir gasto y perder tiempo.",
  cardsTitle: "Lo que realmente comparas",
  cards: [{
    title: "Tiempo",
    description: "Un cambio errado alarga la falla, no la acorta."
  }, {
    title: "Dinero",
    description: "Una pieza innecesaria suele costar mas que un diagnostico bien hecho."
  }, {
    title: "Certeza",
    description: "Sin revisar causa, no hay presupuesto confiable."
  }, {
    title: "Resultado",
    description: "El diagnostico te deja una ruta; la pieza sola no siempre."
  }],
  sections: [{
    title: "Cuando el cliente quiere ir directo a la pieza",
    description: "Pasa mucho con bateria, bomba, sensor y bobinas.",
    bullets: ["Mi auto no arranca, debe ser bateria.", "Pierde fuerza, seguro es la bomba.", "Prendio check engine, debe ser un sensor."]
  }, {
    title: "Cuando diagnosticar gana",
    description: "Sobre todo si hay varios sintomas o la falla ya es intermitente.",
    bullets: ["Auto que se apaga a veces.", "Jaloneo con consumo alto.", "Falla al acelerar sin causa clara."]
  }, {
    title: "Como se convierte esta pagina",
    description: "Baja la resistencia al servicio de entrada.",
    bullets: ["Justifica el valor del diagnostico.", "Abre venta de servicios relacionados.", "Reduce leads obsesionados solo con precio de pieza."]
  }],
  faq: [{
    question: "Cambiar una pieza sin revisar puede arreglar igual?",
    answer: "A veces si, pero muchas veces no. Y cuando no, ya sumaste un gasto innecesario."
  }, {
    question: "En que casos el diagnostico si es indispensable?",
    answer: "Cuando la falla es intermitente, hay varios sintomas o ya se cambiaron piezas sin resultado."
  }, {
    question: "Entonces siempre debo entrar por diagnostico?",
    answer: "No siempre, pero en muchas fallas modernas si es la mejor puerta de entrada."
  }],
  relatedServiceSlugs: ["diagnostico", "check-engine", "bomba-gasolina"],
  quickOptions: ["No quiero cambiar piezas al tanteo", "Prendio check engine", "No arranca", "Pierde fuerza"],
  whatsappText: "Hola EDU MOTORS, quiero orientacion antes de cambiar piezas en mi auto.",
  ctaTitle: "La pieza mas barata sale cara si no era esa",
  ctaDescription: "Escribenos tu sintoma y te ayudamos a definir si conviene diagnosticar primero.",
  ctaButton: "Quiero orientacion antes de cambiar piezas"
});
comparisonPages.push({
  slug: "reparar-motor-vs-cambiar-motor",
  summary: "Comparativa fuerte para usuarios muy calientes que ya piensan en escenarios caros.",
  intentLabel: "Comparativa alto ticket",
  metaTitle: "Reparar motor vs cambiar motor en Lima Sur | Como decidir | EDU MOTORS",
  metaDescription: "Aprende como decidir entre reparar motor o cambiar motor segun la falla real, el nivel de dano y el costo total en Lima Sur.",
  heroTitle: "Reparar motor vs cambiar motor: como decidir sin improvisar",
  heroSubtitle: "La decision correcta depende del dano real, no del miedo inicial",
  heroDescription: "Cuando alguien entra a esta comparativa, ya esta en una fase muy caliente. La clave es aterrizar si el problema realmente exige un escenario mayor o si aun se puede resolver con otra ruta.",
  cardsTitle: "Lo que define la decision",
  cards: [{
    title: "Dano real",
    description: "No es igual humo o ruido leve que un dano severo confirmado."
  }, {
    title: "Diagnostico previo",
    description: "Sin revisar, no hay base seria para comparar."
  }, {
    title: "Costo total",
    description: "No es solo la intervencion: importa tiempo y riesgo."
  }, {
    title: "Uso del auto",
    description: "Si trabajas con el auto, la decision tambien se mide por retorno."
  }],
  sections: [{
    title: "Cuando aun no toca pensar en cambio",
    description: "Muchas fallas que asustan fuerte no terminan en cambio total.",
    bullets: ["Perdida de potencia sin pruebas de dano interno.", "Humo sin haber descartado mezcla o temperatura.", "Ruido sin contexto tecnico claro."]
  }, {
    title: "Cuando la comparacion si tiene sentido",
    description: "Cuando ya existe una base tecnica para hablar de dano y costo total.",
    bullets: ["Hay senales claras de desgaste mayor.", "El auto tuvo sobrecalentamiento serio.", "Ya se hizo una revision y se conoce el nivel del problema."]
  }, {
    title: "Como vender bien esta pagina",
    description: "No se trata de cerrar un cambio de motor desde SEO; se trata de guiar a una revision seria.",
    bullets: ["Reduce el miedo irracional.", "Filtra usuarios calientes.", "Lleva al diagnostico correcto."]
  }],
  faq: [{
    question: "Como saber si ya debo pensar en cambiar motor?",
    answer: "Solo despues de una revision seria que confirme nivel de dano y descarte otras causas menos extremas."
  }, {
    question: "Reparar siempre es mejor que cambiar?",
    answer: "No siempre. Depende del dano real, costo total y uso del vehiculo."
  }, {
    question: "Que hago si solo tengo sintomas y miedo al costo?",
    answer: "Empieza por diagnostico o revision de motor; esa es la base para cualquier decision grande."
  }],
  relatedServiceSlugs: ["reparacion-motores", "diagnostico", "sistema-refrigeracion"],
  quickOptions: ["Reparar o cambiar motor", "Bota humo", "Se calienta", "Pierde fuerza"],
  whatsappText: "Hola EDU MOTORS, quiero orientacion para decidir entre reparar o cambiar motor.",
  ctaTitle: "Las decisiones caras se toman mejor con diagnostico, no con miedo",
  ctaDescription: "Escribenos que sintomas tienes y te ayudamos a bajar esa decision a tierra.",
  ctaButton: "Quiero evaluar reparar vs cambiar"
}, {
  slug: "gnv-vs-gasolina",
  summary: "Comparativa mas amplia para captar usuarios de ahorro que aun no decidieron entrar a gas.",
  intentLabel: "Comparativa ahorro",
  metaTitle: "GNV vs gasolina en Lima Sur | Cuando cambiarte para ahorrar | EDU MOTORS",
  metaDescription: "Compara GNV vs gasolina segun kilometraje, uso y retorno en Lima Sur. Descubre cuando tiene sentido convertir tu auto para ahorrar.",
  heroTitle: "GNV vs gasolina: cuando cambiarte si tiene sentido",
  heroSubtitle: "La comparacion real no es ideologica, es economica",
  heroDescription: "Esta pagina captura a quien todavia esta evaluando si seguir en gasolina o pasarse a una alternativa de ahorro. Es una gran entrada para usuarios de alta intencion.",
  cardsTitle: "Que comparar de verdad",
  cards: [{
    title: "Gasto mensual",
    description: "La comparacion empieza por cuanto estas quemando hoy."
  }, {
    title: "Kilometraje",
    description: "Si recorres poco, el retorno no se ve igual."
  }, {
    title: "Estado del auto",
    description: "No conviene convertir una base mecanica inestable."
  }, {
    title: "Objetivo",
    description: "Ahorro estructural, trabajo diario o uso ocasional."
  }],
  sections: [{
    title: "Cuando gasolina empieza a doler mas",
    description: "Ahi es donde esta comparativa se vuelve comercialmente potente.",
    bullets: ["El gasto mensual ya pesa demasiado.", "Usas el auto todos los dias.", "Recorres bastante por trabajo o movilidad diaria."]
  }, {
    title: "Cuando GNV empieza a ganar",
    description: "No solo por precio del combustible: por retorno completo.",
    bullets: ["Kilometraje alto.", "Uso diario constante.", "Vehiculo en estado razonable."]
  }, {
    title: "El orden correcto",
    description: "Primero ver si el auto esta sano, luego comparar conversion.",
    bullets: ["Si el auto falla, diagnostico primero.", "Si el auto esta bien, evaluar retorno y precio de conversion.", "Luego comparar GNV con GLP si hace falta."]
  }],
  faq: [{
    question: "GNV siempre ahorra mas que gasolina?",
    answer: "El ahorro depende del kilometraje y de cuanto usas el auto. A mas uso, mas clara se vuelve la diferencia."
  }, {
    question: "Puedo evaluar GNV si el auto ya falla?",
    answer: "Primero conviene corregir la base mecanica."
  }, {
    question: "Que pagina sigue despues de esta comparativa?",
    answer: "Normalmente precio de conversion GNV o comparativa GNV vs GLP."
  }],
  relatedServiceSlugs: ["conversion-gnv", "diagnostico", "mantenimiento-general"],
  quickOptions: ["GNV o gasolina", "Quiero ahorrar", "Uso diario", "Quiero evaluar mi auto"],
  whatsappText: "Hola EDU MOTORS, quiero comparar GNV vs gasolina para mi auto.",
  ctaTitle: "El ahorro real empieza cuando comparas con tus numeros, no con intuicion",
  ctaDescription: "Escribenos cuanto recorres y te orientamos si ya tiene sentido evaluar una conversion.",
  ctaButton: "Quiero comparar GNV vs gasolina"
});
symptomPages.push({
  slug: "bota-humo",
  summary: "Busqueda que filtra usuarios preocupados por dano de motor, consumo de aceite y reparaciones grandes.",
  intentLabel: "Sintoma de alto riesgo",
  metaTitle: "Mi auto bota humo en Lima Sur | Que puede indicar | EDU MOTORS",
  metaDescription: "Si tu auto bota humo en Lima Sur, descubre si apunta a consumo de aceite, mala combustion, mezcla o un problema mayor de motor. Revision y orientacion.",
  heroTitle: "Bota humo: una señal que no conviene normalizar",
  heroSubtitle: "El color y el contexto del humo ayudan a entender si la falla es de mezcla o de motor",
  heroDescription: "Cuando un auto bota humo, la preocupacion suele ir directo al motor. A veces si, pero tambien conviene mirar combustion, mezcla y contexto real.",
  cardsTitle: "Lo que el humo suele estar diciendo",
  cards: [{
    title: "Combustion o mezcla",
    description: "Puede estar entrando combustible de mas o trabajando mal la mezcla."
  }, {
    title: "Consumo de aceite",
    description: "Sube la alerta si tambien baja nivel o hay olor raro."
  }, {
    title: "Temperatura",
    description: "Si hubo calentada previa, la prioridad cambia."
  }, {
    title: "Desgaste de motor",
    description: "Cuando se combina con poca fuerza o ruido, hay que tomarlo mas en serio."
  }],
  sections: [{
    title: "Antes de asustarte, observa esto",
    description: "El patron del humo da pistas utiles para orientar la conversacion.",
    bullets: ["Si aparece al prender, al acelerar o todo el tiempo.", "Si viene con olor fuerte o consumo de aceite.", "Si el auto tambien pierde potencia.", "Si se calento antes de empezar a humear."]
  }, {
    title: "Donde se vuelve transaccional",
    description: "Esta busqueda empuja bien cuando se combina con miedo real al dano.",
    bullets: ["Revision de motor.", "Diagnostico para no abrir sin necesidad.", "Cruce con temperatura y mezcla."]
  }, {
    title: "Cuando no conviene seguirlo usando igual",
    description: "Si el humo ya es fuerte o viene con otra senal, toca moverlo.",
    bullets: ["Pierde mucha fuerza.", "Consume aceite rapido.", "Se calienta o hace ruido raro."]
  }],
  faq: [{
    question: "Si bota humo, ya significa reparar motor?",
    answer: "No siempre. Pero si se acompana de baja potencia, consumo de aceite o temperatura alta, toca revisar con criterio."
  }, {
    question: "El humo puede venir de mezcla y no de motor?",
    answer: "Si. Una mala combustion o exceso de combustible tambien puede generar humo."
  }, {
    question: "Que servicio conviene primero?",
    answer: "Diagnostico o revision de motor, segun si el humo viene con otras senales fuertes de dano."
  }],
  relatedServiceSlugs: ["reparacion-motores", "diagnostico", "sistema-refrigeracion", "inyectores"],
  quickOptions: ["Bota humo", "Consume aceite", "Pierde fuerza", "Se calento"],
  whatsappText: "Hola EDU MOTORS, mi auto bota humo y necesito orientacion.",
  ctaTitle: "El humo no se arregla ignorandolo",
  ctaDescription: "Escribenos cuando aparece el humo y con que otros sintomas viene para orientar la revision correcta.",
  ctaButton: "Quiero revisar el humo"
}, {
  slug: "motor-se-calienta",
  summary: "Busqueda urgente que conecta perfecto con riesgo, dano mayor y conversion rapida.",
  intentLabel: "Sintoma urgente",
  metaTitle: "Motor se calienta en Lima Sur | Que revisar antes de danarlo | EDU MOTORS",
  metaDescription: "Si tu motor se calienta en Lima Sur, revisa temperatura, refrigeracion y riesgo real para el motor. Orientacion rapida para no escalar el problema.",
  heroTitle: "Motor se calienta: el problema que mas caro se pone si lo pateas",
  heroSubtitle: "Una subida de temperatura mal gestionada puede terminar en dano mayor",
  heroDescription: "Si el motor se calienta en trafico, subidas o recorridos largos, hay que revisar rapido si el riesgo esta en refrigeracion base o si ya hay impacto en el motor.",
  cardsTitle: "Las preguntas clave",
  cards: [{
    title: "Se calienta en trafico",
    description: "Ayuda a orientar si el problema aparece con baja velocidad o poca ventilacion."
  }, {
    title: "Se calienta en subidas",
    description: "Bajo carga el sistema muestra antes sus puntos debiles."
  }, {
    title: "Ya hirvio una vez",
    description: "Eso sube la prioridad porque puede haber dano acumulado."
  }, {
    title: "Pierde agua o humo",
    description: "Cuando se suma otra señal, el caso se vuelve mas serio."
  }],
  sections: [{
    title: "Lo que mas ayuda antes de ir al taller",
    description: "No basta con decir que se calienta: importa el contexto.",
    bullets: ["Si pasa en trafico, subida o carretera.", "Si sube la aguja o prende alerta.", "Si ya perdiste refrigerante.", "Si el auto ya habia fallado antes."]
  }, {
    title: "Que se suele vender bien detras de esta busqueda",
    description: "No es solo 'radiador': se abren varias rutas.",
    bullets: ["Sistema de refrigeracion.", "Diagnostico.", "Reparacion de motor si ya hay senales mayores."]
  }, {
    title: "Cuando dejar de usarlo asi",
    description: "Si la temperatura ya se fue varias veces, seguir empujandolo puede multiplicar el costo.",
    bullets: ["Ya hirvio.", "Pierde fuerza al calentarse.", "Bota humo o pierde liquido."]
  }],
  faq: [{
    question: "Si se calienta una sola vez, igual lo reviso?",
    answer: "Si. Una sola calentada fuerte ya es una alerta que conviene tomar en serio."
  }, {
    question: "Puede afectar el motor?",
    answer: "Si, por eso mientras mas rapido se revise, menor es el riesgo de escalar."
  }, {
    question: "Que servicio pedir primero?",
    answer: "Sistema de refrigeracion o diagnostico, salvo que ya existan senales claras de dano de motor."
  }],
  relatedServiceSlugs: ["sistema-refrigeracion", "diagnostico", "reparacion-motores", "mantenimiento-general"],
  quickOptions: ["Se calienta", "Ya hirvio", "Pierde refrigerante", "Tengo miedo de danar motor"],
  whatsappText: "Hola EDU MOTORS, mi motor se esta calentando y necesito orientacion.",
  ctaTitle: "Una temperatura alta ignorada termina costando mucho mas",
  ctaDescription: "Escribenos en que contexto sube la temperatura y te ayudamos a definir la urgencia real.",
  ctaButton: "Quiero revisar la temperatura"
}, {
  slug: "vibra-al-prender",
  summary: "Muy buena para atacar encendido, inyectores y diagnostico sin ir de frente a motor.",
  intentLabel: "Sintoma de entrada",
  metaTitle: "Mi auto vibra al prender en Lima Sur | Encendido, inyectores o mezcla | EDU MOTORS",
  metaDescription: "Si tu auto vibra al prender en Lima Sur, revisa si la causa apunta a encendido, inyectores, sensores o mezcla antes de pensar en una falla mayor.",
  heroTitle: "Vibra al prender: un sintoma pequeño que suele avisar algo mas",
  heroSubtitle: "Cuando el arranque ya no es limpio, conviene revisar combustion, mezcla y chispa",
  heroDescription: "La vibracion al prender suele apuntar a encendido, inyectores, mezcla o sensores. La oportunidad esta en corregir la causa antes de que escale a jaloneo o perdida de potencia.",
  cardsTitle: "Lo que suele estar detras",
  cards: [{
    title: "Encendido",
    description: "Bujias o bobinas pueden hacer que el motor prenda disparejo."
  }, {
    title: "Inyectores",
    description: "Una mala entrega al arranque genera vibracion o ralenti inestable."
  }, {
    title: "Sensores",
    description: "Fallas de lectura alteran la mezcla inicial."
  }, {
    title: "Mantenimiento atrasado",
    description: "Una base descuidada amplifica estos sintomas."
  }],
  sections: [{
    title: "Que observar",
    description: "Mientras mas claro el patron, mas facil decidir el siguiente servicio.",
    bullets: ["Si vibra solo en frio o tambien en caliente.", "Si luego se estabiliza o sigue fallando.", "Si va con check engine.", "Si el auto gasta mas o responde peor."]
  }, {
    title: "Servicios que suelen entrar",
    description: "Este sintoma suele ser buena puerta de entrada porque no siempre es grave, pero si vende bien servicios relacionados.",
    bullets: ["Sistema de encendido.", "Inyectores.", "Sensores automotrices.", "Diagnostico si la causa no esta clara."]
  }, {
    title: "Cuando ya pide moverlo",
    description: "Si la vibracion ya viene con otros sintomas, conviene atenderlo antes.",
    bullets: ["Tambien jalonea en marcha.", "Prendio check engine.", "Pierde fuerza o consume mucho."]
  }],
  faq: [{
    question: "Vibra al prender y luego se normaliza, igual hay que revisarlo?",
    answer: "Si. Ese tipo de falla suele ser una senal temprana de mezcla, encendido o sensor."
  }, {
    question: "Puede ser motor?",
    answer: "Puede, pero muchas veces el origen esta en encendido, inyectores o mantenimiento base."
  }, {
    question: "Que servicio suele seguir?",
    answer: "Sistema de encendido, inyectores o diagnostico segun el contexto."
  }],
  relatedServiceSlugs: ["sistema-encendido", "inyectores", "sensores-automotrices", "diagnostico"],
  quickOptions: ["Vibra al prender", "Solo en frio", "Luego se estabiliza", "Check engine"],
  whatsappText: "Hola EDU MOTORS, mi auto vibra al prender y quiero orientacion.",
  ctaTitle: "La vibracion al arranque suele ser el aviso antes del problema mayor",
  ctaDescription: "Escribenos si pasa en frio, en caliente o con check engine para orientarte con mejor criterio.",
  ctaButton: "Quiero revisar la vibracion"
}, {
  slug: "arranca-pero-se-apaga",
  summary: "Sintoma con urgencia alta que cruza combustible, ralenti, sensores y electrico.",
  intentLabel: "Sintoma urgente",
  metaTitle: "Arranca pero se apaga en Lima Sur | Que revisar | EDU MOTORS",
  metaDescription: "Si tu auto arranca pero se apaga en Lima Sur, revisa si la causa esta en ralenti, combustible, sensores o sistema electrico. Diagnostico y orientacion rapida.",
  heroTitle: "Arranca pero se apaga: la falla que da una falsa esperanza",
  heroSubtitle: "Prende, parece que va a quedar, pero se corta enseguida",
  heroDescription: "Cuando un auto arranca pero se apaga, la causa suele moverse entre ralenti, combustible, sensor CKP, mezcla o sistema electrico. Hay que revisar el patron exacto.",
  cardsTitle: "Lo que mas suele estar en juego",
  cards: [{
    title: "Ralenti o cuerpo de aceleracion",
    description: "Muy comun si se apaga apenas sueltas o al detenerte."
  }, {
    title: "Combustible",
    description: "Si no sostiene la marcha, puede faltar presion o entrega estable."
  }, {
    title: "Sensores",
    description: "Una señal erratica puede dejarlo prender y luego cortar."
  }, {
    title: "Sistema electrico",
    description: "Alimentacion intermitente tambien provoca este patron."
  }],
  sections: [{
    title: "Como describirlo bien",
    description: "Este sintoma tiene variantes, y cada una apunta a cosas distintas.",
    bullets: ["Si se apaga al instante o despues de unos segundos.", "Si lo hace solo en frio o tambien en caliente.", "Si acelerando un poco se mantiene vivo.", "Si prende check engine o vibra antes de apagarse."]
  }, {
    title: "Servicios relacionados",
    description: "Es uno de los sintomas donde mas se cruzan varias rutas comerciales.",
    bullets: ["Cuerpo de aceleracion.", "Bomba de gasolina.", "Sistema electrico.", "Sensores o diagnostico general."]
  }, {
    title: "Cuando ya es problema de dia a dia",
    description: "Si pasa todas las mananas o en cada parada, te esta quitando tiempo productivo.",
    bullets: ["Ya no puedes confiar en salir y llegar sin que falle.", "Te obliga a insistir varias veces al arrancar.", "Empieza a combinarse con otros sintomas."]
  }],
  faq: [{
    question: "Arranca pero se apaga, es seguro seguir usandolo?",
    answer: "No es lo ideal, sobre todo si la falla se repite o si el auto se usa para trabajar."
  }, {
    question: "Si acelero un poco y aguanta, eso que indica?",
    answer: "Suele ayudar a sospechar de ralenti, cuerpo de aceleracion, mezcla o control de aire."
  }, {
    question: "Que servicio conviene pedir primero?",
    answer: "Diagnostico o una revision de ralenti/cuerpo de aceleracion, segun como se comporte el sintoma."
  }],
  relatedServiceSlugs: ["cuerpo-aceleracion", "diagnostico", "bomba-gasolina", "sistema-electrico"],
  quickOptions: ["Arranca y se apaga", "Solo en frio", "Acelerando se mantiene", "Se apaga al toque"],
  whatsappText: "Hola EDU MOTORS, mi auto arranca pero se apaga y necesito orientacion.",
  ctaTitle: "Si prende y se apaga, la falla ya te esta robando tiempo",
  ctaDescription: "Escribenos como se comporta exactamente y te ayudamos a decidir si apunta a ralenti, combustible o sensores.",
  ctaButton: "Quiero revisar por que se apaga"
});
function getSymptomBySlug(slug) {
  return symptomPages.find(item => item.slug === slug) || null;
}
function getPricePageBySlug(slug) {
  return pricePages.find(item => item.slug === slug) || null;
}
function getComparisonBySlug(slug) {
  return comparisonPages.find(item => item.slug === slug) || null;
}

function ComparisonsPage() {
  return /* @__PURE__ */ jsx(IntentHubPage, { eyebrow: "Cluster de comparativas", title: "Paginas para capturar usuarios que ya estan comparando opciones y mas cerca de decidir", description: "Estas comparativas sirven para romper objeciones, filtrar mejor la intención y mover al usuario hacia WhatsApp con una decisión más madura.", items: comparisonPages, basePath: "/comparativas", ctaTitle: "Comparar bien hoy evita gastar mal mañana", ctaDescription: "Escribenos por WhatsApp si estas entre dos caminos y te ayudamos a decidir con criterio tecnico y comercial.", ctaButton: "Quiero ayuda para comparar", whatsappText: "Hola EDU MOTORS, estoy comparando opciones para mi auto y quiero orientacion." });
}

const page$a = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ComparisonsPage, {
      ...props
    })
  });
});

const route5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$a
}, Symbol.toStringTag, { value: 'Module' }));

function webPageSchema(title, description, path) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `https://edumotors.pe${path}`
  };
}
function IntentLandingPage({
  item,
  path,
  eyebrow = "Busqueda transaccional",
  cardsEyebrow = "Lo que hay detras",
  sectionsEyebrow = "Como decidir bien",
  relatedTitle = "Servicios que suelen resolver este escenario",
  relatedDescription = "La mejor pagina de intencion no se queda en el problema: lo conecta con el servicio correcto.",
  quickFormEyebrow = "Orientacion rapida",
  quickFormTitle,
  quickFormSubtitle,
  relatedEntries = [],
  relatedEntriesEyebrow = "Dominio local",
  relatedEntriesTitle = "Busquedas relacionadas",
  relatedEntriesDescription = "Variantes pensadas para reforzar la intencion local y mejorar el enlazado interno.",
  relatedEntriesBasePath = "",
  showLocalSEO = true
}) {
  const relatedServices = (item.relatedServiceSlugs || []).map((slug) => getServiceBySlug(slug)).filter(Boolean);
  const relatedEntryCards = relatedEntries.map((entry) => ({
    ...entry,
    href: entry.path || (relatedEntriesBasePath ? `${relatedEntriesBasePath}/${entry.slug}` : "")
  })).filter((entry) => entry.href);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: JSON.stringify(webPageSchema(item.heroTitle, item.metaDescription, path)).replace(/</g, "\\u003c")
      } }),
      /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center max-w-4xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: item.intentLabel || eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black text-white italic mt-4 mb-6", children: item.heroTitle }),
        /* @__PURE__ */ jsx("p", { className: "text-[#0055FF] font-bold text-lg md:text-xl mb-4", children: item.heroSubtitle }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg leading-relaxed", children: item.heroDescription })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#070B16]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: cardsEyebrow }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2", children: item.cardsTitle })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-4 gap-4 max-w-6xl mx-auto", children: item.cards.map((card, index) => /* @__PURE__ */ jsxs(motion.article, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: index * 0.05
        }, className: "rounded-3xl border border-white/5 bg-[#0A0F1E] p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-bold italic mb-3", children: card.title }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 text-sm leading-relaxed", children: card.description })
        ] }, card.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#0A0F1E]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: sectionsEyebrow }) }),
        item.sections.map((section, index) => /* @__PURE__ */ jsxs(motion.article, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: index * 0.05
        }, className: "rounded-[2rem] border border-white/5 bg-[#070B16] p-8 md:p-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black text-white italic mb-4", children: section.title }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 leading-relaxed mb-6", children: section.description }),
          /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: section.bullets.map((bullet) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-white/65 leading-relaxed", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-[#39FF14] shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: bullet })
          ] }, bullet)) })
        ] }, section.title))
      ] }) }),
      relatedServices.length ? /* @__PURE__ */ jsx(ServiceCardsSection, { eyebrow: "Servicios relacionados", title: relatedTitle, description: relatedDescription, items: relatedServices, ctaLabel: "Ver servicio", compact: true }) : null,
      relatedEntryCards.length ? /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#070B16] border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-10", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: relatedEntriesEyebrow }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2 mb-4", children: relatedEntriesTitle }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 leading-relaxed", children: relatedEntriesDescription })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto", children: relatedEntryCards.map((entry) => /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3", children: entry.intentLabel || "Relacionado" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-white italic mb-4", children: /* @__PURE__ */ jsx("a", { href: entry.href, className: "hover:text-[#39FF14] transition-colors", children: entry.heroTitle || entry.title }) }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 leading-relaxed mb-6", children: entry.summary }),
          /* @__PURE__ */ jsx("a", { href: entry.href, className: "inline-flex items-center justify-center bg-[#39FF14] text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide", children: "Ver pagina local" })
        ] }, entry.slug || entry.href)) })
      ] }) }) : null,
      showLocalSEO ? /* @__PURE__ */ jsx(LocalSEO, {}) : null,
      /* @__PURE__ */ jsx(FAQ, { customQuestions: item.faq, title: "Preguntas frecuentes", description: "Respuestas pensadas para ayudar a decidir sin perder tiempo ni dinero.", ctaText: "Resolver mi duda por WhatsApp", ctaMessage: item.whatsappText }),
      /* @__PURE__ */ jsx(QuickForm, { eyebrow: quickFormEyebrow, title: quickFormTitle || `Cuentanos mas sobre: ${item.heroTitle}`, subtitle: quickFormSubtitle || "Describe tu caso y te orientamos por WhatsApp para definir el siguiente paso.", quickOptions: item.quickOptions, ctaText: item.ctaButton, contextLabel: item.heroTitle }),
      /* @__PURE__ */ jsx(FooterCTA, { title: item.ctaTitle, description: item.ctaDescription, buttonText: item.ctaButton, whatsappText: item.whatsappText })
    ] }),
    /* @__PURE__ */ jsx(WhatsAppButton, { whatsappText: item.whatsappText })
  ] });
}

function ComparisonDetailPage() {
  const {
    slug
  } = useParams();
  const item = getComparisonBySlug(slug || "");
  if (!item) {
    return null;
  }
  return /* @__PURE__ */ jsx(IntentLandingPage, { item, path: `/comparativas/${item.slug}`, eyebrow: "Comparativa comercial", cardsEyebrow: "Criterios que importan", sectionsEyebrow: "Como decidir sin adivinar", quickFormEyebrow: "Decision guiada", quickFormTitle: `Cuentanos tu caso para comparar mejor: ${item.heroTitle.toLowerCase()}`, quickFormSubtitle: "Describe tu uso, tu objetivo o tu sintoma y te ayudamos a comparar con criterio real." });
}

const page$9 = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams$1();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ComparisonDetailPage, {
      ...props,
      slug: params.slug
    })
  });
});

const route6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$9
}, Symbol.toStringTag, { value: 'Module' }));

const localIntentSeeds = [{
  slug: "auto-no-arranca-villa-el-salvador",
  symptomSlug: "auto-no-arranca",
  zoneSlug: "villa-el-salvador",
  problemLabel: "no arranca",
  localSummary: "Alta prioridad para vecinos y unidades de trabajo en Villa El Salvador que necesitan volver a moverse rapido.",
  localBullets: ["En Villa El Salvador este problema suele llegar con urgencia porque el auto se usa para trabajo diario o traslados constantes.", "La primera pregunta comercial es si el motor gira o no, porque eso cambia totalmente la ruta entre bateria, arranque, combustible o sensor.", "Si ya intentaste pasar corriente y sigue igual, conviene ir directo a una orientacion mas seria."],
  localFaq: [{
    question: "Si mi auto no arranca en Villa El Salvador, que revisan primero?",
    answer: "Primero filtramos si el problema apunta a bateria, arranque, combustible o sensor, segun como se comporte al dar llave."
  }]
}, {
  slug: "auto-no-arranca-sjm",
  symptomSlug: "auto-no-arranca",
  zoneSlug: "san-juan-de-miraflores",
  problemLabel: "no arranca",
  localSummary: "Busqueda hiperlocal para San Juan de Miraflores con fuerte intención de resolución inmediata.",
  localBullets: ["En SJM es muy comun que el cliente llegue diciendo solo 'no prende'; por eso el filtrado rapido de sintomas es clave.", "Si el tablero prende pero no arranca, muchas veces la ruta se mueve hacia combustible, sensor CKP o chispa.", "Si el auto se usa todos los dias, la urgencia comercial sube aunque la falla aparezca solo en frio."],
  localFaq: [{
    question: "En SJM atienden autos que fallan solo por las mañanas?",
    answer: "Si. Ese patron es bastante comun y ayuda a orientar si la falla esta en bateria, sensor, combustible o encendido."
  }]
}, {
  slug: "check-engine-sjm",
  symptomSlug: "check-engine-encendido",
  zoneSlug: "san-juan-de-miraflores",
  problemLabel: "tiene check engine encendido",
  localSummary: "Pensada para captar consultas urbanas de SJM donde la luz de motor viene con jaloneo o consumo alto.",
  localBullets: ["En San Juan de Miraflores este sintoma suele aparecer en autos de uso urbano intensivo y trayectos cortos con trafico.", "La oportunidad comercial esta en pasar del codigo a una explicacion clara de urgencia, no solo a borrar la luz.", "Si ademas hay jaloneo, apagones o perdida de potencia, conviene priorizar la revision."],
  localFaq: [{
    question: "Si tengo check engine en SJM pero el auto aun camina, igual debo verlo?",
    answer: "Si, sobre todo si ya sientes que el auto responde distinto, consume mas o se apaga a veces."
  }]
}, {
  slug: "consume-mucho-lurin",
  symptomSlug: "consume-mucho-combustible",
  zoneSlug: "lurin",
  problemLabel: "consume mucho combustible",
  localSummary: "Muy buena para unidades de trabajo y recorridos largos desde Lurin.",
  localBullets: ["En Lurin esta busqueda conecta bien con clientes que usan el auto para trabajo y sienten el gasto cada semana.", "Antes de vender ahorro por GNV o GLP, conviene ordenar mantenimiento, inyectores y sensores.", "Si el auto recorre trayectos largos, una mejora de consumo tiene impacto comercial inmediato."],
  localFaq: [{
    question: "Si mi auto consume mucho en Lurin, me conviene GNV de frente?",
    answer: "No siempre. Primero conviene revisar si el consumo subio por una falla o por mantenimiento atrasado."
  }]
}, {
  slug: "falla-al-acelerar-vmt",
  symptomSlug: "falla-al-acelerar",
  zoneSlug: "villa-maria-del-triunfo",
  problemLabel: "falla al acelerar",
  localSummary: "En VMT esta búsqueda mezcla frustración, miedo a daño de motor y necesidad de solución rápida.",
  localBullets: ["En Villa Maria del Triunfo este problema suele llegar despues de pasar por varios mecanicos sin una causa clara.", "La gracia comercial aqui es separar si el cliente necesita motor, bomba, encendido o solo diagnostico.", "Si la falla aparece en subidas o al exigirlo, el mensaje tiene que priorizar revision real y no suposiciones."],
  localFaq: [{
    question: "En VMT revisan fallas al acelerar aunque no sepa si es motor o bomba?",
    answer: "Si. Justamente ahi entra bien el diagnostico para separar combustible, sensores, encendido o motor."
  }]
}, {
  slug: "se-apaga-en-marcha-villa-el-salvador",
  symptomSlug: "se-apaga-en-marcha",
  zoneSlug: "villa-el-salvador",
  problemLabel: "se apaga en marcha",
  localSummary: "Muy fuerte para urgencia en Villa El Salvador porque toca seguridad y tiempo perdido.",
  localBullets: ["Cuando un auto se apaga en marcha en Villa El Salvador, la objecion principal no es precio: es confianza y rapidez.", "Esta pagina funciona bien si el auto se usa para trabajar o moverse todos los dias.", "El enfoque correcto es confirmar si la falla va por combustible, sensor, ralenti o sistema electrico."],
  localFaq: [{
    question: "Si se apaga manejando en Villa El Salvador, es una urgencia?",
    answer: "Si, porque afecta seguridad y puede terminar dejandote varado si no se revisa a tiempo."
  }]
}, {
  slug: "motor-se-calienta-pachacamac",
  symptomSlug: "motor-se-calienta",
  zoneSlug: "pachacamac",
  problemLabel: "se calienta",
  localSummary: "Ideal para recorridos largos o exigentes desde Pachacamac donde la temperatura sube bajo carga.",
  localBullets: ["En Pachacamac este problema suele aparecer en trayectos largos, subidas o recorridos donde el motor va cargado.", "Si ya hubo una calentada fuerte, la pagina tiene que empujar a revisar rapido para no llevar el problema a motor.", "Sirve muy bien para conectar refrigeracion con diagnostico o revision de motor segun el riesgo."],
  localFaq: [{
    question: "Si se calienta en ruta por Pachacamac pero luego baja, igual lo reviso?",
    answer: "Si. Ese tipo de patron suele anticipar un problema de refrigeracion o carga que luego escala."
  }]
}, {
  slug: "pierde-potencia-lurin",
  symptomSlug: "pierde-potencia",
  zoneSlug: "lurin",
  problemLabel: "pierde potencia",
  localSummary: "Pensada para autos de trabajo o trayectos largos desde Lurin donde la potencia perdida se siente mas.",
  localBullets: ["En Lurin, perder potencia pega fuerte cuando el auto carga peso, sube o recorre distancias largas.", "Este tipo de consulta convierte bien hacia diagnostico, combustible, encendido o motor segun el contexto.", "Si ademas subio el consumo, la oportunidad comercial crece porque el cliente ya siente el costo doble."],
  localFaq: [{
    question: "Si mi auto pierde potencia en Lurin y lo uso para trabajar, por donde entro?",
    answer: "Lo mejor es entrar por diagnostico para definir si la salida va por bomba, inyectores, encendido o motor."
  }]
}, {
  slug: "bota-humo-vmt",
  symptomSlug: "bota-humo",
  zoneSlug: "villa-maria-del-triunfo",
  problemLabel: "bota humo",
  localSummary: "Hiperlocal para captar la mezcla entre miedo, urgencia y ticket potencial en VMT.",
  localBullets: ["En VMT esta busqueda suele venir con preocupacion alta por motor, sobre todo si el auto ya tambien pierde fuerza.", "La pagina sirve para bajar ansiedad, ordenar la revision y no saltar directo a una reparacion mayor sin base.", "Si hubo calentada previa o consumo de aceite, la prioridad de atencion sube bastante."],
  localFaq: [{
    question: "En VMT atienden autos que botan humo aunque todavia sigan andando?",
    answer: "Si. Ese es precisamente el mejor momento para revisarlo antes de que se vuelva una falla mas cara."
  }]
}, {
  slug: "arranca-pero-se-apaga-chorrillos",
  symptomSlug: "arranca-pero-se-apaga",
  zoneSlug: "chorrillos",
  problemLabel: "arranca pero se apaga",
  localSummary: "Muy buena para usuarios de Chorrillos que llegan con desesperación pero aun no saben si el problema es combustible, ralenti o eléctrico.",
  localBullets: ["En Chorrillos este patron suele aparecer en uso urbano: prende, parece estable y se apaga a los segundos o en la primera parada.", "Comercialmente convierte bien hacia cuerpo de aceleracion, combustible o sistema electrico.", "La clave es preguntar si aguanta acelerando un poco o si se apaga igual, porque eso orienta mucho la ruta."],
  localFaq: [{
    question: "Si en Chorrillos mi auto prende y se apaga al toque, que revisan?",
    answer: "Segun el patron, se revisa ralenti, cuerpo de aceleracion, combustible, sensor o alimentacion electrica."
  }]
}];
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
    cards: [...symptom.cards.slice(0, 3), {
      title: `En ${zone.name}`,
      description: seed.localSummary
    }],
    sections: [{
      title: `Contexto local en ${zone.name}`,
      description: "La misma falla se vende distinto segun la zona, el tipo de uso y la urgencia del cliente.",
      bullets: seed.localBullets
    }, symptom.sections[0], {
      title: `Servicios que mas suelen entrar en ${zone.name}`,
      description: "Estas son las rutas que mas sentido suelen tener cuando el sintoma aparece en esta zona.",
      bullets: dedupe([...zone.recommendedSlugs.slice(0, 3).map(slug => {
        const parts = slug.split("-");
        return parts.join(" ");
      }), ...symptom.relatedServiceSlugs.slice(0, 3).map(slug => slug.split("-").join(" "))])
    }],
    faq: [...seed.localFaq, ...symptom.faq.slice(0, 2)],
    relatedServiceSlugs: dedupe([...symptom.relatedServiceSlugs, ...zone.recommendedSlugs]).slice(0, 4),
    quickOptions: dedupe([...zone.quickOptions.slice(0, 2), ...symptom.quickOptions.slice(0, 3)]),
    whatsappText: `Hola EDU MOTORS, estoy en ${zone.name} y mi auto ${seed.problemLabel}. Necesito orientacion.`,
    ctaTitle: `Si tu auto ${seed.problemLabel} en ${zone.name}, conviene moverlo con rapidez y criterio`,
    ctaDescription: "Escribenos con el patron exacto y la zona para orientarte hacia la revision que mejor encaje con la falla real.",
    ctaButton: `Quiero ayuda en ${zone.name}`
  };
}
const localIntentPages = localIntentSeeds.map(buildLocalIntentPage).filter(Boolean);
function getLocalIntentBySlug(slug) {
  return localIntentPages.find(item => item.slug === slug) || null;
}
function getLocalIntentsByZone(zoneSlug) {
  const normalizedZoneSlug = getZoneBySlug(zoneSlug || "").slug;
  return localIntentPages.filter(item => item.zoneSlug === normalizedZoneSlug);
}
function getLocalIntentsBySymptom(symptomSlug) {
  return localIntentPages.filter(item => item.symptomSlug === symptomSlug);
}

function LocalIntentHubPage() {
  return /* @__PURE__ */ jsx(IntentHubPage, { eyebrow: "Cluster local", title: "Paginas hiperlocales para convertir cuando la busqueda ya trae sintoma y zona", description: "Aqui cruzamos problema + ubicacion para competir mejor en Lima Sur sin duplicar el contenido principal de sintomas ni de zonas.", items: localIntentPages, basePath: "/local", ctaTitle: "Si tu auto falla y ya sabes tu zona, el siguiente paso es hablar claro", ctaDescription: "Escribenos por WhatsApp con el sintoma exacto y tu zona para orientarte rapido hacia diagnostico, combustible, motor o ahorro.", ctaButton: "Quiero ayuda segun mi zona", whatsappText: "Hola EDU MOTORS, quiero orientacion local para la falla de mi auto." });
}

const page$8 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(LocalIntentHubPage, {
      ...props
    })
  });
});

const route7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$8
}, Symbol.toStringTag, { value: 'Module' }));

function LocalIntentPage() {
  const {
    slug
  } = useParams();
  const item = getLocalIntentBySlug(slug || "");
  if (!item) {
    return null;
  }
  const zone = getZoneBySlug(item.zoneSlug);
  const sameSymptomEntries = getLocalIntentsBySymptom(item.symptomSlug).filter((entry) => entry.slug !== item.slug).slice(0, 3);
  const sameZoneEntries = getLocalIntentsByZone(item.zoneSlug).filter((entry) => entry.slug !== item.slug).slice(0, 3);
  const relatedEntries = sameSymptomEntries.length > 0 ? sameSymptomEntries : sameZoneEntries;
  const relatedEntriesTitle = sameSymptomEntries.length > 0 ? "Esta misma falla tambien se esta buscando en otras zonas" : `Otras consultas de alta intencion en ${zone.name}`;
  const relatedEntriesDescription = sameSymptomEntries.length > 0 ? "Estas variantes ayudan a reforzar el dominio local del sintoma sin repetir el mismo contenido base." : `Estas paginas refuerzan la cobertura de ${zone.name} con problemas reales que suelen convertirse rapido.`;
  return /* @__PURE__ */ jsx(IntentLandingPage, { item, path: `/local/${item.slug}`, showLocalSEO: false, relatedEntries, relatedEntriesEyebrow: "Cobertura local", relatedEntriesTitle, relatedEntriesDescription, relatedEntriesBasePath: "/local", quickFormEyebrow: `Orientacion en ${zone.name}`, quickFormTitle: `Cuentanos que pasa con tu auto en ${zone.name}`, quickFormSubtitle: "Describe el patron exacto y te orientamos por WhatsApp para definir rapido la revision correcta." });
}

const page$7 = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams$1();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(LocalIntentPage, {
      ...props,
      slug: params.slug
    })
  });
});

const route8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$7
}, Symbol.toStringTag, { value: 'Module' }));

function PricesPage() {
  return /* @__PURE__ */ jsx(IntentHubPage, { eyebrow: "Cluster de precio", title: "Paginas de precio pensadas para vender, no solo para responder cuanto cuesta", description: "El objetivo no es dar un numero vacio: es llevar la consulta de precio hacia una decision mejor orientada y una conversion mas fuerte.", items: pricePages, basePath: "/precios", ctaTitle: "Si el precio te preocupa, primero aterriza bien la falla o la inversion", ctaDescription: "Escribenos por WhatsApp con tu sintoma o tu objetivo de ahorro y te ayudamos a encajar el precio con tu caso real.", ctaButton: "Quiero orientacion sobre precio", whatsappText: "Hola EDU MOTORS, quiero orientacion sobre precio para mi auto." });
}

const page$6 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(PricesPage, {
      ...props
    })
  });
});

const route9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$6
}, Symbol.toStringTag, { value: 'Module' }));

function PriceDetailPage() {
  const {
    slug
  } = useParams();
  const item = getPricePageBySlug(slug || "");
  if (!item) {
    return null;
  }
  return /* @__PURE__ */ jsx(IntentLandingPage, { item, path: `/precios/${item.slug}`, eyebrow: "Busqueda de precio", cardsEyebrow: "Que cambia el costo", sectionsEyebrow: "Como evaluar el precio", quickFormEyebrow: "Cotizacion guiada", quickFormTitle: `Cuentanos tu caso para orientar el precio de ${item.heroTitle.toLowerCase()}`, quickFormSubtitle: "Describe tu vehiculo, el sintoma o tu objetivo y te ayudamos a aterrizar el rango correcto." });
}

const page$5 = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams$1();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(PriceDetailPage, {
      ...props,
      slug: params.slug
    })
  });
});

const route10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$5
}, Symbol.toStringTag, { value: 'Module' }));

function ProblemsPage() {
  return /* @__PURE__ */ jsx(IntentHubPage, { eyebrow: "Cluster de sintomas", title: "Paginas para captar al cliente cuando todavia piensa en el problema, no en el servicio", description: "Estas URLs atacan sintomas urgentes y conectan cada busqueda con los servicios que realmente suelen resolverla.", items: symptomPages, basePath: "/problemas", ctaTitle: "Si ya sabes el sintoma, el siguiente paso es orientarlo bien", ctaDescription: "Escribenos por WhatsApp con el problema exacto y te ayudamos a aterrizar si necesitas diagnostico, combustible, motor o ahorro.", ctaButton: "Quiero orientacion por sintoma", whatsappText: "Hola EDU MOTORS, quiero orientacion segun el sintoma de mi auto." });
}

const page$4 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ProblemsPage, {
      ...props
    })
  });
});

const route11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$4
}, Symbol.toStringTag, { value: 'Module' }));

function ProblemPage() {
  const {
    problema
  } = useParams();
  const item = getSymptomBySlug(problema || "");
  if (!item) {
    return null;
  }
  const localVariants = getLocalIntentsBySymptom(item.slug).slice(0, 4);
  return /* @__PURE__ */ jsx(IntentLandingPage, { item, path: `/problemas/${item.slug}`, relatedEntries: localVariants, relatedEntriesEyebrow: "Versiones locales", relatedEntriesTitle: "Donde esta misma falla ya se esta buscando en Lima Sur", relatedEntriesDescription: "Estas combinaciones de sintoma + zona refuerzan la intencion local y ayudan a capturar al cliente que quiere resolver hoy, no solo informarse.", relatedEntriesBasePath: "/local" });
}

const page$3 = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams$1();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ProblemPage, {
      ...props,
      problema: params.problema
    })
  });
});

const route12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$3
}, Symbol.toStringTag, { value: 'Module' }));

const services = getServiceCatalog();
function ServicesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center max-w-4xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Arquitectura comercial" }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black text-white italic mt-4 mb-6", children: "Servicios automotrices pensados para captar urgencia y cerrar mas rapido" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg leading-relaxed", children: "No todos los servicios cumplen el mismo rol. Algunos captan la urgencia, otros entran por diagnostico y otros elevan ticket desde el ahorro." })
      ] }) }),
      /* @__PURE__ */ jsx(ServiceCardsSection, { eyebrow: "Servicios principales", title: "Cluster comercial de servicios", description: "La estructura separa bien la intencion urgente, el servicio de entrada y los servicios de alto ticket para que cada pagina venda mejor.", items: services, ctaLabel: "Abrir landing" }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#0A0F1E]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto rounded-[2rem] border border-white/5 bg-[#070B16] p-8 md:p-10", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Expansion de servicios" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-black text-white italic mt-2 mb-6", children: "Servicios secundarios que aumentan conversion y ticket promedio" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-4", children: hiddenServices.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/5 bg-[#0A0F1E] p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-bold mb-2", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 text-sm leading-relaxed", children: item.description })
        ] }, item.title)) })
      ] }) }) }),
      /* @__PURE__ */ jsx(FAQ, { title: "Preguntas sobre servicios y tiempos", description: "Respuestas generales para ayudar al usuario a entrar por el servicio correcto.", ctaText: "Quiero saber que servicio necesito", ctaMessage: "Hola EDU MOTORS, no estoy seguro de que servicio necesito para mi auto." }),
      /* @__PURE__ */ jsx(FooterCTA, { title: "Si no sabes que servicio pedir, empieza por diagnostico", description: "Es la mejor forma de convertir sintomas en una ruta clara de reparacion o ahorro sin empujar cambios innecesarios.", buttonText: "Quiero orientacion por WhatsApp", whatsappText: "Hola EDU MOTORS, no se que servicio necesita mi auto y quiero orientacion." })
    ] }),
    /* @__PURE__ */ jsx(WhatsAppButton, {})
  ] });
}

const page$2 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ServicesPage, {
      ...props
    })
  });
});

const route13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$2
}, Symbol.toStringTag, { value: 'Module' }));

function ServicePage() {
  const {
    servicio
  } = useParams();
  const service = getServiceBySlug(servicio || "");
  if (!service) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center px-4 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black italic mb-4", children: "Servicio no encontrado" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/55 mb-8", children: "Revisa nuestros servicios principales o escribenos por WhatsApp para orientar la falla." }),
      /* @__PURE__ */ jsx("a", { href: "/servicios", className: "inline-flex items-center justify-center bg-[#39FF14] text-black px-8 py-4 rounded-full font-black uppercase tracking-wider", children: "Ver servicios" })
    ] }) });
  }
  return /* @__PURE__ */ jsx(ServiceLandingPage, { service });
}

const page$1 = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams$1();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ServicePage, {
      ...props,
      servicio: params.servicio
    })
  });
});

const route14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$1
}, Symbol.toStringTag, { value: 'Module' }));

function zoneSchema(zoneName) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Servicio automotriz en ${zoneName}`,
    areaServed: zoneName,
    provider: {
      "@type": "AutoRepair",
      name: "EDU MOTORS",
      telephone: "+51960812600",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villa El Salvador",
        addressRegion: "Lima",
        addressCountry: "PE"
      }
    }
  };
}
function ZonePage() {
  const {
    zona
  } = useParams();
  const zone = getZoneBySlug(zona || "");
  const whatsappUrl = buildWhatsAppUrl(zone.whatsappText);
  const recommendedServices = (zone.recommendedSlugs || []).map((slug) => getServiceBySlug(slug)).filter(Boolean);
  const localIntentPages = getLocalIntentsByZone(zone.slug).slice(0, 4);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0A0F1E] font-sans selection:bg-[#39FF14] selection:text-black", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: JSON.stringify(zoneSchema(zone.name)).replace(/</g, "\\u003c")
      } }),
      /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-b from-[#0055FF]/10 to-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: [
          "Taller automotriz en ",
          zone.name
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black text-white italic mt-4 mb-6", children: zone.heroTitle }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg max-w-3xl mx-auto mb-10 leading-relaxed", children: zone.heroDescription }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "bg-[#39FF14] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(57,255,20,0.3)]", children: "Diagnostico por WhatsApp" }),
          /* @__PURE__ */ jsx("a", { href: "/servicios", className: "border border-white/10 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:border-[#0055FF]/40 hover:bg-white/5 transition-all", children: "Ver servicios" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#0A0F1E]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4 max-w-6xl mx-auto", children: zone.localSignals.map((signal) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/5 bg-white/[0.03] p-6 text-white/65 text-sm leading-relaxed", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 14 }),
          "Micro contenido local"
        ] }),
        signal
      ] }, signal)) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#070B16]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: [
            "Problemas reales en ",
            zone.name
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2", children: "Lo que mas se busca cuando el auto falla en esta zona" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5 max-w-6xl mx-auto", children: zone.commonProblems.map((problem, index) => /* @__PURE__ */ jsxs(motion.article, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: index * 0.06
        }, className: "rounded-3xl border border-white/5 bg-[#0A0F1E] p-7", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-bold italic mb-3", children: problem.title }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 text-sm leading-relaxed", children: problem.description })
        ] }, problem.title)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 bg-[#39FF14] text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#32e012] transition-all", children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 18 }),
          "Estoy en ",
          zone.name,
          " y necesito ayuda"
        ] }) })
      ] }) }),
      localIntentPages.length ? /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#0A0F1E] border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-10", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#39FF14] font-bold uppercase tracking-widest text-xs", children: "Dominio local" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black text-white italic mt-2 mb-4", children: [
            "Busquedas hiperlocales que ya valen en ",
            zone.name
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 leading-relaxed", children: "Estas paginas cruzan sintoma + zona para captar al cliente que ya quiere una solucion cercana y rapida." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-5 max-w-5xl mx-auto", children: localIntentPages.map((page) => /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-white/5 bg-[#070B16] p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-3", children: page.intentLabel }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-white italic mb-4", children: /* @__PURE__ */ jsx("a", { href: `/local/${page.slug}`, className: "hover:text-[#39FF14] transition-colors", children: page.heroTitle }) }),
          /* @__PURE__ */ jsx("p", { className: "text-white/55 leading-relaxed mb-6", children: page.summary }),
          /* @__PURE__ */ jsx("a", { href: `/local/${page.slug}`, className: "inline-flex items-center justify-center bg-[#39FF14] text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide", children: "Ver caso local" })
        ] }, page.slug)) })
      ] }) }) : null,
      /* @__PURE__ */ jsx(ServiceCardsSection, { eyebrow: `Servicios para ${zone.name}`, title: `Soluciones que mas encajan con ${zone.name}`, description: "Cada zona tiene patrones de uso y urgencia distintos. Aqui priorizamos los servicios que mejor capturan esa demanda.", items: recommendedServices, ctaLabel: "Ver solucion", compact: true }),
      /* @__PURE__ */ jsx(FAQ, { customQuestions: zone.faq, title: `FAQ de ${zone.name}`, description: "Preguntas frecuentes pensadas para captar dudas locales y convertirlas en consulta directa.", ctaText: `Resolver mi duda en ${zone.name}`, ctaMessage: zone.whatsappText }),
      /* @__PURE__ */ jsx(QuickForm, { eyebrow: `Diagnostico en ${zone.name}`, title: `Cuentanos que pasa con tu auto en ${zone.name}`, subtitle: "Describe el sintoma principal y te orientamos por WhatsApp para acelerar la decision.", quickOptions: zone.quickOptions, ctaText: `Quiero ayuda en ${zone.name}`, contextLabel: `Zona ${zone.name}` }),
      /* @__PURE__ */ jsx(FooterCTA, { title: `Si tu auto falla en ${zone.name}, no lo sigas pateando`, description: "Escribenos con el sintoma y la zona. La idea es ayudarte a decidir rapido si necesitas diagnostico, combustible, motor o mantenimiento.", buttonText: `Hablar por WhatsApp en ${zone.name}`, whatsappText: zone.whatsappText })
    ] }),
    /* @__PURE__ */ jsx(WhatsAppButton, { whatsappText: zone.whatsappText })
  ] });
}

const page = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams$1();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ZonePage, {
      ...props,
      zona: params.zona
    })
  });
});

const route15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page
}, Symbol.toStringTag, { value: 'Module' }));

async function loader({
  params
}) {
  const matches = await fg("src/**/page.{js,jsx,ts,tsx}");
  return {
    path: `/${params["*"]}`,
    pages: matches.sort((a, b) => a.length - b.length).map(match => {
      const url = match.replace("src/app", "").replace(/\/page\.(js|jsx|ts|tsx)$/, "") || "/";
      const path = url.replaceAll("[", "").replaceAll("]", "");
      const displayPath = path === "/" ? "Homepage" : path;
      return {
        url,
        path: displayPath
      };
    })
  };
}
const notFound = UNSAFE_withComponentProps(function CreateDefaultNotFoundPage({
  loaderData
}) {
  const [siteMap, setSitemap] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined" && window.parent && window.parent !== window) {
      const handler = event => {
        if (event.data.type === "sandbox:sitemap") {
          window.removeEventListener("message", handler);
          setSitemap(event.data.sitemap);
        }
      };
      window.parent.postMessage({
        type: "sandbox:sitemap"
      }, "*");
      window.addEventListener("message", handler);
      return () => {
        window.removeEventListener("message", handler);
      };
    }
  }, []);
  const missingPath = loaderData.path.replace(/^\//, "");
  const existingRoutes = loaderData.pages.map(page => ({
    path: page.path,
    url: page.url
  }));
  const handleBack = () => {
    navigate("/");
  };
  const handleSearch = value => {
    if (!siteMap) {
      const path = `/${value}`;
      navigate(path);
    } else {
      navigate(value);
    }
  };
  const handleCreatePage = useCallback(() => {
    window.parent.postMessage({
      type: "sandbox:web:create",
      path: missingPath,
      view: "web"
    }, "*");
  }, [missingPath]);
  return /* @__PURE__ */jsxs("div", {
    className: "flex sm:w-full w-screen sm:min-w-[850px] flex-col",
    children: [/* @__PURE__ */jsxs("div", {
      className: "flex w-full items-center gap-2 p-5",
      children: [/* @__PURE__ */jsx("button", {
        type: "button",
        onClick: handleBack,
        className: "flex items-center justify-center w-10 h-10 rounded-md",
        children: /* @__PURE__ */jsxs("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "Back",
          role: "img",
          children: [/* @__PURE__ */jsx("path", {
            d: "M8.5957 2.65435L2.25005 9L8.5957 15.3457",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), /* @__PURE__ */jsx("path", {
            d: "M2.25007 9L15.75 9",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        })
      }), /* @__PURE__ */jsxs("div", {
        className: "flex flex-row divide-x divide-gray-200 rounded-[8px] h-8 w-[300px] border border-gray-200 bg-gray-50 text-gray-500",
        children: [/* @__PURE__ */jsx("div", {
          className: "flex items-center px-[14px] py-[5px]",
          children: /* @__PURE__ */jsx("span", {
            children: "/"
          })
        }), /* @__PURE__ */jsx("div", {
          className: "flex items-center min-w-0",
          children: /* @__PURE__ */jsx("p", {
            className: "border-0 bg-transparent px-3 py-2 focus:outline-none truncate max-w-[300px]",
            style: {
              minWidth: 0
            },
            title: missingPath,
            children: missingPath
          })
        })]
      })]
    }), /* @__PURE__ */jsxs("div", {
      className: "flex flex-grow flex-col items-center justify-center pt-[100px] text-center gap-[20px]",
      children: [/* @__PURE__ */jsx("h1", {
        className: "text-4xl font-medium text-gray-900 px-2",
        children: "Uh-oh! This page doesn't exist (yet)."
      }), /* @__PURE__ */jsxs("p", {
        className: "pt-4 pb-12 px-2 text-gray-500",
        children: ['Looks like "', /* @__PURE__ */jsxs("span", {
          className: "font-bold",
          children: ["/", missingPath]
        }), `" isn't part of your project. But no worries, you've got options!`]
      }), /* @__PURE__ */jsx("div", {
        className: "px-[20px] w-full",
        children: /* @__PURE__ */jsxs("div", {
          className: "flex flex-row justify-center items-center w-full max-w-[800px] mx-auto border border-gray-200 rounded-lg p-[20px] mb-[40px] gap-[20px]",
          children: [/* @__PURE__ */jsxs("div", {
            className: "flex flex-col gap-[5px] items-start self-start w-1/2",
            children: [/* @__PURE__ */jsx("p", {
              className: "text-sm text-black text-left",
              children: "Build it from scratch"
            }), /* @__PURE__ */jsxs("p", {
              className: "text-sm text-gray-500 text-left",
              children: ['Create a new page to live at "', /* @__PURE__ */jsxs("span", {
                children: ["/", missingPath]
              }), '"']
            })]
          }), /* @__PURE__ */jsx("div", {
            className: "flex flex-row items-center justify-end w-1/2",
            children: /* @__PURE__ */jsx("button", {
              type: "button",
              className: "bg-black text-white px-[10px] py-[5px] rounded-md",
              onClick: () => handleCreatePage(),
              children: "Create Page"
            })
          })]
        })
      }), /* @__PURE__ */jsx("div", {
        className: "pb-20 lg:pb-[80px]",
        children: /* @__PURE__ */jsx("p", {
          className: "flex items-center text-gray-500",
          children: "Check out all your project's routes here ↓"
        })
      }), siteMap ? /* @__PURE__ */jsx("div", {
        className: "flex flex-col justify-center items-center w-full px-[50px]",
        children: /* @__PURE__ */jsxs("div", {
          className: "flex flex-col justify-between items-center w-full max-w-[600px] gap-[10px]",
          children: [/* @__PURE__ */jsx("p", {
            className: "text-sm text-gray-300 pb-[10px] self-start p-4",
            children: "PAGES"
          }), siteMap.webPages?.map(route => /* @__PURE__ */jsxs("button", {
            type: "button",
            onClick: () => handleSearch(route.cleanRoute || ""),
            className: "flex flex-row justify-between text-center items-center p-4 rounded-lg bg-white shadow-sm w-full hover:bg-gray-50",
            children: [/* @__PURE__ */jsx("h3", {
              className: "font-medium text-gray-900",
              children: route.name
            }), /* @__PURE__ */jsx("p", {
              className: "text-sm text-gray-400",
              children: route.cleanRoute
            })]
          }, route.id))]
        })
      }) : /* @__PURE__ */jsx("div", {
        className: "flex flex-wrap gap-3 w-full max-w-[80rem] mx-auto pb-5 px-2",
        children: existingRoutes.map(route => /* @__PURE__ */jsx("div", {
          className: "flex flex-col flex-grow basis-full sm:basis-[calc(50%-0.375rem)] xl:basis-[calc(33.333%-0.5rem)]",
          children: /* @__PURE__ */jsxs("div", {
            className: "w-full flex-1 flex flex-col items-center ",
            children: [/* @__PURE__ */jsx("div", {
              className: "relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64 overflow-hidden rounded-[8px] border border-comeback-gray-75 transition-all group-hover:shadow-md",
              children: /* @__PURE__ */jsx("button", {
                type: "button",
                onClick: () => handleSearch(route.url.replace(/^\//, "")),
                className: "h-full w-full rounded-[8px] bg-gray-50 bg-cover"
              })
            }), /* @__PURE__ */jsx("p", {
              className: "pt-3 text-left text-gray-500 w-full max-w-[350px]",
              children: route.path
            })]
          })
        }, route.path))
      })]
    })]
  });
});

const route16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: notFound,
  loader
}, Symbol.toStringTag, { value: 'Module' }));

const serverManifest = {'entry':{'module':'/assets/entry.client-ChnoaYKm.js','imports':['/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/index-CpuTRb_f.js'],'css':[]},'routes':{'root':{'id':'root','parentId':undefined,'path':'','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/root-BXAU8GGj.js','imports':['/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/index-CpuTRb_f.js','/assets/index-BBR7LY95.js','/assets/analytics-D6jhdIQY.js'],'css':['/assets/root-CbQYzfRU.css'],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'page':{'id':'page','parentId':'root','path':undefined,'index':true,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-grTNY09_.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/analytics-D6jhdIQY.js','/assets/triangle-alert-DAGx11Vh.js','/assets/FAQ-C600VbT1.js','/assets/QuickForm-D9YZfR4b.js','/assets/LocalSEO-BYstxd2n.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'blog/page':{'id':'blog/page','parentId':'root','path':'blog','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-DhuTi3pG.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/analytics-D6jhdIQY.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'blog/[slug]/page':{'id':'blog/[slug]/page','parentId':'root','path':'blog/:slug','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-DMpuRekR.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/FAQ-C600VbT1.js','/assets/analytics-D6jhdIQY.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'bomba-gasolina-lima/page':{'id':'bomba-gasolina-lima/page','parentId':'root','path':'bomba-gasolina-lima','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-D-ycjRPn.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/ServiceLandingPage-C4lwgi7d.js','/assets/analytics-D6jhdIQY.js','/assets/QuickForm-D9YZfR4b.js','/assets/FAQ-C600VbT1.js','/assets/LocalSEO-BYstxd2n.js','/assets/triangle-alert-DAGx11Vh.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'comparativas/page':{'id':'comparativas/page','parentId':'root','path':'comparativas','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-Dt-REekn.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/IntentHubPage-DDl-qO-U.js','/assets/seoExpansionContent-DfS_JAU9.js','/assets/analytics-D6jhdIQY.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'comparativas/[slug]/page':{'id':'comparativas/[slug]/page','parentId':'root','path':'comparativas/:slug','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-Dlx6WzTm.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/IntentLandingPage-9GNd56P3.js','/assets/seoExpansionContent-DfS_JAU9.js','/assets/analytics-D6jhdIQY.js','/assets/LocalSEO-BYstxd2n.js','/assets/FAQ-C600VbT1.js','/assets/QuickForm-D9YZfR4b.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'local/page':{'id':'local/page','parentId':'root','path':'local','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-CqavtQop.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/IntentHubPage-DDl-qO-U.js','/assets/localIntentContent-BoQObPfe.js','/assets/analytics-D6jhdIQY.js','/assets/seoExpansionContent-DfS_JAU9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'local/[slug]/page':{'id':'local/[slug]/page','parentId':'root','path':'local/:slug','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-DHgh4R8R.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/IntentLandingPage-9GNd56P3.js','/assets/localIntentContent-BoQObPfe.js','/assets/analytics-D6jhdIQY.js','/assets/LocalSEO-BYstxd2n.js','/assets/FAQ-C600VbT1.js','/assets/QuickForm-D9YZfR4b.js','/assets/seoExpansionContent-DfS_JAU9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'precios/page':{'id':'precios/page','parentId':'root','path':'precios','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-BU2SjuVy.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/IntentHubPage-DDl-qO-U.js','/assets/seoExpansionContent-DfS_JAU9.js','/assets/analytics-D6jhdIQY.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'precios/[slug]/page':{'id':'precios/[slug]/page','parentId':'root','path':'precios/:slug','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-DJpnDwjv.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/IntentLandingPage-9GNd56P3.js','/assets/seoExpansionContent-DfS_JAU9.js','/assets/analytics-D6jhdIQY.js','/assets/LocalSEO-BYstxd2n.js','/assets/FAQ-C600VbT1.js','/assets/QuickForm-D9YZfR4b.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'problemas/page':{'id':'problemas/page','parentId':'root','path':'problemas','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-nRWAE6hz.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/IntentHubPage-DDl-qO-U.js','/assets/seoExpansionContent-DfS_JAU9.js','/assets/analytics-D6jhdIQY.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'problemas/[problema]/page':{'id':'problemas/[problema]/page','parentId':'root','path':'problemas/:problema','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-CAZfmI8o.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/IntentLandingPage-9GNd56P3.js','/assets/localIntentContent-BoQObPfe.js','/assets/seoExpansionContent-DfS_JAU9.js','/assets/analytics-D6jhdIQY.js','/assets/LocalSEO-BYstxd2n.js','/assets/FAQ-C600VbT1.js','/assets/QuickForm-D9YZfR4b.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'servicios/page':{'id':'servicios/page','parentId':'root','path':'servicios','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-C7zBszzA.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/FAQ-C600VbT1.js','/assets/analytics-D6jhdIQY.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'servicios/[servicio]/page':{'id':'servicios/[servicio]/page','parentId':'root','path':'servicios/:servicio','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-B3GT3wdm.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/ServiceLandingPage-C4lwgi7d.js','/assets/analytics-D6jhdIQY.js','/assets/QuickForm-D9YZfR4b.js','/assets/FAQ-C600VbT1.js','/assets/LocalSEO-BYstxd2n.js','/assets/triangle-alert-DAGx11Vh.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'zonas/[zona]/page':{'id':'zonas/[zona]/page','parentId':'root','path':'zonas/:zona','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-DbcjXK15.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js','/assets/WhatsAppButton-Chpf98Kf.js','/assets/FAQ-C600VbT1.js','/assets/QuickForm-D9YZfR4b.js','/assets/localIntentContent-BoQObPfe.js','/assets/analytics-D6jhdIQY.js','/assets/seoExpansionContent-DfS_JAU9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'__create/not-found':{'id':'__create/not-found','parentId':'root','path':'*?','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/not-found-CTm4blAr.js','imports':['/assets/index-BBR7LY95.js','/assets/chunk-LFPYN7LY-CrJJCYDh.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined}},'url':'/assets/manifest-4861d1fb.js','version':'4861d1fb','sri':undefined};

const assetsBuildDirectory = "build\\client";
      const basename = "/";
      const future = {"unstable_optimizeDeps":false,"unstable_subResourceIntegrity":false,"unstable_trailingSlashAwareDataRequests":false,"unstable_previewServerPrerendering":false,"v8_middleware":false,"v8_splitRouteModules":false,"v8_viteEnvironmentApi":false};
      const ssr = true;
      const isSpaMode = false;
      const prerender = ["/*?"];
      const routeDiscovery = {"mode":"lazy","manifestPath":"/__manifest"};
      const publicPath = "/";
      const entry = { module: entryServer };
      const routes = {
        "root": {
          id: "root",
          parentId: undefined,
          path: "",
          index: undefined,
          caseSensitive: undefined,
          module: route0
        },
  "page": {
          id: "page",
          parentId: "root",
          path: undefined,
          index: true,
          caseSensitive: undefined,
          module: route1
        },
  "blog/page": {
          id: "blog/page",
          parentId: "root",
          path: "blog",
          index: undefined,
          caseSensitive: undefined,
          module: route2
        },
  "blog/[slug]/page": {
          id: "blog/[slug]/page",
          parentId: "root",
          path: "blog/:slug",
          index: undefined,
          caseSensitive: undefined,
          module: route3
        },
  "bomba-gasolina-lima/page": {
          id: "bomba-gasolina-lima/page",
          parentId: "root",
          path: "bomba-gasolina-lima",
          index: undefined,
          caseSensitive: undefined,
          module: route4
        },
  "comparativas/page": {
          id: "comparativas/page",
          parentId: "root",
          path: "comparativas",
          index: undefined,
          caseSensitive: undefined,
          module: route5
        },
  "comparativas/[slug]/page": {
          id: "comparativas/[slug]/page",
          parentId: "root",
          path: "comparativas/:slug",
          index: undefined,
          caseSensitive: undefined,
          module: route6
        },
  "local/page": {
          id: "local/page",
          parentId: "root",
          path: "local",
          index: undefined,
          caseSensitive: undefined,
          module: route7
        },
  "local/[slug]/page": {
          id: "local/[slug]/page",
          parentId: "root",
          path: "local/:slug",
          index: undefined,
          caseSensitive: undefined,
          module: route8
        },
  "precios/page": {
          id: "precios/page",
          parentId: "root",
          path: "precios",
          index: undefined,
          caseSensitive: undefined,
          module: route9
        },
  "precios/[slug]/page": {
          id: "precios/[slug]/page",
          parentId: "root",
          path: "precios/:slug",
          index: undefined,
          caseSensitive: undefined,
          module: route10
        },
  "problemas/page": {
          id: "problemas/page",
          parentId: "root",
          path: "problemas",
          index: undefined,
          caseSensitive: undefined,
          module: route11
        },
  "problemas/[problema]/page": {
          id: "problemas/[problema]/page",
          parentId: "root",
          path: "problemas/:problema",
          index: undefined,
          caseSensitive: undefined,
          module: route12
        },
  "servicios/page": {
          id: "servicios/page",
          parentId: "root",
          path: "servicios",
          index: undefined,
          caseSensitive: undefined,
          module: route13
        },
  "servicios/[servicio]/page": {
          id: "servicios/[servicio]/page",
          parentId: "root",
          path: "servicios/:servicio",
          index: undefined,
          caseSensitive: undefined,
          module: route14
        },
  "zonas/[zona]/page": {
          id: "zonas/[zona]/page",
          parentId: "root",
          path: "zonas/:zona",
          index: undefined,
          caseSensitive: undefined,
          module: route15
        },
  "__create/not-found": {
          id: "__create/not-found",
          parentId: "root",
          path: "*?",
          index: undefined,
          caseSensitive: undefined,
          module: route16
        }
      };
      
      const allowedActionOrigins = false;

export { allowedActionOrigins, serverManifest as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
