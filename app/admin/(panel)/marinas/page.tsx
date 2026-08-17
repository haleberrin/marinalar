import Link from "next/link";
import { Plus, MapPin, Pencil } from "lucide-react";
import DeleteMarinaButton from "./DeleteMarinaButton";
import { prisma } from "@/lib/prisma";

export default async function AdminMarinasPage() {
  const marinas = await prisma.marina.findMany({
    include: {
      region: true,
      city: true,
      district: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <section>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Marina Yönetimi
          </p>

          <h1 className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
            Marinalar
          </h1>

          <p className="mt-3 text-darknavy/60">
            Sistemde kayıtlı marinaları görüntüleyin ve yönetin.
          </p>
        </div>

        <Link
          href="/admin/marinas/new"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-primary
            px-5
            py-3
            font-semibold
            text-white
            shadow-lg
            transition
            hover:scale-[1.02]
          "
        >
          <Plus size={18} />
          Yeni Marina
        </Link>
      </div>

      <div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-225">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-darknavy/50">
                  Marina
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-darknavy/50">
                  Konum
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-darknavy/50">
                  Kapasite
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-darknavy/50">
                  Puan
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-darknavy/50">
                  İşlem
                </th>
              </tr>
            </thead>

            <tbody>
            {marinas.map(
              (marina: (typeof marinas)[number]) => (
                <tr
                  key={marina.id}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-darknavy">
                        {marina.name}
                      </p>

                      <p className="mt-1 text-xs text-darknavy/50">
                        {marina.slug}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-start gap-2 text-sm text-darknavy/70">
                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />

                      <div>
                        <p>
                          {marina.district.name}, {marina.city.name}
                        </p>

                        <p className="mt-1 text-xs text-darknavy/50">
                          {marina.region.name}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-sm text-darknavy/70">
                    {marina.seaBerth} deniz
                    {marina.landBerth !== null && (
                      <>
                        {" "}
                        / {marina.landBerth} kara
                      </>
                    )}
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-darknavy">
                      {marina.rating ?? "-"}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
  <Link
    href={`/admin/marinas/${marina.id}/edit`}
    className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      border
      border-slate-200
      px-3
      py-2
      text-sm
      font-semibold
      text-darknavy
      transition
      hover:border-primary/30
      hover:text-primary
    "
  >
    <Pencil size={15} />
    Düzenle
  </Link>

  <DeleteMarinaButton
    marinaId={marina.id}
    marinaName={marina.name}
  />
</div>
                  </td>
                </tr>
              ))}

              {marinas.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-16 text-center text-darknavy/50"
                  >
                    Henüz marina kaydı bulunmuyor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}