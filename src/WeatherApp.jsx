import React, { useEffect, useState } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(35);
  const [lon, setLon] = useState(139);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );

      const data = await res.json();
      setWeather(data.current_weather);
    } catch (error) {
      console.log("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Weather App</h2>

      {weather && (
        <p>
          Temp: {weather.temperature}°C | Wind: {weather.windspeed} km/h
        </p>
      )}

      <input
        type="number"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />

      <input
        type="number"
        placeholder="Longitude"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
      />

      <button onClick={fetchWeather}>Get Weather</button>
    </div>
  );
}