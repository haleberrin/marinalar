"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Event, EventTag } from "@/types/event";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface EventTimelineProps {
  events: Event[];
}

type EventTab = "all" | EventTag;
const tabs: {
  key: EventTab;
  label: string;
}[] = [
  { key: "all", label: "All Events" },
  { key: "sailing", label: "Sailing" },
  { key: "festival", label: "Festivals" },
  { key: "charter", label: "Charter Shows" },
];

export default function EventTimeline({
  events,
}: EventTimelineProps) {
  const [activeTab, setActiveTab] =
  useState<EventTab>("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<any>(null);

  // FILTER
  const filteredEvents =
    activeTab === "all"
      ? events
      : events.filter((event) => event.tags.includes(activeTab));

  const activeEvent = filteredEvents[activeIndex] || filteredEvents[0];

  return (
    <section className="px-[8%] lg:px-[12%] py-16 bg-[#F8FAFC] ">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

        <div className="lg:w-2/3">
          <h2 className="text-[3.5rem] text-darknavy font-cormorant-garamont lg:text-[5.5rem] font-bold tracking-tight">
          Kıyı Etkinlikleri ve <span className="text-primary"> Marina</span> Deneyimleri
          </h2>
        </div>

        <div className="lg:w-1/2">
          <h3 className="uppercase font-cormorant-garamont text-primary text-sm font-semibold border-b pb-2 mb-6">
          Öne Çıkan Etkinlikler
          </h3>

          <p className="font-inter text-darknavy">
            Türkiye’nin en özel marinalarında gerçekleşen yelken festivallerini, yat fuarlarını ve deniz etkinliklerini keşfedin.
          </p>

          <div className="flex justify-center my-13">
              <Link
                href="/events"
                className="
                  inline-flex items-center gap-2
                  px-8 py-4
                  rounded-full
                  bg-primary
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all duration-300
                  shadow-lg
                "
              >
                Tüm Etkinlikleri İncele
                <Icon icon="guidance:up-right-arrow" width={24} height={24} className='text-white' />
              </Link>
        </div>

          {/* <a href="/events" className="font-medium hover:underline text-primary">
          Tüm Etkinlikleri İncele →
          </a> */}
        </div>
      </div>

      {/* MAIN */}
      <div className="mt-12 flex flex-col lg:flex-row gap-10">

        {/* SWIPER */}
        <div className="lg:w-1/2 w-full">

          <Swiper
           key={activeTab}
            modules={[ EffectCards, Autoplay]}
            effect="cards"
            grabCursor
            autoplay={{ delay: 10000 }}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            className="rounded"
            style={{ padding: "30px" }}
          >
            {filteredEvents.map((event) => (
              <SwiperSlide key={event.id}>
              <Link
                href={`/events/${event.slug}`}
                className="block"
              >
                <div className="relative h-145">
            
                  <Image
                    src={event.featuredImage}
                    alt={event.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    fill
                    className="
                      rounded
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
            
                  <div className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    bg-linear-to-t
                    from-darknavy/80
                    via-darknavy/40
                    to-transparent
                    p-6
                  ">
                    ...
                  </div>
            
                </div>
              </Link>
            </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* TABS + DETAILS */}
        <div className="lg:w-1/2 w-full px-0 lg:px-10 pt-6">

          {/* TABS */}
          <div className="flex gap-6 border-b mb-6">

            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`relative pb-2 text-lg font-medium transition ${
                  activeTab === tab.key
                    ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black"
                    : "text-gray-400 hover:text-black"
                }`}
                onClick={() => {
                  setActiveTab(tab.key);
                  setActiveIndex(0);
                  swiperRef.current?.slideTo(0);
                }}
              >
                {tab.label}
              </button>
            ))}

          </div>

          {/* ACTIVE EVENT DETAIL */}
          {activeEvent && (
            <div className="space-y-4">

              <h3 className="text-2xl font-semibold font-cormorant-garamont text-primary">
                <Link href={`/events/${activeEvent.slug}`}>
                  {activeEvent.title}
                </Link>
              </h3>

              <p className="text-darknavy">
                {activeEvent.location.cityId} • {activeEvent.location.name}
              </p>

              <p className="text-primary">
                {activeEvent.startDate} → {activeEvent.endDate}
              </p>

              <div className="flex gap-2 flex-wrap font-inter">
                {activeEvent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-darknavy text-white px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-darknavy font-inter">
                {activeEvent.description}
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}