// "use client"
// import Image from "next/image";
// import { Marina } from "@/types/marina";
// import {useEffect, useState } from "react";


// export function MarinaGallery({ marina }: { marina: Marina }) {
//   const [open, setOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const gallery = marina.media.gallery;

//   useEffect(() => {
//     if (!open) return;
  
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//       }
//     };
  
//     window.addEventListener("keydown", handleKeyDown);
  
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [open]);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
  
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* GRID PREVIEW */}
//       <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-105">
        
//         {/* big image */}
//         <div
//           className="col-span-2 row-span-2 relative cursor-pointer"
//           onClick={() => {
//             setActiveIndex(0);
//             setOpen(true);
//           }}
//         >
//           <Image
//             src={gallery[0]}
//             alt={marina.name}
//             sizes="(max-width: 768px) 100vw, 50vw"
//             fill
//             className="object-covertransition-all duration-500 ease-out
//             hover:scale-105 transition"
//           />
//         </div>

//         {/* small images */}
//         {gallery.slice(1, 5).map((img, i) => (
//           <div
//             key={i}
//             className="relative h-full w-full cursor-pointer"
//             onClick={() => {
//               setActiveIndex(i + 1);
//               setOpen(true);
//             }}
//           >
//             <Image
//               src={img}
//               alt={marina.name}
//               fill
//               className="object-cover transition-all duration-500 ease-out
//               hover:scale-105"
//             />
//           </div>
//         ))}
//       </div>

//       {/* MORE BUTTON */}
//       {gallery.length > 5 && (
//         <button
//           onClick={() => {
//             setActiveIndex(0);
//             setOpen(true);
//           }}
//           className="mt-3 text-sm text-gray-500 hover:text-black"
//         >
//           +{gallery.length - 5} fotoğraf
//         </button>
//       )}

//       {/* FULLSCREEN MODAL */}
//       {open && (
//         <div className="fixed inset-0 z-1000 bg-black/90 flex items-center justify-center">
          
//           {/* close */}
//           <button
//             className="absolute top-5 right-5 text-white text-xl"
//             onClick={() => setOpen(false)}
//           >
//             ✕
//           </button>

//           {/* image */}
//           <Image
//             src={gallery[activeIndex]}
//             alt={marina.name}
//             width={1200}
//             height={800}
//             className="max-h-[80vh] object-contain"
//           />

//           {/* nav */}
//           <button
//             onClick={() =>
//               setActiveIndex((p) => (p === 0 ? gallery.length - 1 : p - 1))
//             }
//             className="absolute left-5 text-white text-3xl"
//           >
//             ‹
//           </button>

//           <button
//             onClick={() =>
//               setActiveIndex((p) => (p === gallery.length - 1 ? 0 : p + 1))
//             }
//             className="absolute right-5 text-white text-3xl"
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import Image from "next/image";
import { Marina } from "@/types/marina";
import { useEffect, useRef, useState } from "react";

export function MarinaGallery({ marina }: { marina: Marina }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const gallery = marina.media.gallery;

  const startX = useRef<number | null>(null);

  const close = () => setOpen(false);

  const next = () => {
    setActiveIndex((p) =>
      p === gallery.length - 1 ? 0 : p + 1
    );
  };

  const prev = () => {
    setActiveIndex((p) =>
      p === 0 ? gallery.length - 1 : p - 1
    );
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
          className="col-span-2 row-span-2 relative cursor-pointer"
          onClick={() => {
            setActiveIndex(0);
            setOpen(true);
          }}
        >
          <Image
            src={gallery[0]}
            alt={marina.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 rounded-xl"
            sizes="50vw"
          />
        </div>

        {/* SMALL IMAGES */}
        {gallery.slice(1, 5).map((img, i) => (
          <div
            key={i}
            className="relative cursor-pointer"
            onClick={() => {
              setActiveIndex(i + 1);
              setOpen(true);
            }}
          >
            <Image
              src={img}
              alt={marina.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700   rounded-xl "
              sizes="25vw"
            />
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-2000 bg-black/80 backdrop-blur-md flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-2100 text-white text-3xl bg-black/40 px-3 py-1 rounded-full"
          >
            ✕
          </button>

          {/* COUNTER */}
          <div className="absolute top-5 left-5 text-white text-sm opacity-70 z-2100">
            {activeIndex + 1} / {gallery.length}
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
            <Image
              src={gallery[activeIndex]}
              alt={marina.name}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto object-contain"
              priority
            />
          </div>

          {/* NEXT */}
          <button
            onClick={next}
            className="absolute right-5 text-white text-4xl z-2100"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}