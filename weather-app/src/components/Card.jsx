export default function Card({ apiResults }) {
  const { current, location } = apiResults;
  // api returns two objects

  return (
    <div>
      <p>
        {location.name}, {location.country}
      </p>
      <p>
        Temperature: {current.temp_c}&#8451; (feels like {current.feelslike_c}
        &#8451;)
      </p>
      <p>Forecast: {current.condition.text}</p>
      <p>Humidity: {current.humidity}</p>
    </div>
  );
}
