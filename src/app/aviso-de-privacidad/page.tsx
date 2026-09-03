import type { Metadata } from "next";
import { LograNavbar } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograNavbar";
import { LograFooterCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooterCta";
import { LograFooter } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooter";
import { LegalAviso } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/aviso-de-privacidad-d0bae5b8/LegalAviso";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
};

export default function LograAvisoDePrivacidadPage() {
  return (
    <main style={{ background: "#faf9f7", overflowX: "clip" }}>
      <LograNavbar />
      <LegalAviso />
      <footer style={{ background: "#111111" }}>
        <LograFooterCta />
        <LograFooter />
      </footer>
    </main>
  );
}
