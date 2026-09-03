"use client";

import { useState, type CSSProperties } from "react";
import { LograLangSwitcher } from "./LograLangSwitcher";

const linkStyle: CSSProperties = {
  fontFamily: "var(--font-logra-body)",
  fontSize: 16,
  fontWeight: 400,
  color: "#111",
  textDecoration: "none",
  transition: "opacity 0.2s",
};

const btnBase: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 20px",
  borderRadius: 12,
  fontFamily: "var(--font-logra-body)",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "20px",
  textDecoration: "none",
  boxSizing: "border-box",
  transition: "background-color 0.2s",
  whiteSpace: "nowrap",
};

const centerLinks = [
  { label: "Micro y pequeñas empresas", href: "/" },
  { label: "Cámaras e Instituciones", href: "/camaras-e-instituciones" },
  { label: "Nosotros", href: "/sobre-nosotros" },
];

export function LograNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 82,
        background: "#faf9f7",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{`
        .logra-nav-link:hover { opacity: 0.65; }
        .logra-nav-login:hover { background: rgba(17,17,17,0.05) !important; }
        .logra-nav-signup:hover { background: #003da3 !important; }
        .logra-nav-desktop { display: flex; }
        .logra-nav-burger { display: none; }
        @media (max-width: 767px) {
          .logra-nav-desktop { display: none !important; }
          .logra-nav-burger { display: flex !important; }
        }
      `}</style>
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 82,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "var(--font-logra-display)",
            fontWeight: 700,
            fontSize: 26,
            letterSpacing: "-0.5px",
            color: "#111",
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          Logra
        </a>

        {/* center links (desktop) */}
        <nav
          className="logra-nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: 24 }}
        >
          {centerLinks.map((l) => (
            <a key={l.label} href={l.href} className="logra-nav-link" style={linkStyle}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* right buttons (desktop) */}
        <div
          className="logra-nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: 14 }}
        >
          <LograLangSwitcher />
          <a
            href="https://app.alkyo.ai/login"
            className="logra-nav-login"
            style={{
              ...btnBase,
              border: "1px solid #111",
              color: "#111",
              background: "transparent",
            }}
          >
            Iniciar sesión
          </a>
          <a
            href="https://app.alkyo.ai/signup"
            className="logra-nav-signup"
            style={{ ...btnBase, background: "#004bbd", color: "#fff" }}
          >
            Crear Cuenta
          </a>
        </div>

        {/* hamburger (mobile) */}
        <button
          className="logra-nav-burger"
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: 6,
            width: 40,
            height: 40,
            alignItems: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span style={{ display: "block", width: 24, height: 2, background: "#111" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#111" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#111" }} />
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: 82,
            left: 0,
            right: 0,
            background: "#faf9f7",
            display: "flex",
            flexDirection: "column",
            paddingBottom: 20,
            boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
          }}
        >
          {centerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="logra-nav-link"
              onClick={() => setOpen(false)}
              style={{ ...linkStyle, padding: "16px 20px" }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ padding: "8px 20px 0" }}>
            <LograLangSwitcher />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "8px 20px 0",
            }}
          >
            <a
              href="https://app.alkyo.ai/login"
              className="logra-nav-login"
              style={{
                ...btnBase,
                border: "1px solid #111",
                color: "#111",
                background: "transparent",
                width: "100%",
              }}
            >
              Iniciar sesión
            </a>
            <a
              href="https://app.alkyo.ai/signup"
              className="logra-nav-signup"
              style={{
                ...btnBase,
                background: "#004bbd",
                color: "#fff",
                width: "100%",
              }}
            >
              Crear Cuenta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
