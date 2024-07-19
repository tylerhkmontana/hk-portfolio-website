"use client";

import styles from "./WeatherUI.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "95e1426f2cc4d186ea30416c925a8393";

export default function WeatherUI({ col_start, col_end, row_start, row_end }) {
  const [geoLoc, setGeoLoc] = useState({
    lat: 40.748817,
    lon: -73.985428,
  });

  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoLoc({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }

    axios
      .get(
        `${apiUrl}lat=${geoLoc.lat}&lon=${geoLoc.lon}&appid=${apiKey}&units=imperial`
      )
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function weatherCodeToGIF(code) {
    console.log(code)
   
      if(code >= 200 && code <= 232)
        return "/weather_gifs/thunderstorm.gif";
      else if(code >= 300 && code <= 511)
        return "/weather_gifs/rain.gif";
      else if(code >= 521 && code <= 531)
        return "/weather_gifs/shower rain.gif";
      else if(code >= 600 && code <= 622)
        return "/weather_gifs/snow.gif";
      else if(code >= 701 && code <= 781)
        return "/weather_gifs/hazy.gif";
      else if(code === 800)
        return "/weather_gifs/clear sky.gif";
      else if(code === 801)
        return "/weather_gifs/few clouds.gif";
      else if(code === 802)
        return "/weather_gifs/scattered clouds.gif";
      else if(code === 803 || code === 804)
        return "/weather_gifs/broken clouds.gif";
  }

  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.weather_ui} style={grid_template}>
      {weather ? (
        <>
          <div className={styles.weather_gif}>
            <img
              src={weatherCodeToGIF(weather.weather[0].id)}
              width={0}
              height={0}
              alt="weather gif"
            />
          </div>
          <div className={styles.weather_info}>
            <div className={styles.temp}>
              <h4>{Math.ceil(weather.main.temp)} °F</h4>
              <p>{weather.weather[0].description}</p>
            </div>
            
            <div className={styles.loc_date}>
              <h3>{weather.name}</h3>
              <p>{new Date().toString().split(" ").slice(0, 4).join(" ")}</p>
            </div>


            {/* <div className={styles.detail}>
              <div>
                <h5>Wind</h5>
                <p>{Math.ceil(weather.wind.speed)}m/h</p>
              </div>
              <div>
                <h5>Humidity</h5>
                <p>{weather.main.humidity}%</p>
              </div>
              <div>
                <h5>visibility</h5>
                <p>{Math.ceil(weather.visibility / 1000)}km</p>
              </div>
            </div> */}
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
