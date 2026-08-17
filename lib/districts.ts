import districtsData from "@/data/geography/districts.json";
import { District } from "@/types/districts";

export const districts: District[] = districtsData;

export function getDistrictById(id: string) {
    return districts.find((district) => district.id === id);
}

export function getDistrictsByCity(cityId: string) {
    return districts.filter((district) => district.cityId === cityId);
}

export function getDistrictBySlug(slug: string) {
    return districts.find((district) => district.slug === slug);
  }
