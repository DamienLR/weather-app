import SearchBar from "./components/SearchBar";
import "./css/App.css";

export default function App() {
  return (
    <div className="app">
      <h2 className="hero__header">Simple Weather</h2>
      <SearchBar />
    </div>
  );
}
