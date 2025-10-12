export interface RawCurrentWeather {
  temperature_2m: number;
  apparent_temperature: number;
  weather_code: number;
  rain?: number;
  precipitation?: number;
}

export interface RawHourlyWeather {
  time: string[];
  temperature_2m: number[];
}

export interface RawDailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface RawWeatherApiResponse {
  current: RawCurrentWeather;
  hourly: RawHourlyWeather;
  daily: RawDailyWeather;
}

// processed data types
export interface CurrentWeather {
  temperature: number;
  apparentTemperature: number;
  weatherCode: number;
}

export interface HourlyWeather {
  time: string;
  temperature: number;
}

export interface DailyWeather {
  time: string;
  maxTemp: number;
  minTemp: number;
}

export interface ProcessedWeatherData {
  current: CurrentWeather;
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}
