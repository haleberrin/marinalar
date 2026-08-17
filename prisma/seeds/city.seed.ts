import { prisma } from "@/lib/prisma";
import { cities } from "@/lib/cities";

export async function seedCities() {
  console.log("🏙 Cities");

  for (const city of cities) {
    await prisma.city.upsert({
      where: {
        id: city.id,
      },
      update: {
        slug: city.slug,
        name: city.name,
        description: city.description ?? "",
        coverImage: city.coverImage,
        regionId: city.regionId,
      },
      
      create: {
        id: city.id,
        slug: city.slug,
        name: city.name,
        description: city.description ?? "",
        coverImage: city.coverImage,
        regionId: city.regionId,
      },
    });
  }

  console.log(`✅ ${cities.length} Cities`);
}