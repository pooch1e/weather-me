import WeatherCard from "./ui/components/Weather/WeatherCard";

export default async function Home() {
  const testParamsUrl = {
    baseUrl:
      'https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&hourly=temperature_2m&current=temperature_2m,apparent_temperature,rain,precipitation,weather_code&timezone=Europe%2FLondon',
  };

  try {
    const responses = await fetch(testParamsUrl.baseUrl);

    const data = await responses.json();

    console.log(
      data
    );

    const resultData = [data] // putting in array for example
    return <WeatherCard weatherData={resultData} />
  } catch (err: any) {
    console.log(err, 'error fetching from weather api');
  }
}
