import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Nowhere",
    feelsLike: 24.46,
    humidity: 78,
    temp: 23.97,
    tempMax: 23.97,
    tempMin: 23.97,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{textAlign: "center"}}>
      <h2 style={{color: "black"}}>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={WeatherInfo}/>
    </div>
  );
}
