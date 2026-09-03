/* eslint-disable @next/next/no-img-element */

const IMG_BASE =
  "/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/images";

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
    title: "Talleres virtuales de capacitación",
    text: "Son sesiones de 60 minutos que llevamos cada semana para guiar a las PyMEs a empezar a utilizar la inteligencia artificial para organizar sus tareas, ejecutarlas en segundos y medir el tiempo ahorrado.",
    img: `${IMG_BASE}/WXLaOZzuY9oIZWEZBmdhdhaZOO8.png`,
    imgAlt: "Taller virtual de capacitación en Zoom con la plataforma Logra",
    bg: "#f0ebd8",
    maxWidth: 1020,
    stickyTop: 120,
  },
  {
    title: "Análisis de datos en tiempo real",
    text: "Accedes a un Dashboard analítico que te permite analizar datos de todas tus MiPyMEs afiliadas que utilizan la plataforma. Entiendes mejor sus retos y cómo usan la IA, para diseñar soluciones más adecuadas.",
    img: `${IMG_BASE}/6wnttm9d41yBIcV1L3Pm2ZeG0.png`,
    imgAlt: "Dashboard analítico de Logra con datos de MiPyMEs en tiempo real",
    bg: "#d1d8ec",
    stickyTop: 148,
    maxWidth: 1080,
  },
  {
    title: "Modelo ganar/ganar para todos",
    text: "Por ser invitadas por ti, tus empresas afiliadas acceden a la versión gratuita de forma permanente. Si contratan la versión Pro, les damos un descuento por ser de tu red y a ti te entregamos un porcentaje.",
    img: `${IMG_BASE}/zta85ldCA6NjTyLRFEz6bJrIXtY.png`,
    imgAlt: "Pantalla de bienvenida de Logra personalizada para Colsubsidio",
    bg: "#dde4ea",
    stickyTop: 176,
    maxWidth: 1200,
  },
];

export function CamarasFeatureCards() {
  return (
    <section style={{ background: "#faf9f7", padding: "90px 20px 100px" }}>
      <style>{`
        .cam-feature-card {
          position: sticky;
          border-radius: 24px;
          margin: 0 auto 60px;
          padding: 68px 60px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
          gap: 56px;
          align-items: center;
        }
        .cam-feature-title {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          letter-spacing: -2.4px;
          line-height: 1.1;
          color: #001f47;
          margin: 0;
        }
        .cam-feature-text {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.65;
          color: #6b7280;
          margin: 28px 0 0;
        }
        .cam-feature-img {
          width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 899px) {
          .cam-feature-card {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 36px 28px;
            margin-bottom: 40px;
          }
          .cam-feature-title { font-size: 30px; letter-spacing: -1.5px; }
          .cam-feature-text { font-size: 16px; margin-top: 20px; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className="cam-feature-card"
            style={{
              background: card.bg,
              maxWidth: card.maxWidth,
              top: card.stickyTop,
              zIndex: i + 1,
            }}
          >
            <div>
              <h2 className="cam-feature-title">{card.title}</h2>
              <p className="cam-feature-text">{card.text}</p>
            </div>
            <div>
              <img src={card.img} alt={card.imgAlt} className="cam-feature-img" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
