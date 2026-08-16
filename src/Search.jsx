import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import "./Search.css"
export default  function Search({updateInfo}){

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const  API_KEY = "e436f15706ad4630654e2c28f216b909";

    let getWeatherInfo = async() => {

    try{  
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonRes = await response.json();
       let result =  {
        city: city,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description
       };
       return result;
    }catch(err){
        throw err;
    }
};

    let [city, setCity] = useState("");
    let [error , setError] = useState(false);

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className='Search'>
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color: "red"}}>No such place in our API</p>}
            </form>
        </div>
    );
}