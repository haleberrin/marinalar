import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { marinaAmenities } from "@/lib/marina-ui/marina-amenities";

import { Marina } from "@/types/marina";



interface Props {
  marina: Marina;
  cityName: string;
  regionName: string;
  badge?: string;
}

export default function CategoryMarinaCard({
  marina,
  cityName,
  regionName,
  badge,
}: Props) {


  return (
    <Link
      href={`/marinas/${marina.slug}`}
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* IMAGE */}

      <div className="relative h-80 overflow-hidden">
        <Image
          src={marina.media.coverImage}
          alt={marina.name}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
{marina.rating && marina.rating >= 4.7 && (
  <div className="absolute top-5 right-5 z-20">
    <div
      className="
        rounded-2xl
        bg-white/90
        backdrop-blur-md
        px-4
        py-2
        shadow-xl
      "
    >
      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">
        Top Rated
      </p>

      <p className="font-bold text-darknavy">
        ⭐ {marina.rating.toFixed(1)}
      </p>
    </div>
  </div>
)}

<button
  className="
    absolute
    top-5
    left-5
    z-20
    w-11
    h-11
    rounded-full
    bg-white/90
    backdrop-blur-md
    flex
    items-center
    justify-center
    shadow-lg
    transition
    hover:bg-primary
    hover:text-white
    hover:scale-110
    active:scale-95
    duration-300
  "
>
  <Icon icon="mdi:heart-outline" width={22} />
</button>

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {badge && (
  <div className="absolute bottom-5 left-5 z-20">
    <span
      className="
        rounded-full
        bg-primary
        px-4
        py-2
        font-semibold
        text-white
        shadow-lg
        text-xs
      "
    >
      {badge}
    </span>
  </div>
)}
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-6">

        {/* Title */}

        <div>
          <h3 className="font-cormorant-garamont text-4xl font-bold text-darknavy">
            {marina.name}
          </h3>

          <div className="flex items-center gap-2 mt-1 text-darknavy/60">
  <Icon
    icon="mdi:map-marker"
    width={18}
    className="text-primary"
  />

<span>
  {cityName} • {regionName}
</span>
</div>
        </div>

        {/* Summary */}

        <p className="mt-5 line-clamp-2 leading-relaxed text-darknavy/70">
          {marina.summary}
        </p>

        {/* Marina Specs */}

        <div className="mt-6 grid grid-cols-2 gap-3">

          <div className="rounded-2xl bg-slate-100 p-3 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20">
            <p className="text-xs text-darknavy/50">
              Deniz Bağlama
            </p>


            <p className="mt-1 flex gap-2 font-semibold text-darknavy">
            <Icon icon="mdi:anchor" />
              {marina.capacity.seaBerth}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-3 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20">
            <p className="text-xs text-darknavy/50">
              Kara Bağlama
            </p>

            <p className="mt-1 flex gap-2 font-semibold text-darknavy">
            <Icon icon="mdi:warehouse" />
              {marina.capacity.landBerth}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-3 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20">
            <p className="text-xs text-darknavy/50">
              Maks. Tekne
            </p>

            <p className="mt-1 flex gap-2 font-semibold text-darknavy">
            <Icon icon="mdi:ferry" />
              {marina.capacity.maxBoatLength} m
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-3 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20">
            <p className="text-xs text-darknavy/50">
              Derinlik
            </p>

            <p className="mt-1 flex gap-2 font-semibold text-darknavy">
            <Icon icon="mdi:waves" />
              {marina.capacity.depth}
            </p>
          </div>

        </div>

        {/* Amenities */}

        <div className="mt-6 flex flex-wrap gap-2">

        
          {marina.amenities.slice(0, 4).map((item) => {
            const amenity = marinaAmenities[item];

            if (!amenity) return null;

            return (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-slate-100
                  px-3
                  py-2
                  text-xs
                  text-darknavy
                "
              >
                <Icon
                  icon={amenity.icon}
                  width={16}
                  className="text-primary"
                />

                <span>{amenity.label}</span>
              </div>
            );
          })}


        </div>

        {/* CTA */}

        <div className="mt-auto pt-8">

          <div className="flex items-center justify-between border-t pt-5">

            <div>

              <p className="text-xs text-darknavy/50">
                Marina Detayları
              </p>

              <div className="flex items-center gap-2 font-semibold text-darknavy">
                <span>Marinayı Keşfet</span>

                <Icon
                  icon="mdi:arrow-right"
                  width={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>

            </div>
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-primary
                text-white
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              <Icon icon="mdi:arrow-right" width={22} />
            </div>
          </div>
        </div>

      </div>

    </Link>
  );
}