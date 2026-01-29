import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloopa Agency OS",
  description: "Agency Operating System for managing projects, clients, and teams",
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
