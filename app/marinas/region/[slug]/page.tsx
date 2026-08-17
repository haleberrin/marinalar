import { notFound } from "next/navigation";
import RegionInfo from "./RegionInfo";
import RegionCities from "./RegionCities";
import RegionMarinas from "./RegionMarinas";
import PageHero from "@/app/components/ui/PageHero/PageHero";
import RegionEvents from "./RegionEvents";
import {
  getMarinasByCity,
  getMarinasByRegion,
} from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";
import { getRegionBySlug } from "@/lib/db/regions";
import { getCitiesByRegion } from "@/lib/db/cities";

import { mapPrismaRegionToRegion } from "@/lib/mappers/region.mapper";

import RegionAllMarinas from "./RegionAllMarinas";

import RegionSchema from "./RegionSchema";
import RelatedRegions from "./RelatedRegions";
import RegionFAQ from "./RegionFAQ";
import { mapPrismaCityToCity } from "@/lib/mappers/city.mapper";


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}



export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const prismaRegion = await getRegionBySlug(slug);

if (!prismaRegion) {
  notFound();
}

const region = mapPrismaRegionToRegion(prismaRegion);

const [prismaRegionMarinas, regionCities] = await Promise.all([
  getMarinasByRegion(region.id),
  getCitiesByRegion(region.id),
]);

  const regionMarinas = prismaRegionMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );

  // const regionCities = getCitiesByRegion(region.id);

  const marinasWithCity = prismaRegionMarinas.map(
    (prismaMarina, index) => ({
      marina: regionMarinas[index],
      cityName:
        prismaMarina.city?.name ??
        regionMarinas[index].cityId,
      districtName:
        prismaMarina.district?.name ??
        regionMarinas[index].districtId,
    })
  );

  const citiesWithCount = await Promise.all(
    regionCities.map(async (city) => {
      const prismaCityMarinas = await getMarinasByCity(city.id);
      const uiCity = mapPrismaCityToCity(city);
  
      return {
        ...uiCity,
        marinaCount: prismaCityMarinas.length,
      };
    })
  );

  const topMarina =
    regionMarinas.length > 0
      ? regionMarinas.reduce((best, marina) =>
          (marina.rating ?? 0) > (best.rating ?? 0)
            ? marina
            : best
        )
      : undefined;

  const popularMarinas = [...regionMarinas]
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 3);

    const popularMarinasWithCity = popularMarinas.map((marina) => {
      const prismaMarina = prismaRegionMarinas.find(
        (item) => item.id === marina.id
      );
    
      return {
        marina,
        cityName:
          prismaMarina?.city?.name ??
          marina.cityId,
      };
    });

  return (
    <>
      <RegionSchema
        region={region}
        marinas={regionMarinas}
      />

      <PageHero
        title={region.name}
        description={region.description}
        image={region.coverImage}
      />

      <RegionInfo
        region={region}
        marinaCount={regionMarinas.length}
        cityCount={regionCities.length}
        topMarina={topMarina}
      />

      <RegionCities cities={citiesWithCount} />

      <RegionMarinas
        marinas={popularMarinasWithCity}
      />

      <RegionAllMarinas
        marinas={marinasWithCity}
      />

      <RegionEvents regionId={region.slug} />

      <RegionFAQ faq={region.faq} />

      <RelatedRegions currentRegion={region.slug} />
    </>
  );
}