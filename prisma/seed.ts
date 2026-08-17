import "dotenv/config";

import { prisma } from "@/lib/prisma";

import { seedCategories } from "./seeds/category.seed";
import { seedRegions } from "./seeds/region.seed";
import { seedCities } from "./seeds/city.seed";
import { seedDistricts } from "./seeds/district.seed";
import { seedAmenities } from "./seeds/amenity.seed";
import { seedFacilities } from "./seeds/facility.seed";
import { seedMarinas } from "./seeds/ marina.seed";
import { seedEvents } from "./seeds/event.seed";
import { seedBlogs } from "./seeds/blog.seed";
import { seedAdmin } from "./seeds/admin.seed";

async function main() {
  console.log("🌱 Seed Started");

  await seedRegions();
  await seedCities();
  await seedDistricts();
  await seedCategories();
  await seedAmenities();
  await seedFacilities();
  await seedMarinas();
  await seedEvents();
  await seedBlogs();
  await seedAdmin();

  console.log("✅ Seed Finished");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });