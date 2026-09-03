/* eslint-disable @next/next/no-img-element */

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#fff"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V23H8V8z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#fff"
      aria-hidden="true"
    >
      <path d="M13.5 9H16l.5-3h-3V4.5c0-.87.25-1.5 1.6-1.5H16.6V.3c-.3-.04-1.3-.13-2.47-.13-2.44 0-4.13 1.49-4.13 4.23V6H7v3h3v14h3.5V9z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/lograio/",
    icon: <LinkedInIcon />,
  },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
];

const navLinks = [
  {
    label: "Plataforma para micro y pequeñas empresas",
    href: "/",
    underline: true,
  },
  {
    label: "Programa de productividad para Instituciones",
    href: "/camaras-e-instituciones",
    underline: false,
  },
  { label: "Sobre Nosotros", href: "/sobre-nosotros", underline: false },
];

export default function LograFooter() {
  return (
    <footer style={{ background: "#111111", padding: "40px 20px 60px" }}>
      <style>{`
        .logra-footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .logra-footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 28px;
        }
        .logra-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logra-footer-bottom-right { display: flex; gap: 40px; }
        .logra-footer-link { transition: opacity 0.2s ease; }
        .logra-footer-link:hover { opacity: 0.7; }
        @media (max-width: 809px) {
          .logra-footer-top {
            flex-direction: column;
            gap: 24px;
          }
          .logra-footer-links { align-items: flex-start; gap: 12px; }
          .logra-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .logra-footer-bottom-right {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="logra-footer-top">
          <div>
            <span
              style={{
                fontFamily: "var(--font-logra-display)",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "#fff",
                lineHeight: "28px",
                display: "block",
              }}
            >
              Logra
            </span>
            <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="logra-footer-link"
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="logra-footer-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="logra-footer-link"
                style={{
                  fontFamily: "var(--font-logra-body), Inter, sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#f0f4f7",
                  textDecoration: link.underline ? "underline" : "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            margin: "48px 0 32px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        />

        <div
          className="logra-footer-bottom"
          style={{
            fontFamily: "var(--font-logra-body), Inter, sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <span>DigitizeMe Inc. 2025 © Todos los derechos reservados.</span>
          <div className="logra-footer-bottom-right">
            <a
              href="/aviso-de-privacidad"
              className="logra-footer-link"
              style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
            >
              Aviso de Privacidad
            </a>
            <a
              href="/terminos-y-condiciones"
              className="logra-footer-link"
              style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { LograFooter };
