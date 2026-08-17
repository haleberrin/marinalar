import { FAQItem } from "./faq";

export interface Region {
    id: string;
    slug: string;
  
    name: string;
  
    description?: string;
  
    coverImage: string;

    faq: FAQItem[];
  }