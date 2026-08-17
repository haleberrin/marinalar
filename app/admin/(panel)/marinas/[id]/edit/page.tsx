import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import MarinaEditForm from "./MarinaEditForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditMarinaPage({
  params,
}: PageProps) {
  const { id } = await params;

  const [
    marina,
    regions,
    cities,
    districts,
    categories,
    amenities,
    facilities,
  ] = await Promise.all([
    prisma.marina.findUnique({
        where: {
          id,
        },
        include: {
          categories: true,
          amenities: true,
          facilities: true,
        },
      }),

    prisma.region.findMany({
      orderBy: {
        name: "asc",
      },
    }),

    prisma.city.findMany({
      orderBy: {
        name: "asc",
      },
    }),

    prisma.district.findMany({
      orderBy: {
        name: "asc",
      },
    }),

    prisma.category.findMany({
        orderBy: {
          title: "asc",
        },
      }),
      
      prisma.amenity.findMany({
        orderBy: {
          title: "asc",
        },
      }),
      
      prisma.facility.findMany({
        orderBy: {
          title: "asc",
        },
      }),
  ]);

  if (!marina) {
    notFound();
  }

  const description = Array.isArray(marina.description)
  ? (marina.description as unknown[])
      .filter(
        (item): item is string =>
          typeof item === "string"
      )
      .join("\n")
  : "";

  return (
    <section>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">
          Marina Yönetimi
        </p>

        <h1 className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
          Marina Düzenle
        </h1>

        <p className="mt-3 text-darknavy/60">
          {marina.name} marina bilgilerini güncelleyin.
        </p>
      </div>

      <MarinaEditForm
        marina={{
          id: marina.id,
          name: marina.name,
          slug: marina.slug,
          summary: marina.summary,
          description,

          rating: marina.rating,

          regionId: marina.regionId,
          cityId: marina.cityId,
          districtId: marina.districtId,

          latitude: marina.latitude,
          longitude: marina.longitude,

          coverImage: marina.coverImage,

          seaBerth: marina.seaBerth,
          landBerth: marina.landBerth,
          maxBoatLength: marina.maxBoatLength,
          depth: marina.depth,

          phone: marina.phone,
          email: marina.email,
          website: marina.website,
          vhfChannel: marina.vhfChannel,

          openingYear: marina.openingYear,

          nearestAirport: marina.nearestAirport,
          airportDistance: marina.airportDistance,

          blueFlag: marina.blueFlag,
          petFriendly: marina.petFriendly,
          customsClearance: marina.customsClearance,
          charterAvailable: marina.charterAvailable,
          winterStorageAvailable:
            marina.winterStorageAvailable,
        }}
        regions={regions.map((region) => ({
          id: region.id,
          name: region.name,
        }))}
        cities={cities.map((city) => ({
          id: city.id,
          name: city.name,
          regionId: city.regionId,
        }))}
        districts={districts.map((district) => ({
          id: district.id,
          name: district.name,
          cityId: district.cityId,
        }))}
        categories={categories.map((category) => ({
            id: category.id,
            title: category.title,
          }))}
          
          amenities={amenities.map((amenity) => ({
            id: amenity.id,
            title: amenity.title,
          }))}
          
          facilities={facilities.map((facility) => ({
            id: facility.id,
            title: facility.title,
          }))}
          
          selectedCategoryIds={marina.categories.map(
            (item) => item.categoryId
          )}
          
          selectedAmenityIds={marina.amenities.map(
            (item) => item.amenityId
          )}
          
          selectedFacilityIds={marina.facilities.map(
            (item) => item.facilityId
          )}
      />
    </section>
  );
}