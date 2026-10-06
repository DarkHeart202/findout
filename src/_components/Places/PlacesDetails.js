"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import PlaceCard from "./../PlaceCard";
import { useTranslations, useLocale } from "next-intl";
import Container from "./../Container";

const MapView = dynamic(() => import("../MapView"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] sm:h-[600px] bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-400 font-medium">
      جاري تحميل الخريطة...
    </div>
  ),
});

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GridIcon } from "@/icons/GridIcon";
import { MapIcon } from "@/icons/MapIcon";
import Reveal from "../Reveal";

export default function PlacesSearchPage({ initialPlaces = [] }) {
  const t = useTranslations("Places.PlacesDetails");
  const locale = useLocale();

  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("top_rated");

  const CATEGORIES = [
    { id: "all", label: t("categories.all") },
    { id: "entertainment", label: t("categories.entertainment") },
    { id: "restaurant", label: t("categories.restaurants") },
    { id: "hotel", label: t("categories.hotels") },
    { id: "events", label: t("categories.events") },
  ];

  // 1. الفلترة والترتيب
  const filteredAndSortedPlaces = useMemo(() => {
    let result =
      selectedCategory === "all"
        ? initialPlaces
        : initialPlaces.filter((place) => place.category === selectedCategory);

    result = [...result].sort((a, b) => {
      if (sortBy === "top_rated") {
        return (b.rating || 0) - (a.rating || 0);
      } else if (sortBy === "nearest") {
        const distA =
          typeof a.distance === "number"
            ? a.distance
            : parseFloat(a.distance || "0") || 0;
        const distB =
          typeof b.distance === "number"
            ? b.distance
            : parseFloat(b.distance || "0") || 0;
        return distA - distB;
      }
      return 0;
    });

    return result;
  }, [selectedCategory, sortBy, initialPlaces]);

  // 2. تحويل البيانات المفلترة للغة الحالية للخريطة
  const formattedPlacesForMap = useMemo(() => {
    if (!filteredAndSortedPlaces || !Array.isArray(filteredAndSortedPlaces)) {
      return [];
    }

    return filteredAndSortedPlaces.map((place) => {
      const titleObj = place?.title;
      const titleText =
        typeof titleObj === "object" && titleObj !== null
          ? titleObj[locale] || titleObj.ar || titleObj.en
          : String(titleObj || "");

      const locationObj = place?.location;
      const locationText =
        typeof locationObj === "object" && locationObj !== null
          ? locationObj[locale] || locationObj.ar || locationObj.en
          : String(locationObj || "");

      return {
        id: place.id,
        title: titleText,
        location: locationText,
        lat: Number(place.lat) || 24.7136,
        lng: Number(place.lng) || 46.6753,
      };
    });
  }, [filteredAndSortedPlaces, locale]);

  return (
    <Reveal className="py-8 sm:py-16 bg-white border border-app-border-section">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl text-header font-bold">
              {t("title")}
            </h2>
            <p className="text-icon-color text-sm sm:text-base rtl:font-almarai mt-1">
              {t("resultsCount", { count: filteredAndSortedPlaces.length })}
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 sm:p-1.5 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-main-blue text-white font-bold shadow-[0_4px_14px_0_rgba(59,130,246,0.39)]"
                  : "text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
              }`}
            >
              <GridIcon className="size-4 shrink-0" />
              <span>{t("views.grid")}</span>
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg transition-all ${
                viewMode === "map"
                  ? "bg-main-blue text-white font-bold shadow-[0_4px_14px_0_rgba(59,130,246,0.39)]"
                  : "text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
              }`}
            >
              <MapIcon className="size-4 shrink-0" />
              <span>{t("views.map")}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  disabled={isSelected}
                  className={`px-4 py-2 text-xs sm:text-sm rounded-full transition-colors whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-header text-white cursor-default font-semibold"
                      : "bg-slate-50 border border-[#E5E7EB] text-active-icon hover:bg-slate-100 font-medium cursor-pointer"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-full sm:w-52 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-xs sm:text-sm">
              <SelectValue>
                {locale === "ar" ? "الترتيب" : "Sort by"}:{" "}
                {sortBy === "top_rated"
                  ? t("sort.topRated")
                  : t("sort.nearest")}
              </SelectValue>
            </SelectTrigger>

            <SelectContent
              align="start"
              side="bottom"
              sideOffset={4}
              alignItemWithTrigger={false}
              className="w-(--anchor-width) min-w-0 bg-white rounded-lg shadow-lg border border-slate-100"
            >
              <SelectItem
                value="top_rated"
                className="cursor-pointer text-xs sm:text-sm"
              >
                {t("sort.topRated")}
              </SelectItem>
              <SelectItem
                value="nearest"
                className="cursor-pointer text-xs sm:text-sm"
              >
                {t("sort.nearest")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredAndSortedPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="w-full h-fit rounded-2xl overflow-hidden border border-slate-200">
            <MapView
              places={formattedPlacesForMap}
              center={[24.7136, 46.6753]}
              zoom={11}
            />
          </div>
        )}
      </Container>
    </Reveal>
  );
}
