import { useState } from "react";
import "./App.css";
const api = {
  key: "8ab4fe8fbb68ea7333f16c1696749a22",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchHandle = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setWeather(result);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div className="input-div">
          <input
            type="text"
            placeholder="Enter Your City"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => searchHandle()}>Search</button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <p> {weather.name} </p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
