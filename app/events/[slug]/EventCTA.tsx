import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";

import { Event } from "@/types/event";

interface EventCTAProps {
  event: Event;
}

export default function EventCTA({
  event,
}: EventCTAProps) {
  if (!event.website) {
    return null;
  }

  return (
    <section className="px-[8%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-darknavy
            px-8
            py-12
            text-white
            shadow-2xl
            md:px-12
            lg:px-16
          "
        >
          {/* Dekoratif arka plan */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-primary/20
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-1/3
              h-56
              w-56
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          <div className="
            relative
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-center
            md:justify-between
          ">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3 text-primary">
                <Globe size={20} />

                <p className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                ">
                  Resmi Etkinlik Sitesi
                </p>
              </div>

              <h2 className="
                mt-5
                font-cormorant-garamont
                text-4xl
                font-bold
                md:text-5xl
              ">
                {event.title} hakkında daha fazla bilgi alın
              </h2>

              <p className="
                mt-4
                max-w-xl
                leading-7
                text-white/70
              ">
                Tarihler, katılım koşulları ve etkinlikle ilgili güncel
                bilgileri resmi etkinlik websitesinden inceleyebilirsiniz.
              </p>

            </div>

            <Link
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                rounded-full
                bg-primary
                px-6
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
              "
            >
              Resmi Web Sitesini Ziyaret Et

              <ArrowUpRight
                size={20}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}