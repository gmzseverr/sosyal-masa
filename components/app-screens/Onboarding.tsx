import { useEffect } from "react";

export default function Onboarding({ onNext }: OnboardingProps) {
  useEffect(() => {
    const timer = setTimeout(onNext, 2000); 
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <div className="text-center space-y-4">
        <img src="./b690b2c1e82ae92d2fbaaca890f3dd75215255ce.png" alt="" />
      </div>
    </div>
  );
}
