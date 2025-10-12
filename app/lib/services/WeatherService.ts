import { mapDailyTimeToTemp } from '../utils/mapDailyTimeToTemp';
import { mapHourlyTimeToTemp } from '../utils/mapHourlyTimeToTemp';
const WEATHER_BASE_URL = 'https://api.open-meteo.com/v1/forecast?';

export const processWeatherData = (data) => {
  return {
    current: {
      temperature: data.current.temperature_2m,
      apparentTemperature: data.current.apparent_temperature,
      weatherCode: data.current.weather_code,
    },
    hourly: mapHourlyTimeToTemp(data.hourly.time, data.hourly.temperature_2m),
    daily: mapDailyTimeToTemp(
      data.daily.time,
      data.daily.temperature_2m_max,
      data.daily.temperature_2m_min
    ),
  };
};

// !!! Change this to work for input long/lat and timezone when searching different areas

export const fetchWeatherData = async (lat: number, long: number) => {
  const params = new URLSearchParams({
    latitute: lat.toString(),
    longitude: long.toString(),
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    hourly: 'temperature_2m',
    current:
      'temperature_2m,apparent_temperature,rain,precipitation,weather_code',
    timezone: 'Europe/London',
  });

  try {
    const response = await fetch(`${WEATHER_BASE_URL} + ${params.toString()}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const rawData = response.json();
    console.log('raw data', rawData);
    const convertedData = processWeatherData(rawData);
    console.log('converted data', convertedData);
    return convertedData;
  } catch (err: any) {
    throw err;
  }
};
