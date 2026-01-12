import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dokumen Mainan",
  description: "Dokumen interaktif bertema permainan untuk menginspirasi imajinasi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
