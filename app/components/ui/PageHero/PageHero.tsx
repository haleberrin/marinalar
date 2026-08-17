import PageHeroBackground from "./PageHeroBackground";
import { PageHeroProps } from "./types";

export default function PageHero({
  title,
  description,
  image,
  badge = "Türkiye Marina Network",
  height = "lg",
}: PageHeroProps) {
  const heightClass = {
    sm: "h-[40vh]",
    md: "h-[52vh]",
    lg: "h-[62vh]",
  };

  return (
    <section className={`relative overflow-hidden ${heightClass[height]}`}>
      <PageHeroBackground image={image} />

      <div className="relative z-20 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-12">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 md:text-sm">
            {badge}
          </p>

          <h1
            className="
              max-w-4xl
              font-cormorant-garamont
              text-6xl
              font-light
              leading-[0.9]
              tracking-[-0.04em]
              text-white
              md:text-7xl
              lg:text-8xl
            "
          >
            {title}
          </h1>

          {description && (
            <p
              className="
                mt-6
                max-w-xl
                font-inter
                text-base
                leading-8
                text-white/75
                md:text-lg
              "
            >
              {description}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}