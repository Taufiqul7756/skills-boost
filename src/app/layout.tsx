import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Providers } from "@/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skills Boost",
  description: "Developed by @TALdevs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Providers>
            <TopBar />
            <Navbar />
            <main className="flex-grow mt-20 min-h-screen">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
