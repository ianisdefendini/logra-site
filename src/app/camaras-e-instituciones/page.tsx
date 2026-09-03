import type { Metadata } from "next";
import { LograNavbar } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograNavbar";
import { CamarasHero } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasHero";
import { CamarasInstituciones } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasInstituciones";
import { CamarasComoFunciona } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasComoFunciona";
import { CamarasFeatureCards } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasFeatureCards";
import { CamarasProblema } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasProblema";
import { CamarasSolucion } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasSolucion";
import { CamarasExperiencia } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasExperiencia";
import { CamarasAgendaDemo } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasAgendaDemo";
import { CamarasFooterCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasFooterCta";
import { CamarasFooter } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/camaras-e-instituciones-240ddbf8/CamarasFooter";

export const metadata: Metadata = {
  title: "Capacita tus MiPyMEs y dales acceso a inteligencia artificial",
  description:
    "Logra es una solución llave en mano que impulsa a tus afiliados y te da acceso a datos increíbles para entenderlos mejor.",
};

export default function CamarasEInstitucionesPage() {
  return (
    <main style={{ background: "#faf9f7", overflowX: "clip" }}>
      <style>{`
        .cam-btn-blue:hover { background: #003da3 !important; }
      `}</style>
      <LograNavbar />
      <CamarasHero />
      <CamarasInstituciones />
      <CamarasComoFunciona />
      <CamarasFeatureCards />
      <CamarasProblema />
      <CamarasSolucion />
      <CamarasExperiencia />
      <CamarasAgendaDemo />
      <footer style={{ background: "#111111" }}>
        <CamarasFooterCta />
        <CamarasFooter />
      </footer>
    </main>
  );
}
