"use client";

import { useTranslations } from "next-intl";
import Container from "@/_components/Container";
// استورد الأيقونات الخاصة بك من المجلد المخصص
import { Search, UilChartGrowth, LucideHandshake } from "@/icons";

export default function FeaturesSection() {
  const t = useTranslations("Partners");

  const featuresList = [
    {
      key: "visibility",
      // الأزرق: الـ Gradient واخد opacity 100% في الـ Fill
      bgGradient:
        "bg-[linear-gradient(135deg,#EAF6FB_0%,rgba(234,246,251,0.10)_100%)]",
      iconColor: "text-[#0284C7]",
      Icon: Search,
    },
    {
      key: "analytics",
      // البرتقالي: الـ Linear Gradient كامل واخد 10% opacity
      bgGradient:
        "bg-[linear-gradient(135deg,rgba(245,130,32,0.10)_0%,rgba(245,130,32,0.01)_100%)]",
      iconColor: "text-[#F58220]",
      Icon: UilChartGrowth,
    },
    {
      key: "partnership",
      // الأخضر: الـ Linear Gradient كامل واخد 10% opacity
      bgGradient:
        "bg-[linear-gradient(135deg,rgba(16,185,129,0.10)_0%,rgba(231,251,245,0.015)_100%)]",
      iconColor: "text-[#10B981]",
      Icon: LucideHandshake,
    },
  ];

  return (
    <section className="border border-border-section py-16 lg:py-20 bg-gray-50 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-main-orange font-semibold text-base uppercase mb-4 block">
            {t("Features.badge")}
          </span>
          <h2 className="text-[28px]  lg:text-[40px] font-bold text-light-header mb-4">
            {t("Features.title")}
          </h2>
          <p className="text-lg text-[16px] max-w-2xl mx-auto">
            {t("Features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1   md:grid-cols-3 gap-4.5 ">
          {featuresList.map(({ key, bgGradient, iconColor, Icon }) => (
            <div
              key={key}
              className="bg-white  border-[1.5px] border-app-border rounded-2xl p-8 text-center sm:text-start group hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
              style={{
                boxShadow: "0px 8px 20px -2px rgba(15, 23, 42, 0.06)",
              }}
            >
              {/* Icon Container */}
              <div
                className={`mx-auto w-13 h-13 ${bgGradient} rounded-2xl flex items-center justify-center sm:ms-0 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`w-7 h-7 ${iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-bold text-light-header mb-1">
                {t(`Features.${key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-lg font-normal text-base leading-relaxed">
                {t(`Features.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
