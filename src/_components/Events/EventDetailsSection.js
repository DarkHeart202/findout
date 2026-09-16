"use client";

import { useState, useMemo } from "react";
import EventCard from "@/_components/Events/EventCard";
import { useLocale, useTranslations } from "next-intl";
import { dummyEvents } from "@/data/event";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AllEventsSection({ events = dummyEvents }) {
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("closest");

  const categories = [
    { id: "all", label: locale === "ar" ? "الكل" : "All" },
    { id: "music", label: locale === "ar" ? "موسيقى" : "Music" },
    { id: "culture", label: locale === "ar" ? "ثقافة" : "Culture" },
    { id: "family", label: locale === "ar" ? "عائلي" : "Family" },
    { id: "seasons", label: locale === "ar" ? "مواسم" : "Seasons" },
  ];

  // 🔴 منطق الفلترة والترتيب (Filtering & Sorting)
  const filteredAndSortedEvents = useMemo(() => {
    let result = [...events];

    // 1. الفلترة حسب التصنيف
    if (selectedCategory !== "all") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // 2. الترتيب حسب الخيار المحدد
    if (sortBy === "closest") {
      result.sort((a, b) => (a.daysLeftNum || 0) - (b.daysLeftNum || 0));
    }

    return result;
  }, [events, selectedCategory, sortBy]);

  const getSortLabel = (val) => {
    switch (val) {
      case "closest":
        return locale === "ar" ? "بالأقرب موعداً" : "Closest Date";
      case "popular":
        return locale === "ar" ? "الأكثر شعبية" : "Most Popular";
      case "price_low":
        return locale === "ar" ? "الأقل سعراً" : "Lowest Price";
      default:
        return "";
    }
  };

  return (
    <section className="py-16 bg-app-bg border-1 app-border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {locale === "ar" ? "كل الفعاليات" : "All Events"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {filteredAndSortedEvents.length}{" "}
              {locale === "ar" ? "نتائج معروضة" : "results displayed"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4">
            {/* Categories Horizontal Scroll مع زر الفلترة */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {/* بقية الأقسام */}
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    disabled={isSelected}
                    className={`px-4 py-2 text-xs sm:text-sm rounded-full transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? "bg-header text-white cursor-default font-semibold"
                        : "bg-white border border-[#E5E7EB] text-active-icon hover:bg-slate-100 font-medium cursor-pointer"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
            {/* الترتيب المنسدل (Select) */}
            <div className="w-full sm:w-auto">
              <Select
                value={sortBy}
                onValueChange={(value) => setSortBy(value)}
              >
                <SelectTrigger className="w-full sm:w-52 bg-white border border-[#E5E7EB] text-active-icon rounded-full text-xs sm:text-sm font-medium h-10 px-4">
                  <SelectValue>
                    {locale === "ar" ? "الترتيب" : "Sort by"}:{" "}
                    {getSortLabel(sortBy)}
                  </SelectValue>
                </SelectTrigger>

                <SelectContent
                  align="start"
                  side="bottom"
                  sideOffset={4}
                  alignItemWithTrigger={false}
                  className="w-(--anchor-width) min-w-0 bg-white rounded-2xl shadow-lg border border-slate-100 z-50 p-1"
                >
                  <SelectItem
                    value="closest"
                    className="cursor-pointer text-xs sm:text-sm rounded-xl"
                  >
                    {locale === "ar" ? "بالأقرب موعداً" : "Closest Date"}
                  </SelectItem>
                  <SelectItem
                    value="popular"
                    className="cursor-pointer text-xs sm:text-sm rounded-xl"
                  >
                    {locale === "ar" ? "الأكثر شعبية" : "Most Popular"}
                  </SelectItem>
                  <SelectItem
                    value="price_low"
                    className="cursor-pointer text-xs sm:text-sm rounded-xl"
                  >
                    {locale === "ar" ? "الأقل سعراً" : "Lowest Price"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* شبكة الكروت (نستخدم المصفوفة المفلترة والمصنفة هنا) */}
        {filteredAndSortedEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAndSortedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 text-sm">
            {locale === "ar"
              ? "لا توجد فعاليات متاحة في هذا التصنيف حالياً"
              : "No events found in this category."}
          </div>
        )}
      </div>
    </section>
  );
}
