import { LograAppear } from "../root-8a5edab2/LograAppear";

const CALENDLY_DEMO =
  "https://calendly.com/logra-ianis-defendini/30-min-call";

export function CamarasComoFunciona() {
  return (
    <section style={{ background: "#faf9f7", padding: "68px 20px 0" }}>
      <style>{`
        .cam-como-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          letter-spacing: -2.4px;
          line-height: 1.1;
          color: #001f47;
          max-width: 1140px;
          margin: 24px auto 0;
        }
        @media (max-width: 899px) {
          .cam-como-title { font-size: 32px; letter-spacing: -1.6px; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
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
            Cómo funciona
          </span>
        </LograAppear>

        <LograAppear delay={0.1}>
          <h2 className="cam-como-title">
            Combinamos Talleres virtuales, una plataforma 100% hecha para
            MiPyMEs de la región y un Dashboard de datos para tu institución.
          </h2>
        </LograAppear>

        <LograAppear delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#6b7280",
              maxWidth: 680,
              margin: "24px auto 0",
            }}
          >
            Diseñamos una experiencia completa que te permite apoyar la mayor
            cantidad de negocios afiliados de tu red, al menor costo posible.
          </p>
        </LograAppear>

        <LograAppear delay={0.3}>
          <a
            href={CALENDLY_DEMO}
            className="cam-btn-blue"
            style={{
              display: "inline-block",
              marginTop: 36,
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
      </div>
    </section>
  );
}
