import Layout from "./components/layout/Layout";
import Heading from "./components/ui/Heading";
import SearchItem from "./components/ui/SearchItem";
import WeatherList from "./components/weather/WeatherList";

import "./App.css";
import CurrentWeather from "./components/weather/CurrentWeather";

function App() {
  return (
    <div className="App">
      <Heading>Weather App</Heading>
      <Layout>
        <CurrentWeather />
        <SearchItem />
        <WeatherList />
      </Layout>
    </div>
  );
}

export default App;
