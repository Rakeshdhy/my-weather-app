import React, { useState } from 'react';
import "./WeatherApp.css";
import SearchIcon from '../Assets/search.png';
import clearIcon from '../Assets/clear.png';
import CloundIcon from '../Assets/clouds.png';
import DrizzleIcon from '../Assets/drizzle.png';
import RainIcon from '../Assets/rain.png';
import SnowIcon from '../Assets/snow.png';
import WindIcon from '../Assets/wind.png';
import HumidityIcon from '../Assets/humidity.png';



const WeatherApp = () => {

    let apiKey = "bd6b5acd044cb40b3b65f7962800a565";
    const [wicon, setWicon] = useState(CloundIcon)

    const searchBtn = async () =>{
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value === ""){
            return 0;

        }

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${apiKey}`;
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);
        const humidity = document.getElementsByClassName("humidy-percent");
        const wind = document.getElementsByClassName("wind-speed");
        const temp =document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

       humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temp[0].innerHTML= Math.round(data.main.temp) + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon ==="01d" || data.weather[0].icon=== "01n" ){
            setWicon(clearIcon);
        }
        else if(data.weather[0].icon ==="02d" || data.weather[0].icon=== "02n" ){
            setWicon(CloundIcon);
        }
        else if(data.weather[0].icon ==="03d" || data.weather[0].icon=== "03n" ){
            setWicon(DrizzleIcon);
        }
        else if(data.weather[0].icon ==="04d" || data.weather[0].icon=== "04n" ){
            setWicon(DrizzleIcon);
        }
        else if(data.weather[0].icon ==="09d" || data.weather[0].icon=== "09n" ){
            setWicon(RainIcon);
        }
        else if(data.weather[0].icon ==="010d" || data.weather[0].icon=== "010n" ){
            setWicon(RainIcon);
        }
        else if(data.weather[0].icon ==="013d" || data.weather[0].icon=== "013n" ){
            setWicon(SnowIcon);
        }
        else{
            setWicon(clearIcon);

        }

        document.querySelector(".hideBox").style.display = "block"



    }



  return (
    <>
      <div className="container">
            <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon" onClick={()=>{searchBtn()}}>
                <img src={SearchIcon} alt="" />
            </div>
            </div>

                <div className="hideBox">
            <div className="weather-image">
                <img src={wicon} alt=""/>
            </div>

            <div className="weather-temp">
            25°C
            </div>

            <div className="weather-location">
                London
            </div>

            <div className="data-container">
                <div className="element">
                    <img src={HumidityIcon} alt="" className='icon' />
                <div className="data">
                    <div className="humidy-percent">
                        64%
                    </div>
                    <div className="text">Humidity</div>
                </div>
                </div>


                <div className="element">
                <img src={WindIcon} alt="" className='icon' />
                <div className="data">
                    <div className="wind-speed">
                       124 Km/h
                    </div>
                    <div className="text">Wind Speed</div>
                </div>
                </div>


            </div>

            </div>

      </div>
    </>
  )
}

export default WeatherApp
