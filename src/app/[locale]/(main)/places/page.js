import HeroSectionPlaces from "@/_components/Places/HeroSectionPlaces";
import PlacesDetails from "@/_components/Places/PlacesDetails";
import { places } from "@/data/places";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRtl = locale === "ar";
  return {
    title: isRtl ? "الاماكن" : "Places", // ترجع النص مباشرة، مثلاً: "المفضلة"
  };
}

async function PlacesPage() {
  // استخدام getTranslations بدون حد للـ Namespace لضمان الوصول لكافة المفاتيح بشكل دقيق

  return (
    <>
      <HeroSectionPlaces />
      <PlacesDetails initialPlaces={places} />
    </>
  );
}

export default PlacesPage;
