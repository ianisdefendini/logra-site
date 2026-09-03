import { LograAppear } from "../root-8a5edab2/LograAppear";

export function BancosSolucionIntro() {
  return (
    <section style={{ background: "#faf9f7", padding: "128px 20px 0" }}>
      <style>{`
        .bancos-solintro-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          letter-spacing: -2.4px;
          line-height: 1.1;
          color: #001f47;
          max-width: 1000px;
          margin: 24px auto 0;
        }
        .bancos-solintro-sub {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: #6b7280;
          max-width: 700px;
          margin: 24px auto 0;
        }
        @media (max-width: 899px) {
          .bancos-solintro-title { font-size: 34px; letter-spacing: -1.7px; }
          .bancos-solintro-sub { font-size: 17px; }
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
            Solución
          </span>
        </LograAppear>

        <LograAppear delay={0.1}>
          <h2 className="bancos-solintro-title">
            Logra es la plataforma más simple para fortalecer tus PyMEs con IA
            y optimizar la gestión de riesgo
          </h2>
        </LograAppear>

        <LograAppear delay={0.2}>
          <p className="bancos-solintro-sub">
            Una plataforma para que tus clientes se organicen y crezcan,
            integrada con un Dashboard institucional para supervisar y analizar
            tu cartera.
          </p>
        </LograAppear>
      </div>
    </section>
  );
}
