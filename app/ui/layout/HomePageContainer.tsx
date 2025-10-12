'use client';

import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/Weather/WeatherCard';
import { useState, useEffect } from 'react';
import type { HomePageContainerProps } from './types';
import { fetchWeatherData } from '@/app/lib/weather/WeatherService';
import type { ProcessedWeatherData } from '@/app/lib/weather/weatherTypes';

export default function HomePageContainer({
  weatherData,
}: HomePageContainerProps) {
  console.log(weatherData);
  const [currentWeatherData, setCurrentWeatherData] =
    useState<ProcessedWeatherData>(weatherData);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isError, setError] = useState<string | null>(null);

  // mount initial weather data
  useEffect(() => {
    setCurrentWeatherData(weatherData);
  }, [weatherData]);

  // will also handle re-fetching from API
  const handleFetchDataFromSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    setError(null);
    try {
      // add Geocoding somehow

      const response = await fetchWeatherData(51.5085, -0.1257); // using london as default atm
      setCurrentWeatherData(response);
    } catch (err: any) {
      console.error('Error fetching weather:', err);
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  // add styling here
  return (
    <main>
      <SearchBar onSearch={setSearchQuery} />
      <WeatherCard weatherData={currentWeatherData} />
    </main>
  );
}
