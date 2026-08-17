"use client";

import { useEffect, useState } from "react";
import type { Event } from "@/types/event";
import type { Marina } from "@/types/marina";

interface EventMapProps {
  event: Event;
  marinas: Marina[];
}

export default function EventMap({
  event,
  marinas,
}: EventMapProps) {
  
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: typeof import("react-leaflet").MapContainer;
    TileLayer: typeof import("react-leaflet").TileLayer;
    Marker: typeof import("react-leaflet").Marker;
    Popup: typeof import("react-leaflet").Popup;
  } | null>(null);

  const [icons, setIcons] = useState<{
    eventIcon: typeof import("leaflet").Icon.prototype;
    marinaIcon: typeof import("leaflet").Icon.prototype;
  } | null>(null);

  useEffect(() => {
    async function loadMap() {
      const leaflet = await import("leaflet");
      const reactLeaflet = await import("react-leaflet");

      await import("leaflet/dist/leaflet.css");

      // Etkinlik ikonu
      const eventIcon = leaflet.divIcon({
        className: "",
        html: `
          <div style="
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #e07a5f;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            border: 3px solid white;
            box-shadow: 0 4px 14px rgba(0,0,0,.35);
          ">
            ★
          </div>
        `,
        iconSize: [42, 42],
        iconAnchor: [21, 21],
        popupAnchor: [0, -21],
      });

      // Marina ikonu
      const marinaIcon = leaflet.divIcon({
        className: "",
        html: `
          <div style="
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: #1e3a5f;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 17px;
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,.3);
          ">
            ⚓
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -17],
      });

      setMapComponents({
        MapContainer: reactLeaflet.MapContainer,
        TileLayer: reactLeaflet.TileLayer,
        Marker: reactLeaflet.Marker,
        Popup: reactLeaflet.Popup,
      });

      setIcons({
        eventIcon,
        marinaIcon,
      });
    }

    loadMap();
  }, []);

  const coordinates = event.location.coordinates;


    

  if (!coordinates) {
    return (
      <div className="
        flex
        min-h-90
        items-center
        justify-center
        rounded-[32px]
        bg-slate-100
      ">
        <p className="text-darknavy/50">
          Konum koordinatları mevcut değil.
        </p>
      </div>
    );
  }

  if (!MapComponents || !icons) {
    return (
      <div className="
        flex
        min-h-90
        items-center
        justify-center
        rounded-[32px]
        bg-slate-100
      ">
        <p className="text-darknavy/50">
          Harita yükleniyor...
        </p>
      </div>
    );
  }

  const {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } = MapComponents;

 

  return (
    <div className="
      h-100
      overflow-hidden
      rounded-[32px]
      border
      border-slate-200
      shadow-xl
    ">
      <MapContainer
        center={[
          coordinates.lat,
          coordinates.lng,
        ]}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ETKİNLİK MARKER'I */}

        <Marker
          position={[
            coordinates.lat,
            coordinates.lng,
          ]}
          icon={icons.eventIcon}
        >
          <Popup>
            <strong>{event.title}</strong>

            <br />

            {event.location.name}
          </Popup>
        </Marker>


        {/* İLÇEDEKİ MARİNALAR */}

        {marinas.map((marina) => (
          <Marker
            key={marina.id}
            position={[
              marina.coordinates.lat,
              marina.coordinates.lng,
            ]}
            icon={icons.marinaIcon}
          >
            <Popup>
              <strong>
                {marina.name}
              </strong>

              <br />

              <a
                href={`/marinas/${marina.slug}`}
                className="text-primary"
              >
                Marinayı İncele →
              </a>
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  );
}