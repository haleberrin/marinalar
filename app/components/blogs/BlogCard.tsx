import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, ArrowUpRight } from "lucide-react";

import { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({
  blog,
}: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-linear-to-t from-darknavy/70 via-transparent to-transparent" />

        <span className="
          absolute
          left-5
          top-5
          rounded-full
          bg-primary
          px-4
          py-1.5
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-white
        ">
          {blog.category}
        </span>
      </div>

      <div className="p-6">

        <div className="
          flex
          flex-wrap
          items-center
          gap-4
          text-xs
          text-darknavy/50
        ">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={14} />
            {new Date(blog.publishedAt).toLocaleDateString("tr-TR")}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {blog.readingTime} dk okuma
          </span>
        </div>

        <h2 className="
          mt-4
          font-cormorant-garamont
          text-3xl
          font-bold
          leading-tight
          text-darknavy
          transition-colors
          duration-300
          group-hover:text-primary
        ">
          {blog.title}
        </h2>

        <p className="
          mt-3
          line-clamp-3
          text-sm
          leading-7
          text-darknavy/70
        ">
          {blog.excerpt}
        </p>

        <div className="
          mt-6
          flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-primary
        ">
          Yazıyı Oku

          <ArrowUpRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>

      </div>
    </Link>
  );
}