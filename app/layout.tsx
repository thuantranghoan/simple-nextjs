import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Next.js App",
  description: "A simple Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
