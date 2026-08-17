import { Marina } from "@/types/marina";

import type { WeatherData } from "@/lib/services/weather";

import MarinaQuickInfo from "@/components/marina/MarinaQuickInfo";
import MarinaHero from "@/components/marina/MarinaHero";
import MarinaGallery from "@/components/marina/MarinaGallery";
import { Event } from "@/types/event";
import MarinaOverview from "@/components/marina/details/MarinaOverview";
import MarinaHighlights from "@/components/marina/details/MarinaHighlights";
import MarinaScores from "@/components/marina/details/MarinaScores";
import MarinaWeather from "@/components/marina/details/MarinaWeather";
import MarinaContact from "@/components/marina/details/MarinaContact";
import MarinaLocation from "@/components/marina/details/MarinaLocation";
import MarinaAmenities from "@/components/marina/details/MarinaAmenities";
import MarinaCapacity from "@/components/marina/details/MarinaCapacity";
import MarinaFeatures from "@/components/marina/details/MarinaFeatures";
import MarinaRecommendations from "@/components/marina/details/MarinaRecommendations";
import MarinaSummary from "@/components/marina/details/MarinaSummary";
import MarinaNearby from "@/components/marina/details/MarinaNearby";
import MarinaCategories from "@/components/marina/details/MarinaCategories";
import MarinaEvents from "../../marina/details/MarinaEnents";


const MarinaDetailsCard = ({
  marina,
  weather,
  events,
  cityName,
  districtName,
  regionName,
}: {
  marina: Marina;
  weather?: WeatherData;
  events: Event[];
  cityName: string;
  districtName: string;
  regionName: string;
}) => {

  return (
    <section
className="
overflow-hidden
rounded-3xl
bg-white
shadow-2xl
border
border-slate-100
"
>
      {/* Hero */}
      <MarinaHero
  marina={marina}
  cityName={cityName}
  districtName={districtName}
  regionName={regionName}
/>
      {/* Quick Info */}
      <MarinaQuickInfo
  marina={marina}
  cityName={cityName}
  districtName={districtName}
/>
      <div
className="
px-5
md:px-8
lg:px-[8%]
pt-10
lg:pt-16
"
>
        <div className="w-full">
          <MarinaGallery marina={marina} />
        </div>
      </div>


      {/* Overview */}
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{/* LEFT CONTENT */}
<main className="
  md:col-span-2
  p-8
  space-y-12
">

  <MarinaOverview marina={marina}/>

  <MarinaHighlights marina={marina}/>

  <MarinaCapacity marina={marina}/>

  <MarinaCategories marina={marina}/>

  <MarinaAmenities marina={marina}/>

  <MarinaScores marina={marina}/>

  <MarinaFeatures marina={marina}/>

  <MarinaRecommendations marina={marina}/>


</main>


{/* RIGHT SIDEBAR */}
<aside
  className="
  col-span-1
  p-6
  space-y-6
  lg:sticky
  lg:top-24
  h-fit
  "
>

  <MarinaWeather weather={weather}/>

  <MarinaContact marina={marina}/>

  <MarinaLocation marina={marina}/>

  <MarinaNearby marina={marina}/>

  <MarinaSummary marina={marina}/>

  <MarinaEvents events={events} />

</aside>


</div>
    </section>
  );
};

export default MarinaDetailsCard;