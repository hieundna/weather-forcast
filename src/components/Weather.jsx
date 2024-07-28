import moment from "moment";
import Sunny from "../assets/img/sun.png";
import Clouds from "../assets/img/cloud.png";
import { Constants } from "../services";
import React from "react";
const Weather = (props) => {
  const { weather } = props;
  return (
    <div className="weather">
      <div className="temperature-wrap">
        <p>Today's Weather</p>
        <div className="temperature-no">{parseInt(weather.main.temp)}°</div>
        <div className="humidity-wrap">
          <p>
            H: {parseInt(weather.main.temp_max)}° L:{" "}
            {parseInt(weather.main.temp_min)}°
          </p>
        </div>
        <div className="current-city">
          {`${weather.name}, ${weather.sys.country}`}
        </div>
      </div>
      <div className="weather-state-wrap">
        <img
          src={weather?.weather?.[0]?.main === "Clear" ? Sunny : Clouds}
          width={300}
          height={300}
          alt="weather-icon"
        />
        <div className="weather-detail">
          <p>{moment().format(Constants.TIME_FORMAT)}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>{weather?.weather?.[0]?.main}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Weather);
