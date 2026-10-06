import PlaceCard from "@/_components/PlaceCard";
import { Link } from "@/i18n/navigation";
import { ArrowBtn } from "@/icons";
import { getTranslations } from "next-intl/server";
import Button from "./Button";
import Container from "./Container";
import { places as allPlaces } from "@/data/places";
import Reveal from "./Reveal";

export default async function PlacesList() {
  const t = await getTranslations("Home");
  const places = allPlaces;

  return (
    <Reveal className="py-16 bg-app-bg border border-app-border-section">
      <Container className="flex flex-col items-center">
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="flex flex-col gap-2 text-base font-bold  ">
            <span className=" text-main-blue rtl:font-almarai">
              {t("featuredPlaces.eyebrow")}
            </span>
            <div>
              <h3 className="text-header text-3xl mb-1">
                {t("featuredPlaces.title")}
              </h3>
              <p className="text-icon-color font-normal rtl:font-almarai">
                {places.length} {t("featuredPlaces.resultsCount")}
              </p>
            </div>
          </div>
          <Link
            href="/places"
            className="hidden sm:flex items-center gap-1 group"
          >
            <p className="text-sm text-main-blue font-bold">
              {t("featuredPlaces.viewAll")}
            </p>
            <ArrowBtn className="w-5 h-3.5 text-main-blue scale-85 transition-transform duration-300 ease-out ltr:rotate-180 group-hover:-translate-x-1.5 ltr:group-hover:translate-x-1.5" />
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {places.map((item) => (
            <PlaceCard key={item.id} place={item} />
          ))}
        </div>
        <Button
          bgColor="bg-white"
          textColor="text-main-blue"
          className="border border-[#BFDBFE] hover:bg-blue-50 hover:border-main-blue w-fit mt-8"
          href="/places"
        >
          {t("featuredPlaces.viewAllPlaces")}
        </Button>
      </Container>
    </Reveal>
  );
}
