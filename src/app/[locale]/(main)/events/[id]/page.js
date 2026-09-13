import { dummyEvents } from "@/data/event";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function EventDetailPage({ params }) {
  const { id, locale } = await params;

  // البحث عن الفعالية بالـ id
  const event = dummyEvents.find((e) => e.id === id);

  // لو مفيش فعالية بالـ id ده، اعرض صفحة 404
  if (!event) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6">
        <Image
          src={event.image}
          alt={event.title[locale]}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">{event.title[locale]}</h1>

      {event.description && (
        <p className="text-gray-600 mb-6">{event.description[locale]}</p>
      )}

      <div className="flex gap-4">
        <span>📍 {event.location[locale]}</span>
        {event.price && <span>🏷️ {event.price[locale]}</span>}
        <span>📅 {event.date[locale]}</span>
      </div>
    </main>
  );
}
