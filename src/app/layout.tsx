import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinzón & Pinzón Asociados | Firma de Abogados en Panamá",
  description:
    "Firma de abogados en Ciudad de Panamá con más de 20 años de experiencia en derecho corporativo, civil, familiar, penal, laboral e inmobiliario. Consulta gratuita.",
  keywords: "abogados panama, firma de abogados panama, derecho corporativo panama, pinzon asociados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
