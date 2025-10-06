// ui/button.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "navy" | "grey" | "white" | "outline" | "outline-light"; // outline eklendi
  size?: "md" | "sm";
}

export function Button({
  variant = "navy",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "rounded-[12px] font-medium transition-colors flex items-center justify-center";

  const variants: Record<string, string> = {
    navy: "bg-[#132E50] text-white hover:bg-[#B6BEC9]",
    grey: "bg-[#B6BEC9] text-black hover:bg-[#A0A4A9]",
    white: "bg-white text-black border border-black hover:bg-gray-100",
    outline:
      "bg-transparent text-[#132E50] border border-[#132E50] hover:bg-[#132E50] hover:text-white",
    "outline-light":
      "bg-transparent text-[#132E50] border border-gray-300 hover:bg-[#132E50] hover:text-white",
  };

  const sizes: Record<string, string> = {
    md: "px-5 py-4 h-10 w-72 ",
    sm: "px-4 py-2 h-9",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
