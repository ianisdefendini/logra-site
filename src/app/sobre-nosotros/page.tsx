import type { Metadata } from "next";
import { LograNavbar } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograNavbar";
import { LograFooterCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooterCta";
import { LograFooter } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooter";
import { SobreHero } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/sobre-nosotros-780d001d/SobreHero";
import { SobreProblema } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/sobre-nosotros-780d001d/SobreProblema";
import { SobreComo } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/sobre-nosotros-780d001d/SobreComo";
import { SobreEquipo } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/sobre-nosotros-780d001d/SobreEquipo";
import { SobreCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/sobre-nosotros-780d001d/SobreCta";

export const metadata: Metadata = {
  title: "Alkyo - Organiza y crece tu negocio con IA",
  description:
    "En Alkyo, creemos en el poder de las PyMEs para transformar Latinoamérica.",
};

export default function LograSobreNosotrosPage() {
  return (
    <main style={{ background: "#FFFFFF", overflowX: "clip" }}>
      <LograNavbar />
      <SobreHero />
      <SobreProblema />
      <SobreComo />
      <SobreEquipo />
      <SobreCta />
      <footer style={{ background: "#0A1A33" }}>
        <LograFooterCta />
        <LograFooter />
      </footer>
    </main>
  );
}
