import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  icon: string;
  marinaCount: number;
}

export default function CategoryHero({
  title,
  subtitle,
  image,
  icon,
  marinaCount,
}: Props) {
  return (
    <section className="relative h-[70vh] overflow-hidden flex items-center">

      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-darknavy/70" />

      <div className="absolute inset-0 bg-linear-to-t from-darknavy via-darknavy/40 to-transparent" />

      <div className="relative z-20 px-[8%] lg:px-[12%] w-full">

        <div className="mb-6 flex items-center gap-2 text-white/70 text-sm">

          <Link href="/">
            Ana Sayfa
          </Link>

          <span>/</span>

          <Link href="/marinas">
            Marinalar
          </Link>

          <span>/</span>

          <span className="text-primary">
            {title}
          </span>

        </div>

        <div className="flex items-center gap-5 mb-6">

          <div className="w-18 h-18 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">

            <Icon
              icon={icon}
              width={38}
              className="text-primary"
            />

          </div>

          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-primary text-darknavy font-semibold text-sm mb-4">
              {marinaCount} Marina
            </span>

            <h1 className="text-6xl md:text-7xl font-bold text-white font-cormorant-garamont leading-none">
              {title}
            </h1>

          </div>

        </div>

        <p className="max-w-3xl text-xl leading-9 text-white/80">
          {subtitle}
        </p>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">

        <Icon
          icon="mdi:chevron-down"
          width={40}
        />

      </div>

    </section>
  );
}