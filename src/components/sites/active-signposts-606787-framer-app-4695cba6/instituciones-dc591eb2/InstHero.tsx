/* eslint-disable @next/next/no-img-element */
import { LograAppear } from "../root-8a5edab2/LograAppear";

const IMG_BASE =
  "/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/images";

const CALENDLY_DEMO =
  "https://calendly.com/logra-ianis-defendini/30-min-call";

export function InstHero() {
  return (
    <section
      style={{
        background: "#faf9f7",
        paddingTop: 82,
        overflow: "hidden",
      }}
    >
      <style>{`
        .inst-hero-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 72px;
          font-weight: 500;
          letter-spacing: -3.6px;
          line-height: 1.1;
          color: #171717;
          margin: 0 auto;
          max-width: 1000px;
        }
        .inst-hero-sub {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: #6b7280;
          max-width: 680px;
          margin: 24px auto 0;
        }
        .inst-hero-img-wrap {
          max-width: 1200px;
          margin: 48px auto 0;
          border-radius: 24px;
          overflow: hidden;
        }
        .inst-hero-img-wrap img {
          display: block;
          width: 100%;
          height: 478px;
          object-fit: cover;
          object-position: center 30%;
        }
        @media (max-width: 899px) {
          .inst-hero-title {
            font-size: 40px;
            letter-spacing: -2px;
          }
          .inst-hero-sub { font-size: 17px; }
          .inst-hero-img-wrap { margin-top: 40px; border-radius: 20px; }
          .inst-hero-img-wrap img { height: 420px; }
        }
      `}</style>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "88px 20px 0",
          textAlign: "center",
        }}
      >
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
            IA para potenciar tu red de PyMEs
          </span>
        </LograAppear>

        <LograAppear delay={0.1}>
          <h1 className="inst-hero-title" style={{ marginTop: 24 }}>
            Impulsa el crecimiento de tus PyMEs y fortalece tu impacto.
          </h1>
        </LograAppear>

        <LograAppear delay={0.2}>
          <p className="inst-hero-sub">
            Logra es la plataforma más simple e inteligente para ayudar a tus
            clientes PyME a ser más productivos.
          </p>
        </LograAppear>

        <LograAppear delay={0.3}>
          <a
            href={CALENDLY_DEMO}
            className="inst-btn-blue"
            style={{
              display: "inline-block",
              marginTop: 40,
              background: "#004bbd",
              color: "#fff",
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 12,
              padding: "18px 32px",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            Agenda una Demo
          </a>
        </LograAppear>

        <LograAppear delay={0.2}>
          <div className="inst-hero-img-wrap">
            <img
              src={`${IMG_BASE}/a8iloT3t29WmrTS5IEqwno6fjM.png`}
              alt="Equipo de una PyME trabajando en una oficina"
            />
          </div>
        </LograAppear>
      </div>
    </section>
  );
}
