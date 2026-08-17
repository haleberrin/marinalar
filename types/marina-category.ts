// import { MarinaCategory } from "./marina";

// export interface MarinaCategoryCard {
//     slug: MarinaCategory;
//     title: string;
//     description: string;
//     icon: string;
//     image: string;
//   }
import { MarinaCategory as MarinaCategorySlug } from "./marina";

export interface CategoryFAQ {
  question: string;
  answer: string;
}

export interface MarinaCategory {
  slug: MarinaCategorySlug;

  title: string;

  shortDescription: string;

  description: string;

  heroTitle: string;

  heroSubtitle: string;

  icon: string;

  image: string;

  coverImage: string;

  color: string;

  seo: {
    title: string;
    description: string;
  };

  highlights: string[];

  badge:string;

  faq: CategoryFAQ[];
}