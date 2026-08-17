export interface Blog {
    id: string;
  
    slug: string;

    updatedAt?: string;

    category: string;
  
    title: string;
  
    excerpt: string;
  
    metaTitle: string;
  
    metaDescription: string;
  
    featuredImage: string;
  
    author: string;
  
    publishedAt: string;
  
    readingTime: number;
  
    tags: string[];
  
    relatedMarinas: string[];
  
    content: ContentBlock[];
  }

  export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | ImageBlock;

  export interface HeadingBlock {
    type: "heading";
  
    level: 2 | 3 | 4;
  
    text: string;
  }

  export interface ParagraphBlock {
    type: "paragraph";
  
    text: string;
  }

  export interface ListBlock {
    type: "list";
  
    items: string[];
  }

  export interface ImageBlock {
    type: "image";
  
    src: string;
  
    alt: string;
  }