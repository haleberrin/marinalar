"use client";

import { useMemo, useState } from "react";
import type { GlossaryGroup } from "@/types/glossary";
import Link from "next/link";

interface GlossaryClientProps {
  groups: GlossaryGroup[];
}

export default function GlossaryClient({
  groups,
}: GlossaryClientProps) {
  const [activeLetter, setActiveLetter] = useState("all");
  const [search, setSearch] = useState("");

  const allLetters = groups.map((group) => group.letter);

  const filteredGroups = useMemo(() => {
    return groups
      .filter(
        (group) =>
          activeLetter === "all" ||
          group.letter === activeLetter
      )
      .map((group) => ({
        ...group,
        terms: group.terms.filter((term) => {
          const query = search.toLowerCase();

          return (
            term.term.toLowerCase().includes(query) ||
            term.definition.toLowerCase().includes(query)
          );
        }),
      }))
      .filter((group) => group.terms.length > 0);
  }, [groups, activeLetter, search]);

  return (
    <div>

      {/* BAŞLIK */}

      <div className="mb-12">
        <p className="
          text-sm
          uppercase
          tracking-[0.3em]
          text-primary
        ">
          Denizcilik Bilgi Merkezi
        </p>

        <h2 className="
          mt-3
          font-cormorant-garamont
          text-5xl
          font-bold
          text-darknavy
        ">
          Denizcilik Terimleri
        </h2>

        <p className="
          mt-4
          max-w-2xl
          text-lg
          leading-8
          text-darknavy/70
        ">
          Denizcilik ve yatçılık dünyasında kullanılan terimlerin
          anlamlarını keşfedin.
        </p>
      </div>


      {/* ARAMA */}

      <div className="mb-8">
        <input
          type="text"
          placeholder="Terim veya açıklama ara..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-4
            text-darknavy
            outline-none
            transition
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
          "
        />
      </div>


      {/* HARF FİLTRESİ */}

      <div className="
        mb-14
        flex
        flex-wrap
        gap-3
      ">

        <button
          onClick={() => setActiveLetter("all")}
          className={`
            rounded-full
            px-5
            py-2.5
            text-sm
            font-semibold
            transition

            ${
              activeLetter === "all"
                ? "bg-primary text-white"
                : "bg-slate-100 text-darknavy hover:bg-slate-200"
            }
          `}
        >
          Tümü
        </button>

        {allLetters.map((letter) => (
          <button
            key={letter}
            onClick={() =>
              setActiveLetter(letter)
            }
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              transition

              ${
                activeLetter === letter
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-darknavy hover:bg-slate-200"
              }
            `}
          >
            {letter}
          </button>
        ))}

      </div>


      {/* TERİMLER */}

      <div className="space-y-16">

        {filteredGroups.map((group) => (
          <section key={group.id}>

            <div className="
              mb-6
              flex
              items-center
              gap-4
            ">

              <div className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-darknavy
                font-cormorant-garamont
                text-3xl
                font-bold
                text-white
              ">
                {group.letter}
              </div>

              <div className="
                h-px
                flex-1
                bg-slate-200
              " />

            </div>


            <div className="
              grid
              gap-4
              md:grid-cols-2
            ">

{group.terms.map((term) => (
  <Link
    key={term.id}
    href={`/glossary/${term.slug}`}
    className="
      group
      block
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

    <div className="
      flex
      items-start
      justify-between
      gap-4
    ">

      <h3 className="
        text-xl
        font-bold
        text-darknavy
        transition-colors
        duration-300
        group-hover:text-primary
      ">
        {term.term}
      </h3>

      <span className="
        text-xl
        text-slate-300
        transition-all
        duration-300
        group-hover:translate-x-1
        group-hover:text-primary
      ">
        →
      </span>

    </div>

    <p className="
      mt-3
      leading-7
      text-darknavy/70
    ">
      {term.definition}
    </p>

    <p className="
      mt-5
      text-sm
      font-semibold
      text-primary
      opacity-0
      transition-opacity
      duration-300
      group-hover:opacity-100
    ">
      Terimi keşfet →
    </p>

  </Link>
))}

            </div>

          </section>
        ))}

      </div>


      {/* SONUÇ YOKSA */}

      {filteredGroups.length === 0 && (
        <div className="
          rounded-3xl
          bg-slate-100
          p-12
          text-center
        ">
          <p className="
            text-lg
            font-semibold
            text-darknavy
          ">
            Aradığınız terim bulunamadı.
          </p>
        </div>
      )}

    </div>
  );
}