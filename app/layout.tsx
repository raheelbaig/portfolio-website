import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Anchor } from "@/components/patterns/anchor";
import { FooterShell } from "@/components/patterns/footer-shell";
import { shell } from "@/content/copy/shell";
import { metadataTitle, site } from "@/content/site";
import { siteUrl } from "@/lib/env";
import { color } from "@/styles/tokens";

/*
 * The three voices (01 §5.1) — serif = cinema, grotesk = the human connective
 * voice, mono = engineering. The pairing itself expresses the brand.
 *
 * All three are open-licensed stand-ins for the classes the brand system names;
 * the licensed families (Reckless/Canela-class display, Söhne-class grotesk)
 * are still an open decision — see 12 §5.14. Only the *class* is load-bearing,
 * so swapping a family later is a one-line change here.
 *
 * Self-hosted by next/font: subsetted to latin, preloaded, served same-origin,
 * with `display: swap` so text is never invisible while a face loads.
 */
const marquee = Playfair_Display({
  variable: "--font-src-marquee",
  subsets: ["latin"],
  display: "swap",
});

const plate = Inter({
  variable: "--font-src-plate",
  subsets: ["latin"],
  display: "swap",
});

const consoleVoice = JetBrains_Mono({
  variable: "--font-src-console",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: metadataTitle,
  description: site.tagline,
};

/* The room itself, so the browser chrome joins the world rather than framing it. */
export const viewport: Viewport = {
  themeColor: color["night-800"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${marquee.variable} ${plate.variable} ${consoleVoice.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#film"
          className="sr-only focus:not-sr-only focus:fixed focus:top-within-2 focus:left-safe focus:z-(--z-loader) focus:rounded-technical focus:bg-obsidian focus:px-within-2 focus:py-within-1 focus:font-technical focus:text-technical-sm focus:text-ivory-100"
        >
          {shell.skipToFilm}
        </a>
        {/*
         * The permanent identity anchor (04). It is chrome: fixed, outside the
         * 12-column content grid, and rendered once here so it is genuinely
         * continuous — it never remounts between routes or sections, which is
         * the whole thesis (04 §1.3).
         */}
        <Anchor />

        {/*
         * `anchor-offset` reserves the rail's width so the film never runs
         * beneath the chrome (02 §6.1). The film plane still sits above the
         * Crew's canvas (z-canvas < z-film).
         */}
        <div className="anchor-offset flex flex-1 flex-col">
          <main id="film" className="relative z-(--z-film) flex-1">
            {children}
          </main>
          <FooterShell />
        </div>
      </body>
    </html>
  );
}
