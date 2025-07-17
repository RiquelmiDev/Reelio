import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/_components/footer";
import { Toaster } from "@/_components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reelio",
  description: "Reelio é uma aplicação web para catálogo de filmes, permitindo aos usuários visualizar detalhes, favoritar e comentar sobre filmes. Utiliza Next.js, React, TailwindCSS e integrações modernas para UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#141518" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex h-screen flex-col">
          <section className="flex-1">{children}</section>
            <Footer />
            <Toaster />
        </main>
      </body>
    </html>
  );
}
