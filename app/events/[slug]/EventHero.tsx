import Image from "next/image";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

import { Event } from "@/types/event";


interface EventHeroProps {
  event: Event;
  cityName?: string;
  districtName?: string;
  regionName?: string;
}

export default function EventHero({
  event,
  cityName,
  districtName,
  regionName,
}: EventHeroProps) {
 

  const startDate = new Date(event.startDate).toLocaleDateString(
    "tr-TR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const endDate = event.endDate
    ? new Date(event.endDate).toLocaleDateString(
        "tr-TR",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : null;

  return (
    <section className="relative h-[75vh] overflow-hidden">

      {/* Background */}

      <Image
        src={event.featuredImage}
        alt={event.title}
        fill
        sizes="100vw"
        priority
        className="scale-105 object-cover"
      />


      {/* Overlay */}

      <div className="
        absolute
        inset-0
        bg-linear-to-t
        from-black
        via-black/60
        to-black/20
      " />

      <div className="
        absolute
        inset-0
        bg-darknavy/20
      " />


      {/* Content */}

      <div className="
        absolute
        bottom-0
        left-0
        w-full
        px-[8%]
        pb-24
        text-white
        lg:px-[12%]
      ">

        {/* Event Type */}

        <div className="
          mb-6
          flex
          flex-wrap
          items-center
          gap-3
        ">

          <span className="
            rounded-full
            border
            border-white/20
            bg-white/10
            px-4
            py-2
            text-sm
            capitalize
            backdrop-blur-md
          ">
            {event.type.replace("_", " ")}
          </span>

          {event.featured && (
            <span className="
              rounded-full
              bg-primary/90
              px-4
              py-2
              text-sm
              font-medium
            ">
              Öne Çıkan Etkinlik
            </span>
          )}

        </div>


        {/* Title */}

        <h1 className="
          max-w-5xl
          font-cormorant-garamont
          text-5xl
          font-bold
          leading-tight
          lg:text-7xl
        ">
          {event.title}
        </h1>


        {/* Location */}

        <div className="
  mt-5
  flex
  flex-wrap
  items-center
  gap-2
  text-lg
  text-white/90
">

  <MapPin size={20} />

  <span>
    {event.location.name ??
      districtName ??
      cityName}
  </span>

  {cityName && (
    <>
      <span>•</span>
      <span>{cityName}</span>
    </>
  )}

  {regionName && (
    <>
      <span>•</span>
      <span className="font-semibold">
        {regionName}
      </span>
    </>
  )}

</div>


        {/* Date */}

        <div className="
          mt-8
          flex
          flex-wrap
          gap-4
        ">

          <div className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/20
            bg-white/10
            px-5
            py-3
            backdrop-blur-md
          ">

            <CalendarDays size={22} />

            <div>

              <p className="font-semibold">
                {startDate}
                {endDate && ` – ${endDate}`}
              </p>

              <p className="text-xs text-white/60">
                Etkinlik Tarihi
              </p>

            </div>

          </div>


          {event.website && (

            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-5
                py-3
                backdrop-blur-md
                transition-all
                hover:bg-white/20
              "
            >

              <ExternalLink size={20} />

              <span className="font-semibold">
                Resmi Web Sitesi
              </span>

            </a>

          )}

        </div>

      </div>

    </section>
  );
}