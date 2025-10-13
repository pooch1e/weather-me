interface WeatherInfo {
  description: string;
  category:
    | 'clear'
    | 'cloudy'
    | 'fog'
    | 'drizzle'
    | 'rain'
    | 'snow'
    | 'thunderstorm'
    | 'showers';
}

export const mapCodeToCondition = (code: number): WeatherInfo => {
  const weatherMap: { [key: number]: WeatherInfo } = {
    0: { description: 'Clear sky', category: 'clear' },
    1: { description: 'Mainly clear', category: 'clear' },
    2: { description: 'Partly cloudy', category: 'cloudy' },
    3: { description: 'Overcast', category: 'cloudy' },
    45: { description: 'Fog', category: 'fog' },
    48: { description: 'Depositing rime fog', category: 'fog' },
    51: { description: 'Light drizzle', category: 'drizzle' },
    53: { description: 'Moderate drizzle', category: 'drizzle' },
    55: { description: 'Dense drizzle', category: 'drizzle' },
    56: { description: 'Light freezing drizzle', category: 'drizzle' },
    57: { description: 'Dense freezing drizzle', category: 'drizzle' },
    61: { description: 'Slight rain', category: 'rain' },
    63: { description: 'Moderate rain', category: 'rain' },
    65: { description: 'Heavy rain', category: 'rain' },
    66: { description: 'Light freezing rain', category: 'rain' },
    67: { description: 'Heavy freezing rain', category: 'rain' },
    71: { description: 'Slight snow fall', category: 'snow' },
    73: { description: 'Moderate snow fall', category: 'snow' },
    75: { description: 'Heavy snow fall', category: 'snow' },
    77: { description: 'Snow grains', category: 'snow' },
    80: { description: 'Slight rain showers', category: 'showers' },
    81: { description: 'Moderate rain showers', category: 'showers' },
    82: { description: 'Violent rain showers', category: 'showers' },
    85: { description: 'Slight snow showers', category: 'showers' },
    86: { description: 'Heavy snow showers', category: 'showers' },
    95: { description: 'Thunderstorm', category: 'thunderstorm' },
    96: {
      description: 'Thunderstorm with slight hail',
      category: 'thunderstorm',
    },
    99: {
      description: 'Thunderstorm with heavy hail',
      category: 'thunderstorm',
    },
  };
  return weatherMap[code] || '';
};
