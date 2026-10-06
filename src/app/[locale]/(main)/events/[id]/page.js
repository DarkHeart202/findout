import AvailableOptions from "@/_components/AvailableOptions";
import Container from "@/_components/Container";
import { dummyEvents } from "@/data/event";
import { HomeIcon } from "lucide-react"; // تأكد من مسار الأيقونات عندك لو مختلفة
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import EventHeroId from "@/_components/Events/ID/EventHeroId";
import EventDetails from "@/_components/Events/ID/EventDetails";
import SimilarEvents from "@/_components/Events/ID/SimilarEvents";
// (لو مش معتمدة على lucide-react لنفس الأيقونات، استبدلهم بالأيقونات اللي بتستخدمها في مشروعك)

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const isRtl = locale === "ar";

  return {
    title: `${isRtl ? "فعالية" : "Event"} (${id})`, // هيرجع مثلاً: "برج المملكة"
  };
}

export default async function Page({ params }) {
  const { id, locale } = await params;
  const eventId = id;

  const t = await getTranslations("Home");

  const allEvents = dummyEvents;
  const currentEvent = allEvents.find((event) => event.id === eventId);

  if (!currentEvent) {
    return (
      <div className="text-center py-20 top-1/2 translate-y-1/2 text-xl">
        المكان غير موجود
      </div>
    );
  }

  return (
    <main className=" bg-app-bg  mx-auto py-6 pt-25">
      <Container pxlg="0" pxsm="0">
        {/* --- نفس كود الـ Nav (Breadcrumb) اللي طلبته بالتفصيل --- */}
        <nav className="pt-4 relative flex gap-1 items-center text-base text-[#64748B] font-medium w-fit mb-4">
          <Link
            href="/"
            className="z-10 gap-1 items-center hover:text-main-blue flex"
          >
            <HomeIcon className="h-5 w-5" />
            {t("breadcrumbs.home")}
          </Link>

          {/* سهم التوجيه */}
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

          {/* رابط صفحة الاستكشاف أو الأماكن العام */}
          <Link
            href="/events"
            className="z-10 hover:text-main-blue transition-colors"
          >
            {t("breadcrumbs.explore")}
          </Link>

          {/* سهم التوجيه الثاني */}
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

          {/* اسم المكان الحالي (ديناميكي) */}
          <span className="text-light-header font-bold z-10">
            {currentEvent.title[locale]}
          </span>

          {/* الدائرة المضيئة الخلفية (Blur Effect) */}
          <div className="absolute blur-[10px] w-46.5 h-46.5 -bottom-18 right-2.5 z-0 pointer-events-none rounded-full bg-[radial-gradient(circle,_#EDF5FB_0%,_rgba(237,245,251,0.8)_40%,_transparent_100%)]" />
        </nav>

        {/* --- هيرو المكان اللي عملناه --- */}
        <EventHeroId event={currentEvent} locale={locale} />
        <EventDetails event={currentEvent} locale={locale} />
        <SimilarEvents />
      </Container>
    </main>
  );
}
