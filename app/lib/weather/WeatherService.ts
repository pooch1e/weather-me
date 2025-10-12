'use server';
import { mapDailyTimeToTemp } from './utils/mapDailyTimeToTemp';
import { mapHourlyTimeToTemp } from './utils/mapHourlyTimeToTemp';
import type {
  ProcessedWeatherData,
  RawWeatherApiResponse,
} from './weatherTypes';
const WEATHER_BASE_URL = 'https://api.open-meteo.com/v1/forecast?';

export const processWeatherData = async (
  data: RawWeatherApiResponse
): Promise<ProcessedWeatherData> => {
  return {
    current: {
      temperature: data.current.temperature_2m,
      apparentTemperature: data.current.apparent_temperature,
      weatherCode: data.current.weather_code,
    },
    hourly: mapHourlyTimeToTemp(data.hourly.time, data.hourly.temperature_2m),
    daily: mapDailyTimeToTemp(
      data.daily.time,
      data.daily.temperature_2m_min,
      data.daily.temperature_2m_max
    ),
  };
};

export const fetchWeatherData = async (
  lat: number,
  long: number,
  timezone: string = 'Europe/London'
): Promise<ProcessedWeatherData> => {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: long.toString(),
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    hourly: 'temperature_2m',
    current:
      'temperature_2m,apparent_temperature,rain,precipitation,weather_code',
    timezone,
  });

  try {
    const response = await fetch(`${WEATHER_BASE_URL}${params.toString()}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const rawData = await response.json();
    console.log('raw data', rawData);
    const convertedData = await processWeatherData(rawData);
    console.log('converted data', convertedData);
    return convertedData;
  } catch (err: unknown) {
    throw new Error(`Failed to fetch weather data: code ${err.status}`);
  }
};
