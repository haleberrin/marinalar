import Link from "next/link";
import { Icon } from "@iconify/react";

const explore = [
  {
    title: "Marinalar",
    href: "/marinas",
  },
  {
    title: "Bölgeler",
    href: "/regions",
  },
  {
    title: "Şehirler",
    href: "/cities",
  },
  {
    title: "Kategoriler",
    href: "/marinas/categories",
  },
  {
    title: "Etkinlikler",
    href: "/events",
  },
];

const planner = [
  {
    title: "AI Planner",
    href: "/ai-planner",
  },
  {
    title: "Hava Durumu",
    href: "/weather",
  },
  {
    title: "Canlı Deniz Trafiği",
    href: "/marine-traffic",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Denizcilik Sözlüğü",
    href: "/glossary",
  },
];

const company = [
  {
    title: "Hakkımızda",
    href: "/about",
  },
  {
    title: "İletişim",
    href: "/contact",
  },
  {
    title: "Gizlilik Politikası",
    href: "/privacy",
  },
  {
    title: "KVKK",
    href: "/kvkk",
  },
  {
    title: "Kullanım Şartları",
    href: "/terms",
  },
];

const socials = [
  {
    icon: "mdi:instagram",
    href: "#",
  },
  {
    icon: "mdi:facebook",
    href: "#",
  },
  {
    icon: "mdi:youtube",
    href: "#",
  },
  {
    icon: "mdi:linkedin",
    href: "#",
  },
];

export default function FooterColumns() {
  return (
    <section className="px-[8%] lg:px-[12%] py-24">

      <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

        {/* LEFT */}

        <div>

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary">

              <Icon
                icon="mdi:ferry"
                width={34}
              />

            </div>

            <div>

              <h3 className="font-cormorant-garamont text-4xl font-bold">
                Türkiye Marina
              </h3>

              <p className="text-white/50">
                Network
              </p>

            </div>

          </div>

          <p className="mt-8 max-w-md leading-8 text-white/65">

            Türkiye'nin tüm marinalarını tek platformda
            keşfedin. Yapay zeka destekli rota planlayıcısı,
            hava durumu, deniz trafiği ve marina rehberi ile
            denizcilik deneyiminizi yeniden keşfedin.

          </p>

          {/* STATS */}

          <div className="mt-10 grid grid-cols-3 gap-5">

            <div>

              <h4 className="text-3xl font-bold text-primary">
                100+
              </h4>

              <p className="mt-1 text-sm text-white/50">
                Marina
              </p>

            </div>

            <div>

              <h4 className="text-3xl font-bold text-primary">
                81
              </h4>

              <p className="mt-1 text-sm text-white/50">
                Şehir
              </p>

            </div>

            <div>

              <h4 className="text-3xl font-bold text-primary">
                AI
              </h4>

              <p className="mt-1 text-sm text-white/50">
                Planner
              </p>

            </div>

          </div>

          {/* SOCIAL */}

          <div className="mt-10 flex gap-4">

            {socials.map((item) => (

              <Link
                key={item.icon}
                href={item.href}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  transition
                  hover:bg-primary
                  hover:scale-110
                  hover:-translate-y-1
                  
                "
              >
                <Icon
                  icon={item.icon}
                  width={22}
                />
              </Link>

            ))}

          </div>

        </div>

        {/* EXPLORE */}

        <div>

          <h4 className="mb-8 text-xl font-semibold">
            Keşfet
          </h4>

          <div className="space-y-5">

            {explore.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="
                
                  text-white/60
                  transition
                  hover:text-primary
                  group flex items-center gap-2
                "
              >
                <Icon
    icon="mdi:chevron-right"
    width={16}
    className="
        opacity-0
        -translate-x-2
        transition-all
        duration-300
        group-hover:opacity-100
        group-hover:translate-x-0
    "
/>

<span>{item.title}</span>
              </Link>

            ))}

          </div>

        </div>

        {/* PLANNER */}

        <div>

          <h4 className="mb-8 text-xl font-semibold">
            Planlama
          </h4>

          <div className="space-y-5">

            {planner.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="
               
                  text-white/60
                  transition
                  hover:text-primary
                  group flex items-center gap-2
                "
              >
                <Icon
    icon="mdi:chevron-right"
    width={16}
    className="
        opacity-0
        -translate-x-2
        transition-all
        duration-300
        group-hover:opacity-100
        group-hover:translate-x-0
    "
/>

<span>{item.title}</span>
              </Link>

            ))}

          </div>

        </div>

        {/* COMPANY */}

        <div>

          <h4 className="mb-8 text-xl font-semibold">
            Kurumsal
          </h4>

          <div className="space-y-5">

            {company.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="
                 
                  text-white/60
                  transition
                  hover:text-primary
                  group flex items-center gap-2
                "
              >
                <Icon
    icon="mdi:chevron-right"
    width={16}
    className="
        opacity-0
        -translate-x-2
        transition-all
        duration-300
        group-hover:opacity-100
        group-hover:translate-x-0
    "
/>

<span>{item.title}</span>
              </Link>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}