// Home.tsx (Güncellenmiş Versiyon)
"use client";
import { useState, useCallback } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ContentPanel } from "@/components/ContentPanel";
import { StepNav } from "@/components/StepNav";
import { motion } from "framer-motion";
import {
type AppState,
// ... diğer import'lar
} from "@/lib/states";
export default function Home() {
const [currentState, setCurrentState] = useState<AppState>("onboarding");
// YOL HARİTASI KONTROLÜ
const isRoadmapFullScreen = currentState === "roadmap"; 
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
{/* ANA FLEX KAPSAYICI */}
<div className={`flex flex-col items- gap-8 mx-auto ${isRoadmapFullScreen ? 'lg:flex-row' : 'lg:flex-row'}`}>
{/* CONTENT PANEL KISMI */}
<motion.div
            className={`
              w-full 
              ${isRoadmapFullScreen ? "lg:w-full" : "lg:w-3/4"}
              transition-all duration-500 order-2 lg:order-1 
            `}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ContentPanel currentState={currentState} />
          </motion.div>
{/* TELEFON GÖRÜNÜMÜ KISMI */}

{!isRoadmapFullScreen && (
            <motion.div
              className={`
                w-full lg:w-1/4 
                order-1 lg:order-2 
                flex justify-center lg:justify-end
                transition-opacity duration-500
              `}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="lg:sticky lg:top-8">
              
                <motion.div
                 
              
                >
                    <div className="">
                        <PhoneFrame
                            currentState={currentState}
                            onNavigate={handlePhoneNavigate}
                        />
                    </div>
                </motion.div>
              </div>
            </motion.div>
          )}
</div>
</div>
</div>
);
} 