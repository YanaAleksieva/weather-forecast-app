import classes from "./WeatherItem.module.css";

const WeatherItem = () => {
  return (
    <li className={classes.item}>
      <time>15:44PM</time>
      <div>15</div>
      <div>17</div>
      <div>cloudy</div>
    </li>
  );
};

export default WeatherItem;
