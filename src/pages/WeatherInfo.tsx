import { Fragment, useState, useEffect } from "react";

import SearchItem from "../components/ui/SearchItem";
import WeatherList from "../components/weather/WeatherList";
import CurrentWeather from "../components/weather/CurrentWeather";
import { getLocation } from "../helpers/geo-coordinates";
import { useWeatherInfo, useCityLocation } from "../helpers/api-utils";

const WeatherInfo = () => {
  const [inputFilter, setInputFilter] = useState("Sofia, BG");
  const [geolocation, setGeolocation] = useState<GeolocationCoordinates | undefined>(undefined);

  function onFilterHandler(filteredCity: string) {
    setInputFilter(filteredCity);
  }

  const cityArray = inputFilter.split(",");

  const cityData = useCityLocation({
    city: cityArray[0],
    country: cityArray[1],
  });

  const weatherData = useWeatherInfo({
    lat: cityData.data?.[0].lat,
    lon: cityData.data?.[0].lon,
  });

  useEffect(() => {
    getLocation()
      .then((result) => setGeolocation(result.coords))
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const currentWeatherData = useWeatherInfo({
    lat: geolocation?.latitude,
    lon: geolocation?.longitude,
  });

  return (
    <Fragment>
      {isWeatherDataAvailable(currentWeatherData.data) ? (
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
      {isWeatherDataAvailable(weatherData.data) ? (
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

function isWeatherDataAvailable(data: any) {
  return data !== undefined && data.cod === undefined
}

export default WeatherInfo;
