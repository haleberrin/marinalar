"use client";

import { useState } from "react";
import type { WeatherData } from "@/lib/services/weather";
import WeatherCard from "@/app/components/weather/WeatherCard";


type WeatherLocation = {
  id: string;
  name: string;
  regionId: string;
  cityId: string;

  coordinates: {
    lat: number;
    lng: number;
  };

  weather: WeatherData;
};

type WeatherRegion = {
  id: string;
  name: string;
};

type WeatherCity = {
  id: string;
  name: string;
  regionId: string;
};

interface WeatherClientProps {
  locations: WeatherLocation[];
  regions: WeatherRegion[];
  cities: WeatherCity[];
}

export default function WeatherClient({
  locations,
  regions,
  cities,
}: WeatherClientProps) {
  const [activeRegion, setActiveRegion] = useState("all");
  const [activeCity, setActiveCity] = useState("all");

  const [activeLocation, setActiveLocation] = useState(
    locations[0]
  );

  const regionLocations =
  activeRegion === "all"
    ? locations
    : locations.filter(
        (location) =>
          location.regionId === activeRegion
      );

      const availableCities = cities.filter(
        (city) =>
          regionLocations.some(
            (location) =>
              location.cityId === city.id
          )
      );

const filteredLocations =
  activeCity === "all"
    ? regionLocations
    : regionLocations.filter(
        (location) =>
          location.cityId === activeCity
      );

      function handleRegionChange(
        regionId: string
      ) {
        setActiveRegion(regionId);
        setActiveCity("all");
      
        const newLocations =
          regionId === "all"
            ? locations
            : locations.filter(
                (location) =>
                  location.regionId === regionId
              );
      
        if (newLocations.length > 0) {
          setActiveLocation(newLocations[0]);
        }
      }

  return (
    <div>

      {/* BÖLGE FİLTRESİ */}

      <div className="
        mb-10
        flex
        flex-wrap
        gap-3
      ">

        <button
          onClick={() =>
            handleRegionChange("all")
          }
          className={`
            rounded-full
            px-5
            py-2.5
            text-sm
            font-semibold
            transition-all
            duration-300

            ${
              activeRegion === "all"
                ? "bg-primary text-white shadow-lg"
                : "bg-slate-100 text-darknavy hover:bg-slate-200"
            }
          `}
        >
          Tüm Bölgeler
        </button>

        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() =>
              handleRegionChange(region.id)
            }
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                activeRegion === region.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-slate-100 text-darknavy hover:bg-slate-200"
              }
            `}
          >
            {region.name}
          </button>
        ))}

      </div>

     {/* ŞEHİR FİLTRESİ */}

<div className="
  mb-10
  flex
  flex-wrap
  gap-3
">

  <button
    onClick={() => {
      setActiveCity("all");

      if (regionLocations.length > 0) {
        setActiveLocation(
          regionLocations[0]
        );
      }
    }}
    className={`
      rounded-full
      px-5
      py-2.5
      text-sm
      font-semibold
      transition-all
      duration-300

      ${
        activeCity === "all"
          ? "bg-darknavy text-white shadow-lg"
          : "bg-slate-100 text-darknavy hover:bg-slate-200"
      }
    `}
  >
    Tüm Şehirler
  </button>

  {availableCities.map((city) => (
    <button
      key={city.id}
      onClick={() => {
        setActiveCity(city.id);

        const cityLocation =
          regionLocations.find(
            (location) =>
              location.cityId === city.id
          );

        if (cityLocation) {
          setActiveLocation(
            cityLocation
          );
        }
      }}
      className={`
        rounded-full
        px-5
        py-2.5
        text-sm
        font-semibold
        transition-all
        duration-300

        ${
          activeCity === city.id
            ? "bg-darknavy text-white shadow-lg"
            : "bg-slate-100 text-darknavy hover:bg-slate-200"
        }
      `}
    >
      {city.name}
    </button>
  ))}

</div>


      {/* MARİNA SEÇİMİ */}

      <div className="
        mb-10
        flex
        flex-wrap
        gap-3
      ">

        {filteredLocations.map(
          (location) => (
            <button
              key={location.id}
              onClick={() =>
                setActiveLocation(location)
              }
              className={`
                rounded-full
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  activeLocation.id === location.id
                    ? "bg-darknavy text-white shadow-lg"
                    : "bg-slate-100 text-darknavy hover:bg-slate-200"
                }
              `}
            >
              {location.name}
            </button>
          )
        )}

      </div>


      {/* AKTİF KONUM */}

      <div>

        <div className="mb-6">

          <p className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-primary
          ">
            Seçili Marina
          </p>

          <h2 className="
            mt-2
            font-cormorant-garamont
            text-4xl
            font-bold
            text-darknavy
          ">
            {activeLocation.name}
          </h2>

        </div>

        <WeatherCard
          weather={activeLocation.weather}
        />

      </div>

    </div>
  );
}