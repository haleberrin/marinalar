import { prisma } from "@/lib/prisma";
import { events } from "@/lib/events";
import { Prisma } from "@prisma/client";

export async function seedEvents() {
  console.log("🎉 Events");

  for (const event of events) {
    console.log(`  → ${event.title}`);

    await prisma.event.upsert({
      where: {
        id: event.id,
      },

      update: {
        slug: event.slug,
        title: event.title,

        description:
          event.description as unknown as Prisma.InputJsonValue,

        type: event.type,

        regionId: event.location.regionId,
        cityId: event.location.cityId,
        districtId: event.location.districtId,

        marinaId:
          event.location.marinaId ?? null,

        locationName:
          event.location.name ?? null,

        latitude:
          event.location.coordinates?.lat ?? null,

        longitude:
          event.location.coordinates?.lng ?? null,

        featuredImage: event.featuredImage,

        startDate: new Date(event.startDate),

        endDate: event.endDate
          ? new Date(event.endDate)
          : null,

        website:
          event.website?.trim()
            ? event.website
            : null,

        tags:
          event.tags as unknown as Prisma.InputJsonValue,

        featured: event.featured ?? false,
      },

      create: {
        id: event.id,
        slug: event.slug,
        title: event.title,

        description:
          event.description as unknown as Prisma.InputJsonValue,

        type: event.type,

        regionId: event.location.regionId,
        cityId: event.location.cityId,
        districtId: event.location.districtId,

        marinaId:
          event.location.marinaId ?? null,

        locationName:
          event.location.name ?? null,

        latitude:
          event.location.coordinates?.lat ?? null,

        longitude:
          event.location.coordinates?.lng ?? null,

        featuredImage: event.featuredImage,

        startDate: new Date(event.startDate),

        endDate: event.endDate
          ? new Date(event.endDate)
          : null,

        website:
          event.website?.trim()
            ? event.website
            : null,

        tags:
          event.tags as unknown as Prisma.InputJsonValue,

        featured: event.featured ?? false,
      },
    });

    /*
     * Event gallery
     *
     * Şu anki 3 JSON'da gallery yok ama ileride
     * eklendiğinde otomatik seed edilecek.
     */

    await prisma.eventImage.deleteMany({
      where: {
        eventId: event.id,
      },
    });

    if (event.gallery?.length) {
      await prisma.eventImage.createMany({
        data: event.gallery.map((image, index) => ({
          eventId: event.id,
          image,
          sortOrder: index,
        })),
      });
    }
  }

  console.log(`✅ ${events.length} Events`);
}