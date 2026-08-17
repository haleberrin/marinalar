// itinerary.ts
export interface Itinerary {
    id: string;
  
    slug: string;
  
    title: string;
  
    durationDays: number;
  
    marinaIds: string[];
  
    destinationIds: string[];
  }