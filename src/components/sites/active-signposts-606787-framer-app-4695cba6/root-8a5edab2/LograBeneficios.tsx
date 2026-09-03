"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const IMG_BASE = "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images";

/* Each tab's visual is a single pre-composed image from the original site
 * (photo + floating pills/cards + peach background baked in). */
const COMPOSITE_TAB0 = `${IMG_BASE}/9ZBmMM6V7bMOyAeHuGvge5E.webp`;
const COMPOSITE_TAB1 = `${IMG_BASE}/pASrkLUgEPTMeeYVbbXJndUQEiw.webp`;
const COMPOSITE_TAB2 = `${IMG_BASE}/ST9gk1HqBWdmTZUxCISGmmr9EI.webp`;

/* ---------- Icons (stroke: currentColor) ---------- */

function NodesIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="9" width="6" height="6" rx="1" />
      <rect x="16" y="2" width="6" height="6" rx="1" />
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <path d="M8 12h4" />
      <path d="M12 12V5a1 1 0 0 1 1-1h3" />
      <path d="M12 12v7a1 1 0 0 0 1 1h3" />
    </svg>
  );
}

function ChevronsIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 17 5-5-5-5" />
      <path d="m13 17 5-5-5-5" />
    </svg>
  );
}

function FlagIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

/* ---------- Data ---------- */

type TabDef = {
  label: string;
  heading: string;
  text: string;
  Icon: ({ size }: { size?: number }) => React.ReactElement;
};

const TABS: TabDef[] = [
  {
    label: "La IA trabaja por ti",
    heading: "La inteligencia artificial trabaja por ti",
    text: "Ejecuta tus tareas repetitivas en segundos. Te crea planes de acción y procesos para avanzar más rápido.",
    Icon: NodesIcon,
  },
  {
    label: "Enfócate en lo importante",
    heading: "Te enfocas en lo importante",
    text: "Liberando tiempo puedes dedicar tu energía y foco en las tareas que más aporten valor al negocio.",
    Icon: ChevronsIcon,
  },
  {
    label: "Decides con más seguridad",
    heading: "Decides con más seguridad",
    text: "Organizar tu equipo con metas claras y un buen seguimiento te permite tomar decisiones con más certeza para avanzar.",
    Icon: FlagIcon,
  },
];

/* ---------- Left card per state ---------- */

function CompositeCard({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: 16,
      }}
    />
  );
}

/* ---------- Component ---------- */

export function LograBeneficios() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const TabIcon = tab.Icon;

  return (
    <section style={{ background: "#f2f4f7", padding: "100px 0" }}>
      <style>{`
        @keyframes lograBenefFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .logra-benef-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .logra-benef-tab {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding-bottom: 18px;
          border: none;
          border-bottom: 1px solid #d1d5db;
          background: none;
          cursor: pointer;
          transition: color 0.25s, border-color 0.25s;
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #001f47;
        }
        .logra-benef-tab[data-active="true"] {
          border-bottom: 2px solid #0d3baf;
          color: #0d3baf;
        }
        .logra-benef-content {
          margin-top: 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          animation: lograBenefFadeIn 0.3s ease;
        }
        .logra-benef-card {
          border-radius: 16px;
          background: #fbe3d9;
          min-height: 640px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 64px 0;
        }
        @media (max-width: 899px) {
          .logra-benef-tabs { grid-template-columns: 1fr; gap: 8px; }
          .logra-benef-tab { justify-content: flex-start; }
          .logra-benef-content { grid-template-columns: 1fr; gap: 48px; }
          .logra-benef-card { min-height: 480px; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Badge pill */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              border: "1px solid #e5e7eb",
              background: "#fff",
              borderRadius: 40,
              padding: "6px 12px",
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "#004bbd",
            }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>•</span>
            Beneficios
          </div>
        </div>

        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            margin: "24px auto 64px",
            maxWidth: 900,
            fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "-1.6px",
            lineHeight: "38.4px",
            color: "#001f47",
          }}
        >
          Las MiPyMEs que adoptan inteligencia artificial
          <br />
          tienen <span style={{ color: "#004bbd" }}>40% más probabilidad de crecer.</span>
        </h2>

        {/* Tab bar */}
        <div className="logra-benef-tabs">
          {TABS.map((t, i) => {
            const Icon = t.Icon;
            return (
              <button
                key={t.label}
                type="button"
                className="logra-benef-tab"
                data-active={active === i}
                onClick={() => setActive(i)}
              >
                <Icon size={22} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content — keyed for crossfade on tab switch */}
        <div className="logra-benef-content" key={active}>
          <div className="logra-benef-card">
            {active === 0 && (
              <CompositeCard
                src={COMPOSITE_TAB0}
                alt="Emprendedora mejorando su estrategia con Logra"
              />
            )}
            {active === 1 && (
              <CompositeCard
                src={COMPOSITE_TAB1}
                alt="Emprendedora enfocada en lo importante con Logra"
              />
            )}
            {active === 2 && (
              <CompositeCard
                src={COMPOSITE_TAB2}
                alt="Emprendedor decidiendo con más seguridad con análisis de datos"
              />
            )}
          </div>
          <div>
            <h3
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: "-1.2px",
                color: "#001f47",
              }}
            >
              <span style={{ color: "#0d3baf", display: "inline-flex" }}>
                <TabIcon size={22} />
              </span>
              {tab.heading}
            </h3>
            <p
              style={{
                marginTop: 20,
                fontFamily: "var(--font-logra-body), Inter, sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              {tab.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
