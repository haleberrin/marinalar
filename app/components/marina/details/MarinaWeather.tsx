import { Icon } from "@iconify/react";



import { weatherIcons } from "@/lib/services/weather-icons";
import type { WeatherData } from "@/lib/services/weather";
import MarinaCard from "../../ui/marina/MarinaCard";
import SectionTitle from "../../ui/marina/SectionTitle";


type MarinaWeatherProps = {
  weather?: WeatherData;
};


const MarinaWeather = ({
  weather,
}: MarinaWeatherProps) => {


  if (!weather) return null;


  return (

    <MarinaCard
      dark
      className="p-6"
    >


      <SectionTitle light>
        Hava Durumu
      </SectionTitle>



      <div
        className="
        flex
        justify-between
        items-start
        mt-5
        "
      >


        <div>


          <div
            className="
            flex
            items-end
            gap-2
            "
          >

            <span
              className="
              text-5xl
              font-bold
              "
            >
              {weather.temperature}°
            </span>


            <span
              className="
              text-white/70
              mb-2
              "
            >
              C
            </span>


          </div>



          <p
            className="
            mt-3
            text-sm
            text-white/80
            "
          >
            {weather.condition}
          </p>


        </div>



        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-white/10
          flex
          items-center
          justify-center
          "
        >

          <Icon
            icon={
              weatherIcons[weather.condition]
              ??
              "mdi:weather-partly-cloudy"
            }
            width={38}
          />

        </div>


      </div>



      <div
        className="
        mt-6
        pt-5
        border-t
        border-white/10
        grid
        grid-cols-2
        gap-4
        "
      >


        <div>

          <p className="text-white/50 text-xs">
            Rüzgar
          </p>


          <p className="font-semibold mt-1">
            🌬 {weather.windSpeed} km/h
          </p>


        </div>



        <div>

          <p className="text-white/50 text-xs">
            Durum
          </p>


          <p className="font-semibold mt-1">
            Uygun
          </p>


        </div>


      </div>


    </MarinaCard>

  );

};


export default MarinaWeather;