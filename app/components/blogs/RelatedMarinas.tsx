import Link from "next/link";
import { Anchor, ArrowUpRight } from "lucide-react";

import { Blog } from "@/types/blog";
import { getMarinasByIds } from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";

interface RelatedMarinasProps {
  marinaIds: Blog["relatedMarinas"];
}

export default async function RelatedMarinas({
  marinaIds,
}: RelatedMarinasProps) {
  const prismaMarinas = await getMarinasByIds(marinaIds);

  const relatedMarinas = prismaMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );

  if (relatedMarinas.length === 0) {
    return null;
  }

  return (
    <section className="mt-24 border-t border-slate-200 pt-16">
      <div className="mb-8">
        <p className="
          text-xs
          uppercase
          tracking-[0.3em]
          text-primary
        ">
          Keşfetmeye Devam Et
        </p>

        <h2 className="
          mt-3
          font-cormorant-garamont
          text-4xl
          font-bold
          text-darknavy
        ">
          Bu Yazıyla İlgili Marinalar
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {relatedMarinas.map((marina) => (
          <Link
            key={marina.id}
            href={`/marinas/${marina.slug}`}
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/30
              hover:shadow-lg
            "
          >
            <div className="flex items-center gap-4">
              <div className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-primary/10
              ">
                <Anchor
                  size={22}
                  className="text-primary"
                />
              </div>

              <div>
                <h3 className="
                  font-cormorant-garamont
                  text-2xl
                  font-bold
                  text-darknavy
                  transition-colors
                  group-hover:text-primary
                ">
                  {marina.name}
                </h3>

                <p className="mt-1 text-sm text-darknavy/60">
                  Marina detaylarını keşfet
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={22}
              className="
                text-primary
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        ))}
      </div>
    </section>
  );
}