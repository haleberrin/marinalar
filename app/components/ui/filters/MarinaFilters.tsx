"use client";

import { MarinaCategory } from "@/types/marina";
import { Search,ArrowUp, ArrowDown } from "lucide-react";

interface MarinaFiltersProps {
  activeFilter: MarinaCategory | "all";
  setActiveFilter: (filter: MarinaCategory | "all") => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  sortBy: "default" | "rating-desc" | "rating-asc";
  setSortBy: (
    sort: "default" | "rating-desc" | "rating-asc"
  ) => void;
}

const filters: {
  label: string;
  value: MarinaCategory | "all";
}[] = [
  { label: "Tümü", value: "all" },
  { label: "Lüks", value: "luxury" },
  { label: "Aile", value: "family" },
  { label: "Doğa", value: "nature" },
  { label: "Yelken", value: "sailing" },
  { label: "Gece Hayatı", value: "nightlife" },
];

export default function MarinaFilters({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}: MarinaFiltersProps) {
  return (
    <div className="mb-10 space-y-5">

      {/* Arama */}
      <div className="relative max-w-md">
        <Search
          size={19}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-darknavy/40
          "
        />

        <input
          type="text"
          value={searchQuery ?? ""}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Marina ara..."
          className="
            w-full
            rounded-full
            border
            border-slate-200
            bg-white
            py-3
            pl-11
            pr-5
            text-sm
            text-darknavy
            outline-none
            transition-all
            duration-300
            placeholder:text-darknavy/40
            focus:border-primary
            focus:ring-2
            focus:ring-primary/10
          "
        />
      </div>

      <div className="flex flex-wrap gap-3">
  <button
    onClick={() => setSortBy("default")}
    className={`
      rounded-full
      border
      px-5
      py-2.5
      text-sm
      font-medium
      transition-all
      duration-300
      ${
        sortBy === "default"
          ? "border-darknavy bg-darknavy text-white"
          : "border-slate-200 bg-white text-darknavy hover:border-primary hover:text-primary"
      }
    `}
  >
    Varsayılan
  </button>

  <button
    onClick={() => setSortBy("rating-desc")}
    className={`
      flex
      items-center
      justify-center
      gap-2
      rounded-full
      border
      px-5
      py-2.5
      text-sm
      font-medium
      transition-all
      duration-300
      ${
        sortBy === "rating-desc"
          ? "border-darknavy bg-darknavy text-white"
          : "border-slate-200 bg-white text-darknavy hover:border-primary hover:text-primary"
      }
    `}
  >
    En Yüksek Puan <ArrowUp size={15}/> 
  </button>

  <button
    onClick={() => setSortBy("rating-asc")}
    className={`
      flex
      items-center
      justify-center
      gap-2
      rounded-full
      border
      px-5
      py-2.5
      text-sm
      font-medium
      transition-all
      duration-300
      ${
        sortBy === "rating-asc"
          ? "border-darknavy bg-darknavy text-white"
          : "border-slate-200 bg-white text-darknavy hover:border-primary hover:text-primary"
      }
    `}
  >
    En Düşük Puan <ArrowDown size={15} />
  </button>
</div>

      {/* Kategori filtreleri */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                activeFilter === filter.value
                  ? "bg-darknavy text-white shadow-md"
                  : "border border-slate-200 bg-white text-darknavy hover:border-primary hover:text-primary"
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

    </div>
  );
}