import { useState, useEffect } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      const mockWeatherData = {
        weather: [{ description: "Partly cloudy" }],
        main: { temp: 20 },
        name: "India"
      };
      setWeather(mockWeatherData);
    }, 1000); // Simulate network delay
  }, []);

  return (
    <div className="weather-widget">
      {weather ? (
        <p>
          🌤️ {weather.name}: {weather.weather[0].description}, {weather.main.temp}°C
        </p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
