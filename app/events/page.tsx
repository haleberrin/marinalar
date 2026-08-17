import PageHero from "@/app/components/ui/PageHero/PageHero";
import EventsClient from "./EventsClient";
import { getEvents } from "@/lib/db/events";
import { mapPrismaEventToEvent } from "@/lib/mappers/event.mapper";
import { getCityById } from "@/lib/db/cities";
import { getDistrictById } from "@/lib/db/districts";

export default async function EventsPage() {

  const prismaEvents = await getEvents();

const events = prismaEvents.map((event) =>
  mapPrismaEventToEvent(event)
);

  const eventsWithLocation = await Promise.all(
    events.map(async (event) => {
      const [city, district] = await Promise.all([
        event.location.cityId
          ? getCityById(event.location.cityId)
          : Promise.resolve(null),
  
        event.location.districtId
          ? getDistrictById(event.location.districtId)
          : Promise.resolve(null),
      ]);
  
      return {
        ...event,
        cityName: city?.name,
        districtName: district?.name,
      };
    })
  );

  return (
    <>
      <PageHero
        title="Etkinlikler"
        description="Türkiye'nin marina bölgelerinde gerçekleşen yelken yarışlarını, yat festivallerini ve denizcilik etkinliklerini keşfedin."
        image="/images/events/events-hero.jpg"
      />

      <section className="px-[8%] py-24 lg:px-[12%]">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Marina Etkinlikleri
            </p>

            <h2 className="
              mt-3
              font-cormorant-garamont
              text-5xl
              font-bold
              text-darknavy
            ">
              Denizcilik Dünyasından Etkinlikler
            </h2>

            <p className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-darknavy/70
            ">
              Türkiye'nin kıyılarında gerçekleşen önemli etkinlikleri,
              yarışları ve festivalleri keşfedin.
            </p>
          </div>

      

          <EventsClient events={eventsWithLocation} />

        </div>
      </section>
    </>
  );
}