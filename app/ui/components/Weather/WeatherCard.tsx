interface weatherDataItem {
  id: number;
  name: string;
}

interface WeatherDataProps {
  weatherData: weatherDataItem;
}

export default function WeatherCard({ weatherData }: WeatherDataProps[]) {
  return (
    <div>
      {weatherData.map((item) => {
        <div key={item.id}>
          <ul>{item.name}</ul>
        </div>;
      })}
    </div>
  );
}
