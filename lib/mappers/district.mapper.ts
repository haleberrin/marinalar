import type { District } from "@/types/districts";

type PrismaDistrict = {
  id: string;
  slug: string;
  name: string;
  cityId: string;
  description: string | null;
  coverImage: string | null;
};

export function mapPrismaDistrictToDistrict(
  district: PrismaDistrict
): District {
  return {
    id: district.id,
    slug: district.slug,
    name: district.name,
    cityId: district.cityId,
    description: district.description ?? undefined,
    coverImage: district.coverImage ?? undefined,
  };
}