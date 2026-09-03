import type { Metadata } from "next";
import { LograNavbar } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograNavbar";
import { InstHero } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstHero";
import { InstLogos } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstLogos";
import { InstProblema } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstProblema";
import { InstSolucion } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstSolucion";
import { InstFeatureCards } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstFeatureCards";
import { InstOportunidad } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstOportunidad";
import { InstEcosistema } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstEcosistema";
import { InstAgendaDemo } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstAgendaDemo";
import { InstFooterCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstFooterCta";
import { InstFooter } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/instituciones-dc591eb2/InstFooter";

export const metadata: Metadata = {
  title: "Impulsa el crecimiento de tus PyMEs y fortalece tu impacto",
  description:
    "Logra es la plataforma más simple e inteligente para ayudar a tus clientes PyME a ser más productivos.",
};

export default function InstitucionesPage() {
  return (
    <main style={{ background: "#faf9f7", overflowX: "clip" }}>
      <style>{`
        .inst-btn-blue:hover { background: #003da3 !important; }
      `}</style>
      <LograNavbar />
      <InstHero />
      <InstLogos />
      <InstProblema />
      <InstSolucion />
      <InstFeatureCards />
      <InstOportunidad />
      <InstEcosistema />
      <InstAgendaDemo />
      <footer style={{ background: "#111111" }}>
        <InstFooterCta />
        <InstFooter />
      </footer>
    </main>
  );
}
