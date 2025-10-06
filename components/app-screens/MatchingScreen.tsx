"use client";

import React, { useEffect } from "react";
import { Spinner } from "../ui/spinner";

function MatchingScreen({
  onNavigate,
}: {
  onNavigate: (state: string) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate("login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      {/* Spinner */}
      <div className="w-24 h-24 mb-6 flex items-center justify-center">
        <Spinner size={64} color="border-orange-600" />
      </div>

      {/* Başlık */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Uyumlu bir kişi arayışı devam ediyor
      </h1>

      {/* Progress bar */}
      <div className="w-full max-w-xs mb-6">
        <div className="bg-gray-200 rounded-full h-2">
          <div className="bg-orange-600 h-2 rounded-full w-3/4 animate-pulse"></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">%75 tamamlandı</p>
      </div>

      {/* Açıklama */}
      <p className="text-gray-600 text-sm">
        Size uygun katılımcıları buluyoruz. Bu işlem birkaç saniye sürebilir.
      </p>
    </div>
  );
}

export default MatchingScreen;
