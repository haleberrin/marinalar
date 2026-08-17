import type { City } from "@/types/city";

type PrismaCity = {
  id: string;
  slug: string;
  name: string;
  regionId: string;
  description: string | null;
  coverImage: string | null;
};

export function mapPrismaCityToCity(city: PrismaCity): City {
  return {
    id: city.id,
    slug: city.slug,
    name: city.name,
    regionId: city.regionId,
    description: city.description ?? undefined,
    coverImage: city.coverImage ?? undefined,
  };
}