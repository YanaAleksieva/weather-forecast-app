import WeatherItem from "../WeatherItem";

import classes from "./WeatherList.module.css";

const WeatherList = () => {
  return (
    <ul className={classes.list}>
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
    </ul>
  );
};

export default WeatherList;
