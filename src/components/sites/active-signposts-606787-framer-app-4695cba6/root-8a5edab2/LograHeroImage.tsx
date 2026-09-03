"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";

const IMG_BASE = "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images";

/**
 * Hero MacBook composition, scroll-driven scale 0.871 → 1.
 * Note: J1Ssik…png (1902x1151) is the MacBook frame composition and
 * gZZ…png (2880x1800) is the raw dashboard screenshot — the crisp
 * dashboard is layered inside the laptop's screen bezel.
 */
export function LograHeroImage() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (vh + rect.height * 0.5)),
      );
      const scale = 0.871 + 0.129 * progress;
      el.style.transform = `scale(${scale})`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      style={{ padding: "0 20px", display: "flex", justifyContent: "center" }}
    >
      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          borderRadius: 24,
          overflow: "hidden",
          padding: "44px 44px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          ref={wrapRef}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1150,
            transform: "scale(0.871)",
            transformOrigin: "center top",
            willChange: "transform",
          }}
        >
          {/* MacBook frame (full mockup) */}
          <img
            src={`${IMG_BASE}/J1SsikyFjYWsHj7AeGtIFoSVOQ.png`}
            alt="Tablero de Logra en una laptop"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
          {/* Crisp dashboard layered inside the screen bezel */}
          <img
            src={`${IMG_BASE}/gZZrnRwUhv6t0xwFUMssg7vQME.png`}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "12.2%",
              top: "5.4%",
              width: "75.5%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
