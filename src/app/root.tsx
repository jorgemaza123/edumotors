/// <reference types="vite/client" />
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useAsyncError,
  useLocation,
  useRouteError,
} from 'react-router';

import { useButton } from '@react-aria/button';
import {
  type CSSProperties,
  Component,
  type FC,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './global.css';

// @ts-ignore
import { LoadFonts } from 'virtual:load-fonts.jsx';
import fetch from '@/__create/fetch';
// @ts-ignore
import { SessionProvider } from '@auth/create/react';
import { toPng } from 'html-to-image';
import { useNavigate } from 'react-router';
import { serializeError } from 'serialize-error';
import { Toaster, toast } from 'sonner';
import { useDevServerHeartbeat } from '../__create/useDevServerHeartbeat';
import type { Route } from './+types/root';

export function meta({ location }: Route.MetaArgs) {
  const currentUrl = `https://edumotors.pe${location.pathname}`;
  return [
    { title: "EDU MOTORS | Taller Automotriz en Lima Sur - GNV y Reparación de Motores" },
    { name: "description", content: "Mecánico especializado en Lima Sur (Villa El Salvador, Lurín, VMT). Reparación de motores, bombas de gasolina y conversión a GNV. Diagnóstico GRATIS hoy." },
    { name: "keywords", content: "mecánico en Villa El Salvador, mecánico en Lurín, taller automotriz Lima Sur, reparación de motores en Lima Sur, conversión GNV Lima Sur, bomba de gasolina Lima Sur" },
    { property: "og:title", content: "EDU MOTORS | Taller Automotriz en Lima Sur" },
    { property: "og:description", content: "Atención inmediata en Lima Sur. Especialistas en motores y GNV. Diagnóstico gratis por WhatsApp." },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://edumotors.pe/og-image.jpg" },
    { property: "og:url", content: currentUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "EDU MOTORS | Taller Automotriz en Lima Sur" },
    { name: "twitter:description", content: "Atención inmediata en Lima Sur. Especialistas en motores y GNV. Diagnóstico gratis por WhatsApp." },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { rel: "canonical", href: currentUrl },
  ];
}

export const links = () => [];

if (globalThis.window && globalThis.window !== undefined) {
  globalThis.window.fetch = fetch;
}

const LoadFontsSSR = import.meta.env.SSR ? LoadFonts : null;
if (import.meta.hot) {
  import.meta.hot.on('update-font-links', (urls: string[]) => {
    // remove old font links
    for (const link of document.querySelectorAll('link[data-auto-font]')) {
      link.remove();
    }

    // add new ones
    for (const url of urls) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.dataset.autoFont = 'true';
      document.head.appendChild(link);
    }
  });
}

function InternalErrorBoundary({ error: errorArg }: Route.ErrorBoundaryProps) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);
  const shouldScale = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const scaleFactor = shouldScale ? 1.02 : 1;
  const copyButtonTextClass = shouldScale ? 'text-sm' : 'text-xs';
  const copyButtonPaddingClass = shouldScale ? 'px-[10px] py-[5px]' : 'px-[6px] py-[3px]';
  const postCountRef = useRef(0);
  const lastPostTimeRef = useRef(0);
  const lastErrorKeyRef = useRef<string | null>(null);
  const MAX_ERROR_POSTS_PER_ERROR = 5;
  const THROTTLE_MS = 1000;

  useEffect(() => {
    const serialized = serializeError(error);
    const errorKey = JSON.stringify(serialized);

    // Reset the counter when a genuinely different error arrives
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
      window.parent.postMessage({ type: 'sandbox:error:detected', error: serialized }, '*');
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
  const { buttonProps: copyButtonProps } = useButton(
    {
      onPress: useCallback(() => {
        const toastScale = shouldScale ? 1.2 : 1;
        const toastStyle = {
          padding: `${16 * toastScale}px`,
          background: '#18191B',
          border: '1px solid #2C2D2F',
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: `${280 * toastScale}px`,
          fontSize: `${13 * toastScale}px`,
          display: 'flex',
          alignItems: 'center',
          gap: `${6 * toastScale}px`,
          justifyContent: 'flex-start',
          margin: '0 auto',
        };
        navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
        toast.custom(
          () => (
            <div style={toastStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                height="20"
                width="20"
              >
                <title>Success</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Copied successfully!</span>
            </div>
          ),
          {
            id: 'copy-error-success',
            duration: 3000,
          }
        );
      }, [error, shouldScale]),
    },
    useRef<HTMLButtonElement>(null)
  );

  function isInIframe() {
    try {
      return window.parent !== window;
    } catch {
      return true;
    }
  }
  return (
    <>
      {!isInIframe() && (
        <div
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-md z-50 transition-all duration-500 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          style={{ width: '75vw' }}
        >
          <div
            className="bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 shadow-lg w-full"
            style={
              scaleFactor !== 1
                ? ({
                    transform: `scale(${scaleFactor})`,
                    transformOrigin: 'bottom center',
                  } as CSSProperties)
                : undefined
            }
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center">
                  <span className="text-black text-[1.125rem] leading-none">!</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-col gap-1">
                  <p className="font-light text-[#F2F2F2] text-sm">App Error Detected</p>
                  <p className="text-[#959697] text-sm font-light">
                    It looks like an error occurred while trying to use your app.
                  </p>
                </div>

                <button
                  className={`flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white ${copyButtonTextClass} ${copyButtonPaddingClass} w-fit`}
                  type="button"
                  {...copyButtonProps}
                >
                  Copy error
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = { hasError: boolean; error: unknown | null };

class ErrorBoundaryWrapper extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <InternalErrorBoundary error={this.state.error} params={{}} />;
    }
    return this.props.children;
  }
}

function LoaderWrapper({ loader }: { loader: () => React.ReactNode }) {
  return <>{loader()}</>;
}

type ClientOnlyProps = {
  loader: () => React.ReactNode;
};

export const ClientOnly: React.FC<ClientOnlyProps> = ({ loader }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ErrorBoundaryWrapper>
      <LoaderWrapper loader={loader} />
    </ErrorBoundaryWrapper>
  );
};

/**
 * useHmrConnection()
 * ------------------
 * • `true`  → HMR socket is healthy
 * • `false` → socket lost (Vite is polling / may auto‑reload soon)
 *
 * Works only in dev; in prod it always returns `true`.
 */
export function useHmrConnection(): boolean {
  const [connected, setConnected] = useState(() => !!import.meta.hot);

  useEffect(() => {
    // No HMR object outside dev builds
    if (!import.meta.hot) return;

    /** Fired the moment the WS closes unexpectedly */
    const onDisconnect = () => setConnected(false);
    /** Fired every time the WS (re‑)opens */
    const onConnect = () => setConnected(true);

    import.meta.hot.on('vite:ws:disconnect', onDisconnect);
    import.meta.hot.on('vite:ws:connect', onConnect);

    // Optional: catch the “about to full‑reload” event as a last resort
    const onFullReload = () => setConnected(false);
    import.meta.hot.on('vite:beforeFullReload', onFullReload);

    return () => {
      import.meta.hot?.off('vite:ws:disconnect', onDisconnect);
      import.meta.hot?.off('vite:ws:connect', onConnect);
      import.meta.hot?.off('vite:beforeFullReload', onFullReload);
    };
  }, []);

  return connected;
}

const healthyResponseType = 'sandbox:web:healthcheck:response';
const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected,
      supportsErrorDetected: true,
    };
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'sandbox:web:healthcheck') {
        window.parent.postMessage(healthyResponse, '*');
      }
    };
    window.addEventListener('message', handleMessage);
    // Immediately respond to the parent window with a healthy response in
    // case we missed the healthcheck message
    window.parent.postMessage(healthyResponse, '*');
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isHmrConnected]);
};

const waitForScreenshotReady = async () => {
  const images = Array.from(document.images);

  await Promise.all([
    // make sure custom fonts are loaded
    'fonts' in document ? document.fonts.ready : Promise.resolve(),
    ...images.map(
      (img) =>
        new Promise((resolve) => {
          img.crossOrigin = 'anonymous';
          if (img.complete) {
            resolve(true);
            return;
          }
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
        })
    ),
  ]);

  // small buffer to ensure rendering is stable
  await new Promise((resolve) => setTimeout(resolve, 250));
};

export const useHandleScreenshotRequest = () => {
  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.data.type === 'sandbox:web:screenshot:request') {
        try {
          await waitForScreenshotReady();

          const width = window.innerWidth;
          const aspectRatio = 16 / 9;
          const height = Math.floor(width / aspectRatio);

          // html-to-image already handles CORS, fonts, and CSS inlining
          const dataUrl = await toPng(document.body, {
            cacheBust: true,
            skipFonts: false,
            width,
            height,
            style: {
              // force snapshot sizing
              width: `${width}px`,
              height: `${height}px`,
              margin: '0',
            },
          });

          window.parent.postMessage({ type: 'sandbox:web:screenshot:response', dataUrl }, '*');
        } catch (error) {
          window.parent.postMessage(
            {
              type: 'sandbox:web:screenshot:error',
              error: error instanceof Error ? error.message : String(error),
            },
            '*'
          );
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
};
import { initGA, initPixel, initScrollTracking } from '../utils/analytics';

export function Layout({ children }: { children: ReactNode }) {
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

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'sandbox:navigation') {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener('message', handleMessage);
    window.parent.postMessage({ type: 'sandbox:web:ready' }, '*');
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  useEffect(() => {
    if (pathname) {
      window.parent.postMessage(
        {
          type: 'sandbox:web:navigation',
          pathname,
        },
        '*'
      );
    }
  }, [pathname]);
  return (
    <html lang="es-PE">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* Tracking Scripts SSR */}
        {typeof import.meta.env.NEXT_PUBLIC_GA_ID !== 'undefined' && import.meta.env.NEXT_PUBLIC_GA_ID !== "" && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${import.meta.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {typeof import.meta.env.NEXT_PUBLIC_PIXEL_ID !== 'undefined' && import.meta.env.NEXT_PUBLIC_PIXEL_ID !== "" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${import.meta.env.NEXT_PUBLIC_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "EDU MOTORS",
              "image": "https://edumotors.pe/logo.png",
              "@id": "https://edumotors.pe",
              "url": "https://edumotors.pe",
              "telephone": "+51960812600",
              "areaServed": [
                "Villa El Salvador",
                "San Juan de Miraflores",
                "Villa Maria del Triunfo",
                "Lurin",
                "Pachacamac",
                "Chorrillos"
              ],
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
            }).replace(/</g, '\\u003c')
          }}
        />
        <script type="module" src="/src/__create/dev-error-overlay.js"></script>
        <link rel="icon" href="/src/__create/favicon.png" />
        {LoadFontsSSR ? <LoadFontsSSR /> : null}
      </head>
      <body>
        <ClientOnly loader={() => children} />
        <Toaster position={isMobile ? 'top-center' : 'bottom-right'} />
        <ScrollRestoration />
        <Scripts />
        <script src="https://kit.fontawesome.com/2c15cc0cc7.js" crossOrigin="anonymous" async />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SessionProvider>
      <Outlet />
    </SessionProvider>
  );
}
