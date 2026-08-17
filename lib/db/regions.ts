// lib/db/regions.ts
import { prisma } from "@/lib/prisma";

export async function getRegions() {
  return prisma.region.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function getRegionById(id: string) {
  return prisma.region.findUnique({
    where: {
      id,
    },
  });
}

export async function getRegionBySlug(slug: string) {
  return prisma.region.findUnique({
    where: {
      slug,
    },
  });
}