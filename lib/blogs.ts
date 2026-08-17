import { Blog, ContentBlock } from "@/types/blog";

import rotalarBlog from "@/data/blogs/gocekten-bodruma-ege-yat-rotalari.json"
import etkinliklerBlog from "@/data/blogs/turkiyede-denizcilik-ve-yatcilik-etkinlikleri.json"
import marinaSecimBlog from "@/data/blogs/marina-seciminde-en-sik-yapilan-10-hata.json"
import popularMarinalarBlog from "@/data/blogs/turkiyenin-en-populer-marinalari.json"
import yapayZekaBlog from "@/data/blogs/yapay-zeka-ile-deniz-tatili-planlama.json"



function blog(data: any): Blog {
    return {
      ...data,
      content: data.content as ContentBlock[],
    };
  }

  export const blogs: Blog[] = [
    blog(rotalarBlog),
    blog(etkinliklerBlog),
    blog(marinaSecimBlog),
    blog(popularMarinalarBlog),
    blog(yapayZekaBlog),
  ];