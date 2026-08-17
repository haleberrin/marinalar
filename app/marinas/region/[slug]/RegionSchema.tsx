import { Marina } from "@/types/marina";
import { Region } from "@/types/region";

import { siteConfig } from "@/lib/site";

interface Props {
  region: Region;
  marinas: Marina[];
}

export default function RegionSchema({
  region,
  marinas,
}: Props) {

  const schema = {

    "@context":"https://schema.org",

    "@type":"CollectionPage",

    name:region.name,

    description:region.description,

    url:`${siteConfig.url}/marinas/region/${region.slug}`,

    image:region.coverImage,

    mainEntity:{
      "@type":"ItemList",

      numberOfItems:marinas.length,

      itemListElement:marinas.map((marina,index)=>({

        "@type":"ListItem",

        position:index+1,

        url:`${siteConfig.url}/marinas/${marina.slug}`,

        name:marina.name,

      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:JSON.stringify(schema),
      }}
    />
  );
}