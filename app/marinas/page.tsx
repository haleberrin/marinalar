import { getMarinas } from "@/lib/db/marinas";
import { getRegions } from "@/lib/db/regions";
import { getCategories } from "@/lib/db/categories";

import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";
import { mapPrismaRegionToRegion } from "@/lib/mappers/region.mapper";
import { mapPrismaCategoryToCategory } from "@/lib/mappers/category.mapper";

import MarinaCategoryCard from "../components/ui/cards/MarinaCatgoryCard";


export default async function Page() {
  const [
    prismaMarinas,
    prismaRegions,
    prismaCategories,
  ] = await Promise.all([
    getMarinas(),
    getRegions(),
    getCategories(),
  ]);

  const marinas = prismaMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );

  const regions = prismaRegions.map((region) =>
    mapPrismaRegionToRegion(region)
  );

  const categories = prismaCategories.map((category) =>
    mapPrismaCategoryToCategory(category)
  );

  const popularMarinas = marinas.filter(
    (marina) => (marina.rating ?? 0) >= 4.5
  );

  return (
    <>
      {/* HERO */}

      <div className="relative flex h-[75vh] items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>

        <div className="absolute left-0 top-0 z-10 h-full w-full bg-darknavy/60" />

        <h1 className="z-20 font-cormorant-garamont text-[6rem] text-white md:text-[10rem]">
          Marinalar
        </h1>
      </div>

      {/* REGIONS */}

      <section className="bg-[#EEF5F9] px-[8%] py-12 lg:px-[12%]">
        <h2 className="mb-6 font-cormorant-garamont text-4xl font-bold text-darknavy">
          Marinaları{" "}
          <span className="text-primary">Bölgelere Göre</span>{" "}
          Keşfedin
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <MarinaCategoryCard
              key={region.slug}
              variant="region"
              slug={region.slug}
              title={region.name}
              subtitle={region.description}
              image={region.coverImage}
            />
          ))}
        </div>
      </section>

      {/* POPULAR MARINAS */}

      <section className="bg-[#F8FAFC] px-[8%] py-12 lg:px-[12%]">
        <h2 className="mb-6 font-cormorant-garamont text-4xl font-bold text-darknavy">
          Popüler{" "}
          <span className="text-primary">Marinaları</span>{" "}
          Keşfedin
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularMarinas.map((marina) => (
            <MarinaCategoryCard
              key={marina.slug}
              variant="featured"
              slug={marina.slug}
              title={marina.name}
              description={marina.summary}
              image={
                marina.media.gallery[0] ??
                marina.media.coverImage
              }
              rating={marina.rating}
              marinaCount={marina.rating}
            />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="bg-[#EEF5F9] px-[8%] py-20 lg:px-[12%]">
        <div className="mb-12">
          <h2 className="font-cormorant-garamont text-5xl font-bold text-darknavy">
            Denizcilik Tarzınıza Göre
            <span className="text-primary">
              {" "}Marina Seçin
            </span>
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-darknavy/70">
            Türkiye&apos;nin en iyi marinalarını ilgi alanlarınıza ve
            seyahat tarzınıza göre keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const marinaCount = marinas.filter((marina) =>
              marina.categories.includes(category.slug)
            ).length;

            return (
              <MarinaCategoryCard
                key={category.slug}
                {...category}
                marinaCount={marinaCount}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}