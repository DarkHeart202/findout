"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// تخصيص شكل الماركر (يمكنك وضع رابط أيقونة مخصصة هنا)
const customIcon = L.icon({
  iconUrl: "/vectors/Mark.svg", // أو مسار صورة محلية عندك في مجلد public مثل "/images/custom-pin.png"
  iconRetinaUrl: "/vectors/Mark.svg",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/vectors/Mark.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function MapView({
  places = [],
  center = [24.7136, 46.6753],
  zoom = 12,
  locale = "ar",
}) {
  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-[0_0_11.7px_rgba(0,0,0,0.04)]">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        attributionControl={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat || 24.7136, place.lng || 46.6753]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-1 text-right rtl:font-almarai">
                <h3 className="font-semibold text-sm text-slate-800">
                  {typeof place.title === "object"
                    ? place.title[locale]
                    : place.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {typeof place.location === "object"
                    ? place.location[locale]
                    : place.location}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
