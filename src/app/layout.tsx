import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LineWavesBackground } from "@/components/background/LineWavesBackground";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { PageTransitionProvider } from "@/components/animations/PageTransitionProvider";
import { GateProvider } from "@/components/project-gate/GateContext";
import { ProjectGate } from "@/components/project-gate/ProjectGate";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <GateProvider>
            <LineWavesBackground />
            <div className="relative z-10">
              <Navbar />
              <main className="flex-1">
                <PageTransitionProvider>{children}</PageTransitionProvider>
              </main>
              <Footer />
            </div>
            <ProjectGate />
          </GateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
