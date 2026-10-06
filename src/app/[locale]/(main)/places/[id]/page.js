import AvailableOptions from "@/_components/AvailableOptions";
import Container from "@/_components/Container";
import PlaceDetails from "@/_components/PlaceDetails";
import PlaceHeroId from "@/_components/Places/PlaceHeroId";
import { places } from "@/data/places";
import { HomeIcon } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const isRtl = locale === "ar";

  // 1. البحث عن المكان في الداتا برقم الـ id
  const currentPlace = places.find((p) => p.id === Number(id));

  // 2. حماية في حالة لو الـ id مش موجود في الداتا
  if (!currentPlace) {
    return {
      title: isRtl ? "المكان غير موجود" : "Place Not Found",
    };
  }

  // 3. استخراج الاسم حسب اللغة (سواء كان title كائن {ar, en} أو نص عادي)
  const placeName =
    typeof currentPlace.title === "object"
      ? currentPlace.title[locale] ||
        currentPlace.title.ar ||
        currentPlace.title.en
      : currentPlace.title;

  return {
    title: placeName, // هيرجع مثلاً: "برج المملكة"
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const placeId = Number(id);

  const t = await getTranslations("Home");
  const locale = await getLocale();

  const currentPlace = places.find((place) => place.id === placeId);

  if (!currentPlace) {
    return (
      <div className="text-center top-1/2 translate-y-1/2 py-20 text-xl">
        المكان غير موجود
      </div>
    );
  }

  // استخراج اسم المكان حسب اللغة الحالية بأمان
  const placeTitle =
    typeof currentPlace.title === "object"
      ? currentPlace.title[locale] ||
        currentPlace.title.ar ||
        currentPlace.title.en
      : currentPlace.title;

  return (
    <main className="bg-app-bg mx-auto py-6 pt-25">
      <Container pxlg="0" pxsm="0">
        {/* شريط التنقل (Breadcrumb) */}
        <nav className="pt-4 relative flex gap-1 items-center text-base text-[#64748B] font-medium w-fit mb-4">
          <Link
            href="/"
            className="z-10 gap-1 items-center hover:text-main-blue flex"
          >
            <HomeIcon className="h-5 w-5" />
            {t("breadcrumbs.home")}
          </Link>

          <svg
            strokeWidth={1.6}
            className="w-5 h-3 rtl:rotate-90 ltr:rotate-270 z-10"
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

          <Link
            href="/places"
            className="z-10 hover:text-main-blue transition-colors"
          >
            {t("breadcrumbs.explore")}
          </Link>

          <svg
            strokeWidth={1.6}
            className="w-5 h-3 rtl:rotate-90 ltr:rotate-270 z-10"
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

          <span className="text-light-header font-bold z-10">{placeTitle}</span>

          <div className="absolute blur-[10px] w-46.5 h-46.5 -bottom-18 right-2.5 z-0 pointer-events-none rounded-full bg-[radial-gradient(circle,_#EDF5FB_0%,_rgba(237,245,251,0.8)_40%,_transparent_100%)]" />
        </nav>

        <PlaceHeroId place={currentPlace} />
        <PlaceDetails place={currentPlace} />
        <AvailableOptions />
      </Container>
    </main>
  );
}
