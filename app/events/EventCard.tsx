import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Event } from "@/types/event";


interface EventCardProps {
  event: Event;
  cityName?: string;
  districtName?: string;
}

export default function EventCard({
  event,
  cityName,
  districtName,
}: EventCardProps) {

 

  const formattedDate = new Date(
    event.startDate
  ).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/events/${event.slug}`}
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-[32px]
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

      {/* IMAGE */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={event.featuredImage}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        <div className="
          absolute
          inset-0
          bg-black/10
          transition-all
          duration-500
          group-hover:bg-black/30
        " />

        {event.featured && (
          <span className="
            absolute
            left-5
            top-5
            rounded-full
            bg-primary
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-white
          ">
            Öne Çıkan
          </span>
        )}

        <span className="
          absolute
          right-5
          top-5
          rounded-full
          border
          border-white/30
          bg-black/30
          px-4
          py-2
          text-xs
          uppercase
          tracking-wider
          text-white
          backdrop-blur-md
        ">
          {event.type.replace("_", " ")}
        </span>

      </div>


      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-7">

        {/* DATE */}

        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-primary
        ">
          <CalendarDays size={16} />

          <span>
            {formattedDate}
          </span>
        </div>


        {/* TITLE */}

        <h2 className="
          mt-4
          font-cormorant-garamont
          text-3xl
          font-bold
          leading-tight
          text-darknavy
          transition-colors
          duration-300
          group-hover:text-primary
        ">
          {event.title}
        </h2>


        {/* DESCRIPTION */}

        <p className="
          mt-4
          line-clamp-3
          leading-7
          text-darknavy/70
        ">
          {event.description[0]}
        </p>


        {/* LOCATION */}

        <div className="
          mt-5
          flex
          items-center
          gap-2
          text-sm
          text-darknavy/60
        ">
          <MapPin size={16} />

          <span>
            {districtName
              ? `${districtName}, ${cityName ?? ""}`
              : cityName ?? "Konum belirtilmemiş"}
          </span>
        </div>


        {/* CTA */}

        <div className="
          mt-6
          flex
          items-center
          justify-between
          border-t
          border-slate-200
          pt-5
        ">

          <span className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.15em]
            text-darknavy
            transition-colors
            group-hover:text-primary
          ">
            Etkinliği İncele
          </span>

          <div className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
            group-hover:bg-primary/10
          ">
            <ArrowUpRight
              size={19}
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
  );
}