import { prisma } from "@/lib/prisma";

const blogInclude = {
  relatedMarinas: true,
};

export async function getBlogs() {
  return prisma.blog.findMany({
    include: blogInclude,
    orderBy: {
      publishedAt: "desc",
    },
  });
}

export async function getBlogBySlug(
  slug: string
) {
  return prisma.blog.findUnique({
    where: {
      slug,
    },
    include: blogInclude,
  });
}

export async function getBlogsByCategory(
  category: string
) {
  return prisma.blog.findMany({
    where: {
      category,
    },
    include: blogInclude,
    orderBy: {
      publishedAt: "desc",
    },
  });
}