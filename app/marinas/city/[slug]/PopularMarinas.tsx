import RegionMarinaCard from "@/app/components/ui/cards/RegionMarinaCard";
import { Marina } from "@/types/marina";
import { MarinaWithDistrict } from "@/types/marina-with-district";

interface PopularMarinasProps{
    marinas:MarinaWithDistrict[];
}

const PopularMarinas =({marinas}:PopularMarinasProps)=>{
    return (
        <section className="px-[8%] py-24 lg:px-[12%]">
          <div className="mx-auto max-w-7xl">
    
            <div className="mb-14 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary">
                  Marina Seçkisi
                </p>
    
                <h2 className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
                Şehrin En Popüler Marinaları
                </h2>
    
                <p className="mt-4 max-w-2xl text-darknavy/70">
                  Bölgenin en yüksek puan alan ve öne çıkan marinalarını keşfedin.
                </p>
              </div>
    
              <span className="shrink-0 text-sm text-darknavy/50">
                {marinas.length} Marina
              </span>
            </div>
    
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {marinas.map((item) => (
                <RegionMarinaCard
                  key={item.marina.id}
                  marina={item.marina}
                  cityName={item.districtName}
                />
              ))}
            </div>
    
          </div>
        </section>
      );
}

export default PopularMarinas;