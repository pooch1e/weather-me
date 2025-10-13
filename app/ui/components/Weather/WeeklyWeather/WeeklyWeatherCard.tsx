import { time } from 'console';

interface WeeklyWeatherProps {
  weeklyData: Array<{
    time: string;
    minTemp: number;
    maxTemp: number;
  }>;
}
export default function WeeklyWeatherCard({ weeklyData }: WeeklyWeatherProps) {
  const grabTime = (timeString: string) => timeString.slice(-2);
  return (
    <div className="grid grid-cols-7 gap-2">
      {weeklyData.map((value, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center h-32 w-full">
            <p>{grabTime(value.time)}</p>
            <p>{value.minTemp}</p>
            <p>{value.maxTemp}</p>
          </div>
        );
      })}
    </div>
  );
}
