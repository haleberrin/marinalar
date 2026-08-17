import { MarinaAmenity, MarinaFeature } from "@/types/marina"
import { Icon } from "@iconify/react"

export const marinaAmenities: Record<
  MarinaFeature,
  {
    label: string;
    icon: string;
    color?:string
  }
> = {
  fuel: {
    label: "Yakıt",
    icon: "mdi:fuel",
  },

  water: {
    label: "Su",
    icon: "mdi:water",
  },

  electricity: {
    label: "Elektrik",
    icon: "mdi:flash",
  },

  wifi: {
    label: "WiFi",
    icon: "mdi:wifi",
  },
  
  restaurant: {
    label: "Restoran",
    icon: "mdi:silverware-fork-knife",
  },
  
  supermarket: {
    label: "Market",
    icon: "mdi:cart",
  },
  
  laundry: {
    label: "Çamaşırhane",
    icon: "mdi:washing-machine",
  },
  
  shower: {
    label: "Duş",
    icon: "mdi:shower",
  },
  
  security: {
    label: "Güvenlik",
    icon: "mdi:shield-check",
  },
  
  repair: {
    label: "Tamir",
    icon: "mdi:wrench",
  },
  
  parking: {
    label: "Otopark",
    icon: "mdi:car-parking-lights",
  },
  
  atm: {
    label: "ATM",
    icon: "mdi:cash",
  },
  
  crane: {
    label: "Vinç",
    icon: "mdi:crane",
  },
  
  diving_service: {
    label: "Dalış Hizmeti",
    icon: "mdi:diving-scuba-tank",
  },
  
  fire_service: {
    label: "Acil Yangın Müdahalesi",
    icon: "mdi:fire-truck",
  },
  
  waste_collection: {
    label: "Atık Toplama",
    icon: "mdi:trash-can",
  },
  
  mooring: {
    label: "Palamar Hizmeti",
    icon: "mdi:anchor",
  },
  
  mobile_crane: {
    label: "Mobil Vinç",
    icon: "mdi:truck-fast",
  },
  
  haul_out: {
    label: "Çekek Hizmeti",
    icon: "mdi:boat",
  },

  wc: {
    label: "WC",
    icon: "mdi:toilet",
  },
  
  storage: {
    label: "Depolama",
    icon: "mdi:warehouse",
  },

  recycling: {
    label: "Geri Dönüşüm",
    icon: "mdi:recycle",
  },
  
  transit_log: {
    label: "Transit Log",
    icon: "mdi:file-document-outline",
  },
  
  boat_rental: {
    label: "Tekne Kiralama",
    icon: "mdi:sail-boat",
  },
  
  car_rental: {
    label: "Araç Kiralama",
    icon: "mdi:car",
  },
  
  fire_suppression: {
    label: "Yangın Söndürme",
    icon: "mdi:fire-extinguisher",
  },
  
  blue_card: {
    label: "Mavi Kart",
    icon: "mdi:card-account-details",
  },

  first_aid: {
    label: "İlk Yardım",
    icon: "mdi:medical-bag",
  },
  
  dishwashing: {
    label: "Bulaşık Yıkama",
    icon: "mdi:dishwasher",
  },
  
  hotel: {
    label: "Otel",
    icon: "mdi:hotel",
  },
  
  bar: {
    label: "Bar",
    icon: "mdi:glass-cocktail",
  },
  
  entertainment: {
    label: "Eğlence",
    icon: "mdi:party-popper",
  },
  
  pool: {
    label: "Havuz",
    icon: "mdi:pool",
  },
  
};

