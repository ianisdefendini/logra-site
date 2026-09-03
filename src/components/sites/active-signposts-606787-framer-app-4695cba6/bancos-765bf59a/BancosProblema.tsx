import { LograAppear } from "../root-8a5edab2/LograAppear";

function IconTile({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </span>
  );
}

const iconStroke = {
  fill: "none",
  stroke: "#6366f1",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ReceiptXIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m9.8 9.8 4.4 4.4" />
      <path d="m14.2 9.8-4.4 4.4" />
    </svg>
  );
}

function BankIcon() {
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

function HandCoinsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <circle cx="13" cy="6" r="2.4" />
      <circle cx="18.4" cy="8.4" r="1.8" />
      <path d="M3 14h3l4 2h4.5a1.5 1.5 0 0 1 0 3H10" />
      <path d="m6 18 1.5 1h6.9a4 4 0 0 0 2.8-1.2l3.3-3.3a1.4 1.4 0 0 0-2-2L16 15" />
    </svg>
  );
}

const ITEMS = [
  {
    icon: <ReceiptXIcon />,
    title: "$74.3B en créditos en mora en América Latina",
    text: "La baja productividad de las PyMEs aumenta su riesgo de impago. Un costo elevado para las instituciones financieras.",
  },
  {
    icon: <BankIcon />,
    title: "55% de tus clientes PyME no acceden a crédito",
    text: "Sin datos confiables ni confianza por parte de tu institución financiera, muchos quedan limitados a servicios básicos.",
  },
  {
    icon: <HandCoinsIcon />,
    title: "Una oportunidad de $240B al año sin aprovechar",
    text: "Fortalecer la productividad de tus clientes PyME puede desbloquear un enorme potencial crediticio para tu institución.",
  },
];

export function BancosProblema() {
  return (
    <section style={{ background: "#faf9f7", padding: "58px 20px 90px" }}>
      <style>{`
        .bancos-problema-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -1.6px;
          line-height: 1.2;
          color: #000;
          max-width: 900px;
          margin: 24px auto 0;
        }
        .bancos-problema-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 48px;
          margin-top: 72px;
        }
        @media (max-width: 899px) {
          .bancos-problema-title { font-size: 28px; letter-spacing: -1.4px; }
          .bancos-problema-grid { grid-template-columns: 1fr; gap: 48px; margin-top: 56px; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <LograAppear>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid #e2e2dd",
              borderRadius: 999,
              padding: "8px 16px",
              background: "#fff",
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "#3f4a5c",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
            </svg>
            Problema
          </span>
        </LograAppear>

        <LograAppear delay={0.1}>
          <h2 className="bancos-problema-title">
            <span style={{ color: "#1167ff" }}>
              65% de las PyMEs fracasan en los primeros 5 años.
            </span>{" "}
            Cada cierre es un crédito en riesgo y una oportunidad perdida para
            tu Banco. ¿Las razones?
          </h2>
        </LograAppear>

        <div className="bancos-problema-grid">
          {ITEMS.map((item, i) => (
            <LograAppear key={item.title} delay={0.1 + i * 0.1}>
              <div>
                <IconTile>{item.icon}</IconTile>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-logra-heading), Poppins, sans-serif",
                    fontSize: 24,
                    fontWeight: 500,
                    letterSpacing: "-1.2px",
                    lineHeight: "28.8px",
                    color: "#001f47",
                    maxWidth: 360,
                    margin: "28px auto 0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-logra-body), Inter, sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: 1.65,
                    color: "#6b7280",
                    maxWidth: 380,
                    margin: "16px auto 0",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </LograAppear>
          ))}
        </div>
      </div>
    </section>
  );
}
