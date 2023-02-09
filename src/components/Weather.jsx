import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherContainer, Temp, City } from "./WeatherStyles";

// api for data
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=delhi&units=imperial&appid=9ec40ce7bc3a18c4d7e48afcfb47ed76";


const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // development only
  // console.log(data);

  //   no data found
  if (!data) return null;

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>  {/* only desired data from weather api */}
      <City>Delhi, India</City>
    </WeatherContainer>
  );
};

export default Weather;
