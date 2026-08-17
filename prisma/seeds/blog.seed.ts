import { prisma } from "@/lib/prisma";
import { blogs } from "@/lib/blogs";
import { Prisma } from "@prisma/client";

export async function seedBlogs() {
  console.log("📝 Blogs");

  for (const blog of blogs) {
    console.log(`  → ${blog.title}`);

    await prisma.blog.upsert({
      where: {
        id: blog.id,
      },

      update: {
        slug: blog.slug,
        category: blog.category,

        title: blog.title,
        excerpt: blog.excerpt,

        metaTitle: blog.metaTitle,
        metaDescription: blog.metaDescription,

        featuredImage: blog.featuredImage,
        author: blog.author,

        publishedAt: new Date(blog.publishedAt),

        readingTime: blog.readingTime,

        tags:
          blog.tags as unknown as Prisma.InputJsonValue,

        content:
          blog.content as unknown as Prisma.InputJsonValue,
      },

      create: {
        id: blog.id,
        slug: blog.slug,
        category: blog.category,

        title: blog.title,
        excerpt: blog.excerpt,

        metaTitle: blog.metaTitle,
        metaDescription: blog.metaDescription,

        featuredImage: blog.featuredImage,
        author: blog.author,

        publishedAt: new Date(blog.publishedAt),

        readingTime: blog.readingTime,

        tags:
          blog.tags as unknown as Prisma.InputJsonValue,

        content:
          blog.content as unknown as Prisma.InputJsonValue,
      },
    });

    // Eski marina ilişkilerini temizle
    await prisma.blogMarina.deleteMany({
      where: {
        blogId: blog.id,
      },
    });

    // Güncel marina ilişkilerini oluştur
    if (blog.relatedMarinas.length > 0) {
      await prisma.blogMarina.createMany({
        data: blog.relatedMarinas.map((marinaId) => ({
          blogId: blog.id,
          marinaId,
        })),
      });
    }
  }

  console.log(`✅ ${blogs.length} Blogs`);
}