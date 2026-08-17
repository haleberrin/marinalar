import { prisma } from "@/lib/prisma";
import { marinas } from "@/lib/marinas";
import { Prisma } from "@prisma/client";

export async function seedMarinas() {
  console.log("⚓ Marinas");

  for (const marina of marinas) {
    console.log(`  → ${marina.name}`);

    await prisma.marina.upsert({
      where: {
        id: marina.id,
      },

      update: {
        slug: marina.slug,
        name: marina.name,
        summary: marina.summary,
        description: marina.description,

        rating: marina.rating,

        regionId: marina.regionId,
        cityId: marina.cityId,
        districtId: marina.districtId,

        latitude: marina.coordinates.lat,
        longitude: marina.coordinates.lng,

        logo: marina.media.logo,
        coverImage: marina.media.coverImage,

        seaBerth: marina.capacity.seaBerth,
        landBerth: marina.capacity.landBerth,
        maxBoatLength: marina.capacity.maxBoatLength,
        depth: marina.capacity.depth,

        phone: marina.contact.phone,
        email: marina.contact.email,
        website: marina.contact.website,
        vhfChannel: marina.contact.vhfChannel,

        openingYear: marina.openingYear,

        blueFlag: marina.blueFlag ?? false,
        petFriendly: marina.petFriendly ?? false,
        customsClearance: marina.customsClearance ?? false,
        charterAvailable: marina.charterAvailable ?? false,
        winterStorageAvailable: marina.winterStorageAvailable ?? false,

        nearestAirport: marina.nearestAirport,
        airportDistance: marina.airportDistance,

        scores: marina.scores
          ? (marina.scores as unknown as Prisma.InputJsonValue)
          : undefined,

        recommendedFor: marina.recommendedFor
          ? (marina.recommendedFor as unknown as Prisma.InputJsonValue)
          : undefined,

        aiTags: marina.aiTags
          ? (marina.aiTags as unknown as Prisma.InputJsonValue)
          : undefined,

        tags: marina.tags
          ? (marina.tags as unknown as Prisma.InputJsonValue)
          : undefined,
      },

      create: {
        id: marina.id,
        slug: marina.slug,

        name: marina.name,
        summary: marina.summary,
        description: marina.description,

        rating: marina.rating,

        regionId: marina.regionId,
        cityId: marina.cityId,
        districtId: marina.districtId,

        latitude: marina.coordinates.lat,
        longitude: marina.coordinates.lng,

        logo: marina.media.logo,
        coverImage: marina.media.coverImage,

        seaBerth: marina.capacity.seaBerth,
        landBerth: marina.capacity.landBerth,
        maxBoatLength: marina.capacity.maxBoatLength,
        depth: marina.capacity.depth,

        phone: marina.contact.phone,
        email: marina.contact.email,
        website: marina.contact.website,
        vhfChannel: marina.contact.vhfChannel,

        openingYear: marina.openingYear,

        blueFlag: marina.blueFlag ?? false,
        petFriendly: marina.petFriendly ?? false,
        customsClearance: marina.customsClearance ?? false,
        charterAvailable: marina.charterAvailable ?? false,
        winterStorageAvailable: marina.winterStorageAvailable ?? false,

        nearestAirport: marina.nearestAirport,
        airportDistance: marina.airportDistance,

        scores: marina.scores
          ? (marina.scores as unknown as Prisma.InputJsonValue)
          : undefined,

        recommendedFor: marina.recommendedFor
          ? (marina.recommendedFor as unknown as Prisma.InputJsonValue)
          : undefined,

        aiTags: marina.aiTags
          ? (marina.aiTags as unknown as Prisma.InputJsonValue)
          : undefined,

        tags: marina.tags
          ? (marina.tags as unknown as Prisma.InputJsonValue)
          : undefined,
      },
    });

    // Images
    await prisma.marinaImage.deleteMany({
      where: {
        marinaId: marina.id,
      },
    });

    if (marina.media.gallery?.length) {
      await prisma.marinaImage.createMany({
        data: marina.media.gallery.map((image, index) => ({
          image,
          sortOrder: index,
          marinaId: marina.id,
        })),
      });
    }

    // Categories
    await prisma.marinaCategory.deleteMany({
      where: {
        marinaId: marina.id,
      },
    });

    for (const categorySlug of marina.categories) {
      const category = await prisma.category.findUnique({
        where: {
          slug: categorySlug,
        },
      });

      if (!category) {
        console.warn(
          `⚠️ Category bulunamadı: ${categorySlug} (${marina.name})`
        );
        continue;
      }

      await prisma.marinaCategory.create({
        data: {
          marinaId: marina.id,
          categoryId: category.id,
        },
      });
    }

    // Amenities
    await prisma.marinaAmenity.deleteMany({
      where: {
        marinaId: marina.id,
      },
    });

    for (const amenitySlug of marina.amenities) {
      const amenity = await prisma.amenity.findUnique({
        where: {
          slug: amenitySlug,
        },
      });

      if (!amenity) {
        console.warn(
          `⚠️ Amenity bulunamadı: ${amenitySlug} (${marina.name})`
        );
        continue;
      }

      await prisma.marinaAmenity.create({
        data: {
          marinaId: marina.id,
          amenityId: amenity.id,
        },
      });
    }

    // Facilities
    await prisma.marinaFacility.deleteMany({
      where: {
        marinaId: marina.id,
      },
    });

    for (const facilitySlug of marina.facilities) {
      const facility = await prisma.facility.findUnique({
        where: {
          slug: facilitySlug,
        },
      });

      if (!facility) {
        console.warn(
          `⚠️ Facility bulunamadı: ${facilitySlug} (${marina.name})`
        );
        continue;
      }

      await prisma.marinaFacility.create({
        data: {
          marinaId: marina.id,
          facilityId: facility.id,
        },
      });
    }
  }

  console.log(`✅ ${marinas.length} Marinas`);
}