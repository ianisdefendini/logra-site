import { LograAppear } from "../root-8a5edab2/LograAppear";

const IMG_BASE =
  "/sites/active-signposts-606787-framer-app-4695cba6/sobre-nosotros-780d001d/images";

const cards = [
  {
    badge: "Plataforma PyMES",
    heading:
      "¿Tienes una PyME? Descubre cómo puedes hacer crecer tu negocio con Logra, sin saber nada de tecnología.",
    img: `${IMG_BASE}/dEQT06SKy6Qwq4Vom6VnEZVg.png`,
    imgAlt: "Taller virtual de Logra con PyMEs",
    cta: "Descubre Logra para PyMES",
    href: "/",
  },
  {
    badge: "Programa instituciones",
    heading:
      "¿Eres parte de una institución? Explora como Logra te ayuda a impulsar el crecimiento de tu red de PyMEs, con IA.",
    img: `${IMG_BASE}/JF6bLSXgpdk2WqKbrOcK0pcF79c.png`,
    imgAlt: "Programa MiPyme + Crecimiento con Colsubsidio",
    cta: "Explora Logra para instituciones",
    href: "/camaras-e-instituciones",
  },
];

export function SobreCta() {
  return (
    <section style={{ background: "#edf7ff", padding: "100px 20px 110px" }}>
      <style>{`
        .sobre-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1440px;
          margin: 60px auto 0;
        }
        .sobre-cta-btn:hover { background: #f0f4f7 !important; }
        @media (max-width: 899px) {
          .sobre-cta-grid { grid-template-columns: 1fr; gap: 28px; margin-top: 48px; }
          .sobre-cta-h2 { font-size: 26px !important; line-height: 34px !important; }
          .sobre-cta-card-h2 { font-size: 28px !important; line-height: 34px !important; }
        }
      `}</style>

      <LograAppear>
        <h2
          className="sobre-cta-h2"
          style={{
            fontFamily: "var(--font-logra-heading)",
            fontSize: 32,
            fontWeight: 400,
            lineHeight: "38.4px",
            textAlign: "center",
            margin: 0,
            color: "#004bbd",
          }}
        >
          <span style={{ color: "#111827" }}>¿Convencido?</span>
          <br />
          Súmate para transformar la región a través de sus PyMEs.
        </h2>
      </LograAppear>

      <div className="sobre-cta-grid">
        {cards.map((card, i) => (
          <LograAppear key={card.badge} delay={i * 0.1}>
            <div
              style={{
                background: "#004bbd",
                borderRadius: 24,
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 28,
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  borderRadius: 40,
                  border: "1px solid rgba(255,255,255,0.6)",
                  alignSelf: "flex-start",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-logra-body)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#fff",
                    lineHeight: "20px",
                  }}
                >
                  {card.badge}
                </span>
              </div>

              <h2
                className="sobre-cta-card-h2"
                style={{
                  fontFamily: "var(--font-logra-heading)",
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: "26.4px",
                  letterSpacing: "-1.2px",
                  color: "#ffffff",
                  margin: 0,
                  maxWidth: 560,
                }}
              >
                {card.heading}
              </h2>

              <img
                src={card.img}
                alt={card.imgAlt}
                style={{
                  width: "100%",
                  maxWidth: 620,
                  borderRadius: 8,
                  display: "block",
                }}
              />

              <a
                href={card.href}
                className="sobre-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "flex-start",
                  marginTop: "auto",
                  padding: "16px 24px",
                  borderRadius: 12,
                  background: "#ffffff",
                  color: "#111111",
                  fontFamily: "var(--font-logra-body)",
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: "20px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
              >
                {card.cta}
              </a>
            </div>
          </LograAppear>
        ))}
      </div>
    </section>
  );
}
