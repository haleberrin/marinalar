import { prisma } from "@/lib/prisma";
import MarinaCreateForm from "./MarinaCreateForm";


export default async function NewMarinaPage() {
    const [
        regions,
        cities,
        districts,
        categories,
        amenities,
        facilities,
      ] = await Promise.all([
        prisma.region.findMany({
          orderBy: {
            name: "asc",
          },
        }),
      
        prisma.city.findMany({
          orderBy: {
            name: "asc",
          },
        }),
      
        prisma.district.findMany({
          orderBy: {
            name: "asc",
          },
        }),
      
        prisma.category.findMany({
          orderBy: {
            title: "asc",
          },
        }),
      
        prisma.amenity.findMany({
          orderBy: {
            title: "asc",
          },
        }),
      
        prisma.facility.findMany({
          orderBy: {
            title: "asc",
          },
        }),
      ]);

  return (
    <section>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">
          Marina Yönetimi
        </p>

        <h1 className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
          Yeni Marina
        </h1>

        <p className="mt-3 text-darknavy/60">
          Yeni marina kaydının temel bilgilerini oluşturun.
        </p>
      </div>

      <MarinaCreateForm
  regions={regions.map((region) => ({
    id: region.id,
    name: region.name,
  }))}
  cities={cities.map((city) => ({
    id: city.id,
    name: city.name,
    regionId: city.regionId,
  }))}
  districts={districts.map((district) => ({
    id: district.id,
    name: district.name,
    cityId: district.cityId,
  }))}
  categories={categories.map((category) => ({
    id: category.id,
    title: category.title,
  }))}
  amenities={amenities.map((amenity) => ({
    id: amenity.id,
    title: amenity.title,
  }))}
  facilities={facilities.map((facility) => ({
    id: facility.id,
    title: facility.title,
  }))}
/>
    </section>
  );
}