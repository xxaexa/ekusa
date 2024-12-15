import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "andre eka - portfolio ",
  description:
    "Portfolio pribadi yang menampilkan proyek-proyek, pengalaman kerja, dan keahlian saya dalam pengembangan web dan aplikasi. Temukan lebih lanjut tentang saya dan pekerjaan yang telah saya lakukan.",
  keywords:
    "portfolio, developer, front-end, software engineer, full-stack developer, frontend, JavaScript, React, Next.js, TypeScript",
  authors: [{ name: "Andre Eka", url: "https://ekusa.my.id" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
