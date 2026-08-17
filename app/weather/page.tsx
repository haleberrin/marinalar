import PageHero from "@/app/components/ui/PageHero/PageHero";
import {
  getWeatherByCoordinates,
} from "@/lib/services/weather";
import WeatherClient from "./WeatherClient";
import { getMarinas } from "@/lib/db/marinas";
import { mapPrismaMarinaToMarina } from "@/lib/mappers/marina.mapper";
import { getRegions } from "@/lib/db/regions";
import { getCities } from "@/lib/db/cities";

export default async function WeatherPage() {
  const [
    prismaMarinas,
    prismaRegions,
    prismaCities,
  ] = await Promise.all([
    getMarinas(),
    getRegions(),
    getCities(),
  ]);

  const marinas = prismaMarinas.map((marina) =>
    mapPrismaMarinaToMarina(marina)
  );

  const regions = prismaRegions.map((region) => ({
    id: region.id,
    name: region.name,
  }));
  
  const cities = prismaCities.map((city) => ({
    id: city.id,
    name: city.name,
    regionId: city.regionId,
  }));

  const locations = marinas.map((marina) => ({
    id: marina.id,
    name: marina.name,
    regionId: marina.regionId,
    cityId: marina.cityId,
    coordinates: marina.coordinates,
  }));

  const locationsWithWeather = await Promise.all(
    locations.map(async (location) => ({
      ...location,
      weather: await getWeatherByCoordinates(
        location.coordinates.lat,
        location.coordinates.lng
      ),
    }))
  );

  return (
    <>
      <PageHero
        title="Hava Durumu"
        description="Türkiye'nin marina bölgelerindeki güncel hava ve rüzgar koşullarını takip edin."
        image="/images/services/hava_durumu.jpg"
      />

      <section className="px-[8%] py-24 lg:px-[12%]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-primary
            ">
              Denizcilik Hava Durumu
            </p>

            <h2 className="
              mt-3
              font-cormorant-garamont
              text-5xl
              font-bold
              text-darknavy
            ">
              Türkiye Marinalarında Güncel Hava Durumu
            </h2>

            <p className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-darknavy/70
            ">
              Türkiye&apos;deki marinaların bulunduğu bölgelerdeki güncel
              hava, rüzgar ve nem koşullarını takip edin.
            </p>
          </div>

          <WeatherClient
            locations={locationsWithWeather}
            regions={regions}
            cities={cities}
          />
        </div>
      </section>
    </>
  );
}