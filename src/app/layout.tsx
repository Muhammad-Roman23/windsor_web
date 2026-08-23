import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import {ThemeProvider} from "@/components/layout/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* Gordita is a licensed face. Outfit is wired to --font-gordita so you can
   drop local Gordita files later without changing any component classes. */
const gordita = Outfit({
  subsets: ["latin"],
  variable: "--font-gordita",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Windsor",
  description: "Quiet luxury, made visible.",
    alternates: {
    canonical: "http://localhost:3000/",
  },  

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${gordita.variable} h-full antialiased`}>
        <body className="min-h-full bg-main font-body text-secondary">
          <ThemeProvider >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
          </ThemeProvider >
      </body>
    </html>
  );
}
