import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  if (session.user.role !== "admin") {
    redirect("/");
  }

  const [
    marinaCount,
    eventCount,
    blogCount,
    categoryCount,
  ] = await Promise.all([
    prisma.marina.count(),
    prisma.event.count(),
    prisma.blog.count(),
    prisma.category.count(),
  ]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-[8%] py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">
          Yönetim Paneli
        </p>

        <h1 className="mt-3 font-cormorant-garamont text-6xl font-bold text-darknavy">
          Hoş Geldiniz
        </h1>

        <p className="mt-4 text-darknavy/60">
          {session.user.email}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
    <p className="text-sm text-darknavy/50">
      Toplam Marina
    </p>

    <p className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
      {marinaCount}
    </p>

    <h2 className="mt-3 text-xl font-semibold text-darknavy">
      Marinalar
    </h2>
  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
    <p className="text-sm text-darknavy/50">
      Toplam Etkinlik
    </p>

    <p className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
      {eventCount}
    </p>

    <h2 className="mt-3 text-xl font-semibold text-darknavy">
      Etkinlikler
    </h2>
  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
    <p className="text-sm text-darknavy/50">
      Toplam Blog
    </p>

    <p className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
      {blogCount}
    </p>

    <h2 className="mt-3 text-xl font-semibold text-darknavy">
      Bloglar
    </h2>
  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
    <p className="text-sm text-darknavy/50">
      Toplam Kategori
    </p>

    <p className="mt-3 font-cormorant-garamont text-5xl font-bold text-darknavy">
      {categoryCount}
    </p>

    <h2 className="mt-3 text-xl font-semibold text-darknavy">
      Kategoriler
    </h2>
  </div>
</div>
      </div>
    </main>
  );
}