import type { CSSProperties } from "react";
import { LograAppear } from "./LograAppear";

const btnBase: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 20px",
  borderRadius: 12,
  fontFamily: "var(--font-logra-body)",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "20px",
  textDecoration: "none",
  boxSizing: "border-box",
  transition: "background-color 0.2s",
  whiteSpace: "nowrap",
};

export function LograHero() {
  return (
    <section
      style={{
        padding: "60px 20px 30px",
        maxWidth: 1200,
        margin: "82px auto 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 36,
      }}
    >
      <style>{`
        .logra-hero-primary:hover { background: #003da3 !important; }
        .logra-hero-secondary:hover { background: rgba(17,17,17,0.05) !important; }
        @media (max-width: 767px) {
          .logra-hero-h1 { font-size: 40px !important; line-height: 48px !important; }
        }
      `}</style>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
          maxWidth: 800,
          textAlign: "center",
        }}
      >
        <LograAppear delay={0}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 10px",
              borderRadius: 40,
              border: "1px solid #e5e7eb",
              background: "#fff",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#004bbd"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 2c.4 4.9 4 8.9 8.9 9.6l1.1.4-1.1.4C16 13.1 12.4 17.1 12 22c-.4-4.9-4-8.9-8.9-9.6L2 12l1.1-.4C8 10.9 11.6 6.9 12 2z" />
              <path d="M19 1c.2 1.7 1.4 3 3.1 3.4l.9.1-.9.1C20.4 5 19.2 6.3 19 8c-.2-1.7-1.4-3-3.1-3.4L15 4.5l.9-.1C17.6 4 18.8 2.7 19 1z" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-logra-body)",
                fontSize: 14,
                fontWeight: 500,
                color: "#004bbd",
                lineHeight: "20px",
              }}
            >
              IA para potenciar tu PyME
            </span>
          </div>
        </LograAppear>

        <LograAppear delay={0.1}>
          <h1
            className="logra-hero-h1"
            style={{
              fontFamily: "var(--font-logra-display)",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: "76.8px",
              color: "#111",
              textAlign: "center",
              maxWidth: 800,
              margin: 0,
            }}
          >
            La inteligencia artificial creada para las MiPyMEs de Latinoamérica
          </h1>
        </LograAppear>

        <LograAppear delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-logra-body)",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              color: "#000",
              textAlign: "center",
              maxWidth: 736,
              margin: 0,
            }}
          >
            Logra te ayuda a ahorrar tiempo y ser más eficiente para
            potencializar tu negocio.
          </p>
        </LograAppear>

        <LograAppear delay={0.3}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <a
              href="https://app.alkyo.ai/signup"
              className="logra-hero-primary"
              style={{ ...btnBase, background: "#004bbd", color: "#fff" }}
            >
              Probar sin costo
            </a>
            <a
              href="#"
              className="logra-hero-secondary"
              style={{
                ...btnBase,
                background: "transparent",
                border: "1px solid #111",
                color: "#111",
              }}
            >
              Ver demo
            </a>
          </div>
        </LograAppear>
      </div>
    </section>
  );
}
