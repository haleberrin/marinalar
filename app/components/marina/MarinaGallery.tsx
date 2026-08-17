
"use client";

import Image from "next/image";
import { Marina } from "@/types/marina";
import { useEffect, useRef, useState } from "react";
import MarinaGalleryThumb from "../ui/gallery/MarinaGalleryThumb";
import MarinaGalleryThumbList from "../ui/gallery/MarinaGalleryThumbList";

type MarinaGalleryProps = {
    marina: Marina;
  };
  
  
  const MarinaGallery = ({ marina }: MarinaGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const startX = useRef<number | null>(null);

  const gallery = marina.media.gallery ?? [];
  if (!gallery.length) return null;


  const close = () => setOpen(false);

  const next = () => {

    setIsChanging(true);
  
    setTimeout(()=>{
  
      setActiveIndex((p)=>
        p === gallery.length - 1
        ? 0
        : p + 1
      );
  
      setIsChanging(false);
  
    },200);
  
  };

  const prev = () => {

    setIsChanging(true);
   
    setTimeout(()=>{
   
    setActiveIndex((p)=>
      p === 0
      ? gallery.length - 1
      : p - 1
    );
   
    setIsChanging(false);
   
    },200);
   
   };

  // ESC + arrows
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  // scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-5 rounded-2xl overflow-hidden h-105 w-full">

      

        {/* BIG IMAGE */}
        <div
  className="
  col-span-2 
  row-span-2 
  relative 
  cursor-pointer
  group
  overflow-hidden
  rounded-xl
  "
  onClick={() => {
    setActiveIndex(0);
    setOpen(true);
  }}
>

  <Image
    src={gallery[0]}
    alt={`${marina.name} marina fotoğrafı`}
    fill
    className="
    object-cover
    transition-transform
    duration-700
    group-hover:scale-110
    "
    sizes="
(max-width:768px) 100vw,
50vw
"
  />


  {/* overlay */}

  <div
  className="
  absolute
  inset-0
  z-20
  bg-black/0
  group-hover:bg-black/40
  transition
  duration-500
  flex
  items-end
  justify-start
  p-6
  "
>

<div
className="
absolute
bottom-6
left-6
z-30
opacity-0
translate-y-5
group-hover:opacity-100
group-hover:translate-y-0
transition-all
duration-500
"
>

      <p className="
      text-white
      text-2xl
      font-cormorant-garamont
      font-bold
      ">
        {marina.name}
      </p>


      <p className="
      text-white/80
      text-sm
      mt-1
      ">
        Fotoğraf galerisini görüntüle
      </p>

    </div>

  </div>


</div>

        {/* SMALL IMAGES */}
        {gallery.slice(1, 5).map((img, i) => {

const isLast = i === 3;
const remainingPhotos = gallery.length - 5;


return (

<MarinaGalleryThumb
  key={i}
  image={img}
  alt={`${marina.name} marina fotoğrafı`}
  remainingPhotos={
    isLast && remainingPhotos > 0
    ? remainingPhotos
    : undefined
  }
  onClick={()=>{
    setActiveIndex(i+1);
    setOpen(true);
  }}
/>

)

})}
      </div>
      {gallery.length > 5 && (
<button
onClick={()=>{
 setActiveIndex(0);
 setOpen(true);
}}
className="
mt-4
rounded-full
border
border-darknavy
px-5
py-2
text-sm
font-semibold
text-darknavy
hover:bg-darknavy
hover:text-white
transition
"
>
+{gallery.length - 5} Fotoğraf Gör
</button>
)}

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-2000 bg-black/80 backdrop-blur-md flex items-center justify-center">

          {/* HEADER */}

<div
className="
absolute
top-0
left-0
w-full
p-6
flex
items-center
justify-between
z-2100
bg-linear-to-b
from-black/70
to-transparent
"
>

<div>

<h3
className="
text-white
font-cormorant-garamont
text-2xl
font-bold
"
>
{marina.name}
</h3>


<p
className="
text-white/60
text-sm
mt-1
"
>
Fotoğraf Galerisi
</p>

</div>



<div
className="
flex
items-center
gap-4
"
>


<div
className="
rounded-full
bg-white/10
px-4
py-2
text-white
backdrop-blur
"
>
{activeIndex + 1} / {gallery.length}
</div>



<button
onClick={close}
className="
w-10
h-10
rounded-full
bg-white/10
text-white
flex
items-center
justify-center
hover:bg-white/20
transition
"
>
✕
</button>


</div>


</div>
      

          {/* PREV */}
          <button
            onClick={prev}
            className="absolute left-5 text-white text-4xl z-2100"
          >
            ‹
          </button>

          {/* IMAGE */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={(e) =>
              (startX.current = e.touches[0].clientX)
            }
            onTouchEnd={(e) => {
              if (startX.current === null) return;

              const diff =
                e.changedTouches[0].clientX - startX.current;

              if (diff > 50) prev();
              if (diff < -50) next();

              startX.current = null;
            }}
          >
           <img
  src={gallery[activeIndex]}
  alt={`${marina.name} marina fotoğrafı`}
  className={`
    max-h-[85vh]
    w-auto
    object-contain
    transition-all
    duration-300

    ${
      isChanging
        ? "opacity-0 scale-95"
        : "opacity-100 scale-100"
    }
  `}
/>
          </div>

          {/* NEXT */}
          <button
            onClick={next}
            className="absolute right-5 text-white text-4xl z-2100"
          >
            ›
          </button>
          <MarinaGalleryThumbList
 images={gallery}
 activeIndex={activeIndex}
 onSelect={(index)=>{
   setActiveIndex(index);
 }}
/>
        </div>
      )}
    </>
  );
}
export default MarinaGallery