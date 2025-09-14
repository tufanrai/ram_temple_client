import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPage from "../components/navigation/HeaderPage";
import FooterPage from "../components/Footer/FooterPage";
import ReactQueryProvider from "@/src/components/provider/QueryProvider";
import { Toaster } from "react-hot-toast";
import { Facebook } from "react-feather";

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
  description:
    "Experience the divine blessings of Lord Ram. Get live darshan, complete history, daily aarti timings, and pilgrimage guide for the sacred Shri Ram Chandra Temple in Ayodhya. Plan your visit today. Complete schedule and guide for all festivals at Shri Ram Chandra Temple Ayodhya. Celebrate Ram Navami, Diwali, Janmashtami, and more with live events, puja booking, and rituals. Celebrate Ram Navami 2024 at the sacred Shri Ram Chandra Temple in Ayodhya. Special puja rituals, aarti timings, event schedule, and how to participate online. Book your seva now.",
  keywords:
    "Ram Chandra Temple, Ayodhya Ram Mandir, Ram Temple, Lord Ram, Ayodhya Temple, Ram Darshan, Aarti Timings, Hindu Temple, Pilgrimage Ram Navami, Diwali in Ayodhya, Janmashtami, Ram Temple Festivals, Hindu Festivals, Puja Booking, Ayodhya Events, Ram Navami 2024, Ram Navami Ayodhya, Ram Navami Puja, Birthday of Lord Ram, Seva Booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-screen overflow-y-auto relative --Font-fam`}
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
