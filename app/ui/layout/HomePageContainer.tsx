'use client';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/Weather/WeatherCard';
import { useEffect, useState, useTransition } from 'react';
import type { HomePageContainerProps } from './types';
import { fetchWeatherData } from '@/app/lib/weather/WeatherService';
import type { ProcessedWeatherData } from '@/app/lib/weather/weatherTypes';
import { geoLocateLocation } from '@/app/lib/Geocoding/geocodingService';
import { useGeolocation } from '@/app/lib/hooks/useGeolocation';

export default function HomePageContainer({
  weatherData,
}: HomePageContainerProps) {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<ProcessedWeatherData>(weatherData);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isError, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const { coordinates: userLocation, isLoading: isGeoLoading } =
    useGeolocation();

  // handle user location on mount first
  useEffect(() => {
    if (userLocation && !isGeoLoading) {
      const updateLocation = async () => {
        try {
          const response = await fetchWeatherData(
            userLocation.lat,
            userLocation.lon
          );
          setCurrentWeatherData(response);
          setSearchQuery('Your Location');
        } catch (err) {
          // fallback to London
          setSearchQuery('London');
        }
      };
      updateLocation();
    }
  }, [userLocation, isGeoLoading]);

  const handleFetchDataFromSearch = async (query: string) => {
    startTransition(async () => {
      setSearchQuery(query);
      setIsSearching(true);
      setError(null);
      try {
        const { lat, long } = await geoLocateLocation(query);

        // using London as default location
        const response = await fetchWeatherData(lat, long);
        setCurrentWeatherData(response);
      } catch (err: unknown) {
        console.error('Error fetching weather:', err);
        setError('Failed to fetch weather data. Please try again.');
      } finally {
        setIsSearching(false);
      }
    });
  };

  return (
    <main className="bg-black min-h-screen">
      <section className="p-6">
        <div className="mx-auto max-w-lg">
          <SearchBar onSearch={handleFetchDataFromSearch} isSearching={isSearching} />
        </div>
      </section>

      {isError && (
        <section className="p-6">
          <div className="mx-auto max-w-lg">
            <div className="bg-gray-900/50 border border-amber-400 text-amber-400 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
              {isError}
            </div>
          </div>
        </section>
      )}

      <section className="p-6">
        <div
          className={`mx-auto max-w-lg space-y-6 ${
            isPending ? 'opacity-50 pointer-events-none' : ''
          }`}>
          <WeatherCard
            weatherData={currentWeatherData}
            searchQuery={searchQuery}
          />
        </div>
        {isPending && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-green-400 font-electrolize tracking-wide">
              LOADING...
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
