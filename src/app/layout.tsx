import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NPL DEV | Portfolio",
  description: "IT Support & Full Stack Developer. I build brutal, beautiful, and highly functional digital experiences. Let's make something loud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Archivo+Narrow:wght@400;500;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="bg-background bg-dots text-on-background font-body-md min-h-screen flex flex-col relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
