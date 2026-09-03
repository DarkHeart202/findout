"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const activeStyles =
    "bg-white text-main-blue shadow-[0_3px_6px_-1px_rgba(15,23,42,0.15)]";
  const inactiveStyles = "text-gray-500 hover:text-black";
  return (
    <div className="flex text-[13px] font-semibold shadow-[0_2px_10px_0_rgba(100,116,139,0.2)] rounded-lg px-2 py-2 bg-lightest-primary font-jakarta text-active-icon ">
      <button
        onClick={() => router.replace(pathname, { locale: "ar" })}
        className={`cursor-pointer inline-flex items-center justify-center rounded-lg w-[39px] h-[32px] transition-all duration-200 ${
          locale === "ar" ? activeStyles : inactiveStyles
        }`}
      >
        AR
      </button>
      <button
        onClick={() => router.replace(pathname, { locale: "en" })}
        className={`cursor-pointer inline-flex items-center justify-center rounded-lg w-[39px] h-[32px] transition-all duration-200 ${
          locale === "en" ? activeStyles : inactiveStyles
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
