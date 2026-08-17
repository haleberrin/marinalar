"use client"

import Image from "next/image";


import type { Blog } from "@/types/blog";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface BlogsProps {
  blogs: Blog[];
}

export default function Blogs({
  blogs,
}: BlogsProps) {
  return (
    <>
      <div className='px-2 lg:px-3 py-30 pb-20 bg-[#EEF5F9]'>
      <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/3 title  pt-8">
                    <span className="rounded-full title-span border border-darknavy text-darknavy px-7 py-2 font-cormorant-garamont! uppercase font-bold">Son Blog Yazılarımız</span>
                </div>
                <div className="w-full lg:w-2/3">
                    <h1 className="font-cormorant-garamont text-darknavy! text-4xl md:text-7xl mb-5 w-full lg:w-[80%]">Marinalar,  <span className="text-primary">Koylar ve Denizcilik</span>Dünyası</h1>
                </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-5 mt-20'>
                <div className="w-full lg:w-1/2">
                {blogs.slice(0, 1).map((blog) => (
  <div key={blog.slug} className="group cursor-pointer">
    <Link href={`/blogs/${blog.slug}`}>
      <div className="blog-image relative rounded-2xl overflow-hidden">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          width={800}
          height={500}
          className="w-full rounded-2xl group-hover:scale-105 transition-all duration-300"
        />

        {blog.tags.length > 0 && (
          <span className="absolute top-5 left-5 bg-primary px-4 py-1 font-semibold rounded-full text-white font-cormorant-garamont">
            {blog.metaTitle}
          </span>
        )}
      </div>

      <div className="blog-info mt-3">
        <p className="font-inter text-darknavy">
          by{" "}
          <span className="text-primary font-semibold">
            {blog.author}
          </span>
        </p>

        <h2 className="text-4xl md:text-5xl font-cormorant-garamont text-darknavy my-5 hover:text-primary transition-all duration-300">
          {blog.title}
        </h2>

        <p className="text-darknavy font-inter">
          {blog.excerpt}
        </p>
      </div>
    </Link>
  </div>
))}
                </div>
                <div className="w-full lg:w-1/2">
                {blogs.slice(1, 4).map((blog) => (
  <div key={blog.slug} className="group cursor-pointer">
    <Link href={`/blogs/${blog.slug}`}>
      <div className="flex flex-col md:flex-row mb-5 gap-4">
        <div className="w-full blog-image relative rounded-2xl overflow-hidden">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            width={300}
            height={200}
            className="w-full rounded-2xl group-hover:scale-110 transition-all duration-300"
          />

          {blog.tags.length > 0 && (
            <span className="absolute top-3 left-2 bg-primary px-4 py-1 font-semibold rounded-full text-white font-cormorant-garamont">
              {blog.metaTitle}
            </span>
          )}
        </div>

        <div className="blog-info mt-3">
          <p className="font-inter text-darknavy">
            by{" "}
            <span className="text-primary font-semibold">
              {blog.author}
            </span>
            {" • "}
            <span>
              {new Date(blog.publishedAt).toLocaleDateString("tr-TR")}
            </span>
          </p>

          <h2 className="text-3xl text-darknavy font-cormorant-garamont my-5 hover:text-primary transition-all duration-300">
            {blog.title}
          </h2>

          <p className="text-darknavy font-inter">
            {blog.excerpt.slice(0, 80)}...
          </p>
        </div>
      </div>
    </Link>
  </div>
))}
                </div>
        
      </div>

      <div className="flex justify-center mt-8">
  <Link
    href="/blogs"
    className="
    inline-flex items-center gap-2
    px-8 py-4
    rounded-full
    bg-primary
    text-white
    font-semibold
    hover:scale-105
    transition-all duration-300
    shadow-lg
    "
    >
   Tüm Blog Yazıları
    {/* <span>→</span> */}
    <Icon icon="guidance:up-right-arrow" width={24} height={24} className='text-white' />
  </Link>
        </div>
      </div>
    </>
  )
}
