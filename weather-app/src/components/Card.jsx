import "../css/Card.css";

export default function Card({ apiResults }) {
  const { current, location } = apiResults;
  // api returns two objects

  return (
    <div className="card">
      <p className="paragraph">
        {location.name}, {location.country}
      </p>
      <p className="paragraph">
        Temperature: {current.temp_c}&#8451; - feels like {current.feelslike_c}
        &#8451;
      </p>
      <p className="paragraph">Forecast: {current.condition.text}</p>
      <p className="paragraph">Humidity: {current.humidity}</p>
    </div>
  );
}
