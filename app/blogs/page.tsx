import PageHero from "@/app/components/ui/PageHero/PageHero";
import { getBlogs } from "@/lib/db/blogs";
import { mapPrismaBlogToBlog } from "@/lib/mappers/blog.mapper";
import BlogCard from "@/app/components/blogs/BlogCard";

export default async function BlogsPage() {

  const prismaBlogs = await getBlogs();

  const blogs = prismaBlogs.map((blog) =>
    mapPrismaBlogToBlog(blog)
  );

  return (
    <>
      <PageHero
        title="Blog"
        description="Marinalar, denizcilik, yat rotaları ve Türkiye kıyıları hakkında rehberlerimizi keşfedin."
        image="/images/events/events-hero.jpg"
      />

      <section className="px-[8%] py-24 lg:px-[12%]">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Marina Guide
            </p>

            <h2 className="
              mt-3
              font-cormorant-garamont
              text-5xl
              font-bold
              text-darknavy
            ">
              Denizcilik Dünyasından Yazılar
            </h2>

            <p className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-darknavy/70
            ">
              Marina yaşamı, yat rotaları, denizcilik ve Türkiye'nin
              eşsiz kıyıları hakkında rehberler.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}