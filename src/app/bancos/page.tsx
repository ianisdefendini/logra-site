import type { Metadata } from "next";
import { LograNavbar } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograNavbar";
import { BancosHero } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosHero";
import { BancosInstituciones } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosInstituciones";
import { BancosProblema } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosProblema";
import { BancosSolucionIntro } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosSolucionIntro";
import { BancosFeatureCards } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosFeatureCards";
import { BancosOportunidad } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosOportunidad";
import { BancosEcosistema } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosEcosistema";
import { BancosAgendaDemo } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosAgendaDemo";
import { BancosFooterCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosFooterCta";
import { BancosFooter } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/bancos-765bf59a/BancosFooter";

export const metadata: Metadata = {
  title: "Reduce el riesgo y aumenta la rentabilidad de tu cartera PyME",
  description:
    "Logra es la plataforma más simple e inteligente para ayudar a tus clientes PyME a mejorar su perfil financiero.",
};

export default function BancosPage() {
  return (
    <main style={{ background: "#faf9f7", overflowX: "clip" }}>
      <style>{`
        .bancos-btn-blue:hover { background: #003da3 !important; }
        .bancos-btn-outline:hover { background: rgba(0, 31, 71, 0.06) !important; }
      `}</style>
      <LograNavbar />
      <BancosHero />
      <BancosInstituciones />
      <BancosProblema />
      <BancosSolucionIntro />
      <BancosFeatureCards />
      <BancosOportunidad />
      <BancosEcosistema />
      <BancosAgendaDemo />
      <footer style={{ background: "#111111" }}>
        <BancosFooterCta />
        <BancosFooter />
      </footer>
    </main>
  );
}
