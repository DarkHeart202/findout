"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// تصحيح أوانة الأيقونات الافتراضية لـ Leaflet في Next.js
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapView({
  places = [],
  center = [24.7136, 46.6753], // إحداثيات افتراضية (مثلاً الرياض)
  zoom = 12,
}) {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* طبقة الخريطة من OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* عرض العلامات (Markers) لكل الأماكن */}
        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat || 24.7136, place.lng || 46.6753]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-1 text-right">
                <h3 className="font-semibold text-sm">{place.title}</h3>
                <p className="text-xs text-gray-500">{place.location}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
