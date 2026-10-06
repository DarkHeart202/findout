import CategorySection from "@/_components/CategorySection";
import HeroSection from "@/_components/HeroSection";
import JoinPartnerBanner from "@/_components/JoinPartnerBanner";
import PartnerSection from "@/_components/PartnerSection";
import PlacesSection from "@/_components/PlacesSection";
import SpecialOffer from "@/_components/SpecialOffer";
import UpcomingEvents from "@/_components/UpcomingEvents";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    return (
      <main className="flex-1">
        <Header />
        <HeroSection />
        <CategorySection />
        <PlacesSection />
        <UpcomingEvents />
        <SpecialOffer />
        <PartnerSection />
        <JoinPartnerBanner />
        <Footer />
      </main>
    );
  }

  return redirect(`${locale}/auth/login`);
}
