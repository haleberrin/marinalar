"use client";

import { Icon } from "@iconify/react";

export default function FooterBottom() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative border-t border-white/10">

      {/* Blur */}

      <div className="absolute inset-0 bg-white/1.5" />

      <div className="relative px-[8%] lg:px-[12%] py-8">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div>

            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Türkiye Marina Network
            </p>

            <p className="mt-2 text-sm text-white/35">
              Türkiye'nin Yapay Zeka Destekli Marina Rehberi
            </p>

          </div>

          {/* Center */}

          <div className="flex items-center gap-3 text-sm text-white/40">

            <span>Made with</span>

            <Icon
              icon="mdi:heart"
              width={18}
              className="text-primary"
            />

            <span>in Türkiye</span>

          </div>

          {/* Right */}

          <button
            onClick={scrollTop}
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary
              hover:bg-primary
            "
          >
            <Icon
              icon="mdi:arrow-up"
              width={24}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>

        </div>

      </div>

      {/* Decorative line */}

      <div
        className="
          absolute
          left-1/2
          bottom-0
          h-px
          w-48
          -translate-x-1/2
          bg-linear-to-r
          from-transparent
          via-primary
          to-transparent
        "
      />
      

      {/* Ocean Wave */}

<div className="relative h-24 overflow-hidden">

<svg
  className="absolute bottom-0 w-full h-full"
  viewBox="0 0 1440 160"
  preserveAspectRatio="none"
>
  <path
    fill="rgba(255,255,255,.04)"
    d="
    M0,96
    C180,30
    360,150
    540,96
    C720,40
    900,150
    1080,96
    C1260,40
    1360,120
    1440,70
    L1440,160
    L0,160
    Z
    "
  />
</svg>

</div>

    </section>
  );
}