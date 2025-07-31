import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPage from "../components/navigation/HeaderPage";
import FooterPage from "../components/Footer/FooterPage";
import ReactQueryProvider from "@/src/components/provider/QueryProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Ramchandra Temple",
  description: "Temple ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-screen overflow-y-auto relative`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <HeaderPage />
        <hr className="w-full border border-2 border-black" />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <FooterPage />
      </body>
    </html>
  );
}
