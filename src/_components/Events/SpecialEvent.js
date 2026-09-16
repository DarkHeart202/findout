import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Calendar, Location, PriceIcon, ArrowBtn } from "@/icons";
import { dummyEvents } from "@/data/event"; // جلب الـ Array

export default function FeaturedEventSection() {
  const locale = useLocale();
  const tLabels = useTranslations("Events.EventLabels");
  const t = useTranslations("Events");

  const featuredId = "diriyah-jazz-night";

  // البحث عن الفعالية المميزة بالـ ID
  const featuredEvent = dummyEvents.find((e) => e.id === featuredId);

  if (!featuredEvent) return null;

  return (
    <section className="py-16 bg-white border-1 app-border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-1 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-gradient-to-r from-[#19A9ED] to-[#003A68] block rounded-full" />
            <span className="text-xs sm:text-base font-bold rtl:font-almarai text-main-orange">
              {t("FeaturedEventSection.tag")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-header">
            {t("FeaturedEventSection.title")}
          </h2>
        </div>

        <div className="bg-white rounded-3xl border app-border shadow-[0_2px_25px_-3px_rgba(30,41,59,0.08)] overflow-hidden flex flex-col-reverse lg:flex-row items-stretch">
          <div className="flex-1 p-6 lg:p-10 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-light-header mb-3 leading-snug">
                {featuredEvent.title[locale]}
              </h3>
              <p className="text-sm sm:text-base text-icon-c leading-relaxed max-w-xl">
                {featuredEvent.description[locale]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {/* الموقع */}
              <div className="flex items-center gap-3 sm:border-l sm:border-slate-100 sm:pl-4 ltr:sm:border-l-0 ltr:sm:border-r ltr:sm:pr-4">
                <div className="w-9 h-9 rounded-full bg-[#E6F3FC] flex items-center justify-center shrink-0">
                  <Location className="text-main-blue h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#64748B] font-medium">
                    {tLabels("location")}
                  </span>
                  <span className="text-sm font-bold text-light-header mt-0.5">
                    {featuredEvent.location[locale]}
                  </span>
                </div>
              </div>

              {/* السعر */}
              <div className="flex items-center gap-3 sm:border-l sm:border-slate-100 sm:pl-4 ltr:sm:border-l-0 ltr:sm:border-r ltr:sm:pr-4">
                <div className="w-9 h-9 rounded-full bg-[#E6F3FC] flex items-center justify-center shrink-0">
                  <PriceIcon className="h-6 w-6 text-main-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#64748B] font-medium">
                    {tLabels("priceFrom")}
                  </span>
                  <span className="text-sm font-bold text-light-header mt-0.5">
                    {featuredEvent.price[locale]}
                  </span>
                </div>
              </div>

              {/* التاريخ */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E6F3FC] flex items-center justify-center shrink-0">
                  <Calendar className="h-5.5 w-5.5 text-main-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#64748B] font-medium">
                    {tLabels("date")}
                  </span>
                  <span className="text-sm font-bold text-light-header mt-0.5">
                    {featuredEvent.date[locale]}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/events/${featuredEvent.id}`}
                className="group inline-flex items-center justify-center gap-2 bg-main-blue hover:bg-blue-hover/95 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-sm"
              >
                <span>{t("FeaturedEventSection.detailsBtn")}</span>
                <ArrowBtn className="w-5 h-5 text-white transition-transform duration-300 ease-out ltr:rotate-180 group-hover:-translate-x-1.5 ltr:group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-[48%] min-h-[280px] lg:min-h-full">
            <Image
              src={featuredEvent.image}
              alt={featuredEvent.title[locale]}
              fill
              className="object-cover"
            />
            <span className="absolute top-4 end-4 font-semibold rtl:font-almarai bg-[#F58220] text-sub-text text-sm font-extrabold px-3.5 py-1.5 rounded-full shadow-md z-10">
              {t("FeaturedEventSection.featuredBadge")}
            </span>
            <div className="absolute bottom-4 end-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10 z-10">
              <span className="w-2 h-2 rounded-full bg-main-orange animate-pulse"></span>
              <span>{t("FeaturedEventSection.limitedTickets")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
