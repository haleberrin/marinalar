import { prisma } from "@/lib/prisma";

const amenities = [
  {
    slug: "fuel",
    title: "Yakıt",
    icon: "mdi:fuel",
  },
  {
    slug: "water",
    title: "Su",
    icon: "mdi:water",
  },
  {
    slug: "electricity",
    title: "Elektrik",
    icon: "mdi:flash",
  },
  {
    slug: "wifi",
    title: "WiFi",
    icon: "mdi:wifi",
  },
  {
    slug: "restaurant",
    title: "Restoran",
    icon: "mdi:silverware-fork-knife",
  },
  {
    slug: "supermarket",
    title: "Market",
    icon: "mdi:cart",
  },
  {
    slug: "laundry",
    title: "Çamaşırhane",
    icon: "mdi:washing-machine",
  },
  {
    slug: "shower",
    title: "Duş",
    icon: "mdi:shower",
  },
  {
    slug: "security",
    title: "Güvenlik",
    icon: "mdi:shield-check",
  },
  {
    slug: "repair",
    title: "Tamir",
    icon: "mdi:wrench",
  },
  {
    slug: "parking",
    title: "Otopark",
    icon: "mdi:car-parking-lights",
  },
  {
    slug: "atm",
    title: "ATM",
    icon: "mdi:cash",
  },
  {
    slug: "crane",
    title: "Vinç",
    icon: "mdi:crane",
  },
  {
    slug: "diving_service",
    title: "Dalış Hizmeti",
    icon: "mdi:diving-scuba-tank",
  },
  {
    slug: "fire_service",
    title: "Acil Yangın Müdahalesi",
    icon: "mdi:fire-truck",
  },
  {
    slug: "waste_collection",
    title: "Atık Toplama",
    icon: "mdi:trash-can",
  },
  {
    slug: "mooring",
    title: "Palamar Hizmeti",
    icon: "mdi:anchor",
  },
  {
    slug: "mobile_crane",
    title: "Mobil Vinç",
    icon: "mdi:truck-fast",
  },
  {
    slug: "haul_out",
    title: "Çekek Hizmeti",
    icon: "mdi:ferry",
  },
  {
    slug: "recycling",
    title: "Geri Dönüşüm",
    icon: "mdi:recycle",
    color: null,
  },
  {
    slug: "transit_log",
    title: "Transit Log",
    icon: "mdi:file-document-outline",
    color: null,
  },
  {
    slug: "boat_rental",
    title: "Tekne Kiralama",
    icon: "mdi:sail-boat",
    color: null,
  },
  {
    slug: "car_rental",
    title: "Araç Kiralama",
    icon: "mdi:car",
    color: null,
  },
  {
    slug: "fire_suppression",
    title: "Yangın Söndürme",
    icon: "mdi:fire-extinguisher",
    color: null,
  },
  {
    slug: "blue_card",
    title: "Mavi Kart",
    icon: "mdi:card-account-details",
    color: null,
  },
];

export async function seedAmenities() {
  console.log("⚓ Amenities");

  for (const amenity of amenities) {
    await prisma.amenity.upsert({
      where: {
        slug: amenity.slug,
      },
      update: {
        title: amenity.title,
        icon: amenity.icon,
      },
      create: amenity,
    });
  }

  console.log(`✅ ${amenities.length} Amenities`);
}