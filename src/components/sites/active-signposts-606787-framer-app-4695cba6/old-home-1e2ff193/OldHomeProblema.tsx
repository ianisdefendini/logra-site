"use client";

import { LograAppear } from "../root-8a5edab2/LograAppear";

/* ---------- Icons (22px, stroke #5b5bd6) ---------- */

function ClockIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5b5bd6"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function TrendingDownIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5b5bd6"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function CloverIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5b5bd6"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.61Z" />
      <path d="M12 17.66V22" />
    </svg>
  );
}

/* ---------- Data (verbatim old-home copy) ---------- */

const STATS: { icon: React.ReactNode; title: string; text: string }[] = [
  {
    icon: <ClockIcon />,
    title: "+5h perdidas por empleado",
    text: "Hacen tareas repetitivas e innecesarias, debido a la desorganización. Si les sobre tiempo, super. Si no, mejor hay que ahorrarlo.",
  },
  {
    icon: <TrendingDownIcon />,
    title: "46% no usan IA en su día día",
    text: "Siguen atrapados en la ineficiencia. Más errores, más costos y menos oportunidades. Esa no es la mejor manera de crecer.",
  },
  {
    icon: <CloverIcon />,
    title: "90% toman decisiones sin data",
    text: "Toman decisiones sin analizar sus números. La intuición es buena para jugar en el casino, pero no para dirigir un negocio.",
  },
];

/** Old-home "Problema" section — urgencia layout with legacy copy. */
export function OldHomeProblema() {
  return (
    <section style={{ background: "#faf9f7", padding: "100px 20px" }}>
      <style>{`
        .oh-prob-grid {
          margin-top: 80px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        @media (max-width: 899px) {
          .oh-prob-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        {/* Badge pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            border: "1px solid #e5e7eb",
            background: "#fff",
            borderRadius: 40,
            padding: "6px 12px",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#004bbd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "#001f47",
            }}
          >
            Problema
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            marginTop: 24,
            fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "-1.6px",
            lineHeight: "38.4px",
          }}
        >
          <span style={{ display: "block", color: "#001f47" }}>
            2 de cada 3 PyMEs fracasan en los primeros 5 años.
          </span>
          <span style={{ display: "block", color: "#004bbd" }}>
            Las razones están claras.
          </span>
        </h2>

        {/* Stats */}
        <div className="oh-prob-grid">
          {STATS.map((stat, i) => (
            <LograAppear key={stat.title} delay={i * 0.12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(99,102,241,0.08)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </div>
                <h3
                  style={{
                    marginTop: 24,
                    fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
                    fontSize: 24,
                    fontWeight: 500,
                    letterSpacing: "-1.2px",
                    color: "#001f47",
                    maxWidth: 360,
                  }}
                >
                  {stat.title}
                </h3>
                <p
                  style={{
                    marginTop: 16,
                    fontFamily: "var(--font-logra-body), Inter, sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#6b7280",
                    lineHeight: 1.55,
                    maxWidth: 400,
                  }}
                >
                  {stat.text}
                </p>
              </div>
            </LograAppear>
          ))}
        </div>
      </div>
    </section>
  );
}
