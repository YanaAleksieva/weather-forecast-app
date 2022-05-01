import { Fragment, useState } from "react";
import useSWR from "swr";

import SearchItem from "../components/ui/SearchItem";
import WeatherList from "../components/weather/WeatherList";
import CurrentWeather from "../components/weather/CurrentWeather";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const WeatherInfo = () => {
  const [inputFilter, setInputFilter] = useState("Sofia");

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?q=Sofia&appid=${process.env.REACT_APP_WEATHER_KEY}`,
    fetcher
  );

  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }

  function onFilterHandler(filteredCity: string) {
    setInputFilter(filteredCity);
  }

  console.log(inputFilter);

  return (
    <Fragment>
      <CurrentWeather />
      <SearchItem onFilter={onFilterHandler} />
      <WeatherList />
    </Fragment>
  );
};

export default WeatherInfo;
