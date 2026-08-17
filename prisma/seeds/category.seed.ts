import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { categories } from "@/lib/marina-categories";

export async function seedCategories() {
  console.log("🏷 Categories");

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },

      update: {
        title: category.title,
        shortDescription: category.shortDescription,
        description: category.description,

        heroTitle: category.heroTitle,
        heroSubtitle: category.heroSubtitle,

        icon: category.icon,
        image: category.image,
        coverImage: category.coverImage,

        badge: category.badge,
        color: category.color,

        seoTitle: category.seo.title,
        seoDescription: category.seo.description,

        highlights: category.highlights as unknown as Prisma.InputJsonValue,
        faq: category.faq as unknown as Prisma.InputJsonValue,
      },

      create: {
        slug: category.slug,

        title: category.title,
        shortDescription: category.shortDescription,
        description: category.description,

        heroTitle: category.heroTitle,
        heroSubtitle: category.heroSubtitle,

        icon: category.icon,
        image: category.image,
        coverImage: category.coverImage,

        badge: category.badge,
        color: category.color,

        seoTitle: category.seo.title,
        seoDescription: category.seo.description,

        highlights: category.highlights as unknown as Prisma.InputJsonValue,
        faq: category.faq as unknown as Prisma.InputJsonValue,
      },
    });
  }

  console.log(`✅ ${categories.length} Categories`);
}