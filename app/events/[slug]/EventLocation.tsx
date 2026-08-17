import {
  MapPin,
  Navigation,
  Anchor,
} from "lucide-react";

import { Event } from "@/types/event";


import { getMarinasByDistrict } from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";

import Link from "next/link";
import EventMap from "../EventMap";

interface EventLocationProps {
  event: Event;
  cityName?: string;
  districtName?: string;
  regionName?: string;
}

export default async function EventLocation({
  event,
  cityName,
  districtName,
  regionName,
}: EventLocationProps) {


  const prismaDistrictMarinas = event.location.districtId
    ? await getMarinasByDistrict(event.location.districtId)
    : [];

  const districtMarinas = prismaDistrictMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );

  return (
    <section className="px-[8%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Etkinlik Konumu
          </p>

          <h2
            className="
              mt-3
              font-cormorant-garamont
              text-5xl
              font-bold
              text-darknavy
            "
          >
            Etkinliğin Gerçekleştiği Yer
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* KONUM BİLGİLERİ */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-xl
            "
          >
            <div className="space-y-7">
              {regionName && (
                <div className="flex items-start gap-4">
                  <Navigation
                    size={24}
                    className="mt-1 text-primary"
                  />

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-darknavy/50
                      "
                    >
                      Bölge
                    </p>

                    <p className="mt-2 text-lg font-semibold text-darknavy">
                      {regionName}
                    </p>
                  </div>
                </div>
              )}

              {cityName && (
                <div className="flex items-start gap-4">
                  <MapPin
                    size={24}
                    className="mt-1 text-primary"
                  />

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-darknavy/50
                      "
                    >
                      Şehir
                    </p>

                    <p className="mt-2 text-lg font-semibold text-darknavy">
                      {cityName}
                    </p>
                  </div>
                </div>
              )}

              {districtName && (
                <div className="flex items-start gap-4">
                  <MapPin
                    size={24}
                    className="mt-1 text-primary"
                  />

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-darknavy/50
                      "
                    >
                      İlçe
                    </p>

                    <p className="mt-2 text-lg font-semibold text-darknavy">
                      {districtName}
                    </p>
                  </div>
                </div>
              )}

              {districtMarinas.length > 0 && (
                <div className="flex items-start gap-4">
                  <Anchor
                    size={24}
                    className="mt-1 shrink-0 text-primary"
                  />

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-darknavy/50
                      "
                    >
                      Bölgedeki Marinalar
                    </p>

                    <div className="mt-3 space-y-2">
                      {districtMarinas.map((marina) => (
                        <Link
                          key={marina.id}
                          href={`/marinas/${marina.slug}`}
                          className="
                            block
                            text-lg
                            font-semibold
                            text-darknavy
                            transition-colors
                            hover:text-primary
                          "
                        >
                          {marina.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* HARİTA ALANI */}

          <EventMap
  event={event}
  marinas={districtMarinas}
/>
        </div>
      </div>
    </section>
  );
}