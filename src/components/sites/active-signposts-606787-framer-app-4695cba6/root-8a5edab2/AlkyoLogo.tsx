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

/** Original Logra wordmark (vector, from the Logra site). */
export function LograLogo({
  height = 16,
  color = NAVY,
}: {
  height?: number;
  color?: string;
}) {
  return (
    <svg
      height={height}
      width={(height * 1005.72) / 439.58}
      viewBox="0 0 1005.72 439.58"
      aria-hidden="true"
      style={{ display: "block", flex: "none" }}
    >
      <path
        fill={color}
        d="M0 275.87V331h181.84v-55.13H0ZM62.72 0H.05v220.7h62.67V0Zm250.73 95.33c-71.06 0-122.26 50.76-122.26 121.38 0 70.19 51.2 121.39 122.26 121.39s122.7-51.2 122.7-121.39c0-70.62-51.64-121.38-122.7-121.38Zm0 188c-35.75 0-60.47-27.82-60.47-67.54 0-39.29 24.72-66.65 60.47-66.650 36.19 0 60.47 27.36 60.47 66.65 0 39.76-24.28 67.58-60.47 67.58v-.04Zm241.6-19.84c60.91 0 100.63-31.78 100.63-81.65 0-25.6-9.27-46.78-25.6-62.23l31.78-53.85-49.430-25.6-33.1 56.5a141.28 141.28 0 0 0-24.28-2.21c-61.36 0-100.64 34-100.640 87.39 0 30.9 15 54.75 41 68.43-7.94 6.16-14.12 15.89-14.12 27.8 0 9.27 3.53 17.66 13.24 24.72-28.69 13.24-40.61 35.75-40.61 60 0 48.1 41.49 76.79 101.09 76.79 59.15 0 100.63-28.69 100.63-76.79 0-46.79-38.84-74.59-94.45-74.59H550.6c-8.83 0-15-4-15-12.36a18.008 18.008 0 0 1 5.3-12.8c4.44.45 9.3.45 14.15.45Zm-2.2 68h4c21.62 0 39.72 10.59 39.72 31.34 0 20.3-17.65 32.21-41.49 32.21s-41.49-11.91-41.49-32.21c-.03-20.76 19.39-31.35 39.26-31.35v.01Zm-40.13-149.65c0-23.39 17.22-38 42.37-38 26 0 42.81 14.57 42.81 38 0 22.95-17.21 37.08-42.81 37.08-24.75 0-42.37-14.13-42.37-37.08Zm174.54-79.44V331h61.8V156.68h48.55V102.4H687.26Zm220.51-7.07c-39.73 0-71.06 12.36-92.25 36.64l28.69 40.6c15-15.89 31.78-24.27 55.17-24.27 29.57 0 48.11 16.77 48.11 42.37 0 8.38.44 15.45.88 25.6h-1.76c-12.8-13.69-30-19.86-56.5-19.86-47.67 0-79.89 27.8-79.89 71.07 0 42.81 31.34 70.62 77.68 70.62 26.93 0 49.88-10.59 58.26-29.130h1.77c-.44 4.85-.44 11-.44 15.89V331h58.23V189.34c0-57.81-38.37-94.01-97.95-94.01Zm.44 197.31c-22.51 0-36.64-10.61-36.64-27.37s14.13-27.38 36.64-27.38 37.07 10.61 37.07 27.38-14.56 27.37-37.07 27.37Z"
      />
    </svg>
  );
}

/** Full wordmark: custom A + "lkyo" set in Inter Bold, with optional
 *  tagline and "powered by Logra" lockup. */
export function AlkyoLogo({
  size = 30,
  tone = "dark",
  tagline = false,
  poweredBy = false,
}: {
  /** font-size of the wordmark in px */
  size?: number;
  tone?: "dark" | "light";
  tagline?: boolean;
  poweredBy?: boolean;
}) {
  const ink = tone === "dark" ? NAVY : "#FFFFFF";
  const muted = tone === "dark" ? "#6B7280" : "rgba(255,255,255,0.7)";
  return (
    <span
      role="img"
      aria-label={poweredBy ? "Alkyo, powered by Logra" : "Alkyo"}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: Math.round(size * 0.22),
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
      {poweredBy && (
        <span
          aria-hidden="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: Math.max(4, Math.round(size * 0.17)),
            fontFamily: "var(--font-logra-body), Inter, sans-serif",
            fontSize: Math.max(10, Math.round(size * 0.34)),
            fontWeight: 500,
            lineHeight: 1,
            color: muted,
            whiteSpace: "nowrap",
          }}
        >
          <span>powered by</span>
          <LograLogo height={Math.max(12, Math.round(size * 0.5))} color={ink} />
        </span>
      )}
    </span>
  );
}
