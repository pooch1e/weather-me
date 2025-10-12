'use client';

import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/Weather/WeatherCard';
import { useState, useTransition } from 'react';
import type { HomePageContainerProps } from './types';
import { fetchWeatherData } from '@/app/lib/weather/WeatherService';
import type { ProcessedWeatherData } from '@/app/lib/weather/weatherTypes';
import { geoLocateLocation } from '@/app/lib/Geocoding/geocodingService';

export default function HomePageContainer({
  weatherData,
}: HomePageContainerProps) {
  console.log(weatherData);
  const [currentWeatherData, setCurrentWeatherData] =
    useState<ProcessedWeatherData>(weatherData);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isError, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // will also handle re-fetching from API
  const handleFetchDataFromSearch = async (query: string) => {
    startTransition(async () => {
      setSearchQuery(query);
      setIsSearching(true);
      setError(null);
      try {
        const { lat, long } = await geoLocateLocation(query);

        const response = await fetchWeatherData(lat, long); // using london as default atm
        setCurrentWeatherData(response);
      } catch (err: unknown) {
        console.error('Error fetching weather:', err);
        setError('Failed to fetch weather data. Please try again.');
      } finally {
        setIsSearching(false);
      }
    });
  };

  // add styling here
  return (
    <main>
      <SearchBar onSearch={handleFetchDataFromSearch} />
      {!isPending && <WeatherCard weatherData={currentWeatherData} />}
    </main>
  );
}
