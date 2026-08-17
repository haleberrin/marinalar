import {
    Crown,
    Users,
    Moon,
    Trees,
    Sailboat,
    Wrench,
    Wind,
  } from "lucide-react";
  
  import { Marina } from "@/types/marina";
  
  
  type MarinaScoresProps = {
    marina: Marina;
  };
  
  
  const scoreConfig = {
    luxury: {
      label: "Lüks Deneyimi",
      icon: Crown,
    },
  
    family: {
      label: "Aile Uygunluğu",
      icon: Users,
    },
  
    nightlife: {
      label: "Gece Hayatı",
      icon: Moon,
    },
  
    nature: {
      label: "Doğal Güzellik",
      icon: Trees,
    },
  
    sailing: {
      label: "Yelken",
      icon: Sailboat,
    },
  
    technical: {
      label: "Teknik Altyapı",
      icon: Wrench,
    },
  
    windProtection: {
      label: "Rüzgar Koruması",
      icon: Wind,
    },
  
  };
  
  
  const MarinaScores = ({
    marina,
  }: MarinaScoresProps) => {
  
  
  if(!marina.scores) return null;
  
  
  const average = Math.round(
   Object.values(marina.scores)
   .reduce((a,b)=>a+b,0)
   /
   Object.values(marina.scores).length
  );
  
  
  
  return (
  
  <section
  className="
  mt-12
  rounded-3xl
  bg-linear-to-br
  from-darknavy/90
  to-blue-900
  p-8
  text-white
  shadow-xl
  "
  >
  
  
  <div
  className="
  flex
  justify-between
  items-center
  mb-10
  "
  >
  
  
  <div>
  
  <p
  className="
  text-xs
  uppercase
  tracking-[0.3em]
  text-white/50
  "
  >
  Marina Intelligence
  </p>
  
  
  <h2
  className="
  text-3xl
  font-cormorant-garamont
  font-bold
  mt-2
  "
  >
  AI Marina Skoru
  </h2>
  
  </div>
  
  
  
  <div
  className="
  w-24
  h-24
  rounded-full
  bg-white/10
  border
  border-white/20
  flex
  items-center
  justify-center
  "
  >
  
  <span className="text-4xl font-bold">
  {average}
  </span>
  
  
  </div>
  
  
  </div>
  
  
  
  <div className="space-y-6">
  
  
  {
  Object.entries(marina.scores)
  .map(([key,value])=>{
  
  
  const config =
  scoreConfig[key as keyof typeof scoreConfig];
  
  
  if(!config) return null;
  
  
  const Icon=config.icon;
  
  
  return (
  
  <div key={key}>
  
  
  <div
  className="
  flex
  justify-between
  items-center
  mb-2
  "
  >
  
  
  <div
  className="
  flex
  items-center
  gap-3
  "
  >
  
  
  <div
  className="
  w-10
  h-10
  rounded-xl
  bg-white/10
  flex
  items-center
  justify-center
  "
  >
  
  <Icon size={20}/>
  
  </div>
  
  
  <span>
  {config.label}
  </span>
  
  
  </div>
  
  
  
  <span className="font-bold">
  {value}
  </span>
  
  
  </div>
  
  
  
  <div
  className="
  h-2
  rounded-full
  bg-white/10
  overflow-hidden
  "
  >
  
  <div
  className="
  h-full
  rounded-full
  bg-linear-to-r
  from-cyan-300
  to-blue-400
  "
  style={{
  width:`${value}%`
  }}
  />
  
  
  </div>
  
  
  </div>
  
  )
  
  })
  }
  
  
  </div>
  
  
  </section>
  
  )
  
  }
  
  
  export default MarinaScores;