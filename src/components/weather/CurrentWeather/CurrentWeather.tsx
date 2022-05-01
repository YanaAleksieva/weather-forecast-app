import Heading from "../../ui/Heading";

import classes from "./CurrentWeather.module.css";

const CurrentWeather = () => {
  return (
    <div className={classes.list}>
      <Heading>Current Weather: Sofia</Heading>
      <div className={classes.item}>
        <div>Temp: 15</div>
        <div>Weather: cloudy</div>
        <div>Sunrise: 08:10PM</div>
        <div>Sunset: 06:23AM</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
