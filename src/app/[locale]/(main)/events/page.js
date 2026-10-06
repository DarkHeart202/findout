import HeroSectionEvents from "@/_components/Events/HeroSectionEvents";
import SpecialEvent from "@/_components/Events/SpecialEvent";
import EventDetailsSection from "@/_components/Events/EventDetailsSection";
import EventCtaBanner from "@/_components/Events/EventCtaBanner";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRtl = locale === "ar";
  return {
    title: isRtl ? "الفعاليات" : "Events", // ترجع النص مباشرة، مثلاً: "المفضلة"
  };
}

function HomePage() {
  return (
    <>
      <HeroSectionEvents />
      <SpecialEvent />
      <EventDetailsSection />
      <EventCtaBanner />
    </>
  );
}

export default HomePage;
