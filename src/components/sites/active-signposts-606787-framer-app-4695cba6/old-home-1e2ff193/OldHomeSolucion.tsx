import { LograAppear } from "../root-8a5edab2/LograAppear";

/** Old-home "solución" section — 48px left headline, sub, team photo,
 *  4-feature grid (Tablero / Mentor virtual / Pilares / Progreso). */

const features = [
  {
    title: "Tablero",
    body: "Organiza y prioriza tus tareas para lograr más cada semana.",
    delay: 0,
    icon: (
      // Table / grid
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004bbd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M10 10v9" />
      </svg>
    ),
  },
  {
    title: "Mentor virtual",
    body: "Usa tu inteligencia artificial para ejecutar tareas en segundos.",
    delay: 0.12,
    icon: (
      // Sparkles
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004bbd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
      </svg>
    ),
  },
  {
    title: "Pilares",
    body: "Construye tu estrategia clara paso a paso para tener mejor enfoque.",
    delay: 0.24,
    icon: (
      // Brain
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004bbd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M12 5v13" />
      </svg>
    ),
  },
  {
    title: "Progreso",
    body: "Visualiza tu avance cada semana y la mejora de eficiencia del equipo.",
    delay: 0.36,
    icon: (
      // Presentation board
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004bbd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="M8 11V9" />
        <path d="M12 11V7" />
        <path d="M16 11v-3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    ),
  },
];

export function OldHomeSolucion() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "100px 20px 80px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "flex-start",
        textAlign: "left",
      }}
    >
      <style>{`
        .oh-sol-h2 {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          line-height: 52.8px;
          letter-spacing: -2.4px;
          color: #001f47;
          max-width: 1000px;
          margin: 0;
        }
        .oh-sol-photo {
          width: 100%;
          height: 590px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }
        .oh-sol-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-top: 24px;
          width: 100%;
        }
        @media (max-width: 767px) {
          .oh-sol-grid {
            grid-template-columns: 1fr;
          }
          .oh-sol-photo {
            height: 320px;
          }
          .oh-sol-h2 {
            font-size: 32px;
            line-height: 1.15;
            letter-spacing: -1.6px;
          }
        }
      `}</style>

      <LograAppear delay={0} style={{ width: "100%" }}>
        <h2 className="oh-sol-h2">
          Logra es la plataforma más simple para organizar y potencializar tu
          PyME, con inteligencia artificial.
        </h2>
      </LograAppear>

      <LograAppear delay={0.1} style={{ width: "100%" }}>
        <p
          style={{
            fontFamily: "var(--font-logra-body), Inter, sans-serif",
            fontSize: 20,
            fontWeight: 400,
            color: "#6b7280",
            lineHeight: 1.5,
            margin: 0,
            maxWidth: 860,
          }}
        >
          Organiza, prioriza y ejecuta tus tareas para que tu negocio sea más
          eficiente, productivo y rentable. ¡Sin saber nada de tecnología!
        </p>
      </LograAppear>

      <LograAppear delay={0.15} style={{ width: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="oh-sol-photo"
          src="/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images/yV9nGSZMkBhRChbPelij7xROvew.png"
          alt="Tres personas de un equipo revisando un smartphone en la oficina"
        />
      </LograAppear>

      <div className="oh-sol-grid">
        {features.map((f) => (
          <LograAppear key={f.title} delay={f.delay}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {f.icon}
              <h3
                style={{
                  fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#001f47",
                  margin: 0,
                }}
              >
                {f.title}
              </h3>
            </div>
            <p
              style={{
                fontFamily: "var(--font-logra-body), Inter, sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.55,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              {f.body}
            </p>
          </LograAppear>
        ))}
      </div>
    </section>
  );
}
