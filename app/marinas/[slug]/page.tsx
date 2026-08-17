import MarinaDetailsCard from "@/app/components/ui/cards/MarinaDetailsCard";
import { getMarinaBySlug } from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";
import { getMarinaWeather } from "@/lib/services/weather";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCityById } from "@/lib/db/cities";
import { getRegionById } from "@/lib/db/regions";
import { getDistrictById } from "@/lib/db/districts";
import { Marina } from "@/types/marina";
import { getEventsByMarina } from "@/lib/db/events";
import { mapPrismaEventToEvent } from "@/lib/mappers/event.mapper";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const marina = await getMarinaBySlug(slug);

  if (!marina) {
    return {
      title: "Marina Bulunamadı",
    };
  }
  
  const uiMarina = mapPrismaMarinaToMarina(marina);
  
  const city = await getCityById(uiMarina.cityId);




  return {

    title:
      `${uiMarina.name} | ${city?.name ?? ""} Marina Rehberi`,


    description:
      `${uiMarina.name}, ${uiMarina.summary} ` +
      `Kapasite, hizmetler, konum ve marina özelliklerini keşfedin.`,


    keywords: [
      uiMarina.name,
      city?.name ?? "",
      "marina",
      "yat limanı",
      "tekne bağlama",
      "tekne konaklama",
      ...uiMarina.tags,
    ],


    openGraph: {

      title:
        `${uiMarina.name} | ${city?.name ?? ""} Marina`,


      description:
        uiMarina.summary,


      type: "website",


      images: [
        {
          url: uiMarina.media.coverImage,
          width: 1200,
          height: 630,
          alt: marina.name,
        },
      ],

    },


    twitter: {

      card: "summary_large_image",

      title:
        `${uiMarina.name} | ${city?.name ?? ""} Marina`,


      description:
        uiMarina.summary,


      images: [
        uiMarina.media.coverImage,
      ],

    },

  };

}

async function MarinaSchema({
  marina,
}: {
  marina: Marina;
}) {
  const [region, district] = await Promise.all([
    getRegionById(marina.regionId),
    getDistrictById(marina.districtId),
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Marina",

    name: marina.name,
    description: marina.summary,

    image: [marina.media.coverImage],

    telephone: marina.contact.phone,
    url: marina.contact.website,

    address: {
      "@type": "PostalAddress",
      addressLocality: district?.name,
      addressRegion: region?.name,
      addressCountry: "TR",
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: marina.rating,
      bestRating: 5,
      ratingCount: 1,
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: marina.coordinates.lat,
      longitude: marina.coordinates.lng,
    },

    sameAs: marina.contact.website
      ? [marina.contact.website]
      : [],

    amenityFeature: marina.amenities.map((item) => ({
      "@type": "LocationFeatureSpecification",
      name: item,
      value: true,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;


  const marina = await getMarinaBySlug(slug);

if (!marina) {
  notFound();
}

const uiMarina = mapPrismaMarinaToMarina(marina);

const [city, district, region] = await Promise.all([
  getCityById(uiMarina.cityId),
  getDistrictById(uiMarina.districtId),
  getRegionById(uiMarina.regionId),
]);

const prismaMarinaEvents = await getEventsByMarina(uiMarina.id);

const marinaEvents = prismaMarinaEvents.map((event) =>
  mapPrismaEventToEvent(event)
);


  const weather = await getMarinaWeather(uiMarina);


  return (
    <>
      <MarinaSchema marina={uiMarina} />
  
      <MarinaDetailsCard
  marina={uiMarina}
  weather={weather}
  events={marinaEvents}
  cityName={city?.name ?? uiMarina.cityId}
  districtName={district?.name ?? uiMarina.districtId}
  regionName={region?.name ?? uiMarina.regionId}
/>
    </>
  );
}