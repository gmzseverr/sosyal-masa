"use client";

import { useState } from "react";
import { AppSimulator } from "@/components/AppSimulator";
import type { AppState } from "@/lib/states";

export default function AppViewPage() {
  const [state, setState] = useState<AppState>("onboarding"); 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="relative w-full max-w-[390px] h-[844px] border border-gray-300 rounded-[2.5rem] shadow-2xl bg-white overflow-hidden">
        <AppSimulator state={state} onNavigate={setState} />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
