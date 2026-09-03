/* eslint-disable @next/next/no-img-element */

const IMG_BASE =
  "/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/images";

interface FeatureCard {
  title: string;
  text: string;
  img: string;
  imgAlt: string;
  bg: string;
  maxWidth: number;
  stickyTop: number;
}

const CARDS: FeatureCard[] = [
  {
    title: "Marca Blanca: Nuestra plataforma para PyMEs",
    text: "Personaliza nuestra plataforma con tu identidad de marca y proporciona a tus clientes una plataforma para organizar y hacer crecer su negocio con inteligencia artificial.",
    img: `${IMG_BASE}/zRKlycdf4kmA4sIEKRBIBjoLFEI.png`,
    imgAlt:
      "Pantalla de registro de la plataforma Logra personalizada con tu marca",
    bg: "#f0ebd8",
    maxWidth: 1020,
    stickyTop: 120,
  },
  {
    title: "Invitación clientes: Una automatización fácil",
    text: "Creamos una cuenta de forma automatizada para cada cliente e invitamos a cada empresa de forma personalizada enviándoles correos y Whatsapp hasta que empiece en usar la plataforma.",
    img: `${IMG_BASE}/dUMPWD0eUg9Oy8U97jJIyoRyY.png`,
    imgAlt:
      "Panel de empresas registradas con la invitación automatizada de clientes",
    bg: "#d1d8ec",
    maxWidth: 1080,
    stickyTop: 148,
  },
  {
    title: "Análisis de datos: Un Dashboard completo",
    text: "En tu Dashboard, accedes a información precisa en tiempo real de tus PyMEs para ver el desempeño de tu red, detectar oportunidades y tomar decisiones que potencien tu ecosistema empresarial.",
    img: `${IMG_BASE}/PHt5AnSL8MxrlSuD06LjlG5fh0.png`,
    imgAlt: "Dashboard institucional de Logra con datos en tiempo real",
    bg: "#dde4ea",
    maxWidth: 1200,
    stickyTop: 176,
  },
];

export function InstFeatureCards() {
  return (
    <section style={{ background: "#faf9f7", padding: "90px 20px 100px" }}>
      <style>{`
        .inst-feature-card {
          position: sticky;
          border-radius: 24px;
          margin: 0 auto 60px;
          padding: 68px 60px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
          gap: 56px;
          align-items: center;
        }
        .inst-feature-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          letter-spacing: -2.4px;
          line-height: 1.1;
          color: #001f47;
          margin: 0;
        }
        .inst-feature-text {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.65;
          color: #6b7280;
          margin: 28px 0 0;
        }
        .inst-feature-img {
          width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 899px) {
          .inst-feature-card {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 36px 28px;
            margin-bottom: 40px;
          }
          .inst-feature-title { font-size: 30px; letter-spacing: -1.5px; }
          .inst-feature-text { font-size: 16px; margin-top: 20px; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className="inst-feature-card"
            style={{
              background: card.bg,
              maxWidth: card.maxWidth,
              top: card.stickyTop,
              zIndex: i + 1,
            }}
          >
            <div>
              <h2 className="inst-feature-title">{card.title}</h2>
              <p className="inst-feature-text">{card.text}</p>
            </div>
            <div>
              <img src={card.img} alt={card.imgAlt} className="inst-feature-img" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
