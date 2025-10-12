
import { fetchWeatherData } from "./lib/weather/WeatherService";
import HomePageContainer from "./ui/layout/HomePageContainer";
export default async function Home() {
  try {
    const weatherData = await fetchWeatherData(51.5085, -0.1257);

    return <HomePageContainer weatherData={weatherData} />

  } catch (err: any) {
    console.log(err, 'error fetching from weather api');
    
  }
}
