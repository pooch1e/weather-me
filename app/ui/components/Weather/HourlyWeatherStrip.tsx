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
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-6">
          {hourlyData.slice(0, 24).map((hour, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center min-w-16">
              <span className="text-xs text-gray-300 tracking-wide">
                {formatTime(hour.time)}
              </span>
              <span className="text-sm font-light text-white">
                {Math.round(hour.temperature)}°
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
