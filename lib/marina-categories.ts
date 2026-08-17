// import marinaCategories from "@/data/marina-categories.json";
// import { MarinaCategoryCard } from "@/types/marina-category";

// export const categories =
//   marinaCategories as MarinaCategoryCard[];

  
import marinaCategories from "@/data/marina-categories.json";
import { MarinaCategory } from "@/types/marina-category";

export const categories =
  marinaCategories as MarinaCategory[];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}