import type { Region } from "@/types/region";
import type { Prisma } from "@prisma/client";

type PrismaRegion = {
  id: string;
  slug: string;
  name: string;
  description: string;
  coverImage: string | null;
  faq: Prisma.JsonValue;
};

export function mapPrismaRegionToRegion(
  region: PrismaRegion
): Region {
  return {
    id: region.id,
    slug: region.slug,
    name: region.name,
    description: region.description,
    coverImage: region.coverImage ?? "",
    faq: Array.isArray(region.faq)
      ? region.faq
          .filter(
            (item) =>
              item &&
              typeof item === "object" &&
              !Array.isArray(item)
          )
          .map((item) => {
            const faq = item as Record<string, unknown>;

            return {
              question:
                typeof faq.question === "string"
                  ? faq.question
                  : "",
              answer:
                typeof faq.answer === "string"
                  ? faq.answer
                  : "",
            };
          })
      : [],
  };
}