/* eslint-disable @next/next/no-img-element */
import { LograAppear } from "../root-8a5edab2/LograAppear";

const ROOT_IMG =
  "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images";

const CALENDLY_DEMO =
  "https://calendly.com/logra-ianis-defendini/30-min-call";

/** Avatars arranged in a ring above the heading (positions in % of the ring
 *  box, sized ~560x420 desktop). Order follows the original y-positions. */
const AVATARS = [
  // top row
  { src: `${ROOT_IMG}/tPpEHo7HBVywugVbYMnuj0IS2VU.jpeg`, left: "38%", top: "2%", size: 96 },
  { src: `${ROOT_IMG}/tXvP6vyTMVQ25kNqnUADoDJ0.png`, left: "60%", top: "6%", size: 83 },
  // second row
  { src: `${ROOT_IMG}/W8Zhn8R8oXgWoJjJmW7GrnePq8c.png`, left: "18%", top: "22%", size: 83 },
  { src: `${ROOT_IMG}/8qr2flYjr5VziFifRRRmLjRUvt0.png`, left: "78%", top: "26%", size: 83 },
  // third row
  { src: `${ROOT_IMG}/GNXIOVfGW9PTQCDRvjqJwoD1620.png`, left: "12%", top: "48%", size: 83 },
  { src: `${ROOT_IMG}/kNpfN94dPv4CChcHGsDFqo21o.png`, left: "82%", top: "50%", size: 83 },
  // fourth row
  { src: `${ROOT_IMG}/vAHjkqcHOOLWCAWdDgGMPQh2mM.png`, left: "24%", top: "72%", size: 83 },
  { src: `${ROOT_IMG}/ucC43EcJfz9aNLlu2w08xWTb4.png`, left: "68%", top: "74%", size: 83 },
  // bottom center
  { src: `${ROOT_IMG}/2Bi8qVTSXaHejZSJz9N38rFg.png`, left: "45%", top: "84%", size: 83 },
];

export function InstEcosistema() {
  return (
    <section style={{ background: "#faf9f7", padding: "60px 20px 0" }}>
      <style>{`
        .inst-eco-card {
          max-width: 1400px;
          margin: 0 auto;
          background: #004bbd;
          border-radius: 24px;
          padding: 32px 40px 72px;
          text-align: center;
          overflow: hidden;
        }
        .inst-eco-ring {
          position: relative;
          width: 560px;
          height: 420px;
          margin: 0 auto;
          max-width: 100%;
        }
        .inst-eco-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 60px;
          font-weight: 500;
          letter-spacing: -3px;
          line-height: 1.1;
          color: #ffffff;
          max-width: 1040px;
          margin: 16px auto 0;
        }
        .inst-eco-text {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.92);
          max-width: 820px;
          margin: 28px auto 0;
        }
        .inst-eco-btn { transition: background 0.2s ease; }
        .inst-eco-btn:hover { background: #f0f0f0 !important; }
        @media (max-width: 899px) {
          .inst-eco-card { padding: 24px 24px 56px; }
          .inst-eco-ring { width: 340px; height: 560px; }
          .inst-eco-title { font-size: 36px; letter-spacing: -1.8px; }
          .inst-eco-text { font-size: 16px; }
        }
      `}</style>
      <div className="inst-eco-card">
        <div className="inst-eco-ring" aria-hidden="true">
          {AVATARS.map((a) => (
            <img
              key={a.src}
              src={a.src}
              alt=""
              style={{
                position: "absolute",
                left: a.left,
                top: a.top,
                width: a.size,
                height: a.size,
                maxWidth: "28%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ))}
        </div>

        <LograAppear>
          <h2 className="inst-eco-title">
            Mucho más que una plataforma: Un ecosistema de crecimiento
            empresarial
          </h2>
        </LograAppear>

        <LograAppear delay={0.15}>
          <p className="inst-eco-text">
            Convierte tu red de PyMEs en un ecosistema de colaboración y
            expansión. Con Logra, las empresas pueden generar nuevas
            oportunidades para potenciar su crecimiento. Más PyMEs creciendo,
            mayor impacto económico.
          </p>
        </LograAppear>

        <LograAppear delay={0.25}>
          <a
            href={CALENDLY_DEMO}
            className="inst-eco-btn"
            style={{
              display: "inline-block",
              marginTop: 44,
              background: "#fff",
              color: "#111",
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 12,
              padding: "16px 28px",
              textDecoration: "none",
            }}
          >
            Agenda una Demo
          </a>
        </LograAppear>
      </div>
    </section>
  );
}
