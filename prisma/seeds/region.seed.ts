import { prisma } from "@/lib/prisma";
import { regions } from "@/lib/regions";
import { Prisma } from "@prisma/client";

export async function seedRegions() {
  console.log("📍 Regions");

  for (const region of regions) {
    await prisma.region.upsert({
      where: {
        id: region.id,
      },

      update: {
        slug: region.slug,
        name: region.name,
        description: region.description ?? "",
        coverImage: region.coverImage,
        faq: region.faq as unknown as Prisma.InputJsonValue,
      },

      create: {
        id: region.id,
        slug: region.slug,
        name: region.name,
        description: region.description ?? "",
        coverImage: region.coverImage,
        faq: region.faq as unknown as Prisma.InputJsonValue,
      },
    });
  }

  console.log(`✅ ${regions.length} Regions`);
}