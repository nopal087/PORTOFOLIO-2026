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
      <body suppressHydrationWarning className="bg-canvas text-ink font-body min-h-screen flex flex-col relative overflow-x-hidden antialiased selection:bg-black selection:text-brutal-yellow">
        {children}
      </body>
    </html>
  );
}
