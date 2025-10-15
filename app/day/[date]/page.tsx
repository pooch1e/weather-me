import { fetchWeatherData } from '@/app/lib/weather/WeatherService';
import DailyWeatherCard from '@/app/ui/components/Weather/DailyWeather/DailyWeatherCard';
import Link from 'next/link';

export default async function DayPage({
  params,
}: {
  params: { date: string };
}) {
  const { date } = await params;

  try {
    const weatherData = await fetchWeatherData(51.5085, -0.1257); // get cached data

    // filter data for day
    const hourlyData = weatherData.hourly.filter((item) =>
      item.time.startsWith(date)
    );
    //get temp for day
    const dailyData = weatherData.daily.find((item) => item.time === date);

    // Validate daily data as can return undefined
    if (!dailyData || hourlyData.length === 0) {
      return (
        <div className="w-full max-w-4xl mx-auto space-y-4 p-4 text-white font-electrolize font-medium tracking-wide">
          <div className="bg-gradient-to-br from-red-900 to bg-red-800 rounded-3xl p-6 flex flex-col text-center shadow-lg">
            <h3 className="text-2xl mb-4">Date Not Found</h3>
            <p className="text-lg opacity-80">
              Weather data for {date} is not available.
            </p>
            <p className="text-sm opacity-60 mt-2">
              Please select a date within the forecast range.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block border-2 py-4 px-6 rounded-2xl bg-gray-900 hover:border-green-400 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      );
    }

    // return weather card with addition of day and temp
    return (
      <DailyWeatherCard
        weatherCode={weatherData.current.weatherCode}
        hourlyData={hourlyData}
        dailyData={dailyData}
        date={date}
      />
    );
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : 'Unable to fetch weather at this time';
    return (
      <div className="w-full max-w-4xl mx-auto space-y-4 p-4 text-white font-electrolize font-medium tracking-wide">
        <div className="bg-gradient-to-br from-red-900 to bg-red-800 rounded-3xl p-6 flex flex-col text-center shadow-lg">
          <h3 className="text-2xl mb-4">Error Loading Weather</h3>
          <p className="text-lg opacity-80">{errorMessage}</p>
          <p className="text-sm opacity-60 mt-2">Please try again later.</p>
          <Link
            href="/"
            className="mt-6 inline-block border-2 py-4 px-6 rounded-2xl bg-gray-900 hover:border-green-400 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
}
