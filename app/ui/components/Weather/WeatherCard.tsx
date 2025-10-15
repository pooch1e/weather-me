// !! FIX STRUCUTRE SO ITS CURRENT TIME:
// !! CURRENT ->> HOURLY ->> DAILY

import type { ProcessedWeatherData } from '@/app/lib/weather/weatherTypes';
import ConditionsCard from './CondititionsCard';
import HourlyWeatherStrip from './HourlyWeatherStrip';
import WeeklyWeatherCard from './WeeklyWeather/WeeklyWeatherCard';

interface WeatherDataProps {
  weatherData: ProcessedWeatherData;
  searchQuery: string;
}

export default function WeatherCard({
  weatherData,
  searchQuery,
}: WeatherDataProps) {
  return (
    <div className="w-full space-y-6 text-white font-electrolize tracking-wide">
      {/* location */}
      <div className="bg-gray-900 border border-green-400 rounded-2xl p-6 text-center shadow-lg">
        <h2 className="text-2xl font-light text-green-400 mb-4">
          {searchQuery}
        </h2>
        <div>
          <div className="text-6xl font-thin mb-4 text-white">
            {weatherData.current.temperature}°
          </div>
          <div className="space-y-2 text-sm text-gray-300">
            <div>FEELS LIKE: {weatherData.current.apparentTemperature}°C</div>
            <div className="flex justify-center space-x-4">
              <span>HIGH: {weatherData.daily[0].maxTemp}°C</span>
              <span>•</span>
              <span>LOW: {weatherData.daily[0].minTemp}°C</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <ConditionsCard conditions={weatherData.current.weatherCode} />
        <HourlyWeatherStrip hourlyData={weatherData.hourly} />
      </div>

      <div className="bg-gray-900 border border-green-400 rounded-2xl shadow-lg">
        <WeeklyWeatherCard weeklyData={weatherData.daily} />
      </div>
    </div>
  );
}
