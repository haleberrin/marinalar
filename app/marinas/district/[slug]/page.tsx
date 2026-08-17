import { notFound } from "next/navigation";

import { getDistrictBySlug } from "@/lib/db/districts";
import { mapPrismaDistrictToDistrict } from "@/lib/mappers/district.mapper";
import { getMarinasByDistrict } from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";
import { getCityById } from "@/lib/db/cities";
import PageHero from "@/app/components/ui/PageHero/PageHero";
import DistrictInfo from "./DistrictInfo";
import PopularMarinas from "../../city/[slug]/PopularMarinas";
import DistrictAllMarinas from "./DistrictAllMarinas";

import { getEventsByDistrict } from "@/lib/db/events";
import { mapPrismaEventToEvent } from "@/lib/mappers/event.mapper";
import DistrictEvents from "./DistrictEvents";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const prismaDistrict = await getDistrictBySlug(slug);

  if (!prismaDistrict) {
    notFound();
  }

  const district = mapPrismaDistrictToDistrict(prismaDistrict);

  const prismaDistrictEvents =
  await getEventsByDistrict(district.id);

const districtEvents = prismaDistrictEvents.map((event) =>
  mapPrismaEventToEvent(event)
);

  const prismaDistrictMarinas =
    await getMarinasByDistrict(district.id);

  const districtMarinas = prismaDistrictMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );

  const city = district.cityId
  ? await getCityById(district.cityId)
  : null;

  const topMarina =
    districtMarinas.length > 0
      ? districtMarinas.reduce((best, marina) =>
          (marina.rating ?? 0) > (best.rating ?? 0)
            ? marina
            : best
        )
      : undefined;

  const popularMarinas = [...districtMarinas]
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 3)
    .map((marina) => ({
      marina,
      districtName: district.name,
    }));

  const allMarinasWithDistrict = districtMarinas.map((marina) => ({
    marina,
    districtName: district.name,
  }));

  return (
    <>
      <PageHero
        title={district.name}
        description={district.description}
        image={
          district.coverImage ??
          "/images/default-district.jpg"
        }
      />

<DistrictInfo
  district={district}
  marinaCount={districtMarinas.length}
  topMarina={topMarina}
  cityName={city?.name ?? district.cityId ?? "-"}
/>

      <PopularMarinas marinas={popularMarinas} />

      <DistrictEvents events={districtEvents} />

      <DistrictAllMarinas
        marinas={allMarinasWithDistrict}
      />
    </>
  );
}