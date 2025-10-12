// !! FIX STRUCUTRE SO ITS CURRENT TIME:
// !! CURRENT ->> HOURLY ->> DAILY

import type { ProcessedWeatherData } from '@/app/lib/weather/weatherTypes';
interface CurrentWeather {
  temperature: number;
  apparentTemperature: number;
  weatherCode: number;
}

interface WeatherDataProps {
  weatherData: ProcessedWeatherData;
}

export default function WeatherCard({ weatherData }: WeatherDataProps) {
  return (
    <div>
      <h2>Weather Data</h2>
      <ul>
        <li>Current Temperature: {weatherData.current.temperature}°C</li>
        <li>
          Apparent Temperature: {weatherData.current.apparentTemperature}°C
        </li>
        <li>Max Temp: {weatherData.daily[0].minTemp}</li>
        <li>Min Temp: {weatherData.daily[0].maxTemp}</li>
      </ul>
    </div>
  );
}
