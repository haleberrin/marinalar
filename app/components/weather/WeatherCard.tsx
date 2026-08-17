import { Icon } from "@iconify/react";

import { weatherIcons } from "@/lib/services/weather-icons";
import type { WeatherData } from "@/lib/services/weather";

interface WeatherCardProps {
  weather: WeatherData;
}

function getWindDirection(degree: number) {
  const directions = [
    "Kuzey",
    "Kuzeydoğu",
    "Doğu",
    "Güneydoğu",
    "Güney",
    "Güneybatı",
    "Batı",
    "Kuzeybatı",
  ];

  const index = Math.round(degree / 45) % 8;

  return directions[index];
}

export default function WeatherCard({
  weather,
}: WeatherCardProps) {
  return (
    <div className="
      rounded-[32px]
      bg-darknavy
      p-8
      text-white
      shadow-xl
    ">

      {/* ÜST BÖLÜM */}

      <div className="
        flex
        flex-col
        justify-between
        gap-8
        md:flex-row
        md:items-center
      ">

        <div>

          <p className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-white/50
          ">
            Güncel Hava Durumu
          </p>

          <div className="
            mt-4
            flex
            items-end
            gap-3
          ">

            <span className="
              text-7xl
              font-bold
            ">
              {weather.temperature}°
            </span>

            <span className="
              mb-3
              text-xl
              text-white/60
            ">
              C
            </span>

          </div>

          <p className="
            mt-3
            text-lg
            text-white/80
          ">
            {weather.condition}
          </p>

        </div>

        <div className="
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-3xl
          bg-white/10
        ">

          <Icon
            icon={
              weatherIcons[weather.condition]
              ?? "mdi:weather-partly-cloudy"
            }
            width={64}
          />

        </div>

      </div>


      {/* DETAYLAR */}

      <div className="
        mt-10
        grid
        gap-6
        border-t
        border-white/10
        pt-6
        sm:grid-cols-3
      ">

        <div>

          <p className="text-sm text-white/50">
            Rüzgar
          </p>

          <p className="mt-2 text-lg font-semibold">
            {weather.windSpeed} km/h
          </p>

        </div>


        <div>

          <p className="text-sm text-white/50">
            Rüzgar Yönü
          </p>

          <p className="mt-1 font-semibold">
            🧭 {getWindDirection(weather.windDirection)}{" "}
            ({weather.windDirection}°)
          </p>

        </div>


        <div>

          <p className="text-sm text-white/50">
            Nem
          </p>

          <p className="mt-2 text-lg font-semibold">
            {weather.humidity}%
          </p>

        </div>

       

      </div>

    </div>
  );
}