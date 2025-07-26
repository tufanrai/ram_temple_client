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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-screen flex bg-black justify-center bg-white">
          <div className="max-w-[1280px] w-full h-screen grid gird-col">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="w-full h-20 px-8 flex items-end justify-center bg-black/75">
              <HeaderPage />
            </div>
            <div className="w-full h-screen bg-white">
              <hr className="w-full border border-2 border-black" />
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </div>
            <div className="w-full h-45 bg-black px-8 py-4">
              <FooterPage />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
