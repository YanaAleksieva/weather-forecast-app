import { Fragment } from "react";
import DescriptionItem from "../../ui/DescriptionItem";
import Heading from "../../ui/Heading";
import WeatherItem from "../WeatherItem";

import classes from "./WeatherList.module.css";

type WeatherListProps = {
  weatherData: any[]; // fix type
  location: string;
};

const WeatherList = (props: WeatherListProps) => {
  const { weatherData, location } = props;

  return (
    <Fragment>
      {weatherData ? (
        <div className={classes.container}>
          <Heading>5-day forecast for Timezone: {location}</Heading>
          <DescriptionItem>
            <div>Date</div>
            <div>Temp Min</div>
            <div>Temp Max</div>
            <div>Weather</div>
          </DescriptionItem>
          <ul className={classes.list}>
            {weatherData.map((day) => (
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
      ) : (
        <p>Loading</p>
      )}
    </Fragment>
  );
};

export default WeatherList;
