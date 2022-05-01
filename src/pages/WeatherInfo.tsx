import { Fragment, useState } from "react";
import useSWR from "swr";

import SearchItem from "../components/ui/SearchItem";
import WeatherList from "../components/weather/WeatherList";
import CurrentWeather from "../components/weather/CurrentWeather";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const WeatherInfo = () => {
  const [inputFilter, setInputFilter] = useState("Sofia");

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=41.9102416&lon=12.2557995&exclude=alerts&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`,
    fetcher
  );

  function onFilterHandler(filteredCity: string) {
    setInputFilter(filteredCity);
  }

  console.log(inputFilter);

  return (
    <Fragment>
      <CurrentWeather />
      <SearchItem onFilter={onFilterHandler} />
      {data ? (
        <WeatherList weatherData={data.daily.slice(0, 5)} location={data.timezone} />
      ) : error ? (
        <Fragment>
          <p>No data available</p>
        </Fragment>
      ) : (
        <p>Loading</p>
      )}
    </Fragment>
  );
};

export default WeatherInfo;
