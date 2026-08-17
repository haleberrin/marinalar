import { MarinaCategory } from "@/types/marina-category";
import { Marina } from "@/types/marina";
import { Icon } from "@iconify/react";

interface Props {
  category: MarinaCategory;
  marinas: Marina[];
}

export default function CategoryInfo({
  category,
  marinas,
}: Props) {
  const cityCount = new Set(
    marinas.map((m) => m.cityId)
  ).size;

  const regionCount = new Set(
    marinas.map((m) => m.regionId)
  ).size;

  const ratedMarinas = marinas.filter(
    (m) => m.rating !== undefined
  );
  
  const averageRating =
    ratedMarinas.length > 0
      ? (
          ratedMarinas.reduce(
            (sum, marina) => sum + marina.rating!,
            0
          ) / ratedMarinas.length
        ).toFixed(1)
      : "0.0";

  return (
    <section className="bg-white py-24 px-[8%] lg:px-[12%]">

      <div className="grid lg:grid-cols-5 gap-16 items-start">

        {/* LEFT */}

        <div className="lg:col-span-3">

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-5 py-2 font-semibold">

            <Icon
              icon={category.icon}
              width={18}
            />

            Marina Kategorisi

          </div>

          <h2 className="mt-6 text-5xl lg:text-6xl font-cormorant-garamont font-bold text-darknavy leading-tight">

            {category.heroTitle}

          </h2>

          <p className="mt-8 text-xl leading-9 text-darknavy/75">

            {category.description}

          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-5">

            {category.highlights.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 hover:border-primary/30 hover:bg-primary/5 transition"
              >

                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">

                  <Icon
                    icon="mdi:check-bold"
                    width={20}
                    className="text-primary"
                  />

                </div>

                <span className="font-medium text-darknavy">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="lg:col-span-2">

          <div className="sticky top-28 rounded-3xl bg-darknavy text-white p-8 shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">

                <Icon
                  icon={category.icon}
                  width={28}
                />

              </div>

              <div>

                <p className="text-sm uppercase tracking-widest text-white/60">

                  Özet

                </p>

                <h3 className="text-2xl font-cormorant-garamont font-bold">

                  {category.title}

                </h3>

              </div>

            </div>

            <div className="mt-10 space-y-6">

              <div className="flex justify-between items-center border-b border-white/10 pb-4">

                <span className="text-white/70">

                  Toplam Marina

                </span>

                <strong className="text-2xl">

                  {marinas.length}

                </strong>

              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-4">

                <span className="text-white/70">

                  Şehir

                </span>

                <strong className="text-2xl">

                  {cityCount}

                </strong>

              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-4">

                <span className="text-white/70">

                  Bölge

                </span>

                <strong className="text-2xl">

                  {regionCount}

                </strong>

              </div>

              <div className="flex justify-between items-center">

                <span className="text-white/70">

                  Ortalama Puan

                </span>

                <strong className="text-2xl text-primary">

                  ⭐ {averageRating}

                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}