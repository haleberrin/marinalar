import EventCard from "@/app/events/EventCard";
import { getEventsByRegion } from "@/lib/db/events";
import { mapPrismaEventToEvent } from "@/lib/mappers/event.mapper";
import { getCityById } from "@/lib/db/cities";
import { getDistrictById } from "@/lib/db/districts";


interface Props {
  regionId: string;
}

export default async function RegionEvents({
  regionId,
}: Props) {
  const prismaRegionEvents =
    await getEventsByRegion(regionId);

  const regionEvents = prismaRegionEvents.map((event) =>
    mapPrismaEventToEvent(event)
  );

  if (!regionEvents.length) return null;

  const regionEventsWithLocation = await Promise.all(
    regionEvents.map(async (event) => {
      const [city, district] = await Promise.all([
        event.location.cityId
          ? getCityById(event.location.cityId)
          : Promise.resolve(null),
  
        event.location.districtId
          ? getDistrictById(event.location.districtId)
          : Promise.resolve(null),
      ]);
  
      return {
        event,
        cityName: city?.name,
        districtName: district?.name,
      };
    })
  );

  return (
    <section className="bg-[#EEF5F9] px-[8%] lg:px-[12%] py-20">

      <div className="mb-10">

        <span className="text-primary font-semibold uppercase tracking-widest">
          Etkinlikler
        </span>

        <h2 className="mt-2 font-cormorant-garamont text-5xl font-bold text-darknavy">
          Bölgedeki Etkinlikler
        </h2>

        <p className="mt-4 max-w-3xl text-darknavy/70 leading-relaxed">
          Bu bölgede düzenlenen yelken yarışlarını, marina festivallerini,
          fuarları ve diğer denizcilik organizasyonlarını keşfedin.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {regionEventsWithLocation.map(
          ({ event, cityName, districtName }) => (
            <EventCard
              key={event.slug}
              event={event}
              cityName={cityName}
              districtName={districtName}
            />
          )
        )}

      </div>

    </section>
  );
}