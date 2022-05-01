import Heading from "../../ui/Heading";
import WeatherItem from "../WeatherItem";

import classes from "./WeatherList.module.css";

const WeatherList = () => {
  const weatherData = [
    { date: "12/03/2020", tempMin: "15", tempMax: "17", weatherDesc: "cloudy" },
    { date: "12/03/2020", tempMin: "15", tempMax: "17", weatherDesc: "cloudy" },
    { date: "12/03/2020", tempMin: "15", tempMax: "17", weatherDesc: "cloudy" },
    { date: "12/03/2020", tempMin: "15", tempMax: "17", weatherDesc: "cloudy" },
    { date: "12/03/2020", tempMin: "15", tempMax: "17", weatherDesc: "cloudy" },
  ];

  return (
    <div className={classes.container}>
      <Heading>Sofia</Heading>
      <ul className={classes.list}>
        {weatherData.map((day) => (
          <WeatherItem
            key={day.date}
            date={day.date}
            tempMin={day.tempMin}
            tempMax={day.tempMax}
            weatherDesc={day.weatherDesc}
          />
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
