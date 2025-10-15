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
    <div className="grid grid-cols-7 gap-2">
      {weeklyData.map((value, index) => {
        return (
          <Link href={`/day/${value.time}`} key={index}>
            <div className="flex flex-col items-center justify-center text-center space-y-2 py-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <span
                className={`text-xs ${
                  index === 0 ? 'font-medium' : 'opacity-70'
                }`}>
                {formatDay(value.time)}
              </span>

              <span className="text-sm font-light">
                {Math.round(value.maxTemp)}°
              </span>

              <span className="text-xs opacity-70">
                {Math.round(value.minTemp)}°
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
