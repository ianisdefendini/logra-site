import { LograAppear } from "../root-8a5edab2/LograAppear";

const columns = [
  {
    title: "Digitalización",
    body: "El 70% de las PyMEs en LatAm aún usa métodos manuales para gestionar su negocio, lo que les cuesta miles de horas en errores y reprocesos.",
  },
  {
    title: "Productividad",
    body: "Una PyME produce solo el 6% de lo que genera una gran empresa, debido a procesos manuales e ineficientes. Es dos veces menos que en Europa.",
  },
  {
    title: "Datos & IA",
    body: "Más del 90% de las PyMEs en LatAm no usan herramientas avanzadas de análisis de datos ni inteligencia artificial, navegando a ciegas para sobrevivir.",
  },
];

export function SobreProblema() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "100px 20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 48,
      }}
    >
      <style>{`
        .sobre-problema-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 900px;
          width: 100%;
        }
        @media (max-width: 899px) {
          .sobre-problema-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 24px; }
        }
        @media (max-width: 599px) {
          .sobre-problema-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
      <LograAppear>
        <h3
          style={{
            fontFamily: "var(--font-logra-heading)",
            fontSize: 24,
            fontWeight: 400,
            lineHeight: "30px",
            letterSpacing: "-0.24px",
            color: "#111827",
            textAlign: "center",
            maxWidth: 860,
            margin: 0,
          }}
        >
          Hoy, 65% de las PyMEs fracasan antes de los 5 años.
          <br />
          Nuestra obsesión es cambiar eso:
        </h3>
      </LograAppear>

      <div className="sobre-problema-grid">
        {columns.map((col, i) => (
          <LograAppear key={col.title} delay={i * 0.1}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-logra-heading)",
                  fontSize: 24,
                  fontWeight: 500,
                  lineHeight: "28.8px",
                  letterSpacing: "-1.2px",
                  color: "#001f47",
                  margin: 0,
                }}
              >
                {col.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-logra-heading)",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "26px",
                  color: "var(--logra-gray)",
                  margin: 0,
                  maxWidth: 280,
                }}
              >
                {col.body}
              </p>
            </div>
          </LograAppear>
        ))}
      </div>
    </section>
  );
}
