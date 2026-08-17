import { Marina } from "@/types/marina";

import CategoryMarinaCard from "@/app/components/ui/cards/CategoryMarinaCard";

interface CategoryMarinaItem {
  marina: Marina;
  cityName: string;
  regionName: string;
  badge?: string;
}

interface Props {
  marinas: CategoryMarinaItem[];
}

export default function CategoryMarinas({
  marinas, 
}: Props) {
  return (
    <section className="px-[8%] lg:px-[12%] py-24 bg-[#F8FAFC]">

      <div className="mb-12">
        <h2 className="text-5xl font-bold font-cormorant-garamont text-darknavy">
          Bu Kategorideki
          <span className="text-primary"> Marinalar</span>
        </h2>

        <p className="mt-3 text-darknavy/60">
          Kategoriye ait tüm marinaları keşfedin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {marinas.map(({ marina, cityName, regionName, badge }) => (
        <CategoryMarinaCard
          key={marina.slug}
          marina={marina}
          cityName={cityName}
          regionName={regionName}
          badge={badge}
        />
      ))}
      </div>
    </section>
  );
}