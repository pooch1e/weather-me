import { fetchWeatherData } from '@/app/lib/weather/WeatherService';
import DailyWeatherCard from '@/app/ui/components/Weather/DailyWeather/DailyWeatherCard';
import WeatherCard from '@/app/ui/components/Weather/WeatherCard';

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

    // return weather card with addition of day and temp
    return <DailyWeatherCard hourlyData={hourlyData} dailyData={dailyData?.maxTemp} />;
  } catch (err: unknown) {}
}
