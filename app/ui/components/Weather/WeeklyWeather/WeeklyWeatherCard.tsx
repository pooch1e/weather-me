'use client';
import Link from 'next/link';

interface WeeklyWeatherProps {
  weeklyData: Array<{
    time: string;
    minTemp: number;
    maxTemp: number;
  }>;
}
export default function WeeklyWeatherCard({ weeklyData }: WeeklyWeatherProps) {
  const formatDay = (timeString: string) => {
    const date = new Date(timeString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    }

    if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    }

    return date.toLocaleDateString(undefined, { weekday: 'short' });
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-7 gap-3">
        {weeklyData.map((value, index) => {
          return (
            <Link href={`/day/${value.time}`} key={index}>
              <div className="flex flex-col items-center justify-center text-center space-y-3 py-6 px-3 w-auto rounded-2xl bg-gray-800/50 border border-green-400/30 hover:border--2 hover:bg-gray-800 transition-all duration-200 min-h-32">
                <span
                  className={`text-xs tracking-wide ${
                    index === 0 ? 'font-medium text-white' : 'text-gray-300'
                  }`}>
                  {formatDay(value.time)}
                </span>

                <span className="text-sm font-light text-white">
                  {Math.round(value.maxTemp)}°
                </span>

                <span className="text-xs text-gray-300">
                  {Math.round(value.minTemp)}°
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
