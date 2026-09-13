import { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import CommandPaletteProvider from "./components/CommandPaletteProvider";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Udhaya Kumar",
  description: "Staff Backend Engineer with 13+ years building production systems and data platforms.",
  authors: [{ name: "Udhayakumar" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Udhaya Kumar",
    description: "Staff Backend Engineer with 13+ years building production systems and data platforms.",
    url: "https://udhayakumar.com",
    siteName: "Udhaya Kumar",
    type: "website",
    images: [
      {
        url: "https://udhayakumar.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Udhaya Kumar — Staff Backend Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `
    (function() {
      const saved = localStorage.getItem('theme');
      const theme = saved || 'light';
      document.documentElement.setAttribute('data-theme', theme);
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning className={`${ibmPlexSans.variable} ${bricolageGrotesque.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DDRCFD4HSF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DDRCFD4HSF');
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link sr-only">Skip to content</a>
        <CommandPaletteProvider>
          <Header />
          <main id="main-content" className="mx-auto max-w-[860px] px-5 pt-20">
            {children}
          </main>
          <Footer />
          <CommandPalette />
        </CommandPaletteProvider>
        <button
          id="back-to-top"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 w-12 h-12 border border-rule bg-bg text-ink cursor-pointer rounded text-20 hidden z-[999] transition-all duration-200 hover:border-accent hover:text-accent"
        >
          ↑
        </button>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const backToTopBtn = document.getElementById('back-to-top');
              window.addEventListener('scroll', () => {
                backToTopBtn.classList.toggle('hidden', window.scrollY <= 300);
              });
              backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
