import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LograI18nProvider } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograI18n";
import "./globals.css";
import "./logra.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-logra-inter",
});

export const metadata: Metadata = {
  title: "Alkyo — La inteligencia artificial de las MiPyMEs de Latinoamérica",
  description:
    "Alkyo te ayuda a ahorrar tiempo y ser más eficiente para potencializar tu negocio.",
  applicationName: "Alkyo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="antialiased">
      <body style={{ margin: 0 }}>
        <div className={`${inter.variable} logra-site`}>
          <LograI18nProvider>{children}</LograI18nProvider>
        </div>
      </body>
    </html>
  );
}
