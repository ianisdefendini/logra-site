import type { Metadata } from "next";
import { Figtree, Poppins, Inter } from "next/font/google";
import { LograI18nProvider } from "@/components/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/LograI18n";
import "./globals.css";
import "./logra.css";

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-logra-figtree",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-logra-poppins",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-logra-inter",
});

export const metadata: Metadata = {
  title: "La inteligencia artificial de las MiPyMEs de Latinoamérica",
  description:
    "Logra te ayuda a ahorrar tiempo y ser más eficiente para potencializar tu negocio.",
  icons: {
    icon: "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/images/favicon-Zf3g5LisfMTEkYWqFGkGNJDwIM.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="antialiased">
      <body style={{ margin: 0 }}>
        <div
          className={`${figtree.variable} ${poppins.variable} ${inter.variable} logra-site`}
        >
          <LograI18nProvider>{children}</LograI18nProvider>
        </div>
      </body>
    </html>
  );
}
