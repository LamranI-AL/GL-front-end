import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "react-hot-toast";
import Header from "@/components/homePageCom/Header";

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
  title: "GL",
  description: "app gestion ",
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
        {/* <NextAuthProvider> */}
        {/* <ClientOnlyNavBar /> */}
        <Toaster position="top-center" />
        {/* <Header /> */}
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
