import { Marina } from "@/types/marina";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { MapPin, Star} from "lucide-react"
import Link from "next/link";

interface RegionMarinaCardProps {
    marina: Marina;
    cityName: string; 
  }


const RegionMarinaCard = ({marina, cityName}:RegionMarinaCardProps) => {

  return (
    <Link href={`/marinas/${marina.slug}`} className="
    group
    flex
    flex-col
    overflow-hidden
    rounded-[32px]
    bg-white
    border
    border-slate-200
    shadow-lg
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-2xl
    cursor-pointer
    ">
      <div className="relative h-64 overflow-hidden">
        

        <Image
            src={marina.media.coverImage}
            alt={marina.name}
            width={800}
            height={500}
            className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
            "
        />
        <div
  className="
    absolute
    inset-0
    bg-black/0
    transition-all
    duration-500
    group-hover:bg-black/10
  "
/>

        <div
            className="
            absolute
            top-5
            right-5
            flex
            items-center
            gap-2
            rounded-full
            bg-white/80
            backdrop-blur-xl
            border 
            border-white/40
            px-4
            py-2
            shadow-lg
            "
        >
            <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-sm font-semibold">
                {marina.rating}
            </span>

        </div>

      </div>
      <div className="flex flex-1 flex-col p-7">

{/* Şehir */}
<div className="flex items-center gap-2 text-sm text-darknavy/60">
  <MapPin size={15} />
  <span className="uppercase tracking-[0.2em] text-xs text-slate-500">{cityName}</span>
</div>

{/* Marina Adı */}
<h2
  className="
    mt-4
    text-[30px]
    font-cormorant-garamont
    leading-tight
    text-darknavy
    transition-colors
    duration-300
    group-hover:text-primary
  "
>
  {marina.name}
</h2>

{/* Açıklama */}
<p
  className="
    mt-4
    line-clamp-2
    text-darknavy/70
    leading-7
  "
>
  {marina.summary}
</p>

{/* Özellikler */}
<div className="mt-6 mb-6 flex flex-wrap gap-2">

  {marina.amenities.slice(0, 3).map((amenity, i) => (

    <span
      key={i}
      className="
        rounded-full
        bg-slate-100/80
        backdrop-blur-xl
        px-4
        py-2
        text-sm
        text-darknavy
        transition-all
        duration-300
        group-hover:bg-primary-100
        group-hover:text-primary-500
        
      "
    >
      {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
    </span>

  ))}

</div>

{/* Alt CTA */}
<div
  className="
    mt-auto
    flex
    items-center
    justify-between
    border-t
    border-slate-200
    pt-6
"
>
  <span
    className="
      text-sm
      font-semibold
      uppercase
      tracking-[0.18em]
      text-darknavy
      transition-colors
      duration-300
      group-hover:text-primary
    "
  >
    Marinayı İncele
  </span>

  <div
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      
      transition-all
      duration-300
      group-hover:bg-primary-100
      group-hover:text-primary-500
      
      group-hover:scale-110
    "
  >
    <Icon
      icon="guidance:up-right-arrow"
      width={18}
      className="
        text-primary
        transition-all
        duration-300
        group-hover:text-primary-500
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
        group-hover:rotate-6
      "
    />
  </div>
</div>

</div>
        
    </Link>
  )
}

export default RegionMarinaCard


