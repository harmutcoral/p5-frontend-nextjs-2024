"use client";

import { cn } from "../lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header
      className={cn(
        "h-14 bg-red-900 text-white",
        "flex flex-row items-center px-4"
      )}
    >
      <Link href="/">
        <div id="logo" className="font-extrabold text-xl text-white mr-4">
          Character Catalog
        </div>
      </Link>
    </header>
  );
}
