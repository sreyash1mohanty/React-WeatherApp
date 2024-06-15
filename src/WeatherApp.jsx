import "./WeatherApp.css"
import SearchBox from './SearchBox';
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [WeatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelslike: 33.91,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        humidity: 33,
        weather: "haze",
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    };
    return(
        <div className="WeatherApp">
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
        
    )

}