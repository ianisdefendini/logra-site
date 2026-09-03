/* eslint-disable @next/next/no-img-element */
import { LograAppear } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograAppear";

const ASSETS = "/sites/active-signposts-606787-framer-app-4695cba6";

const programs = [
  {
    label: "Talento Pyme",
    href: "https://app.alkyo.ai/signup",
    logo: `${ASSETS}/sign-up-04b315d4/images/BuM5qEehuoJdtJmCUut32yTE6pA.png`,
    logoAlt: "Davivienda",
  },
  {
    label: "MiPYME + Crecimiento",
    href: "https://app.alkyo.ai/signup",
    logo: `${ASSETS}/sign-up-04b315d4/images/h1atFql9X1lUzwZkQbtQWQcnHA.png`,
    logoAlt: "Colsubsidio",
  },
];

const avatars = [
  `${ASSETS}/root-8a5edab2/images/GNXIOVfGW9PTQCDRvjqJwoD1620.png`,
  `${ASSETS}/root-8a5edab2/images/kNpfN94dPv4CChcHGsDFqo21o.png`,
  `${ASSETS}/root-8a5edab2/images/tXvP6vyTMVQ25kNqnUADoDJ0.png`,
  `${ASSETS}/root-8a5edab2/images/8qr2flYjr5VziFifRRRmLjRUvt0.png`,
];

export default function LograSignUpHero() {
  return (
    <section style={{ background: "#faf9f7", paddingTop: 82 }}>
      <style>{`
        .logra-signup-hero {
          display: flex;
          flex-direction: row;
          min-height: 900px;
        }
        .logra-signup-content {
          flex: 1 1 40%;
          min-width: 0;
          padding: 156px 40px 80px min(88px, 6.1vw);
          box-sizing: border-box;
        }
        .logra-signup-image {
          flex: 0 0 60%;
          width: 60%;
          min-width: 0;
          max-width: 60%;
          min-height: 100%;
          object-fit: cover;
          display: block;
        }
        .logra-signup-h2 {
          font-family: var(--font-logra-heading), Poppins, sans-serif;
          font-size: 48px;
          font-weight: 500;
          letter-spacing: -2.4px;
          line-height: 1.1;
          color: #001f47;
          margin: 0;
          max-width: 420px;
        }
        .logra-signup-sub {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: #6b7280;
          margin: 24px 0 0;
          max-width: 460px;
        }
        .logra-signup-programs {
          display: flex;
          flex-wrap: wrap;
          gap: 24px 36px;
          margin-top: 28px;
        }
        .logra-signup-program {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }
        .logra-signup-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #004bbd;
          color: #fff;
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          border-radius: 12px;
          padding: 12px 20px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s ease;
        }
        .logra-signup-btn:hover { background: #003da3; }
        .logra-signup-avatars {
          display: flex;
          align-items: center;
          margin-top: 40px;
          gap: 16px;
        }
        .logra-signup-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 3px solid #111;
          box-sizing: content-box;
          object-fit: cover;
          display: block;
          background: #fff;
        }
        .logra-signup-avatar-link { display: block; line-height: 0; }
        .logra-signup-avatar-link + .logra-signup-avatar-link,
        .logra-signup-plus2k-wrap { margin-left: -14px; }
        .logra-signup-plus2k {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 3px solid #111;
          box-sizing: content-box;
          background: #272b2d;
          color: #fff;
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logra-signup-joined {
          font-family: var(--font-logra-body), Inter, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.55;
          color: #9ca3af;
          max-width: 170px;
          margin: 0;
        }
        @media (max-width: 809px) {
          .logra-signup-hero {
            flex-direction: column;
            min-height: 0;
          }
          .logra-signup-content {
            flex: none;
            padding: 48px 20px 120px;
          }
          .logra-signup-br { display: none; }
          .logra-signup-h2 {
            font-size: min(34px, 7.8vw);
            letter-spacing: -1.7px;
            max-width: none;
          }
          .logra-signup-sub { font-size: 19px; }
          .logra-signup-programs { gap: 20px 16px; margin-top: 36px; }
          .logra-signup-program img {
            width: 124px !important;
            height: 38px !important;
          }
          .logra-signup-btn { padding: 13px 12px; font-size: 15px; }
          .logra-signup-avatars { margin-top: 48px; gap: 16px; }
          .logra-signup-image {
            flex: none;
            width: 100%;
            max-width: 100%;
            height: 390px;
            min-height: 0;
          }
        }
      `}</style>
      <div className="logra-signup-hero">
        <div className="logra-signup-content">
          <LograAppear>
            <h2 className="logra-signup-h2">
              Selecciona <br className="logra-signup-br" />
              tu programa
            </h2>
            <p className="logra-signup-sub">
              Da clic al botón de tu institución para iniciar sesión o
              regístrate al programa.
            </p>

            <div className="logra-signup-programs">
              {programs.map((program) => (
                <div key={program.label} className="logra-signup-program">
                  <a href={program.href} className="logra-signup-btn">
                    {program.label}
                  </a>
                  <img
                    src={program.logo}
                    alt={program.logoAlt}
                    width={138}
                    height={42}
                    style={{ display: "block", width: 138, height: 42 }}
                  />
                </div>
              ))}
            </div>

            <div className="logra-signup-avatars">
              <div style={{ display: "flex", alignItems: "center" }}>
                {avatars.map((src, i) => (
                  <a
                    key={src}
                    href="https://x.com/nandimuzsik"
                    className="logra-signup-avatar-link"
                    aria-label={`Empresario ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt=""
                      width={44}
                      height={44}
                      className="logra-signup-avatar"
                    />
                  </a>
                ))}
                <span className="logra-signup-plus2k-wrap">
                  <span className="logra-signup-plus2k">+2k</span>
                </span>
              </div>
              <p className="logra-signup-joined">
                +2000 empresarios ya se unieron
              </p>
            </div>
          </LograAppear>
        </div>

        <img
          src={`${ASSETS}/sign-up-04b315d4/images/lUbc34J729HRoHLM6jQA7oeFE4.jpg`}
          alt="Calle colonial con arcos y montañas al fondo"
          className="logra-signup-image"
        />
      </div>
    </section>
  );
}

export { LograSignUpHero };
