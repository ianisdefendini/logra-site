"use client";

import { useEffect, useRef, useState } from "react";

const IMG_BASE = "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images";

type Card = {
  bg: string;
  title: string;
  text: string;
  img: string;
  alt: string;
};

const CARDS: Card[] = [
  {
    bg: "#d3d8ed",
    title: "Chat de inteligencia artificial",
    text: "Conversa con tu inteligencia artificial para ejecutar tareas, tácticas o simplemente obtener apoyo, planes o ideas según tu necesidad.",
    img: `${IMG_BASE}/aFtKPP8NI7AEg5egpAEJqhXGtZU.png`,
    alt: "Mentor Virtual — chat de inteligencia artificial",
  },
  {
    bg: "#eef7e1",
    title: "Organizador de Tareas",
    text: "Organiza tus tareas y metas en un Tablero que te permite asignar, dar seguimiento y filtrar todo lo importante de tu semana.",
    img: `${IMG_BASE}/gZZrnRwUhv6t0xwFUMssg7vQME.png`,
    alt: "Tablero — organizador de tareas",
  },
  {
    bg: "#f0ebd8",
    title: "Formatos para tu Estrategia",
    text: "Entrena a tu inteligencia artificial con formatos inteligentes para que conozca a tu empresa mejor que cualquier Asesor y te de respuestas súper personalizadas.",
    img: `${IMG_BASE}/jZiqhgr331bQP8aOgJRkIGETWE.png`,
    alt: "Estrategia — formatos para tu estrategia",
  },
  {
    bg: "#ebd8eb",
    title: "Progreso semanal",
    text: "Mide las tareas que completas y el uso de inteligencia artificial de tu equipo para entender el tiempo ahorrado y la eficiencia de tu equipo.",
    img: `${IMG_BASE}/S3FC1yLHjSfBjcOyOpLMZESdc.png`,
    alt: "Progreso — analítica semanal",
  },
];

/**
 * "¿Cómo funciona?" — scroll-driven feature section.
 * Left panel is position:sticky and its app screenshot crossfades as the
 * right-hand sticky cards scroll and pile up over each other.
 */
export function LograFuncionalidades() {
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
    <section className="lfx-section">
      <style>{`
        .lfx-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .lfx-left {
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
        .lfx-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          line-height: 52.8px;
          letter-spacing: -2.4px;
          color: var(--logra-navy, #001f47);
          margin: 0;
        }
        .lfx-shot {
          position: relative;
          flex: 1 1 auto;
          min-height: 0;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        .lfx-shot img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .lfx-shot img.lfx-active {
          opacity: 1;
        }
        .lfx-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .lfx-card {
          position: sticky;
          border-radius: 24px;
          padding: 40px 44px;
        }
        .lfx-card h3 {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: -1.2px;
          color: var(--logra-navy, #001f47);
          margin: 0 0 24px;
        }
        .lfx-card p {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: var(--logra-gray, #6b7280);
          line-height: 1.6;
          margin: 0;
        }
        .lfx-card-0 { top: 96px;  min-height: 580px; }
        .lfx-card-1 { top: 160px; min-height: 516px; }
        .lfx-card-2 { top: 224px; min-height: 452px; }
        .lfx-card-3 { top: 288px; min-height: 388px; }

        @media (max-width: 899px) {
          .lfx-section {
            grid-template-columns: 1fr;
            padding: 32px 16px 64px;
          }
          .lfx-left {
            position: static;
            height: auto;
            padding: 32px 24px;
            gap: 24px;
          }
          .lfx-title {
            font-size: 36px;
            line-height: 1.1;
            letter-spacing: -1.8px;
          }
          .lfx-shot {
            flex: none;
            aspect-ratio: 16 / 10;
          }
          .lfx-card { padding: 32px 28px; }
          .lfx-card-0 { top: 80px;  min-height: 360px; }
          .lfx-card-1 { top: 136px; min-height: 360px; }
          .lfx-card-2 { top: 192px; min-height: 360px; }
          .lfx-card-3 { top: 248px; min-height: 360px; }
        }
      `}</style>

      <div className="lfx-left">
        <h2 className="lfx-title">¿Cómo funciona?</h2>
        <div className="lfx-shot">
          {CARDS.map((card, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={card.img}
              src={card.img}
              alt={card.alt}
              className={i === active ? "lfx-active" : undefined}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>

      <div className="lfx-right">
        {CARDS.map((card, i) => (
          <article
            key={card.title}
            className={`lfx-card lfx-card-${i}`}
            style={{ background: card.bg }}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
