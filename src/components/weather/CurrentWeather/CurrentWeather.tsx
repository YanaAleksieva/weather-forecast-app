import Heading from "../../ui/Heading";

import classes from "./CurrentWeather.module.css";

// later use other props for details page
type CurrentWeatherProps = {
  weatherData: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: { id: number; main: string; description: string; icon: string }[];
    wind_deg: number;
    wind_speed: number;
  };
  location: string;
};

const CurrentWeather = (props: CurrentWeatherProps) => {
  const { weatherData, location } = props;

  return (
    <div className={classes.list}>
      <Heading>Current Weather: {location}</Heading>
      <div className={classes.item}>
        <div className={classes.row}>
          <div>Temperature: </div>
          <div>{Math.floor(weatherData.temp)}</div>
        </div>
        <div className={classes.row}>
          <div>Weather: </div>
          <div>{weatherData.weather[0].description}</div>
        </div>
        <div className={classes.row}>
          <div>Sunrise:</div>
          <div>
            {new Date(weatherData.sunrise * 1000).toLocaleTimeString("en-US")}
          </div>
        </div>
        <div className={classes.row}>
          <div>Sunset:</div>
          <div>
            {new Date(weatherData.sunset * 1000).toLocaleTimeString("en-US")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
