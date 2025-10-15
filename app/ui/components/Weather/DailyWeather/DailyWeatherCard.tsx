'use client';
import ConditionsCard from "../CondititionsCard";
interface HourlyData {
  time: string;
  temperature: number;
}

interface DailyData {
  time: string;
  minTemp: number;
  maxTemp: number;
}

interface DailyWeatherProps {
  weatherCode: number;
  hourlyData: HourlyData[];
  dailyData: DailyData;
  date: string;
}
export default function DailyWeatherCard({
  weatherCode,
  hourlyData,
  dailyData,
  date,
}: DailyWeatherProps) {
  //format date and time
  const dateObj = new Date(date);
  const dayName = dateObj.toLocaleDateString('en-GB', { weekday: 'long' });
  const formattedDate = dateObj.toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 p-4 text-white font-electrolize font-medium tracking-wide">
      {/* Header with location and date */}
      <div className="bg-gradient-to-br from-gray-900 to bg-gray-100 rounded-3xl p-6 flex flex-col text-center shadow-lg">
        <h3 className="text-2xl opacity-80 mb-4">{dayName}</h3>
        <p className="text-lg opacity-60">{formattedDate}</p>

        <div className="mt-6">
          <div className="flex justify-center gap-8 text-3xl">
            <div>
              <span className="text-5xl font-thin">{dailyData.maxTemp}°</span>
              <p className="text-sm opacity-60">High</p>
            </div>
            <div className="text-4xl opacity-40 self-center">/</div>
            <div>
              <span className="text-5xl font-thin">{dailyData.minTemp}°</span>
              <p className="text-sm opacity-60">Low</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions card - you might want to get weather code from hourly data */}
      {hourlyData.length > 0 && (
        <ConditionsCard conditions={weatherCode} />
      )}

      {/* Hourly breakdown for the entire day */}
      <div className="bg-gradient-to-br from-gray-900 to bg-gray-100 rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl mb-4">24-Hour Forecast</h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {hourlyData.map((hour) => {
            const time = hour.time.split('T')[1].slice(0, 5); // removes end of string
            return (
              <div
                key={hour.time}
                className="flex flex-col items-center p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                <span className="text-xs opacity-70 mb-2">{time}</span>
                <span className="text-lg font-semibold">
                  {hour.temperature}°
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
