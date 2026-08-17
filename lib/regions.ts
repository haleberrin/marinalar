import regionsData from "@/data/geography/regions.json";
import { Region } from "@/types/region";

export const regions: Region[] = regionsData;

export function getRegionById(id: string) {
  return regions.find((region) => region.id === id);
}

export function getRegionBySlug(slug: string) {
  return regions.find((region) => region.slug === slug);
}