import classes from "./WeatherItem.module.css";

type WeatherItemProps = {
  date: string;
  tempMin: string;
  tempMax: string;
  weatherDesc: string;
};

const WeatherItem = (props: WeatherItemProps) => {
  return (
    <li className={classes.item}>
      <div>{props.date}</div>
      <div>{props.tempMin}</div>
      <div>{props.tempMax}</div>
      <div>{props.weatherDesc}</div>
    </li>
  );
};

export default WeatherItem;
