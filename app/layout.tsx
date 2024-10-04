import type { Metadata } from "next";
import { Lexend } from "next/font/google"
import "./globals.css";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const lexend = Lexend({ 
  subsets: ["latin" ]
})

export const metadata: Metadata = {
  title: "AnwrSyd",
  description: "Using Next.JS Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-800 ${lexend.className} text-gray-200 antialiased`}
      >
        <Header/>
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
