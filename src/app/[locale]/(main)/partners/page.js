import HeroSectionPartner from "@/_components/Partners/HeroSectionPartner";
import WhyUs from "@/_components/Partners/WhyUs";
import HowStart from "@/_components/Partners/HowStart";
import ContactSection from "@/_components/Partners/ContactSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRtl = locale === "ar";
  return {
    title: isRtl ? "الشركاء" : "Partners", // ترجع النص مباشرة، مثلاً: "المفضلة"
  };
}

function HomePage() {
  return (
    <>
      <HeroSectionPartner />
      <WhyUs />
      <HowStart />
      <ContactSection />
    </>
  );
}

export default HomePage;
