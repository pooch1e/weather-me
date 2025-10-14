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
    <div className="w-full max-w-md  mx-auto space-y-4 p-4 text-white font-electrolize font-medium tracking-wide">
      {/* location */}
      <div className="bg-gradient-to-br from-gray-900 to bg-gray-100 rounded-3xl p-6 flex flex-col text-center shadow-lg">
        <h2 className="text-6xl">{searchQuery}</h2>
        <div>
          <div className="text-8xl font-thin mb-2">
            {weatherData.current.temperature}°
          </div>
          <div className="flex justify-between text-sm opacity-80 flex-col">
            <div>Feels Like: {weatherData.current.apparentTemperature}°C</div>
            <span>High: {weatherData.daily[0].maxTemp}°C</span>
            <span>Low: {weatherData.daily[0].minTemp}°C</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <ConditionsCard conditions={weatherData.current.weatherCode} />
        </div>
        <HourlyWeatherStrip hourlyData={weatherData.hourly} />
      </div>

      <div className='border-2 rounded-2xl'>
      
        <WeeklyWeatherCard weeklyData={weatherData.daily}/></div>
    </div>
  );
}
