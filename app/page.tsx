"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ContentPanel } from "@/components/ContentPanel";
import { StepNav } from "@/components/StepNav";
import {
  type AppState,
  STATE_TO_SECTION_ID,
  SECTION_ID_TO_STATE,
} from "@/lib/states";

export default function Home() {
  const [currentState, setCurrentState] = useState<AppState>("landing");

  const handlePhoneNavigate = useCallback((newState: AppState) => {
    setCurrentState(newState);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <StepNav
            currentState={currentState}
            onNavigate={handlePhoneNavigate}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            <ContentPanel currentState={currentState} />
          </div>

          <div className="w-full lg:w-1/4 order-1 lg:order-2">
            <div className="lg:sticky lg:top-8">
              <PhoneFrame
                currentState={currentState}
                onNavigate={handlePhoneNavigate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
