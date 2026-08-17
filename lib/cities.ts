import citiesData from "@/data/geography/cities.json";
import { City } from "@/types/city";

export const cities: City[] = citiesData;

export function getCityById(id: string) {
  return cities.find((city) => city.id === id);
}

export function getCitiesByRegion(regionId: string) {
  return cities.filter((city) => city.regionId === regionId);
}

export function getCityBySlug(slug: string){
  return cities.find((city)=> city.slug === slug);
}