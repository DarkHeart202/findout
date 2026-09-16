"use client";
import Container from "@/_components/Container";
import { ArrowDown, Search } from "@/icons";
import LocationIcon from "@/icons/Location";
import CategoryIcon from "@/icons/CategoryIcon";
import { useLocale, useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import CustomeSelect from "@/_components/Places/CustomeSelect";
import CompassIcon from "@/icons/Compassicon";
import { HomeIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function HeroSectionPlaces() {
  const locale = useLocale();
  const t = useTranslations("Places");
  const isRtl = locale === "ar";
  const [selectedCity, setSelectedCity] = useState("diriyah");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // خيارات المدن مع التحديث التلقائي حسب اللغة
  const cityOptions = useMemo(
    () => [
      {
        value: "diriyah",
        label: isRtl ? "الدرعية" : "Diriyah",
      },
      {
        value: "jeddah",
        label: isRtl ? "جدة" : "Jeddah",
      },
      {
        value: "dammam",
        label: isRtl ? "الدمام" : "Dammam",
      },
    ],
    [isRtl],
  );

  // خيارات الفئات مع التحديث التلقائي حسب اللغة
  const categoryOptions = useMemo(
    () => [
      {
        value: "all",
        label: isRtl ? "جميع الفئات" : "All Categories",
      },
      {
        value: "entertainment",
        label: isRtl ? "ترفيه وفعاليات" : "Entertainment & Events",
      },
      {
        value: "restaurants",
        label: isRtl ? "مطاعم وكافيهات" : "Restaurants & Cafes",
      },
    ],
    [isRtl],
  );

  return (
    <section className="relative w-full min-h-[560px] md:min-h-[700px] flex items-center">
      {/* 1. طبقة الخلفية */}
      <div
        className="absolute inset-0 z-0 bg-app-bg"
        style={{
          backgroundImage: `
            linear-gradient(to ${isRtl ? "left" : "right"}, rgba(241, 245, 249, 0.5) 0%, rgba(248, 250, 252, 1) 100%),
            url('/vectors/placesHero.svg')
          `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 2. المحتوى الرئيسي */}
      <Container className="relative z-10">
        <div className="flex flex-col justify-between gap-6 w-full min-h-125 py-8">
          {/* Breadcrumbs */}
          <nav className="pt-5 relative flex gap-1 items-center text-base text-[#64748B] font-medium w-fit">
            <Link
              href="/"
              className="hover:text-main-blue z-10 gap-1 items-center  flex"
            >
              <HomeIcon className="h-5 w-5 " />
              {t("placesHero.breadcrumbs.home")}
            </Link>
            <ArrowDown
              strokeWidth={1.6}
              className="w-5 h-3 rtl:rotate-90 z-10 ltr:rotate-270"
            />
            <span className="text-light-header font-bold z-10">
              {t("placesHero.breadcrumbs.explorePlaces")}
            </span>
            <div className="absolute blur-[10px] w-46.5 h-46.5 -bottom-18 right-12.5 z-0 pointer-events-none rounded-full bg-[radial-gradient(circle,_#EDF5FB_0%,_rgba(237,245,251,0.8)_40%,_transparent_100%)]" />
          </nav>

          {/* Middle Layout */}
          <div className="gap-8 lg:gap-12.5 flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="flex flex-col max-w-full lg:max-w-[60%] items-center w-full md:items-start gap-3 text-center md:text-start">
              <span className="mb-5 shadow-[0_2px_25px_-3px_rgba(30,41,59,0.15)] inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold z-10 text-header bg-[#E6F3FC] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-main-orange"></span>
                {t("placesHero.badge")}
              </span>

              <h1 className="text-4xl lg:text-[54px] font-extrabold text-light-header mb-4.5 leading-tight">
                {t.rich("placesHero.title", {
                  highlight: (chunk) => (
                    <span className="text-main-blue">{chunk}</span>
                  ),
                })}
              </h1>

              <p className="text-[18px] text-[#738197] max-w-136.75 rtl:font-almarai font-normal leading-relaxed">
                {t("placesHero.description")}
              </p>
            </div>

            {/* Stats Card */}
            <div
              dir={isRtl ? "rtl" : "ltr"}
              className="border app-border min-h-[195px] max-w-[482px] w-full min-w-[320px] p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_4px_8px_0_rgba(15,23,42,0.05),_0_20px_32px_-8px_rgba(15,23,42,0.08)] flex items-center justify-between gap-4"
            >
              <div className="relative flex-shrink-0 w-[102px] h-[102px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-light-primary" />
                <div className="absolute inset-2 rounded-full border border-dashed border-main-blue animate-[spin_12s_linear_infinite_reverse]" />
                <div className="relative w-14 h-14 bg-main-blue rounded-2xl flex items-center justify-center shadow-md shadow-sky-500/20 rotate-12">
                  <div className="w-7 h-7 text-white animate-[spin_8s_linear_infinite]">
                    <CompassIcon className="w-full h-full" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1 w-3.5 h-3.5 bg-main-orange rounded-full z-10" />
                <div className="absolute w-24 h-24 bg-[radial-gradient(circle,_#EDF5FB_40%,_#FAFCFE_100%)] -left-6 -bottom-10 -z-10 blur-[6px] rounded-full" />
                <div className="absolute top-0 right-4 w-3.5 h-3.5 bg-[#E6F3FC] rounded-full z-10 shadow-[0_2px_10.1px_2px_rgba(113,114,116,0.15)]" />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full py-0.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-light-header text-base leading-tight">
                      {t("placesHero.statsCard.title")}
                    </h3>
                    <p className="text-lg text-sm mt-1.5 leading-relaxed line-clamp-2">
                      {t("placesHero.statsCard.description")}
                    </p>
                  </div>
                  <span className="px-4 py-1 text-sm font-semibold text-header bg-[#E6F3FC] rounded-3xl shrink-0">
                    {t("placesHero.statsCard.badge")}
                  </span>
                </div>

                <div className="flex items-center gap-4.5 pt-3 border-t border-slate-100">
                  <div className="text-start">
                    <span className="block text-[16px] font-bold text-header leading-none mb-1.5">
                      {t("placesHero.statsCard.destinationsCount")}
                    </span>
                    <span className="text-sm text-lg font-almarai font-normal">
                      {t("placesHero.statsCard.destinationsLabel")}
                    </span>
                  </div>

                  <div className="h-7 w-px bg-[#9CA3AF]/50"></div>

                  <div className="text-start">
                    <span className="block text-[16px] font-bold text-header leading-none mb-1.5">
                      {t("placesHero.statsCard.citiesCount")}
                    </span>
                    <span className="text-sm text-lg font-almarai font-normal">
                      {t("placesHero.statsCard.citiesLabel")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block border-1 border-[#E5E7EB] w-full bg-white p-3 rounded-3xl shadow-[0_4px_8px_0_rgba(15,23,42,0.05),_0_20px_32px_-8px_rgba(15,23,42,0.08)]">
            <form className="flex flex-col lg:flex-row items-center gap-3">
              {/* 1. نص البحث */}
              <div className="flex-1 w-full px-4 py-2.5 bg-slate-50/80 hover:bg-slate-50 rounded-xl transition-colors">
                <label
                  htmlFor="search-query"
                  className="flex items-center gap-1.5 font-bold text-slate-800 text-xs cursor-pointer"
                >
                  <Search className="text-main-blue w-6 h-6 shrink-0" />
                  <span className="leading-none text-header text-sm">
                    {t("placesHero.searchBar.searchLabel")}
                  </span>
                </label>
                <input
                  id="search-query"
                  type="text"
                  placeholder={t("placesHero.searchBar.searchPlaceholder")}
                  className="w-full bg-transparent text-sm text-slate-800 border-none outline-none focus:outline-none focus:ring-0 p-0 placeholder:text-slate-400 mt-1"
                />
              </div>

              {/* 2. المدينة */}
              <CustomeSelect
                label={t("placesHero.searchBar.cityLabel")}
                icon={
                  <LocationIcon className="text-main-blue w-6 h-6 shrink-0" />
                }
                options={cityOptions}
                value={selectedCity}
                onChange={(val) => setSelectedCity(val)}
              />

              {/* 3. الفئة */}
              <CustomeSelect
                label={t("placesHero.searchBar.categoryLabel")}
                icon={
                  <CategoryIcon className="text-main-blue w-6 h-6 shrink-0" />
                }
                options={categoryOptions}
                value={selectedCategory}
                onChange={(val) => setSelectedCategory(val)}
              />

              {/* 4. زر البحث */}
              <button
                type="submit"
                className="w-full cursor-pointer lg:w-auto px-8 py-4.5 bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-md shadow-amber-500/20 whitespace-nowrap"
              >
                {t("placesHero.searchBar.searchButton")}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
