"use client";

import { useEffect, useRef } from "react";
import { LograAppear } from "../root-8a5edab2/LograAppear";

const IMG_BASE =
  "/sites/active-signposts-606787-framer-app-4695cba6/sobre-nosotros-780d001d/images";

/* Final scattered positions in a 1440x900 sticky canvas (from desktop
   screenshots). left/top are the photo's top-left corner in px at 1440w. */
type Photo = {
  src: string;
  alt: string;
  left: number;
  top: number;
  w: number;
  h: number;
};

const photos: Photo[] = [
  {
    src: `${IMG_BASE}/nKfIGUevnBJvLZfcThnUtptg8b4.png`,
    alt: "Desayuno de equipo",
    left: 35,
    top: 65,
    w: 195,
    h: 190,
  },
  {
    src: `${IMG_BASE}/yGqFM9Hs0BetoUgqTWFQS11l7Y.png`,
    alt: "Sesión de trabajo del equipo en el jardín",
    left: 216,
    top: 20,
    w: 230,
    h: 210,
  },
  {
    src: `${IMG_BASE}/xSa2CQejoe6966dIOpo1tigb4Q.png`,
    alt: "Equipo en evento MiPyme + Crecimiento",
    left: 868,
    top: 20,
    w: 210,
    h: 155,
  },
  {
    src: `${IMG_BASE}/DGiGG3AKI2WrXFZ5lHrczuSRdhw.png`,
    alt: "Equipo de excursión en la montaña",
    left: 1143,
    top: 30,
    w: 220,
    h: 235,
  },
  {
    src: `${IMG_BASE}/MeQYbXhYoAYEa9GBC40G93AzTzQ.png`,
    alt: "Selfie del equipo en la oficina",
    left: 38,
    top: 511,
    w: 265,
    h: 275,
  },
  {
    src: `${IMG_BASE}/qH9TQTc79xE7MnkMcjanVtDatI.png`,
    alt: "Equipo Logra en un evento",
    left: 313,
    top: 650,
    w: 195,
    h: 240,
  },
  {
    src: `${IMG_BASE}/uHeEBQOYVlDqULq673UhPj5fQ.png`,
    alt: "Equipo en conferencia",
    left: 1021,
    top: 510,
    w: 230,
    h: 225,
  },
  {
    src: `${IMG_BASE}/D2QVn6JHRsWPEuNMAIzEf2f7TH4.png`,
    alt: "Equipo celebrando en temporada navideña",
    left: 1094,
    top: 700,
    w: 200,
    h: 190,
  },
];

const CANVAS_W = 1440;
const CANVAS_H = 900;
/* Initial stacked state: centered pile, roughly the size of the intro photo */
const STACK_W = 480;
const STACK_H = 460;
const stackOffsets = [
  { x: -14, y: 10, r: -3 },
  { x: 0, y: 0, r: 0 },
  { x: 16, y: -8, r: 2.5 },
  { x: 22, y: 12, r: 4 },
  { x: -20, y: -12, r: -2 },
  { x: 8, y: 18, r: 1.5 },
  { x: -8, y: -18, r: -4 },
  { x: 14, y: 6, r: 3 },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function SobreEquipo() {
  const outerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const canvas = canvasRef.current;
    if (!outer || !canvas) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      /* On mobile the static layout is shown instead */
      if (window.innerWidth < 900) return;

      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - Math.min(vh, CANVAS_H);
      const raw = total > 0 ? -rect.top / total : 1;
      const p = easeOut(Math.min(1, Math.max(0, raw)));

      photos.forEach((ph, i) => {
        const el = photoRefs.current[i];
        if (!el) return;
        const off = stackOffsets[i];
        const startL = (CANVAS_W - STACK_W) / 2 + off.x;
        const startT = (CANVAS_H - STACK_H) / 2 + off.y;
        const l = startL + (ph.left - startL) * p;
        const t = startT + (ph.top - startT) * p;
        const w = STACK_W + (ph.w - STACK_W) * p;
        const h = STACK_H + (ph.h - STACK_H) * p;
        const r = off.r * (1 - p);
        el.style.transform = `translate(${l}px, ${t}px) rotate(${r}deg)`;
        el.style.width = `${w}px`;
        el.style.height = `${h}px`;
        /* While stacked, keep the garden photo (index 1) on top, like the
           original intro pile; once scattered, flatten the stacking. */
        el.style.zIndex = String(
          p > 0.5 ? 1 : i === 1 ? 20 : photos.length - i,
        );
      });

      if (textRef.current) {
        const o = Math.min(1, Math.max(0, (p - 0.45) / 0.4));
        textRef.current.style.opacity = String(o);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const heading = (
    <h2
      style={{
        fontFamily: "var(--font-logra-heading)",
        fontSize: 48,
        fontWeight: 500,
        lineHeight: "52.8px",
        letterSpacing: "-2.4px",
        color: "#001f47",
        textAlign: "center",
        margin: 0,
      }}
      className="sobre-equipo-h2"
    >
      Impactar 1 millón de PyMEs significa transformar la vida de millones de
      familias.
    </h2>
  );

  const paragraph = (
    <p
      style={{
        fontFamily: "var(--font-logra-body)",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: "30px",
        color: "#9ca3af",
        textAlign: "center",
        margin: 0,
        maxWidth: 480,
      }}
    >
      Somos un equipo determinado y resiliente con esta pasión en común: ver a
      las PyMEs triunfar.
    </p>
  );

  return (
    <section style={{ position: "relative" }}>
      <style>{`
        .sobre-equipo-desktop { display: block; }
        .sobre-equipo-mobile { display: none; }
        @media (max-width: 899px) {
          .sobre-equipo-desktop { display: none; }
          .sobre-equipo-mobile { display: block; }
          .sobre-equipo-h2 { font-size: 34px !important; line-height: 40px !important; letter-spacing: -1.6px !important; }
        }
      `}</style>

      {/* ===== Desktop: sticky scroll-scatter animation ===== */}
      <div
        className="sobre-equipo-desktop"
        ref={outerRef}
        style={{ height: 1900, position: "relative" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: CANVAS_H,
            maxHeight: "100vh",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            ref={canvasRef}
            style={{
              position: "relative",
              width: CANVAS_W,
              maxWidth: "100%",
              height: CANVAS_H,
              flexShrink: 0,
            }}
          >
            {photos.map((ph, i) => (
              <div
                key={ph.src}
                ref={(el) => {
                  photoRefs.current[i] = el;
                }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: ph.w,
                  height: ph.h,
                  transform: `translate(${ph.left}px, ${ph.top}px)`,
                  borderRadius: 16,
                  overflow: "hidden",
                  willChange: "transform, width, height",
                }}
              >
                <img
                  src={ph.src}
                  alt={ph.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}

            <div
              ref={textRef}
              style={{
                position: "absolute",
                left: "50%",
                top: 232,
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 44,
                opacity: 0,
                zIndex: 5,
              }}
            >
              {heading}
              {paragraph}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile: static — text first, then collage ===== */}
      <div className="sobre-equipo-mobile" style={{ padding: "80px 0 40px" }}>
        <div
          style={{
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
          }}
        >
          <LograAppear>{heading}</LograAppear>
          <LograAppear delay={0.1}>{paragraph}</LograAppear>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: 16,
            margin: "64px -24px 0",
            padding: "0 0 0 0",
            overflow: "hidden",
          }}
        >
          {photos.map((ph, i) => (
            <img
              key={ph.src}
              src={ph.src}
              alt={ph.alt}
              style={{
                width: "100%",
                height: i % 3 === 1 ? 300 : 230,
                objectFit: "cover",
                borderRadius: 20,
                display: "block",
                marginTop: i % 2 === 1 ? 40 : 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
