

export interface Event {
  id: string;
  slug: string;

  title: string;
  description: string[];

  type: EventType;

  location: {
    marinaId?:string;
    regionId: string;
    cityId: string;
    districtId: string;
    name?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  }

  featuredImage: string;
  gallery?: string[];

  startDate: string;
  endDate?: string;

  website?: string;

  tags: EventTag[];

  featured?: boolean;

}

export type EventTag =
  | "sailing"
  | "race"
  | "regatta"
  | "festival"
  | "luxury"
  | "music"
  | "food"
  | "charter"
  | "family"
  | "nightlife";

export type EventType =
  | "regatta"
  | "festival"
  | "charter_event"
  | "marina_event"
  | "city_event";

  