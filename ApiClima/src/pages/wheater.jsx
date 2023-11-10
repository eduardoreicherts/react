import axios from "axios";
import { useState } from "react";
import "./index.css"

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "acdf590a9b8f200ebd9613a5a6bf69f5";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
    const response = await axios.get(url);
    setWeatherData(response.data);
    console.log(url);
    setCity("");
  };

  const refresh = () => {
    setWeatherData(null);
  };

  return (
    <>
      {!weatherData && (
        <div className="inputCard">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite a cidade"
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="submitBtn" type="submit">Buscar</button>
          </form>
        </div>
      )}
      {weatherData !== null && (
        <div className="mainCard">
          <div className="weatherCard">
          <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> {weatherData.name} - {weatherData.sys.country}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          />
          <p className="ds">{weatherData.weather[0].description}</p>
          <h1>{Math.floor(weatherData.main.temp)}°</h1>
          </div>
          <p className="max_min">Min: {Math.floor(weatherData.main.temp_min)}°    Max: {Math.floor(weatherData.main.temp_max)}°</p>
          <button className="refresh" onClick={refresh}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button>
        </div>
      )}
    </>
  );
};

export default Weather;