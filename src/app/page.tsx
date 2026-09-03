import { LograNavbar } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograNavbar";
import { LograHero } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograHero";
import { LograHeroImage } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograHeroImage";
import LograLogosTicker from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograLogosTicker";
import LograTestimonios from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograTestimonios";
import { LograSolucion } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograSolucion";
import { LograFuncionalidades } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFuncionalidades";
import { LograUrgencia } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograUrgencia";
import { LograBeneficios } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograBeneficios";
import { LograPricing } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograPricing";
import { LograOportunidad } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograOportunidad";
import { LograFooterCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooterCta";
import { LograFooter } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooter";

export default function LograHomePage() {
  return (
    <main style={{ background: "#faf9f7", overflowX: "clip" }}>
      <LograNavbar />
      <LograHero />
      <LograHeroImage />
      <LograLogosTicker />
      <LograTestimonios />
      <LograSolucion />
      <LograFuncionalidades />
      <LograUrgencia />
      <LograBeneficios />
      <LograPricing />
      <LograOportunidad />
      <footer style={{ background: "#111111" }}>
        <LograFooterCta />
        <LograFooter />
      </footer>
    </main>
  );
}
