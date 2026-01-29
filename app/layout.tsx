import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloopa Portal - Agency OS",
  description: "Agency Operations System for Bloopa Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
