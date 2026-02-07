import { Geist, Geist_Mono, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { getHomePageDescription, getHomePageTitle } from "@/utils/brand";
import { Toaster } from "react-hot-toast";
import AuthInitializer from "@/components/AuthInitializer"; // Import the new component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiroBangla = Tiro_Bangla({
  variable: "--font-tiro-bangla",
  subsets: ["bengali"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: getHomePageTitle(),
  description: getHomePageDescription(),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiroBangla.variable} antialiased`}
      >
        <AuthInitializer /> {/* Render AuthInitializer here */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}


