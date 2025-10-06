"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FloatingInput({
  label,
  className,
  ...props
}: FloatingInputProps) {
  return (
    <div className="relative w-full">
      <input
        {...props}
        className={cn(
          "block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-xs text-gray-900 " +
            "focus:border-[#F16820] focus:ring-2 focus:ring-[#F16820]/30 focus:outline-none focus:bg-white " +
            "placeholder-transparent",
          className
        )}
        style={{ backgroundColor: "white" }}
      />
      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500 pointer-events-none">
        {label}
      </label>
      <style jsx global>{`
        /* Autofill beyaz yap */
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px white inset;
          -webkit-text-fill-color: #000;
        }
      `}</style>
    </div>
  );
}
