import { useState, useCallback } from "react";
import Card from "./Card";
import "../css/SearchBar.css";

export default function SearchBar() {
  const keyAPI = "54bb3ee2ef714beaa14124525212910";
  // remember to hide the key in a proper project

  const [searchTerm, setSearchTerm] = useState("");
  const [apiResults, setApiResults] = useState({
    noNewSearchTerm: true,
  });

  const fetchData = useCallback(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${keyAPI}&q=${searchTerm}&aqi=no`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setApiResults(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
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
          <p className="paragraph">Enter a city</p>
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
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={searchTerm || ""}
          type="text"
          placeholder="Search for a city..."
          name="search"
          className="search-bar__input form-styling"
        />
        <button className="search-bar__button form-styling" type="submit">
          Submit
        </button>
      </form>
      {conditionallyRenderCard()}
    </div>
  );
}

// 54bb3ee2ef714beaa14124525212910 - api key
// http://api.weatherapi.com/v1/current.json?key=54bb3ee2ef714beaa14124525212910 &q=London&aqi=no
// ^ api call url
