import Layout from "./components/layout/Layout";
import Heading from "./components/ui/Heading";
import SearchItem from "./components/ui/SearchItem";
import WeatherList from "./components/weather/WeatherList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading>Weather App</Heading>
      <Layout>
        <SearchItem />
        <WeatherList />
      </Layout>
    </div>
  );
}

export default App;
