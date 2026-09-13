import HeroSectionPlaces from "@/_components/Places/HeroSectionPlaces";
import { getTranslations } from "next-intl/server";
import PlacesDetails from "@/_components/Places/PlacesDetails";

async function PlacesPage() {
  // استخدام getTranslations بدون حد للـ Namespace لضمان الوصول لكافة المفاتيح بشكل دقيق
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
      category: "entertainment",
      lat: 24.6,
      lng: 46.6167,
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
      category: "entertainment",
      lat: 24.77,
      lng: 46.59,
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
      category: "events",
      lat: 24.7333,
      lng: 46.575,
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
      category: "events",
      lat: 24.6311,
      lng: 46.7133,
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
      category: "entertainment",
      lat: 24.9442,
      lng: 45.9931,
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
      category: "hotels",
      lat: 24.7114,
      lng: 46.6744,
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
      category: "restaurants",
      lat: 24.7338,
      lng: 46.5755,
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
      category: "entertainment",
      lat: 24.835,
      lng: 46.85,
    },
  ];

  return (
    <>
      <HeroSectionPlaces />
      <PlacesDetails initialPlaces={places} />
    </>
  );
}

export default PlacesPage;
