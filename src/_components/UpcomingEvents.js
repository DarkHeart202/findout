"use client";
import { Link } from "@/i18n/navigation";
import Container from "./Container";
import { ArrowBtn } from "@/icons";
import EventCard from "@/_components/EventCard";
import { useTranslations, useLocale } from "next-intl";
import Button from "./Button";

export const dummyEvents = [
  {
    id: "1",
    title: {
      ar: "ليلة جاز في الدرعية",
      en: "Jazz Night in Diriyah",
    },
    date: {
      ar: "12 أغسطس 8:00 م",
      en: "12 Aug 8:00 PM",
    },
    location: {
      ar: "معارض ، حي الديرة",
      en: "Exhibitions, Al Deerah",
    },
    timeLeft: {
      ar: "بعد 3 أيام",
      en: "In 3 days",
    },
    image: "/cards/event1.webp",
  },
  {
    id: "2",
    title: {
      ar: "سوق تراثي مفتوح",
      en: "Open Heritage Market",
    },
    date: {
      ar: "12 أغسطس 8:00 م",
      en: "12 Aug 8:00 PM",
    },
    location: {
      ar: "الدرعية ، الرياض",
      en: "Diriyah, Riyadh",
    },
    timeLeft: {
      ar: "بعد 9 أيام",
      en: "In 9 days",
    },
    image: "/cards/event2.webp",
  },
  {
    id: "3",
    title: {
      ar: "حفل صيفي بوليفارد",
      en: "Boulevard Summer Concert",
    },
    date: {
      ar: "12 أغسطس 8:00 م",
      en: "12 Aug 8:00 PM",
    },
    location: {
      ar: "بوليفارد وورلد",
      en: "Boulevard World",
    },
    timeLeft: {
      ar: "بعد 12 يوم",
      en: "In 12 days",
    },
    image: "/cards/event3.webp",
  },
  {
    id: "4",
    title: {
      ar: "ورشة تصوير ليلي",
      en: "Night Photography Workshop",
    },
    date: {
      ar: "12 أغسطس 8:00 م",
      en: "12 Aug 8:00 PM",
    },
    location: {
      ar: "وادي حنيفة ، حي الديرة",
      en: "Wadi Hanifah, Al Deerah",
    },
    timeLeft: {
      ar: "بعد 15 يوم",
      en: "In 15 days",
    },
    image: "/cards/event4.webp",
  },
];

function UpcomingEvents() {
  const t = useTranslations("Home");
  return (
    <section className="py-16 bg-white border-1 border-border-section">
      <Container className="flex flex-col items-center">
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="flex flex-col gap-2 text-base font-bold  ">
            <span className=" text-main-orange rtl:font-almarai flex  gap-2 items-center">
              <span className="w-4 h-0.5 bg-gradient-to-r from-[#19A9ED] to-[#003A68] block rounded-full" />
              {t("upcomingEvents.eyebrow")}
            </span>
            <div>
              <h3 className="text-header text-3xl mb-1">
                {t("upcomingEvents.title")}
              </h3>
              <p className="text-icon-color font-normal rtl:font-almarai">
                {t("upcomingEvents.resultsCount", {
                  count: dummyEvents.length,
                })}
              </p>
            </div>
          </div>
          <Link
            href="/places"
            className="hidden sm:flex items-center gap-1 group"
          >
            <p className="text-sm text-main-blue font-bold">
              {t("upcomingEvents.viewAll")}
            </p>
            <ArrowBtn className="w-5 h-3.5 text-main-blue scale-85 transition-transform duration-300 ease-out ltr:rotate-180 group-hover:-translate-x-1.5 ltr:group-hover:translate-x-1.5" />
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {dummyEvents.map((item) => (
            <EventCard key={item.id} event={item} />
          ))}
        </div>
        <Button
          bgColor="bg-white"
          textColor="text-main-blue"
          className="sm:hidden border border-[#BFDBFE] hover:bg-blue-50 hover:border-main-blue w-fit mt-8"
          href="/places"
        >
          {t("upcomingEvents.viewAllEvents")}
        </Button>
      </Container>
    </section>
  );
}

export default UpcomingEvents;
