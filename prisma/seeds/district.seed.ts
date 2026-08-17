import { prisma } from "@/lib/prisma";
import { districts } from "@/lib/districts";

export async function seedDistricts() {
  console.log("📌 Districts");

  for (const district of districts) {
    await prisma.district.upsert({
      where: {
        id: district.id,
      },

      update: {
        slug: district.slug,
        name: district.name,
        description: district.description,
        coverImage: district.coverImage,
        cityId: district.cityId!,
      },

      create: {
        id: district.id,
        slug: district.slug,
        name: district.name,
        description: district.description,
        coverImage: district.coverImage,
        cityId: district.cityId!,
      },
    });
  }

  console.log(`✅ ${districts.length} Districts`);
}