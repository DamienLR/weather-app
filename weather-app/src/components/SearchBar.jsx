import { useState, useCallback } from "react";
import Card from "./Card";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [apiResults, setApiResults] = useState({
    noNewSearchTerm: true,
  });

  const fetchData = useCallback(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=54bb3ee2ef714beaa14124525212910&q=${searchTerm}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setApiResults(data));
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const conditionallyRenderCard = () => {
    if (apiResults.noNewSearchTerm === true) {
      return (
        <div>
          <p>Enter a city</p>
        </div>
      );
    } else {
      return (
        <div>
          <Card apiResults={apiResults} />
        </div>
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={searchTerm || ""}
          type="text"
          placeholder="Search for a city..."
          name="search"
        />
        <button type="submit">Submit</button>
      </form>
      {conditionallyRenderCard()}
    </div>
  );
}

// 54bb3ee2ef714beaa14124525212910 - api key
// http://api.weatherapi.com/v1/current.json?key=54bb3ee2ef714beaa14124525212910 &q=London&aqi=no
// ^ api call url
