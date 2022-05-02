import { Fragment, useState, useEffect } from "react";
import useSWR from "swr";

import SearchItem from "../components/ui/SearchItem";
import WeatherList from "../components/weather/WeatherList";
import CurrentWeather from "../components/weather/CurrentWeather";
import { getLocation } from "../helpers/geo-coordinates";
import { useWeatherInfo } from "../helpers/api-utils";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const WeatherInfo = () => {
  const [inputFilter, setInputFilter] = useState("Sofia");
  const [geolocation, setGeolocation] = useState<string[]>([]);

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=41.9102416&lon=12.2557995&exclude=alerts&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`,
    fetcher
  );

  function onFilterHandler(filteredCity: string) {
    setInputFilter(filteredCity);
  }

  useEffect(() => {
    getLocation()
      .then((result) => setGeolocation(result))
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const currentWeatherData = useWeatherInfo({
    lat: geolocation[0],
    lon: geolocation[1],
  });

  return (
    <Fragment>
      {currentWeatherData ? (
        <CurrentWeather
          weatherData={currentWeatherData.current}
          location={currentWeatherData.timezone}
        />
      ) : (
        <p>Loading</p>
      )}
      <SearchItem onFilter={onFilterHandler} />
      {data ? (
        <WeatherList
          weatherData={data.daily.slice(0, 5)}
          location={data.timezone}
        />
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
