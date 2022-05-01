import Heading from "../../ui/Heading";
import WeatherItem from "../WeatherItem";

import classes from "./WeatherList.module.css";

type WeatherListProps = {
  weatherData: any[]; // fix type
  location: string
};

const WeatherList = (props: WeatherListProps) => {
  
  return (
    <div className={classes.container}>
      <Heading>5-day forecast for Timezone: {props.location}</Heading>
      <ul className={classes.list}>
        {props.weatherData.map((day) => (
          <WeatherItem
            key={day.dt}
            date={day.dt}
            weatherDesc={day.weather[0].description}
            tempMin={day.temp.min}
            tempMax={day.temp.max}
          />
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
