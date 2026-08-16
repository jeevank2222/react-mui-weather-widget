import Search from "./Search.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        feelsLike:24.84,
        weather: "Rainy"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}