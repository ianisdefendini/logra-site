import { LograNavbar } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograNavbar";
import { LograFooterCta } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooterCta";
import { LograFooter } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograFooter";
import { LograSignUpHero } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/sign-up-04b315d4/LograSignUpHero";

export default function LograSignUpPage() {
  return (
    <main style={{ background: "#faf9f7", overflowX: "clip" }}>
      <LograNavbar />
      <LograSignUpHero />
      <footer style={{ background: "#111111" }}>
        <LograFooterCta />
        <LograFooter />
      </footer>
    </main>
  );
}
