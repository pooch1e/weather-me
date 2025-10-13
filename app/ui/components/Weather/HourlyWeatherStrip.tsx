interface HourlyWeather {
  hourlyData: Array<{
    time: string;
    temp: number;
  }>;
}
export default function HourlyWeatherStrip({ hourlyData }: HourlyWeather) {
  console.log(hourlyData);
  // format time
  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    const currentTime = new Date();

    if (
      date.getHours() === currentTime.getHours() &&
      date.getDate() === currentTime.getDate()
    ) {
      return 'Now';
    }
    return date.toLocaleTimeString();
  };
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex space-x-6" style={{ width: 'max-content' }}>
        {hourlyData.slice(0, 24).map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 text-center">
            <span className="text-xs opacity-70">{formatTime(hour.time)}</span>
            <span className="text-sm font-light">{Math.round(hour.temp)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}
