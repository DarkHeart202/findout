import AboutHeroSection from "@/_components/AboutUs/AboutHeroSection";
import AboutContent from "@/_components/AboutUs/AboutContent";
import FeaturesSection from "@/_components/AboutUs/FeaturesSection";
import AboutWhyUs from "@/_components/AboutUs/AboutWhyUs";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRtl = locale === "ar";
  return {
    title: isRtl ? "من نحن" : "About Us", // ترجع النص مباشرة، مثلاً: "المفضلة"
  };
}

function HomePage() {
  return (
    <>
      <AboutHeroSection />
      <AboutContent />
      <FeaturesSection />
      <AboutWhyUs />
    </>
  );
}

export default HomePage;
