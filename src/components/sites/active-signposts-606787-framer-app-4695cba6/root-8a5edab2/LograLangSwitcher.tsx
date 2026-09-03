"use client";

import { useEffect, useRef } from "react";
import { useLograLang } from "./LograI18n";
import type { LograLang } from "./logra-dict";

function FlagES({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 2) / 3)}
      viewBox="0 0 3 2"
      style={{ borderRadius: 3, display: "block", flex: "none" }}
      aria-hidden="true"
    >
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>
  );
}

function FlagFR({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 2) / 3)}
      viewBox="0 0 3 2"
      style={{ borderRadius: 3, display: "block", flex: "none" }}
      aria-hidden="true"
    >
      <rect width="3" height="2" fill="#fff" />
      <rect width="1" height="2" fill="#002395" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  );
}

function FlagEN({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 2) / 3)}
      viewBox="0 0 60 40"
      style={{ borderRadius: 3, display: "block", flex: "none" }}
      aria-hidden="true"
    >
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
      <rect x="25" width="10" height="40" fill="#fff" />
      <rect y="15" width="60" height="10" fill="#fff" />
      <rect x="27" width="6" height="40" fill="#C8102E" />
      <rect y="17" width="60" height="6" fill="#C8102E" />
    </svg>
  );
}

const LANGS: { code: LograLang; label: string; Flag: typeof FlagES }[] = [
  { code: "es", label: "Español", Flag: FlagES },
  { code: "fr", label: "Français", Flag: FlagFR },
  { code: "en", label: "English", Flag: FlagEN },
];

export function LograLangSwitcher() {
  const { lang, setLang } = useLograLang();
  const ref = useRef<HTMLDetailsElement>(null);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];
  const CurFlag = current.Flag;

  // close the dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = ref.current;
      if (el && el.open && !el.contains(e.target as Node)) el.open = false;
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <details ref={ref} style={{ position: "relative" }}>
      <summary
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          fontFamily: "var(--font-logra-body), Inter, sans-serif",
          fontSize: 14,
          fontWeight: 600,
          color: "#111",
          padding: "6px 4px",
          cursor: "pointer",
          listStyle: "none",
          userSelect: "none",
        }}
      >
        <CurFlag />
        <span>{lang.toUpperCase()}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "calc(100% + 10px)",
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          boxShadow: "0 10px 30px -12px rgba(0,0,0,0.25)",
          padding: 6,
          minWidth: 170,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 80,
        }}
      >
        {LANGS.map(({ code, label, Flag }) => (
          <button
            key={code}
            type="button"
            onClick={() => {
              setLang(code);
              if (ref.current) ref.current.open = false;
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "none",
              background: code === lang ? "#001f47" : "transparent",
              color: code === lang ? "#fff" : "#6b7280",
              borderRadius: 8,
              padding: "8px 12px",
              cursor: "pointer",
              fontFamily: "var(--font-logra-body), Inter, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            <Flag />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </details>
  );
}
