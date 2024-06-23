"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "../../../components/ui/progress";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 flex flex-wrap gap-2 text-gray-100 bg-red-900">
      Loading sorcerer data...
      <Progress value={progress} className="h-[20px] rounded-full" />
    </main>
  );
}
