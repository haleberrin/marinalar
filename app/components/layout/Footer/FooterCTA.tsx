import Link from "next/link";
import { Icon } from "@iconify/react";

export default function FooterCTA() {
  return (
    <section className="px-[8%] lg:px-[12%] pt-24">

      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-10
          py-20
        "
      >

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

            <Icon
              icon="mdi:star-four-points"
              width={18}
            />

            Yapay Zeka Destekli Marina Planlama

          </span>

          <h2 className="mt-8 font-cormorant-garamont text-5xl font-bold leading-tight lg:text-7xl">

            Türkiye'nin

            <span className="block text-primary">
              En Akıllı Marina Planlayıcısı
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">

            Yapay zeka destekli rota planlayıcı ile
            marinaları, koyları, hava durumunu ve
            deniz trafiğini analiz ederek
            size özel tatil rotanızı oluşturun.

          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <Link
              href="/ai-planner"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-primary
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              AI Rota Oluştur

              <Icon
                icon="mdi:arrow-right"
                width={22}
              />

            </Link>

            <Link
              href="/marinas"
              className="
                rounded-full
                border
                border-white/20
                px-8
                py-4
                font-semibold
                transition
                hover:bg-white/10
              "
            >
              Marinaları Keşfet
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}