import HeroSectionEvents from "@/_components/Events/HeroSectionEvents";
import SpecialEvent from "@/_components/Events/SpecialEvent";
import EventDetailsSection from "@/_components/Events/EventDetailsSection";
import EventCtaBanner from "@/_components/Events/EventCtaBanner";

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
