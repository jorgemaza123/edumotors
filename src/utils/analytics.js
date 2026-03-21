/**
 * Analytics Utility for EDU MOTORS
 * Handles GA4 and Meta Pixel tracking with consistent event naming.
 */

export const GA_ID = import.meta.env.NEXT_PUBLIC_GA_ID || "";
export const PIXEL_ID = import.meta.env.NEXT_PUBLIC_PIXEL_ID || "";

// Initialize GA4
export const initGA = () => {
  if (typeof window === "undefined" || !GA_ID) return;
  
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
};

// Initialize Meta Pixel
export const initPixel = () => {
  if (typeof window === "undefined" || !PIXEL_ID) return;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
};

/**
 * Custom track event
 * @param {string} eventName 
 * @param {object} params 
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined") return;

  // Track in GA4
  if (window.gtag && GA_ID) {
    window.gtag("event", eventName, params);
  }

  // Track in Meta Pixel (Standard or Custom events)
  if (window.fbq && PIXEL_ID) {
    const pixelEvents = {
      'submit_formulario': 'Lead',
      'click_whatsapp': 'Contact',
    };
    
    const pixelEvent = pixelEvents[eventName] || eventName;
    window.fbq("trackCustom", pixelEvent, params);
  }
};

// Scroll tracking helper
export const initScrollTracking = () => {
  if (typeof window === "undefined") return;

  let markers = { 50: false, 90: false };
  
  const handleScroll = () => {
    const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
    
    if (scrollPercent >= 90 && !markers[90]) {
      trackEvent("scroll_90");
      markers[90] = true;
    } else if (scrollPercent >= 50 && !markers[50]) {
      trackEvent("scroll_50");
      markers[50] = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
};
