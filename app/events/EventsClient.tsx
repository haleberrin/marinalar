"use client";

import { useState } from "react";

import { Event } from "@/types/event";
import EventCard from "./EventCard";
import EventFilters from "./EventFilters";

type EventListItem = Event & {
  cityName?: string;
  districtName?: string;
};

interface EventsClientProps {
  events: EventListItem[];
}

export default function EventsClient({
  events,
}: EventsClientProps) {
  const [filteredEvents, setFilteredEvents] = useState(events);

  return (
    <>
      <EventFilters
        events={events}
        onFilter={setFilteredEvents}
      />

      {filteredEvents.length > 0 ? (
        <div className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        ">
         {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              cityName={event.cityName}
              districtName={event.districtName}
            />
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
            Bu filtrelere uygun etkinlik bulunamadı.
          </p>
        </div>
      )}
    </>
  );
}