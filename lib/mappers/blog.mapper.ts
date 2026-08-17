import type {
    Blog,
    ContentBlock,
  } from "@/types/blog";
  
  import type { Prisma } from "@prisma/client";
  
  type PrismaBlog = Prisma.BlogGetPayload<{
    include: {
      relatedMarinas: true;
    };
  }>;
  
  function isContentBlock(
    value: unknown
  ): value is ContentBlock {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return false;
    }
  
    const block = value as Record<string, unknown>;
  
    if (block.type === "heading") {
      return (
        (block.level === 2 ||
          block.level === 3 ||
          block.level === 4) &&
        typeof block.text === "string"
      );
    }
  
    if (block.type === "paragraph") {
      return typeof block.text === "string";
    }
  
    if (block.type === "list") {
      return (
        Array.isArray(block.items) &&
        block.items.every(
          (item) => typeof item === "string"
        )
      );
    }
  
    if (block.type === "image") {
      return (
        typeof block.src === "string" &&
        typeof block.alt === "string"
      );
    }
  
    return false;
  }
  
  export function mapPrismaBlogToBlog(
    blog: PrismaBlog
  ): Blog {
    return {
      id: blog.id,
      slug: blog.slug,
  
      category: blog.category,
  
      title: blog.title,
      excerpt: blog.excerpt,
  
      metaTitle: blog.metaTitle,
      metaDescription: blog.metaDescription,
  
      featuredImage: blog.featuredImage,
      author: blog.author,
  
      publishedAt: blog.publishedAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
  
      readingTime: blog.readingTime,
  
      tags: Array.isArray(blog.tags)
        ? blog.tags.filter(
            (item): item is string =>
              typeof item === "string"
          )
        : [],
  
      relatedMarinas: blog.relatedMarinas.map(
        (item) => item.marinaId
      ),
  
      content: Array.isArray(blog.content)
      ? (blog.content as unknown[]).filter(isContentBlock)
      : [],
    };
  }