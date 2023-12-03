import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StartsCanvas from "@/components/main/StarBg";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "Ali Moghrabi Portfolio",
  icons: {
    icon: "/reactquery.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StartsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
