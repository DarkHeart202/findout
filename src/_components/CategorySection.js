import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Container from "./Container";

const categories = [
  { id: "events", image: "/category/1.webp", href: "/events" },
  { id: "hotels", image: "/category/3.webp", href: "/hotels" },
  { id: "restaurants", image: "/category/2.webp", href: "/restaurants" },
  {
    id: "entertainment",
    image: "/category/4.webp",
    href: "/entertainment",
  },
];

function CategorySection() {
  const t = useTranslations("Home.categories");

  return (
    <section className="py-16 bg-white border-1 border-border-section">
      <Container>
        <h2 className="text-3xl text-header font-bold">{t("title")}</h2>
        <p className="text-icon-color text-base rtl:font-almarai  mt-1">
          {t("description")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="relative rounded-2xl overflow-hidden group"
            >
              <Image
                src={category.image}
                alt={t(`${category.id}.title`)}
                width={300}
                height={200}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* overLay bg */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/20 to-[#0F172A] via-[57%] opacity-85 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 start-4 ">
                <h3 className="text-white text-[18px] mb-0.5 font-bold">
                  {t(`${category.id}.title`)}
                </h3>
                <p className="text-sm text-subtitle font-medium">
                  {t(`${category.id}.count`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CategorySection;
