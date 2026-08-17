import Image from "next/image";
import { Event } from "@/types/event";

interface EventGalleryProps {
  event: Event;
}

export default function EventGallery({
  event,
}: EventGalleryProps) {
  if (!event.gallery || event.gallery.length === 0) {
    return null;
  }

  return (
    <section className="px-[8%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Etkinlik Galerisi
          </p>

          <h2 className="
            mt-3
            font-cormorant-garamont
            text-5xl
            font-bold
            text-darknavy
          ">
            Etkinlikten Kareler
          </h2>
        </div>

        <div className="
          grid
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
        ">
          {event.gallery.map((image, index) => (
            <div
              key={image}
              className="
                group
                relative
                h-72
                overflow-hidden
                rounded-[28px]
              "
            >
              <Image
                src={image}
                alt={`${event.title} - ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1024px) 50vw,
                33vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="
                absolute
                inset-0
                bg-black/0
                transition-all
                duration-500
                group-hover:bg-black/20
              " />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}