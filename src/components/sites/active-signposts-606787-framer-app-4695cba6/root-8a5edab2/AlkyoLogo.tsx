import type { CSSProperties } from "react";

const NAVY = "#0A1A33";
const BLUE = "#2563EB";

/** The Alkyo "A": a crossbar-less apex with the blue arrowhead inside.
 *  Drawn on a 100×100 grid so it scales with the surrounding type. */
export function AlkyoMark({
  width = 28,
  height = 28,
  color = NAVY,
  accent = BLUE,
  style,
}: {
  width?: number | string;
  height?: number | string;
  color?: string;
  accent?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      aria-hidden="true"
      style={{ display: "block", flex: "none", ...style }}
    >
      <path d="M50 0 100 100H80L50 40 20 100H0Z" fill={color} />
      <path d="M50 54 67 100 50 89 33 100Z" fill={accent} />
    </svg>
  );
}

/** Full wordmark: custom A + "lkyo" set in Inter Bold, optional tagline. */
export function AlkyoLogo({
  size = 30,
  tone = "dark",
  tagline = false,
}: {
  /** font-size of the wordmark in px */
  size?: number;
  tone?: "dark" | "light";
  tagline?: boolean;
}) {
  const ink = tone === "dark" ? NAVY : "#FFFFFF";
  return (
    <span
      role="img"
      aria-label="Alkyo"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: Math.round(size * 0.28),
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          fontFamily: "var(--font-logra-body), Inter, sans-serif",
          fontSize: size,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.045em",
          color: ink,
        }}
      >
        <AlkyoMark width="0.82em" height="0.76em" color={ink} />
        <span style={{ marginLeft: "0.03em" }}>lkyo</span>
      </span>
      {tagline && (
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-logra-body), Inter, sans-serif",
            fontSize: Math.max(11, Math.round(size * 0.4)),
            fontWeight: 600,
            letterSpacing: "0.16em",
            lineHeight: 1,
            color: BLUE,
            whiteSpace: "nowrap",
          }}
        >
          IMPROVE. LEAD. WIN.
        </span>
      )}
    </span>
  );
}
