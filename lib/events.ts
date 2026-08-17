import { Event } from "@/types/event";

import summerData from "@/data/events/summer-yacht-show-2026.json";
import bodrumData from "@/data/events/bodrum-cup-2026.json";
import tybaData from "@/data/events/tyba-yacht-show.json";

export const events: Event[] = [
  summerData as Event,
  bodrumData as Event,
  tybaData as Event,
];