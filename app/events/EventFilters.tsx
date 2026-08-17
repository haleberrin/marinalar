"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

import { Event } from "@/types/event";

interface EventFiltersProps {
  events: Event[];
  onFilter: (events: Event[]) => void;
}

export default function EventFilters({
  events,
  onFilter,
}: EventFiltersProps) {
  const [type, setType] = useState<string>("all");
  const [city, setCity] = useState<string>("all");

  const types = useMemo(() => {
    return [...new Set(events.map((event) => event.type))];
  }, [events]);

  const cities = useMemo(() => {
    return [...new Set(events.map((event) => event.location.cityId))];
  }, [events]);

  function applyFilters(
    selectedType: string,
    selectedCity: string
  ) {
    const filtered = events.filter((event) => {

      const typeMatch =
        selectedType === "all" ||
        event.type === selectedType;

      const cityMatch =
        selectedCity === "all" ||
        event.location.cityId === selectedCity;

      return typeMatch && cityMatch;
    });

    onFilter(filtered);
  }

  function handleTypeChange(value: string) {
    setType(value);
    applyFilters(value, city);
  }

  function handleCityChange(value: string) {
    setCity(value);
    applyFilters(type, value);
  }

  function clearFilters() {
    setType("all");
    setCity("all");
    onFilter(events);
  }

  const hasFilters =
    type !== "all" ||
    city !== "all";

  return (
    <div className="
      mb-12
      rounded-[28px]
      border
      border-slate-200
      bg-white
      p-6
      shadow-lg
    ">

      <div className="
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-end
        lg:justify-between
      ">

        <div className="
          flex
          items-center
          gap-3
        ">
          <SlidersHorizontal
            size={20}
            className="text-primary"
          />

          <div>
            <p className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-primary
            ">
              Etkinlikleri Filtrele
            </p>

            <p className="
              mt-1
              text-sm
              text-darknavy/60
            ">
              İlgi alanınıza göre etkinlikleri keşfedin.
            </p>
          </div>
        </div>


        <div className="
          flex
          flex-col
          gap-4
          sm:flex-row
        ">

          {/* TYPE */}

          <select
            value={type}
            onChange={(event) =>
              handleTypeChange(event.target.value)
            }
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              text-darknavy
              outline-none
              transition
              focus:border-primary
            "
          >
            <option value="all">
              Tüm Etkinlik Türleri
            </option>

            {types.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item.replace("_", " ")}
              </option>
            ))}
          </select>


          {/* CITY */}

          <select
            value={city}
            onChange={(event) =>
              handleCityChange(event.target.value)
            }
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              text-darknavy
              outline-none
              transition
              focus:border-primary
            "
          >
            <option value="all">
              Tüm Şehirler
            </option>

            {cities.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>


          {/* CLEAR */}

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                px-4
                py-3
                text-sm
                text-darknavy/70
                transition
                hover:border-primary
                hover:text-primary
              "
            >
              <X size={16} />

              Temizle
            </button>
          )}

        </div>

      </div>

    </div>
  );
}