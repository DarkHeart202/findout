"use client";
import { useState, useEffect, useRef } from "react";
import hero1 from "@/public/hero/homepage.webp";
import hero2 from "@/public/hero/homepage2.webp";
import hero3 from "@/public/hero/eventsHero.jpg";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Container from "./Container";
import { Search as SearchIcon, ArrowDown, Location } from "@/icons";
import Button from "./Button";

const heroImages = [hero1, hero2, hero3];

const CITIES = [
  { id: "all", nameAr: "جميع المدن", nameEn: "All Cities" },
  { id: "riyadh", nameAr: "الرياض، الدرعية", nameEn: "Riyadh, Diriyah" },
  { id: "jeddah", nameAr: "جدة", nameEn: "Jeddah" },
  { id: "dammam", nameAr: "الدمام", nameEn: "Dammam" },
  { id: "khobar", nameAr: "الخبر", nameEn: "Al Khobar" },
  { id: "alula", nameAr: "العُلا", nameEn: "AlUla" },
];

function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const isAr = locale === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(CITIES[1]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery, "In city:", selectedCity);
  };

  return (
    <section className="relative h-140 md:h-175 w-full ">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`Hero slide ${index + 1}`}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0 z-15"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 46%, rgba(15, 23, 42, 0.9) 100%)",
        }}
      />

      <Container className="relative h-full flex flex-col justify-center">
        {/* العناصر متوسطة في الموبايل (items-center text-center) ومحاذاة لليار/اليمين في الشاشات الكبيرة (md:items-start md:text-start) */}
        <div className="z-30 flex flex-col items-center text-center md:items-start md:text-start text-white gap-5 md:gap-7 mt-12">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-2 md:px-4.5 md:py-2.5 bg-main-orange/15 w-fit border border-main-orange rounded-full font-semibold text-xs md:text-sm">
            <span className="inline-block shrink-0 h-2 w-2 bg-main-orange rounded-full" />
            {t("badge")}
          </span>

          {/* Title & Description */}
          <div>
            {/* خط أصغر في الموبايل text-3xl وبيتدرج لـ text-[54px] في الشاشات الكبيرة */}
            <h3 className="mb-2 md:mb-3 font-extrabold text-3xl sm:text-4xl md:text-[54px] leading-tight">
              {t("title")}
            </h3>
            <p className="text-sm sm:text-base md:text-[18px] font-light rtl:font-almarai max-w-xl">
              {t("description")}
            </p>
          </div>

          {/* Search Bar + Dots Row */}
          <div className="flex items-center justify-between gap-6 w-full mt-6 md:mt-18">
            {/* شريط البحث: مخفي في الموبايل (hidden) وبيظهر في الشاشات المتوسطة والكبيرة (md:flex) */}
            <div className="hidden md:flex items-center justify-between bg-white text-gray-800 rounded-3xl  py-4 px-3.5 flex-1 max-w-4xl shadow-lg relative">
              {/* Query Input Section */}
              <div className="flex-1 px-4 flex flex-col justify-center">
                <label
                  htmlFor="hero-search"
                  className="flex items-center gap-1.5 font-bold text-slate-800 cursor-pointer"
                >
                  <SearchIcon className="text-main-blue w-5.5 h-5.5  shrink-0" />
                  <span className="leading-none mt-0.5">
                    {t("search.queryLabel")}
                  </span>
                </label>
                <input
                  id="hero-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("search.queryPlaceholder")}
                  className="w-full text-gray-700 text-sm mt-1 leading-none bg-transparent outline-none placeholder:text-gray-400 border-none p-0 focus:ring-0"
                />
              </div>

              {/* Separator */}
              <div className="h-10 w-[1px] bg-gray-200 shrink-0" />

              {/* City Dropdown Section */}
              <div
                ref={dropdownRef}
                className="flex-1 px-4 relative flex items-center justify-between cursor-pointer select-none"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Location className="w-5 h-5 text-main-blue shrink-0" />
                    <span className="leading-none mt-0.5">
                      {t("search.cityLabel")}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mt-1 pb-0.5 leading-none font-medium truncate">
                    {isAr ? selectedCity.nameAr : selectedCity.nameEn}
                  </p>
                </div>

                <ArrowDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />

                {/* Dropdown Menu Options */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-7 right-0 left-0 mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {CITIES.map((city) => (
                      <button
                        key={city.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCity(city);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-5 py-2.5 text-sm transition-colors flex items-center justify-between ${
                          isAr ? "text-right" : "text-left"
                        } ${
                          selectedCity.id === city.id
                            ? "bg-orange-50 text-orange-600 font-bold"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{isAr ? city.nameAr : city.nameEn}</span>
                        {selectedCity.id === city.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <Button
                onClick={handleSearch}
                rounded="rounded-2xl"
                className="bg-main-orange text-white px-8 py-4 font-bold hover:bg-dark-o transition-colors shrink-0"
              >
                {t("search.button")}
              </Button>
            </div>

            {/* Slider Dots: في الموبايل بتبقى متوسنة في المنتصف تلقائياً */}
            <div className="flex items-center gap-2 shrink-0 mx-auto md:mx-0">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-white/50 hover:bg-white/80 cursor-pointer"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
