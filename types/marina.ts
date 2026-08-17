export interface Marina {
  id: string;
  slug: string;
  rating?: number;
  
  name: string;
  
  cityId: string;
  regionId: string;
  districtId:string;

  coordinates: {
    lat: number;
    lng: number;
  };

  media: {
    logo: string;
    coverImage: string;
    gallery: string[];
    sitePlan?: string;
  };

  contact: MarinaContact;

  capacity: {
    seaBerth: number;
    landBerth: number;
    maxBoatLength: number;
    depth: string;
  }

  description: string[];

  summary: string;

  facilities: MarinaFacility[];

  amenities: MarinaAmenity[];

  tags: string[];

  categories: MarinaCategory[];


  aiTags:MarinaAiTag[];

   relatedEvents?: string[];

   nearbyBays?: string[];

   nearbyAttractions?: string[];

  openingYear?: number;

  blueFlag?: boolean;

  petFriendly?: boolean;

  customsClearance?: boolean;

  charterAvailable?: boolean;

  winterStorageAvailable?: boolean;

  

  nearestAirport?: string;

  airportDistance?: number;

  recommendedFor?: RecommendedFor;

  scores?: MarinaScores;

}

export interface RecommendedFor {
  beginner: boolean;
  family: boolean;
  couples: boolean;
  longStay: boolean;
  superyacht: boolean;
  liveaboard: boolean;
}

export interface MarinaScores {
  luxury: number;
  family: number;
  nightlife: number;
  nature: number;
  sailing: number;
  technical: number;
  naturalBeauty?: number;
  windProtection?: number;
}

export interface MarinaContact {
  phone?: string;

  email?: string;

  website?: string;

  vhfChannel?: string;
}

export type MarinaAmenity =
  | "fuel"
  | "water"
  | "electricity"
  | "wifi"
  | "restaurant"
  | "supermarket"
  | "laundry"
  | "shower"
  | "security"
  | "repair"
  | "parking"
  | "atm"
  | "crane"
  | "diving_service"
  | "fire_service"
  | "mooring"
  | "mobile_crane"
  | "haul_out"
  | "waste_collection"
  | "recycling"
  | "transit_log"
  | "boat_rental"
  | "car_rental"
  | "fire_suppression"
  | "blue_card"
  | "first_aid"
  | "dishwashing"
  | "hotel"
  | "bar"
  | "entertainment"
  | "pool";

export type MarinaFacility =
  | "wc"
  | "storage"
  | "laundry"
  | "parking"
  | "shower";

export type MarinaCategory =
  | "luxury"
  | "family"
  | "city"
  | "mega_yacht"
  | "blue_flag"
  | "eco"
  | "nightlife"
  | "charter"
  | "beginner"

  | "wintering"
  | "technical"
  | "sailing"
  | "diving"
  | "fishing"
  | "blue_voyage"
  | "superyacht"
  | "liveaboard"
  | "nature";

  export type MarinaAiTag =
  | "couple"
  | "family"
  | "luxury"
  | "nature"
  | "quiet"
  | "nightlife"
  | "diving"
  | "sailing";
 
  export type MarinaFeature = MarinaAmenity | MarinaFacility;