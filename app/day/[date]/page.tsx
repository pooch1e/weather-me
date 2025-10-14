import { fetchWeatherData } from "@/app/lib/weather/WeatherService";

export default async function DayPage(({ params }: { params: { date: string } }) {
  const {date} = params;
  try {
    const weatherData = await fetchWeatherData(51.5085, -0.1257); // get cached data
    // filter data for day
    // return weather card with addition of day and temp
    
  } catch (err: unknown) {
    
  }


}