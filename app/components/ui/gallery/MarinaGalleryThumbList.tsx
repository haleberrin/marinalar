"use client";

import Image from "next/image";


type MarinaGalleryThumbListProps = {
  images: string[];
  activeIndex: number;
  onSelect: (index:number)=>void;
};


const MarinaGalleryThumbList = ({
  images,
  activeIndex,
  onSelect
}: MarinaGalleryThumbListProps)=>{


return (

<div
className="
absolute
bottom-6
left-1/2
-translate-x-1/2
flex
gap-3
max-w-[90vw]
overflow-x-auto
p-2
rounded-2xl
bg-black/40
backdrop-blur-md
"
>

{
images.map((img,index)=>(

<button
key={img}
onClick={()=>onSelect(index)}
className={`
relative
w-16
h-16
shrink-0
rounded-xl
overflow-hidden
border-2
transition

${
activeIndex === index
?
"border-white scale-110"
:
"border-transparent opacity-60"
}

`}
>

<Image
src={img}
alt=""
fill
className="object-cover"
/>


</button>

))
}


</div>

)

}

export default MarinaGalleryThumbList;