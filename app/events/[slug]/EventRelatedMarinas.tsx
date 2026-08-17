import Link from "next/link";
import Image from "next/image";
import { Anchor, ArrowUpRight, MapPin, Star } from "lucide-react";

import { Event } from "@/types/event";

import { getMarinasByDistrict } from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";

interface EventRelatedMarinasProps {
  event: Event;
  cityName?: string;
  districtName?: string;
}

export default async function EventRelatedMarinas({
  event,
  cityName,
  districtName,
}: EventRelatedMarinasProps) {


  const prismaMarinas = event.location.districtId
    ? await getMarinasByDistrict(event.location.districtId)
    : [];

  const marinas = prismaMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );

  if (marinas.length === 0) {
    return null;
  }

  return (
    <section className="px-[8%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Etkinlik Bölgesindeki Marinalar
          </p>

          <h2
            className="
              mt-3
              font-cormorant-garamont
              text-5xl
              font-bold
              text-darknavy
            "
          >
            Etkinliğe Yakın
            <span className="text-primary"> Marinalar</span>
          </h2>

          <p className="mt-4 max-w-2xl text-darknavy/70">
            {districtName}
            {cityName && `, ${cityName}`} bölgesindeki marinaları keşfedin.
            Etkinliğe katılırken konaklama ve bağlama seçeneklerini inceleyin.
          </p>
        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {marinas.map((marina) => (
            <Link
              key={marina.id}
              href={`/marinas/${marina.slug}`}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={marina.media.coverImage}
                  alt={marina.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                  "
                />

                {marina.rating !== undefined && (
                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/85
                      px-3
                      py-2
                      text-sm
                      font-semibold
                      shadow-lg
                      backdrop-blur-xl
                    "
                  >
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    {marina.rating}
                  </div>
                )}

                <div className="absolute bottom-5 left-5 right-5">
                  <h3
                    className="
                      font-cormorant-garamont
                      text-3xl
                      font-bold
                      text-white
                    "
                  >
                    {marina.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-darknavy/50
                  "
                >
                <MapPin size={14} />

                {districtName}
                {cityName && `, ${cityName}`}
                </div>

                <p
                  className="
                    mt-4
                    line-clamp-2
                    text-sm
                    leading-6
                    text-darknavy/70
                  "
                >
                  {marina.summary}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-200
                    pt-5
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-primary
                    "
                  >
                    <Anchor size={16} />
                    Marinayı İncele
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      group-hover:bg-primary/10
                    "
                  >
                    <ArrowUpRight
                      size={18}
                      className="
                        text-primary
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}