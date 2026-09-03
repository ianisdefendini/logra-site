/* eslint-disable @next/next/no-img-element */

const IMG_BASE =
  "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images";

type Avatar = {
  file: string;
  left: string;
  top: string;
  size: number;
};

/* Same avatar collage as the current home's community section. */
const avatars: Avatar[] = [
  { file: "5TgV8nsRkhpK2pwcgLv188YSrJ0.png", left: "6%", top: "8%", size: 40 },
  { file: "q5jWY2reilkBQhGTQ2JXdlhrw8.png", left: "15%", top: "15%", size: 56 },
  { file: "kNpfN94dPv4CChcHGsDFqo21o.png", left: "27%", top: "8%", size: 48 },
  { file: "oanQxyvIj9XQfoaraPlOHoH4aU.png", left: "36%", top: "9%", size: 44 },
  { file: "rmPQy1G24i0TwdhPM464HoOAd0.png", left: "46%", top: "5%", size: 36 },
  { file: "1uF8mDRRcKY79fWbpj9xjXHkw.png", left: "53%", top: "13%", size: 62 },
  { file: "2kLjj3kyClQd4dTRZEgyCiplw.png", left: "65%", top: "19%", size: 50 },
  { file: "T9MoEoGW55vh0SvOISl3kVbzUyQ.png", left: "76%", top: "10%", size: 42 },
  { file: "WATKmbkMitKw1UmkzzW3tdRak.png", left: "90%", top: "4%", size: 38 },
  { file: "8qr2flYjr5VziFifRRRmLjRUvt0.png", left: "86%", top: "26%", size: 78 },
  { file: "uZW29qHBj2CNrSgVJBTiyw2g1OI.png", left: "5%", top: "52%", size: 54 },
  { file: "bGO47GsvxkJwMogdkmvXcOdlCs.png", left: "14%", top: "46%", size: 90 },
  { file: "tXvP6vyTMVQ25kNqnUADoDJ0.png", left: "28%", top: "50%", size: 46 },
  { file: "GNXIOVfGW9PTQCDRvjqJwoD1620.png", left: "37%", top: "54%", size: 82 },
  { file: "ucC43EcJfz9aNLlu2w08xWTb4.png", left: "52%", top: "50%", size: 46 },
  { file: "W8Zhn8R8oXgWoJjJmW7GrnePq8c.png", left: "64%", top: "60%", size: 76 },
  { file: "vAHjkqcHOOLWCAWdDgGMPQh2mM.png", left: "8%", top: "80%", size: 42 },
  { file: "fcL7x5ddWwonYK3toIzA4PhJdNQ.png", left: "40%", top: "82%", size: 58 },
];

function GlobeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#004bbd"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" />
    </svg>
  );
}

/** Old-home "La Comunidad" section — CTA text + avatar collage. */
export function OldHomeComunidad() {
  return (
    <section style={{ background: "#faf9f7", padding: "100px 20px 120px" }}>
      <style>{`
        .oh-comunidad-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .oh-comunidad-collage { height: 400px; }
        @media (max-width: 809px) {
          .oh-comunidad-grid { grid-template-columns: 1fr; }
          .oh-comunidad-collage { height: 320px; }
        }
      `}</style>
      <div className="oh-comunidad-grid">
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              border: "1px solid #e5e7eb",
              background: "#fff",
              borderRadius: 40,
              padding: "6px 12px",
            }}
          >
            <GlobeIcon />
            <span
              style={{
                fontFamily: "var(--font-logra-body), Inter, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "#001f47",
              }}
            >
              La Comunidad
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-1.6px",
              lineHeight: "38.4px",
              color: "#001f47",
              maxWidth: 560,
              margin: "24px 0 0",
            }}
          >
            Conéctate y crece con nuestra comunidad de PyMEs
          </h2>

          <p
            style={{
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 18,
              fontWeight: 400,
              color: "#6b7280",
              lineHeight: 1.55,
              maxWidth: 560,
              margin: "20px 0 0",
            }}
          >
            Encuentra aliados estratégicos, nuevos clientes y proveedores
            confiables para crecer juntos. Más conexiones, oportunidades y
            éxito.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 40,
            }}
          >
            <a
              href="#"
              style={{
                display: "inline-block",
                border: "1px solid #111",
                borderRadius: 12,
                padding: "14px 20px",
                background: "transparent",
                color: "#111",
                fontFamily: "var(--font-logra-body), Inter, sans-serif",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Ver demo
            </a>
            <a
              href="/sign-up"
              style={{
                display: "inline-block",
                background: "#004bbd",
                color: "#fff",
                borderRadius: 12,
                padding: "14px 20px",
                fontFamily: "var(--font-logra-body), Inter, sans-serif",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Crear cuenta
            </a>
          </div>
        </div>

        <div
          className="oh-comunidad-collage"
          style={{
            background: "#dbe4eb",
            borderRadius: 16,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {avatars.map((avatar) => (
            <img
              key={avatar.file}
              src={`${IMG_BASE}/${avatar.file}`}
              alt=""
              style={{
                position: "absolute",
                left: avatar.left,
                top: avatar.top,
                width: avatar.size,
                height: avatar.size,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
