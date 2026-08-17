import {
  Compass,
  Waves,
  Landmark,
} from "lucide-react";

import { Marina } from "@/types/marina";


type MarinaNearbyProps = {
  marina: Marina;
};


const MarinaNearby = ({
  marina,
}: MarinaNearbyProps) => {


  const hasContent =
    marina.nearbyBays?.length ||
    marina.nearbyAttractions?.length;


  if (!hasContent) {
    return null;
  }



  return (

    <section
      className="
      rounded-3xl
      bg-linear-to-br
      from-darknavy/90
      to-blue-900
      p-6
      shadow-xl
      border
      border-white/10
      text-white
      "
    >


      <div
        className="
        flex
        items-center
        justify-between
        mb-6
        "
      >

        <h3
          className="
          text-xs
          uppercase
          tracking-[0.25em]
          font-cormorant-garamont
          text-white/70
          "
        >
          Çevrede Keşfet
        </h3>


        <Compass
          size={22}
          className="text-white/70"
        />

      </div>



      <div className="space-y-6">


        {
          marina.nearbyBays &&
          marina.nearbyBays.length > 0 && (

          <div>


            <div
              className="
              flex
              items-center
              gap-2
              mb-3
              "
            >

              <Waves size={18}/>

              <p className="font-semibold">
                Yakındaki Koylar
              </p>

            </div>



            <div
              className="
              flex
              flex-wrap
              gap-2
              "
            >

              {
                marina.nearbyBays.map((bay)=>(
                  
                  <span
                    key={bay}
                    className="
                    rounded-full
                    bg-white/10
                    px-3
                    py-2
                    text-xs
                    "
                  >
                    {bay}
                  </span>

                ))
              }

            </div>


          </div>

        )}



        {
          marina.nearbyAttractions &&
          marina.nearbyAttractions.length > 0 && (

          <div>


            <div
              className="
              flex
              items-center
              gap-2
              mb-3
              "
            >

              <Landmark size={18}/>


              <p className="font-semibold">
                Gezilecek Yerler
              </p>

            </div>



            <div className="space-y-2">

              {
                marina.nearbyAttractions.map((place)=>(

                  <div
                    key={place}
                    className="
                    rounded-xl
                    bg-white/10
                    px-3
                    py-2
                    text-sm
                    "
                  >

                    {place}

                  </div>

                ))
              }

            </div>


          </div>

        )}



      </div>


    </section>

  );

};


export default MarinaNearby;