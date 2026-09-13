"use client";

import { Loader2 } from "lucide-react";
import { useLocale } from "next-intl";

export default function GlobalLoading() {
  const locale = useLocale();

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        {/* Animated Blue Spinner */}
        <Loader2 className="size-10 animate-spin text-main-blue" />

        {/* Dynamic Localized Text */}
        <p className="text-sm font-medium text-slate-500 animate-pulse">
          {locale === "ar" ? "جاري التحميل..." : "Loading..."}
        </p>
      </div>
    </div>
  );
}
