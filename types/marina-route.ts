// route.ts
export interface Route {
    id: string;
  
    slug: string;
  
    title: string;
  
    startMarinaId: string;
  
    endMarinaId: string;
  
    stopIds: string[];
  
    distanceNm: number;
  
    durationDays: number;
  }