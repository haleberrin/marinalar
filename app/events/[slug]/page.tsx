import { notFound } from "next/navigation";

import { getEventBySlug } from "@/lib/db/events";
import { mapPrismaEventToEvent } from "@/lib/mappers/event.mapper";
import { getCityById } from "@/lib/db/cities";
import { getDistrictById } from "@/lib/db/districts";
import { getRegionById } from "@/lib/db/regions";


import EventHero from "./EventHero";
import EventInfo from "./EventInfo";
import EventLocation from "./EventLocation";
import EventGallery from "./EventGallery";
import EventCTA from "./EventCTA";
import EventRelatedMarinas from "./EventRelatedMarinas";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { slug } = await params;

  const prismaEvent = await getEventBySlug(slug);

if (!prismaEvent) {
  notFound();
}

const event = mapPrismaEventToEvent(prismaEvent);

  const [city, district, region] = await Promise.all([
    event.location.cityId
      ? getCityById(event.location.cityId)
      : Promise.resolve(null),
  
    event.location.districtId
      ? getDistrictById(event.location.districtId)
      : Promise.resolve(null),
  
    event.location.regionId
      ? getRegionById(event.location.regionId)
      : Promise.resolve(null),
  ]);

  return (
    <main>

      <EventHero
        event={event}
        cityName={city?.name}
        districtName={district?.name}
        regionName={region?.name}
      />

      <EventInfo
        event={event}
        cityName={city?.name}
        districtName={district?.name}
        regionName={region?.name}
      />

      <EventGallery event={event} />

      <EventLocation
        event={event}
        cityName={city?.name}
        districtName={district?.name}
        regionName={region?.name}
      />

      <EventRelatedMarinas
        event={event}
        cityName={city?.name}
        districtName={district?.name}
      />

      <EventCTA event={event} />

    </main>
  );
}