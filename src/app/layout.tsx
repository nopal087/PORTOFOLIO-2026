import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Muhammad Naufal Faruq | IT Support & Full Stack Developer",
  description: "Portfolio of Muhammad Naufal Faruq. IT Support & Full Stack Developer specializing in reliable enterprise systems (Next.js, Golang, PostgreSQL) and Agentic AI automation.",
  keywords: ["Muhammad Naufal Faruq", "Full Stack Developer", "IT Support", "Next.js", "Golang", "Agentic AI", "Portfolio", "Semarang", "Pekalongan"],
  authors: [{ name: "Muhammad Naufal Faruq" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800;1,900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-canvas text-ink font-body min-h-screen flex flex-col relative overflow-x-hidden antialiased selection:bg-black selection:text-brutal-yellow">
        {children}
      </body>
    </html>
  );
}
