// import {
//     Crown,
//     Moon,
//     Sailboat,
//     Users,
//     Heart,
//     Compass,
//     Ship,
//     Trees,
//   } from "lucide-react";
  
//   import { Marina } from "@/types/marina";
  
  
//   type MarinaHighlightsProps = {
//     marina: Marina;
//   };
  
  
//   const tagConfig = {
//     luxury: {
//       label: "Premium & Luxury",
//       description:
//         "Üst segment hizmetler ve lüks marina deneyimi",
//       icon: Crown,
//     },
  
//     nightlife: {
//       label: "Gece Hayatı",
//       description:
//         "Restoranlar, sosyal yaşam ve eğlence seçenekleri",
//       icon: Moon,
//     },
  
//     sailing: {
//       label: "Yelken",
//       description:
//         "Yelken rotaları için ideal başlangıç noktası",
//       icon: Sailboat,
//     },
  
//     family: {
//       label: "Aile Dostu",
//       description:
//         "Aile konaklamaları için uygun imkanlar",
//       icon: Users,
//     },
  
//     couple: {
//       label: "Çiftler İçin",
//       description:
//         "Romantik marina deneyimi",
//       icon: Heart,
//     },
  
//     nature: {
//       label: "Doğa",
//       description:
//         "Doğal koylara ve sakin rotalara yakın",
//       icon: Trees,
//     },
  
//     superyacht: {
//       label: "Mega Yat",
//       description:
//         "Büyük tekneler için uygun altyapı",
//       icon: Ship,
//     },
//   };
  
  
//   const MarinaHighlights = ({
//     marina,
//   }: MarinaHighlightsProps) => {
  
  
//   return (
  
//   <section
//   className="
//   mt-12
//   rounded-3xl
//   bg-linear-to-br
//   from-darknavy
//   to-blue-900
//   p-8
//   text-white
//   shadow-xl
//   "
//   >
  
  
//   <div className="mb-8">
  
  
//   <p
//   className="
//   text-xs
//   uppercase
//   tracking-[0.3em]
//   text-white/50
//   "
//   >
//   Marina Profili
//   </p>
  
  
//   <h2
//   className="
//   text-3xl
//   font-cormorant-garamont
//   font-bold
//   mt-3
//   "
//   >
//   Neden Bu Marina?
//   </h2>
  
  
//   </div>
  
  
  
//   <div
//   className="
//   grid
//   grid-cols-1
//   md:grid-cols-2
//   lg:grid-cols-3
//   gap-5
//   "
//   >
  
  
//   {
//   marina.aiTags.map((tag)=>{
  
//   const config =
//   tagConfig[tag as keyof typeof tagConfig];
  
  
//   if(!config) return null;
  
  
//   const Icon=config.icon;
  
  
//   return (
  
//   <div
//   key={tag}
//   className="
//   rounded-2xl
//   bg-white/10
//   border
//   border-white/10
//   p-5
//   hover:bg-white/20
//   transition
//   "
//   >
  
  
//   <div
//   className="
//   w-12
//   h-12
//   rounded-xl
//   bg-white/10
//   flex
//   items-center
//   justify-center
//   mb-4
//   "
//   >
  
//   <Icon size={24}/>
  
//   </div>
  
  
//   <h3
//   className="
//   font-semibold
//   text-lg
//   "
//   >
//   {config.label}
//   </h3>
  
  
//   <p
//   className="
//   text-sm
//   text-white/70
//   mt-2
//   leading-relaxed
//   "
//   >
//   {config.description}
//   </p>
  
  
//   </div>
  
//   )
  
//   })
  
//   }
  
  
  
//   </div>
  
  
//   </section>
  
//   )
  
//   }
  
  
//   export default MarinaHighlights;

import { Marina } from "@/types/marina";


// import { highlightConfig } from "@/lib/marina-ui";
import MarinaSection from "../../ui/marina/MarinaSection";
import MarinaCard from "../../ui/marina/MarinaCard";
import SectionTitle from "../../ui/marina/SectionTitle";
import MarinaIconCard from "../../ui/marina/MarinaIconCard";

interface Props {
  marina: Marina;
}

import { marinaTagConfig } from "@/lib/marina-ui/marina-config";

interface Props {
  marina: Marina;
}


export default function MarinaHighlights({
  marina,
}:Props){


const tags =
marina.aiTags
.map(
(tag)=>
marinaTagConfig[
tag as keyof typeof marinaTagConfig
]
)
.filter(Boolean);



if(!tags.length)
return null;



return (

<MarinaSection>


<MarinaCard
dark
className="p-8"
>


<p className="
text-xs
uppercase
tracking-[0.3em]
text-white/50
mb-3
">
Marina Profili
</p>


<SectionTitle light>
Neden Bu Marina?
</SectionTitle>



<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
"
>


{
tags.map((item)=>(
<MarinaIconCard
key={item.label}
dark
icon={item.icon}
title={item.label}
subtitle={item.description}
/>
))
}


</div>


</MarinaCard>


</MarinaSection>

)

}