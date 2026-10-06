"use client";

import { useTranslations } from "next-intl";
import Container from "@/_components/Container";
import { HomeIcon } from "lucide-react";
import { ArrowBtn, ArrowDown } from "@/icons";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function HeroSectionAbout() {
  const t = useTranslations("About");

  return (
    <section className="relative min-h-[380px] lg:min-h-[520px] border border-app-border-section flex items-center overflow-hidden py-10 bg-gradient-to-b from-[#EBF5FF] to-[#F4F8FB]">
      <Container className="relative z-10">
        <div className="flex flex-col min-h-[380px] lg:min-h-[520px] py-8">
          {/* Navigation Breadcrumbs */}
          <nav className="pt-10 relative flex gap-1 items-center text-base text-slate-500 font-medium w-fit mb-6">
            <Link
              href="/"
              className="hover:text-main-blue z-10 gap-1 items-center flex transition-colors"
            >
              <HomeIcon className="h-5 w-5" />
              {t("breadcrumbs.home")}
            </Link>
            <ArrowDown
              strokeWidth={1.6}
              className="w-5 h-3 rtl:rotate-90 ltr:-rotate-90 z-10 text-slate-400"
            />
            <span className="text-slate-800 font-bold z-10">
              {t("breadcrumbs.about")}
            </span>

            <div className="absolute blur-2xl w-32 h-32 -bottom-8 -end-10 scale-[2] z-0 pointer-events-none rounded-full bg-[#EDF5FB]" />
          </nav>

          {/* Wrapper للعنونة والصورة */}
          <div className="flex flex-col gap-6">
            {/* Title */}
            <div className="hidden justify-between sm:flex z-20">
              <h1 className="text-4xl sm:text-5xl  ltr:max-w-[650px] line-clamp-2 max-w-[516px] sm:-mb-[96px] leading-[1.6] font-semibold text-slate-900 ">
                {t.rich("title", {
                  orange: (chunks) => (
                    <span className="text-main-orange">{chunks}</span>
                  ),
                })}
              </h1>
              <p className="text-base max-w-[440px] -mb-4 sm:text-[18px] text-[#334155] leading-relaxed font-medium font-almarai line-clamp-2">
                {t("description")}
              </p>
            </div>
            {/* Image Container (شيلنا الـ absolute وخليناها relative عشان تحجز مكانها صح) */}
            <div className="relative z-10 w-full h-[250px] sm:h-[384px] rounded-3xl ">
              {/* 1. صورة الكمبيوتر */}
              <Image
                src="/hero/aboutHero.png"
                alt="About Us Desktop"
                fill
                priority
                className="object-fill ltr:hidden hidden md:block"
              />
              <Image
                src="/hero/ltr.png"
                alt="About Us Desktop"
                fill
                priority
                className="object-fill rtl:hidden hidden lg:block"
              />
              <button
                onClick={() => {
                  document
                    .getElementById("about-content")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden group absolute inset-e-0 bottom-0 w-20 h-20 bg-main-orange rounded-full sm:flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300 hover:bg-orange-600"
              >
                <ArrowBtn
                  strokeWidth="0.5"
                  className="w-7.5 h-7.5 text-white transition-transform duration-300 rotate-180 group-hover:rotate-270"
                />
              </button>

              <div className="sm:hidden text-center flex flex-col justify-center items-center h-auto min-h-[260px] w-full relative rounded-3xl overflow-hidden p-6 gap-4">
                {/* 1. صورة الموبايل */}
                <Image
                  src="/hero/aboutHeroMobile.png"
                  alt="About Us Mobile"
                  fill
                  priority
                  className="object-cover"
                />

                {/* 2. تدرج لوني من فوق لتحت عشان يوضح الكلام */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950/75 z-10" />

                {/* 3. العنوان الرئيسي */}
                <h1 className="text-2xl leading-[1.5] font-semibold text-white z-20 relative">
                  {t.rich("title", {
                    orange: (chunks) => (
                      <span className="text-main-orange">{chunks}</span>
                    ),
                  })}
                </h1>

                {/* Description */}
                <p className="text-xs text-slate-100 leading-relaxed font-medium font-almarai z-20 relative">
                  {t("description")}
                </p>

                {/* الزرار */}
                <button
                  onClick={() => {
                    document
                      .getElementById("about-content")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center bg-main-orange hover:bg-orange-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 active:scale-95 z-20 relative"
                >
                  <span>{t("cta")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Background Lighting Effects */}
      <div className="absolute top-[380px] -start-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#7DD3FC]/50 blur-[80px] sm:blur-[180px] rounded-full z-0 pointer-events-none" />

      {/* الدائرة البرتقالية */}
      <div className="absolute bottom-[250px] -end-[100px] sm:bottom-[260px] sm:-end-[220px] w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bg-[#F78B16]/30 blur-[60px] sm:blur-[200px] rounded-full z-0 pointer-events-none" />
    </section>
  );
}
