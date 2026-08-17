import { Marina } from "@/types/marina";
import { MarinaCategory } from "@/types/marina-category";
import { siteConfig } from "@/lib/site";

interface Props {
  category: MarinaCategory;
  marinas: Marina[];
}

export default function CategorySchema({
  category,
  marinas,
}: Props) {
  const schema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    name: category.title,

    description: category.description,

    url: `${siteConfig.url}/marinas/category/${category.slug}`,

    image: category.coverImage,

    mainEntity: {
      "@type": "ItemList",

      numberOfItems: marinas.length,

      itemListElement: marinas.map((marina, index) => ({
        "@type": "ListItem",

        position: index + 1,

        url: `https://YOURDOMAIN.com/marinas/${marina.slug}`,

        name: marina.name,
      })),
    },
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