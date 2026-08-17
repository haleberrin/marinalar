import Link from "next/link";
import { Icon } from "@iconify/react";
import { MapPin } from "lucide-react";
import { City } from "@/types/city";

interface CityCardProps {
  city: City;
  marinaCount: number;
}

export default function CityCard({
  city,
  marinaCount,
}: CityCardProps) {
  return (
    <Link
      href={`/marinas/city/${city.slug}`}
      className="
        group
        flex
        items-center
        justify-between
        rounded-[24px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      {/* SOL TARAF */}
      <div className="flex items-center gap-4">

        {/* ICON */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-slate-100
            text-darknavy
            transition-all
            duration-300
            group-hover:bg-primary
            group-hover:text-white
          "
        >
          <MapPin size={20} />
        </div>

        {/* BİLGİ */}
        <div>
          <h3
            className="
              text-2xl
              font-cormorant-garamont
              font-bold
              text-darknavy
              transition-colors
              duration-300
              group-hover:text-primary
            "
          >
            {city.name}
          </h3>

          <p className="mt-1 text-sm text-darknavy/60">
            {marinaCount} Marina keşfedin
          </p>
        </div>

      </div>

      {/* OK */}
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-slate-100
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-primary
        "
      >
        <Icon
          icon="guidance:up-right-arrow"
          width={18}
          className="
            text-darknavy
            transition-all
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            group-hover:text-white
          "
        />
      </div>

    </Link>
  );
}