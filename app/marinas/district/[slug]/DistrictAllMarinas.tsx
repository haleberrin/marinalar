"use client";

import { useState } from "react";

import RegionMarinaCard from "@/app/components/ui/cards/RegionMarinaCard";
import MarinaFilters from "@/app/components/ui/filters/MarinaFilters";

import {
  Marina,
  MarinaCategory,
} from "@/types/marina";

interface DistrictAllMarinasProps {
  marinas: {
    marina: Marina;
    districtName: string;
  }[];
}

export default function DistrictAllMarinas({
  marinas,
}: DistrictAllMarinasProps) {
  const [activeFilter, setActiveFilter] =
    useState<MarinaCategory | "all">("all");

  const [searchQuery, setSearchQuery] = useState("");

  const [sortBy, setSortBy] = useState<
    "default" | "rating-desc" | "rating-asc"
  >("default");

  const search = searchQuery.toLowerCase().trim();

  const filteredMarinas = marinas
    .filter(({ marina }) => {
      const matchesCategory =
        activeFilter === "all" ||
        marina.categories.includes(activeFilter);

      const matchesSearch =
        marina.name.toLowerCase().includes(search);

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

        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Marinalar
            </p>

            <h2 className="font-cormorant-garamont text-5xl font-bold text-darknavy">
              İlçedeki Tüm{" "}
              <span className="text-primary">
                Marinalar
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-darknavy/70">
              Bu ilçede bulunan tüm marinaları keşfedin ve size en uygun
              marina deneyimini bulun.
            </p>
          </div>

          <span className="shrink-0 text-sm text-darknavy/50">
            {filteredMarinas.length} Marina
          </span>
        </div>

        <MarinaFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredMarinas.map(({ marina, districtName }) => (
            <RegionMarinaCard
              key={marina.id}
              marina={marina}
              cityName={districtName}
            />
          ))}
        </div>

      </div>
    </section>
  );
}