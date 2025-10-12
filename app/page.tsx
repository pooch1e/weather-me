import WeatherCard from "./ui/components/Weather/WeatherCard";
import { fetchWeatherData } from "./lib/weather/WeatherService";
export default async function Home() {
  try {
    const weatherData = await fetchWeatherData(51.5085, -0.1257);

    return <WeatherCard weatherData={weatherData} />

  } catch (err: any) {
    console.log(err, 'error fetching from weather api');
    
  }
}
