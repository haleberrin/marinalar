import type { Marina, MarinaScores } from "@/types/marina";
import type { Prisma } from "@prisma/client";

type MarinaRecommendedFor = {
  family: boolean;
  couples: boolean;
  beginner: boolean;
  longStay: boolean;
  liveaboard: boolean;
  superyacht: boolean;
};

function isRecommendedFor(
  value: Prisma.JsonValue
): value is MarinaRecommendedFor {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.family === "boolean" &&
    typeof obj.couples === "boolean" &&
    typeof obj.beginner === "boolean" &&
    typeof obj.longStay === "boolean" &&
    typeof obj.liveaboard === "boolean" &&
    typeof obj.superyacht === "boolean"
  );
}

function isMarinaScores(
  value: unknown
): value is MarinaScores {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.family === "number" &&
    typeof obj.luxury === "number" &&
    typeof obj.nature === "number" &&
    typeof obj.sailing === "number" &&
    typeof obj.nightlife === "number" &&
    typeof obj.technical === "number" &&
    (obj.naturalBeauty === undefined ||
      typeof obj.naturalBeauty === "number") &&
    (obj.windProtection === undefined ||
      typeof obj.windProtection === "number")
  );
}

type PrismaMarina = Prisma.MarinaGetPayload<{
  include: {
    images: true;
    categories: {
      include: {
        category: true;
      };
    };
    amenities: {
      include: {
        amenity: true;
      };
    };
    facilities: {
      include: {
        facility: true;
      };
    };
  };
}>;

export function mapPrismaMarinaToMarina(
  marina: PrismaMarina
): Marina {
  return {
    id: marina.id,
    slug: marina.slug,
    name: marina.name,
    rating: marina.rating ?? undefined,

    regionId: marina.regionId,
    cityId: marina.cityId,
    districtId: marina.districtId,

    coordinates: {
      lat: marina.latitude,
      lng: marina.longitude,
    },

    media: {
      logo: marina.logo ?? "",
      coverImage: marina.coverImage,
      gallery: [...marina.images]
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((image) => image.image),
    },

    contact: {
      phone: marina.phone ?? undefined,
      email: marina.email ?? undefined,
      website: marina.website ?? undefined,
      vhfChannel: marina.vhfChannel ?? undefined,
    },

    capacity: {
      seaBerth: marina.seaBerth,
      landBerth: marina.landBerth ?? 0,
      maxBoatLength: marina.maxBoatLength,
      depth: marina.depth,
    },

    description: Array.isArray(marina.description)
      ? marina.description.filter(
          (item): item is string => typeof item === "string"
        )
      : [],

    summary: marina.summary,

    facilities: marina.facilities
      .map((item) => item.facility.slug)
      .filter(Boolean) as Marina["facilities"],

    amenities: marina.amenities
      .map((item) => item.amenity.slug)
      .filter(Boolean) as Marina["amenities"],

    categories: marina.categories
      .map((item) => item.category.slug)
      .filter(Boolean) as Marina["categories"],

    tags: Array.isArray(marina.tags)
      ? marina.tags.filter(
          (item): item is string => typeof item === "string"
        )
      : [],

    aiTags: Array.isArray(marina.aiTags)
      ? marina.aiTags.filter(
          (item): item is Marina["aiTags"][number] =>
            typeof item === "string"
        )
      : [],

    openingYear: marina.openingYear ?? undefined,

    blueFlag: marina.blueFlag,
    petFriendly: marina.petFriendly,
    customsClearance: marina.customsClearance,
    charterAvailable: marina.charterAvailable,
    winterStorageAvailable: marina.winterStorageAvailable,

    nearestAirport: marina.nearestAirport ?? undefined,
    airportDistance: marina.airportDistance ?? undefined,

    recommendedFor: isRecommendedFor(marina.recommendedFor)
  ? marina.recommendedFor
  : undefined,

scores: isMarinaScores(marina.scores)
  ? marina.scores
  : undefined,
  };
}