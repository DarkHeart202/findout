import CategorySection from "@/_components/CategorySection";
import HeroSection from "@/_components/HeroSection";
import JoinPartnerBanner from "@/_components/JoinPartnerBanner";
import PartnerSection from "@/_components/PartnerSection";
import PlacesSection from "@/_components/PlacesSection";
import SpecialOffer from "@/_components/SpecialOffer";
import UpcomingEvents from "@/_components/UpcomingEvents";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <PlacesSection />
      <UpcomingEvents />
      <SpecialOffer />
      <PartnerSection />
      <JoinPartnerBanner />
    </>
  );
}
