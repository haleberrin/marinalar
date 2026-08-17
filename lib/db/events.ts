import { prisma } from "@/lib/prisma";

const eventInclude = {
  images: {
    orderBy: {
      sortOrder: "asc" as const,
    },
  },
};

export async function getEvents() {
  return prisma.event.findMany({
    include: eventInclude,
    orderBy: {
      startDate: "asc",
    },
  });
}

export async function getEventBySlug(
  slug: string
) {
  return prisma.event.findUnique({
    where: {
      slug,
    },
    include: eventInclude,
  });
}

export async function getEventsByRegion(
  regionId: string
) {
  return prisma.event.findMany({
    where: {
      regionId,
    },
    include: eventInclude,
    orderBy: {
      startDate: "asc",
    },
  });
}

export async function getEventsByCity(
  cityId: string
) {
  return prisma.event.findMany({
    where: {
      cityId,
    },
    include: eventInclude,
    orderBy: {
      startDate: "asc",
    },
  });
}

export async function getEventsByDistrict(
  districtId: string
) {
  return prisma.event.findMany({
    where: {
      districtId,
    },
    include: eventInclude,
    orderBy: {
      startDate: "asc",
    },
  });
}

export async function getEventsByMarina(
  marinaId: string
) {
  return prisma.event.findMany({
    where: {
      marinaId,
    },
    include: eventInclude,
    orderBy: {
      startDate: "asc",
    },
  });
}