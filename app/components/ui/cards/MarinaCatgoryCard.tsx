import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Props {
  slug: string;
  title: string;
  description?: string;
  subtitle?: string;
  image: string;
  icon?: string;
  rating?: number;
  marinaCount?: number;
  variant?: "category" | "region" | "featured";
}

export default function MarinaCategoryCard({
  slug,
  title,
  description,
  subtitle,
  image,
  icon,
  marinaCount,
  rating,
  variant = "category",
}: Props) {
  return (
    <Link
      href={
        variant === "region"
          ? `/marinas/region/${slug}`
          : variant === "featured"
          ? `/marinas/${slug}`
          : `/marinas/category/${slug}`
      }
      className={`
        relative block overflow-hidden group rounded-2xl
        ${variant === "category" ? "h-105" : ""}
        ${variant === "region" ? "h-80" : ""}
        ${variant === "featured" ? "h-90" : ""}
      `}
    >
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
        className="
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t from-darknavy via-darknavy/40 to-transparent
        "
      />

      {/* HOVER EFFECT */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition" />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 p-6 z-10 text-white w-full">
        
        {/* CATEGORY MODE */}
        {variant === "category" && (
          <>
            {icon && (
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-3">
                <Icon icon={icon} width={24} />
              </div>
            )}

            <h3 className="text-3xl font-bold font-cormorant-garamont">
              {title}
            </h3>

            {description && (
              <p className="text-sm text-white/80 mt-2 max-w-xs">
                {description}
              </p>
            )}

            {marinaCount !== undefined && (
              <div className="mt-3">
                <span className="px-3 py-1 bg-primary rounded-full text-xs">
                  {marinaCount} Marina
                </span>
              </div>
            )}
          </>
        )}

        {/* REGION MODE */}
        {variant === "region" && (
          <>
            <h3 className="text-2xl font-bold font-cormorant-garamont">
              {title}
            </h3>

            {subtitle && (
              <p className="text-white/80 text-sm mt-1">
                {subtitle}
              </p>
            )}
          </>
        )}

        {/* FEATURED MODE */}
        {variant === "featured" && (
          <>
            <h3 className="text-2xl font-bold">{title}</h3>

            {description && (
              <p className="text-sm text-white/80 mt-2">
                {description}
              </p>
            )}

            {marinaCount !== undefined && (
              <span className="inline-block mt-3 px-2 py-1 bg-white/20 rounded text-xs">
                ⭐ {rating}
              </span>
            )}
          </>
        )}
      </div>
    </Link>
  );
}