/* eslint-disable @next/next/no-img-element */
import { LograAppear } from "../root-8a5edab2/LograAppear";

const IMG_BASE =
  "/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/images";

export function CamarasInstituciones() {
  return (
    <section style={{ background: "#faf9f7", padding: "42px 20px 60px" }}>
      <style>{`
        .cam-inst-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 140px;
          margin-top: 64px;
          flex-wrap: wrap;
        }
        @media (max-width: 899px) {
          .cam-inst-logos { gap: 48px; margin-top: 40px; }
        }
      `}</style>
      <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
        <LograAppear>
          <h4
            style={{
              fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "-0.8px",
              lineHeight: "28px",
              color: "#001f47",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            Trabajamos con instituciones líderes en Colombia y nuestro servicio
            está disponible en toda América Latina.
          </h4>
        </LograAppear>

        <LograAppear delay={0.15}>
          <div className="cam-inst-logos">
            <img
              src={`${IMG_BASE}/logo-strip-0-160x32.svg`}
              alt="Colsubsidio"
              style={{ width: 160, height: 32, objectFit: "contain" }}
            />
            <img
              src={`${IMG_BASE}/OohkGjWeweywV8Npxcd5cpfzUo.png`}
              alt="IFC — International Finance Corporation, World Bank Group"
              style={{ width: 100, height: "auto", objectFit: "contain" }}
            />
            <img
              src={`${IMG_BASE}/logo-strip-1-113x40.svg`}
              alt="Davivienda"
              style={{ width: 113, height: 40, objectFit: "contain" }}
            />
          </div>
        </LograAppear>
      </div>
    </section>
  );
}
