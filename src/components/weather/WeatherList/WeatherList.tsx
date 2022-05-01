import { Fragment } from "react";
import Heading from "../../ui/Heading";
import WeatherItem from "../WeatherItem";
import useSWR from "swr";

import classes from "./WeatherList.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const WeatherList = () => {
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=42.6912451&lon=23.3113293&exclude=alerts&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`,
    fetcher
  );

  return (
    <div className={classes.container}>
      <Heading>5-day forecast for: Sofia</Heading>
      {data ? (
        <ul className={classes.list}>
          {data.daily.slice(0, 5).map((day: any) => (
            <WeatherItem
              key={day.dt}
              date={day.dt}
              weatherDesc={day.weather[0].description}
              tempMin={day.temp.min}
              tempMax={day.temp.max}
            />
          ))}
        </ul>
      ) : error ? (
        <Fragment>
          <p>No data available</p>
        </Fragment>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default WeatherList;
