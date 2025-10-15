interface HourlyWeather {
  hourlyData: Array<{
    time: string;
    temperature: number;
  }>;
}
export default function HourlyWeatherStrip({ hourlyData }: HourlyWeather) {
 
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
    <div className="bg-gray-900 border border-green-400 rounded-2xl p-6 shadow-lg">
      <div className="overflow-x-auto">
        <div className="flex space-x-6">
          {hourlyData.slice(0, 24).map((hour, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center min-w-16">
              <span className="text-xs text-gray-300 tracking-wide">{formatTime(hour.time)}</span>
              <span className="text-sm font-light text-white">
                {Math.round(hour.temperature)}°
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
