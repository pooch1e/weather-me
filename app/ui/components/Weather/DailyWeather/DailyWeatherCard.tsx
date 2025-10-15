'use client';
import ConditionsCard from '../ConditionsCard';
import Link from 'next/link';
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
    <main className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-4xl space-y-6 text-white font-electrolize font-medium tracking-wide">
        {/* Main container with glassmorphic effect */}
        <div className="bg-gray-900/30 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl border border-gray-800/50 space-y-6">
          {/* Date Header Card */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 flex flex-col text-center border border-gray-800/30">
            <h3 className="text-2xl opacity-80 mb-2">{dayName}</h3>
            <p className="text-lg opacity-60">{formattedDate}</p>

            {/* Temperature Display */}
            <div className="mt-6">
              <div className="flex justify-center gap-8 text-3xl">
                <div>
                  <span className="text-5xl font-thin">
                    {dailyData.maxTemp}°
                  </span>
                  <p className="text-sm opacity-60 mt-2">High</p>
                </div>
                <div className="text-4xl opacity-40 self-center">/</div>
                <div>
                  <span className="text-5xl font-thin">
                    {dailyData.minTemp}°
                  </span>
                  <p className="text-sm opacity-60 mt-2">Low</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conditions Card */}
          {hourlyData.length > 0 && (
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-gray-800/30 overflow-hidden">
              <ConditionsCard conditions={weatherCode} />
            </div>
          )}

          {/* 24-Hour Forecast */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/30">
            <h3 className="text-xl mb-4 opacity-90">24-Hour Forecast</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {hourlyData.map((hour) => {
                const time = hour.time.split('T')[1].slice(0, 5);
                return (
                  <div
                    key={hour.time}
                    className="flex flex-col items-center p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-200 border border-gray-800/30">
                    <span className="text-xs opacity-70 mb-2">{time}</span>
                    <span className="text-lg font-semibold">
                      {hour.temperature}°
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Home Button */}
          <div className="flex justify-center pt-2">
            <Link href="/">
              <button className=" border-2 border-gray-800/50 hover:border-green-400/50 text-white py-4 px-8 rounded-2xl transition-all duration-300 ">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
