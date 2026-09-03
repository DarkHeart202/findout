import { Link } from "@/i18n/navigation";
import Container from "./Container";
import { ArrowBtn } from "@/icons";
import { useTranslations } from "next-intl";
import Button from "./Button";
import OfferCard from "./OfferCard";

export const dummyOffers = [
  {
    id: "1",
    title: {
      ar: "قهوة مجانية مع حجز طاولة",
      en: "Free Coffee with Table Booking",
    },
    subtitle: {
      ar: "كافيه نيفين - العليا",
      en: "Nevin Cafe - Al Olaya",
    },
    badge: {
      ar: "هدية",
      en: "Gift",
    },
    image: "/cards/homepage3.webp",
  },
  {
    id: "2",
    title: {
      ar: "احجز ليلتين واحصل على الثالثة",
      en: "Book 2 Nights & Get the 3rd Free",
    },
    subtitle: {
      ar: "فنادق مختارة - العليا",
      en: "Selected Hotels - Al Olaya",
    },
    badge: {
      ar: "ليلة مجانية",
      en: "Free Night",
    },
    image: "/cards/55-1.webp",
  },
  {
    id: "3",
    title: {
      ar: "عشاء لأثنين في قلب نجد",
      en: "Dinner for Two in Najd",
    },
    subtitle: {
      ar: "مطاعم نجد - الدرعية",
      en: "Najd Restaurants - Diriyah",
    },
    badge: {
      ar: "خصم 30%",
      en: "30% OFF",
    },
    image: "/cards/card1.webp",
  },
];

function SpecialOffer() {
  const t = useTranslations("Home");
  return (
    <section className="py-16 bg-app-bg border border-border-section">
      <Container className="flex flex-col items-center">
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="flex flex-col gap-2 text-base font-bold  ">
            <span className="flex gap-1.5 items-center px-3 py-1.5 w-fit text-main-blue font-semibold rounded-full bg-linear-to-r from-[#FFEBD7] to-[#D9ECFF]  text-xs">
              <span className="mb-0.5 block w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#5096FF] via-[#F3F3F3] to-[#F78B16]" />
              {t("featuredOffers.eyebrow")}
            </span>
            <div>
              <h3 className="text-header text-3xl mb-1">
                {t("featuredOffers.title")}
              </h3>
              <p className="text-icon-color font-normal rtl:font-almarai">
                {t("featuredOffers.subtitle")}
              </p>
            </div>
          </div>

          <Link
            href="/places"
            className="hidden sm:flex items-center gap-1 group"
          >
            <p className="text-sm text-main-blue font-bold">
              {t("featuredOffers.viewAll")}
            </p>
            <ArrowBtn className="w-5 h-3.5 text-main-blue scale-85 transition-transform duration-300 ease-out ltr:rotate-180 group-hover:-translate-x-1.5 ltr:group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {dummyOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
        <Button
          bgColor="bg-white"
          textColor="text-main-blue"
          className="sm:hidden border border-[#BFDBFE] hover:bg-blue-50 hover:border-main-blue w-fit mt-8"
          href="/places"
        >
          {t("featuredOffers.viewAll")}
        </Button>
      </Container>
    </section>
  );
}

export default SpecialOffer;
