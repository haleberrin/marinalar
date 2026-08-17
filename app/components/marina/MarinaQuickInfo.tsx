import { Marina } from "@/types/marina";
import {
  Anchor,
  BadgeCheck,
  MapPin,
  Ship,
  Star,
  Waves,
} from "lucide-react";




type Props = {
  marina: Marina;
  cityName: string;
  districtName: string;
};


const MarinaQuickInfo = ({
  marina,
  cityName,
  districtName,
}: Props) => {




  const items = [
    {
      icon: Star,
      value: marina.rating ?? "-",
      label: "Rating",
    },

    {
      icon: MapPin,
      value: districtName,
      label: cityName,
    },

    {
      icon: Anchor,
      value: marina.capacity?.seaBerth
        ? marina.capacity.seaBerth
        : "-",
      label: "Bağlama",
    },

    {
      icon: Ship,
      value: marina.capacity?.maxBoatLength
        ? `${marina.capacity.maxBoatLength}m`
        : "-",
      label: "Max Tekne",
    },

    {
      icon: Waves,
      value: marina.capacity?.depth ?? "-",
      label: "Derinlik",
    },
  ];


  return (

<section
className="
relative
z-20
-mt-14
px-[6%]
lg:px-[10%]
"
>


<div
className="
rounded-3xl
bg-white/90
backdrop-blur-xl
border
border-white
shadow-2xl
p-5
lg:p-7
"
>


<div
className="
grid
grid-cols-2
md:grid-cols-3
xl:grid-cols-7
gap-4
"
>


{items.map((item)=>{

const Icon = item.icon;


return (

<div
key={item.label}
className="
group
rounded-2xl
border
border-slate-200
bg-white
p-4
transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
hover:border-primary/40
"
>

<div
className="
flex
items-center
justify-center
w-11
h-11
rounded-xl
bg-primary/10
text-primary
mb-4
group-hover:bg-primary
group-hover:text-white
transition
"
>

<Icon size={22}/>

</div>



<p
className="
text-xs
uppercase
tracking-wider
text-slate-400
"
>
{item.label}
</p>


<p
className="
mt-1
text-xl
font-bold
text-darknavy
"
>
{item.value}
</p>


</div>

)

})}




{marina.blueFlag && (

<div
className="
rounded-2xl
bg-linear-to-br
from-primary
to-cyan-600
p-4
text-white
"
>


<div
className="
w-11
h-11
rounded-xl
bg-white/20
flex
items-center
justify-center
mb-4
"
>

<BadgeCheck size={22}/>

</div>


<p className="
text-xs
uppercase
tracking-wider
text-white/70
">
Sertifika
</p>


<p className="
mt-1
text-xl
font-bold
">
Blue Flag
</p>


</div>

)}


</div>


</div>


</section>

  );
};


export default MarinaQuickInfo;