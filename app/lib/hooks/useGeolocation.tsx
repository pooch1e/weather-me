'use client';
import { useState, useEffect } from 'react';
interface GeolocationSate {
  coordinates: { lat: number; lon: number } | null;
  isLoading: boolean;
  error: string | null;
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationSate>({
    coordinates: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setState((prev) => ({ ...prev, error: 'Geolocation not enabled' }));
      return;
    }
    setState((prev) => ({ ...prev, isLoading: true }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          isLoading: false,
          error: null,
        });
      },
      (error) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: 'Unable to get your location',
        }));
      }
    );
  }, []);
  return state;
}
