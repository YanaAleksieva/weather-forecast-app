# weather-forecast-app
React app that displays the current 5-day weather forecast for a location of your choice. Specify like **Sofia, BG** (city, country code) for accurate search. If not specified like that, forecast for the first found result starting with given text in Search box will be displayed.
By default, forecast for Sofia, Bulgaria is shown.

App takes your geolocation and displays temperature, sunrise and sunset expected.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements to run

### Add .env file

The .env file should contain API key for Open Weather Map API (keep in mind that once key is created through your profile in https://openweathermap.org/api/, it needs around an hour to become active).

After creating a API key, add .env file to main directory (e.g. weather-forecast-app/).
File should contain following:

```
REACT_APP_WEATHER_KEY=<YOUR-API-KEY-HERE>
```

### Add node_modules

Run following command in order to install all needed node modules before starting the app:

```
npm install
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Currently no tests available.

Launches the test runner in the interactive watch mode.\

### `npm run build`

Currently the application was not build.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Implement with more time
### Features
* Show details for each day
* Allow users to drill into the hour detail for each day
* Add option for having temperature data in Celcius or Fahrenheit (currently, Celcius is only available)

### Fixes & Technical debt
* Responsive design
* Using API showing the correct location for which forecast/current weather is shown (currently, timezone is shown)
