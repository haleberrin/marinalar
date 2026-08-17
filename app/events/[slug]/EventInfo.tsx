import { CalendarDays, Tag, MapPin } from "lucide-react";

import { Event } from "@/types/event";


interface EventInfoProps {
  event: Event;
  cityName?: string;
  districtName?: string;
  regionName?: string;
}

export default function EventInfo({
  event,
  cityName,
  districtName,
  regionName,
}: EventInfoProps) {
  

  return (
    <section className="bg-[#F8FAFC] px-[8%] py-20 lg:px-[12%]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.5fr_1fr]">

        {/* SOL: Açıklama */}

        <div>

          <p className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-primary
          ">
            Etkinlik Hakkında
          </p>

          <h2 className="
            mt-3
            font-cormorant-garamont
            text-5xl
            font-bold
            text-darknavy
          ">
            {event.title}
          </h2>
          <div className="mt-6 h-px w-20 bg-primary" />

          <div className="mt-8 space-y-5">

            {event.description.map((paragraph, index) => (
              <p
                key={index}
                className="
                  text-lg
                  leading-8
                  text-darknavy/70
                "
              >
                {paragraph}
              </p>
            ))}

          </div>

        </div>


        {/* SAĞ: Bilgi Kartı */}

        <div className="
  h-fit
  rounded-[32px]
  border
  border-slate-200
  bg-white
  p-8
  shadow-xl
  transition-all
  duration-300
  hover:shadow-2xl
">

          <h3 className="
            font-cormorant-garamont
            text-3xl
            font-bold
            text-darknavy
          ">
            Etkinlik Bilgileri
          </h3>


          <div className="mt-8 space-y-6">

            {/* Tarih */}

            <div className="flex items-start gap-4">

              <CalendarDays
                size={22}
                className="mt-1 text-primary"
              />

              <div>

                <p className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-darknavy/50
                ">
                  Tarih
                </p>

                <p className="
                  mt-1
                  font-medium
                  text-darknavy
                ">
                  {new Date(event.startDate).toLocaleDateString(
                    "tr-TR"
                  )}

                  {event.endDate && (
                    <>
                      {" – "}
                      {new Date(event.endDate).toLocaleDateString(
                        "tr-TR"
                      )}
                    </>
                  )}
                </p>

              </div>

            </div>


            {/* Konum */}

            <div className="flex items-start gap-4">

              <MapPin
                size={22}
                className="mt-1 text-primary"
              />

              <div>

                <p className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-darknavy/50
                ">
                  Konum
                </p>

                <p className="
                  mt-1
                  font-medium
                  text-darknavy
                ">
                  {event.location.name ??
                    districtName ??
                    cityName ??
                    "Konum belirtilmemiş"}
                </p>

                <p className="mt-1 text-sm text-darknavy/60">
                  {districtName ?? cityName}
                  {regionName && ` • ${regionName}`}
                </p>

              </div>

            </div>


            {/* Etkinlik Türü */}

            <div className="flex items-start gap-4">

              <Tag
                size={22}
                className="mt-1 text-primary"
              />

              <div>

                <p className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-darknavy/50
                ">
                  Etkinlik Türü
                </p>

                <p className="
                  mt-1
                  font-medium
                  capitalize
                  text-darknavy
                ">
                  {event.type.replace("_", " ")}
                </p>

              </div>

            </div>

          </div>


          {/* Tags */}

          {event.tags.length > 0 && (
            <div className="
              mt-8
              border-t
              border-slate-200
              pt-6
            ">

              <p className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-darknavy/50
              ">
                Etiketler
              </p>

              <div className="
                mt-4
                flex
                flex-wrap
                gap-2
              ">

                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      bg-slate-100
                      px-4
                      py-2
                      text-sm
                      capitalize
                      text-darknavy
                    "
                  >
                    {tag.replace("_", " ")}
                  </span>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}