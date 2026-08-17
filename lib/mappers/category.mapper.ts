import type {
    MarinaCategory,
    CategoryFAQ,
  } from "@/types/marina-category";
  
  type PrismaCategory = {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    icon: string;
    image: string;
    coverImage: string;
    color: string;
    badge: string;
    seoTitle: string;
    seoDescription: string;
    highlights: unknown;
    faq: unknown;
  };
  
  export function mapPrismaCategoryToCategory(
    category: PrismaCategory
  ): MarinaCategory {
    const highlights = Array.isArray(category.highlights)
      ? category.highlights.filter(
          (item): item is string => typeof item === "string"
        )
      : [];
  
    const faq: CategoryFAQ[] = Array.isArray(category.faq)
      ? category.faq
          .filter(
            (item) =>
              item !== null &&
              typeof item === "object" &&
              !Array.isArray(item)
          )
          .map((item) => {
            const faqItem = item as Record<string, unknown>;
  
            return {
              question:
                typeof faqItem.question === "string"
                  ? faqItem.question
                  : "",
              answer:
                typeof faqItem.answer === "string"
                  ? faqItem.answer
                  : "",
            };
          })
      : [];
  
    return {
      slug: category.slug as MarinaCategory["slug"],
  
      title: category.title,
      shortDescription: category.shortDescription,
      description: category.description,
  
      heroTitle: category.heroTitle,
      heroSubtitle: category.heroSubtitle,
  
      icon: category.icon,
      image: category.image,
      coverImage: category.coverImage,
  
      color: category.color,
      badge: category.badge,
  
      seo: {
        title: category.seoTitle,
        description: category.seoDescription,
      },
  
      highlights,
      faq,
    };
  }