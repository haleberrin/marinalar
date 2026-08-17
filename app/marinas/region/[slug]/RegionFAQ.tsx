"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

import { FAQItem } from "@/types/faq";

interface Props {
    faq: FAQItem[];
  }

export default function RegionFAQ({
  faq,
}: Props) {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-[#EEF5F9] px-[8%] lg:px-[12%] py-24">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <span className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Sık Sorulan Sorular
          </span>

          <h2 className="mt-6 font-cormorant-garamont text-5xl font-bold text-darknavy">

            Merak Edilenler

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-darknavy/70">

            Bu marina kategorisi hakkında en çok merak edilen sorular ve cevapları.

          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faq.map((item, index) => {

            const active = open === index;

            return (

              <div
                key={item.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >

                <button
                  onClick={() =>
                    setOpen(active ? -1 : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-7
                    text-left
                  "
                >

                  <h3 className="pr-8 text-xl font-semibold text-darknavy">

                    {item.question}

                  </h3>

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      text-white
                      transition-transform
                      duration-300
                      ${active ? "rotate-180" : ""}
                    `}
                  >
                    <Icon
                      icon="mdi:chevron-down"
                      width={24}
                    />
                  </div>

                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ${
                      active
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div className="border-t px-7 py-6">

                      <p className="leading-8 text-darknavy/70">

                        {item.answer}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}