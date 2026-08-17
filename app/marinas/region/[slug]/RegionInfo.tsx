import { Region } from "@/types/region";
import {Sailboat, Building2, Star} from "lucide-react"
import { Marina } from "@/types/marina";

interface RegionInfoProps {
  region: Region;
  marinaCount: number;
  cityCount: number;
  topMarina?: Marina;
}

export default function RegionInfo({
  region,
  marinaCount,
  cityCount,
  topMarina,
}: RegionInfoProps) {
  return (
    <section className="px-[8%] lg:px-[12%] py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">

        <h2 className="font-cormorant-garamont text-5xl font-bold text-darknavy">
          {region.name}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-darknavy/70">
          {region.description}
        </p>

        {/* İstatistik Kartları */}

        <div
className="
mt-14
rounded-[32px]
bg-white
shadow-xl
border border-slate-200
overflow-hidden
"
>
<div className="grid lg:grid-cols-3">

          <div className="px-8 py-8 border-b flex flex-col lg:border-b-0 lg:border-r">
            <Sailboat size={34} strokeWidth={1.7} className="  text-darknavy group-hover:text-white" />
            <div className="mt-6 w-10 h-px bg-slate-300"></div>
            <div className="mt-8">
            <p className="text-8xl leading-none tracking-tight font-bold font-cormorant-garamont text-darknavy">
                {marinaCount}
              </p>

              <p className="mt-3 uppercase tracking-[0.35em] text-xs text-darknavy">
                Marina
              </p>
              <p className="mt-3 font-inter tracking-[0.35em] text-xs text-darknavy">
              Bu bölgede hizmet veren marina
              </p>
              
            </div>

          </div>
          <div className="p-10 border-b flex flex-col lg:border-b-0 lg:border-r">
            <Building2 size={34} strokeWidth={1.7} className="text-darknavy group-hover:text-white" />
            <div className="mt-6 w-10 h-px bg-slate-300"></div>
            <div className="mt-8">
            <p className="text-8xl leading-none tracking-tight font-bold font-cormorant-garamont text-darknavy">
              {cityCount}
            </p>

            <p className="mt-3 uppercase tracking-[0.35em] text-xs text-darknavy">
              Şehir
            </p>
            <p className="mt-3 font-inter tracking-[0.35em] text-xs text-darknavy">
              Bu şehırlerdeki marinaları keşfedin.
              </p>
            </div>
          </div>

          <div className="p-10">
            <Star size={22} className="text-darknavy" />
            <div className="mt-6 w-10 h-px bg-slate-300"></div>

            {topMarina && (
            <div className="mt-8">
              <p className="text-7xl font-bold font-cormorant-garamont text-darknavy">
                {topMarina.rating}
              </p>

              <p className="mt-3 uppercase tracking-[0.35em] text-xs text-darknavy">
                En Yüksek Puan
              </p>

              <p className="mt-4 text-xl font-semibold text-darknavy">
                {topMarina.name}
              </p>
            </div>
            )}

          </div>
</div>
</div>

        

      </div>
    </section>
  );
}
