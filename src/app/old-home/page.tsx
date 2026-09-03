import type { Metadata } from "next";

import { LograNavbar } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograNavbar";
import { LograHeroImage } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograHeroImage";
import LograLogosTicker from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograLogosTicker";
import LograTestimonios from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograTestimonios";
import { LograFooterCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooterCta";
import { LograFooter } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooter";

import { OldHomeHero } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/old-home-1e2ff193/OldHomeHero";
import { OldHomeProblema } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/old-home-1e2ff193/OldHomeProblema";
import { OldHomeSolucion } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/old-home-1e2ff193/OldHomeSolucion";
import { OldHomeFuncionalidades } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/old-home-1e2ff193/OldHomeFuncionalidades";
import { OldHomeBeneficios } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/old-home-1e2ff193/OldHomeBeneficios";
import { OldHomePricing } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/old-home-1e2ff193/OldHomePricing";
import { OldHomeComunidad } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/old-home-1e2ff193/OldHomeComunidad";

export const metadata: Metadata = {
  title: "Logra - Organiza y crece tu negocio con IA",
};

export default function LograOldHomePage() {
  return (
    <main style={{ background: "#faf9f7", overflowX: "clip" }}>
      <LograNavbar />
      <OldHomeHero />
      <LograHeroImage />
      <OldHomeProblema />
      <OldHomeSolucion />
      <OldHomeFuncionalidades />
      <LograLogosTicker />
      <LograTestimonios />
      <OldHomeBeneficios />
      <OldHomePricing />
      <OldHomeComunidad />
      <footer style={{ background: "#111111" }}>
        <LograFooterCta />
        <LograFooter />
      </footer>
    </main>
  );
}
