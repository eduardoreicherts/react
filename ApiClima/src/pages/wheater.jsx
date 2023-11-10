import axios from "axios";
import { useState } from "react";
import "./index.css"

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "acdf590a9b8f200ebd9613a5a6bf69f5";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt-br`;
    const response = await axios.get(url);
    setWeatherData(response.data);
    console.log(url);
    setCity("");
  };

  return (
    <>
      {!weatherData && (
        <div className="inputCard">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite a cidade..."
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
      )}
      {weatherData !== null && (
        <div className="weatherCard">
          <h6>Tempo agora em </h6>
          <p>{weatherData.name}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            width="50"
          />
          <p>Temperatura atual: {weatherData.main.temp}º</p>
          <p>Clima: {weatherData.weather[0].description}</p>
          <p>Sensação térmica: {weatherData.main.feels_like}</p>
          <p>Temperatura mínima: {weatherData.main.temp_min}</p>
          <p>Temperatura máxima{weatherData.main.temp_max}</p>
        </div>
      )}
    </>
  );
};

export default Weather;