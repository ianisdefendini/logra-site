import type { ReactNode } from "react";
import { LograAppear } from "../root-8a5edab2/LograAppear";

const iconTrophy = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6d71e0"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
    <path d="M7 5H4v2a3 3 0 0 0 3 3" />
    <path d="M17 5h3v2a3 3 0 0 1-3 3" />
  </svg>
);

const iconHandshake = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6d71e0"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 9l4-4 5 1 3-1 4 4" />
    <path d="M2 9l5 5a1.5 1.5 0 0 0 2-2" />
    <path d="M9 12l2.5 2.5a1.5 1.5 0 0 0 2.1-2.1L11 9.8" />
    <path d="M13.5 14.5l1 1a1.5 1.5 0 0 0 2.1-2.1" />
    <path d="M18 9l4 0" />
    <path d="M2 9H0" />
  </svg>
);

const iconGlobe = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6d71e0"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

const cards: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: iconTrophy,
    title: "15 años haciendo eso",
    body: "Hemos trabajado con miles de PyMEs en toda la región, diseñando programas de productividad con bancos, gobiernos e instituciones líderes.",
  },
  {
    icon: iconHandshake,
    title: "Una tecnología única",
    body: "Combinamos una herramienta súper simples con el poder de la inteligencia artificial, para que cada PyME mejore su productividad paso a paso.",
  },
  {
    icon: iconGlobe,
    title: "Un alianza poderosa",
    body: "Nos aliamos con entidades e instituciones que comparten nuestra visión proporcionándoles un producto que se alinea con sus objetivos estratégicos.",
  },
];

export function SobreComo() {
  return (
    <section
      style={{
        maxWidth: 1440,
        margin: "0 auto",
        padding: "100px 20px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 60,
      }}
    >
      <style>{`
        .sobre-como-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1400px;
        }
        @media (max-width: 899px) {
          .sobre-como-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <LograAppear>
        <h2
          style={{
            fontFamily: "var(--font-logra-heading)",
            fontSize: 32,
            fontWeight: 400,
            lineHeight: "38.4px",
            color: "#000",
            textAlign: "center",
            maxWidth: 700,
            margin: 0,
          }}
        >
          ¿Cómo? Desbloqueando el potencial de cada PyME con una herramienta
          súper simple.
        </h2>
      </LograAppear>

      <div className="sobre-como-grid">
        {cards.map((card, i) => (
          <LograAppear key={card.title} delay={i * 0.1}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
                textAlign: "center",
                border: "1px solid #e2e2e2",
                borderRadius: 24,
                padding: "40px 32px 48px",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "#fbfbfe",
                  border: "1px solid #e8e8f5",
                  boxShadow: "0 2px 6px rgba(109, 113, 224, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-logra-heading)",
                  fontSize: 32,
                  fontWeight: 500,
                  lineHeight: "32px",
                  letterSpacing: "-0.32px",
                  color: "#111827",
                  margin: "16px 0 0",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-logra-body)",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "26px",
                  color: "var(--logra-gray)",
                  margin: 0,
                  maxWidth: 440,
                }}
              >
                {card.body}
              </p>
            </div>
          </LograAppear>
        ))}
      </div>
    </section>
  );
}
