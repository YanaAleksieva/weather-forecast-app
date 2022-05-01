import classes from "./WeatherItem.module.css";

type WeatherItemProps = {
  date: string;
  tempMin: string;
  tempMax: string;
  weatherDesc: string;
};

const WeatherItem = (props: WeatherItemProps) => {
  const { date, weatherDesc, tempMin, tempMax } = props;

  const humanReadableDate = new Date(+date * 1000).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.item}>
      <div>{humanReadableDate}</div>
      <div>{Math.floor(+tempMin)}</div>
      <div>{Math.floor(+tempMax)}</div>
      <div>{weatherDesc}</div>
    </li>
  );
};

export default WeatherItem;
