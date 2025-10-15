import { fetchWeatherData } from '@/app/lib/weather/WeatherService';
import DailyWeatherCard from '@/app/ui/components/Weather/DailyWeather/DailyWeatherCard';

export default async function DayPage({
  params,
}: {
  params: { date: string };
}) {
  const { date } = await params;
  console.log(date, 'date in server')
  try {
    const weatherData = await fetchWeatherData(51.5085, -0.1257); // get cached data

    // filter data for day
    const hourlyData = weatherData.hourly.filter((item) =>
      item.time.startsWith(date)
    );
    //get temp for day
    const dailyData = weatherData.daily.find((item) => item.time === date);


    // return weather card with addition of day and temp
    return <DailyWeatherCard weatherCode={weatherData.current.weatherCode}hourlyData={hourlyData} dailyData={dailyData} date={date} />;
  } catch (err: unknown) {}
}
