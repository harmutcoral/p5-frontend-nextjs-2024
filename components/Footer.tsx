import { cn } from "../lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "bg-purple-800 text-white h-16 text-xs text-center flex items-center justify-center", // Dark purple background to match the header, white text for contrast
        "pt-1 opacity-80" // Slightly increase opacity for better readability
      )}
    >
      <div className="flex flex-col items-center space-y-1">
        <span>&copy; 2024 Dungeons and Dragons. All rights reserved.</span>
        <span>
          Developed by{" "}
          <a href="https://yourwebsite.com" className="underline text-blue-300">
            Coral Harmut
          </a>
        </span>
        <span>
          <a href="/privacy" className="underline text-blue-300">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="underline text-blue-300">
            Terms of Service
          </a>
        </span>
      </div>
    </footer>
  );
}
