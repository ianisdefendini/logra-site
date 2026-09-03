type Streak = {
  left: string;
  top: string;
  height: number;
};

const streaks: Streak[] = [
  { left: "8%", top: "-2%", height: 160 },
  { left: "16%", top: "18%", height: 120 },
  { left: "27%", top: "-6%", height: 140 },
  { left: "38%", top: "30%", height: 90 },
  { left: "62%", top: "8%", height: 110 },
  { left: "84%", top: "40%", height: 80 },
];

type Dot = {
  left: string;
  top: string;
};

const dots: Dot[] = [
  { left: "6%", top: "22%" },
  { left: "12%", top: "58%" },
  { left: "20%", top: "34%" },
  { left: "29%", top: "70%" },
  { left: "35%", top: "16%" },
  { left: "47%", top: "82%" },
  { left: "58%", top: "28%" },
  { left: "70%", top: "64%" },
  { left: "81%", top: "18%" },
  { left: "92%", top: "48%" },
];

export default function LograFooterCta() {
  return (
    <section style={{ background: "#111111", padding: "120px 20px 60px" }}>
      <style>{`
        @keyframes logra-streak-drift {
          0% { transform: rotate(45deg) translateY(0); opacity: 0.35; }
          50% { transform: rotate(45deg) translateY(14px); opacity: 0.2; }
          100% { transform: rotate(45deg) translateY(0); opacity: 0.35; }
        }
        .logra-footercta-streak {
          animation: logra-streak-drift 6s ease-in-out infinite;
        }
        .logra-footercta-btn { transition: background 0.2s ease; }
        .logra-footercta-btn:hover { background: #f0f0f0 !important; }
      `}</style>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          background: "#1167ff",
          borderRadius: 24,
          padding: "96px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {streaks.map((streak, i) => (
          <span
            key={`streak-${i}`}
            className="logra-footercta-streak"
            style={{
              position: "absolute",
              left: streak.left,
              top: streak.top,
              width: 1.5,
              height: streak.height,
              background:
                "linear-gradient(rgba(255,255,255,0.55), transparent)",
              opacity: 0.35,
              transform: "rotate(45deg)",
              animationDelay: `${i * 0.9}s`,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
        ))}
        {dots.map((dot, i) => (
          <span
            key={`dot-${i}`}
            style={{
              position: "absolute",
              left: dot.left,
              top: dot.top,
              width: 2,
              height: 2,
              borderRadius: "50%",
              background: "#fff",
              opacity: 0.4,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
        ))}

        <h2
          style={{
            fontFamily: "var(--font-logra-heading), Poppins, sans-serif",
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "-1.6px",
            lineHeight: "38.4px",
            color: "#f0f4f7",
            maxWidth: 640,
            margin: "0 auto",
            position: "relative",
          }}
        >
          Tu PyME crece más rápido con inteligencia artificial
        </h2>

        <p
          style={{
            fontFamily: "var(--font-logra-body), Inter, sans-serif",
            fontSize: 18,
            fontWeight: 400,
            color: "rgba(255,255,255,0.9)",
            maxWidth: 480,
            margin: "24px auto 0",
            position: "relative",
          }}
        >
          Ahorra tiempo, organiza tu semana y toma mejores decisiones. Crea tu
          cuenta gratis y empieza a ver resultados desde el primer día.
        </p>

        <a
          href="https://app.alkyo.ai/signup"
          className="logra-footercta-btn"
          style={{
            display: "inline-block",
            marginTop: 40,
            background: "#fff",
            color: "#111",
            fontFamily: "var(--font-logra-body), Inter, sans-serif",
            fontSize: 16,
            fontWeight: 500,
            borderRadius: 12,
            padding: "16px 28px",
            textDecoration: "none",
            position: "relative",
          }}
        >
          Crear mi cuenta gratis
        </a>
      </div>
    </section>
  );
}

export { LograFooterCta };
