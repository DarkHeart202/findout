"use client";

import Image from "next/image";
import Container from "@/_components/Container";
import { ArrowDown, Location } from "@/icons";
import LocationIcon from "@/icons/LocationIcon";
import TicketIcon from "@/icons/TicketIcon"; // أو أيقونة التذكرة اللي عملناها
import { useLocale, useTranslations } from "next-intl";
import SparkleIcon from "@/icons/SparkleIcon";
import { HomeIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function HeroSectionEvents() {
  const t = useTranslations("Events");

  return (
    <section className="relative w-full min-h-140 lg:min-h-160 flex items-center overflow-hidden py-10">
      {/* 1. الباترن في الخلفية ورا خالص */}
      <div
        className="absolute inset-0 z-0 bg-app-bg"
        style={{
          backgroundImage: "url('/vectors/p6.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* 2. الـ SVG فوق الباترن مباشرة */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/vectors/eventsHero.svg"
          alt="Events Hero Background"
          fill
          priority
        />
      </div>

      {/* 3. المحتوى الرئيسي (الكلام والأيقونات ثم الصورة) */}
      <Container className="relative z-10 w-full">
        <div className="flex flex-col  w-full py-15">
          {/* Breadcrumbs */}
          <nav className="pt-4 relative flex gap-1 items-center text-base text-[#64748B] font-medium w-fit">
            <Link
              href="/"
              className=" z-10 gap-1 items-center hover:text-main-blue flex"
            >
              <HomeIcon className="h-5 w-5 " />
              {t("eventsHero.breadcrumb.home")}
            </Link>
            <ArrowDown
              strokeWidth={1.6}
              className="w-5 h-3 rtl:rotate-90 ltr:rotate-270 z-10"
            />
            <span className="text-light-header font-bold z-10">
              {t("eventsHero.breadcrumb.events")}
            </span>
            <div className="absolute blur-[10px] w-46.5 h-46.5 -bottom-18 right-2.5 z-0 pointer-events-none rounded-full bg-[radial-gradient(circle,_#EDF5FB_0%,_rgba(237,245,251,0.8)_40%,_transparent_100%)]" />
          </nav>

          {/* Grid Layout (الكلام أولاً ثم الصورة) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 mt-2">
            {/* 1. الكلام والنصوص (على اليمين في العربي / اليسار في الانقليزي) */}
            <div className="flex flex-col items-center lg:items-start text-center ltr:lg:text-left rtl:lg:text-right w-full lg:max-w-[580px]">
              {/* Badge */}
              <span className="z-20 shadow-[0_2px_25px_-3px_rgba(30,41,59,0.15)] mb-6 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-header bg-[#E6F3FC] rounded-full border border-sky-100 ">
                <SparkleIcon className="text-main-orange text-base leading-none" />
                {t("eventsHero.badge")}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-light-header mb-4 leading-[1.25] tracking-tight">
                {t.rich("eventsHero.title", {
                  blue: (chunks) => (
                    <span className="text-main-blue">{chunks}</span>
                  ),
                })}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-lg font-normal leading-relaxed max-w-xl">
                {t("eventsHero.description")}
              </p>
            </div>

            {/* 1. Container الرئيسي يمسك كل العناصر وبدونه overflow-hidden */}
            <div className="px-5 sm:px-0 relative w-full max-w-[458px] aspect-[4/3] lg:aspect-[458/424]">
              <div className="absolute -inset-[2.5px] bg-white rotate-358 rounded-3xl aspect-[4/3] lg:scale-104 blur-[1.5px] -z-10" />
              {/* 2. حاوية الصورة فقط هي اللي بياخد overflow-hidden والـ Shadow */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_18.78px_37.57px_-4.7px_rgba(2,132,199,0.1)]">
                <Image
                  src="/hero/eventsHero.jpg"
                  alt="Events Feature"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 3. كارت الفعاليات (+24) - ثابت جوه في الموبايل وبارز لبرة في الديسك توب */}
              <div className="absolute -bottom-6 sm:-inset-s-[36px] lg:-bottom-3 lg:-start-5 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-[14px] shadow-lg border border-slate-100 flex items-center gap-2">
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-main-blue flex items-center justify-center shrink-0">
                  <TicketIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white" />
                </div>
                <div className="p-1 gap-0.5 flex flex-col text-start">
                  <span className="text-xs lg:text-sm font-extrabold text-light-header leading-none">
                    +24
                  </span>
                  <span className="text-[10px] lg:text-xs text-[#64748B] font-normal mt-0.5">
                    {t("eventsHero.stats.upcomingEvents")}
                  </span>
                </div>
              </div>

              {/* 4. كارت المدن (+3) - ثابت جوه في الموبايل وبارز لبرة في الديسك توب */}
              <div className="absolute bottom-9 sm:-inset-e-11.5 -inset-e-0.5  z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-[14px] shadow-lg border border-slate-100 flex items-center gap-2">
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-[#E6F3FC] flex items-center justify-center shrink-0">
                  <LocationIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-main-blue" />
                </div>
                <div className="p-1 gap-0.5 flex flex-col text-start">
                  <span className="text-xs lg:text-sm font-extrabold text-light-header leading-none">
                    3+
                  </span>
                  <span className="text-[10px] lg:text-xs text-[#64748B] font-normal mt-0.5">
                    {t("eventsHero.stats.citiesAndDistricts")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
