"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

const IMG_BASE = "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images";

type Card = {
  bg: string;
  title: string;
  paragraphs: string[];
  img: string;
  alt: string;
};

const CARDS: Card[] = [
  {
    bg: "#d3d8ed",
    title: "Tablero  - Tu día día en orden",
    paragraphs: [
      "Organiza tareas, clientes y pendientes para priorizar mejor tu semana, enfocarte en lo importante y no perder más tiempo en lo innecesario.",
      "Mientras que tu Mentor virtual ejecuta tareas por tí en segundos, mides la eficiencia del equipo y juntos logran más para impulsar el crecimiento del negocio.",
    ],
    img: `${IMG_BASE}/gZZrnRwUhv6t0xwFUMssg7vQME.png`,
    alt: "Tablero — organizador de tareas de Logra",
  },
  {
    bg: "#eef7e1",
    title: "Mentor virtual - Un negocio más eficiente",
    paragraphs: [
      "Pregunta lo que sea y obtén respuestas 100% personalizadas para tu negocio. Tu Mentor ejecuta tareas por ti en segundos.",
      "Desde generar contenido para redes sociales hasta estructurar entrevistas, tu Mentor entiende tu empresa y te ayuda en avanzar más rápido, con menos esfuerzo y mucho más eficiencia.",
    ],
    img: `${IMG_BASE}/aFtKPP8NI7AEg5egpAEJqhXGtZU.png`,
    alt: "Mentor Virtual — chat de inteligencia artificial",
  },
  {
    bg: "#f0ebd8",
    title: "Pilares - Una estrategia clara",
    paragraphs: [
      "Estructura los pilares clave de tu negocio —ventas, marketing, equipo y finanzas —para que todos estén alineados y enfocados en resultados.",
      "Desde tu pitch de ventas hasta el perfil de tu cliente ideal, transforma tu conocimiento en formatos claros y accionables. Cada pilar completado entrena mejor a tu Mentor virtual.",
    ],
    img: `${IMG_BASE}/jZiqhgr331bQP8aOgJRkIGETWE.png`,
    alt: "Pilares — estrategia del negocio en Logra",
  },
  {
    bg: "#ebd8eb",
    title: "Progreso - Decisiones más educadas",
    paragraphs: [
      "Monitorea de tu negocio semana tras semana, visualiza los miembros del equipo más eficientes y en que área enfocan su tiempo.",
      "Estos indicadores te ayudan a tener perspectiva sobre tu empresa y tener datos reales que realmente te permiten tomar mejores decisiones, dejando de navegar a ciegas.",
    ],
    img: `${IMG_BASE}/S3FC1yLHjSfBjcOyOpLMZESdc.png`,
    alt: "Progreso — analítica semanal de Logra",
  },
];

/**
 * Old-home "¿Cómo funciona?" — same sticky-stack pattern as the current
 * home's LograFuncionalidades: sticky left panel whose app screenshot
 * crossfades while the right-hand cards pile up. On mobile each card
 * embeds its own screenshot (as on the live legacy page) and the left
 * crossfade shot is hidden.
 */
export function OldHomeFuncionalidades() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(
      (el): el is HTMLElement => el !== null,
    );
    if (cards.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    cards.forEach((el) => io.observe(el));

    // Scroll fallback: last card whose top has crossed mid-viewport.
    const onScroll = () => {
      let idx = 0;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].getBoundingClientRect().top <= window.innerHeight * 0.5) {
          idx = i;
        }
      }
      setActive((prev) => (prev === idx ? prev : idx));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="ohfx-section">
      <style>{`
        .ohfx-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .ohfx-left {
          position: sticky;
          top: 96px;
          background: #dbe4eb;
          border-radius: 24px;
          padding: 48px;
          height: 632px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          overflow: hidden;
        }
        .ohfx-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          line-height: 52.8px;
          letter-spacing: -2.4px;
          color: var(--logra-navy, #001f47);
          margin: 0;
        }
        .ohfx-shot {
          position: relative;
          flex: 1 1 auto;
          min-height: 0;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        .ohfx-shot img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .ohfx-shot img.ohfx-active {
          opacity: 1;
        }
        .ohfx-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .ohfx-card {
          position: sticky;
          border-radius: 24px;
          padding: 40px 44px;
          overflow: hidden;
        }
        .ohfx-card h3 {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: -1.2px;
          color: var(--logra-navy, #001f47);
          margin: 0 0 24px;
        }
        .ohfx-card p {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: var(--logra-gray, #6b7280);
          line-height: 1.6;
          margin: 0 0 16px;
        }
        .ohfx-card p:last-of-type { margin-bottom: 0; }
        .ohfx-cardimg {
          display: none;
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-top: 24px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }
        .ohfx-card-0 { top: 96px;  min-height: 580px; }
        .ohfx-card-1 { top: 160px; min-height: 516px; }
        .ohfx-card-2 { top: 224px; min-height: 452px; }
        .ohfx-card-3 { top: 288px; min-height: 388px; }

        @media (max-width: 899px) {
          .ohfx-section {
            grid-template-columns: 1fr;
            padding: 32px 16px 64px;
          }
          .ohfx-left {
            position: static;
            height: auto;
            padding: 32px 24px;
            gap: 24px;
            background: transparent;
          }
          .ohfx-title {
            font-size: 40px;
            line-height: 1.1;
            letter-spacing: -2px;
          }
          .ohfx-shot { display: none; }
          .ohfx-cardimg { display: block; }
          .ohfx-card { padding: 32px 28px; }
          .ohfx-card-0 { top: 80px;  min-height: 0; }
          .ohfx-card-1 { top: 136px; min-height: 0; }
          .ohfx-card-2 { top: 192px; min-height: 0; }
          .ohfx-card-3 { top: 248px; min-height: 0; }
        }
      `}</style>

      <div className="ohfx-left">
        <h2 className="ohfx-title">¿Cómo funciona?</h2>
        <div className="ohfx-shot">
          {CARDS.map((card, i) => (
            <img
              key={card.img}
              src={card.img}
              alt={card.alt}
              className={i === active ? "ohfx-active" : undefined}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>

      <div className="ohfx-right">
        {CARDS.map((card, i) => (
          <article
            key={card.title}
            className={`ohfx-card ohfx-card-${i}`}
            style={{ background: card.bg }}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <h3>{card.title}</h3>
            {card.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
            <img
              className="ohfx-cardimg"
              src={card.img}
              alt={card.alt}
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
