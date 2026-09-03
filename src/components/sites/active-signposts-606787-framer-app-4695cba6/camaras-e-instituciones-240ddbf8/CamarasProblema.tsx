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

export function BankIcon() {
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

export function LaptopIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <rect x="5" y="5" width="14" height="10" rx="1.5" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...iconStroke}>
      <path d="M4 4v16h16" />
      <path d="m7 14 4-4 3 3 5-6" />
    </svg>
  );
}

const ITEMS = [
  {
    icon: <BankIcon />,
    title: "No son escalables",
    text: "Los cursos, asesorías y talleres están limitados a pocas empresas. El impacto es limitado por falta de tecnología.",
  },
  {
    icon: <LaptopIcon />,
    title: "Son costosos en el tiempo",
    text: "Mantener estas iniciativas en el tiempo tiene un alto costo lo que impide mantenerlos y tener un buen seguimiento.",
  },
  {
    icon: <ChartIcon />,
    title: "No obtienes datos",
    text: "No puedes medir el impacto ni el progreso de tus afiliados. Navegas a ciegas y es complicado apoyarlas correctamente.",
  },
];

export function CamarasProblema() {
  return (
    <section style={{ background: "#faf9f7", padding: "58px 20px 90px" }}>
      <style>{`
        .cam-problema-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -1.6px;
          line-height: 1.2;
          color: #001f47;
          max-width: 900px;
          margin: 24px auto 0;
        }
        .cam-problema-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 48px;
          margin-top: 72px;
        }
        @media (max-width: 899px) {
          .cam-problema-title { font-size: 28px; letter-spacing: -1.4px; }
          .cam-problema-grid { grid-template-columns: 1fr; gap: 48px; margin-top: 56px; }
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
          <h2 className="cam-problema-title">
            Los programas e iniciativas de apoyo que despliegan para apoyar a
            sus MiPyMEs{" "}
            <span style={{ color: "#1167ff" }}>tienen ciertos limitantes.</span>
          </h2>
        </LograAppear>

        <div className="cam-problema-grid">
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
                    margin: "28px 0 0",
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
                    maxWidth: 360,
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
