import { useTranslations } from "next-intl";
import HeroSection from "@/_components/HeroSection";
import CategorySection from "@/_components/CategorySection";
import PlacesSection from "@/_components/PlacesSection";
import UpcomingEvents from "@/_components/UpcomingEvents";
import SpecialOffer from "@/_components/SpecialOffer";
import PartnerSection from "@/_components/PartnerSection";
import Container from "@/_components/Container";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <HeroSection />
      <CategorySection />
      <PlacesSection />
      <UpcomingEvents />
      <SpecialOffer />
      <PartnerSection />
      <section className="py-16 bg-app-bg border border-border-section">
        <Container>
          <div className="relative flex justify-between bg-linear-to-r from-[#017BBA] to-[#002D6E] p-11.5">
            <div>
              <div></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
