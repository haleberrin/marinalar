import type { Marina } from "@/types/marina";

export type WeatherData = {
  temperature: number;
  windSpeed: number;
  windDirection: number;
  condition: string;
  weatherCode: number;
  humidity: number;
  updatedAt: string;
};

export async function getWeatherByCoordinates(
  lat: number,
  lng: number
): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m,wind_direction_10m,relative_humidity_2m,weather_code`;

  const res = await fetch(url, {
    next: { revalidate: 1800 },
  });

  if (!res.ok) {
    throw new Error("Weather API request failed");
  }

  const data = await res.json();

  const current = data.current;

  return {
    temperature: current.temperature_2m,
    windSpeed: current.wind_speed_10m,
    windDirection: current.wind_direction_10m,
    humidity: current.relative_humidity_2m,
    weatherCode: current.weather_code,
    condition: mapWeatherCode(current.weather_code),
    updatedAt: current.time,
  };
}

export async function getMarinaWeather(
  marina: Marina
): Promise<WeatherData> {
  return getWeatherByCoordinates(
    marina.coordinates.lat,
    marina.coordinates.lng
  );
}

function mapWeatherCode(code: number): string {
  const map: Record<number, string> = {
    0: "Açık",
    1: "Çoğunlukla Açık",
    2: "Parçalı Bulutlu",
    3: "Kapalı",
    45: "Sis",
    48: "Yoğun Sis",
    51: "Hafif Çiseleme",
    53: "Çiseleme",
    55: "Kuvvetli Çiseleme",
    61: "Yağmur",
    63: "Orta Şiddetli Yağmur",
    65: "Kuvvetli Yağmur",
    71: "Kar",
    80: "Sağanak",
    95: "Fırtına",
  };

  return map[code] ?? "Bilinmiyor";
}