"use client";

import { FamiconsDiamondOutline, Icons, IconsaxAiSendMessage } from "@/icons";
import { useTranslations } from "next-intl";
import Reveal from "../Reveal";

export default function AboutValuesSection() {
  const t = useTranslations("About.values");

  // بيانات الأقسام الثلاثة مع مفاتيح الترجمة
  const items = [
    {
      key: "mission",
      icon: <IconsaxAiSendMessage />,
    },
    {
      key: "vision",
      icon: <Icons />,
    },
    {
      key: "values",
      icon: <FamiconsDiamondOutline />,
    },
  ];

  return (
    <Reveal className="py-20 bg-white overflow-hidden border border-app-border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center text-center p-8 rounded-[32px]"
            >
              {/* مكان الـ SVG (دائرة الأيقونة) */}
              <div className="w-16 h-16 rounded-full bg-[#f6f9fd] flex items-center justify-center  mb-6">
                {/* مكان الـ SVG بتاعك هنا */}
                <span className="w-9.5 h-9.5  text-main-blue">{item.icon}</span>
              </div>

              {/* العنوان */}
              <h3 className=" sm:text-2xl font-bold text-light- mb-4">
                {t(`${item.key}.title`)}
              </h3>

              {/* الوصف */}
              <p className="text-lg sm:min-w-[350px] text-sm sm:text-base leading-[1.8] font-medium font-almarai">
                {t(`${item.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
