"use client";

import React from "react";

interface SpinnerProps {
  size?: number; // px cinsinden boyut
  color?: string; // tailwind rengi
}

export function Spinner({
  size = 40,
  color = "border-orange-600",
}: SpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-gray-200 ${color}`}
      style={{
        width: size,
        height: size,
        borderTopColor: "transparent",
      }}
    />
  );
}
