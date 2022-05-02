import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useWeatherInfo(props) {
  const { lat, lon } = props;

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.status === 404) return;

        // Only retry up to 10 times.
        if (retryCount >= 10) return;

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );
  if (data) {
    return data;
  }
  if (error) {
    return <p>{error}</p>;
  }
}
