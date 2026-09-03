import { LograAppear } from "../root-8a5edab2/LograAppear";

const iconStroke = {
  fill: "none",
  stroke: "#6366f1",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function TrendingDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <path d="m4 7 5.5 5.5 3.5-3.5L20 16" />
      <path d="M15 16h5v-5" />
    </svg>
  );
}

function ClockRefreshIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.5-6" />
      <path d="M20.5 3.5V6h-2.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <rect x="3.5" y="6" width="17" height="13" rx="2.5" />
      <path d="M3.5 10h17" />
      <path d="M7 15h3" />
    </svg>
  );
}

const CARDS = [
  {
    icon: <TrendingDownIcon />,
    title: "Reduce el riesgo",
    text: "Fortalece a tus clientes PyME con una herramienta de IA que mejora su productividad y capacidad de pago.",
  },
  {
    icon: <ClockRefreshIcon />,
    title: "Datos en tiempo real",
    text: "Accede a datos precisos y actualizados para ajustar criterios de riesgo y detectar nuevas oportunidades.",
  },
  {
    icon: <WalletIcon />,
    title: "Mejora rentabilidad",
    text: "Aumenta la colocación de crédito identificando PyMEs con mejor desempeño mediante análisis inteligente.",
  },
];

export function BancosOportunidad() {
  return (
    <section style={{ background: "#faf9f7", padding: "64px 20px 60px" }}>
      <style>{`
        .bancos-oport-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -2px;
          line-height: 1.2;
          color: #000;
          max-width: 900px;
          margin: 24px auto 0;
        }
        .bancos-oport-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-top: 64px;
        }
        .bancos-oport-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 40px 32px 44px;
          text-align: center;
        }
        @media (max-width: 899px) {
          .bancos-oport-title { font-size: 28px; letter-spacing: -1.4px; }
          .bancos-oport-grid { grid-template-columns: 1fr; gap: 20px; margin-top: 48px; }
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
            Oportunidad
          </span>
        </LograAppear>

        <LograAppear delay={0.1}>
          <h2 className="bancos-oport-title">
            Las PyMEs que adoptan inteligencia artificial sobreviven más y
            pagan mejor.{" "}
            <span style={{ color: "#1167ff" }}>Aprovecha eso para ti.</span>
          </h2>
        </LograAppear>

        <div className="bancos-oport-grid">
          {CARDS.map((card, i) => (
            <LograAppear key={card.title} delay={0.1 + i * 0.1}>
              <div className="bancos-oport-card">
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
