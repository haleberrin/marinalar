import Image from "next/image";

import { ContentBlock } from "@/types/blog";

interface BlogContentProps {
  content: ContentBlock[];
}

export default function BlogContent({
  content,
}: BlogContentProps) {
  return (
    <div className="space-y-10">

      {content.map((block, index) => {

        switch (block.type) {

          case "heading":
            return (
              <div key={index}>
                {block.level === 2 && (
                  <h2 className="
                    font-cormorant-garamont
                    text-4xl
                    font-bold
                    text-darknavy
                  ">
                    {block.text}
                  </h2>
                )}

                {block.level === 3 && (
                  <h3 className="
                    font-cormorant-garamont
                    text-3xl
                    font-bold
                    text-darknavy
                  ">
                    {block.text}
                  </h3>
                )}

                {block.level === 4 && (
                  <h4 className="
                    font-cormorant-garamont
                    text-2xl
                    font-bold
                    text-darknavy
                  ">
                    {block.text}
                  </h4>
                )}
              </div>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="
                  text-lg
                  leading-9
                  text-darknavy/80
                "
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul
                key={index}
                className="
                  list-disc
                  space-y-3
                  pl-6
                  text-lg
                  leading-8
                  text-darknavy/80
                "
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "image":
            return (
              <div
                key={index}
                className="
                  relative
                  aspect-video
                  overflow-hidden
                  rounded-3xl
                "
              >
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            );

          default:
            return null;
        }

      })}

    </div>
  );
}