import { Fragment, useState, useEffect } from "react";

import SearchItem from "../components/ui/SearchItem";
import WeatherList from "../components/weather/WeatherList";
import CurrentWeather from "../components/weather/CurrentWeather";
import { getLocation } from "../helpers/geo-coordinates";
import { useWeatherInfo, useCityLocation } from "../helpers/api-utils";

const WeatherInfo = () => {
  const [inputFilter, setInputFilter] = useState("Sofia, BG");
  const [geolocation, setGeolocation] = useState<string[]>([]);

  function onFilterHandler(filteredCity: string) {
    setInputFilter(filteredCity);
  }

  const cityArray = inputFilter.split(",");
  console.log(cityArray);

  const cityData = useCityLocation({
    city: cityArray[0],
    country: cityArray[1],
  });

  console.log(cityData);

  const weatherData = useWeatherInfo({
    lat: cityData.data[0],
    lon: cityData.data[1],
  });

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
      {currentWeatherData.data ? (
        <CurrentWeather
          weatherData={currentWeatherData.data.current}
          location={currentWeatherData.data.timezone}
        />
      ) : currentWeatherData.error ? (
        <Fragment>
          <p>No data available</p>
        </Fragment>
      ) : (
        <p>Loading</p>
      )}
      <SearchItem onFilter={onFilterHandler} />
      {weatherData.data ? (
        <WeatherList
          weatherData={weatherData.data.daily.slice(0, 5)}
          location={weatherData.data.timezone}
        />
      ) : weatherData.error ? (
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
