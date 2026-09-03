import type { CSSProperties } from "react";
import { LograAppear } from "../root-8a5edab2/LograAppear";

const IMG_BASE =
  "/sites/active-signposts-606787-framer-app-4695cba6/sobre-nosotros-780d001d/images";

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

export function SobreHero() {
  return (
    <section
      style={{
        padding: "88px 20px 0",
        maxWidth: 1240,
        margin: "82px auto 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 48,
      }}
    >
      <style>{`
        .sobre-hero-primary:hover { background: #003da3 !important; }
        .sobre-hero-secondary:hover { background: rgba(17,17,17,0.05) !important; }
        @media (max-width: 899px) {
          .sobre-hero-h1 { font-size: 40px !important; line-height: 46px !important; letter-spacing: -2px !important; }
          .sobre-hero-img { height: 380px !important; border-radius: 20px !important; }
          .sobre-hero-buttons { flex-direction: column !important; width: 100%; }
          .sobre-hero-buttons a { width: 100% !important; }
        }
      `}</style>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          maxWidth: 1000,
          textAlign: "center",
          width: "100%",
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
            <span
              style={{
                fontFamily: "var(--font-logra-body)",
                fontSize: 14,
                fontWeight: 500,
                color: "#004bbd",
                lineHeight: "20px",
              }}
            >
              IA para crecer tu PyME
            </span>
          </div>
        </LograAppear>

        <LograAppear delay={0.1}>
          <h1
            className="sobre-hero-h1"
            style={{
              fontFamily: "var(--font-logra-heading)",
              fontSize: 72,
              fontWeight: 500,
              lineHeight: "79.2px",
              letterSpacing: "-3.6px",
              color: "#171717",
              textAlign: "center",
              maxWidth: 1000,
              margin: 0,
            }}
          >
            En Logra, creemos en el poder de las PyMEs para transformar
            Latinoamérica
          </h1>
        </LograAppear>

        <LograAppear delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-logra-body)",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: "28px",
              color: "var(--logra-gray)",
              textAlign: "center",
              maxWidth: 736,
              margin: 0,
            }}
          >
            Las PyMEs son el alma de nuestra economía, el sustento de millones
            de familias y el motor de nuestra región. Cuando crecen, toda la
            región crece.
          </p>
        </LograAppear>

        <LograAppear delay={0.3} style={{ width: "100%", maxWidth: 420 }}>
          <div
            className="sobre-hero-buttons"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <a
              href="/sign-up"
              className="sobre-hero-primary"
              style={{ ...btnBase, background: "#004bbd", color: "#fff" }}
            >
              Comenzar ahora
            </a>
            <a
              href="#"
              className="sobre-hero-secondary"
              style={{
                ...btnBase,
                background: "transparent",
                border: "1px solid #001f47",
                color: "#001f47",
              }}
            >
              Ver demo
            </a>
          </div>
        </LograAppear>
      </div>

      <LograAppear delay={0.15} style={{ width: "100%" }}>
        <img
          className="sobre-hero-img"
          src={`${IMG_BASE}/VcZQB1bAomVmHu9kjSFHnUOts.png`}
          alt="Equipo de una PyME en su bodega"
          style={{
            width: "100%",
            height: 478,
            objectFit: "cover",
            objectPosition: "center 30%",
            borderRadius: 24,
            display: "block",
          }}
        />
      </LograAppear>
    </section>
  );
}
