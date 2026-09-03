import { LograAppear } from "../root-8a5edab2/LograAppear";

export function InstAgendaDemo() {
  return (
    <section style={{ background: "#faf9f7", padding: "96px 20px 60px" }}>
      <style>{`
        .inst-demo-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          letter-spacing: -2.4px;
          line-height: 1.1;
          color: #001f47;
          max-width: 940px;
          margin: 0 auto;
        }
        .inst-demo-calendly {
          max-width: 1110px;
          margin: 56px auto 0;
          background: #fff;
          border: 1px solid #ececec;
          border-radius: 8px;
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }
        .inst-demo-calendly iframe {
          display: block;
          width: 100%;
          height: 730px;
          border: 0;
        }
        @media (max-width: 899px) {
          .inst-demo-title { font-size: 30px; letter-spacing: -1.5px; }
          .inst-demo-calendly { margin-top: 40px; }
          .inst-demo-calendly iframe { height: 900px; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
        <LograAppear>
          <h2 className="inst-demo-title">
            Agenda una llamada para conocer Logra
          </h2>
        </LograAppear>

        <LograAppear delay={0.1}>
          <p
            style={{
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#6b7280",
              maxWidth: 560,
              margin: "24px auto 0",
            }}
          >
            Queremos conversar sobre cómo estás generando valor para tu red de
            PyMEs hoy, y explorar cómo podemos apoyarte mejor.
          </p>
        </LograAppear>

        <LograAppear delay={0.15}>
          <div className="inst-demo-calendly">
            <iframe
              src="https://calendly.com/logra-ianis-defendini/30-min-call"
              title="Calendly — Agenda una llamada para conocer Logra"
              loading="lazy"
            />
          </div>
        </LograAppear>
      </div>
    </section>
  );
}
