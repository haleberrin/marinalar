"use client";

import { useState } from "react";

import RegionMarinaCard from "@/app/components/ui/cards/RegionMarinaCard";
import MarinaFilters from "@/app/components/ui/filters/MarinaFilters";

import {
  Marina,
  MarinaCategory,
} from "@/types/marina";

interface RegionAllMarinasProps {
  marinas: {
    marina: Marina;
    cityName: string;
    districtName: string;

  }[];
}

const RegionAllMarinas = ({
  marinas,
}: RegionAllMarinasProps) => {
  const [activeFilter, setActiveFilter] =
    useState<MarinaCategory | "all">("all");

    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<
  "default" | "rating-desc" | "rating-asc"
>("default");

const filteredMarinas = marinas
.filter(({ marina, cityName, districtName }) => {
  const matchesCategory =
    activeFilter === "all" ||
    marina.categories.includes(activeFilter);

  const search = searchQuery.toLowerCase().trim();

  const matchesSearch =
    marina.name.toLowerCase().includes(search) ||
    cityName.toLowerCase().includes(search) ||
    districtName.toLowerCase().includes(search);

  return matchesCategory && matchesSearch;
})
.sort((a, b) => {
  if (sortBy === "rating-desc") {
    return (b.marina.rating ?? 0) - (a.marina.rating ?? 0);
  }

  if (sortBy === "rating-asc") {
    return (a.marina.rating ?? 0) - (b.marina.rating ?? 0);
  }

  return 0;
});
    
    
  

  return (
    <section className="px-[8%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">

        {/* Başlık */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Marinalar
            </p>

            <h2 className="font-cormorant-garamont text-5xl font-bold text-darknavy">
              Bölgedeki Tüm{" "}
              <span className="text-primary">
                Marinalar
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-darknavy/70">
              Bu bölgede bulunan tüm marinaları keşfedin ve size en uygun
              marina deneyimini inceleyin.
            </p>
          </div>

          <span className="shrink-0 text-sm text-darknavy/50">
            {filteredMarinas.length} Marina
          </span>
        </div>

        {/* Filtreler */}
        <MarinaFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Marina Kartları */}
        {filteredMarinas.length > 0 ? (
  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    {filteredMarinas.map(({ marina, cityName }) => (
      <RegionMarinaCard
        key={marina.id}
        marina={marina}
        cityName={cityName}
      />
    ))}
  </div>
) : (
  <div className="flex min-h-65 items-center justify-center rounded-[32px] border border-dashed border-slate-300 bg-slate-50">
    <div className="text-center">
      <p className="text-xl font-cormorant-garamont font-bold text-darknavy">
        Marina bulunamadı
      </p>

      <p className="mt-2 text-sm text-darknavy/60">
        Aramanız veya seçtiğiniz filtrelerle eşleşen marina bulunmuyor.
      </p>
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default RegionAllMarinas;