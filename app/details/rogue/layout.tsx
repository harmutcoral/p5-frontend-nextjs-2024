"use client";
import { useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { cn } from "../../../lib/utils";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Rogue",
  description: "Generated by create next app",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.add(inter.className);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Header />
      <main className={cn("min-h-screen flex flex-col bg-purple-200")}>
        {children}
      </main>
      <Footer />
    </>
  );
}
