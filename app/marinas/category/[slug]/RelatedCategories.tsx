import { getCategories } from "@/lib/db/categories";
import { mapPrismaCategoryToCategory } from "@/lib/mappers/category.mapper";
import { getMarinasByCategory } from "@/lib/db/marinas";

import MarinaCategoryCard from "@/app/components/ui/cards/MarinaCatgoryCard";

import type { MarinaCategory } from "@/types/marina";

interface Props {
  current: MarinaCategory;
}

export default async function RelatedCategories({
  current,
}: Props) {
  const prismaCategories = await getCategories();

  const relatedCategories = prismaCategories
    .map((category) => mapPrismaCategoryToCategory(category))
    .filter((category) => category.slug !== current)
    .slice(0, 4);

  const categoriesWithCount = await Promise.all(
    relatedCategories.map(async (category) => {
      const marinas = await getMarinasByCategory(category.slug);

      return {
        category,
        marinaCount: marinas.length,
      };
    })
  );

  return (
    <section className="bg-[#EEF5F9] px-[8%] lg:px-[12%] py-24">
      <div className="max-w-3xl">
        <p className="text-primary font-semibold tracking-[0.25em] uppercase">
          Daha Fazlasını Keşfet
        </p>

        <h2 className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
          İlginizi Çekebilecek
          <span className="text-primary">
            {" "}Marina Kategorileri
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-darknavy/70">
          Türkiye&apos;nin farklı marina kategorilerini keşfederek
          tekneniz, tatil planınız ve seyahat tarzınıza en uygun
          marinaları inceleyebilirsiniz.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {categoriesWithCount.map(({ category, marinaCount }) => (
          <MarinaCategoryCard
            key={category.slug}
            variant="category"
            slug={category.slug}
            title={category.title}
            description={category.shortDescription}
            image={category.image}
            icon={category.icon}
            marinaCount={marinaCount}
          />
        ))}
      </div>
    </section>
  );
}