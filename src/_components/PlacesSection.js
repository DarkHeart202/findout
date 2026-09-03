import PlaceCard from "@/_components/PlaceCard";
import { getTranslations } from "next-intl/server";
import Container from "./Container";
import { ArrowBtn } from "@/icons";
import { Link } from "@/i18n/navigation";
import Button from "./Button";

export default async function PlacesList() {
  const t = await getTranslations("Home");

  const places = [
    {
      id: 1,
      title: t("places.wadiHanifa.title"),
      image: "/cards/card1.webp",
      rating: 4.8,
      views: 256,
      location: t("places.wadiHanifa.location"),
      entry: t("places.wadiHanifa.entry"),
      distance: "6.8",
      badge: null,
    },
    {
      id: 2,
      title: t("places.boulevard.title"),
      image: "/cards/card2.webp",
      rating: 4.9,
      views: 253,
      location: t("places.boulevard.location"),
      entry: t("places.boulevard.entry"),
      distance: "6.8",
      badge: { type: "open", label: t("badges.openNow") },
    },
    {
      id: 3,
      title: t("places.diriyahNights.title"),
      image: "/cards/card3.webp",
      rating: 4.9,
      views: 125,
      location: t("places.diriyahNights.location"),
      entry: t("places.diriyahNights.entry"),
      distance: "6.8",
      badge: { type: "trending", label: t("badges.mostVisited") },
    },
    {
      id: 4,
      title: t("places.silkRoad.title"),
      image: "/cards/card4.png",
      rating: 4.9,
      views: 250,
      location: t("places.silkRoad.location"),
      entry: t("places.silkRoad.entry"),
      distance: "6.8",
      badge: { type: "open", label: t("badges.openNow") },
    },
    {
      id: 5,
      title: t("places.edgeOfTheWorld.title"),
      image: "/cards/card4.png",
      rating: 4.7,
      views: 189,
      location: t("places.edgeOfTheWorld.location"),
      entry: t("places.edgeOfTheWorld.entry"),
      distance: "12.4",
      badge: { type: "trending", label: t("badges.mostVisited") },
    },
    {
      id: 6,
      title: t("places.kingdomTower.title"),
      image: "/cards/Riyadh_Skyline.jpg",
      rating: 4.8,
      views: 310,
      location: t("places.kingdomTower.location"),
      entry: t("places.kingdomTower.entry"),
      distance: "4.2",
      badge: { type: "open", label: t("badges.openNow") },
    },
    {
      id: 7,
      title: t("places.alBujairiHeritage.title"),
      image: "/cards/5.webp",
      rating: 4.9,
      views: 402,
      location: t("places.alBujairiHeritage.location"),
      entry: t("places.alBujairiHeritage.entry"),
      distance: "8.1",
      badge: null,
    },
    {
      id: 8,
      title: t("places.royalGolfClub.title"),
      image: "/cards/event3.webp",
      rating: 4.6,
      views: 94,
      location: t("places.royalGolfClub.location"),
      entry: t("places.royalGolfClub.entry"),
      distance: "15.0",
      badge: { type: "open", label: t("badges.openNow") },
    },
  ];

  return (
    <section className="py-16 bg-app-bg border-1 border-border-section">
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
    </section>
  );
}
