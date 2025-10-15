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
        } catch (err: unknown) {
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
    <main className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center p-2 sm:p-4 relative overflow-hidden">

      <div className="hidden sm:block absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-gray-900/30 backdrop-blur-2xl rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 shadow-2xl border border-gray-800/50 space-y-4 sm:space-y-6 text-white">
          {/* Search */}
          <div className="bg-black/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
            <SearchBar
              onSearch={handleFetchDataFromSearch}
              isSearching={isSearching}
          />
          </div>

          
          {isError && (
            <div className="bg-amber-500/10 border border-amber-500/50 text-amber-400 px-4 py-3 rounded-2xl backdrop-blur-sm">
              {isError}
            </div>
          )}


          <div
            className={`relative ${
              isPending ? 'opacity-50 pointer-events-none' : ''
            }`}>
            <WeatherCard
              weatherData={currentWeatherData}
              searchQuery={searchQuery}
            />
            {isPending && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md rounded-3xl">
                <div className="text-white font-electrolize tracking-wide text-xl">
                  LOADING...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
