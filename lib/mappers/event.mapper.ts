import type { Event, EventTag, EventType } from "@/types/event";
import type { Prisma } from "@prisma/client";

type PrismaEvent = Prisma.EventGetPayload<{
  include: {
    images: true;
  };
}>;

export function mapPrismaEventToEvent(
  event: PrismaEvent
): Event {
  return {
    id: event.id,
    slug: event.slug,

    title: event.title,

    description: Array.isArray(event.description)
      ? event.description.filter(
          (item): item is string => typeof item === "string"
        )
      : [],

    type: event.type as EventType,

    location: {
      marinaId: event.marinaId ?? undefined,
      regionId: event.regionId,
      cityId: event.cityId,
      districtId: event.districtId,
      name: event.locationName ?? undefined,

      coordinates:
        event.latitude !== null &&
        event.longitude !== null
          ? {
              lat: event.latitude,
              lng: event.longitude,
            }
          : undefined,
    },

    featuredImage: event.featuredImage,

    gallery: [...event.images]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((image) => image.image),

    startDate: event.startDate.toISOString(),

    endDate:
      event.endDate?.toISOString() ?? undefined,

    website:
      event.website ?? undefined,

    tags: Array.isArray(event.tags)
      ? event.tags.filter(
          (item): item is EventTag =>
            typeof item === "string"
        )
      : [],

    featured: event.featured,
  };
}