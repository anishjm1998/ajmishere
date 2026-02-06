import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Serif, Inter } from "next/font/google";

const serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Anish John Moothedam",
  description: "Full-stack Developer",
  metadataBase: new URL("https://anishjm1998.github.io/ajmishere"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
