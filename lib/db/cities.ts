import { prisma } from "@/lib/prisma";

export async function getCities() {
  return prisma.city.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function getCityById(id: string) {
  return prisma.city.findUnique({
    where: {
      id,
    },
  });
}

export async function getCityBySlug(slug: string) {
  return prisma.city.findUnique({
    where: {
      slug,
    },
  });
}

export async function getCitiesByRegion(regionId: string) {
  return prisma.city.findMany({
    where: {
      regionId,
    },
    orderBy: {
      name: "asc",
    },
  });
}