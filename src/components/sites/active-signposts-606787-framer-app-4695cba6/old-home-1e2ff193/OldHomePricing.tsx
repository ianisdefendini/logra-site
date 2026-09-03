const CTA_URL = "https://app.alkyo.ai/signup";

type Plan = {
  name: string;
  audience: string;
  price: string;
  features: string[];
  cta: string;
  ctaVariant: "gray" | "blue";
};

const plans: Plan[] = [
  {
    name: "Plan Gratuito:",
    audience: "Limitado a 2 Miembros",
    price: "$0",
    features: [
      "Inteligencia artificial entrenada para tu negocio",
      "Chats, tareas y tácticas ilimiatados con IA",
      "Organización y seguimiento de Tareas",
    ],
    cta: "Crear una cuenta",
    ctaVariant: "gray",
  },
  {
    name: "Plan Pro:",
    audience: "Para todo tu Equipo",
    price: "$14 USD/mes",
    features: [
      "Todo lo incluido en el Plan Gratuito",
      "Miembros de equipo ilimitado",
      "Asesoría de 30 minutos y soporte prioritario",
    ],
    cta: "Probar el Plan sin costo",
    ctaVariant: "blue",
  },
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 2 }}
      aria-hidden="true"
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

/** Old-home pricing — two wide plans (Gratuito / Pro). */
export function OldHomePricing() {
  return (
    <section style={{ background: "#faf9f7", padding: "100px 20px" }}>
      <style>{`
        .oh-pricing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 72px;
        }
        @media (max-width: 809px) {
          .oh-pricing-grid { grid-template-columns: 1fr; }
        }
        .oh-pricing-cta-gray {
          background: rgba(0, 0, 0, 0.08);
          color: #111;
          transition: background 0.2s ease;
        }
        .oh-pricing-cta-gray:hover { background: rgba(0, 0, 0, 0.14); }
        .oh-pricing-cta-blue {
          background: #004bbd;
          color: #fff;
          transition: background 0.2s ease;
        }
        .oh-pricing-cta-blue:hover { background: #003da3; }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "-1.6px",
            lineHeight: "38.4px",
            textAlign: "center",
            margin: 0,
          }}
        >
          <span style={{ display: "block", color: "#004bbd" }}>
            Nuestros Planes
          </span>
          <span style={{ display: "block", color: "#001f47" }}>
            Diseñado para crecer en Equipo.
          </span>
        </h2>

        <div className="oh-pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: "#fafafa",
                borderRadius: 16,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                minHeight: 420,
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily:
                      "var(--font-logra-display), Figtree, sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#4b5563",
                  }}
                >
                  {plan.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-logra-body), Inter, sans-serif",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#6b7280",
                  }}
                >
                  {" "}
                  {plan.audience}
                </span>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-logra-display), Figtree, sans-serif",
                  fontSize: 40,
                  fontWeight: 700,
                  color: "#111",
                  margin: "16px 0 24px",
                }}
              >
                {plan.price}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  flexGrow: 1,
                }}
              >
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                  >
                    <CheckIcon />
                    <span
                      style={{
                        fontFamily:
                          "var(--font-logra-body), Inter, sans-serif",
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#4b5563",
                        lineHeight: 1.4,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={CTA_URL}
                className={
                  plan.ctaVariant === "gray"
                    ? "oh-pricing-cta-gray"
                    : "oh-pricing-cta-blue"
                }
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  padding: 14,
                  borderRadius: 10,
                  marginTop: 32,
                  fontFamily: "var(--font-logra-body), Inter, sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
