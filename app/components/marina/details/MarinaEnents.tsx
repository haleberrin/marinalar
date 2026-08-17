import Link from "next/link";
import { Event } from "@/types/event";
import { CalendarDays, ArrowUpRight } from "lucide-react";

import MarinaCard from "../../ui/marina/MarinaCard";
import SectionTitle from "../../ui/marina/SectionTitle";

interface MarinaEventsProps {
  events: Event[];
}

export default function MarinaEvents({
  events,
}: MarinaEventsProps) {
  return (
    <MarinaCard dark className="p-6">

      <SectionTitle light>
        Marina Etkinlikleri
      </SectionTitle>

      <h2 className="
        mt-3
        font-cormorant-garamont
        text-4xl
        font-bold
        text-white
      ">
        Bu Marinadaki Etkinlikler
      </h2>

      {events.length > 0 ? (
        <div className="mt-6 space-y-4">

          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="
                group
                block
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition-all
                duration-300
                hover:border-primary/40
                hover:bg-white/10
              "
            >

              {/* Tarih */}
              <div className="
                flex
                items-center
                gap-2
                text-sm
                text-primary
              ">
                <CalendarDays size={16} />

                <span>
                  {new Date(event.startDate).toLocaleDateString("tr-TR")}
                </span>
              </div>


              {/* Başlık */}
              <h3 className="
                mt-3
                font-cormorant-garamont
                text-2xl
                font-bold
                text-white
                transition-colors
                duration-300
                group-hover:text-primary
              ">
                {event.title}
              </h3>


              {/* Açıklama */}
              <p className="
                mt-2
                line-clamp-2
                text-sm
                leading-6
                text-white/60
              ">
                {event.description[0]}
              </p>


              {/* CTA */}
              <div className="
                mt-4
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-primary
              ">
                Etkinliği İncele

                <ArrowUpRight
                  size={16}
                  className="
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
          mt-6
          rounded-2xl
          border
          border-dashed
          border-white/20
          bg-white/5
          p-8
          text-center
        ">
          <p className="text-sm text-white/60">
            Bu marinada henüz etkinlik bulunmuyor.
          </p>
        </div>
      )}

    </MarinaCard>
  );
}