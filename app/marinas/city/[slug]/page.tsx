import { notFound } from "next/navigation";
import { getMarinasByCity } from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";
import { getCityBySlug } from "@/lib/db/cities";
import {
  getDistrictsByCity,
} from "@/lib/db/districts";
import { mapPrismaDistrictToDistrict } from "@/lib/mappers/district.mapper";
import { mapPrismaCityToCity } from "@/lib/mappers/city.mapper";
import PageHero from "@/app/components/ui/PageHero/PageHero";
import CityInfo from "./CityInfo";
import CityDistricts from "./CityDistricts";
import PopularMarinas from "./PopularMarinas";
import CityAllMarinas from "./CityAllMarinas";
import CityEvents from "./CityEvents";
import { getEventsByCity } from "@/lib/db/events";
import { mapPrismaEventToEvent } from "@/lib/mappers/event.mapper";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const prismaCity = await getCityBySlug(slug);

  if (!prismaCity) {
    notFound();
  }
  
  const city = mapPrismaCityToCity(prismaCity);
  
  const [prismaCityMarinas, prismaCityDistricts] = await Promise.all([
    getMarinasByCity(city.id),
    getDistrictsByCity(city.id),
  ]);
  
  const cityMarinas = prismaCityMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );
  const cityDistricts = prismaCityDistricts.map((district) =>
  mapPrismaDistrictToDistrict(district)
);


const prismaCityEvents = await getEventsByCity(city.id);

const cityEvents = prismaCityEvents.map((event) =>
  mapPrismaEventToEvent(event)
);

  const topMarina =
    cityMarinas.length > 0
      ? cityMarinas.reduce((best, marina) =>
          (marina.rating ?? 0) > (best.rating ?? 0)
            ? marina
            : best
        )
      : undefined;

      const popularMarinas = [...cityMarinas]
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 3)
      .map((marina) => {
        const prismaMarina = prismaCityMarinas.find(
          (item) => item.id === marina.id
        );
    
        return {
          marina,
          districtName:
            prismaMarina?.district?.name ??
            marina.districtId,
        };
      });

      const allMarinasWithDistrict = cityMarinas.map((marina) => {
        const prismaMarina = prismaCityMarinas.find(
          (item) => item.id === marina.id
        );
      
        return {
          marina,
          districtName:
            prismaMarina?.district?.name ??
            marina.districtId,
        };
      });

  return (
    <>
      <PageHero
        title={city.name}
        description={city.description}
        image={city.coverImage ?? "/images/default-city.jpg"}
      />

      <CityInfo
        city={city}
        marinaCount={cityMarinas.length}
        districtCount={cityDistricts.length}
        topMarina={topMarina}
      />

      <CityDistricts districts={cityDistricts} />

      <PopularMarinas marinas={popularMarinas} />

      <CityEvents events={cityEvents} />

      <CityAllMarinas marinas={allMarinasWithDistrict} />
    </>
  );
}