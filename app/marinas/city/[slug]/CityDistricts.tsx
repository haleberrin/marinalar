import Link from "next/link";
import { Icon } from "@iconify/react";
import { District } from "@/types/districts";

interface CityDistrictsProps {
  districts: District[];
}

export default function CityDistricts({
  districts,
}: CityDistrictsProps) {
  return (
    <section className="px-[8%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            İlçeler
          </p>

          <h2 className="font-cormorant-garamont text-5xl font-bold text-darknavy">
  {districts.length > 0 ? (
    <>
      {districts.length}{" "}
      <span className="text-primary">
        {districts.length === 1 ? "İlçe" : "İlçe"}
      </span>
    </>
  ) : (
    <>
      Şehirdeki{" "}
      <span className="text-primary">İlçeler</span>
    </>
  )}
</h2>

          <p className="mt-4 max-w-2xl text-darknavy/70">
            {districts.length > 0
              ? "Şehirdeki ilçeleri keşfedin ve her ilçede bulunan marinaları inceleyin."
              : "Bu şehir için henüz ilçe bilgisi bulunmuyor."}
          </p>
        </div>

        {districts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {districts.map((district) => (
              <Link
                key={district.id}
                href={`/marinas/district/${district.slug}`}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-xl
                "
              >
                <div>
                  <h3 className="
                    font-cormorant-garamont
                    text-3xl
                    font-bold
                    text-darknavy
                    transition-colors
                    duration-300
                    group-hover:text-primary
                  ">
                    {district.name}
                  </h3>

                  <p className="mt-2 text-sm text-darknavy/50">
                    İlçedeki marinaları keşfedin
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    group-hover:bg-primary/10
                  "
                >
                  <Icon
                    icon="guidance:up-right-arrow"
                    width={20}
                    className="
                      text-primary
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="
            flex
            min-h-55
            items-center
            justify-center
            rounded-[28px]
            border
            border-dashed
            border-slate-300
            bg-slate-50
          ">
            <p className="text-darknavy/60">
              Henüz ilçe bilgisi bulunmuyor.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}