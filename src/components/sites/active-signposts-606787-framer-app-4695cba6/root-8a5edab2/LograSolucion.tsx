import { LograAppear } from "./LograAppear";

/** Section "Una plataforma súper simple" — headline, sub, team photo, 4-feature grid. */

const features = [
  {
    title: "Ahorro de tiempo",
    body: "Ejecuta tareas en segundos en lugar de horas.",
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
    title: "Objetivos claros",
    body: "Define tus metas cada semana y logra más resultados.",
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
    title: "Eficiencia operativa",
    body: "Construye procesos y aclara tu estrategia paso a paso.",
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
    title: "Progreso transparente",
    body: "Mide el impacto de adoptar inteligencia artificial en equipo.",
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

export function LograSolucion() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "flex-start",
        textAlign: "left",
      }}
    >
      <style>{`
        .logra-solucion-h2 {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 32px;
          font-weight: 500;
          line-height: 38.4px;
          letter-spacing: -1.6px;
          color: #001f47;
          max-width: 1120px;
          margin: 0;
        }
        .logra-solucion-photo {
          width: 100%;
          height: 590px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }
        .logra-solucion-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-top: 24px;
          width: 100%;
        }
        @media (max-width: 767px) {
          .logra-solucion-grid {
            grid-template-columns: 1fr;
          }
          .logra-solucion-photo {
            height: 320px;
          }
          .logra-solucion-h2 {
            font-size: 24px;
            line-height: 1.25;
          }
        }
      `}</style>

      <LograAppear delay={0} style={{ width: "100%" }}>
        <h2 className="logra-solucion-h2">
          Una plataforma súper simple, hecha para empresarios que empiezan con
          el uso de la tecnología y quieren resultados inmediatos.
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
          }}
        >
          ¿Cómo Logra te da más control, más enfoque y más eficiencia en tu día
          a día?
        </p>
      </LograAppear>

      <LograAppear delay={0.15} style={{ width: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="logra-solucion-photo"
          src="/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images/yV9nGSZMkBhRChbPelij7xROvew.png"
          alt="Tres personas de un equipo revisando un smartphone en la oficina"
        />
      </LograAppear>

      <div className="logra-solucion-grid">
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
