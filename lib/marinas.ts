import type { Marina, MarinaAmenity, MarinaCategory } from "@/types/marina";

import yalikavak from "@/data/marinas/yalikavak-marina.json"
import dMarinGocek from "@/data/marinas/d-marin-gocek-marina.json"
import eceSaray from "@/data/marinas/ece-saray-marina.json"

function marina(data: any): Marina {
  const allowedAmenities = [
    "fuel",
    "water",
    "electricity",
    "wifi",
    "restaurant",
    "supermarket",
    "laundry",
    "showers",
    "security",
    "repair",
    "parking",
    "atm",
    "crane",
    "diving_service",
    "fire_service",
    "waste_collection",
  ];
  
  return {
    ...data,
    amenities: data.amenities as MarinaAmenity[],
  };
}

export const marinas: Marina[] = [
  marina(yalikavak),
  marina(dMarinGocek),
  marina(eceSaray),
];

export function getMarinaBySlug(slug: string) {
  return marinas.find((m) => m.slug === slug);
}

export function getMarinasByRegion(region: string) {
  return marinas.filter((m) => m.regionId === region);
}

export function getMarinasByCity(city: string) {
  return marinas.filter((m) => m.cityId === city);
}

export function getMarinasByCategory(category: MarinaCategory) {
  return marinas.filter((m) =>
    m.categories.includes(category)
  );
}

export function getMarinasByDistrict(districtId: string) {
  return marinas.filter(
    (marina) => marina.districtId === districtId
  );
}

export function getMarinaById(id: string) {
  return marinas.find((marina) => marina.id === id);
}