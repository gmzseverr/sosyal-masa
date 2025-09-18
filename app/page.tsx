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
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPhoneNavigating, setIsPhoneNavigating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const observerRef = useRef<IntersectionObserver>();
  const rafRef = useRef<number>();

  const updateScrollProgress = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      setScrollProgress(progress);
    });
  }, []);

  const handlePhoneNavigate = useCallback((newState: AppState) => {
    setCurrentState(newState);
    setIsPhoneNavigating(true);

    // Scroll to corresponding section
    const sectionId = STATE_TO_SECTION_ID[newState];
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);

      // Temporarily disconnect observer to prevent conflicts
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Reset flags and reconnect observer after animation
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setIsPhoneNavigating(false);
        setupIntersectionObserver();
      }, 1200);
    }
  }, []);

  const setupIntersectionObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrolling || isPhoneNavigating) return;

        // Find the section with highest intersection ratio
        let maxRatio = 0;
        let activeEntry = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeEntry = entry;
          }
        });

        if (activeEntry && maxRatio > 0.3) {
          const sectionId = activeEntry.target.id;
          const newState = SECTION_ID_TO_STATE[sectionId];
          if (newState && newState !== currentState) {
            setCurrentState(newState);
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    // Observe all content sections
    Object.keys(SECTION_ID_TO_STATE).forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });
  }, [currentState, isScrolling, isPhoneNavigating]);

  useEffect(() => {
    // Setup observer after initial render
    const timer = setTimeout(() => {
      setupIntersectionObserver();
    }, 500);

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateScrollProgress);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [setupIntersectionObserver, updateScrollProgress]);

  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const states = Object.keys(STATE_TO_SECTION_ID) as AppState[];
        const currentIndex = states.indexOf(currentState);

        if (e.key === "ArrowUp" && currentIndex > 0) {
          handlePhoneNavigate(states[currentIndex - 1]);
        } else if (e.key === "ArrowDown" && currentIndex < states.length - 1) {
          handlePhoneNavigate(states[currentIndex + 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentState, handlePhoneNavigate]);

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
          {/* Content Panel - Left side on desktop, top on mobile */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            <ContentPanel currentState={currentState} />
          </div>

          {/* Phone Frame - Right side on desktop, top on mobile */}
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

      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress * 100}%`,
          }}
        />
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 left-4 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-mono z-50 backdrop-blur-sm">
          <div>
            {currentState} → {STATE_TO_SECTION_ID[currentState]}
          </div>
          <div className="text-xs text-gray-300">
            Progress: {Math.round(scrollProgress * 100)}%
          </div>
          <div className="text-xs text-gray-300">
            Scrolling: {isScrolling ? "Yes" : "No"}
          </div>
        </div>
      )}

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Şu anda {currentState} bölümündesiniz. Klavye ile gezinmek için
        yukarı/aşağı ok tuşlarını kullanın.
      </div>
    </div>
  );
}
