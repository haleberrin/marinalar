import { Building2, Sailboat, Star } from "lucide-react";
import { District } from "@/types/districts";
import { Marina } from "@/types/marina";


interface DistrictInfoProps {
  district: District;
  marinaCount: number;
  topMarina?: Marina;
  cityName: string;
}

export default function DistrictInfo({
  district,
  marinaCount,
  topMarina,
  cityName,
}: DistrictInfoProps) {
  return (
    <section className="bg-[#F8FAFC] px-[8%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">

        <h2 className="font-cormorant-garamont text-5xl font-bold text-darknavy">
          {district.name}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-darknavy/70">
          {district.description}
        </p>

        <div className="mt-14 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-3">

            {/* Marina Sayısı */}
            <div className="flex flex-col border-b px-8 py-8 lg:border-b-0 lg:border-r">
              <Sailboat
                size={34}
                strokeWidth={1.7}
                className="text-darknavy"
              />

              <div className="mt-6 h-px w-10 bg-slate-300" />

              <div className="mt-8">
                <p className="font-cormorant-garamont text-8xl font-bold leading-none tracking-tight text-darknavy">
                  {marinaCount}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-darknavy">
                  Marina
                </p>

                <p className="mt-3 font-inter text-xs tracking-[0.2em] text-darknavy/70">
                  Bu ilçede hizmet veren marina
                </p>
              </div>
            </div>

            {/* Bağlı Olduğu Şehir */}
            <div className="flex flex-col border-b p-10 lg:border-b-0 lg:border-r">
              <Building2
                size={34}
                strokeWidth={1.7}
                className="text-darknavy"
              />

              <div className="mt-6 h-px w-10 bg-slate-300" />

              <div className="mt-8">
                <p className="font-cormorant-garamont text-5xl font-bold text-darknavy">
                {cityName}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-darknavy">
                  Şehir
                </p>

                <p className="mt-3 font-inter text-xs tracking-[0.2em] text-darknavy/70">
                  Bu ilçenin bağlı olduğu şehir
                </p>
              </div>
            </div>

            {/* En Yüksek Puan */}
            <div className="p-10">
              <Star
                size={22}
                className="text-darknavy"
              />

              <div className="mt-6 h-px w-10 bg-slate-300" />

              {topMarina && (
              <div className="mt-8">
                <p className="font-cormorant-garamont text-7xl font-bold text-darknavy">
                  {topMarina?.rating ?? "-"}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-darknavy">
                  En Yüksek Puan
                </p>

                <p className="mt-4 text-xl font-semibold text-darknavy">
                  {topMarina?.name ?? "Henüz marina bulunmuyor"}
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