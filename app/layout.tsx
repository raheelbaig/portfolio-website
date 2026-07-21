import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { shell } from "@/content/copy/shell";
import { metadataTitle, site } from "@/content/site";
import { siteUrl } from "@/lib/env";
import { color } from "@/styles/tokens";

/*
 * The two families of the film (Bible §3). Archivo stands in for the
 * Söhne/Neue Haas-class grotesk until a licensing decision; JetBrains Mono
 * is named by the Bible for the Technical voice. Self-hosted via next/font:
 * subsetted, preloaded, with metric-compatible fallbacks (Architecture §10).
 */
const grotesk = Archivo({
  variable: "--font-src-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const technical = JetBrains_Mono({
  variable: "--font-src-technical",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: metadataTitle,
  description: site.tagline,
};

export const viewport: Viewport = {
  themeColor: color["stage-black"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${technical.variable}`}>
      <body>
        <a href="#film">{shell.skipToFilm}</a>
        <header>
          <nav aria-label={shell.navLabel}>
            <p>{shell.navPlaceholder}</p>
          </nav>
        </header>
        <main id="film">{children}</main>
        <footer>
          <p>{shell.footerPlaceholder}</p>
        </footer>
      </body>
    </html>
  );
}
