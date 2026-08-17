import Image from "next/image";
import { Marina } from "@/types/marina";

import {
  Anchor,
  BadgeCheck,
  MapPin,
  Ship,
  Star,
  Sparkles,
} from "lucide-react";


type MarinaHeroProps = {
  marina: Marina;
  cityName: string;
  districtName: string;
  regionName: string;
};


const MarinaHero = ({
  marina,
  cityName,
  districtName,
  regionName,
}: MarinaHeroProps) => {
  const categories = marina.categories.slice(0,3);
  const aiScore =
  marina.scores
    ? Math.round(
        Object.values(marina.scores).reduce((a, b) => a + b, 0) /
        Object.values(marina.scores).length
      )
    : null;


  return (
    <section className="
      relative
      h-[75vh]
      overflow-hidden
    ">

      {/* Background */}
      <Image
        src={marina.media.coverImage}
        alt={marina.name}
        fill
        priority
        className="
          object-cover
          scale-105
        "
      />


      {/* Dark layers */}
      <div className="
        absolute
        inset-0
        bg-linear-to-t
        from-black
        via-black/50
        to-black/20
      "/>


      <div className="
        absolute
        inset-0
        bg-darknavy/20
      "/>



      {/* Content */}

      <div className="
        absolute
        bottom-0
        left-0
        w-full
        px-[8%]
        lg:px-[12%]
        pb-28
        text-white
      ">


        {/* Badges */}

        <div className="
          flex
          flex-wrap
          gap-3
          mb-6
        ">
            {aiScore && (

<div
className="
absolute
right-[8%]
top-0
hidden
lg:flex
"
>

<div
className="
w-36
rounded-3xl
bg-white/10
backdrop-blur-xl
border
border-white/20
p-5
text-white
shadow-2xl
"
>

<div className="
flex
items-center
gap-2
text-white/70
text-xs
uppercase
tracking-widest
">

<Sparkles size={14}/>

AI Score

</div>


<div className="
mt-4
text-5xl
font-bold
font-cormorant-garamont
"
>
{aiScore}
</div>


<p className="
mt-1
text-sm
text-white/70
">
Marina Analizi
</p>


</div>

</div>

)}


          {categories.map((category)=>(
            <span
              key={category}
              className="
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                px-4
                py-2
                text-sm
                capitalize
              "
            >
              {category.replace("_"," ")}
            </span>
          ))}


          {marina.blueFlag && (

            <span
              className="
              flex
              items-center
              gap-2
              rounded-full
              bg-primary/90
              px-4
              py-2
              text-sm
              "
            >

              <BadgeCheck size={16}/>

              Mavi Bayrak

            </span>

          )}

        </div>




        {/* Title */}

        <h1
          className="
          max-w-4xl
          text-5xl
          lg:text-7xl
          font-cormorant-garamont
          font-bold
          leading-tight
          "
        >
          {marina.name}
        </h1>



        {/* Location */}

        <div
          className="
          mt-5
          flex
          items-center
          gap-2
          text-white/90
          text-lg
          "
        >

          <MapPin size={20}/>

          <span>
            {districtName}, {cityName}
          </span>

          <span>•</span>

          <span className="font-semibold">
            {regionName}
          </span>

        </div>




        {/* Bottom stats */}


        <div
          className="
          mt-8
          flex
          flex-wrap
          gap-4
          "
        >


          {marina.rating && (

          <div
          className="
          flex
          items-center
          gap-2
          rounded-2xl
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          px-5
          py-3
          "
          >

            <Star
              size={20}
              className="fill-yellow-400 text-yellow-400"
            />

            <div>

              <p className="font-bold">
                {marina.rating}
              </p>

              <p className="text-xs text-white/60">
                Puan
              </p>

            </div>

          </div>

          )}



          {marina.capacity?.seaBerth && (

          <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          px-5
          py-3
          "
          >

            <Anchor size={22}/>

            <div>

            <p className="font-bold">
              {marina.capacity.seaBerth}
            </p>

            <p className="text-xs text-white/60">
              Bağlama
            </p>

            </div>

          </div>

          )}




          {marina.capacity?.maxBoatLength && (

          <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          px-5
          py-3
          "
          >

            <Ship size={22}/>

            <div>

            <p className="font-bold">
              {marina.capacity.maxBoatLength}m
            </p>

            <p className="text-xs text-white/60">
              Maks. Tekne
            </p>

            </div>

          </div>

          )}



        </div>


      </div>


    </section>
  );
};


export default MarinaHero;