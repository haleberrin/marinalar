import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RelatedCategories from "./RelatedCategories";
import CategoryFAQ from "./CategoryFAQ";
import CategorySchema from "./CategorySchema";

import {
  getCategories,
  getCategoryBySlug,
} from "@/lib/db/categories";

import { mapPrismaCategoryToCategory } from "@/lib/mappers/category.mapper";

import { getMarinasByCategory } from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";

import CategoryHero from "./CategoryHero";
import CategoryInfo from "./CategoryInfo";
import CategoryStats from "./CategoryStats";
import CategoryMarinas from "./CategoryMarinas";
export async function generateStaticParams() {
  const prismaCategories = await getCategories();

  return prismaCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const prismaCategory = await getCategoryBySlug(slug);

  if (!prismaCategory) {
    return {
      title: "Kategori Bulunamadı",
    };
  }
  
  const category =
    mapPrismaCategoryToCategory(prismaCategory);

  return {
    title: category.seo.title,
    description: category.seo.description,

    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      images: [
        {
          url: category.coverImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: category.seo.title,
      description: category.seo.description,
      images: [category.coverImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const prismaCategory = await getCategoryBySlug(slug);

  if (!prismaCategory) {
    notFound();
  }
  
  const category =
    mapPrismaCategoryToCategory(prismaCategory);

  const prismaMarinas = await getMarinasByCategory(category.slug);

  const filteredMarinas = prismaMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );

  const marinaCount = filteredMarinas.length;

  const categoryMarinas = filteredMarinas.map((marina) => {
    const prismaMarina = prismaMarinas.find(
      (item) => item.id === marina.id
    );
  
    return {
      marina,
      cityName:
        prismaMarina?.city?.name ??
        marina.cityId,
      regionName:
        prismaMarina?.region?.name ??
        marina.regionId,
      badge: category.badge,
    };
  });

  return (
    <>
      <CategorySchema
        category={category}
        marinas={filteredMarinas}
      />

      <CategoryHero
        title={category.heroTitle}
        subtitle={category.heroSubtitle}
        image={category.image}
        icon={category.icon}
        marinaCount={marinaCount}
      />

      <CategoryInfo
        category={category}
        marinas={filteredMarinas}
      />

      <CategoryStats
        marinas={filteredMarinas}
      />

<CategoryMarinas
  marinas={categoryMarinas}
/>

      <RelatedCategories
        current={category.slug}
      />

      <CategoryFAQ
        faq={category.faq}
      />
    </>
  );
}