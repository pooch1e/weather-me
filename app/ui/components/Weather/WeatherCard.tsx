interface WeatherDataItem {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  current_units: {
    time: string,
    interval : string
    tempareture_2m : string,
    apparent_temperature: string,
    rain: string,
    precipitation: string,
    weather_code: string
  },
  current: {
    time: string,
    interval: number,
    temperature_2m:number,
    apparent_temperature: number,
    rain: number,
    precipitation: number,
    weather_code: number
  },
}

interface WeatherDataProps {
  weatherData: WeatherDataItem[];
}

export default function WeatherCard({ weatherData }: WeatherDataProps) {
  return (
    <div>
      {weatherData.map((item, index) => {
        return (
          <div key={index}>
            Weather Data
            <ul>
              <li>{item.timezone}</li>
              <li>{item.current_units.time}</li>
              <li>Current Temperature: {item.current_units.tempareture_2m}</li>
              <li>Apparent Temperature: {item.current_units.apparent_temperature}</li>
              <li>Rain: {item.current_units.rain}</li>

            </ul>
          </div>
        );
      })}
    </div>
  );
}
