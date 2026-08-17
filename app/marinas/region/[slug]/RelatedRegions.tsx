import MarinaCategoryCard from "@/app/components/ui/cards/MarinaCatgoryCard";
import { getRegions } from "@/lib/db/regions";
import { mapPrismaRegionToRegion } from "@/lib/mappers/region.mapper";



interface Props{
    currentRegion:string;
}

export default async function RelatedRegions({
    currentRegion,
  }: Props) {
    const prismaRegions = await getRegions();
  
    const related = prismaRegions
      .map((region) => mapPrismaRegionToRegion(region))
      .filter((region) => region.slug !== currentRegion)
      .slice(0, 3);
  
    return (
      <section className="px-[8%] lg:px-[12%] py-20">
        <div className="mb-10">
          <h2 className="text-5xl font-cormorant-garamont font-bold text-darknavy">
            Diğer Bölgeleri
            <span className="text-primary"> Keşfedin</span>
          </h2>
        </div>
  
        <div className="grid md:grid-cols-3 gap-8">
          {related.map((region) => (
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
    );
  }