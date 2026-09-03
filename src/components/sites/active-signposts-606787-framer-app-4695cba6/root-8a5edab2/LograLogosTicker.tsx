/* eslint-disable @next/next/no-img-element */

const ASSET_BASE = "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images";

interface Logo {
  src: string;
  alt: string;
  height: number;
}

const LOGOS: Logo[] = [
  { src: `${ASSET_BASE}/WlCdErGYPnYZTzji02xo8kj1M4.png`, alt: "sKALA Tech SAS", height: 31 },
  { src: `${ASSET_BASE}/vuTbPeZ5o0fLPdKqqFjuNEiuUww.png`, alt: "DevBotic", height: 34 },
  { src: `${ASSET_BASE}/FVu4ilGQN38rxyZtaRMm3EPctQ.png`, alt: "True Flower", height: 41 },
  { src: `${ASSET_BASE}/qAW6r8xJiRMSfELIbbxFMnsyI.png`, alt: "autcol", height: 42 },
  { src: `${ASSET_BASE}/4dcFox8QXcZN73lLLWM0ET9UFxw.png`, alt: "ASENEG", height: 42 },
  { src: `${ASSET_BASE}/3IM5DyptlArblkWb1HSonZjnY4.webp`, alt: "Dieléctrics", height: 31 },
  { src: `${ASSET_BASE}/AIoLgufCNwW2uK4E4Irbgz0u5JY.png`, alt: "Mentor Go", height: 31 },
];

function LogoGroup() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 64,
        paddingRight: 64,
        flexShrink: 0,
      }}
    >
      {LOGOS.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          style={{
            height: logo.height,
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      ))}
    </div>
  );
}

export default function LograLogosTicker() {
  const mask =
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

  return (
    <section
      style={{
        background: "#faf9f7",
        padding: "60px 0 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-logra-display), Figtree, sans-serif",
          fontSize: 20,
          fontWeight: 600,
          color: "#111",
          textAlign: "center",
          margin: 0,
        }}
      >
        4000+ MiPyMES confían en nosotros
      </h3>

      <div
        style={{
          overflow: "hidden",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            animation: "logra-ticker 30s linear infinite",
          }}
        >
          <LogoGroup />
          <div aria-hidden="true" style={{ display: "contents" }}>
            <LogoGroup />
          </div>
        </div>
      </div>
    </section>
  );
}
