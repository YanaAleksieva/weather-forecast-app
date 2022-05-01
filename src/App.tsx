import Layout from "./components/layout/Layout";
import Heading from "./components/ui/Heading";
import WeatherInfo from "./pages/WeatherInfo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading>Weather App</Heading>
      <Layout>
        <WeatherInfo />
      </Layout>
    </div>
  );
}

export default App;
