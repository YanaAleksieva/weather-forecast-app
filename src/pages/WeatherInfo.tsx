import { Fragment } from "react";
import useSWR from "swr";

import SearchItem from "../components/ui/SearchItem";
import WeatherList from "../components/weather/WeatherList";
import CurrentWeather from "../components/weather/CurrentWeather";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const WeatherInfo = () => {
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?q=Sofia&appid=${process.env.REACT_APP_WEATHER_KEY}`,
    fetcher
  );

  if (data) {
    console.log(data);
  }
  if (error) {
      console.log(error);
  };

  return (
    <Fragment>
      <CurrentWeather />
      <SearchItem />
      <WeatherList />
    </Fragment>
  );
};

export default WeatherInfo;
