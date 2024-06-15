import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="cafcf71a849994d511edb0f0ab726aac";
    let getWeatherInfo=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result= {
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
        
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo=await getWeatherInfo();
            updateInfo(newinfo);

        }catch{
            setError(true);

        }

    }
    return (
        <div className="SearchBox">
            <h3>Weather App by Sreyash</h3>
            <form onSubmit={handleSubmit}>
            <TextField  className="search-d" id="city" label="City Name" variant="outlined"
            value={city}
            required
            onChange={handleChange}
            />
            <br></br>
            <br></br>
            <Button className='search-btn' variant="contained" type="submit" style={{ backgroundColor: 'black', color: 'white' }}>Search</Button>

            {error && <p style={{color:"red"}}>No such place in our app</p>}
            </form>
        </div>
    )
}