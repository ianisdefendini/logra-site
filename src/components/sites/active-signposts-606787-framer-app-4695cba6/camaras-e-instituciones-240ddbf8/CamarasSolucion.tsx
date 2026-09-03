import { LograAppear } from "../root-8a5edab2/LograAppear";

const iconStroke = {
  fill: "none",
  stroke: "#6366f1",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function TrendingUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <path d="m4 17 5.5-5.5 3.5 3.5L20 8" />
      <path d="M15 8h5v5" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <path d="M12 4.5a2.7 2.7 0 0 0-2.7-1.4A2.8 2.8 0 0 0 6.8 6a3 3 0 0 0-2.2 3.6 3 3 0 0 0 .6 5 3 3 0 0 0 2.6 4.2c.9 1.6 3 2 4.2.9V4.5Z" />
      <path d="M12 4.5a2.7 2.7 0 0 1 2.7-1.4A2.8 2.8 0 0 1 17.2 6a3 3 0 0 1 2.2 3.6 3 3 0 0 1-.6 5 3 3 0 0 1-2.6 4.2c-.9 1.6-3 2-4.2.9V4.5Z" />
    </svg>
  );
}

function InstitutionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <path d="M3 21h18" />
      <path d="M4 18h16" />
      <path d="M6 18v-8" />
      <path d="M10 18v-8" />
      <path d="M14 18v-8" />
      <path d="M18 18v-8" />
      <path d="M12 3 3 8h18L12 3Z" />
    </svg>
  );
}

const CARDS = [
  {
    icon: <TrendingUpIcon />,
    title: "Capacitación continua",
    text: "Tenemos talleres virtuales animado por uno de nuestro experto accesible cada semana para llevarlos paso a paso..",
  },
  {
    icon: <BrainIcon />,
    title: "Herramienta siempre gratuita",
    text: "Acceden a una herramienta muy fácil de usar, que les dé resultados inmediatos, sin costo.",
  },
  {
    icon: <InstitutionIcon />,
    title: "Datos increíbles y accesibles",
    text: "Entiendes el perfil de tus empresas, la manera de cómo adoptan IA y las áreas de interés que tienen.",
  },
];

export function CamarasSolucion() {
  return (
    <section style={{ background: "#faf9f7", padding: "64px 20px 60px" }}>
      <style>{`
        .cam-solucion-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -2px;
          line-height: 1.2;
          color: #111827;
          max-width: 860px;
          margin: 24px auto 0;
        }
        .cam-solucion-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-top: 64px;
        }
        .cam-solucion-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 40px 32px 44px;
          text-align: center;
        }
        @media (max-width: 899px) {
          .cam-solucion-title { font-size: 28px; letter-spacing: -1.4px; }
          .cam-solucion-grid { grid-template-columns: 1fr; gap: 20px; margin-top: 48px; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <LograAppear>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(0, 75, 189, 0.25)",
              borderRadius: 999,
              padding: "8px 16px",
              background: "#fff",
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "#004bbd",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#004bbd",
                display: "inline-block",
              }}
            />
            Solución
          </span>
        </LograAppear>

        <LograAppear delay={0.1}>
          <h2 className="cam-solucion-title">
            Diseñamos nuestra experiencia para que sea{" "}
            <span style={{ color: "#1167ff" }}>
              escalable al menos costo, sostenible en el tiempo y generando
              datos súper valiosos
            </span>
          </h2>
        </LograAppear>

        <div className="cam-solucion-grid">
          {CARDS.map((card, i) => (
            <LograAppear key={card.title} delay={0.1 + i * 0.1}>
              <div className="cam-solucion-card">
                <span
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#f2f2fe",
                    border: "1px solid #e5e5fb",
                    boxShadow: "0 2px 6px rgba(99, 102, 241, 0.12)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-logra-heading), Poppins, sans-serif",
                    fontSize: 32,
                    fontWeight: 500,
                    letterSpacing: "-0.32px",
                    lineHeight: 1.15,
                    color: "#111827",
                    margin: "28px 0 0",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-logra-body), Inter, sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: 1.65,
                    color: "#6b7280",
                    margin: "20px auto 0",
                    maxWidth: 340,
                  }}
                >
                  {card.text}
                </p>
              </div>
            </LograAppear>
          ))}
        </div>
      </div>
    </section>
  );
}
