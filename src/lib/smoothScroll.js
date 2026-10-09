"use client";

// Slow, eased in-page scrolling that lands each section in its best viewing position
// and keeps the URL free of "#hash" fragments.

let activeFrame = null;
let detachInterrupts = null;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Bottom edge of the floating header capsule (plus breathing room)
function headerOffset() {
  const capsule = document.querySelector("header .rounded-full");
  const bottom = capsule ? capsule.getBoundingClientRect().bottom : 72;
  return Math.round(bottom + (window.innerWidth < 768 ? 8 : 12));
}

// Where a section looks best: centred in the space under the header when it fits,
// otherwise its top tucked just under the header.
export function sectionTargetY(el) {
  if (el.id === "hero") return 0;
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const offset = headerOffset();
  const available = window.innerHeight - offset;
  const slack = available - rect.height;
  return slack > 0 ? top - offset - slack / 2 : top - offset;
}

export function cleanUrlHash() {
  if (window.location.hash) {
    window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
  }
}

export function smoothScrollTo(target) {
  if (typeof window === "undefined") return;

  const el = typeof target === "string" ? document.getElementById(target.replace(/^#/, "")) : target;
  if (!el) return;

  if (activeFrame) cancelAnimationFrame(activeFrame);
  detachInterrupts?.();

  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const targetY = Math.max(0, Math.min(sectionTargetY(el), maxY));
  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    window.scrollTo({ top: targetY, behavior: "instant" });
    cleanUrlHash();
    return;
  }

  // Unhurried glide: ~0.9s for short hops, up to ~1.6s across the whole page
  const duration = Math.min(1600, Math.max(900, Math.abs(distance) * 0.35));
  let startTime = null;

  // Any manual scroll input hands control back to the visitor
  const interrupt = () => {
    if (activeFrame) cancelAnimationFrame(activeFrame);
    activeFrame = null;
    detachInterrupts?.();
  };
  const events = ["wheel", "touchstart", "keydown", "mousedown"];
  events.forEach((e) => window.addEventListener(e, interrupt, { passive: true }));
  detachInterrupts = () => {
    events.forEach((e) => window.removeEventListener(e, interrupt));
    detachInterrupts = null;
  };

  const step = (now) => {
    if (startTime === null) startTime = now;
    const progress = Math.min((now - startTime) / duration, 1);
    // "instant" so the page-wide CSS scroll-behavior: smooth doesn't fight each frame
    window.scrollTo({ top: startY + distance * easeInOutCubic(progress), behavior: "instant" });
    if (progress < 1) {
      activeFrame = requestAnimationFrame(step);
    } else {
      activeFrame = null;
      detachInterrupts?.();
    }
  };

  cleanUrlHash();
  activeFrame = requestAnimationFrame(step);
}
