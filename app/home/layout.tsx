"use client";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";
import { cn } from "../../lib/utils";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.add(inter.className);
    }
  }, []);

  return (
    <>
      <Header />
      <main
        className={cn("min-h-screen flex flex-col")}
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
          ), url('https://wallpaper.forfun.com/fetch/ea/ea2b7fc789c4b45f30647792653499dd.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
