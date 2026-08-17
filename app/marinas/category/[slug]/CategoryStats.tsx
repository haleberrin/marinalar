import { Marina } from "@/types/marina";
import { Icon } from "@iconify/react";

interface Props {
  marinas: Marina[];
}

export default function CategoryStats({
  marinas,
}: Props) {
  const cityCount = new Set(
    marinas.map((m) => m.cityId)
  ).size;

  const regionCount = new Set(
    marinas.map((m) => m.regionId)
  ).size;

  const rated = marinas.filter(
    (m) => m.rating !== undefined
  );

  const averageRating =
    rated.length > 0
      ? (
          rated.reduce(
            (sum, marina) => sum + marina.rating!,
            0
          ) / rated.length
        ).toFixed(1)
      : "0.0";

  const stats = [
    {
      title: "Toplam Marina",
      value: marinas.length,
      icon: "mdi:ferry",
    },
    {
      title: "Şehir",
      value: cityCount,
      icon: "mdi:city",
    },
    {
      title: "Bölge",
      value: regionCount,
      icon: "mdi:map-marker-radius",
    },
    {
      title: "Ortalama Puan",
      value: averageRating,
      icon: "mdi:star",
    },
  ];

  return (
    <section className="px-[8%] lg:px-[12%] py-20 bg-[#EEF5F9]">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="
              bg-white
              rounded-3xl
              p-8
              border
              border-slate-200
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon
                icon={stat.icon}
                className="text-primary"
                width={28}
              />
            </div>

            <h3 className="mt-8 text-5xl font-bold font-cormorant-garamont text-darknavy">
              {stat.value}
            </h3>

            <p className="mt-2 text-darknavy/70">
              {stat.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}