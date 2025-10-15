const GEOCODING_BASE_URL = 'https://nominatim.openstreetmap.org/search';
const USER_AGENT = 'weather-me/1.0';

interface Coordinates {
  lat: number;
  long: number;
  name: string;
}

interface GeocodingResult {
  lat: number;
  lon: number;
  display_name: string;
}

export const geoLocateLocation = async (
  query: string
): Promise<Coordinates> => {
  if (!query.trim()) {
    throw new Error('Search query cannot be empty');
  }

  const url = `${GEOCODING_BASE_URL}?format=json&q=${encodeURIComponent(
    query
  )}&limit=1`;

  const response = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error('Geocoding service unavailable');
  }

  const data: GeocodingResult[] = await response.json();

  return {
    lat: data[0].lat,
    long: data[0].lon,
    name: data[0].display_name,
  };
};
