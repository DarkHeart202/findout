import { Link } from "@/i18n/navigation";
import Button from "./Button";
import Container from "./Container";
import { ArrowBtn } from "@/icons";
import { useTranslations } from "next-intl";
import PartnerCard from "./PartnerCard";
import Reveal from "./Reveal";

export const dummyPartners = [
  {
    id: "1",
    badge: {
      ar: "ترفيه",
      en: "Entertainment",
    },
    title: {
      ar: "متحف طريق الحرير",
      en: "Silk Road Museum",
    },
    subtitle: {
      ar: "وجهة ترفيهية رائدة بتعروض حية ومطاعم وتجارب موسمية",
      en: "A leading entertainment destination featuring live shows, restaurants, and seasonal experiences.",
    },
    rating: 5.0,
    location: {
      ar: "الرياض ، حي الديرة",
      en: "Riyadh, Al-Deerah Dist.",
    },
    image: "/cards/event4.webp",
  },
  {
    id: "2",
    badge: {
      ar: "مطاعم ومقاهي",
      en: "Restaurants & Cafes",
    },
    title: {
      ar: "مطاعم نجد",
      en: "Najd Restaurants",
    },
    subtitle: {
      ar: "مذاق نجدي أصيل بأجواء تراثية في قلب الدرعية وأفضل الأسعار",
      en: "Authentic Najdi flavor in a heritage atmosphere in Diriyah with the best prices.",
    },
    rating: 4.9,
    location: {
      ar: "الدرعية ، حي الديرة",
      en: "Diriyah, Al-Deerah Dist.",
    },
    image: "/cards/homepage3.webp",
  },
  {
    id: "3",
    badge: {
      ar: "فنادق",
      en: "Hotels",
    },
    title: {
      ar: "فنادق نارسس",
      en: "Narcissus Hotels",
    },
    subtitle: {
      ar: "إقامة فاخرة في قلب المدينة مع خدمات ضيافة رفيعة",
      en: "Luxury stay in the heart of the city with premium hospitality services.",
    },
    rating: 4.5,
    location: {
      ar: "جدة ، حي الديرة",
      en: "Jeddah, Al-Deerah Dist.",
    },
    image: "/cards/3.webp",
  },
  {
    id: "4",
    badge: {
      ar: "ثقافة وفعاليات",
      en: "Culture & Events",
    },
    title: {
      ar: "هيئة تطوير الدرعية",
      en: "Diriyah Gate Development",
    },
    subtitle: {
      ar: "وجهة ثقافية عالمية للفعاليات والتراث والتجارب المسائية",
      en: "A global cultural destination for events, heritage, and evening experiences.",
    },
    rating: 4.8,
    location: {
      ar: "المدينة ، حي الديرة",
      en: "Madinah, Al-Deerah Dist.",
    },
    image: "/cards/card2.webp",
  },
];

function PartnerSection() {
  const t = useTranslations("Home");
  return (
    <Reveal className="py-16 bg-white border border-app-border-section">
      <Container className="flex flex-col items-center">
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="flex flex-col gap-2 text-base font-bold  ">
            <span className=" text-main-orange rtl:font-almarai flex  gap-2 items-center">
              <span className="w-4 h-0.5 bg-gradient-to-r from-[#19A9ED] to-[#003A68] block rounded-full" />
              {t("partners.eyebrow")}
            </span>
            <div>
              <h3 className="text-header text-3xl mb-1">
                {t("partners.title")}
              </h3>
              <p className="text-icon-color font-normal rtl:font-almarai">
                {t("partners.subtitle")}
              </p>
            </div>
          </div>
          <Link
            href="/places"
            className="hidden sm:flex items-center gap-1 group"
          >
            <p className="text-sm text-main-blue font-bold">
              {t("partners.allPartners")}
            </p>
            <ArrowBtn className="w-5 h-3.5 text-main-blue scale-85 transition-transform duration-300 ease-out ltr:rotate-180 group-hover:-translate-x-1.5 ltr:group-hover:translate-x-1.5" />
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {dummyPartners.map((item) => (
            <PartnerCard key={item.id} partner={item} />
          ))}
        </div>
        <Button
          bgColor="bg-white"
          textColor="text-main-blue"
          className="sm:hidden border border-[#BFDBFE] hover:bg-blue-50 hover:border-main-blue w-fit mt-8"
          href="/places"
        >
          {t("partners.showAllPlaces", { count: 9 })}
        </Button>
      </Container>
    </Reveal>
  );
}

export default PartnerSection;
