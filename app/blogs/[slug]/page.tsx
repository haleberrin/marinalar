import Image from "next/image";
import { notFound } from "next/navigation";

import { getBlogBySlug } from "@/lib/db/blogs";
import { mapPrismaBlogToBlog } from "@/lib/mappers/blog.mapper";
import BlogContent from "@/app/components/blogs/BlogContent";
import RelatedMarinas from "@/app/components/blogs/RelatedMarinas";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;

  const prismaBlog = await getBlogBySlug(slug);

  if (!prismaBlog) {
    notFound();
  }
  
  const blog = mapPrismaBlogToBlog(prismaBlog);

  if (!blog) {
    notFound();
  }

  return (
    <main>

      {/* HERO */}

      <section className="px-[8%] pb-20 pt-32 lg:px-[12%]">
        <div className="mx-auto max-w-5xl">

          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-darknavy/60">
            <span className="rounded-full bg-primary px-4 py-2 font-semibold text-white">
              {blog.category}
            </span>

            <span>
              {new Date(blog.publishedAt).toLocaleDateString("tr-TR")}
            </span>

            <span>•</span>

            <span>
              {blog.readingTime} dk okuma
            </span>
          </div>

          <h1 className="
            max-w-4xl
            font-cormorant-garamont
            text-5xl
            font-bold
            leading-tight
            text-darknavy
            md:text-7xl
          ">
            {blog.title}
          </h1>

          <p className="
            mt-8
            max-w-3xl
            text-xl
            leading-8
            text-darknavy/70
          ">
            {blog.excerpt}
          </p>

          <p className="mt-6 text-sm text-darknavy/60">
            Yazar:{" "}
            <span className="font-semibold text-primary">
              {blog.author}
            </span>
          </p>

        </div>
      </section>

      {/* FEATURED IMAGE */}

      <section className="px-[4%] lg:px-[8%]">
        <div className="relative mx-auto aspect-16/8 max-w-7xl overflow-hidden rounded-[32px]">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}

      <section className="px-[8%] py-20 lg:px-[20%]">
        <div className="mx-auto max-w-4xl">

        <BlogContent content={blog.content} />
        <RelatedMarinas
          marinaIds={blog.relatedMarinas}
        />

        </div>
      </section>

    </main>
  );
}