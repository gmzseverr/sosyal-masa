"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "rounded-[12px] font-medium transition-colors flex items-center justify-center",
  {
    variants: {
      variant: {
        navy: "bg-[#132E50] text-white hover:bg-[#B6BEC9]",
        grey: "bg-[#B6BEC9] text-black hover:bg-[#A0A4A9]",
        white: "bg-white text-black border border-black hover:bg-gray-100",
        outline:
          "bg-transparent text-[#132E50] border border-[#132E50] hover:bg-[#132E50] hover:text-white",
        "outline-light":
          "bg-transparent text-[#132E50] border border-gray-300 hover:bg-[#132E50] hover:text-white",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700", // Calendar'ın "ghost" için ihtiyacı olabilir
        default: "bg-orange-600 text-white hover:bg-orange-700",
      },
      size: {
        md: "px-5 py-4 h-10 w-72",
        sm: "px-4 py-2 h-9",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "navy",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
