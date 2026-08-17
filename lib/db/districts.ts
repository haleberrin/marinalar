import { prisma } from "@/lib/prisma";

export async function getDistricts() {
  return prisma.district.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function getDistrictById(id: string) {
  return prisma.district.findUnique({
    where: {
      id,
    },
  });
}

export async function getDistrictBySlug(slug: string) {
  return prisma.district.findUnique({
    where: {
      slug,
    },
  });
}

export async function getDistrictsByCity(cityId: string) {
  return prisma.district.findMany({
    where: {
      cityId,
    },
    orderBy: {
      name: "asc",
    },
  });
}