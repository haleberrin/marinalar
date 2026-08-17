// destination.ts
export interface Destination {
    id: string;
    slug: string;
  
    name: string;
  
    cityId: string;
  
    latitude: number;
    longitude: number;
  
    type:
      | "bay"
      | "island"
      | "beach"
      | "historical";
  
    description: string;
  
    featuredImage: string;
  }