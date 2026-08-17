import { prisma } from "@/lib/prisma";

const facilities = [
  {
    slug: "wc",
    title: "Tuvalet",
    icon: "mdi:toilet",
  },
  {
    slug: "shower",
    title: "Duş",
    icon: "mdi:shower",
  },
  {
    slug: "parking",
    title: "Otopark",
    icon: "mdi:car-parking-lights",
  },
  {
    slug: "laundry",
    title: "Çamaşırhane",
    icon: "mdi:washing-machine",
  },
  {
    slug: "storage",
    title: "Depo",
    icon: "mdi:warehouse",
  },
  {
    slug: "first_aid",
    title: "İlk Yardım",
    icon: "mdi:medical-bag",
  },
  {
    slug: "restaurant",
    title: "Restoran",
    icon: "mdi:silverware-fork-knife",
  },
  {
    slug: "atm",
    title: "ATM",
    icon: "mdi:cash",
  },
  {
    slug: "dishwashing",
    title: "Bulaşıkhane",
    icon: "mdi:dishwasher",
  },
  {
    slug: "hotel",
    title: "Otel",
    icon: "mdi:hotel",
  },
  {
    slug: "bar",
    title: "Bar",
    icon: "mdi:glass-cocktail",
  },
  {
    slug: "entertainment",
    title: "Eğlence",
    icon: "mdi:party-popper",
  },
  {
    slug: "pool",
    title: "Havuz",
    icon: "mdi:pool",
  },
];

export async function seedFacilities() {
  console.log("🏗 Facilities");

  for (const facility of facilities) {
    await prisma.facility.upsert({
      where: {
        slug: facility.slug,
      },
      update: {
        title: facility.title,
        icon: facility.icon,
      },
      create: facility,
    });
  }

  console.log(`✅ ${facilities.length} Facilities`);
}