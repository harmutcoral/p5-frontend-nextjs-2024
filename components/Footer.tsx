import Link from "next/link";
import { cn } from "../lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "bg-purple-800 text-white h-16 text-xs text-center flex items-center justify-center",
        "pt-1 opacity-80",
        "absolute bottom-0 w-full"
      )}
    >
      <div className="flex flex-col items-center space-y-1">
        <span>&copy; 2024 Dungeons and Dragons. All rights reserved.</span>
        <span>
          Developed by{" "}
          <Link href="../author" className="underline text-blue-300">
            Coral Harmut
          </Link>
        </span>
        <span>
          <Link href="/privacy" className="underline text-blue-300">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link className="underline text-blue-300" href="/terms">
            Terms of Service
          </Link>
        </span>
      </div>
    </footer>
  );
}
