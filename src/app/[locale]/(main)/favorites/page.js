"use client";

import Container from "@/_components/Container";
import FavCard from "@/_components/FavCard";
import Reveal from "@/_components/Reveal";
import { useFavorites } from "@/context/FavoriteContext";
import { Link } from "@/i18n/navigation";
import { ArrowUpDown, HomeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  Suspense,
} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GlobalLoading from "../../loading";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function FavPage() {
  const isClient = useIsClient();
  const locale = useLocale();
  const isRtl = locale === "ar";
  const { favorites, toggleFavorite } = useFavorites();
  const t = useTranslations("Home");

  useEffect(() => {
    const isRtl = locale === "ar";
    const brand = isRtl ? "فايند أوت" : "Find Out";
    const title = isRtl ? "المفضلة" : "Favorites";
    document.title = `${title} | ${brand}`;
  }, [locale]);

  const [sortBy, setSortBy] = useState("price_low_high");

  const parsePrice = (priceVal) => {
    if (typeof priceVal === "number") return priceVal;
    if (!priceVal) return 0;
    const text =
      typeof priceVal === "object"
        ? priceVal[locale] || priceVal.ar
        : String(priceVal);
    return parseInt(text.replace(/[^\d]/g, ""), 10) || 0;
  };

  const sortedFavorites = useMemo(() => {
    if (!favorites) return [];

    return [...favorites].sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);

      if (sortBy === "price_low_high") return priceA - priceB;
      if (sortBy === "price_high_low") return priceB - priceA;
      if (sortBy === "newest") return (b.id || 0) - (a.id || 0);
      return 0;
    });
  }, [favorites, sortBy, locale]);

  if (!isClient) return <GlobalLoading />;

  return (
    <div
      className="bg-app-bg mx-auto py-6 pt-25 min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F8FAFC 0%, #ffffff 19%)",
      }}
    >
      <Container>
        {/* 1️⃣ الجزء الأول: مسار التنقل واللقب يظهران أولاً */}
        <Reveal delay={0.3}>
          <nav className="pt-4 relative flex gap-1 items-center text-base text-[#64748B] font-medium w-fit mb-6">
            <Link
              href="/"
              className="z-10 gap-1 items-center hover:text-main-blue flex"
            >
              <HomeIcon className="h-5 w-5" />
              {t("breadcrumbs.home")}
            </Link>
            <svg
              strokeWidth={1.6}
              className={`w-5 h-3 z-10 ${isRtl ? "rotate-90" : "-rotate-90"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span className="text-light-header font-bold z-10">
              {locale === "ar" ? "المفضلة" : "Favorites"}
            </span>
          </nav>
        </Reveal>

        {/* 2️⃣ الجزء الثاني: الهيدر والفلترة يظهران بعد مسار التنقل */}
        <Reveal delay={0.6}>
          <div className="flex relative flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8.5 border-b z-20 border-slate-100">
            <div className="relative flex gap-4 items-center">
              <div className="py-4.5 px-4.5 rounded-2xl bg-main-orange/10 h-full">
                <svg
                  width="31"
                  height="28"
                  viewBox="0 0 31 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2124 0.133331C26.0854 0.133331 30.0474 4.12387 30.0474 9.00931C30.0472 13.7942 27.9356 17.7958 25.1685 20.8247C22.4028 23.8521 18.9748 25.915 16.3198 26.8257L16.3208 26.8267C15.9575 26.9574 15.5277 27.0132 15.0903 27.0132C14.6528 27.0132 14.2223 26.9575 13.8589 26.8267V26.8257C11.2041 25.9148 7.77639 23.8484 5.01123 20.8199C2.24422 17.7893 0.133431 13.7873 0.133301 9.00931C0.133301 4.11 4.09448 0.13343 8.96729 0.133331C11.2883 0.133331 13.4606 1.02442 15.0894 2.61868C16.7181 1.02403 18.8911 0.133432 21.2124 0.133331ZM21.2271 2.46732C19.1733 2.46732 17.2684 3.42707 16.0386 5.08939L16.0376 5.08841C15.8151 5.39025 15.4554 5.53565 15.104 5.53568C14.7525 5.53568 14.3919 5.39039 14.1694 5.08841V5.08743C12.9118 3.41173 11.0203 2.46732 8.96729 2.46732C5.38729 2.46741 2.46729 5.40027 2.46729 9.00931C2.46743 13.672 4.70953 17.3046 7.35596 19.9117C10.0038 22.5201 13.0476 24.0917 14.6226 24.6304H14.6216C14.7255 24.665 14.9057 24.6861 15.0972 24.6861C15.2885 24.6861 15.4679 24.665 15.5718 24.6304C17.1402 24.0915 20.1832 22.5229 22.8325 19.9165C25.4806 17.3112 27.7259 13.6789 27.7261 9.00931C27.7261 5.40037 24.8069 2.46757 21.2271 2.46732Z"
                    fill="#4A90E2"
                    stroke="#4A90E2"
                    strokeWidth="0.266143"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-light-header">
                  {locale === "ar" ? "المفضلة" : "Favorites"}
                </h1>
                <p className="text-base text-lg mt-2 font-semibold">
                  {locale === "ar"
                    ? `${favorites?.length || 0} فنادق حفظتها لتراجعها وقتما يناسبك`
                    : `${favorites?.length || 0} hotels saved to review whenever you like`}
                </p>
              </div>
            </div>

            <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
              <SelectTrigger className="w-auto min-w-[190px] bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm px-4 py-4 h-auto shadow-xs cursor-pointer flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-slate-500 shrink-0" />
                  <SelectValue>
                    {sortBy === "price_low_high"
                      ? isRtl
                        ? "من الأرخص للأغلى"
                        : "Price: Low to High"
                      : isRtl
                        ? "من الأغلى للأرخص"
                        : "Price: High to Low"}
                  </SelectValue>
                </div>
              </SelectTrigger>
              <SelectContent
                position="popper"
                side="bottom"
                align="start"
                sideOffset={6}
                className={`absolute ${isRtl ? "right-0" : "left-0"} bg-white rounded-xl shadow-xl border border-slate-100 p-1 min-w-full z-50`}
              >
                <SelectItem
                  value="price_low_high"
                  className="cursor-pointer text-sm rounded-lg py-2"
                >
                  {locale === "ar" ? "من الأرخص للأغلى" : "Price: Low to High"}
                </SelectItem>
                <SelectItem
                  value="price_high_low"
                  className="cursor-pointer text-sm rounded-lg py-2"
                >
                  {locale === "ar" ? "من الأغلى للأرخص" : "Price: High to Low"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Reveal>

        {/* 3️⃣ الجزء الثالث: الكروت تظهر بالتتابع (Stagger) كارت تلو الآخر */}
        <Suspense fallback={<GlobalLoading />}>
          {sortedFavorites && sortedFavorites.length > 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {sortedFavorites.map((item, index) => (
                <Reveal
                  key={`${item.id}-${index}`}
                  delay={0.3 + index * 0.1}
                  y={30}
                >
                  <FavCard
                    toggleFavorite={toggleFavorite}
                    item={item}
                    locale={locale}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.35}>
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-lg">
                  {isRtl
                    ? "لا توجد عناصر في المفضلة حالياً"
                    : "No favorites added yet"}
                </p>
              </div>
            </Reveal>
          )}
        </Suspense>
      </Container>
    </div>
  );
}
