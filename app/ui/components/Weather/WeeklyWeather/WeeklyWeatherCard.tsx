interface WeeklyWeatherProps {
  weeklyData: Array<{
    time: string;
    minTemp: number;
    maxTemp: number;
  }>;
}
export default function WeeklyWeatherCard({ weeklyData }: WeeklyWeatherProps) {
  const grabTime = (timeString: string) => timeString.slice(-2);

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
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center h-32 w-full">
            <p>{formatDay(value.time)}</p>
            <p>{value.minTemp}</p>
            <p>{value.maxTemp}</p>
          </div>
        );
      })}
    </div>
  );
}
