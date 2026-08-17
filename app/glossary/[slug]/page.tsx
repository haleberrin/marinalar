import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
} from "lucide-react";

import {
  glossary,
  getGlossaryTermBySlug,
  getGlossaryGroupByTerm,
} from "@/lib/glossary";

interface GlossaryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return glossary.flatMap((group) =>
    group.terms.map((term) => ({
      slug: term.slug,
    }))
  );
}

export default async function GlossaryDetailPage({
  params,
}: GlossaryDetailPageProps) {
  const { slug } = await params;

  const term = getGlossaryTermBySlug(slug);
  const group = getGlossaryGroupByTerm(slug);

  if (!term || !group) {
    notFound();
  }

  const currentIndex = group.terms.findIndex(
    (item) => item.slug === slug
  );

  const previousTerm =
    currentIndex > 0
      ? group.terms[currentIndex - 1]
      : null;

  const nextTerm =
    currentIndex < group.terms.length - 1
      ? group.terms[currentIndex + 1]
      : null;

  const relatedTerms =
    term.relatedTerms
      ?.map((relatedSlug) =>
        getGlossaryTermBySlug(relatedSlug)
      )
      .filter(Boolean) ?? [];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ÜST NAVİGASYON */}

      <section className="
        border-b
        border-slate-200
        bg-darknavy
      ">

        <div className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-[8%]
          py-6
          lg:px-[12%]
          pt-28
        ">

          <Link
            href="/glossary"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-white/60
              transition-colors
              hover:text-primary
            "
          >
            <ArrowLeft size={18} />
            Denizcilik Sözlüğüne Dön
          </Link>

          <span className="
            hidden
            text-sm
            font-semibold
            text-primary
            sm:block
          ">
            {group.letter} Harfi
          </span>

        </div>

      </section>


      {/* HERO */}

      <section className="
        px-[8%]
        py-24
        lg:px-[12%]
      ">

        <div className="
          mx-auto
          max-w-4xl
        ">

          <div className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-darknavy
            font-cormorant-garamont
            text-4xl
            font-bold
            text-white
            shadow-lg
          ">
            {group.letter}
          </div>

          <p className="
            mt-10
            text-sm
            uppercase
            tracking-[0.3em]
            text-primary
          ">
            Denizcilik Terimi
          </p>

          <h1 className="
            mt-4
            font-cormorant-garamont
            text-6xl
            font-bold
            text-darknavy
            md:text-7xl
          ">
            {term.term}
          </h1>

          <div className="
            mt-10
            rounded-3xl
            bg-white
            p-8
            shadow-sm
            md:p-12
          ">

            <div className="
              flex
              items-start
              gap-5
            ">

              <div className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              ">
                <BookOpen size={22} />
              </div>

              <div>

                <p className="
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-darknavy/40
                ">
                  Tanım
                </p>

                <p className="
                  mt-4
                  text-xl
                  leading-9
                  text-darknavy/80
                  md:text-2xl
                ">
                  {term.definition}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* İLGİLİ TERİMLER */}

      {relatedTerms.length > 0 && (
        <section className="
          border-t
          border-slate-200
          bg-white
          px-[8%]
          py-20
          lg:px-[12%]
        ">

          <div className="
            mx-auto
            max-w-4xl
          ">

            <p className="
              text-sm
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
              İlgili Terimler
            </h2>

            <div className="
              mt-8
              grid
              gap-4
              sm:grid-cols-2
            ">

              {relatedTerms.map((relatedTerm) => (
                relatedTerm && (
                  <Link
                    key={relatedTerm.id}
                    href={`/glossary/${relatedTerm.slug}`}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      p-5
                      transition-all
                      hover:-translate-y-1
                      hover:border-primary/30
                      hover:shadow-md
                    "
                  >

                    <h3 className="
                      font-bold
                      text-darknavy
                    ">
                      {relatedTerm.term}
                    </h3>

                    <p className="
                      mt-2
                      line-clamp-2
                      text-sm
                      leading-6
                      text-darknavy/60
                    ">
                      {relatedTerm.definition}
                    </p>

                  </Link>
                )
              ))}

            </div>

          </div>

        </section>
      )}


      {/* ÖNCEKİ / SONRAKİ */}

      <section className="
        px-[8%]
        py-16
        lg:px-[12%]
      ">

        <div className="
          mx-auto
          grid
          max-w-4xl
          gap-4
          sm:grid-cols-2
        ">

          {previousTerm ? (
            <Link
              href={`/glossary/${previousTerm.slug}`}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                hover:border-primary/30
                hover:shadow-lg
              "
            >

              <p className="
                text-sm
                text-darknavy/40
              ">
                Önceki Terim
              </p>

              <div className="
                mt-3
                flex
                items-center
                justify-between
              ">

                <span className="
                  font-bold
                  text-darknavy
                  group-hover:text-primary
                ">
                  {previousTerm.term}
                </span>

                <ArrowLeft
                  size={20}
                  className="
                    text-primary
                    transition-transform
                    group-hover:-translate-x-1
                  "
                />

              </div>

            </Link>
          ) : (
            <div />
          )}


          {nextTerm && (
            <Link
              href={`/glossary/${nextTerm.slug}`}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                text-right
                transition-all
                hover:border-primary/30
                hover:shadow-lg
              "
            >

              <p className="
                text-sm
                text-darknavy/40
              ">
                Sonraki Terim
              </p>

              <div className="
                mt-3
                flex
                items-center
                justify-end
                gap-4
              ">

                <span className="
                  font-bold
                  text-darknavy
                  group-hover:text-primary
                ">
                  {nextTerm.term}
                </span>

                <ArrowRight
                  size={20}
                  className="
                    text-primary
                    transition-transform
                    group-hover:translate-x-1
                  "
                />

              </div>

            </Link>
          )}

        </div>

      </section>

    </main>
  );
}