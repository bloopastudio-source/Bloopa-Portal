import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloopa Agency OS",
  description: "Internal operating system for Bloopa Agency"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}