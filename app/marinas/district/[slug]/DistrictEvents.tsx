import Link from "next/link";
import { Event } from "@/types/event";
import { CalendarDays, ArrowUpRight } from "lucide-react";

interface DistrictEventsProps {
  events: Event[];
}

export default function DistrictEvents({
  events,
}: DistrictEventsProps) {
  return (
    <section className="px-[8%] py-24 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Etkinlikler
          </p>

          <h2 className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
            İlçedeki Etkinlikler
          </h2>

          <p className="mt-4 max-w-2xl text-darknavy/70">
            Bu bölgede gerçekleşen denizcilik, yelken ve marina
            etkinliklerini keşfedin.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="
                  group
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-xl
                "
              >
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CalendarDays size={17} />

                  <span>
                    {new Date(event.startDate).toLocaleDateString(
                      "tr-TR"
                    )}
                  </span>
                </div>

                <h3 className="
                  mt-5
                  font-cormorant-garamont
                  text-3xl
                  font-bold
                  text-darknavy
                  transition-colors
                  duration-300
                  group-hover:text-primary
                ">
                  {event.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-darknavy/70">
                  {event.description[0]}
                </p>

                <div className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  border-t
                  border-slate-200
                  pt-5
                ">
                  <span className="text-sm font-semibold text-darknavy">
                    Etkinliği İncele
                  </span>

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
              </Link>
            ))}
          </div>
        ) : (
          <div className="
            rounded-[28px]
            border
            border-dashed
            border-slate-300
            bg-slate-50
            p-12
            text-center
          ">
            <p className="text-darknavy/60">
              Bu ilçede henüz etkinlik bulunmuyor.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}